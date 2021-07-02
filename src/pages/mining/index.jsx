import { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useAccountBalance } from '../../hooks/useAccountBalance';
import sty from './index.module.scss';
import cn from 'classnames';

import balanceIcon from '../../imgs/mining/balance-icon.png';
import mineCuIcon from '../../imgs/mining/mine-cu.png';

function Mining() {
    const { account } = useWeb3React();
    const balance = useAccountBalance();
    const [tab, setTab] = useState(0);

    function shortenAddress(address) {
        if (!address) return '';
        return `${address.substring(0, 6)}...${address.substring(42 - 6)}`;
    }

    return (
        <div className={sty.mining}>
            <div className={sty.wrap}>
                <div className={cn(sty.header, 'flex-m flex-j')}>
                    <div className={cn(sty.tabs, 'flex-m tc')}>
                        <div onClick={() => setTab(0)} className={cn(sty.tab, tab === 0 ? sty.active : '')}>Activated Cards</div>
                        <div onClick={() => setTab(1)} className={cn(sty.tab, tab === 1 ? sty.active : '')}>Free Cards</div>
                    </div>
                    {
                        account && (
                            <div className={cn(sty.account, 'flex-m')}>
                                <div className={cn(sty.balance, 'flex-m')}>
                                    <img className={sty.icon} src={balanceIcon} alt="" />
                                    <span>{balance}ETH</span>
                                </div>
                                <div className={cn(sty.useAddr, 'flex-1 flex-m flex-c')}>
                                    {shortenAddress(account)}
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={sty.nav}>
                    <div className={sty.label}>
                        <span>TVL</span>
                        <span>$199999999.99</span>
                    </div>
                    <div className={sty.title}>CU can be obtained in one of two ways</div>
                    <div className={sty.desc}>1.Single currency mortgage Cu, automatic lock warehouse for two months. Rewards can be picked up at any time</div>
                    <div className={sty.desc}>2.Provide liquidity in the DEX. Mortgage LP, earn CU, reward CU</div>
                </div>

                <div className={cn(sty.block, 'flex-m flex-j')}>
                    <div className={cn(sty.mineItem, 'flex-1')}>
                        <div className={sty.logo}>
                            <img src={mineCuIcon} alt="" />
                        </div>
                        <div className={sty.name}>CU Pool</div>
                        <div className={sty.box}>
                            <div className={cn(sty.row, 'flex-m')}>
                                <div className='flex-1'>My mortgage</div>
                                <div className={sty.s}>2000CU</div>
                            </div>
                            <div className={cn(sty.row, 'flex-m')}>
                                <div className='flex-1'>My rewards</div>
                                <div className={sty.s}>100CU</div>
                            </div>
                            <div className={cn(sty.row, 'flex-m')}>
                                <div className='flex-1'>Total mortgage</div>
                                <div className={sty.s}>2000CU</div>
                            </div>
                            <div className={cn(sty.row, 'flex-m')}>
                                <div className='flex-1'>APR</div>
                                <div className={sty.s}>20%</div>
                            </div>
                        </div>
                        <div className={cn(sty.row, 'flex-m')}>
                            <div className='flex-1'>My balance</div>
                            <div className={sty.s}>2000CU</div>
                        </div>
                        <div className={cn(sty.btnGroup, 'flex-m flex-j')}>
                            <button className='flex-1'>Charge</button>
                            <button className={cn(sty.mmr, 'flex-1')}>Cancel</button>
                            <button className='flex-1'>Receive</button>
                        </div>
                    </div>
                    <div className={cn(sty.mineItem, sty.imr, 'flex-1')}>
                        <div className={sty.logo}>
                            <img src={mineCuIcon} alt="" />
                        </div>
                        <div className={sty.name}>CU Pool</div>
                        <div className={sty.box}>
                            <div className={cn(sty.row, 'flex-m')}>
                                <div className='flex-1'>My mortgage</div>
                                <div className={sty.s}>2000CU</div>
                            </div>
                            <div className={cn(sty.row, 'flex-m')}>
                                <div className='flex-1'>My rewards</div>
                                <div className={sty.s}>100CU</div>
                            </div>
                            <div className={cn(sty.row, 'flex-m')}>
                                <div className='flex-1'>Total mortgage</div>
                                <div className={sty.s}>2000CU</div>
                            </div>
                            <div className={cn(sty.row, 'flex-m')}>
                                <div className='flex-1'>APR</div>
                                <div className={sty.s}>20%</div>
                            </div>
                        </div>
                        <div className={cn(sty.row, 'flex-m')}>
                            <div className='flex-1'>My balance</div>
                            <div className={sty.s}>2000CU</div>
                        </div>
                        <div className={cn(sty.btnGroup, 'flex-m flex-j')}>
                            <button className='flex-1'>Charge</button>
                            <button className={cn(sty.mmr, 'flex-1')}>Cancel</button>
                            <button className='flex-1'>Receive</button>
                        </div>
                    </div>
                    <div className={cn(sty.mineItem, 'flex-1')}>
                        <div className={sty.logo}>
                            <img src={mineCuIcon} alt="" />
                        </div>
                        <div className={sty.name}>CU Pool</div>
                        <div className={sty.box}>
                            <div className={cn(sty.row, 'flex-m')}>
                                <div className='flex-1'>My mortgage</div>
                                <div className={sty.s}>2000CU</div>
                            </div>
                            <div className={cn(sty.row, 'flex-m')}>
                                <div className='flex-1'>My rewards</div>
                                <div className={sty.s}>100CU</div>
                            </div>
                            <div className={cn(sty.row, 'flex-m')}>
                                <div className='flex-1'>Total mortgage</div>
                                <div className={sty.s}>2000CU</div>
                            </div>
                            <div className={cn(sty.row, 'flex-m')}>
                                <div className='flex-1'>APR</div>
                                <div className={sty.s}>20%</div>
                            </div>
                        </div>
                        <div className={cn(sty.row, 'flex-m')}>
                            <div className='flex-1'>My balance</div>
                            <div className={sty.s}>2000CU</div>
                        </div>
                        <div className={cn(sty.btnGroup, 'flex-m flex-j')}>
                            <button className='flex-1'>Charge</button>
                            <button className={cn(sty.mmr, 'flex-1')}>Cancel</button>
                            <button className='flex-1'>Receive</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mining;