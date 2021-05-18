import React from 'react';
import Job from '../Job/Job';

const jobs = [
    {
        title: 'Front-end-developer',
        type: 'Remote',
        city: 'Kushtia',
        openings: 10,
        skills: 'HTML, CSS, React, Node js, Firebase, MongoDB',
        ctc: '29,0000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita vitae sequi nobis unde minus nostrum facilis incidunt reprehenderit tempora.'
    },
    {
        title: 'Front-end-developer',
        type: 'Remote',
        city: 'Kushtia',
        openings: 10,
        skills: 'HTML, CSS, React, Node js, Firebase, MongoDB',
        ctc: '29,0000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita vitae sequi nobis unde minus nostrum facilis incidunt reprehenderit tempora.'
    },
    {
        title: 'Front-end-developer',
        type: 'Remote',
        city: 'Kushtia',
        openings: 10,
        skills: 'HTML, CSS, React, Node js, Firebase, MongoDB',
        ctc: '29,0000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita vitae sequi nobis unde minus nostrum facilis incidunt reprehenderit tempora.'
    },
    {
        title: 'Front-end-developer',
        type: 'Remote',
        city: 'Kushtia',
        openings: 10,
        skills: 'HTML, CSS, React, Node js, Firebase, MongoDB',
        ctc: '29,0000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita vitae sequi nobis unde minus nostrum facilis incidunt reprehenderit tempora.'
    },
    {
        title: 'Front-end-developer',
        type: 'Remote',
        city: 'Kushtia',
        openings: 10,
        skills: 'HTML, CSS, React, Node js, Firebase, MongoDB',
        ctc: '29,0000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita vitae sequi nobis unde minus nostrum facilis incidunt reprehenderit tempora.'
    },
    {
        title: 'Front-end-developer',
        type: 'Remote',
        city: 'Kushtia',
        openings: 10,
        skills: 'HTML, CSS, React, Node js, Firebase, MongoDB',
        ctc: '29,0000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita vitae sequi nobis unde minus nostrum facilis incidunt reprehenderit tempora.'
    },
]

const Jobs = () => {
    return (
        <div className="row container-fluid">
            <h1 className="text-center my-4 text-secondary">Available Jobs</h1>
            {
                jobs.map(job => <Job job={job}/>)
            }
        </div>
    );
};

export default Jobs;