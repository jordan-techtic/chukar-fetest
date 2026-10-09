"use client";

import { useCallback, useState } from "react";

export function useFigmaPagination(totalPages = 10) {
  const [currentPage, setCurrentPage] = useState(1);
  const goPrev = useCallback(() => {
    setCurrentPage((p) => Math.max(1, p - 1));
  }, []);
  const goNext = useCallback(() => {
    setCurrentPage((p) => p + 1);
  }, []);
  const isActive = useCallback((page: number) => currentPage === page, [currentPage]);

  return { currentPage, setCurrentPage, goPrev, goNext, isActive, totalPages };
}
