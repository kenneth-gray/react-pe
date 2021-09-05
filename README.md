# React PE

Progressive enhancement for React websites.

## Example usage

```jsx
// App.tsx
import React from 'react';
import { ProgressiveEnhancementProvider } from 'react-pe';

import Routes from './Routes';

function App() {
  return (
    <ProgressiveEnhancementProvider>
      <Routes />
    </ProgressiveEnhancementProvider>
  );
}

export default App;

// SomeRoute.tsx
import React from 'react';
import { ProgressivelyEnhance } from 'react-pe';

function SomeRoute() {
  return (
    <>
      <h1>SomeRoute</h1>
      <ProgressivelyEnhance enhancement={<WithJs />}>
        <WithoutJs />
      </ProgressivelyEnhance>
    </>
  );
}

function WithoutJs() {
  // HTML/CSS only component
}

function WithJs() {
  // Fancy JS component
}

export default SomeRoute;
```

See an example of upgrading to an interactive accordion by checking out the `example` folder.
