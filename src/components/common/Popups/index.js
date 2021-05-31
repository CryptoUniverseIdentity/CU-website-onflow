import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import sty from './index.module.scss';
import cn from 'classnames';
import stateIcon from '../../../imgs/popups';
import closeIcon from '../../../imgs/close.png';

function Popups() {
    const {show, type, text, link, linkText} = useSelector(state => state.app.popups);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'UPDATE_POPUPS', payload: {show: false}});
        }, 10000);
    }, [show]);

    return show ? (<div className={cn(sty.popups, 'flex')}>
            <div className={cn('flex-1 flex-m')}>
                <img className={sty.status} src={stateIcon[type]} alt="" />
                <div className={cn(sty.content, 'flex-1')}>
                    <div className={sty.text}>{text}</div>
                    {
                        link && (<a target='_blank' className={sty.link} href={link}>{linkText}</a>)
                    }
                </div>
            </div>
           
            <div onClick={() => {dispatch({type: 'UPDATE_POPUPS', payload: {show: false}})}} className={sty.close}>
                <img src={closeIcon} alt="" />
            </div>
        </div>) : null
}

export default Popups;