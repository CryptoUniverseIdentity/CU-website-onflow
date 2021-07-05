import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import sty from './index.module.scss';
import cn from 'classnames';
import logoImg from '../../../imgs/logo.png';
import menuIcon from "../../../imgs/menu-icon.png";
import closeIcon from "../../../imgs/close.png";

function Header() {
    let { pathname } = useLocation();
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu(e, val) {
        setShowMenu(val);
        e.stopPropagation();
    }

    return (
        <div className={cn(sty.header, 'flex-m')}>
            <div className='flex-1'>
                <img className={sty.logo} src={logoImg} alt="" />
            </div>

            <div className={cn(sty.outer, 'flex-m')}>
                <Link className={cn({ [sty.active]: pathname === '/', [sty.menuItem]: true })} to="/">HOME</Link>
                <Link className={cn({ [sty.active]: pathname === '/draw', [sty.menuItem]: true })} to="/draw">CU GACHA</Link>
                <Link className={cn({ [sty.active]: pathname === '/trans', [sty.menuItem]: true })} to="/trans">MARKET</Link>
                <Link className={cn({ [sty.active]: pathname === '/mining', [sty.menuItem]: true })} to="/mining">MINING</Link>
                <Link className={cn({ [sty.active]: pathname === '/my', [sty.menuItem]: true })} to="/my">MY COLLECTION</Link>
            </div>
            <div onClick={e => toggleMenu(e, true)} className={sty.mobileMenu}>
                <img className={sty.menuIcon} src={menuIcon} alt="" />
                <div className={cn({[sty.menuBox]: true, [sty.active]: showMenu})}>
                    <div className={cn(sty.mHead, 'flex-m')}>
                        <div className={cn(sty.mTitle, 'flex-1')}>Products</div>
                        <div onClick={(e) => { toggleMenu(e, false) }} className={sty.mClose}>
                            <img src={closeIcon} alt="" />
                        </div>
                    </div>
                    <div onClick={e => toggleMenu(e, false)} className={sty.mList}>
                        <div className={sty.mItem}>
                            <Link className={cn(sty.mName)} to="/">HOME</Link>
                        </div>
                        <div className={sty.mItem}>
                            <Link className={cn(sty.mName)} to="/draw">CU GACHA</Link>
                        </div>
                        <div className={sty.mItem}>
                            <Link className={cn(sty.mName)} to="/trans">MARKET</Link>
                        </div>
                        <div className={sty.mItem}>
                            <Link className={cn(sty.mName)} to="/mining">MINING</Link>
                        </div>
                        <div className={sty.mItem}>
                            <Link className={cn(sty.mName)} to="/my">MY COLLECTION</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;