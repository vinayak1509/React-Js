import Chai from "./chai"


function App() {
  const username  = "Vinayak"

  // We can also inject some variables inside {}



  return (
    // <h1>Chai aur react with Vite | Vinayak</h1>
    
    // <Chai/>
    // <h1></h1>
    // <p></p>    // this is the case of error : in jsx, you can export max of 1 element only...
    
    // the "{username}" is called evaluated expression... this is a JS
    // but u can't write if or for loops, this should only contain the final evaluated expression

    
    <>
    <Chai/>

    <h1>hello {username}</h1> 

    
    </>  // now it is okay .. you can export muktiple elements inside a FRAGMENT
  )             
}
// funcitons' name which are the components should start with upper case letter.
// if any html is being returned from the file, name it .jsx instead of .js
// react in browser :- ReactDOM
// React in mobile :- React native 
export default App

