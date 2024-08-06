import { NavLink } from 'umi';

export default function NavLinkT() {
  return (
    <ul>
      <li>
        <NavLink
          to="messages"
          style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
        >
          Messages
        </NavLink>
      </li>
      <li>
        <NavLink
          to="tasks"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Tasks
        </NavLink>
      </li>
      <li>
        <NavLink to="blog">
          {({ isActive }) => (
            <span className={isActive ? 'active' : undefined}>Blog</span>
          )}
        </NavLink>
      </li>
    </ul>
  );
}
