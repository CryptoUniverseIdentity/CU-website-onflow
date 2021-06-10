import Modal from '../Modal';
import { WALLET_LIST } from '../../../utils/wallet';
import { useWeb3React } from '@web3-react/core';
import sty from './index.module.scss';
import cn from 'classnames';
import walletIcon from '../../../imgs/wallet';

function ConnectModal({ visible, onClose }) {
    const { activate } = useWeb3React();

    function tryConnect(connector) {
        activate(connector, undefined, true).catch((error) => {
            if (error) {
                console.log(error);
            }
        })
        onClose();
    }
    return (
        <Modal show={visible} onHide={onClose}>
            <div className={sty.wrap}>
                <div className={cn(sty.header, 'tc')}>Connect a wallet</div>
                <div className={sty.modalBody}>
                    {
                        WALLET_LIST.map(e => (
                            <div className={cn(sty.option, 'flex-m')} key={e.name} onClick={() => tryConnect(e.connector)}>
                                <div className={cn(sty.name, 'flex-1')}>{e.name}</div>
                                <img className={sty.walletLogo} src={walletIcon[e.icon]} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </Modal>
    )
}

export default ConnectModal;