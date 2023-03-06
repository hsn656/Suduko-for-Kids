import Female from "./Female"
import "./FinalFemaleObject.css"

const FinalFemaleObject = ({ type }) => {
  let colour = ""
  if (type === "deaths") {
    colour = "#7f7e96"
  }
  else {
    colour = "#e85099"
  }
  return (
    
    <div className='container'>
      <Female className="firstFemale" color={colour} />
      <Female className="secondFemale" percentage={60} color="#DDDDDD" />
	  </div>
        
    
  )
}

export default FinalFemaleObject