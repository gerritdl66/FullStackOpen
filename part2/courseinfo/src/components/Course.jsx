const Header = (props) => <h1>{props.courses}</h1>

const Content = (props) => {
  const allParts = props.parts.map(element => {
    return <Part key={element.id} part={element} />
  })
  return (
    <div>
    {allParts}
  </div>
)
}

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => {
  const totalExercises = props.parts.reduce((sum,part) => sum+ part.exercises, 0)
  // console.log(totalExercises)
  return (
    <p>
      Number of exercises {totalExercises}
    </p>
  )
}

const Course = (props) => {
  //console.log(props)
  return(
  <div>
    <Header courses={props.course.name} />
    <Content parts={props.course.parts} />
<Total parts={props.course.parts} />

  </div>  

)
}


export default Course