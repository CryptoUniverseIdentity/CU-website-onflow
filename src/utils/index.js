import { Contract } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';
// import { OpenSeaPort, Network } from 'opensea-js';
import { SUPPORT_NET } from '../constant';

export function getConstract(addr, abi, library, account) {
    let provider;
    if (account) {
        provider = library.getSigner(account).connectUnchecked();
    } else {
        provider = library;
    }

    return new Contract(addr, abi, provider);
}

// export function getOpenSea(provider) {
//     return new OpenSeaPort(provider, {
//         networkName: SUPPORT_NET === 'Main' ? Network.Main : Network.Rinkeby
//     })
// }

//add 20%
export function calculateGasMargin(value) {
    return value.mul(BigNumber.from(10000 + 2000)).div(BigNumber.from(10000));
}