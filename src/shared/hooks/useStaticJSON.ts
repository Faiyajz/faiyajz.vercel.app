import { useEffect, useState } from "react";

export const useStaticJSON = <T,>(path: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(path)
            .then((r) => r.json())
            .then(setData)
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false));
    }, [path]);

    return { data, loading, error };
};
