import React, { useRef } from 'react';
import './style.css';

interface Props {
  toAdd: string;
  setToAdd: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ toAdd, setToAdd, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={(event) => {
        handleAdd(event);
        inputRef.current?.blur();
      }}>
      <input
        ref={inputRef}
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
