import React from 'react'

const About = () => {
  return (
    <div id='About' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1024px] m-auto '>
            <p className='uppercase text-md tracking-widest text-gray-600 '>
                <h2 className='py-4'>
                    About
                </h2>       
            </p>
            <p>
                Who I Am
            </p>
            <p className='py-4 text-gray-600'>
                I'm a software developer at Accenture were I work in a scrum agile team
                focused in the development of features, bug fixes and perfomence improvements. 
                I work mainly in the backEnd of the project but sometimes I take one for the team 
                and help on the frontEnd.
            </p>
            <p className='py-4 text-gray-600    '>
                I have a degree in Computer Science taken at University of Minho and I love programming and 
                learning new technologies 
            </p>
        </div>
    </div>
  )
}

export default About