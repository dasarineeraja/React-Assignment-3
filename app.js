import React from 'react';
import ReactDOM from 'react-dom/client';


const rootReact=document.getElementById("root");
const rootdom=ReactDOM.createRoot(rootReact);



const AppComponent=function(){
    return (
        <>
        <h1> {
        <div className='header- div'>
            <div className='logo-div'>
                <img className='logo'
                src="https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo-PNG-Free-Image.png"/> 
            </div>
            <div className='menu-div'>
                <img className='logo' 
                src="https://i.pinimg.com/originals/5e/c1/8f/5ec18fe5fb0c946e805e7dec80f01dad.jpg"/>
               </div>
        </div>
    
} </h1>
        <p> body</p>
        <p>footer</p>
        </>
    )    
}

rootdom.render(<AppComponent/>);