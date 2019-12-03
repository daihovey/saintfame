import { useState, useEffect } from 'react'
import { ethers, Contract } from 'ethers'
import { API_KEY, TOKEN_HOLDER_ADDRESS } from '../../helper'
import AddressBalance from './AddressBalance'
import Loader from '../Loader'

const provider = new ethers.providers.EtherscanProvider('mainnet', API_KEY)

// prettier-ignore
const addressContractABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"creationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_blockNumber","type":"uint256"}],"name":"balanceOfAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_cloneTokenName","type":"string"},{"name":"_cloneDecimalUnits","type":"uint8"},{"name":"_cloneTokenSymbol","type":"string"},{"name":"_snapshotBlock","type":"uint256"},{"name":"_transfersEnabled","type":"bool"}],"name":"createCloneToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"parentToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"generateTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_blockNumber","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transfersEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"parentSnapShotBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"destroyTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenFactory","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_transfersEnabled","type":"bool"}],"name":"enableTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_tokenFactory","type":"address"},{"name":"_parentToken","type":"address"},{"name":"_parentSnapShotBlock","type":"uint256"},{"name":"_tokenName","type":"string"},{"name":"_decimalUnits","type":"uint8"},{"name":"_tokenSymbol","type":"string"},{"name":"_transfersEnabled","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_token","type":"address"},{"indexed":true,"name":"_controller","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"ClaimedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_cloneToken","type":"address"},{"indexed":false,"name":"_snapshotBlock","type":"uint256"}],"name":"NewCloneToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Approval","type":"event"}]

let addressContract = new ethers.Contract(
    TOKEN_HOLDER_ADDRESS,
    addressContractABI,
    new ethers.providers.JsonRpcProvider()
)

function parseLogs(logs: ethers.providers.Log[], contract: Contract): any[] {
    let iface = new ethers.utils.Interface(contract.interface.abi)
    return logs
        .map(log => iface.parseLog(log))
        .map(item => {
            let result = {
                name: item.name,
                signature: item.signature,
                values: {}
            }

            const keys = Object.keys(item.values)
            const values = Object.values(item.values)
            const start = item.values.length

            for (let i = start; i < start * 2 - 1; i++) {
                result.values[keys[i]] = values[i]
            }

            return result
        })
}

const getAddresses = async () => {
    let filter = {
        address: TOKEN_HOLDER_ADDRESS,
        fromBlock: 8960961, // Block of Contract's first transaction
        toBlock: 'latest',
        topics: []
    }

    const logs = await provider.getLogs(filter)

    const parsedLogs = parseLogs(logs, addressContract)

    const addresses: string[] = parsedLogs.map(function(log) {
        return log.values['_to']
    })

    // const addresses = [
    //     '0xd247cf531B9374eB2ba115b68c3b4eBE6C64F5f9',
    //     '0x7BB81632c66cfAf0c9c7aA2DBaBf21FBC036D013',
    //     '0x8969bAfb1ae4786b776FdDcF7F8B5f0ae1E50C36',
    //     '0x5e349eca2dc61aBCd9dD99Ce94d04136151a09Ee',
    //     '0x9079a0a7e0eBEe7650C8c9Da2b6946e5a5B07C19',
    //     '0x4defA30195094963cFAc7285d8d6E6E523c7f90D'
    // ]

    return addresses
}

const HoldersList = () => {
    const [holders, setHolders] = useState([<Loader />])

    useEffect(() => {
        getAddresses().then(addresses => {
            const list = addresses.map(address => (
                <div className="holderRow" key={address}>
                    <div className="tableHeaderLeft ">
                        <a href={'https://etherscan.io/address/' + address}>
                            {address}
                        </a>
                    </div>
                    <div className="tableHeaderRight rightAlignText">
                        <AddressBalance address={address} />
                    </div>
                </div>
            ))
            setHolders(list)
        })
    })

    return (
        <div>
            {holders}

            <style global jsx>{`
                .holderRow {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                }
                .holderLink {
                    text-align: left;
                }
            `}</style>
        </div>
    )
}

export default HoldersList
