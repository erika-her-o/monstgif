import { lazy } from "react";

export const notDefaultExportLazyImport = (key) =>
  lazy(() => import("../components").then((module) => ({ default: module[key] })));
