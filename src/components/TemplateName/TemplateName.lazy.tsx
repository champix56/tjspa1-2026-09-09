import { lazy, Suspense, type ReactNode } from "react";

const LazyTemplateName = lazy(() => import("./TemplateName"));

const TemplateName = (props:{children:ReactNode|Array<ReactNode>}) => (
  <Suspense fallback={null}>
    <LazyTemplateName {...props} />
  </Suspense>
);

export default TemplateName;
