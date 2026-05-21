import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// brought from the custom react
// const reactElement = {
//     type: 'a',
//     props : {
//         href: 'https://google.com',
//         target : '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
// after all the tree formation, variable injections are done
const anotherUser = "chai aur react"

// We are creating new react element but this time as per the original react
const reactElement = React.createElement(
  // The React has a fucntion called " createElement" which 
    // expects some parameters : first is the type of tag
    // then second is an object which has href and target
    // and last is the text



  'a',
  {href: "https://google.com", target: '_blank'},
  'click me to visit google',
  anotherUser
  // you can't write if else for loop etc... as at the end of the day , this is
  // an object
)
ReactDOM.createRoot(document.getElementById('root')).render(
    
   // <MyApp/>
   //<App/>
    //  anotherElement

    // Following react element is the one we created later on using the react syntax,
    // that's why it runs without any problem, earlier the reactElement 
    // was not able to run because that was not meeting the requirement of the 
    // render function..
    // the render function expects some parameters in certain syntax, so
    // it should get the parameters as per its requirement

    reactElement
     
)
/* 
MyApp and App are just functions that's they can be run as a simple function also : 
MyApp() instead of HTML style but we won't use in that manner 

The stuffs that are written inside App or MyApp, are parsed into object style first as the customReact object shown
*/



