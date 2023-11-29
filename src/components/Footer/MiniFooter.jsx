import gamingHead from '../../assets/capture.png'

const MiniFooter = () => {
    return (
        <div className='md:grid md:grid-cols-3 md:gap-4 my-8 flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>
                <img src={gamingHead} alt="Head" className='h-30' />
            </div>
            <div className='flex justify-center  text-center'>
            </div>
            <div className='lg:pl-28'>
                <button className='bg-primary text-white text-sm font-semibold hover:bg-red-500 px-7 py-1.5 rounded-md'>Learn more</button>
            </div>
        </div>
    )
}

export default MiniFooter