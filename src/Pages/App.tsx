/* eslint-disable jsx-a11y/aria-role */
import React, { useEffect, useState } from 'react';
import { Button } from '../Components/Button'

interface ListItem {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState<ListItem[]>([
    { id: 1, text: 'Toyota'},
    { id: 2, text: 'Honda'},
    { id: 3, text: 'Suzuki'},
    { id: 4, text: 'Nissan'}
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

  const [title, setTitle] = useState('Todos esses carros são confiáveis');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      // Find the element containing the specific text
      const elementsWithText = Array.from(document.querySelectorAll('body *')).filter(element => {
        return element.textContent && element.textContent.includes('Peugeot');
      });

      // Update the title based on the presence or absence of the specific text
      if (elementsWithText.length === 0) {
        setTitle('Todos esses carros são confiáveis'); // Specific text is no longer present
      } else {
        setTitle('Nem todos esses carros são confiáveis'); // Specific text is still present
      }
    });

    // Observe changes in the DOM
    observer.observe(document.body, { childList: true, subtree: true });

    // Disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <h2 role='title'>{title}</h2>
      <input role='input' data-testid='input_field' style={{height:35, marginRight:10, marginBottom:10}} type="text" value={inputText} onChange={handleInputChange} />
      <Button testID='btn_adicionar' onClick={handleAddItem} color={'blue'} children={'Adicionar'}></Button>
      <ul>
        {listItems.map(item => (
          <li 
          style={{marginLeft:20, marginBottom:10}} key={item.id}>
            {item.text}
              <Button testID={`btn_remover_${item.text}`} style={{marginLeft:10}} onClick={() => handleRemoveItem(item.id)} color={'red'} children={'Remover'}></Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
