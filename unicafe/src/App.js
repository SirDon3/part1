import { useState } from 'react'


const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, ratingValue}) => <p>{text} : {ratingValue} </p>

const Heading = ({text}) => <h1>{text}</h1>

const Total = ({all }) => <p>All : {all}</p>

const Average = ({total, avg }) => <p>Average : {total / avg}</p>

const Percentage = ({part, whole }) => <p>Percentage : {part / whole * 100}%</p>

const Statistics = (props) => {



  if (props.totalAll === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  const avg = 3

  return(
    <div>

        <Heading text = "Statistics"></Heading>

        <StatisticLine ratingValue={props.contentGoodrv} text={props.contentGoodtxt}></StatisticLine>
        <StatisticLine ratingValue={props.contentNeutralrv} text={props.contentNeutraltxt}></StatisticLine>
        <StatisticLine ratingValue={props.contentBadrv} text={props.contentBadtxt}></StatisticLine>
        <Total all={props.totalAll}></Total>
        <Average total={props.avarageAll} avg={avg}></Average>
        <Percentage part={props.percentagePart} whole={props.percentagewhole}></Percentage>
  
   </div>
  )
}

const ButtonFeedback = (props) => {
  console.log(props)

  return(
    <div>

         <Button handleClick={props.handleGoodClickEvent} text = {props.Goodtxt}></Button>
         <Button handleClick={props.handleNeutralClickEvent} text = {props.Neutraltxt}></Button>
         <Button handleClick={props.handleBadClickEvent} text = {props.Badtxt}></Button>
         
    </div>

  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Good = "Good"
  const Neutral = "Neutral"
  const Bad = "Bad"

 
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)  
  const all = good + neutral + bad 
  const avg = 3
  const n = 5
  const n1 = 10


  return (
    <div>
      <Heading text = "Give Feedback"></Heading>


      <ButtonFeedback 
      
            handleGoodClickEvent={handleGoodClick} Goodtxt={Good}
            handleNeutralClickEvent={handleNeutralClick} Neutraltxt={Neutral}
            handleBadClickEvent={handleBadClick} Badtxt={Bad}
      
      
      ></ButtonFeedback>
    
      <Statistics 
                  contentGoodrv={good} contentGoodtxt={Good}
                  contentNeutralrv={neutral} contentNeutraltxt={Neutral}
                  contentBadrv={bad} contentBadtxt={Bad}
                  totalAll={all}
                  avarageAll={all} 
                  percentagePart={good} percentagewhole={all}

      > 
      </Statistics>
      


      
    </div>
  )
}

export default App
