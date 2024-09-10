import React from 'react';

const Experience = ({data}) => {
    return (
        <div data-testid="experienceTab" id='content-personal'>
            <h2>Professional Information</h2>
            <p>Job Description: {data.jobDescription}</p>
            <p>Skills: {data.skills}</p>
            <p>Experience: {data.experience}</p>
            <p>Hobbies: {data.hobbies}</p>
        </div>
    )
}

export default Experience;