export const API_KEY = 'X3SIP83C2DJ8VRBYIF9NSUKRBRGHI6DX22'

export const TOKEN_HOLDER_ADDRESS = '0xD275B1550E8ca8Da84c552ACa9313Ec4a5B9bD07'

export const FINANCES_ADDRESS = '0xf739c4d15854cab9874e24a4d1ec084dcaf1f13f'

export const truncate = (fullStr: string, strLen: number) => {
    if (fullStr.length <= strLen) return fullStr

    let separator = '...'

    var sepLen = separator.length,
        charsToShow = strLen - sepLen,
        frontChars = Math.ceil(charsToShow / 2),
        backChars = Math.floor(charsToShow / 2)

    return (
        fullStr.substr(0, frontChars) +
        separator +
        fullStr.substr(fullStr.length - backChars)
    )
}
