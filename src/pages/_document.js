import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
	  const initialProps = await Document.getInitialProps(ctx)
	  return { ...initialProps }
	}
  
	render() {
	  return (
		  <Html lang='ko'>
			<Head>
			  <meta charSet="utf-8" />
			  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			  <meta name="description" content="Best Contents" />
			  <link rel="" href="" />
			  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
			</Head>
			<body>
			  <Main />
			  <NextScript />
			  <script
			  ></script>
			</body>
		</Html>
	  )
	}
  }
  
  export default MyDocument