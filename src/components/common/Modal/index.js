import { useEffect, useState } from "react";
import sty from './index.module.scss';
import cn from 'classnames';
import closeIcon from '../../../imgs/close.png';

function Popups(props) {
    const { show = false, onClose } = props;

    return (
        <div className={sty.modal}>
            
        </div>
    )
}

export default Popups;