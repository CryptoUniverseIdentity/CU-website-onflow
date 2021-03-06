import { useState } from 'react';
import sty from './index.module.scss';
import cn from 'classnames';

import cardImgOne from '../../imgs/card-4.jpg';
import cardImgTwo from '../../imgs/card-3.jpg';
import cardImgThree from '../../imgs/card-5.jpg';
function My() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className={sty.my}>
            <div className={sty.outer}>
                <div className={sty.title}>My COLLECTION</div>
                <div className={sty.desc}>Check all the cards you have, both activated and free cards</div>
                <div className={cn(sty.tabs, 'flex-m tc')}>
                    <div onClick={() => setActiveTab(1)} className={cn(sty.tab, activeTab === 1 ? sty.active : '')}>Activated Cards</div>
                    <div onClick={() => setActiveTab(2)} className={cn(sty.tab, activeTab === 2 ? sty.active : '')}>Free Cards</div>
                </div>
                <div className={cn(sty.cardBox, 'flex flex-wrap')}>
                    <div className={sty.card}>
                        <img className={sty.cardImg} src={cardImgOne} alt="" />
                        <div className={cn(sty.operaBox, 'flex-m')}>
                            <button className="flex-1">Active</button>
                            <button className={cn(sty.s, 'flex-1')}>Putaway</button>
                        </div>
                    </div>
                    <div className={sty.card}>
                        <img className={sty.cardImg} src={cardImgTwo} alt="" />
                        <div className={cn(sty.operaBox, 'flex-m')}>
                            <button className="flex-1">Active</button>
                            <button className={cn(sty.s, 'flex-1')}>Putaway</button>
                        </div>
                    </div>
                    <div className={sty.card}>
                        <img className={sty.cardImg} src={cardImgThree} alt="" />
                        <div className={cn(sty.operaBox, 'flex-m')}>
                            <button className="flex-1">Active</button>
                            <button className={cn(sty.s, 'flex-1')}>Putaway</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default My;