import { abi, addr } from '../constant/contract';
import { getConstract } from '../utils/index';
import { useWeb3React } from '@web3-react/core';

export function useNftContract() {
    const { account, library } = useWeb3React();
    
    return getConstract(addr, abi, library, account);
}