import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#063970]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-400 text-lg'>Salut, je m'appelle</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          ELHARCHI ZAKARIA,
        </h1>
        <h5 className='text-4xl sm:text-7xl font-bold text-[#8892b0] mb-20'>
          Je suis un éléve ingenieur en informatique.
        </h5>
        <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <Link to="work" className="text-white">Voir mes projets</Link>
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
