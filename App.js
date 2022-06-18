import React from "react";
import Question from "./components/Question";
// import StartQuiz from "./components/StartQuiz";
import "./index.css"

export default function App() {

  const[start,setStart]=React.useState(false)
  const handleClick = () =>{
  setStart(prevStart => !prevStart)
  }

  const [data,setData] = React.useState()
  // const [count,setCount]=React.useState(0)
   React.useEffect(function(){
     fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=hard&type=multiple")
     .then(res=>res.json())
     .then(data1=>setData(data1.results)) 
   },[])

  
  //  const questionDetails = data.map((questions,index) =>{
  //   return <Question 
  //   key={index}
  //     category= {questions.category} />

  //  })

  

  return (
            <main className="container">
              
              {
                start === false ?  <div>
                <h1 className="heading">Quizical</h1>
                <button className="startQuizButton" onClick={handleClick}>Start Quiz</button> 
           </div> : <Question details={data}/>

            }
            </main>
  )

 }