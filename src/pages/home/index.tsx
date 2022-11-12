import bg from '@/assets/bg.png'
const HomePage = () => {
    return (
        <div
            className='w-full h-screen bg-black bg-cover bg-no-repeat bg-center pt-7  flex justify-center items-start xl:text-9xl md:text-3xl sm:text-lg'
            style={{ backgroundImage: `url(${bg})` }}
        >
            <a
                className='cursor-pointer p-3 rounded-md bg-teal-500 text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'
                href='/characters'
            >
                Show Characters
            </a>
        </div>
    )
}

export default HomePage
