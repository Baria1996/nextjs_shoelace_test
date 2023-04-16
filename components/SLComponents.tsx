import dynamic from "next/dynamic";

export const SlButton = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/button"),
  { ssr: false }
);

export const SlIcon = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/icon"),
  { ssr: false }
);

export const SlInput = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/input"),
  { ssr: false }
);

export const SLSelect = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/select"),
  { ssr: false }
);

export const SLOption = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/option"),
  { ssr: false }
);

export const SLRange = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/range"),
  { ssr: false }
);

export const SlDropdown = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/dropdown"),
  { ssr: false }
);

export const SlMenu = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/menu"),
  { ssr: false }
);

export const SlMenuItem = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/menu-item"),
  { ssr: false }
);

export const SlTree = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/tree"),
  { ssr: false }
);

export const SlTreeItem = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/tree-item"),
  { ssr: false }
);
