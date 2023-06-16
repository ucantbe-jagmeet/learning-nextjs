import Link from 'next/link'

function Navbar() {
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className='main-nav'>
      <li>
          <Link href='/' legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/dashboard' legacyBehavior>
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href='/blog' legacyBehavior>
            <a>Blog</a>
          </Link>
        </li>

        <li>
          <a href='#'>Sign In</a>
        </li>
        <li>
          <a href='#'>Sign Out</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar