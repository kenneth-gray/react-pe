import '@reach/accordion/styles.css';
import { ProgressiveEnhancementProvider } from '../../dist/progressive-enhancement';

import './index.css';

function MyApp({ Component, pageProps }) {
  return (
    <ProgressiveEnhancementProvider>
      <Component {...pageProps} />
    </ProgressiveEnhancementProvider>
  );
}

export default MyApp;
