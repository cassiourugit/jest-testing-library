import React, { useState } from 'react';
import { Button } from '../Components/Button/index'

interface ListItem {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState<ListItem[]>([
    { id: 1, text: 'Peugeot'},
    { id: 2, text: 'Honda'},
    { id: 3, text: 'Suzuki'}
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      const newItem: ListItem = {
        id: Date.now(),
        text: inputText
      };
      setListItems([...listItems, newItem]);
      setInputText('');
    }
  };

  const handleRemoveItem = (itemId: number) => {
    setListItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <input style={{height:35, marginRight:10, marginBottom:10}} type="text" value={inputText} onChange={handleInputChange} />
      <Button onClick={handleAddItem} color={'blue'} children={'Adicionar'}></Button>
      <ul>
        {listItems.map(item => (
          <li style={{marginLeft:20, marginBottom:10}} key={item.id}>
            {item.text}
              <Button style={{marginLeft:10}} onClick={() => handleRemoveItem(item.id)} color={'red'} children={'Remover'}></Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
