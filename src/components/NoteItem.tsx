import React from 'react';
import { AddProperty } from '../models/models';
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './style.css';

type Props = {
  item: AddProperty;
  toAdds: AddProperty[];
  setToAdds: React.Dispatch<React.SetStateAction<AddProperty[]>>;
};

const NoteItem = ({ item, toAdds, setToAdds }: Props) => {
  const handleDone = (id: number) => {
    setToAdds(
      toAdds.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <form className='items__single'>
      {item.isDone ? (
        <s className='items__single--text'>{item.toAdd}</s>
      ) : (
        <span className='items__single--text'>{item.toAdd}</span>
      )}
      <div>
        <span className='icon'>
          <AiOutlineEdit />
        </span>
        <span className='icon'>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={() => handleDone(item.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default NoteItem;
