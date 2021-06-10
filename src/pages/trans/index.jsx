import { useState, useEffect } from 'react';
import sty from './index.module.scss';
import cn from 'classnames';
import { useWeb3React } from '@web3-react/core';
import { SUPPORT_NET, CHAIN_ID } from '../../constant';
import { abi, addr, tokenUrl } from '../../constant/contract';
import ConnectModal from '../../components/common/ConnectModal';
import cardImgOne from '../../imgs/card-4.jpg';
// import cardImgTwo from '../../imgs/card-3.jpg';
// import cardImgThree from '../../imgs/card-5.jpg';
// import cardImgFour from '../../imgs/card-6.jpg';
import { getConstract, calculateGasMargin } from '../../utils/index';
import { useSelector, useDispatch } from 'react-redux';
import { parseUnits, formatUnits } from '@ethersproject/units';
import { useAccountBalance } from '../../hooks/useAccountBalance';
// import { useSellCardNumber } from '../../hooks/useSellCardNumber';
function Trans() {
    const web3 = useWeb3React();
    const { account, library, chainId } = useWeb3React();
    // const [seaport, setSeaport] = useState();
    const [nftContract, setNftContract] = useState(null);
    const [walletModal, setWalletModal] = useState(false);
    const dispatch = useDispatch();
    const balance = useAccountBalance();
    console.log(balance);
    // const num = useSellCardNumber();

    // init NFT contract
    useEffect(() => {
        if (chainId && CHAIN_ID[chainId] !== SUPPORT_NET) {
            dispatch({type: 'UPDATE_POPUPS', payload: {show: true, type: 'error', text: 'Unsupported Chain Id'}});
            return;
        }

        if(!account) return;
        const contract = getConstract(addr, abi, library, account);
        setNftContract(contract);
    }, [chainId, account]);

    // buy NFT
    async function buyCard() {
        if (account) {
            if(CHAIN_ID[chainId] !== SUPPORT_NET) return;
            if(balance < 11) return;
            const payFee = parseUnits('10');
            nftContract.saleCUIDCard(tokenUrl, 0, 1, { from: account, gasLimit: '990000', value: payFee }).then(res => {
                console.log(res);
            }).catch(err => {
                dispatch({type: 'UPDATE_POPUPS', payload: {show: true, type: 'error', text: 'User denied transaction signature'}});
            });

        } else {
            setWalletModal(true);
        }
    }

    return (
        <div className={sty.trans}>
            <div className={sty.title}>MARKET</div>
            <div className={cn(sty.box, 'flex flex-wrap')}>
                <div className={sty.item}>
                    <div className={cn(sty.header, 'flex-m')}>
                        <img className={sty.ower} src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg" alt="" />
                        <div className='flex-1'>
                            {/* <div className={sty.text}>Created by</div>
                            <div className={sty.s}>Tran Mau</div> */}
                        </div>
                        <div>
                            <div className={sty.id}>#0250</div>
                            <div className={sty.o}>king </div>
                        </div>
                    </div>
                    <img className={sty.card} src={cardImgOne} alt="" />
                    <div className={cn(sty.price, 'flex-m')}>
                        <div className='flex-1'>
                            <span className={sty.s}>price：</span>
                            <span>10ETH</span>
                        </div>
                        {/* <div>$25000</div> */}
                    </div>
                    <div className={cn(sty.operaBox, 'flex')}>
                        {/* <button className={cn(sty.w, 'flex-1')}>DETAILS</button> */}
                        <button onClick={buyCard} className='flex-1'>
                            {!account ? 'Connect Wallet' : (balance > 11) ? 'BUY' : 'Insufficient Balance'}
                        </button>
                    </div>
                </div>
            </div>
            <ConnectModal visible={walletModal} onClose={() => setWalletModal(false)}></ConnectModal>
        </div>
    );
}

export default Trans;