import React from 'react';

const Profile = ({data}) => {
    return (
    <div data-testid="profileTab" id='content-personal'>
        <h2>Personal Information</h2>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
        <p>Address: {data.address}</p>
    </div>
    )
}

export default Profile;