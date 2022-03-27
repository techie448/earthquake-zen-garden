import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './home.scss';
import {formatDate, sortProperties} from "../_utilities/utilities";

function Home({result}) {
    const [sortedFeatures, setSortedFeatures] = useState(result.features);
    const [sortedBy, setSortedBy] = useState({prop: 'time', order: 1});
    useEffect(() => {
        (!!sortedBy) && setSortedFeatures(prevState =>
            [...prevState.sort((a, b) => sortProperties(a, b, sortedBy))])
    }, [sortedBy, setSortedFeatures])
    const handleOnClick = (prop) => setSortedBy(prevSortedBy => prevSortedBy?.prop === prop ? {
        prop,
        order: -prevSortedBy.order
    } : {prop, order: 1})
    return (
        <div className={'home container'}>
            <h2>{result.metadata.title}</h2>
            <table className={'content'}>
                <tr className={'headers'}>
                    <td onClick={() => handleOnClick('place')}>Title</td>
                    <td onClick={() => handleOnClick('mag')}>Magnitude</td>
                    <td onClick={() => handleOnClick('time')}>Time</td>
                </tr>
                {sortedFeatures
                    .map((feature, index) => (<tr className={'feature'} key={index}>
                            <Link to={`details?index=${feature.id}`}>
                                <td className={'title'}>{feature.properties.place}</td>
                            </Link>
                            <td className={'mag'}>{feature.properties.mag}</td>
                            <td className={'date'}>{formatDate(feature.properties.time)}</td>
                        </tr>
                    ))}
            </table>
        </div>
    );
}

export default Home;