import { useState } from 'react';
import { reqGroqAi } from './utils/groq.js';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const handleContent = async (e) => {
    e.preventDefault();
    const ai = await reqGroqAi(input);
    setData(ai);
    setInput("");
  };

  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto">
      <h1 className="text-indigo-500 text-4xl">REACT | GROQ AI</h1>
      <form className="flex flex-col gap-4 py-4 w-full" onSubmit={handleContent}>
        <input 
          className="py-2 px-4 text-md rounded-md" 
          placeholder="ketik permintaan disini"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button className="bg-indigo-500 py-2 px-4 font-bold text-white rounded-md" type="submit">Kirim</button>
      </form>
      <div className="max-w-xl w-full mx-auto">
        {data ? (
          <div>{data}</div>
        ) : null}
      </div>
    </main>
  );
}

export default App;