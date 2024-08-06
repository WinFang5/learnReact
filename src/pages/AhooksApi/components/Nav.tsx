import { NavLink } from 'umi';

export default function Nav() {
  return (
    <>
      <div>
        <h2>useRequest</h2>
        <button>
          <NavLink
            to="loadingdelay"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            Loading Delay
          </NavLink>
        </button>
        <button>
          <NavLink
            to="pollingInterval"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            轮询
          </NavLink>
        </button>
      </div>
      <hr />
      <div>
        <h2>Scene</h2>
        <button>
          <NavLink
            to="useantdtable"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useAntdTable
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usefusiontable"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useFusionTable
          </NavLink>
        </button>
        <button>
          <NavLink
            to="useinfinitescroll"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useInfiniteScroll
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usepagination"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            usePagination
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usedynamiclist"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useDynamicList
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usevirtuallist"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useVirtualList
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usehistorytravel"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useHistoryTravel
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usenetwork"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useNetwork
          </NavLink>
        </button>
        <button>
          <NavLink
            to="useselections"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useSelections
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usecountdown"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useCountDown
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usecounter"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useCounter
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usetextselection"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useTextSelection
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usewebsocket"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useWebSocket
          </NavLink>
        </button>
      </div>
      <hr />
      <div>
        <h2>LifeCycle</h2>
        <button>
          <NavLink
            to="usemount"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useMount
          </NavLink>
        </button>
        <button>
          <NavLink
            to="useunmount"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useUnmount
          </NavLink>
        </button>
        <button>
          <NavLink
            to="useunmountedref"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useUnmountedRef
          </NavLink>
        </button>
      </div>
      <hr />
      <div>
        <h2>State</h2>
        <button>
          <NavLink
            to="usesetstate"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useSetState
          </NavLink>
        </button>
        <button>
          <NavLink
            to="useboolean"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useBoolean
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usetoggle"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useToggle
          </NavLink>
        </button>
        <button>
          <NavLink
            to="useurlstate"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useUrlState
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usecookiestate"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useCookieState
          </NavLink>
        </button>
        <button>
          <NavLink
            to="uselocalstoragestate"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useLocalStorageState
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usesessionstoragestate"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useSessionStorageState
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usedebounce"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useDebounce
          </NavLink>
        </button>
        <button>
          <NavLink
            to="usethrottle"
            style={({ isActive }): any => (isActive ? { color: 'red' } : {})}
          >
            useThrottle
          </NavLink>
        </button>
      </div>
      <hr />
    </>
  );
}
