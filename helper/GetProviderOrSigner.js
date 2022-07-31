async function getProviderOrSigner(needSigner = false) {
    const provider = await web3ModalRef.current.connect()
    const web3Provider = new providers.Web3Provider(provider)
    const { chainId } = await web3Provider.getNetwork()
    if (chainId !== 4) {
        window.alert('Please change the network to Rinkeby!')
        throw new Error("Network is not rinkeby")
    }

    if (needSigner) {
        const signer = web3Provider.getSigner()
        return signer
    } else {
        return provider
    }
}

export default getProviderOrSigner