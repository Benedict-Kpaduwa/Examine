import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='relative min-h-screen overflow-x-hidden antialiased pb-[0px]'>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout