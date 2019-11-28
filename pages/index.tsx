import { NextPage } from 'next'
import { ethers, Contract } from 'ethers'
import Head from 'next/head'
import axios from 'axios'

const API_KEY = 'X3SIP83C2DJ8VRBYIF9NSUKRBRGHI6DX22'
const DAO = '0xf739c4d15854cab9874e24a4d1ec084dcaf1f13f'
const SAINT_TOKEN = '0xD275B1550E8ca8Da84c552ACa9313Ec4a5B9bD07'
const BOI_TOKEN = '0x439ce375e3ee4dc203d71958beca3c0f417d65cb'

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

interface Transfer {
    time: string
    value: string
}

const getFinances = async () => {
    let YO = `http://api.etherscan.io/api?module=account&action=tokentx&address=${DAO}&startblock=8972891&endblock=latest&sort=asc&apikey=${API_KEY}`

    const result = await axios.get(YO)

    const data = result.data.result

    const filtered = data.filter(function(log: any) {
        return log.from !== DAO
    })

    const transfers: Transfer[] = filtered.map(function(log: any) {
        console.log(`log\n`, log)

        var date = new Date(log.timeStamp * 1000)
        var dateString = date.toUTCString()
        dateString = dateString.substring(0, dateString.indexOf('GMT')) + 'UTC'

        let wei = ethers.utils.bigNumberify(log.value)
        const value = ethers.utils.formatEther(wei)

        console.log('value ', value)

        const finance: Transfer = {
            time: dateString,
            value: value
        }

        return finance
    })

    return { transfers }
}

const getAddresses = async () => {
    // prettier-ignore
    const abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"creationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_blockNumber","type":"uint256"}],"name":"balanceOfAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_cloneTokenName","type":"string"},{"name":"_cloneDecimalUnits","type":"uint8"},{"name":"_cloneTokenSymbol","type":"string"},{"name":"_snapshotBlock","type":"uint256"},{"name":"_transfersEnabled","type":"bool"}],"name":"createCloneToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"parentToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"generateTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_blockNumber","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transfersEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"parentSnapShotBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"destroyTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenFactory","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_transfersEnabled","type":"bool"}],"name":"enableTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_tokenFactory","type":"address"},{"name":"_parentToken","type":"address"},{"name":"_parentSnapShotBlock","type":"uint256"},{"name":"_tokenName","type":"string"},{"name":"_decimalUnits","type":"uint8"},{"name":"_tokenSymbol","type":"string"},{"name":"_transfersEnabled","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_token","type":"address"},{"indexed":true,"name":"_controller","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"ClaimedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_cloneToken","type":"address"},{"indexed":false,"name":"_snapshotBlock","type":"uint256"}],"name":"NewCloneToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Approval","type":"event"}];

    let contractAddress = '0xD275B1550E8ca8Da84c552ACa9313Ec4a5B9bD07'

    let contract = new ethers.Contract(
        contractAddress,
        abi,
        new ethers.providers.JsonRpcProvider()
    )

    let YO = `https://api.etherscan.io/api?module=logs&action=getLogs&fromBlock=8960961&toBlock=latest&address=${SAINT_TOKEN}&apikey=${API_KEY}`

    const result = await axios.get(YO)

    const logs = parseLogs(result.data.result, contract)

    const addresses: string[] = logs.map(function(log) {
        return log.values['_to'] + '\n'
    })

    return addresses
}

const Home: NextPage<{ addresses: string[] }> = ({ addresses }) => {
    const listItems = addresses.map(address => <li key={address}>{address}</li>)

    return (
        <div>
            <Head>
                <title>DAOSCIPLES</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <h1>$AINT TOKEN HOLDERS</h1>
            <ul>{listItems}</ul>
        </div>
    )
}

Home.getInitialProps = async ({ req }) => {
    const addresses = await getAddresses()

    const finances = await getFinances()

    return { addresses }
}

export default Home
