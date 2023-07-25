import React, {useState} from "react";

function App() {

  const[fName, setFName] = useState('');
  const[lName, setLName] = useState('');
  const[mail, setMail] = useState('');

  function firstName(event){
      const first = event.target.value;
      setFName(first);
  }

  function lastName(event){
     const last = event.target.value;
     setLName(last)
  }

  function email(event){
    const mymail = event.target.value;
    setMail(mymail);
  }

  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <p>{mail}</p>
      <form>
        <input onChange={firstName} name="fName" placeholder="First Name" />
        <input onChange={lastName} name="lName" placeholder="Last Name" />
        <input onChange={email} type="email" name="lName" placeholder="Email" />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
