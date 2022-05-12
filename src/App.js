import { useState } from 'react';
import Preview from './components/Preview';

// importing styles
import './styles/app.scss';


function App() {

  const [text, setText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
        <textarea 
        name="text" 
        id="text" 
        cols="30" 
        rows="10" 
        value={text}
        onChange={(e)=> setText(e.target.value)}
        className="textarea">
        </textarea>

        <h3>Output</h3>

        <Preview markdown ={text}/>
      </header>
    </div>
  );
}

export default App;
