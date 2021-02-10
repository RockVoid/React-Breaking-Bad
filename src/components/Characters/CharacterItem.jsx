import React from 'react';
import CharacterDisplay from './Character-display';
import Load from '../Ui/Loading';;

const CharacterItem = ({ isLoading, items }) => {
    return isLoading ? ( 
        <Load />
    ) : (
    <section>
        {items.map(item => (
            <CharacterDisplay key={item.char_id} character={item}/>
        ))}
    </section>);
}

export default CharacterItem;
