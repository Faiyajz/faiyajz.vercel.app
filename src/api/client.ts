export const apiClient = async <T,>(endpoint: string): Promise<T> => {
    const res = await fetch(endpoint);
    if (!res.ok) {
        throw new Error(`API error: ${res.status} ${res.statusText}`);
    }
    return res.json();
};
