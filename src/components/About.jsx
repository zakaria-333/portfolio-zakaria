import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              A propos
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Salut,</p>
              <p>Je suis Elharchi Zakaria, ravi de vous rencontrer.</p>
              <p> S'il vous plaît jeter un oeil autour.</p>
            </div>
            <div>
              <p>En tant qu'élève ingénieur en informatique, je suis passionné par le monde numérique et les possibilités infinies qu'il offre. J'ai toujours été fasciné par la manière dont les ordinateurs et les logiciels peuvent résoudre des problèmes complexes et simplifier notre quotidien. La programmation est mon terrain de jeu, où je peux exprimer ma créativité et ma logique pour créer des solutions innovantes. Chaque jour, je suis motivé par l'idée de repousser les limites de la technologie et de contribuer à l'évolution de notre société grâce à des applications informatiques performantes et utiles</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
