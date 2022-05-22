import React, { useState } from 'react';
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
  const [edit, setEdit] = useState<Boolean>(false);
  const [editToAdd, setEditToAdd] = useState<string>(item.toAdd);

  const handleDone = (id: number) => {
    setToAdds(
      toAdds.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setToAdds(toAdds.filter((item) => item.id !== id));
  };

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault();

    setToAdds(
      toAdds.map((item) =>
        item.id === id ? { ...item, item: editToAdd } : item
      )
    );
    setEdit(false);
  };

  return (
    <form
      className='items__single'
      onSubmit={(event) => handleEdit(event, item.id)}>
      {edit ? (
        <input
          value={editToAdd}
          onChange={(event) => setEditToAdd(event.target.value)}
          className='items__single--test'
        />
      ) : item.isDone ? (
        <s className='items__single--text'>{item.toAdd}</s>
      ) : (
        <span className='items__single--text'>{item.toAdd}</span>
      )}

      <div>
        <span
          className='icon'
          onClick={() => {
            if (!edit && !item.isDone) {
              setEdit(!edit);
            }
          }}>
          <AiOutlineEdit />
        </span>
        <span className='icon' onClick={() => handleDelete(item.id)}>
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
