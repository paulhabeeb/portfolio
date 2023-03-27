import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link rel='icon' href='/favicon.ico' sizes='any' />
                <link rel='icon' href='/favicon.svg' type='image/svg+xml' />

                <link
                    rel='stylesheet'
                    href='https://use.typekit.net/nwv5srn.css'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
