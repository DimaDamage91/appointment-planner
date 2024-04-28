import React from "react";

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
      <input 
       type='text' 
       value={name} 
       onChange={(e) => setName(e.target.value)}
       placeholder="Contact Name:"
       required
      />
      </label>
      <br/>
      <label>
      <input 
       type='tel' 
       value={phoneNumber} 
       onChange={(e) => setPhoneNumber(e.target.value)}
       placeholder="Phone Number:"
       required
      />
      </label>
      <br/>
      <label>
      <input 
       type='email' 
       value={email} 
       onChange={(e) => setEmail(e.target.value)}
       placeholder="Email:"
       required
       />
       </label>
       <br/>
       <input type="submit" value="Add Contact" aria-label="Add Contact"/>
    </form>
    
  );
};

