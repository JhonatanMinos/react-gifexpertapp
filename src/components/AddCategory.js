import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {

    const [InputValue, seTInputValue] = useState('');

    const handleInputchange = ( e ) => {
        seTInputValue( e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if( InputValue.trim().length > 2){
            setCategories( cats => [InputValue,...cats]);
            seTInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
           <input 
                type="text" 
                value={ InputValue } 
                onChange={ handleInputchange } 
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
