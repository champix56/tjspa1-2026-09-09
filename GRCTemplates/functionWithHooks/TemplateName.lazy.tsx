import { lazy, Suspense } from "react";

const LazyTemplateName = lazy(() => import("./TemplateName"));

const TemplateName = (props: object) => (
  <Suspense fallback={null}>
    <LazyTemplateName {...props} />
  </Suspense>
);

export default TemplateName;
