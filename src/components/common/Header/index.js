import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import sty from './index.module.scss';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import logoImg from '../../../imgs/logo.png';
import menuIcon from "../../../imgs/menu-icon.png";
import closeIcon from "../../../imgs/close.png";

function Header() {
    let { t, i18n } = useTranslation();
    let { pathname } = useLocation();
    const [showMenu, setShowMenu] = useState(false);

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            style={{
                padding: '10px 20px',
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: '16px',
                fontWeight: '500',
                textDecoration: 'none'
            }}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
          &#x25bc;
        </a>
    ));

    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <ul>
                        {children}
                    </ul>
                </div>
            );
        },
    );

    function changeLanguage(key) {
        i18n.changeLanguage(key);
        localStorage.setItem('language', key);
    }

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
                <Link className={cn({ [sty.active]: pathname === '/', [sty.menuItem]: true })} to="/">{t('header.home')}</Link>
                <Link className={cn({ [sty.active]: pathname === '/draw', [sty.menuItem]: true })} to="/draw">{t('header.draw')}</Link>
                <Link className={cn({ [sty.active]: pathname === '/trans', [sty.menuItem]: true })} to="/trans">{t('header.trans')}</Link>
                <Link className={cn({ [sty.active]: pathname === '/mining', [sty.menuItem]: true })} to="/mining">MINING</Link>
                <Link className={cn({ [sty.active]: pathname === '/my', [sty.menuItem]: true })} to="/my">{t('header.my')}</Link>
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
                            <Link className={cn(sty.mName)} to="/">{t('header.home')}</Link>
                        </div>
                        <div className={sty.mItem}>
                            <Link className={cn(sty.mName)} to="/draw">{t('header.draw')}</Link>
                        </div>
                        <div className={sty.mItem}>
                            <Link className={cn(sty.mName)} to="/trans">{t('header.trans')}</Link>
                        </div>
                        <div className={sty.mItem}>
                            <Link className={cn(sty.mName)} to="/my">{t('header.my')}</Link>
                        </div>
                        {/* <div className={sty.mItem}>
                            <div>{i18n.language === 'zh' ? '选择语言' : 'Multiple Language'}</div>
                            <div className={sty.subMenu}>
                                <div onClick={() => changeLanguage('zh')}>中文简体</div>
                                <div onClick={() => changeLanguage('en')}>English</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;