import './App.css'
import {foo} from "./utility-functions/foo.tsx";

// interesting here is the conflict between eslint and typescript
// eslint is happy that foo is called with an argument,
// but typescript says that foo should be call without arguments
foo('matias')

// custom eslint rule: functions should not start with foo,
function fooLandia(){
    return 'FooLandia'
}

fooLandia()

// a new nonsense rule: myName should not include Matias
const myName = "Clemente Matias rulo"
const myName2 = "Clemente"
const myName3 = "Matias"
console.log(myName, myName2, myName3)

function App() {
  return (
    <>
      <h1>Eslint playground</h1>
    </>
  )
}

export default App
