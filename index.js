import { useState } from 'react';

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}
export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [totalLike, setLikes] = useState(0);

    function handleClick() {
        setLikes(totalLike + 1);
    }

    return (
        <div>
            <Header title="Tugas 1 Front End Next JS" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like ({totalLike})</button>
        </div>
    );
}