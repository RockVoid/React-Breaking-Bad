import React from 'react';

const CharacterDisplay = ({ character }) => {
    return (
        <div className="card">
            <img 
                src={character.img}
                className="card-img"
                alt=''    
            />
            <div className="char-info">
                <ul>
                    <li><strong>Actor Name: </strong>{character.portrayed}</li>
                    <li><strong>Name: </strong>{character.name}</li>
                    <li><strong>BirthDay: </strong>{character.birthday}</li>
                    <li><strong>Status: </strong>{character.status}</li>
                    <li><strong>Nickname: </strong>{character.nickname}</li>
                </ul>
            </div>
        </div>
    );
}

export default CharacterDisplay;
