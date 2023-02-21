import { useEffect, useRef, useState } from "react";

const isObjectEqual = (objA, objB) => {
    return JSON.stringify(objA) === JSON.stringify(objB);
};

export const useFetch = (url, options) => {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState();
    const [shouldRunAgain, setShouldRunAgain] = useState(false);

    const urlRef = useRef(url);
    const optionsRef = useRef(options);
    const abortControllerRef = useRef(new AbortController());

    useEffect(() => {
        let changed = false;

        if (!isObjectEqual(url, urlRef.current)) {
            urlRef.current = url;
            changed = true;
        }

        if (!isObjectEqual(options, optionsRef.current)) {
            optionsRef.current = options;
            changed = true;
        }

        if (changed) {
            setShouldRunAgain((state) => !state);
        }
    }, [url, options]);

    useEffect(() => {
        setLoading(true);

        const abortController = new AbortController();
        abortControllerRef.current = abortController;

        const fetchPosts = async () => {
            await new Promise((r) => setTimeout(r, 3000));
            try {
                const response = await fetch(urlRef.current, {
                    ...optionsRef.current,
                    signal: abortControllerRef.current.signal,
                });
                const jsonResult = await response.json();

                setResult(jsonResult);
                setLoading(false);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setLoading(false);
                    console.log(error);
                    throw error;
                }
            }
        };

        fetchPosts();

        return () => {
            abortControllerRef.current.abort();
        };
    }, [shouldRunAgain]);

    return [result, loading];
};
