import Image from 'next/image'

const Navbar = () => {
  return (
    <div style={{backgroundColor:'red'}}>Nav</div>
  )
}

const Footer = () => {
  return (
    <div style={{backgroundColor:'green'}}>Footer</div>
  )
}


const Home = ()=> {
  return (
    <div>
      <Navbar/>
      content here
      <Footer/>
    </div>
  )
}

export default Home