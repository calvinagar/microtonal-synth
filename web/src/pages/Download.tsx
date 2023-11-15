import * as React from 'react';
import BorderedContainer from '../ui/BorderedContainer'

export function Download() {
    return (
        <div className={'w-full p-10'}>
            <BorderedContainer className={'flex justify-center px-8 py-8 text-left text-base'}>
                <article className={'prose prose-invert'}>
                    The source code for the microtonal synthesizer browser project 
                    from which this project was forked, and the original 
                    desktop version can be found at the link below.
                    <br/>
                    <a 
                        href={'https://github.com/orgs/Microtonality/repositories'}
                        className={'font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline'}
                    >
                        https://github.com/Microtonality
                    </a>

                    <br/>
                    <br/>
                    
                    You can also check out the official Microtonality website here!
                    <br/>
                    <a 
                        href={'https://www.microtonality.net'}
                        className={'font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline'}
                    >
                        https://www.microtonality.net
                    </a>

                    <br/>
                    <br/>

                    The source code for this fork can be found below.
                    <br/>
                    <a 
                        href={'https://github.com/calvinagar/microtonal-synth'}
                        className={'font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline'}
                    >
                        https://github.com/calvinagar/microtonal-synth
                    </a>
                </article>
            </BorderedContainer>
        </div>
    )
}