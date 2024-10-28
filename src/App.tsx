import './App.css'
import {fooMaterial} from "./utility-functions/foo.tsx";
import Markdown from 'react-markdown'
import Linter from "../Linter-1.md"
import Readme from "../README.md"

// interesting here is the conflict between eslint and typescript
// eslint is happy that foo is called with an argument,
// but typescript says that foo should be call without arguments
fooMaterial()

function parkhereGMBH (){
    return false
}

// custom eslint rule: functions should not start with foo,
function fooLandia(){
    return 'FooLandia'
}

const matiasBarmyArrow = (name: string)=> null

matiasBarmyArrow('matias')
fooLandia()

// a new nonsense rule: myName should not include Matias
const myName = "Clemente Matias rulo"
const myName2 = "Clemente"
const myName3 = "Matias"
console.log(myName, myName2, myName3)



function App() {
  return (
    <>
        <Markdown children={Linter}/>
        <Markdown children={Readme}/>
    </>
  )
}

export default App
