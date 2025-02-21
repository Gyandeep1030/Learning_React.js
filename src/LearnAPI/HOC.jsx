import React, { useState } from 'react';

const HOC = Component => {

    
    return (
        (data) => {
        
            return <Component Count = {data.data}></Component>
        }
    )
}

export default HOC;