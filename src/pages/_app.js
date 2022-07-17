import '../styles/globals.css'
import styles from '../styles/app.module.css'
import Nav from 'components/frame/Nav'
import Footer from 'components/frame/Footer'
import { Provider } from 'react-redux'
import store from 'modules/store'



function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Nav />
        <div className={styles.main}>
          <Component {...pageProps} />
        </div>
        <Footer/>
      </div>
      </Provider>
  )
  
}

export default App;