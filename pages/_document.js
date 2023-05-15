import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='preload'
            href='/fonts/Inter.var.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='icon'
            type='image/png'
            href='/favicon/favicon.png'
          />
          <meta name='msapplication-TileColor' content='#000' />
          <meta name='theme-color' content='#000' />
        </Head>
        <body className='bg-black text-gray-100 font-medium'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
