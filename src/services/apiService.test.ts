import type { Mock } from 'vitest';
import {apiServiceFactory} from './apiService'

describe('ApiService', () => {
    const mockResponse = {
        id: 1,
        title: 'Test Todo',
        completed: false,
    };

    beforeEach(() => {
        const mockedFetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockResponse),
            } as Response),
        );
        vi.stubGlobal('fetch', mockedFetch);
    });

    afterEach(() => {
        vi.clearAllMocks(); // Reset all mocked calls between tests
    });

    it('apiService should use baseurl from factory WHEN no protocol and string url provided', async () => {
        const baseUrl = '/random-base/';
        const api = 'my-api';
        const apiService = apiServiceFactory({
            baseUrl
        });

        const result = await apiService(api);
        expect(result && await result.json()).toEqual(mockResponse);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect((fetch as Mock<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>).mock.calls[0][0]).toBe(baseUrl + api);
    });

    it('apiService should not use baseurl from factory WHEN protocol and string url provided', async () => {
        const baseUrl = '/random-base/';
        const fullUrl = 'http://somedomain.com/myapi/testapi';
        const apiService = apiServiceFactory({
            baseUrl
        });

        const result = await apiService(fullUrl);
        expect(result && await result.json()).toEqual(mockResponse);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect((fetch as Mock<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>).mock.calls[0][0]).toBe(fullUrl);
    });
});

describe('ApiService Negative Case', () => {
    const errorMessage = 'API is down'
    beforeEach(() => {
        const mockedConsoleLog = vi.fn();
        const mockedConsoleError = vi.fn();
        const mockedFetch = vi.fn(() =>
            Promise.reject(errorMessage)
        );

        vi.stubGlobal('fetch', mockedFetch);
        vi.stubGlobal('console', {
            log: mockedConsoleLog,
            error: mockedConsoleError,
        });
    });

    test('handles fetch failure', async () => {
        const baseUrl = '/random-base/';
        const api = 'my-api';
        const apiService = apiServiceFactory({
            baseUrl
        });

        await expect(apiService(api)).rejects.toEqual(new Error(errorMessage));
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledTimes(1);
      });
});