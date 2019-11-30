import { NextPage } from 'next'
import { ethers, Contract } from 'ethers'
import Head from 'next/head'
import axios from 'axios'

const API_KEY = 'X3SIP83C2DJ8VRBYIF9NSUKRBRGHI6DX22'
const DAO = '0xf739c4d15854cab9874e24a4d1ec084dcaf1f13f'

let FINANCES_ENDPOINT = `http://api.etherscan.io/api?module=account&action=tokentx&address=${DAO}&startblock=8972891&endblock=latest&sort=asc&apikey=${API_KEY}`

const provider = new ethers.providers.EtherscanProvider('mainnet', API_KEY)

// prettier-ignore
const financeContractABI = [{"constant":true,"inputs":[],"name":"proxyType","outputs":[{"name":"proxyTypeId","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"isDepositable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"appId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kernel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_kernel","type":"address"},{"name":"_appId","type":"bytes32"},{"name":"_initializePayload","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"ProxyDeposit","type":"event"}]

let financeAddress = '0xf739C4d15854CaB9874E24a4D1Ec084DCAF1F13F'

let financeContract = new ethers.Contract(
    financeAddress,
    financeContractABI,
    new ethers.providers.JsonRpcProvider()
)

interface Transfer {
    time: string
    amount: string
    reference: string
    address: string
}

interface ParsedTransfer {
    time: string
    amount: string
    hash: string
}

interface InputData {
    reference: string
    fromAddress: string
}

const getFinanceTransactions = async (
    transactionHash: string
): Promise<InputData> => {
    let tx = await provider.getTransaction(transactionHash)

    //Function: deposit(address _token, uint256 _amount, string _reference)
    let abi = ['deposit(address _token, uint256 _amount, string _reference)']

    let iface = new ethers.utils.Interface(abi)

    const transaction = iface.parseTransaction(tx)

    const referenceString = transaction.args[2]

    const inputData: InputData = {
        reference: referenceString,
        fromAddress: tx.from
    }

    return inputData
}

const getFinances = async () => {
    let transfers: Transfer[] = []

    const result = await axios.get(FINANCES_ENDPOINT)

    const data = result.data.result

    // Don't show transfers from DAO, only incomming
    const filtered = data.filter(function(log: any) {
        return log.from !== DAO
    })

    const parsedTransfers: ParsedTransfer[] = filtered.map(function(log: any) {
        var date = new Date(log.timeStamp * 1000)
        var dateString = date.toLocaleDateString()

        let wei = ethers.utils.bigNumberify(log.value)
        const amount = ethers.utils.formatEther(wei) + ' ' + log.tokenSymbol

        const transactionHash = log.hash

        const parsed: ParsedTransfer = {
            time: dateString,
            amount: amount,
            hash: transactionHash
        }

        return parsed
    })

    for (let parsed of parsedTransfers) {
        let inputData = await getFinanceTransactions(parsed.hash)

        const transfer: Transfer = {
            time: parsed.time,
            amount: parsed.amount,
            reference: inputData.reference,
            address: inputData.fromAddress
        }

        transfers.push(transfer)
    }

    return transfers
}

const Finances: NextPage<{ finances: Transfer[] }> = ({ finances }) => {
    const listItems = finances.map(finance => (
        <li key={finance.address}>
            {finance.time} -- {finance.address} -- {finance.amount} --
            {finance.reference}
        </li>
    ))

    return (
        <div>
            <Head>
                <title>Finances</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <h1>DAO FINANCES</h1>
            <ul>{listItems}</ul>
        </div>
    )
}

Finances.getInitialProps = async ({ req }) => {
    const finances = await getFinances()

    return { finances }
}

export default Finances
