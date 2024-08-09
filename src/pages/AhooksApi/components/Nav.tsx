import { NavLink } from 'umi';
import NavButton from './NavButton'

export default function Nav() {
  return (
    <>
      <div>
        <h2>useRequest</h2>
        <NavButton address='loadingdelay' />
        <NavButton address='pollingInterval' />
      </div>
      <hr />
      <div>
        <h2>Scene</h2>
        <NavButton address='useantdtable' />
        <NavButton address='usefusiontable' />
        <NavButton address='useinfinitescroll' />
        <NavButton address='usepagination' />
        <NavButton address='usedynamiclist' />
        <NavButton address='usevirtuallist' />
        <NavButton address='usehistorytravel' />
        <NavButton address='usenetwork' />
        <NavButton address='useselections' />
        <NavButton address='usecountdown' />
        <NavButton address='usecounter' />
        <NavButton address='usetextselection' />
        <NavButton address='usewebsocket' />
      </div>
      <hr />
      <div>
        <h2>LifeCycle</h2>
        <NavButton address='usemount' />
        <NavButton address='useunmount' />
        <NavButton address='useunmountedref' />
      </div>
      <hr />
      <div>
        <h2>State</h2>
        <NavButton address='usesetstate' />
        <NavButton address='useboolean' />
        <NavButton address='usetoggle' />
        <NavButton address='useurlstate' />
        <NavButton address='usecookiestate' />
        <NavButton address='uselocalstoragestate' />
        <NavButton address='usesessionstoragestate' />
        <NavButton address='usedebounce' />
        <NavButton address='usethrottle' />
        <NavButton address='usemap' />
        <NavButton address='useset' />
        <NavButton address='useprevious' />
        <NavButton address='userafstate' />
        <NavButton address='useSafeState' />
        <NavButton address='useGetState' />
        <NavButton address='useResetState' />
        <NavButton address='useUpdateEffect' />
        <NavButton address='useUpdateLayoutEffect' />
        <NavButton address='useAsyncEffect' />
        <NavButton address='useDebounceEffect' />
        <NavButton address='useDebounceFn' />
        <NavButton address='useThrottleFn' />
        <NavButton address='useThrottleEffect' />
        <NavButton address='useDeepCompareEffect' />
        <NavButton address='useDeepCompareLayoutEffect' />
        <NavButton address='useInterval' />
        <NavButton address='useRafInterval' />
        <NavButton address='useTimeout' />
        <NavButton address='useRafTimeout' />
        <NavButton address='useLockFn' />
        <NavButton address='useUpdate' />
      </div>
      <hr/>
      <div>
        <h2>Dom</h2>
        <NavButton address='useEventListener' />
        <NavButton address='useClickAway' />
        <NavButton address='useDocumentVisibility' />
        <NavButton address='useDropuseDrag' />
      </div>
    </>
  );
}
