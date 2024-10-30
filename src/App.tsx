import './App.css'
import {parkhereMaterial} from "./utility-functions/foo.tsx";
import Markdown from 'react-markdown'
import Linter from "../Linter-1.md"
import Readme from "../README.md"
import {useState} from "react";

// 1- custom eslint rule: functions should not start with parkhere,
parkhereMaterial()

function parkhereGMBH (){
    return false
}

parkhereGMBH()

// custom eslint rule: functions should not start with foo,
function fooLandia(){
    return 'FooLandia'
}

const matiasBarmyArrow = (name: string)=> name

matiasBarmyArrow('matias')
fooLandia()

// 2 myName should not include Matias
const myName = "Clemente Matias rulo"
const myName2 = "Clemente"
const myName3 = "Matias"
console.log(myName, myName2, myName3)


function App() {
  const [shouldDisplayReadme, setShouldDisplayReadme] = useState(false)
  return (
    <>
        <Markdown children={Linter}/>
        <button onClick={()=> setShouldDisplayReadme(!shouldDisplayReadme)}>How</button>
        {shouldDisplayReadme && <Markdown children={Readme}/>}
    </>
  )
}

export default App
