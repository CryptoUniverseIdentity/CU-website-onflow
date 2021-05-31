import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { parseUnits, formatUnits } from '@ethersproject/units';
import { abi, addr } from '../../../constant/contract';
import { getConstract } from '../../../utils/index';

export default function Updater() {
    const dispatch = useDispatch();
    const { chainId, library, account } = useWeb3React()
    const lastBlockNumber = useSelector((state) => state.block.blockNumber);
    const blindTrans = useSelector((state) => state.blindTrans);
    // useEffect(() => {
    //     if (!chainId || !library || (blindTrans.status !== 'pending') || !blindTrans.hash) return;

    //     library.getTransaction(blindTrans.hash).then(receipt => {
    //             if (receipt) {
    //                 console.log(2222, receipt)
    //                 console.log(33333, formatUnits(receipt.value));
    //             }
    //     })
    //         .catch(error => {
    //             console.error(`failed to check transaction hash: ${blindTrans.hash}`, error)
    //         })

    // }, [chainId, library, blindTrans, dispatch, lastBlockNumber])
    useEffect(() => {
        if(!library || !blindTrans.hash) return;

        const transferListener = (from, to, tokenId, event) => {
            if(event.transactionHash == blindTrans.hash) {
                dispatch({ type: 'UPDATE_BLIND_TRANS', payload: { status: 'finish', tokenId: tokenId.toNumber()} });
            }
        }
        const contract = getConstract(addr, abi, library, account);
        contract.on("Transfer", transferListener);

        return () => {
            if(contract.off) {
                contract.off("Transfer", transferListener);
            }
        }
    }, [library, blindTrans])

    return null;
}
