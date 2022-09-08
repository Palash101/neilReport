import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
  
  <div className='main'>
    <nav className="navbar navbar-expand-lg navbar-light ">
       <a className="navbar-brand" href="#">
        <img src="./images/logo.png" className='logo'/>
       </a>
    </nav>
    <div className='container mt-3'>
      <Component {...pageProps} />
    </div>
  </div>
  
  )
}

export default MyApp
