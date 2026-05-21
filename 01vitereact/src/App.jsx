import Chai from "./chai"


function App() {

  return (
    // <h1>Chai aur react with Vite | Vinayak</h1>
    
    // <Chai/>
    // <h1></h1>
    // <p></p>    // this is the case of error : in jsx, you can export max of 1 element only...
    
    <>
    <Chai/>
    <h1></h1>
    <p></p>
    </>  // now it is okay .. you can export muktiple elements inside a FRAGMENT
  )             
}
// funcitons' name which are the components should start with upper case letter.
// if any html is being returned from the file, name it .jsx instead of .js
export default App

