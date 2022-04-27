import { NavLink } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <ul>
        <li key={links[0].id}>
          <NavLink to={links[0].path}>
            {links[0].text}
          </NavLink>
        </li>
        <li key={links[1].id}>
          <NavLink to={links[1].path}>
            {links[1].text}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
