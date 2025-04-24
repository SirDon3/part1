const Header = ({course}) => {

  return (
    <div>
      <h1>{course}</h1>
    </div>
  )

}

const Content = ({parts}) => {

  
  return (
    <div>
      {parts.map((part) => <p key = {part.id}>{part.name} {part.exercises}</p>)}
    </div>
  )

}

const Total = ({parts}) => {

const exercises = parts.map((part) => part.exercises)

const total = exercises.reduce((s, p) => s + p)

  return (
    <div>
        <strong><p> Number of exercises {total} </p></strong>
    </div>
  )
  
}

const Course = ({courses}) => {


 
    return (
      <div>
        <Header course={courses[0].name}/>
        <Content parts={courses[0].parts} />
        <Total parts={courses[0].parts} />

        <Header course={courses[1].name}/>
        <Content parts={courses[1].parts} />
        <Total parts={courses[1].parts} />
      </div>
    )
    
  }


const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

export default App
