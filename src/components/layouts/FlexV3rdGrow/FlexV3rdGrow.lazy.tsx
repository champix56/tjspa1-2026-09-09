import { lazy, Suspense, type ReactNode } from "react";

const LazyFlexV3rdGrow = lazy(() => import("./FlexV3rdGrow"));

const FlexV3rdGrow = (props:{children:ReactNode|Array<ReactNode>}) => (
  <Suspense fallback={null}>
    <LazyFlexV3rdGrow {...props} />
  </Suspense>
);

export default FlexV3rdGrow;
