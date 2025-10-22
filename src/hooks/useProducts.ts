import { useEffect, useMemo, useRef, useState } from 'react';
import { productService } from '../services/productService';
import type { ProductDto, ProductListResponse } from '../types/product';
type UseProductsDataArgs = {
  search?: string;
  pageNumber?: number;
  pageSize?: number;
};

type UseProductsDataResult = {
  items: ProductDto[];
  totalPages: number;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  loading: boolean;
  error?: unknown;
  setSearch: (v: string) => void;
  setPageNumber: (n: number) => void;
  refetch: () => void;
};

export function useProductsData(initial: UseProductsDataArgs = {}): UseProductsDataResult {
  const [search, setSearch] = useState(initial.search ?? '');
  const [pageNumber, setPageNumber] = useState(initial.pageNumber ?? 1);
  const [pageSize] = useState(initial.pageSize ?? 12);

  const [data, setData] = useState<ProductListResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(undefined);

  const abortRef = useRef<AbortController | null>(null);
  const rerunRef = useRef(0);

  const fetchData = () => {
    rerunRef.current++;
    setLoading(true);
    setError(undefined);

    abortRef.current?.abort();
    abortRef.current = new AbortController();

    productService
      .getAll(search, pageNumber, pageSize) 
      .then((res) => setData(res))
      .catch((e) => {
        if ((e as any)?.name !== 'AbortError') setError(e);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
    return () => abortRef.current?.abort();
  }, [search, pageNumber, pageSize]);

  const items = useMemo(() => data?.items ?? [], [data]);

  return {
    items,
    totalPages: data?.totalPages ?? 0,
    totalCount: data?.totalCount ?? 0,
    pageNumber,
    pageSize,
    loading,
    error,
    setSearch: (v) => {
      setSearch(v);
      setPageNumber(1); 
    },
    setPageNumber,
    refetch: fetchData,
  };
}
