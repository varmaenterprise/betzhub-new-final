import PaymentIcons from '../../assets/payment-icon-group.svg'
import logo from '../../assets/5_1.png'
import { Link } from 'react-router-dom'

const MainFooter = () => {
  return (
      <div className='md:grid md:grid-cols-3 gap-4 m-20 py-8 px-5 md:mx-10 flex flex-col text-white'>
          <div className='flex flex-col text-sm gap-3'>
             
              <h3>Betzhub is Asia’s one of the biggest gaming platforms with over 350 games and sports available.</h3>
              <h3>Popular sports such as Cricket, Tennis, Football, Basketball, Volleyball and many more including Indian card games like Teen Patti and Andar Bahar are also available from various worldwide gaming providers.</h3>
              <h3>With unlimited markets and odds, Betzhub gives players the best gaming experience in the market.</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-center' style={{ marginTop: '-10rem' }}>
              <img src={logo} alt="Logo" />
            </div>
            <div className='text-center'>

              <h2 className='text-sm font-medium'>100% Safe & Instant Payments</h2>
              <h3 className='text-sm font-medium'>You can make payments and receive earnings instantly via your UPI ID - so you can be sure that your money is safe and secure. All UPI platforms are accepted.</h3>
            </div>
            <div className='flex justify-center  text-center'>
            <h3 className='text-xs text-white px-6'>Visit Betzhub for tools and resources to help you stay in control of the way you play.
            </h3>
        </div>
          </div>
          <div className='flex flex-col gap-3 text-center text-2xl m-6'>
              <h2 className='text-xl font-bold'>Accepted Modes Of Payments</h2>
              <img src={PaymentIcons} alt="Payment" className='h-25' />
              <div className='flex flex-col justify-center text-center gap-2 w-full'>
              

                  <h2 className='font-bold text-2xl'>Contact Us</h2>
                  
                  <h3 className='text-gray-500 text-xl'>Whatsapp :918618521090</h3>
                  <h3 className='text-gray-500 text-xl'>Calling  :918037244677</h3>
                  <h6 className="flex items-center justify-center space-x-4 text-sm font-poppins">
      <Link to="/about-us" className="hover:text-gray-500 transition duration-300">
        About Us
      </Link>
       
      <Link to="/kyc" className="hover:text-gray-500 transition duration-300 m-5">
        KYC Policy
      </Link>
       
      <Link to="/Termsandconditons" className="hover:text-gray-500 transition duration-300">
        Terms & Conditions
      </Link>
      
      <Link to="/responsible-gambling" className="hover:text-gray-500 transition duration-300">
        Responsible Gambling
      </Link>
    </h6>

              </div>
          </div>
      </div>
  )
}

export default MainFooter