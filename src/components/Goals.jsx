import React from 'react';

const goals = [
    "Visit all 7 continents",
    "Try local cuisine in 10 countries",
    "Learn basic phrases in 5 languages",
];

const Goals = () => (
    <section>
        <h2>My Travel Goals</h2>
        <ul>
            {goals.map((goal, index) => (
                <li key={index}>{goal}</li>
            ))}
        </ul>
    </section>
);

export default Goals;
