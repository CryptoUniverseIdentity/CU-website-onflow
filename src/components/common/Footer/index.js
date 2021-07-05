import sty from './index.module.scss';
import cn from 'classnames';

import iconOne from '../../../imgs/contact1.png';
import iconThree from '../../../imgs/contact3.png';
import telegramIcon from '../../../imgs/telegram-icon.png';
import redditIcon from '../../../imgs/reddit.png';
import youtubiIcon from '../../../imgs/youtube-icon.png';
import mediumIcon from '../../../imgs/Medium-icon.png';

function Footer() {

    function goInfo(url) {
        window.open(url);
    }

    return (
        <div className={cn(sty.footer)}>
            <div className={cn(sty.title, 'tc')}>REGISTER INTEREST</div>
            <div className={cn(sty.desc, 'tc')}>Leave your email address and you will stay informed</div>
            <div className={cn(sty.email, 'flex-m flex-c')}>
                <input className={sty.input} type="text" />
                <button className={sty.sendBtn}>SEND</button>
            </div>
            <div className={cn(sty.contact, 'tc')}>
                    <img onClick={() => {goInfo('https://t.me/CU_NFT')}} src={telegramIcon} alt="" />
                    <img onClick={() => {goInfo('https://discord.gg/PKVZuw9Nyz')}} src={iconThree} alt="" />
                    <img onClick={() => {goInfo('https://twitter.com/CU_NFT')}} src={iconOne} alt="" />
                    <img onClick={() => {goInfo('https://www.reddit.com/user/CU_NFT/')}} src={redditIcon} alt="" />
                    <img onClick={() => {goInfo('https://www.youtube.com/channel/UCIg1eyGoA-IZnD_5iLF9WQQ')}} src={youtubiIcon} alt="" />
                    <img onClick={() => {goInfo('https://medium.com/@CU_NFT')}} src={mediumIcon} alt="" />
            </div>

        </div>
    );
}

export default Footer;