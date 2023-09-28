import { lazy } from "react";

// Dumb components
export * from "./Dumb/LoadingSpinner";
export * from "./Dumb/NavigationTabBottomItem";
export * from "./Dumb/TopNavbar";
// lazy import
export const FeaturedSection = lazy(() => import("./Dumb/FeaturedSection"));
export const FeaturedSectionCard = lazy(
  () => import("./Dumb/FeaturedSectionCard")
);

// AppWrapper components
export * from "./Wrapper/AppPlacement";
