import { useTransition, animated } from 'react-spring'
import sty from './index.module.scss';
import closeIcon from '../../../imgs/close.png';

function Modal(props) {
    const transitions = useTransition(props.show, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: props.show,
        delay: 50
    });

    return transitions(
        (styles, item) => item && (<animated.div onClick={() => props.closeBody && props.onHide()} className={sty.mask} style={styles}>
            <div className={sty.box}>
                <div onClick={() => { props.onHide() }} className={sty.closeIcon}>
                    <img src={closeIcon} />
                </div>
                {props.children}
            </div>
        </animated.div>)
    )
}

export default Modal;