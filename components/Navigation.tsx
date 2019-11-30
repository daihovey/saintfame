import Link from 'next/link'

const style = {}

const linkStyle = {
    marginRight: 15
}

const Navigation = () => (
    <div style={style}>
        <Link href="/holders">
            <a style={linkStyle} title="Holders Page">
                Holders
            </a>
        </Link>
        <Link href="/finances">
            <a style={linkStyle} title="Finances Page">
                Finances
            </a>
        </Link>
        <style jsx>{`
            h1,
            a {
                font-family: 'Tenor Sans';
                font-size: 25px;
                line-height: 40px;
                color: #ff00d6;
            }

            a {
                text-decoration: none;
            }

            a:hover {
                opacity: 0.6;
            }
            a:selected {
                color: #ff00d6;
            }
        `}</style>
    </div>
)

export default Navigation
