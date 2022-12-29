import {useEffect} from 'react';

function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/cors', {mode: 'cors'});
      const data = await response.json();
      console.log({data});
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    makeAPICall();
  }, []);
  return (
    <div className="App">
      <h1>Called server on other domain</h1>
    </div>
  );
}

export default App;
