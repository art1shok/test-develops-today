import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    {/* eslint-disable-next-line */}
    <Component {...pageProps} />
    <GlobalStyles />
  </>
);

export default MyApp;
