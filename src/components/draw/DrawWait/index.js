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
                <video id='draw-video' loop width='400' src="https://swarm-gateways.net/bzz:/ae052c774cd9e1849eaa68f78ba973e621393e8ed9d7b947d109650998e5110c/2333_x264.mp4"></video>
            </div>
        </Modal>
    );
}

export default DrawWait;