import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import Web3ReactManager from '../Web3ReactManager';
import BlockUpdate from '../BlockUpdate';
import TransactionUpdater from '../TransactionUpdater';
import sty from './index.module.scss';

function getLibrary(provider) {
    return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

function Dapp(props) {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <BlockUpdate></BlockUpdate>
            <TransactionUpdater></TransactionUpdater>
            <div className={sty.content}>
                <Web3ReactManager>
                    {props.children}
                </Web3ReactManager>
            </div>
        </Web3ReactProvider>
    );
}

export default Dapp;