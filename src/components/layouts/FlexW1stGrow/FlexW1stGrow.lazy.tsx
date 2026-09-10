import { lazy, Suspense, type ReactNode } from "react";

const LazyFlexW1stGrow = lazy(() => import("./FlexW1stGrow"));

const FlexW1stGrow = (props:{children:ReactNode|Array<ReactNode>}) => (
  <Suspense fallback={null}>
    <LazyFlexW1stGrow {...props} />
  </Suspense>
);

export default FlexW1stGrow;
