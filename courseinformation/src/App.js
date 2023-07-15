const Header = (props) => {

  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )

}

const Content = () => {

  const content = [
    {part: 'Fundamentals of React test', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14},
  ]

  return (
    <div>
        <p>{content[0].part} {content[0].exercises}</p>
        <p>{content[1].part} {content[1].exercises}</p>
        <p>{content[2].part} {content[2].exercises}</p>
    </div>
  )

}

const Total = (props) => {
  
  return (
    <div>
        <p> Number of exercises {props.total}</p>
    </div>
  )
  
}


const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
     <Header course={course}/>
     <Content />
     <Total total= {exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App