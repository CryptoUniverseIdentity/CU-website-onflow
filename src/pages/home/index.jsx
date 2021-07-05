import { useHistory } from "react-router-dom";
import style from './index.module.scss';
import cn from 'classnames';

import Footer from '../../components/common/Footer';
import actvImg from '../../imgs/home/actv-bg.png';

import cardImgOne from '../../imgs/card-4.jpg';
import cardImgTwo from '../../imgs/card-3.jpg';
import cardImgThree from '../../imgs/card-5.jpg';

function Home() {
    let history = useHistory();

    function goPage(url) {
        console.log('home2222')
        history.push(url);
    }
    console.log('home111')
    function goActivity() {
        window.open('https://quanqiu.group/');
    }

    return (
        <div className={style.home}>
            <div className={style.nav}>
                
                <div className={cn(style.outer)}>
                    <div className={style.titleOne}>Welcome to</div>
                    <div className={style.titleTwo}>CRYPTO UNIVERSE(CU)</div>
                    <div className={cn(style.keyword, 'flex-m')}>
                        <div>NFT</div>
                        <div>DID</div>
                        <div>Governance</div>
                        <div>GameFi</div>
                        <div>Collection</div>
                        <div>Metaverse Infrastructure</div>
                    </div>
                    <div className={style.titleThree}>CRYPTO UNIVERSE(CU) IS THE NFT BASED ON BLOCKCHAIN DID WITH</div>
                    <div className={style.titleThree}>DEFI+GACHA+UNIQUE CARD COLLECTION」</div>
                    <button onClick={() => goPage('/draw')} className={style.launchBtn}>Get started</button>

                    <div className={cn(style.cardShow, 'flex-m')}>
                        <div className={cn(style.cardItem, 'flex flex-1')}>
                            <div className={style.cardImg}>
                                <img src={cardImgOne} alt="" />
                            </div>

                            <div className={cn(style.ciAside, 'flex-1')}>
                                {/* <div className={style.title}>ROLE</div> */}
                                <div className={style.identity}>ROLE: KING</div>
                                <div className={style.price}>
                                    <span>Price：</span>
                                    <span className={style.s}>100ETH</span>
                                </div>
                                <div className={style.desc}>Owner of Crypto Universe Core rule maker，A symbol of dignity</div>
                                {/* <div className={cn(style.operaBtn, 'flex')}>
                                    <button onClick={goTrans} className='flex-1'>Buy now</button>
                                    <button onClick={goCardDetail} className={cn(style.w, 'flex-1')}>Details</button>
                                </div> */}
                            </div>
                        </div>
                        <div className={cn(style.cardItem, style.cardMiddle, 'flex flex-1')}>
                            <div className={style.cardImg}>
                                <img src={cardImgTwo} alt="" />
                            </div>
                            <div className={cn(style.ciAside, 'flex-1')}>
                                {/* <div className={style.title}>ROLE</div> */}
                                <div className={style.identity}>ROLE: BUIDL</div>
                                <div className={style.price}>
                                    <span>Price：</span>
                                    <span className={style.s}>120ETH</span>
                                </div>
                                <div className={style.desc}>BUIDL is the blockchain circle Idealists who focus on Construction of the underlying  technology and framework</div>
                                {/* <div className={cn(style.operaBtn, 'flex')}>
                                    <button onClick={goTrans} className='flex-1'>Buy now</button>
                                    <button onClick={goCardDetail} className={cn(style.w, 'flex-1')}>Details</button>
                                </div> */}
                            </div>
                        </div>
                        <div className={cn(style.cardItem, 'flex flex-1')}>
                            <div className={style.cardImg}>
                                <img src={cardImgThree} alt="" />
                            </div>
                            <div className={cn(style.ciAside, 'flex-1')}>
                                {/* <div className={style.title}>ROLE</div> */}
                                <div className={style.identity}>ROLE: WHALE</div>
                                <div className={style.price}>
                                    <span>Price：</span>
                                    <span className={style.s}>80ETH</span>
                                </div>
                                <div className={style.desc}>Giant whale is the hidden finance of the entire blockchain ecology Giant crocodiles, they have ...</div>
                                {/* <div className={cn(style.operaBtn, 'flex')}>
                                    <button onClick={goTrans} className='flex-1'>Buy now</button>
                                    <button onClick={goCardDetail} className={cn(style.w, 'flex-1')}>Details</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.actv}>
                    <img src={actvImg} alt="" />
                    <button onClick={goActivity} className={cn(style.launchBtn)}>Contest</button>
                </div>
            </div>
            {/* <div className={style.card}>
                <div className={style.div1}></div>
                <div className={style.div2}></div>
            </div> */}
            <Footer></Footer>
        </div>
    );
}

export default Home;