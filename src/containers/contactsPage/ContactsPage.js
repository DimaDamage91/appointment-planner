import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Перевірка наявності дублікатів в імені
    if (!duplicateName) {
    // Додавання нового контакту
    addContact(name, phoneNumber, email);
    // Очищення форми після успішного надсилання
    setName('');
    setPhoneNumber('');
    setEmail('');
    }
  };

  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setDuplicateName(true);
    } else {
      setDuplicateName(false);
    }
  }, [name, contacts, duplicateName])

  

  return (
    <div>
      <section>
        <h2>Add Contact{duplicateName ? " - Name Already Exists" : ""}</h2> 
        <ContactForm 
        name={name}
        setName={setName}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
        tiles={contacts} 
        />
      </section>
    </div>
  );
};
