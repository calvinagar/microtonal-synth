import * as React from 'react';
import BorderedContainer from '../ui/BorderedContainer';

export function Contact() {
    return(
        <div className={'w-full p-10'}>
            <BorderedContainer className={'flex justify-center px-8 py-8 text-left text-base'}>
                <article className={'prose prose-white prose-invert'}>
                    If you have any questions or suggestions about the project, feel free to open any issues on
                    github, or you can contact me through my email address.
                    <br></br>
                    <a 
                        href={'https://github.com/calvinagar/microtonal-synth'}
                        className={'font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline'}
                    >
                        https://github.com/calvinagar/microtonal-synth
                    </a>
                    <br></br>
                    calvinlagar@gmail.com
                </article>
            </BorderedContainer>
        </div>
    )
}
