import { useState } from 'react'


const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button> 

const StatisticLine = ({ text, ratingValue}) => <p>{text} : {ratingValue} </p>

const Heading = ({text}) => <h1>{text}</h1>

const Total = ({all }) => <p>All : {all}</p>

const Average = ({total, avg }) => <p>Average : {total / avg}</p>

const Percentage = ({part, whole }) => <p>Percentage : {part / whole * 100}%</p>

const Statistics = (props) => { // The Statistics component is a large component that calls other smaller componets to retrive statictics information 



  if (props.totalAll == 0) { // The if statement ensure that message is printed if there are no feedback given
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  const avg = 3

  return( // If there are 1 or more feedback given the Statistics component returns a set of other smaller componets to retrive statictics information

    <div>

        <Heading text = "Statistics"></Heading>

      <table>
        <tbody>

        <tr>
               <td><StatisticLine ratingValue={props.contentGoodrv} text={props.contentGoodtxt}></StatisticLine></td>
       </tr>

        <tr>
               <td><StatisticLine ratingValue={props.contentNeutralrv} text={props.contentNeutraltxt}></StatisticLine></td>
        </tr>

         <tr>
               <td><StatisticLine ratingValue={props.contentBadrv} text={props.contentBadtxt}></StatisticLine></td>  
        </tr>

         <tr>
               <td><Total all={props.totalAll}></Total></td>
        </tr>

         <tr>
               <td> <Average total={props.avarageAll} avg={avg}></Average></td>
        </tr>

         <tr>
               <td><Percentage part={props.percentagePart} whole={props.percentagewhole}></Percentage></td>
        </tr>

        </tbody>
      </table>

   </div>
  )
}

const ButtonFeedback = (props) => { // The ButtonFeedback is a component that calls a reusable Button component to creates three buttons 
 

  return(
    <div>

         <Button handleClick={props.handleGoodClickEvent} text = {props.Goodtxt}></Button>
         <Button handleClick={props.handleNeutralClickEvent} text = {props.Neutraltxt}></Button>
         <Button handleClick={props.handleBadClickEvent} text = {props.Badtxt}></Button>

    </div>

  )
}

const App = () => { // App is the main component that brings everthing together 
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Good = "Good"
  const Neutral = "Neutral"
  const Bad = "Bad"

 
  const HandleGoodClick = () => setGood(good + 1)
  const HandleNeutralClick = () => setNeutral(neutral + 1)
  const HandleBadClick = () => setBad(bad + 1)  
  // State Hook and handle functions are used to keep track of and mesure clicks 

  const All = good + neutral + bad // Calculation for all feedback



  return ( /* The App compoent returns a small heading component to dispay a text and 
               the ButtonFeedback and Statistics component which used the infromation stored 
               from the State hook and handle function to display information and perform opertaion
               based on actions */
    <div>

      <Heading text = "Give Feedback"></Heading>


      <ButtonFeedback 
      
            handleGoodClickEvent={HandleGoodClick} Goodtxt={Good}
            handleNeutralClickEvent={HandleNeutralClick} Neutraltxt={Neutral}
            handleBadClickEvent={HandleBadClick} Badtxt={Bad}
      
      
      ></ButtonFeedback>
    
      <Statistics 
                  contentGoodrv={good} contentGoodtxt={Good}
                  contentNeutralrv={neutral} contentNeutraltxt={Neutral}
                  contentBadrv={bad} contentBadtxt={Bad}
                  totalAll={All}
                  avarageAll={All} 
                  percentagePart={good} percentagewhole={All}

      ></Statistics>
      
    </div>
  )
}

export default App
