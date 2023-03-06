import "./Rate.css";
// import {ReactComponent as Male} from "../../assets/male.svg";
// import {ReactComponent as FeMale} from "../../assets/female.svg";
import FinalFemaleObject from "./female/FinalFemaleObject";
import FinalMaleObject from "./male/FinalMaleObject";

export const Rate = (props) => {
  return (
    <div className="rate">
        <h2>{props.header}</h2>
        <div className="maleAndFemale">
            <div className="male">
                <h3>ذكور</h3>
                  <FinalMaleObject type={props.type} />
                <b><p className="rateMaleParagraph">12%</p></b>
            </div>
            <div className="female">
                <h3>إناث</h3>
                  <FinalFemaleObject type={props.type}/>
                  <b><p className="rateFemaleParagraph">88%</p></b>
            </div>
        </div>
    </div>
  )
}
