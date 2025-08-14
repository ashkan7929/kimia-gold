/* src/lib/apiClient.ts */
export class ApiClient {
  private base = import.meta.env.VITE_API_BASE_URL || 'https://vemclub.com/api';
  private timeout = Number(import.meta.env.VITE_TIMEOUT_MS || 15000);
  private get token() { return localStorage.getItem('auth.token'); }

  async post<T>(url: string, body?: unknown, signal?: AbortSignal): Promise<T> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeout);

    try {
      const res = await fetch(this.base + url, {
        method: 'POST',
        headers: {
          'accept': 'text/plain, application/json, */*',
          'Content-Type': 'application/json',
          ...(this.token ? { 'Authorization': `Bearer ${this.token}` } : {})
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: signal ?? controller.signal
      });

      const text = await res.text();
      let data: any = text ? JSON.parse(text) : {};

      if (!res.ok) {
        // Handle 401 - redirect to auth
        // if (res.status === 401) {
        //   localStorage.removeItem('auth.token');
        //   window.location.href = '/auth';
        // }
        throw {
          status: res.status,
          message: data?.message || res.statusText,
          details: data
        };
      }

      return data as T;
    } finally {
      clearTimeout(timer);
    }
  }

  async get<T>(url: string, signal?: AbortSignal): Promise<T> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeout);

    try {
      const res = await fetch(this.base + url, {
        method: 'GET',
        headers: {
          'accept': 'text/plain, application/json, */*',
          ...(this.token ? { 'Authorization': `Bearer ${this.token}` } : {})
        },
        signal: signal ?? controller.signal
      });

      const text = await res.text();
      let data: any = text ? JSON.parse(text) : {};

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem('auth.token');
          window.location.href = '/auth';
        }
        throw {
          status: res.status,
          message: data?.message || res.statusText,
          details: data
        };
      }

      return data as T;
    } finally {
      clearTimeout(timer);
    }
  }
}

export const api = new ApiClient();