import React from 'react';
import { AddProperty } from '../models/models';
import NoteItem from './NoteItem';

import './style.css';

interface Props {
  toAdds: AddProperty[];
  setToAdds: React.Dispatch<React.SetStateAction<AddProperty[]>>;
}

const ToAddList = ({ toAdds, setToAdds }: Props) => {
  return (
    <div className='items'>
      {toAdds.map((items) => (
        <NoteItem
          key={items.id}
          item={items}
          toAdds={toAdds}
          setToAdds={setToAdds}
        />
      ))}
    </div>
  );
};

export default ToAddList;
