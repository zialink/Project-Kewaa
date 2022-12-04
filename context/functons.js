import React, { useState, useEffect, createContext } from "react";
import ContractABI from  '../utils/abi.json'
const contractAddress = '0x52f873bb5757e0640aBD47BBbDFfAc46E807247B'
import { ethers, utils, Contract } from "ethers";
const Web3Context = createContext(null)

function Web3ContextProvider({ children }) {
    const [account, setAccount] = useState(null);
    const [connected, setConnected] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [accountBalance, setAccountBalance] = useState({
        coinBalance: 0,
    });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(account);

    // Requests wallet connection
    useEffect(() => {
        init();
        if (!window.ethereum) return;

        window.ethereum.on("connect", eagerConnect);
        window.ethereum.on("accountsChanged", handleAccountChanged);
        window.ethereum.on("chainChanged", handleChainChanged);
        window.ethereum.removeListener("accountsChanged", handleAccountChanged);
        window.ethereum.removeListener("chainChanged", handleChainChanged);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const connectWallet = async () => {
        if (connected) return;
        if (window.ethereum || window.web3) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setAccount(accounts[0]);
                await eagerConnect();
                if (connected) {
                    window.location.reload(false);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            alert(
                "Please Use a Web3 Enabled Browser or Install Metamask"
            );
            return;
        }
    };

    const disconnectWallet = () => {
        setConnected(false);
        setAccount(null);
    };
    const refreshState = () => {
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    };

     const eagerConnect = async () => {
        const networkID = await window.ethereum.request({
            method: "eth_chainId",
        });
        if (Number(networkID) !== 80001) {
            setConnected(false);
            alert(
                "You are currently connected to an unsupported network, please switch to polygon testnet"
            );
            return;
        }
        const accounts = await provider.listAccounts();
        if (!accounts.length) return;
        setConnected(true);

    };

     const handleAccountChanged = async () => {
        if (account) {
            try {
                const networkID = await window.ethereum.request({
                    method: "eth_chainId",
                });
                if (Number(networkID) !== 80001) {
                    alert(
                        "You are currently connected to an unsupported network, please switch to polygon testnet"
                    );
                    return;
                } else {
                    const accounts = await provider.listAccounts();
                    setAccount(accounts[0]);
                    refreshState();
                }
            } catch (error) {
                alert(
                    error ? error.message.slice(0, 50) : "Connection failed",
                );
            }
        }
    };

     const handleChainChanged = async () => {
        const networkID = await window.ethereum.request({
            method: "eth_chainId",
        });
        if (Number(networkID) !== 80001) {
            setConnected(false);
            alert(
                "You are currently connected to an unsupported network, please switch to polygon testnet"
            );
            return;
        } else {
            setConnected(true);
            refreshState();
        }
    };

     const getCoinBalance = async (address) => {
        if (!connected) {
            try {
                const balance = await provider.getBalance(address);
                const formattedBalance = utils.formatUnits(balance, 18);
                return formattedBalance;
            } catch (error) {
                alert(
                    error ? error.message.slice(0, 50) : "Connection failed"
                );
                console.error(error);
            }
        }
    };

    const init = async () => {
        connectWallet();
        const accounts = await provider.listAccounts();
        if (!accounts.length) return;
        if(!connected){

                 const coinBalance = await getCoinBalance(accounts[0]);
                setAccountBalance({
                    coinBalance,
                });
                setAccount(accounts[0]); 
    }
    }

    const getContractWithSigner = (contractAddress, contractABI) => {
        return new Contract(contractAddress, contractABI, signer);
    };

    const mintNft = async (addressTo, tokenURI, totalFractionalTokens) =>{
        try {
            const contract = getContractWithSigner(
                contractAddress,
                ContractABI
            );
            const res = await contract.mint(addressTo, tokenURI, utils.parseEther(totalFractionalTokens));
            await res.wait();
            refreshState();
            alert("Transaction successfull");
        } catch (error) {
            alert(
                error ? error.message.slice(0, 73) : "Connection failed"
            );
            console.error(error.message);
        }
    }

    const addStakeHolder = async (addressStakeHolder) =>{
        try {
            const contract = getContractWithSigner(
                contractAddress,
                ContractABI
            );
            const res = await contract.addStakeholder(addressStakeHolder);
            await res.wait();
            refreshState();
            alert("Stake holder added successfull");
        } catch (error) {
            alert(
                error ? error.message.slice(0, 73) : "Connection failed"
            );
            console.error(error.message);
        }
    }


    const withdraw = async (addessTo, tokenUri, amount) => {
        try {
            const contract = getContractWithSigner(
                contractAddress,
                ContractABI
            );
            const res = await contract.withdraw();
            await res.wait();
            refreshState();
            alert("Withdraw successfull");
        } catch (error) {
            alert(
                error ? error.message.slice(0, 73) : "Connection failed"
            );
            console.error(error.message);
        }
    }

    const transfer = async (addessTo, tokenUri, amount) => {
        try {
            const contract = getContractWithSigner(
                contractAddress,
                ContractABI
            );
            const res = await contract.transfer(addressTo, tokenUri, utils.parseEther(amount));
            await res.wait();
            refreshState();
            alert("Transfer successfull");
        } catch (error) {
            alert(
                error ? error.message.slice(0, 73) : "Connection failed"
            );
            console.error(error.message);
        }
    }
    const transferFNFToken = async (addessTo, tokenUri, amount) => {
        try {
            const contract = getContractWithSigner(
                contractAddress,
                ContractABI
            );
            const res = await contract.transferFNFToken(addressTo, tokenUri, utils.parseEther(amount));
            await res.wait();
            refreshState();
            alert("Transfer successfull");
        } catch (error) {
            alert(
                error ? error.message.slice(0, 73) : "Connection failed"
            );
            console.error(error.message);
        }
    }

    const getFNFT = async (number) =>{
        try {
            const contract = getContractWithSigner(
                contractAddress,
                ContractABI
            );
            const res = await contract.FNFT(number);
            return res;
        } catch (error) {
            alert(
                error ? error.message.slice(0, 73) : "Connection failed"
            );
            console.error(error.message);
        }
    }
    


    const value = {
        account,
        connected,
        connectWallet,
        disconnectWallet,
        accountBalance,
        mintNft,
        addStakeHolder,
        withdraw,
        transferFNFToken,
        transfer,
        getFNFT
    };


     return (
        <Web3Context.Provider value={value}>{children}</Web3Context.Provider>)


}
export default Web3ContextProvider;