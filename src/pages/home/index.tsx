import backgroundImageAddress from '@/assets/images/bg.png'
import {useNavigate} from 'react-router-dom'
const HomePage = () => {
  const navigate = useNavigate()
  document.title = 'Rick & Morty'
  return (
    <div
      className='w-full h-screen bg-black bg-cover bg-no-repeat bg-center pt-7 flex justify-center items-center '
      style={{backgroundImage: `url(${backgroundImageAddress})`}}
    >
      <div
        onClick={() => navigate('/characters')}
        className='flex flex-col md:w-1/2 text-center lg:text-2xl p-3 shadow-lg rounded-md bg-teal-500/90 text-white cursor-pointer hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'
      >
        <span>Welcom to Rick & Morty World</span>
        <span>See the Characters</span>
      </div>
    </div>
  )
}

export default HomePage
