import { useState, useEffect } from 'react';
import { abi, addr } from '../constant/contract';
import { getConstract } from '../utils/index';
import { useWeb3React } from '@web3-react/core';
import { SUPPORT_NET, CHAIN_ID } from '../constant';
import { formatUnits } from '@ethersproject/units';

export function useAccountBalance() {
    const { account, library, chainId } = useWeb3React();
    const [nftContract, setNftContract] = useState(null);
    const [num, setNum] = useState(0);

    // useEffect(() => {
    //     if(!account) return;
    //     const contract = getConstract(addr, abi, library, account);
    //     setNftContract(contract);
    // }, [chainId, account]);

    useEffect(() => {
        if(!library) return;
        library.provider.getBalance(account).then(res => {
            console.log(111, res);
        });
    }, [library]);
    
    return num;
}