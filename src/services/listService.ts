import type { ApiService } from "./apiService";
import type { ListResponse } from "./type";

export async function getList(apiService: ApiService, config?: {
    signal?: AbortSignal | null
}): Promise<ListResponse | undefined> {
    const signal = config?.signal;
    const response = await apiService('list', {
        signal
    });
    if (!response) return;
    return await response.json();
}