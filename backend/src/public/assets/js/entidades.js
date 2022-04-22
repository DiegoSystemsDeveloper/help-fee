import React from 'react';
import { render } from 'react-dom';

function App() {
    return ( <
        div className = "wrapper" >
        <
        Card >
        img = https: //www.inlinefs.com/wp-content/uploads/2020/04/placeholder.png
        title: "Titulo"
        description: "Description ajhgbskhdbuiabsudhbuiahbusbdiubasd" <
        /Card>  <
        /div>
    )
}

function Card(props) {
    return (

        <
        div className = "card" >
        <
        div className = "card_body" >
        <
        img src = { props.img }
        class = "card_image" / >
        <
        h2 className = "card_title" > { props.title } < /h2> <
        p className = "card_description" > { props.description } < /p>  <
        /div> <
        button className = "card_btn" > Mas Informacion < /button>  <
        /div>
    )
}

React.DOM.render( < App / > ,
    document.getElementById("root"));