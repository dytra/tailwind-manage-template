import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [burgerActive, setBurgerActive] = useState(false);

  const handleClickHamburger = (e) => {
    setBurgerActive(!burgerActive);
  }

  return (
    <div className="App">
      <nav className="relative container mx-auto p-6">
        {/* Flex */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <img src="img/logo.svg" />
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
            <a href="#" className="hover:text-darkGrayishBlue">Product</a>
            <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
            <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
            <a href="#" className="hover:text-darkGrayishBlue">Community</a>
          </div>
          {/* Button */}
          <a href="" className="hidden md:block px-6 py-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
          {/* Hamburger Icon */}
          <button id="menu-btn" className={`${burgerActive ? "open" : ""} block hamburger md:hidden focus:outline-none`} onClick={handleClickHamburger}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div id="menu" className={`absolute flex flex-col ${!burgerActive ? "hidden" : "" } items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Career</a>
            <a href="#">Community</a>
          </div>

        </div>
      </nav>
      {/* Hero Section */}
      <section id="hero">
        <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          {/* Left Item */}
          <div className='flex flex-col md:mb-32 space-y-12 md:w-1/2'>
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Bring everyone together to build better products</h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="" className="hidden md:block px-6 py-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
            </div>
          </div>
          {/* Image */}
          <div className='md:w-1/2'>
            <img src="img/illustration-intro.svg" alt="" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        {/* Flex Container */}
        <div className="container flex flex-col px-4 mx-auto space-y-12 md:space-y-0 md:flex-row">
          {/* What's Different */}
          <div className='flex flex-col space-y-12 md:w-1/2'>
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">What's Different about Manage?</h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the funcitonality your team needs, without the complexity. Our software is tailor-made for modern digital product team.
            </p>
          </div>
          {/* Numbered List */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2 md:mb-4">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>

                  <h3 className="text-base font-bold md:max-w-full">
                    Track Company Wide Progress
                  </h3>

                </div>
              </div>

              <p className="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>

            </div>

            <div className="flex flex-col space-y-3 md:space-y-0">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2 md:mb-4">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>

                  <h3 className="text-base font-bold md:max-w-full">
                    Track Company Wide Progress
                  </h3>

                </div>
              </div>

              <p className="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>

            </div>

            <div className="flex flex-col space-y-3 md:space-y-0">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2 md:mb-4">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>

                  <h3 className="text-base font-bold md:max-w-full">
                    Track Company Wide Progress
                  </h3>

                </div>
              </div>

              <p className="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>

            </div>




          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        {/* Container to heading and testimonials */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center">What's Different About Manage? </h2>
          {/* Testimonials Container */}
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="img/avatar-anisha.png" className='w-16 mt-0 md:-mt-14 ' />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">“Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”</p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="img/avatar-richard.png" className='w-16 mt-0 md:-mt-14 ' />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">“Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”</p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="img/avatar-ali.png" className='w-16 mt-0 md:-mt-14 ' />
              <h5 className="text-lg font-bold">Ali</h5>
              <p className="text-sm text-darkGrayishBlue">“Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”</p>
            </div>
          </div>
          {/* Button */}
          <div className="my-16">
            <a href="" className="p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
          </div>
        </div>

      </section>

      {/* CTA SECTION */}
      <section id="cta" className='bg-brightRed'>
        {/* flex container */}
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          {/* Heading */}
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">Simplify how your team works today</h2>
          {/* Button */}
          <a href="" className="hidden md:block px-6 py-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-300 ">Get Started</a>


        </div>
      </section>

      {/* Footer */}
      <footer className="bg-veryDarkBlue">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* Logo and social links container */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* Logo */}
            <div>
              <img src="img/logo-white.svg" className='h-8' alt="" />
            </div>
            <div className="flex justify-center space-x-4">
              {/* Link 1 */}
              <a href="#">
                <img src="img/icon-facebook.svg" alt="" className='h-8' />
              </a>
              {/* Link 2 */}
              <a href="#">
                <img src="img/icon-youtube.svg" alt="" className='h-8' />
              </a>
              {/* Link 3 */}
              <a href="#">
                <img src="img/icon-twitter.svg" alt="" className='h-8' />
              </a>
              {/* Link 4 */}
              <a href="#">
                <img src="img/icon-pinterest.svg" alt="" className='h-8' />
              </a>
              {/* Link 5 */}
              <a href="#">
                <img src="img/icon-instagram.svg" alt="" className='h-8' />
              </a>
            </div>
          </div>
          {/* List Container */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="" className="hover:text-brightRed">Home</a>
              <a href="" className="hover:text-brightRed">Pricing</a>
              <a href="" className="hover:text-brightRed">Products</a>
              <a href="" className="hover:text-brightRed">About</a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="" className="hover:text-brightRed">Careers</a>
              <a href="" className="hover:text-brightRed">Community</a>
              <a href="" className="hover:text-brightRed">Privacy Policy</a>
            </div>
          </div>
          {/* Input Container */}
          <div className="flex flex-col justify-between">
            <form className='flex space-x-3'>
              <input type="text" className='flex-1 px-4 rounded-full focus:outline-none ' placeholder='Updated in your inbox' />
              <button className="px-4 py-2 text-white rounded-full bg-brightRed hover:bg-brightRed focus:outline-none">Go</button>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy;, All Right Reserverd
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
