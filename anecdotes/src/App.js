import { useState } from 'react'


const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button> 

const AnecdotesRef = ({text}) => <p>{text}</p>

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

  function HandleClick (){

    const Max = anecdotes.length

    const RNumber = Math.floor(Math.random() * (Max - 0)) + 0
    setSelected(RNumber)
    console.log(RNumber)

  }

  console.log(selected)



const HandleVoteClick = () => {
  const votesCopy = [...votes]
  votesCopy[selected] += 1
  setVotes(votesCopy)
  console.log(votes)
  
}
  
console.log(votes)

  return (
    <div>


    <AnecdotesRef text={anecdotes[selected]}></AnecdotesRef>
    <Votetxt text={vtxt1} vote={votes[selected]} text2={vtxt2}></Votetxt>
    <Button handleClick={HandleVoteClick} text = {txtVote}></Button>
    <Button handleClick={HandleClick} text = {txt}></Button>
    
     
    </div>
  )
}

export default App