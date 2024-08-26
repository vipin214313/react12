
import './App.css';
import DemoFun from './comp/demoFun';
import Hellow from './comp/Hellow';
import MyFun from './comp/MyFun';
import Tool from './comp/propesDemo';
import MyComponent  from './comp/classState';
import Data from './comp/appDemo';

function App() {
  return (
    <div className="App"> 
    <h1> App.js is my Root Component</h1>
    <DemoFun/>
    <Hellow/>
    <MyFun name="vipin"/>
    <Tool/>
    <MyComponent />
    <Data />
    </div>
  );
}
export default App;
