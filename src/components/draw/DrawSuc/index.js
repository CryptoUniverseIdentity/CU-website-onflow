import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import sty from './index.module.scss';
import cn from 'classnames';
import defaultCard from '../../../imgs/card-5.jpg';

function DrawWait(props) {

    return (
        <Modal backdrop='static' dialogClassName="draw-suc-dialog-modal" size="lg" contentClassName='draw-suc-modal' show={props.show} onHide={() => { props.onHide() }} centered={true}>
            <div className={cn(sty.outer, 'flex flex-c')}>
                <div className={sty.cardBox}>
                    <div className={cn(sty.cardImg, 'flex-m flex-c')}>
                        <img src={(props.card && props.card.image_url) || defaultCard} alt="" />
                    </div>

                    <div>
                        <button onClick={() => {props.onHide()}} className={sty.closeBtn}>Confirm</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default DrawWait;