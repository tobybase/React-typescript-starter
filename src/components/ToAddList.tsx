import React from 'react';
import { AddProperty } from '../models/models';
import NoteItem from './NoteItem';

import './style.css';

interface props {
  toAdds: AddProperty[];
  setToAdds: React.Dispatch<React.SetStateAction<AddProperty[]>>;
}

const ToAddList: React.FC<props> = ({ toAdds, setToAdds }) => {
  return (
    <div className='items'>
      {toAdds?.map((item) => (
        <NoteItem
          key={item.id}
          item={item}
          toAdds={toAdds}
          setToAdds={setToAdds}
        />
      ))}
    </div>
  );
};

export default ToAddList;
