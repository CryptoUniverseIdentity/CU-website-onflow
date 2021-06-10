import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { formatUnits } from '@ethersproject/units';

export function useAccountBalance() {
    const { account, library, chainId } = useWeb3React();
    const [num, setNum] = useState(0);

    useEffect(() => {
        if(!library) return;
        library.getBalance(account).then(res => {
            setNum(formatUnits(res));
        });
    }, [library, chainId, account]);
    
    return num;
}