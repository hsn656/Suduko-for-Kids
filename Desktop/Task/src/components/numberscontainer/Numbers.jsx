import "./Numbers.css";

export const Numbers = (props) => {
  return (
    <div className="wrapper">
        <div className="numbers">
            <h1>{props.number}</h1>
            <p>{props.para}</p>
        </div>
            <img id="statusIcon" src={props.imgSrc} alt="circle"/>
    </div>
  )
}
