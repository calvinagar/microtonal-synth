import * as React from "react";
import BorderedContainer from '../ui/BorderedContainer'

export function Contact() {
    return(
        <div className={"w-full p-10"}>
        <BorderedContainer className={"flex justify-center px-8 py-8 text-left text-base"}>
        <article className={"prose prose-white prose-invert"}>
        If you have any questions or suggestions about the project, please feel free to contact me
        through the email address below.
        <br></br>
        <br></br>
        calvinlagar@gmail.com
        </article>
        </BorderedContainer>
        </div>
    )
}
