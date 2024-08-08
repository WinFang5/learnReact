
import React, { useEffect } from 'react';
import { useDocumentVisibility } from 'ahooks';
export default function UseDocumentVisibilityTest() {
  const documentVisibility = useDocumentVisibility();

  useEffect(() => {
    console.log(`Current document visibility state: ${documentVisibility}`);
  }, [documentVisibility]);

  return (
    <>
      <h3>监听页面是否可见，参考 visibilityState API</h3>
      <p>Current document visibility state: {documentVisibility}</p>
    </>
  );
}
