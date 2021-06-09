import { useState, useEffect } from 'react';
import { abi, addr } from '../constant/contract';
import { getConstract } from '../utils/index';
import { useWeb3React } from '@web3-react/core';
import { SUPPORT_NET, CHAIN_ID } from '../constant';
import { formatUnits } from '@ethersproject/units';

export function useSellCardNumber() {
    const { account, library, chainId } = useWeb3React();
    const [nftContract, setNftContract] = useState(null);
    const [num, setNum] = useState(0);

    useEffect(() => {
        const contract = getConstract(addr, abi, library, account);
        setNftContract(contract);
    }, [chainId, account]);

    useEffect(() => {
        if ((chainId && CHAIN_ID[chainId] !== SUPPORT_NET) || !nftContract) return;
        nftContract.callStatic.cardsCounter(0).then(res => {
            setNum(formatUnits(res));
        });
    }, [nftContract]);
    
    return num;
}