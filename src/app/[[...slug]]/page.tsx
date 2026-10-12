"use client";

import dynamic from "next/dynamic";

// BrowserRouter requires the DOM; render the client router without SSR.
const RootRouter = dynamic(
  () => import("../root-router").then((mod) => mod.RootRouter),
  { ssr: false },
);

export default function CatchAllPage() {
  return <RootRouter />;
}
