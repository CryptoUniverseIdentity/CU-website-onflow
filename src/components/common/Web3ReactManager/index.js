import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../../utils/wallet';
export default function Web3ReactManager({ children }) {
    const [tried, setTried] = useState(false)
    const { activate, active, error } = useWeb3React();

    useEffect(() => {
        injected.isAuthorized().then(isAuthorized => {
            if (isAuthorized) {
                activate(injected, undefined, true).catch(() => {
                    setTried(true)
                })
            } else {
                setTried(true)
            }
        })
    }, [activate])

    useEffect(() => {
        if (active) {
            setTried(true)
        }
    }, [active])

    useEffect(() => {
        const { ethereum } = window

        if (ethereum && ethereum.on && !error && !!tried) {

            const handleChainChanged = (chain) => {
                activate(injected, undefined, true).catch(error => {
                    console.error('Failed to activate after chain changed', error)
                })
            }
            const handleAccountsChanged = (accounts) => {
                if (accounts.length > 0) {
                // eat errors
                activate(injected, undefined, true).catch(error => {
                    console.error('Failed to activate after accounts changed', error)
                })
                }
            }

            const handleNetworkChanged = () => {
                // eat errors
                activate(injected, undefined, true).catch(error => {
                console.error('Failed to activate after networks changed', error)
                })
            }

            ethereum.on('chainChanged', handleChainChanged)
            ethereum.on('networkChanged', handleNetworkChanged)
            ethereum.on('accountsChanged', handleAccountsChanged)

            return () => {
                if (ethereum.removeListener) {
                    ethereum.removeListener('chainChanged', handleChainChanged)
                    ethereum.removeListener('networkChanged', handleNetworkChanged)
                    ethereum.removeListener('accountsChanged', handleAccountsChanged)
                }
            }
        }
       
    }, [active, error, !tried, activate])

    if (!tried) {
        return null;
    }

    return children;
}
