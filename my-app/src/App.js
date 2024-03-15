import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithCallback />
      <StatefulGreeting greeting="Im a statefull class component" name="Mike"/>
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!!" name="Mike" age="32"/>
    </div>
  );
}

export default App;
