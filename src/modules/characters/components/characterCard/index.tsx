import Photo from '@/modules/common/photo'
import TextContainer from '@/modules/common/textContainer'
import {CharactersProps} from '@/modules/characters/types/types.d'

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
      <a className='flex flex-col' href={`characters/${id}`}>
        <span className='pb-2'>{name}</span>
        <Photo imageAddress={image} altName={name} />
      </a>
    </div>
    <div className='flex flex-col w-2/3 p-5 leading-10 truncate text-gray-50'>
      <TextContainer title='Status: ' content={status} />
      <TextContainer title='Species: ' content={species} />
      <TextContainer title='Origin Name: ' content={origin.name} />
      <TextContainer title='Location Name: ' content={location.name} />
    </div>
  </div>
)

export default CharactersContainer
