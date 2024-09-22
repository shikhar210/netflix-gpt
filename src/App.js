import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from "./Redux/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body/>
      </Provider>
    </div>
  );
}

export default App;
