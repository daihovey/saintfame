import axios from 'axios'
import { useState } from 'react'
import { ethers } from 'ethers'
import { API_KEY } from '../../helper'

const AddressBalance = (props: any) => {
    let contractAddress = '0xD275B1550E8ca8Da84c552ACa9313Ec4a5B9bD07'

    let address: string = props.address

    let BALANCE_ENDPOINT = `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${address}&tag=latest&apikey=${API_KEY}`

    console.log(BALANCE_ENDPOINT)
    const [balance, setBalance] = useState('...')

    axios
        .get(BALANCE_ENDPOINT)
        .then(result => {
            const rawAmount = result.data.result
            let wei = ethers.utils.bigNumberify(rawAmount)
            const amountWithDecimal = ethers.utils.formatEther(wei)
            // Parsed value has decimal place .0, removing for aesthetics
            const amount = amountWithDecimal.substring(
                0,
                amountWithDecimal.length - 2
            )

            setBalance(amount)
        })
        .catch(err => {
            return <div></div>
        })

    return (
        <div>
            <span className="balance">{balance}</span>
            <style jsx>{`
                .balance {
                    font-family: Tenor Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    color: #fffafa;
                    text-align: right;
                }
            `}</style>
        </div>
    )
}

export default AddressBalance
