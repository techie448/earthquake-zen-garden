import React from 'react';
import {useLocation} from "react-router";
import "./detail.scss";
import {extractFeaturePrope, extractId, formatDate} from "../_utilities/utilities";

function Detail({result}) {
    const {search} = useLocation();
    const id = extractId(search);
    const featureProps = extractFeaturePrope(result, id);

    return !featureProps ?
        <h2>Details not available. Please use the header logo to go back to Homepage.</h2> : (
            <div className={'detail container'}>
                <h2>{featureProps.title}</h2>
                <table className={'content'}>
                    <tr>
                        <th>Title</th>
                        <td>{featureProps.title}</td>
                    </tr>
                    <tr>
                        <th>Magnitude</th>
                        <td>{featureProps.mag}</td>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <td>{formatDate(featureProps.time)}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{featureProps.status}</td>
                    </tr>
                    <tr>
                        <th>Tsunami</th>
                        <td>{featureProps.tsunami}</td>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <td>{featureProps.type}</td>
                    </tr>
                </table>
            </div>
        );
}

export default Detail;