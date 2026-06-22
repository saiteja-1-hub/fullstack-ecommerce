import './Header.css'

function Header(){
  return(
    <nav className="navbar">

      <h1>Product Store</h1>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>

    </nav>
  )
}

export default Header