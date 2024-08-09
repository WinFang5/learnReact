import { NavLink } from 'umi';
export default function NavButton({ address }: any) {
  return (
    <>
      <button>
        <NavLink
          to={address}
          style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
        >
          {address}
        </NavLink>
      </button>
    </>
  );
}
