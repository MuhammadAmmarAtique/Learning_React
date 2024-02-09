import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function PtiSlogan ()
{
    return (
        <h2>East or West Pti is Best!</h2>
    )
}

const exampleElement = (
    <a href="https://www.google.com" target='_blank'>Google</a>
)

// It will not work because .render() of React doesnot accept this syntax
// const reactElement = 
// {
//     type: "a",
//     props:{
//         href: "https://www.google.com",
//         target: "_main"
//     },
//     children:"Go to google"
// }

//We can create Element and pass this b/c react will accept it
const AnotherReactElement = React.createElement(
    'a',
    {href:"https://www.google.com", target:"_main"},
    "Go to google"
)


ReactDOM.createRoot(document.getElementById('root')).render(

    // <PtiSlogan />
    // exampleElement
   //    AnotherReactElement
 
    )
