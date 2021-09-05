import type { ReactElement, ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ProgressiveEnhancementContext = createContext<null | boolean>(null);

function ProgressiveEnhancementProvider({ children }: { children: ReactNode }) {
  const [isJsAvailable, setIsJsAvailable] = useState(false);

  // useEffect only runs on client so hydration will work as expected
  useEffect(() => {
    setIsJsAvailable(true);
  }, [setIsJsAvailable]);

  return (
    <ProgressiveEnhancementContext.Provider value={isJsAvailable}>
      {children}
    </ProgressiveEnhancementContext.Provider>
  );
}

function useIsJsAvailable() {
  const isJsAvailable = useContext(ProgressiveEnhancementContext);

  if (isJsAvailable == null) {
    throw new Error(
      'useIsJsAvailable can only be used within a ProgressiveEnhancementProvider',
    );
  }

  return isJsAvailable;
}

function ProgressivelyEnhance({
  enhancement,
  children = null,
}: {
  enhancement: ReactNode;
  children?: ReactNode;
}) {
  const isJsAvailable = useIsJsAvailable();

  if (isJsAvailable) {
    return enhancement as ReactElement | null;
  }

  return children as ReactElement | null;
}

export {
  ProgressiveEnhancementProvider,
  ProgressivelyEnhance,
  useIsJsAvailable,
};
