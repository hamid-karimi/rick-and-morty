import backgroundImageAddress from '@/assets/bg.png'
const HomePage = () => {
    return (
        <div
            className='w-full h-screen bg-black bg-cover bg-no-repeat bg-center pt-7  flex justify-center items-start '
            style={{ backgroundImage: `url(${backgroundImageAddress})` }}
        >
            <a
                className='cursor-pointer lg:w-1/5 text-center lg:text-2xl p-3 shadow-lg rounded-md bg-teal-500 text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'
                href='/characters'
            >
                Show Characters
            </a>
        </div>
    )
}

export default HomePage
