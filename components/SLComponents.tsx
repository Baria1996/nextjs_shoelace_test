import dynamic from "next/dynamic";

export const SlButton = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/button"),
  { ssr: false }
);

export const SlIcon = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/icon"),
  { ssr: false }
);
