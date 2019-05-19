import React, { Component, useState } from 'react';

function ExampleWithManyStates() {
    const [age, setAge] = useState(22);
    const [fruit, setFruit] = useState('lemon');
    const [students, setStudents] = useState([
        { name: 'khanhney', favoriteSubject: 'math' },
        { name: 'lucde', favoriteSubject: 'biology' },
    ])

    return (
        <>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student.name} | {student.favoriteSubject}</li>
                ))}
            </ul>
        </>
    )
}

export default ExampleWithManyStates;