import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { parseUnits, formatUnits } from '@ethersproject/units';

import ConnectModal from '../../components/common/ConnectModal';
import DrawWait from '../../components/draw/DrawWait';
import DrawSuc from '../../components/draw/DrawSuc';
import { useAccountBalance } from '../../hooks/useAccountBalance';

import sty from './index.module.scss';
import cn from 'classnames';

import { abi, addr } from '../../constant/contract';
import { SUPPORT_NET, CHAIN_ID } from '../../constant';
import { getConstract, calculateGasMargin } from '../../utils/index';
import { getNftById, getNftInfo } from '../../api/index';

function Draw() {
    const blindState = useSelector(state => state.blindTrans);
    const dispatch = useDispatch();
    const { account, chainId, library } = useWeb3React()
    const [walletModal, setWalletModal] = useState(false);
    const [pendingDraw, setPendingDraw] = useState(false);
    const [sucDraw, setsucDraw] = useState(false);
    const [cardItem, setCardItem] = useState(null);
    const [nftContract, setNftContract] = useState(null);
    const balance = useAccountBalance();

    useEffect(() => {
        if (chainId && CHAIN_ID[chainId] !== SUPPORT_NET) {
            dispatch({type: 'UPDATE_POPUPS', payload: {show: true, type: 'error', text: 'Unsupported Chain Id'}});
            return;
        }

        if(!account) return;
        const contract = getConstract(addr, abi, library, account);
        setNftContract(contract);
    }, [chainId, account]);


    useEffect(async () => {
        if(blindState.status === 'finish') {
            nftContract.callStatic.cucards(blindState.tokenId).then(res => {
                return getNftInfo(res.metadata);
            }).then(res => {
                console.log(11111, res);
                setPendingDraw(false);
                setsucDraw(true);
                setCardItem(res);
            }).catch(err => {
                setPendingDraw(false);
                dispatch({type: 'UPDATE_POPUPS', payload: {
                    show: true, 
                    type: 'success', 
                    text: 'Success! Go to the wallet to view the assets'
                }});
            });
        }
    }, [blindState.status]);

    async function clickDraw() {
        if (account) {
            if(CHAIN_ID[chainId] !== SUPPORT_NET) return;
            if(balance < 0.2) return;
            const payFee = parseUnits('0.1');
            const gas = await nftContract.estimateGas.mintCUIDCard({ from: account, value: payFee });
            const safeGas = calculateGasMargin(gas);
            
            nftContract.mintCUIDCard({ from: account, gasLimit: safeGas, value: payFee }).then(res => {
                dispatch({ type: 'UPDATE_BLIND_TRANS', payload: {hash: res.hash, status: 'pending', tokenId: ''} });
                dispatch({type: 'UPDATE_POPUPS', payload: {
                    show: true, 
                    type: 'success', 
                    text: 'Transaction has been sent', 
                    link: 'https://rinkeby.etherscan.io/tx/' + res.hash,
                    linkText: 'View on Etherscan'
                }});
                setPendingDraw(true);
            }).catch(err => {
                dispatch({type: 'UPDATE_POPUPS', payload: {show: true, type: 'error', text: 'User denied transaction signature'}});
            });

        } else {
            setWalletModal(true);
        }
    }

    return (
        <div className={sty.draw}>
            <div className={cn(sty.boxWrap, 'flex')}>
                <div className={cn(sty.left, 'tc')}>
                    {/* <img src={boxImg} alt="" /> */}
                    <div className='cubeOuter'>
                        <div className={'cube'}>
                            <b className='front'></b>
                            <b className='back'></b>
                            <b className='top'></b>
                            <b className='bottom'></b>
                            <b className='left'></b>
                            <b className='right'></b>
                            <i className='front'></i>
                            <i className='back'></i>
                            <i className='top'></i>
                            <i className='bottom'></i>
                            <i className='left'></i>
                            <i className='right'></i>
                        </div>
                    </div>

                </div>
                <div className={sty.right}>
                    <div className={sty.top}>
                        <div className={sty.title}>CU GACHA</div>
                        <div className={cn(sty.price, 'flex-m')}>
                            <div className={cn('flex-1')}>Price</div>
                            <div className={sty.s}>0.1ETH</div>
                        </div>
                        <div className={cn(sty.amount, 'flex-m')}>
                            <div className='flex-1'>Amount</div>
                            <div>1</div>
                        </div>
                        <button onClick={clickDraw} className={sty.btnGetStarted}>{account ? "OPEN" : "Connect Wallet"}</button>
                    </div>
                    {/* <div className={sty.bottom}>
                        <div className={sty.title}>Abstract</div>
                        <div className={sty.desc}>Activity RulesActivity RulesActivity RulesActivity RulesActivity RulesActivity </div>
                        <div className={sty.more}>For more information, please refer DOCS.</div>
                    </div> */}
                </div>
            </div>

            <ConnectModal visible={walletModal} onClose={() => setWalletModal(false)}></ConnectModal>
            <DrawWait show={pendingDraw} onHide={() => {setPendingDraw(false)}}></DrawWait>
            <DrawSuc show={sucDraw} onHide={() => {setsucDraw(false)}} card={cardItem}></DrawSuc>
        </div>
    );
}

export default Draw;