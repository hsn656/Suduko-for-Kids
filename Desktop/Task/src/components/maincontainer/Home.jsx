import "./Home.css"
import Sidebar from '../sidebar/Sidebar'
import Statuscontainer from '../statuscontainer/Statuscontainer'

function Home() {
  return (
    <div className='home'>
        <Statuscontainer/>
        <Sidebar/>
    </div>
  )
}

export default Home