import { AppProps } from 'next/app';

import { ConfigProvider, theme } from 'antd';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  );
}
