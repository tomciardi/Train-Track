import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from "./Routing/Routes"
import NavigationBar from "./Routing/NavigationBar"

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Routes />
    </div>
  );
}

export default App;