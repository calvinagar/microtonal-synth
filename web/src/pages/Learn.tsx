import * as React from 'react'
import BorderedContainer from '../ui/BorderedContainer'

export function Learn() {
    return (
        <div className={'w-full p-10'}>
            <BorderedContainer className={'flex justify-center px-8 py-8 text-left text-base'}>
                <article className={'prose prose-invert'}>
                    This project works on multiple fronts to bring microtonal works to life. As a starting point,
                    Easley Blackwood's microtonal etudes provide a number of difficulties to overcome in order to
                    produce a full performance. You can read about the ideas to tackle these challenges in the
                    paper below.

                    <br/>
                    <br/>

                    Richard Leinecker and William R. Ayers, “Performing Easley Blackwood's 
                    <a className={'italic ...'}> Twelve Microtonal Etudes</a>
                    : An Open-Source Software Development Project”, in 
                    <a className={'italic ...'}> Mathematics and Computation in Music 2022</a>
                    , edited by Mariana Montiel, Octavio A. Agustín-Aquino, Francisco Gómez, 
                    Jeremy Kastine, Emilio Lluis-Puebla, and Brent Milam (2022): 331-339. Springer Nature.
                    <a 
                        href={'https://doi.org/10.1007/978-3-031-07015-0_27'}
                        className={'ml-1 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline'}
                    >
                        https://doi.org/10.1007/978-3-031-07015-0_27
                    </a>
                </article>
            </BorderedContainer>

            <br/>
            <br/>

            <BorderedContainer className={'flex justify-center px-8 py-8 text-left text-base'}>
                <article className={'prose prose-invert'}>
                    This browser application was produced by Computer Science majors
                    completing their Senior Design Projects at the University of Central Florida (listed below).
                    The synthesizer includes microtonal scale generation, tone generators, ADSR envelope controls, 
                    keyboard mapping functionality, and components for saving mappings and instruments.

                    <br/>
                    <br/>
                    
                    Austin Smith
                    <br/>
                    
                    Peter Devita
                    <br/>
                    
                    Noah Hartley
                    <br/>
                    
                    Zachary Hasley
                    <br/>
                    
                    Nathan Manierre
                    <br/>
                    
                    Calvin Agar
                </article>
            </BorderedContainer>

            <br/>
            <br/>

            <BorderedContainer className={'flex justify-center px-8 py-8 text-left text-base'}>
                <article className={'prose prose-invert'}>
                    The microtonal synthesizer desktop application that preceded the browser version was produced by 
                    Computer Science majors completing their Senior Design Projects at the University of Central Florida
                    (listed below). 
                    
                    <br/>
                    <br/>
                    
                    Jake DiClemente
                    <br/>
                    
                    Isaiah Kovacich
                    <br/>
                    
                    Anthony Moore
                    <br/>
                    
                    Michael Ortiz
                    <br/>
                    
                    John Pham
                </article>
            </BorderedContainer>

            <br/>
            <br/>
        
            <BorderedContainer className={'flex justify-center px-8 py-8 text-left text-base'}>
                <article className={'prose prose-invert'}>
                    This project also engages students in the School of Performing Arts at the University of Central
                    Florida (listed below). Music students work on notation projects to convert microtonal notation
                    into easily readable, comprehensible, and gesturally practicable notation for the purpose of
                    performance on the microtonal synthesizer using a standard keyboard controller.
                    
                    <br/>
                    <br/>
                    
                    Michael Crisafi
                </article>
            </BorderedContainer>
        </div>
    )
}