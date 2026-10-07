import { Suspense } from "react";

import { FigmaScreenPageClient } from "@/components/luna-figma/FigmaScreenPageClient";

export default function FigmaCatchAllPage() {
  return (
    <Suspense fallback={null}>
      <FigmaScreenPageClient />
    </Suspense>
  );
}
