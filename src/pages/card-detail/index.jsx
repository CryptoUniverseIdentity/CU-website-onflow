import sty from './index.module.scss';
import navBg from '../../imgs/card-detail-bg.png';
import cardImg1 from '../../imgs/card-2.png';
import cn from 'classnames';
function index() {
    return (
        <div className={cn(sty.cardDetail)}>
            <div className={cn(sty.nav, 'flex')}>
                <img className={sty.card} src={cardImg1} alt="" />
                <div className={cn(sty.side, 'flex-1')}>
                    <div className={sty.name}>King</div>
                    <div className={sty.label}>
                        <span>SUPER RARE</span>
                        <span>DID身份</span>
                    </div>
                    <div className={sty.desc}>CRYPTO UNIVERSE(CU) IS He is an encrypted yuan universe, in this world there are a lot of a habitable planet, at the beginning of the chaos, there was a big place, no one to live, so the adventurers, came here to explore, unexpectedly won the uncivilized habitable planet, became the king, but the planet that need to be developed, and a subsequent builder, controller, saboteurs and r People, have more than one planet in the universe, each planet through this process, when the planet all occupied, through constant for the construction of the players, the gradual prosperity (breeding), and divide into many countries, in the process of the birth of new kingdom of the king, after the construction of the universe is very busy, was filled with all kinds of treasures It attracts the inhabitants of many other universes to come here .</div>
                    <div className={cn(sty.operaBox, 'flex')}>
                        <button className='flex-1'>Start Lottery</button>
                        <button className={cn(sty.w, 'flex-1')}>BUY NOW</button>
                    </div>
                </div>
            </div>
            <div className={sty.info}>
                <div className={sty.infoTb}>
                    <div className={sty.title}>Basic Information </div>
                    <div className={cn(sty.tbRow, 'flex-m')}>
                        <div className='flex-1'>Token ID</div>
                        <div className={sty.s}>56</div>
                    </div>
                    <div className={cn(sty.tbRow, 'flex-m')}>
                        <div className='flex-1'>Token ID</div>
                        <div className={sty.s}>56</div>
                    </div>
                    <div className={cn(sty.tbRow, 'flex-m')}>
                        <div className='flex-1'>Token ID</div>
                        <div className={sty.s}>56</div>
                    </div>
                </div>
            </div>
            <div className={sty.recommand}>
                <div className={sty.title}>Related recommendation & More</div>
                <div className={cn(sty.box, 'flex-m')}>
                    <div className={cn(sty.item, 'flex-1 flex')}>
                        <img className={sty.img} src={cardImg1} alt="" />
                        <div className={sty.side}>
                            <div className={cn(sty.header, 'flex-m')}>
                                <img className={sty.ower} src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg" alt="" />
                                <div className={sty.owerName}>
                                    <div className={sty.text}>Created by</div>
                                    <div className={sty.nick}>Tran Mau</div>
                                </div>
                            </div>
                            <div className={sty.name}>The king</div>
                            <div className={sty.desc}>The king is the explorer of the project and is the creator of some of the protocols and applications ...</div>
                            <div className={cn(sty.operaBox, 'flex')}>
                                <button className='flex-1'>Buy now</button>
                                <button className={cn(sty.w, 'flex-1')}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className={cn(sty.item, 'flex-1 flex')}>
                        <img className={sty.img} src={cardImg1} alt="" />
                        <div className={sty.side}>
                            <div className={cn(sty.header, 'flex-m')}>
                                <img className={sty.ower} src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg" alt="" />
                                <div className={sty.owerName}>
                                    <div className={sty.text}>Created by</div>
                                    <div className={sty.nick}>Tran Mau</div>
                                </div>
                            </div>
                            <div className={sty.name}>The king</div>
                            <div className={sty.desc}>The king is the explorer of the project and is the creator of some of the protocols and applications ...</div>
                            <div className={cn(sty.operaBox, 'flex')}>
                                <button className='flex-1'>Buy now</button>
                                <button className={cn(sty.w, 'flex-1')}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className={cn(sty.item, 'flex-1 flex')}>
                        <img className={sty.img} src={cardImg1} alt="" />
                        <div className={sty.side}>
                            <div className={cn(sty.header, 'flex-m')}>
                                <img className={sty.ower} src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg" alt="" />
                                <div className={sty.owerName}>
                                    <div className={sty.text}>Created by</div>
                                    <div className={sty.nick}>Tran Mau</div>
                                </div>
                            </div>
                            <div className={sty.name}>The king</div>
                            <div className={sty.desc}>The king is the explorer of the project and is the creator of some of the protocols and applications ...</div>
                            <div className={cn(sty.operaBox, 'flex')}>
                                <button className='flex-1'>Buy now</button>
                                <button className={cn(sty.w, 'flex-1')}>Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;