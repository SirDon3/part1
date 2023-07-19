import { useState } from 'react'


const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button> 
const AnecdotesRef = ({text}) => <p>{text}</p>
const Heading = ({text}) => <h1>{text}</h1>
const Votetxt = ({text, vote, text2}) => <p>{text} {vote} {text2}</p>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  
  const txt = "Next Anecdote"
  const txtVote = "Vote"
  const vtxt1 = "This anecdote has : "
  const vtxt2 = "votes"
  const vtxt3 = "has"
  const heading1 = "Anecdote of the day"
  const heading2 = "Anecdote with the most votes"

  

  function HandleClick (){

    const Max = anecdotes.length

    const RNumber = Math.floor(Math.random() * (Max - 0)) + 0
    setSelected(RNumber)
    // console.log(RNumber)

  }

 



const HandleVoteClick = () => {
  const votesCopy = [...votes]
  votesCopy[selected] += 1
  setVotes(votesCopy)
  // console.log(votes)
  
}
  
const voteOfDay = votes.indexOf(Math.max(...votes))
// console.log(votes)

  return (
    <div>

    <Heading text={heading1}></Heading>
    <AnecdotesRef text={anecdotes[selected]}></AnecdotesRef>
    <Votetxt text={vtxt1} vote={votes[selected]} text2={vtxt2}></Votetxt>
    <Button handleClick={HandleVoteClick} text = {txtVote}></Button>
    <Button handleClick={HandleClick} text = {txt}></Button>
    <Heading text={heading2}></Heading>
    <AnecdotesRef text={anecdotes[voteOfDay]}></AnecdotesRef>
    <Votetxt text={vtxt3} vote={votes[voteOfDay]} text2={vtxt2}></Votetxt>

     
    </div>
  )
}

export default App