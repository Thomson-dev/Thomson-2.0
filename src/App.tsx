
import Left from "./Component/Left";
import Right from "./Component/Right";
import Home from "./Screen/Home";
import HomeScreen from "./Screen/HomeScreen";
import LoginScreen from "./Screen/LoginScreen";
import Test from "./Screen/Test";

type Props = {};

const App = (props: Props) => {
  return (
   <div className="w-full">
    {/* <HomeScreen/> */}
    {/* <LoginScreen/> */}
    {/* <Test/> */}
    <Home/>
   </div>
  );
};

export default App;
