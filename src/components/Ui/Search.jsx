import React, { useState } from 'react';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');

    const onChange =  query => {
        setText(query);
        getQuery(query);
    }

    return (
        <input 
            className="search"
            type="text"
            value={text}
            onChange={e => onChange(e.target.value)}
            placeholder="Search Characters"
        />
    );
}

export default Search;
