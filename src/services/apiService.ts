// can be extended to include auth, and any other config values including default headers, etc.
type ConfigType = {
    baseUrl?: string;
}

export type ApiService = (input: RequestInfo | URL, init?: RequestInit) => Promise<void | Response>;

export function apiServiceFactory(config: ConfigType) {
  const { baseUrl } = config;
  const apiService: ApiService = async(input: RequestInfo | URL, init?: RequestInit) => {
    let url: string;

    if (typeof input === 'string' || input instanceof URL) {
      // Input is a URL string
      url = input.toString().startsWith('http') ? input.toString() : `${baseUrl}${input.toString()}`;
    } else {
      // Input is a Request object — safely access its properties
      url = input.url.startsWith('http') ? input.url : `${baseUrl}${input.url}`;
      init = {
        method: input.method,
        headers: input.headers,
        body: input.body,
        mode: input.mode,
        credentials: input.credentials,
        cache: input.cache,
        redirect: input.redirect,
        referrer: input.referrer,
        referrerPolicy: input.referrerPolicy,
        integrity: input.integrity,
        keepalive: input.keepalive,
        signal: input.signal,
        ...init, // allow user-supplied options to override
      };
    }

    return fetch(url, init)
        .catch(error => {
            if (error.name === 'AbortError') {
                // Request was cancelled
                // TODO: improve the error handling/log
                console.log('Fetch request cancelled');
            } else {
                // Handle other errors
                // TODO: improve the error handling/log
                console.error('Fetch error:', error);
            }
            // TODO: make the error more customized and meaningful
            throw new Error(error);
        });
  }

  return apiService;
}