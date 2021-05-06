import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from "./Routing/Routes"
import NavigationBar from "./Routing/NavigationBar"

function App() {
  return (
    <div className="App">
      <link rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossOrigin="anonymous"/>
      <NavigationBar />
      <Routes />
    </div>
  );
}

export default App;