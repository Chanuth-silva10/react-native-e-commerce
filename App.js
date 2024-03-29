import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./states/store";
export default function App() {
  
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
