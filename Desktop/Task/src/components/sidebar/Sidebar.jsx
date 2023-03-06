import "./Sidebar.css"
import { IoIosArrowUp } from "react-icons/io";

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul>
            <li>المواليد</li>
            <li>تسجيل واقعة ميلاد</li>
            <li>تسجيل ميلاد (معثور عليه)</li>
            <li>تسجيل ميلاد (ساقط قيد معثور عليه)</li>
            <li>استعلام - تعديل واقعة الميلاد</li>
            <li>طلب تعديل واقعة ميلاد</li>
        </ul>
        {/* <IoIosArrowUp/> */}
        {/* <i class="bi bi-arrow-up-short"></i> */}
        <hr id="horizontal"></hr>
    </div>
  )
}

export default Sidebar