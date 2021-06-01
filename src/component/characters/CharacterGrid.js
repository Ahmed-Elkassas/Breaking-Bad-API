import React from 'react';
import CharacterItems from './CharacterItems';
import Spinner from '../Spinner'

const CharacterGrid = ({ items, loading }) => {
    return loading ? <Spinner/> : (<section className='cards'>
        {items.map((item) => (
            <CharacterItems key={item.char_id} item={item}></CharacterItems>
        ))}
    </section>);
}

export default CharacterGrid;