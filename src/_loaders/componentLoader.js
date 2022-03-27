import React, {useEffect} from 'react';
import useDatabaseApi from "../_custom_hooks/useDatabaseApi";

const ComponentLoader = ({flag}) => (Component) => ({rest}) => {
    const [{result, loading, error}, setFlag] = useDatabaseApi();
    useEffect(() => {
        setFlag(flag);
    }, [])

    return (<>
        {!!error ? <h2> failed to load data.</h2> :
            !!result ? <Component {...rest} result={result}/> :
                !!loading && <h2> loading ... </h2>}
    </>)
}

export default ComponentLoader;