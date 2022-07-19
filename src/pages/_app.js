import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from 'modules/store'
import Layout from 'components/Frame/Layout'



function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div >
        <Layout>
          <div >
            <Component {...pageProps} />
          </div>
        </Layout>
      </div>
    </Provider>
  )
  
}

export default App;