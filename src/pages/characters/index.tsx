import CharactersList from '@/modules/characters/components/charactersList'

const Characters = () => {
  document.title = 'Characters List'
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <CharactersList />
    </div>
  )
}

export default Characters
