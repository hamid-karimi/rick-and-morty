import React from 'react'

type photoProps = {
  imageAddress: string
  altName: string
}

const Photo: React.FC<photoProps> = ({imageAddress, altName}) => (
  <>
    <img
      src={imageAddress}
      className='rounded-lg lg:w-52 lg:h-52 md:w-40 md:h-40 shadow-lg my-0 mx-auto'
      loading='lazy'
      alt={altName}
    />
  </>
)

export default Photo
