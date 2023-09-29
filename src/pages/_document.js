import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GtagScript, GA_TRACKING_ID } from '../analytics'
import injected from '../injected.json'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={injected.defaultLocale}>
        <Head>
          <link
            href='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css'
            rel='stylesheet'
          />
        </Head>
        {GA_TRACKING_ID && <GtagScript />}
        <body>
          <Main />
          <NextScript />
          <script
            async
            src='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js'
          />
        </body>
      </Html>
    )
  }
}
