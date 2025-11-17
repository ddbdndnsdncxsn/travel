import React from 'react';

const destinations = [
    { name: 'Paris', region: 'Europe', attraction: 'Eiffel Tower', reason: 'I dream of experiencing the romantic ambiance of the city.' },
    { name: 'Tokyo', region: 'Asia', attraction: 'Shinjuku Gyoen', reason: 'I want to immerse myself in the vibrant culture and delicious cuisine.' },
    { name: 'Cairo', region: 'Africa', attraction: 'Pyramids of Giza', reason: 'The history and architecture fascinate me.' },
    { name: 'Sydney', region: 'Oceania', attraction: 'Sydney Opera House', reason: 'I long to enjoy the stunning views of the harbor.' },
];

const Destinations = () => (
    <section>
        <h2>Dream Destinations</h2>
        <ul>
            {destinations.map((dest) => (
                <li key={dest.name}>
                    <strong>{dest.name}, {dest.region}</strong> - {dest.attraction}<br />
                    {dest.reason}
                </li>
            ))}
        </ul>
    </section>
);

export default Destinations;
