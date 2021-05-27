import style from './index.module.scss';
import cn from 'classnames';
import logoImg from '../../../imgs/logo.png';
import iconOne from '../../../imgs/contact1.png';
import iconTwo from '../../../imgs/contact2.png';
import iconThree from '../../../imgs/contact3.png';

function Footer() {
    return (
        <div className={cn(style.footer, 'flex-m')}>
           <div className={cn(style.logoBox, 'flex-1')}>
                <img src={logoImg} alt="" />
           </div>
           <div className={style.contact}>
                <img src={iconOne} alt="" />
                <img src={iconTwo} alt="" />
                <img src={iconThree} alt="" />
           </div>
        </div>
    );
}

export default Footer;