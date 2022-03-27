import {useEffect, useState} from 'react';

const useDatabaseApi = () => {
    const [flag, setFlag] = useState(undefined);
    const [result, setResult] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setLoading(true);
            try {
                const response = await fetch('./database.json');
                const json = await response.json();
                const flag_filter = json[flag];

                !!flag_filter && setResult(flag_filter);
            } catch (error) {
                console.error({error})
                setError(true);
            }
            setLoading(false);
        };
        !!flag && fetchData();
    }, [flag]);

    return [{result, loading, error}, setFlag];
}

export default useDatabaseApi;