import { useCallback, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
// import { updateBlockNumber } from '../../store/application/actions'
import { useDispatch } from 'react-redux';

export default function Updater() {
  const dispatch = useDispatch();
  const { library, chainId } = useWeb3React();

  const [state, setState] = useState({
    chainId,
    blockNumber: null
  });

  const blockNumberCallback = useCallback(
    (blockNumber) => {
      setState(state => {
        if (chainId === state.chainId) {
          if (typeof state.blockNumber !== 'number') return { chainId, blockNumber }
          return { chainId, blockNumber: Math.max(blockNumber, state.blockNumber) }
        }
        return state;
      })
    },
    [chainId, setState]
  )

  useEffect(() => {
    if (!library || !chainId) return undefined

    setState({ chainId, blockNumber: null })

    library
      .getBlockNumber()
      .then(blockNumberCallback)
      .catch(error => console.error(`Failed to get block number for chainId: ${chainId}`, error))

    library.on('block', blockNumberCallback)
    return () => {
      library.removeListener('block', blockNumberCallback)
    }
  }, [dispatch, chainId, library, blockNumberCallback])

  useEffect(() => {
    const handler = setTimeout(() => {
        setState(state)
    }, 100)

    return () => {
      clearTimeout(handler)
    }
  }, [state])

  useEffect(() => {
    if (!state.chainId || !state.blockNumber) return
    dispatch({type: 'UPDATE_BLOCK_NUMBER', payload: {blockNumber: state.blockNumber}});
  }, [dispatch, state.blockNumber, state.chainId])

  return null
}
