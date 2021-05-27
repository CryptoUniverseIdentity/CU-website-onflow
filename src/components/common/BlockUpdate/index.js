import { useCallback, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
// import { updateBlockNumber } from '../../store/application/actions'
// import { useDispatch } from 'react-redux';

export default function Updater() {
  const { library, chainId } = useWeb3React();
//   const dispatch = useDispatch();

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
        return state
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
  }, [chainId, library, blockNumberCallback])

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
        setState(state)
    }, 100)

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(handler)
    }
  }, [state])

  useEffect(() => {
      console.log('2222222')
    if (!state.chainId || !state.blockNumber) return
    // dispatch(updateBlockNumber({ chainId: debouncedState.chainId, blockNumber: debouncedState.blockNumber }))
  }, [state.blockNumber, state.chainId])

  return null
}
