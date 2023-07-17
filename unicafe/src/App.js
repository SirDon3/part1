import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Content = ({ text, ratingValue}) => <p>{text} {ratingValue} </p>

const Heading = ({text}) => <h1>{text}</h1>

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
      
    </div>
  )
}

export default App
