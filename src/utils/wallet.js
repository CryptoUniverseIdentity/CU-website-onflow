import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { CHAIN_ID, INFURA_KEY } from '../constant/index';

const SUPPORTED_CHAIN_IDS = Object.keys(CHAIN_ID).map(e => Number(e));

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
})

const walletconnect = new WalletConnectConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
  infuraId: INFURA_KEY, // obviously a hack
  qrcode: true,
  pollingInterval: 15000
})

// mainnet only
// export const portis = new PortisConnector({
//   dAppId: PORTIS_ID ?? '',
//   networks: [1],
// })

// mainnet only
const walletlink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  appName: 'cu'
})

export const WALLET_LIST = [
    {name: 'Metamask', connector: injected},
    {name: 'Walletconnect', connector: walletconnect},
    {name: 'Walletlink', connector: walletlink}
]
