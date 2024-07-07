// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="/overview"><a>Overview</a></Link></li>
        <li><Link href="/bio"><a>About the Author</a></Link></li>
      </ul>
      <style jsx>{`
        nav {
          background: #2A3D45;
          padding: 1rem;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
        }
        li {
          margin: 0 1rem;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
