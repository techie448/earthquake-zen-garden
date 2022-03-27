import React from 'react';
import "./profile.scss";

function Profile({result}) {
    return (
        <div className={'profile container'}>
            <h2>Profile</h2>
            <div className={'content'}>
                <img src={result.avatarImage}/>
                <strong>First name</strong> <span>{result.firstName}</span>
                <strong>Last name</strong> <span>{result.lastName}</span>
                <strong>Phone</strong> <span>{result.phone}</span>
                <strong>Email</strong> <span>{result.email}</span>
                <strong>Bio</strong> <span>{result.bio}</span>
            </div>
        </div>
    );
}

export default Profile;