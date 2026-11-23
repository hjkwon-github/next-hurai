export type QueryValue = string | number | boolean | null | undefined;

export interface ApiRequestOptions {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  query?: Record<string, QueryValue>;
  body?: unknown;
  headers?: HeadersInit;
  signal?: AbortSignal;
}

/** An HTTP response outside the 2xx range. */
export class ApiError extends Error {
  readonly status: number;
  readonly data: unknown;

  constructor(
    status: number,
    data: unknown,
    message = `API request failed with status ${status}`,
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

export interface ApiClientOptions {
  /** Absolute URL of an external API, for example https://api.example.com/v1/. */
  baseUrl?: string;
  fetcher?: typeof fetch;
}

/**
 * A browser-friendly HTTP client. GitHub Pages serves static files only, so
 * configure an external API rather than a Next.js server route.
 */
export function createApiClient({ baseUrl, fetcher = fetch }: ApiClientOptions = {}) {
  async function request<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
    if (!baseUrl) {
      throw new Error("Set NEXT_PUBLIC_API_BASE_URL to use the API client.");
    }

    const base = new URL(baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
    if (base.protocol !== "https:" && base.protocol !== "http:") {
      throw new Error("API base URL must use HTTP or HTTPS.");
    }
    // Keep endpoint paths within the configured API origin and base path.
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path)) {
      throw new Error("API endpoint must be a relative path.");
    }
    const url = new URL(path.replace(/^\/+/, ""), base);
    if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) {
      throw new Error("API endpoint must stay within the configured base URL.");
    }
    for (const [key, value] of Object.entries(options.query ?? {})) {
      if (value !== undefined && value !== null) url.searchParams.set(key, String(value));
    }

    const headers = new Headers(options.headers);
    headers.set("Accept", headers.get("Accept") ?? "application/json");
    if (options.body !== undefined && !headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }

    const response = await fetcher(url, {
      method: options.method ?? "GET",
      headers,
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
      signal: options.signal,
    });
    const text = await response.text();
    let data: unknown = undefined;
    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }
    }
    if (!response.ok) throw new ApiError(response.status, data);
    return data as T;
  }

  return {
    request,
    get: <T>(path: string, options: Omit<ApiRequestOptions, "method" | "body"> = {}) =>
      request<T>(path, { ...options, method: "GET" }),
    post: <T>(path: string, body?: unknown, options: Omit<ApiRequestOptions, "method" | "body"> = {}) =>
      request<T>(path, { ...options, method: "POST", body }),
    put: <T>(path: string, body?: unknown, options: Omit<ApiRequestOptions, "method" | "body"> = {}) =>
      request<T>(path, { ...options, method: "PUT", body }),
    patch: <T>(path: string, body?: unknown, options: Omit<ApiRequestOptions, "method" | "body"> = {}) =>
      request<T>(path, { ...options, method: "PATCH", body }),
    delete: <T>(path: string, options: Omit<ApiRequestOptions, "method" | "body"> = {}) =>
      request<T>(path, { ...options, method: "DELETE" }),
  };
}

export const api = createApiClient({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL });
