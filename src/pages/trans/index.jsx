import { useState, useEffect } from 'react';
import sty from './index.module.scss';
import cn from 'classnames';
import cardImg from '../../imgs/card-2.png';
import { getOpenSea } from '../../utils';
import { useWeb3React } from '@web3-react/core';
import { SUPPORT_NET, CHAIN_ID } from '../../constant';
import { abi, addr, tokenUrl } from '../../constant/contract';
import { getOrder } from '../../api';
import { OrderSide } from 'opensea-js/lib/types';
import cardImgOne from '../../imgs/card-4.jpg';
import cardImgTwo from '../../imgs/card-3.jpg';
import cardImgThree from '../../imgs/card-5.jpg';
import cardImgFour from '../../imgs/card-6.jpg';
function Trans() {
    const web3 = useWeb3React();
    const { account, library } = useWeb3React();
    const [seaport, setSeaport] = useState();

    // useEffect(async() => {
    //     let opensea = getOpenSea(library.provider, SUPPORT_NET);
    //     setSeaport(opensea);
    // }, []);

    async function buyCard() {
        // const offer = await seaport.createBuyOrder({
        //     asset: {
        //       tokenId: 3,
        //       tokenAddress: addr
        //     },
        //     accountAddress: account,
        //     startAmount: 1,
        //   })
    }

    return (
        <div className={sty.trans}>
            <div className={sty.title}>Marketplace</div>
            <div className={cn(sty.box, 'flex flex-wrap')}>
                <div onClick={buyCard} className={sty.item}>
                    <div className={cn(sty.header, 'flex-m')}>
                        <img className={sty.ower} src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg" alt="" />
                        <div className='flex-1'>
                            <div className={sty.text}>Created by</div>
                            <div className={sty.s}>Tran Mau</div>
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
                        <div>$25000</div>
                    </div>
                    <div className={cn(sty.operaBox, 'flex')}>
                        <button className={cn(sty.w, 'flex-1')}>DETAILS</button>
                        <button className='flex-1'>SOLD OUT</button>
                    </div>
                </div>
                <div onClick={buyCard} className={sty.item}>
                    <div className={cn(sty.header, 'flex-m')}>
                        <img className={sty.ower} src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg" alt="" />
                        <div className='flex-1'>
                            <div className={sty.text}>Created by</div>
                            <div className={sty.s}>Tran Mau</div>
                        </div>
                        <div>
                            <div className={sty.id}>#0250</div>
                            <div className={sty.o}>king </div>
                        </div>
                    </div>
                    <img className={sty.card} src={cardImgTwo} alt="" />
                    <div className={cn(sty.price, 'flex-m')}>
                        <div className='flex-1'>
                            <span className={sty.s}>price：</span>
                            <span>10ETH</span>
                        </div>
                        <div>$25000</div>
                    </div>
                    <div className={cn(sty.operaBox, 'flex')}>
                        <button className={cn(sty.w, 'flex-1')}>DETAILS</button>
                        <button className='flex-1'>SOLD OUT</button>
                    </div>
                </div>
                <div onClick={buyCard} className={sty.item}>
                    <div className={cn(sty.header, 'flex-m')}>
                        <img className={sty.ower} src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg" alt="" />
                        <div className='flex-1'>
                            <div className={sty.text}>Created by</div>
                            <div className={sty.s}>Tran Mau</div>
                        </div>
                        <div>
                            <div className={sty.id}>#0250</div>
                            <div className={sty.o}>king </div>
                        </div>
                    </div>
                    <img className={sty.card} src={cardImgThree} alt="" />
                    <div className={cn(sty.price, 'flex-m')}>
                        <div className='flex-1'>
                            <span className={sty.s}>price：</span>
                            <span>10ETH</span>
                        </div>
                        <div>$25000</div>
                    </div>
                    <div className={cn(sty.operaBox, 'flex')}>
                        <button className={cn(sty.w, 'flex-1')}>DETAILS</button>
                        <button className='flex-1'>SOLD OUT</button>
                    </div>
                </div>
                <div onClick={buyCard} className={sty.item}>
                    <div className={cn(sty.header, 'flex-m')}>
                        <img className={sty.ower} src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg" alt="" />
                        <div className='flex-1'>
                            <div className={sty.text}>Created by</div>
                            <div className={sty.s}>Tran Mau</div>
                        </div>
                        <div>
                            <div className={sty.id}>#0250</div>
                            <div className={sty.o}>king </div>
                        </div>
                    </div>
                    <img className={sty.card} src={cardImgFour} alt="" />
                    <div className={cn(sty.price, 'flex-m')}>
                        <div className='flex-1'>
                            <span className={sty.s}>price：</span>
                            <span>10ETH</span>
                        </div>
                        <div>$25000</div>
                    </div>
                    <div className={cn(sty.operaBox, 'flex')}>
                        <button className={cn(sty.w, 'flex-1')}>DETAILS</button>
                        <button className='flex-1'>SOLD OUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trans;