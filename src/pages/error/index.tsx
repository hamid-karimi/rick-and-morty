import backgroundImageAddress from '@/assets/images/lost.png'
import {useNavigate} from 'react-router-dom'

const ErrorPage = () => {
  document.title = 'Error'
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div
      className='w-full min-h-screen absolute inset-0 bg-black bg-cover bg-no-repeat bg-center pt-7 flex justify-center items-end '
      style={{backgroundImage: `url(${backgroundImageAddress})`}}
    >
      <div className='flex flex-col mb-10 space-y-5 lg:w-1/2 lg:text-2xl font-bold text-center p-3 shadow-lg rounded-md bg-white/80 text-black'>
        <span>YOU ARE LOST!!!</span>
        <span>Something goes wrong</span>
        <a
          className='text-green-800 cursor-pointer p-2 hover:text-blue-700'
          href=''
          onClick={handleClick}
        >
          {' '}
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default ErrorPage
