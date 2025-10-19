import { create } from 'zustand';
import type { OrderState } from '../types/order';


export const useOrderStore = create<OrderState>((set) => ({
  isPlacing: false,
  lastOrder: null,
  error: null,

  setPlacing: (v) => set({ isPlacing: v }),
  setResult: (o) => set({ lastOrder: o, error: null }),
  setError: (e) => set({ error: e }),
  reset: () => set({ isPlacing: false, lastOrder: null, error: null }),
}));
