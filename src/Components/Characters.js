import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'
const Characters = ({items, isLoading}) =>
{
    return isLoading?<h1><Spinner /></h1>:(
        <section className='cards'>
            {items.map((items) => (
                <CharacterItem key={items.char_id} item={items} /> 
            ))}
        </section>
    )
}

export default Characters;