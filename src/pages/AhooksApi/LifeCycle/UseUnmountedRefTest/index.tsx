import { useUnmountedRef,useUnmount } from 'ahooks';
import  { useEffect } from 'react';


export default function UseUnmountedRefTest() {
  const unmountedRef = useUnmountedRef();
  useEffect(()=>{
    if(!unmountedRef.current){
      console.log('component is alive');
    }else {
      console.log('component is dead');
    }
  },[])

  useUnmount(()=>{
    console.log('unmountedRef useUnmount',unmountedRef)
  })
  return <div>UseUnmountedRefTest</div>;
}