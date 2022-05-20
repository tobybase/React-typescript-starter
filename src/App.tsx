import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { addProperty } from './models/models';

function App() {
  const [toAdd, setToAdd] = useState<string>('');
  const [toAdds, setToAdds] = useState<addProperty[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if (toAdd) {
      setToAdds([...toAdds, { id: Date.now(), toAdd, isDone: false }]);
      setToAdd('');
    }
  };

  console.log(toAdds);

  return (
    <div className='App'>
      <span className='heading'>Note</span>
      <InputField toAdd={toAdd} setToAdd={setToAdd} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
