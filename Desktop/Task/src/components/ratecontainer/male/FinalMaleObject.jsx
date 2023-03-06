import Male from './Male'
import './FinalMaleObject.css'

const FinalMaleObject = ({ type }) => {
  let colour = ""
  if (type === "deaths") {
    colour = "#7f7e96"
  }
  else {
    colour = "#4099d4"
  }
  return (
    <div className='container'>
      <Male className="firstMale" color={colour} />
      <Male className="secondMale" percentage={20} color="#DDDDDD" />
	  </div>
  )
}

export default FinalMaleObject