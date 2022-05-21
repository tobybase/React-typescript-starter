import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ToAddList from './components/ToAddList';
import { AddProperty } from './models/models';

function App() {
  const [toAdd, setToAdd] = useState<string>('');
  const [toAdds, setToAdds] = useState<AddProperty[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if (toAdd) {
      setToAdds([...toAdds, { id: Date.now(), toAdd, isDone: false }]);
      setToAdd('');
    }
  };

  // console.log(toAdds);

  return (
    <div className='App'>
      <span className='heading'>Note</span>
      <InputField toAdd={toAdd} setToAdd={setToAdd} handleAdd={handleAdd} />
      <ToAddList toAdds={toAdds} setToAdds={setToAdds} />
    </div>
  );
}

export default App;
