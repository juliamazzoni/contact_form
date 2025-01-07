
import { useState } from 'react';
import './App.css';
import { ContactForm } from './ContactForm';
import { Toast } from './Toast';

function App() {
  const [messageSent, setMessageSent] = useState(false)

  return (
    <div>
        {messageSent === true && <Toast />} 
      <div>
        <ContactForm setMessageSent={setMessageSent} />
      </div>
    </div>
  );
}

export default App;
