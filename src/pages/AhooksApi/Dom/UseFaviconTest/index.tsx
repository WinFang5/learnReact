import { useFavicon } from 'ahooks';
import { useState } from 'react';

const DEFAULT_FAVICON_URL = 'https://ahooks.js.org/simple-logo.svg';
const GOOGLE_FAVICON_URL = 'https://www.google.com/favicon.ico';

export default function UseFaviconTest() {
  const [url, setUrl] = useState<string>(DEFAULT_FAVICON_URL);
  useFavicon(url);

  return (
    <>
      <h3>设置页面的 favicon。</h3>
      <p>
        Current Favicon: <span>{url}</span>
      </p>
      <button
        style={{ marginRight: 16 }}
        onClick={() => {
          setUrl(GOOGLE_FAVICON_URL);
        }}
      >
        Change To Google Favicon
      </button>
      <button
        onClick={() => {
          setUrl(DEFAULT_FAVICON_URL);
        }}
      >
        Back To AHooks Favicon
      </button>
    </>
  );
}
