import Photo from '@/modules/common/Photo'
import {CharactersProps} from './types'

const CharactersContainer: React.FC<CharactersProps> = ({
  id,
  name,
  image,
  status,
  species,
  origin,
  location,
}) => (
  <div
    key={id}
    className='flex flex-row justify-center items-center border-b-2 p-5 space-y-5'
  >
    <div className='flex w-1/3 lg:text-2xl md:text-base font-bold truncate justify-center items-center text-center'>
      <a href={`characters/${id}`}>
        {name}
        <Photo imageAddress={image} altName={name} />
      </a>
    </div>
    <div className='flex flex-col w-2/3 p-5 leading-10 truncate text-gray-50'>
      <p>
        <span className='font-semibold  text-gray-400'>Status: </span>
        {status}
      </p>
      <p>
        <span className='font-semibold  text-gray-400'>Species:</span> {species}
      </p>
      <p>
        <span className='font-semibold  text-gray-400'>Origin Name:</span>{' '}
        {origin.name}
      </p>
      <p>
        <span className='font-semibold  text-gray-400'>Location Name:</span>{' '}
        {location.name}
      </p>
    </div>
  </div>
)

export default CharactersContainer
