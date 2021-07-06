import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MitoAppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Created by David Breuer." />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MitoAppDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
  }
};

