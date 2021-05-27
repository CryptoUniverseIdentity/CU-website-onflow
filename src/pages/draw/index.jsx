import { useEffect, useState } from "react";
import sty from './index.module.scss';
import cn from 'classnames';
import boxImg from '../../imgs/box.png';
import { abi, addr, tokenUrl } from '../../constant/contract';
import { useWeb3React } from '@web3-react/core';
import ConnectModal from '../../components/common/ConnectModal';
import { SUPPORT_NET, CHAIN_ID } from '../../constant';
import { getConstract, calculateGasMargin } from '../../utils/index';
import { useSelector, useDispatch } from 'react-redux';
function Draw() {
    const [walletModal, setWalletModal] = useState(false);
    // const web3React = useWeb3React();
    const { account, chainId, library } = useWeb3React()
    const [openBox, setOpenBox] = useState(false);
    const blindState = useSelector(state => state.blindTrans);
    const dispatch = useDispatch();
    console.log(6666, blindState);
    // console.log(web3React);

    useEffect(() => {
        if (chainId && CHAIN_ID[chainId] !== SUPPORT_NET) {
            alert('unsupport net');
        }
    }, [chainId]);

    async function clickDraw() {
        if (account) {
            const contract = getConstract(addr, abi, library, account);
            const gas = await contract.estimateGas.createCollectible(tokenUrl, { from: account });
            const safeGas = calculateGasMargin(gas);
            contract.createCollectible(tokenUrl, { from: account, gasLimit: safeGas }).then(res => {
                console.log(1111, res);
                setOpenBox(true);
                dispatch({ type: 'ADD_BLIND_TRANS', payload: {hash: res.hash} });
                alert('开启成功，请稍后到我的钱包查看');
                // library.getTransaction(res.hash).then(trans => {
                //     console.log('trans', trans);
                // })

                // library.getTransactionReceipt("0x926d89c6c94287b83e9c17163e4f878d6574590d0ac607dde012c3aecc31b283").then(trans => {
                //     console.log('rece', trans);
                // })

            }).catch(err => {
                console.log(2222, err)
            });

        } else {
            setWalletModal(true);
        }
    }


    // useEffect(async () => {
    //     let wallet = new welletHandler();
    //     let account = '';
    //     await wallet.connectWeb3();

    //     if (wallet.provider) {
    //         account = await wallet.getUserInfo();
    //         wallet.provider.on("chainChanged", (chainId) => {
    //             console.log(chainId);
    //         });

    //         wallet.provider.on("accountsChanged", accounts => {
    //             console.log(111, accounts);
    //         });
    //     }
    //     setWelletInfo({ account, wallet: wallet });
    // }, []);

    return (
        <div className={sty.draw}>
            <div className={cn(sty.boxWrap, 'flex')}>
                <div className={cn(sty.left, 'tc')}>
                    {/* <img src={boxImg} alt="" /> */}
                    <div className='cubeOuter'>
                        <div className={openBox ? "cube open" : 'cube'}>
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
                        <div className={sty.title}>CU BOX</div>
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
        </div>
    );
}

export default Draw;