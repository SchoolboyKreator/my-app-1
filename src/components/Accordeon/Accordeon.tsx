import React from "react";

type AccordeonPropsType = {
    collapsed : boolean
    titleValue: string
}

export default function Accordeon(props: AccordeonPropsType) {
    if (props.collapsed) {
    return (<>
            <AccordeonTitle title={props.titleValue}/>
        </>
    )
}   return (<>
            <AccordeonTitle title={props.titleValue}/>
            <AccordeonBody/>
        </>
    )
}

type AccordeonTitlePropsType = {
    title: string
}
function AccordeonTitle(props: AccordeonTitlePropsType) {
    console.log('AccordeonTitle rendering')

    return (
        <h2>{props.title}</h2>
    )
}

function AccordeonBody() {
    console.log('Accordeon rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}