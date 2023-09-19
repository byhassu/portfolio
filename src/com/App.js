import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Component1 from "./Component1";
import Component2 from "./Component2";
let name = "Hassu";
const car_obj = { name: "Corolla XLI", colour: "WHite", make: "2008" };
let a = 10;
let msg = "";
if (a > 5) {
  msg = "Hi";
} else {
  msg = "Bye";
}
function App() {
  const name = "Hassu";
  let data;
  let age=22;
  if (name == "Hassu") {
    data= <Component1 />;
  } else {
    data= <Component2 />;
  }
  return(
    <div>
    {age>=18 ? <h1>You can join the party</h1>:<h1>Better Luck Next Time</h1>}
    {name=='Hassu' && <h1>Hello From Logocal</h1>}
      {data}
    </div>
  )
  // return (
  //   <>
  //   <Header/>

  //    <Sidebar></Sidebar>
  //     <Footer></Footer>

  //   </>

  //<div className="App">
  // <h1>{msg}</h1>
  // <h1>{(a>5)? "Greater":"Lesser"}</h1>
  // <label htmlFor=""></label>
  // <h1>{car_obj.name}</h1>
  // <h1>{car_obj.colour}</h1>
  // <h1>{car_obj.make}</h1>
  //  <h1>{name}</h1>
  //  <h1>{5+5}</h1>
  //</div>
  // );
}

export default App;
