import React from 'react';
import './style.css';

interface props {
  toAdd: string;
  setToAdd: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

const InputField = ({ toAdd, setToAdd, handleAdd }: props) => {
  return (
    <form className='input' onSubmit={handleAdd}>
      <input
        type='input'
        placeholder='Enter your note'
        value={toAdd}
        onChange={(event) => {
          setToAdd(event.target.value);
        }}
        className='input__box'
      />
      <button className='input_submit' type='submit'>
        ADD
      </button>
    </form>
  );
};

export default InputField;
