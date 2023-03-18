import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* <Head>
          <link rel="stylesheet" href="https://use.typekit.net/zkr2bhm.css" />
        </Head> */}
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
