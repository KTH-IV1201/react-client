import {useEffect} from 'react';

function App() {
  const makeAPICall = async () => {
    try {
      console.log('pos5');
      const response = await fetch('https://iv1201-cors-backend-d64c08cc0cf7.herokuapp.com/cors', {mode: 'cors'});
      const data = await response.json();
      console.log({data});
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log('pos3');
    makeAPICall();
    console.log('pos4');
  }, []);
  return (
    <div className="App">
      <h1>Called server on other domain</h1>
    </div>
  );
}

export default App;
