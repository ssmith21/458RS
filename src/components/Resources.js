import React from 'react'
import Resource from './Resource.js'


const Resources = ({resources}) => {
    return (
        <>
            {resources.map((r)=>(      
                <Resource key={r.id} resource={r}/>
            ))}
        </>
    )
}

export default Resources
