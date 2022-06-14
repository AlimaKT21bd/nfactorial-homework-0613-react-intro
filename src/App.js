import gora from "./gora.jpeg";
import oz from "./ozero.jpg";
import girl from "./girl.jpeg";
import lisa from "./lisa.jpeg";
import oblaka from "./oblaka.jpeg";
import icon from "./icon.jpg";
import './App.css';


const {format} = require('date-fns');

const today = format(new Date(), 'dd.MM.yyyy HH:mm' )
function App() {
  return (
    <div className = "background">
        <div className = "header">
            <div className="clickers">
                <img  className="icon"  src = {icon}></img>
                <input  className = "frm" type="text" placeholder="  Search..."></input>
            </div>
       
            <div className="date">
                {today}
            </div>
        </div>
        <div className = "container">
            <div className = "img">
                <img src = {gora}></img>
                <p>HEY</p>
            </div>
            <div className = "img">
                <img src = {oz}></img>
                <p>LET'S</p>
            </div>
            <div className = "img">
                <img src = {girl}></img>
                <p>GIVE</p>
            </div>
            <div className = "img">
                <img src = {lisa}></img>
                <p>ALL</p>
            </div>
            <div className = "img">
                <img src = {oblaka}></img>
                <p>YOU CAN</p>
            </div>
        </div>
    </div>
  );
}

export default App;
