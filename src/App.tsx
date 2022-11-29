import React from 'react';
import './App.css';
import Accordion from "./components/Accordeon/Accordeon";
import Rating from "./components/Rating/Rating";

function App() {
    console.log('App rendered')

    return (
        <div className="App">
            <Pagetitle title={'THis is App component11'}/>
            <Pagetitle title={'88888888888888888888'}/>
            <Accordion titleValue={'Menu _______'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}


function Pagetitle(props: any) {

    console.log('Pagetitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
