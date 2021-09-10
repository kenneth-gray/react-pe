import React from 'react';
import { hydrate, render } from 'react-dom';
import { renderToString } from 'react-dom/server';

import {
  ProgressiveEnhancementProvider,
  ProgressivelyEnhance,
  useIsJsAvailable,
} from './progressive-enhancement';

function ProgressivelyEnhanceComponent() {
  return (
    <ProgressiveEnhancementProvider>
      <ProgressivelyEnhance enhancement="With JS">No JS</ProgressivelyEnhance>
    </ProgressiveEnhancementProvider>
  );
}

function IsJsAvailableComponent() {
  return (
    <ProgressiveEnhancementProvider>
      <IsJsAvailableComponentInternal />
    </ProgressiveEnhancementProvider>
  );
}

function IsJsAvailableComponentInternal() {
  const isJsAvailable = useIsJsAvailable();

  return String(isJsAvailable) as unknown as JSX.Element;
}

describe('ProgressivelyEnhance', () => {
  it('renders children on the server', () => {
    const renderedString = renderToString(<ProgressivelyEnhanceComponent />);

    expect(renderedString).toEqual('No JS');
  });

  it('hydration renders children on the client', () => {
    const span = document.createElement('span');
    span.textContent = renderToString(<ProgressivelyEnhanceComponent />);

    hydrate(<ProgressivelyEnhanceComponent />, span);

    expect(span.textContent).toEqual('No JS');
  });

  it('render renders enhancement on the client', () => {
    const span = document.createElement('span');
    span.textContent = renderToString(<ProgressivelyEnhanceComponent />);

    hydrate(<ProgressivelyEnhanceComponent />, span);
    render(<ProgressivelyEnhanceComponent />, span);

    expect(span.textContent).toEqual('With JS');
  });
});

describe('useIsJsAvailable', () => {
  it('returns false on the server', () => {
    const renderedString = renderToString(<IsJsAvailableComponent />);

    expect(renderedString).toEqual('false');
  });

  it('hydration returns false on the client', () => {
    const span = document.createElement('span');
    span.textContent = renderToString(<IsJsAvailableComponent />);

    hydrate(<IsJsAvailableComponent />, span);

    expect(span.textContent).toEqual('false');
  });

  it('render returns true on the client', () => {
    const span = document.createElement('span');
    span.textContent = renderToString(<IsJsAvailableComponent />);

    hydrate(<IsJsAvailableComponent />, span);
    render(<IsJsAvailableComponent />, span);

    expect(span.textContent).toEqual('true');
  });
});
