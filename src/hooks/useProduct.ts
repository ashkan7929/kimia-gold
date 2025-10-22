import { useEffect, useRef, useState } from 'react';
import { productService } from '../services/productService';
import type { ProductDto } from '../types/product';

type UseProductByIdResult = {
  data?: ProductDto;
  loading: boolean;
  error?: unknown;
  refetch: () => void;
};

export function useProductById(id?: string): UseProductByIdResult {
  const [data, setData] = useState<ProductDto | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(undefined);
  const abortRef = useRef<AbortController | null>(null);

  const fetchData = () => {
    if (!id) return;
    setLoading(true);
    setError(undefined);
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    productService
      .getById(id)
      .then(setData)
      .catch((e) => {
        if ((e as any)?.name !== 'AbortError') setError(e);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
    return () => abortRef.current?.abort();
  }, [id]);

  return { data, loading, error, refetch: fetchData };
}

export function useProductByCode(code?: string): UseProductByIdResult {
  const [data, setData] = useState<ProductDto | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(undefined);
  const abortRef = useRef<AbortController | null>(null);

  const fetchData = () => {
    if (!code) return;
    setLoading(true);
    setError(undefined);
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    productService
      .getByCode(code)
      .then(setData)
      .catch((e) => {
        if ((e as any)?.name !== 'AbortError') setError(e);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
    return () => abortRef.current?.abort();
  }, [code]);

  return { data, loading, error, refetch: fetchData };
}
