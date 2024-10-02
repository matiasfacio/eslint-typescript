import './App.css'
import {foo} from "./utility-functions/foo.tsx";

// interesting here is the conflict between eslint and typescript
// eslint is happy that foo is called with an argument,
// but typescript says that foo should be call without arguments
foo('matias')


// a new nonsense rule: myName should not be Matias
const myName = "Matias"
console.log(myName)

function App() {
  return (
    <>
      <h1>Eslint playground</h1>
    </>
  )
}

export default App
