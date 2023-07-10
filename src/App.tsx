import React, { useState } from 'react';

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
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Adicionar</button>
      <ul>
        {listItems.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
