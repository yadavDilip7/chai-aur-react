import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function Myapp(){
    const var1= "with Dilip";
    return(
        <div>
            <h1>Custom App | chai {var1}</h1>
        </div>
    )
}
const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
