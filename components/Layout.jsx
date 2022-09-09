import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <div className='relative min-h-screen overflow-x-hidden antialiased'>
        <NavBar/>
        {children}
    </div>
  )
}

export default Layout