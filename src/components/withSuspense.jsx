import { Suspense } from "react";

export const withSuspense = (Component, Fallback) => {
  return (props) => {
    return (
      <Suspense fallback={Fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
};
