import Link from 'next/link'

const Navigation = () => (
    <div>
        <span className="nav">
            <Link href="/holders">
                <a title="Holders Page">Holders</a>
            </Link>
            <Link href="/finances">
                <a title="Finances Page">Finances</a>
            </Link>
        </span>
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
            .nav {
                margin-left: 100px;
                flex: 1;
                display: flex;
                flex-direction: column;
            }
        `}</style>
    </div>
)

export default Navigation
