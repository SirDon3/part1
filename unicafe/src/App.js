import { useState } from 'react'


const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Content = ({ text, ratingValue}) => <p>{text} : {ratingValue} </p>

const Heading = ({text}) => <h1>{text}</h1>

const Total = ({all }) => <p>All : {all}</p>

const Average = ({total, avg }) => <p>Average : {total / avg}</p>

const Percentage = ({part, whole }) => <p>Percentage : {part / whole * 100}%</p>

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


  return (
    <div>
      <Heading text = "Give Feedback"></Heading>

      <Button handleClick={handleGoodClick} text = {Good}></Button>
      <Button handleClick={handleNeutralClick} text = {Neutral}></Button>
      <Button handleClick={handleBadClick} text = {Bad}></Button>
      
      <Heading text = "Statistics"></Heading>

      <Content ratingValue={good} text={Good}></Content>
      <Content ratingValue={neutral} text={Neutral}></Content>
      <Content ratingValue={bad} text={Bad}></Content>
      <Total all={all}></Total> 
      <Average total={all} avg={avg}></Average>
      <Percentage part={good} whole={all}></Percentage>
      
    </div>
  )
}

export default App
