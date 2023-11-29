import batmanIcon from '../../assets/cricket-batman-icon.png'
import casinoIcon from '../../assets/casino-icon.png'


const HomeMainCards = () => {

    const cardItems = [
        {
            image: batmanIcon, head: "Sports",
            text1: "Our team continues to work hard to make something special for all sports..",
            text2: " we are very confident that we can exceed our players' expectations for a perfect gaming experience which encompasses a product with a wide variety of markets for punters to choose from.",
            text3: "We offering many different types of sports to bet on. Some of the most popular ones are definitely cricket, football, tennis, basketball, horse racing, and many more."
        }, {
            image: casinoIcon, head: "Casino",
            text1: "We’ve all grown to love the typical brick and mortar casino but there’s just something about online casino that triumphs over the rest",
            text2: "At 3rdEmpire, we believe that playing casino online should be an experience of its own. With thousands of titles available at the click of a button, it’s become possible to play casino online from the comfort of your home",
            text3: "All the while, sit back and immerse yourself in a world of mythical creatures and vigorous jokers.",
            text4: "Let us introduce you to the world of online casino with our selection of live dealer games like Andar Bahar, Teen Patti, Dragon Tiger, Black Jack, pocker and many more."
        }
    ]

    return (
        <div className='grid lg:grid-cols-2 gap-3 m-5 md:mt-14'>
            {
                cardItems?.map((item) =>
                    <div className='bg-slate-100 hover:bg-slate-50 py-4 rounded-md' key={item?.head}>
                        <div className='flex  pl-2'>
                            <img src={item?.image} alt="Image" className='w-36 h-48 block' />
                            <div className='flex flex-col px-4 space-y-1' style={{ fontSize: '13px' }}>
                                <h2 className='text-base font-bold uppercase pb-2'>{item?.head}</h2>
                                <h3>{item?.text1}</h3>
                                <h3 className='hidden md:block'>{item?.text2}</h3>
                                <h3 className='hidden md:block'>{item?.text3}</h3>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default HomeMainCards