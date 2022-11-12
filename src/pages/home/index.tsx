import bg from '@/assets/bg.png'
const HomePage = () => {
    return (
        <div className='w-full h-screen bg-black bg-cover bg-no-repeat bg-center  flex justify-end items-center xl:text-9xl md:text-3xl sm:text-lg' style={{ backgroundImage: `url(${bg})` }}>
            <div className='flex mr-5 text-purple-800 text-center cursor-pointer'><a href="/characters">Show<br />Characters</a></div>
        </div>
    )
}

export default HomePage