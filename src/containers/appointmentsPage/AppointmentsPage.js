import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  
  // Локальні змінні стану для зберігання даних про зустріч 
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  // Функція для обробки події подання форми
  const handleSubmit = (e) => {
    e.preventDefault();
    // Додавання нової зустрічи з даними з форми   
    addAppointment(name, contact, date, time);
    // Скидання значень змінних стану до значень за замовчуванням
    setName('');
    setContact('');
    setDate('');
    setTime('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
         contacts={contacts}
         name={name}
         setTitle={setName}        
         contact={contact}
         setContact={setContact}
         date={date}
         setDate={setDate}
         time={time}
         setTime={setTime}
         handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments}/>
      </section>
    </div>
  );
};