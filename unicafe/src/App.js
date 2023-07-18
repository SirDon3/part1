import { useState } from 'react'


const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Content = ({ text, ratingValue}) => <p>{text} : {ratingValue} </p>

const Heading = ({text}) => <h1>{text}</h1>

const Total = ({all }) => <p>All : {all}</p>

const Average = ({total, avg }) => <p>Average : {total / avg}</p>

const Percentage = ({part, whole }) => <p>Percentage : {part / whole * 100}%</p>

const Statistics = (props) => {

  console.log(props)

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

        <Content ratingValue={props.contentGoodrv} text={props.contentGoodtxt}></Content>
        <Content ratingValue={props.contentNeutralrv} text={props.contentNeutraltxt}></Content>
        <Content ratingValue={props.contentBadrv} text={props.contentBadtxt}></Content>
        <Total all={props.totalAll}></Total>
        <Average total={props.avarageAll} avg={avg}></Average>
        <Percentage part={props.percentagePart} whole={props.percentagewhole}></Percentage>
  
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

      <Button handleClick={handleGoodClick} text = {Good}></Button>
      <Button handleClick={handleNeutralClick} text = {Neutral}></Button>
      <Button handleClick={handleBadClick} text = {Bad}></Button> 
    
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
