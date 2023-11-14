import * as React from 'react';
import BorderedContainer from '../ui/BorderedContainer'

export function Download() {
    return (
        <div className={'w-full p-10'}>
            <BorderedContainer className={'flex justify-center px-8 py-8 text-left text-base'}>
                <article className={'prose prose-white prose-invert'}>
                    The source code for browser synthesizer project 
                    from which this project was forked can be found at the link below.
                    <br></br>
                    <a 
                        href={'https://github.com/Microtonality/Microtonality'}
                        className={'font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline'}
                    >
                        https://github.com/Microtonality/Microtonality
                    </a>

                    <br></br>
                    <br></br>
                    
                    You can also check out the official browser version here!
                    <br></br>
                    <a 
                        href={'https://www.microtonality.net'}
                        className={'font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline'}
                    >
                        https://www.microtonality.net
                    </a>
                </article>
            </BorderedContainer>
        </div>
    )
}