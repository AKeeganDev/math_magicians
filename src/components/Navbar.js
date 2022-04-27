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
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <span className="logo">Math Magicians</span>
      <ul>
        <li
          key={links[0].id}
        >
          <NavLink
            className={(navData) => {
              if (navData.isActive) {
                return 'a-link';
              }
              return '';
            }}
            to={links[0].path}
          >
            {links[0].text}
          </NavLink>
        </li>
        <li key={links[1].id}>
          <NavLink
            className={(navData) => {
              if (navData.isActive) {
                return 'a-link';
              }
              return '';
            }}
            to={links[1].path}
          >
            {links[1].text}
          </NavLink>
        </li>
        <li key={links[2].id}>
          <NavLink
            className={(navData) => {
              if (navData.isActive) {
                return 'a-link';
              }
              return '';
            }}
            to={links[2].path}
          >
            {links[2].text}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
