import React from 'react'

type photoProps = {
    imageAddress: string
    altName: string
}

const Photo: React.FC<photoProps> = ({ imageAddress, altName }) => (

    <>
        <img src={imageAddress} className='rounded-lg lg:w-52 lg:h-52 md:w-20 md:h-20 shadow-lg my-0 mx-auto' loading="lazy" alt={altName} />
    </>

)

export default Photo