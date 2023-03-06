import Dateselector from "../dateselector/Dateselector";
import { Numbers } from "../numberscontainer/Numbers";
import { Rate } from "../ratecontainer/Rate";
import Statusselector from "../statusselector/Statusselector";
import "./Statuscontainer.css";
import circle from "../../assets/d1.png";
import reload from "../../assets/d2.png";


function Statuscontainer() {
  return (
    <div className="status">

      <div className="dateAndStatus">
        <Statusselector/>
        <Dateselector/>
      </div>

      <div className="statusWrapper">
      <Numbers
          number="400"
          para="طلبات تعديل مقدمة"
          imgSrc={reload}
        />
        <Numbers
          number="20"
          para="عدد الوفيات المدخلين"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Disc_Plain_grey.svg/460px-Disc_Plain_grey.svg.png"
        />
        <Numbers
          number="10,918"
          para="عدد المواليد المدخلين"
          imgSrc= {circle}
        />
      </div>


      <div className="rateWrapper">
        <Rate header="النسبة بين الذكور والإناث للوفيات" type="deaths"/>
        <hr></hr>
        <Rate header="النسبة بين الذكور والإناث للمواليد" type="birth"/>
      </div>
    </div>
  );
}

export default Statuscontainer;
