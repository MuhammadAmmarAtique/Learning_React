import Greeting from './Greeting';

function App() {
  console.log(process.env.REACT_APP_NOT_SECRET_CODE);
  return (
 <Greeting />
  );
}

export default App;
