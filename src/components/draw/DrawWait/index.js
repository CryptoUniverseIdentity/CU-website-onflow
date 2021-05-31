import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import sty from './index.module.scss';
import cn from 'classnames';

function DrawWait(props) {

    function fadeIn() {
        let video = document.getElementById('draw-video');
        video.currentTime = 0;
        video.play();
    }
    return (
        <Modal backdrop='static' onEntered={fadeIn} contentClassName='draw-wait-modal' show={props.show} onHide={() => { props.onHide() }} centered={true}>
            <div className={cn(sty.outer, 'flex flex-c')}>
                <video id='draw-video' loop width='400' src="https://swarm-gateways.net/bzz:/72c554df40b915ccb21103984982439e91f2d17a9dac7c570a207dff9c7493f9/69024027fe7b83dd835bc34df4cbea4a.mp4"></video>
            </div>
        </Modal>
    );
}

export default DrawWait;