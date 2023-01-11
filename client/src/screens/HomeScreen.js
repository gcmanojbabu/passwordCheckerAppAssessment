import axios from 'axios';
import React, { useEffect, useState } from 'react'


const isStrongPassword = (password) => {
  if (password.length < 6 || password.length > 20) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/[0-9]/.test(password)) {
    return false;
  }
  if (/([a-zA-Z0-9])\1{2,}/.test(password)) {
    return false;
  }
  return true;
}

const minimumStepsToMakeStrong = (password) => {
  let steps = 0;
  if (!isStrongPassword(password)) {
    if (password.length < 6) {
      steps += 6 - password.length;
      return steps
    }
    else if (password.length > 20) {
      steps += password.length - 20;
    }
    if (!/[a-z]/.test(password)) {
      steps += 1;
    }
    if (!/[A-Z]/.test(password)) {
      steps += 1;
    }
    if (!/[0-9]/.test(password)) {
      steps += 1;
    }
    if (/([a-zA-Z0-9])\1{2,}/.test(password)) {
      steps += 1;
    }
  }
  return steps;
}

export default function HomeScreen() {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [passwordList, setPasswordList] = useState([])

  useEffect(() => {
    getPassword()
  }, []);

  const getPassword = async () => {
    const getPassword = await axios.get('http://localhost:8200/api/v1/getPassword')
    console.log(getPassword.data.data)
    setPasswordList(getPassword.data.data)

  }

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const steps = minimumStepsToMakeStrong(password)
    if (steps === 0) {
      setMessage('')
      const savePassword = await axios.post('http://localhost:8200/api/v1/savePassword', { password })
      getPassword()
      setPassword('')
    }
    else {
      setMessage('Minimum Steps To Make Password Strong is ' + steps)
    }
  }

  return (
    <>
      <div>HomeScreen</div>
      <input type="text" value={password} onChange={handleChange} />
      <br />
      <button onClick={handleSubmit}>Save Password</button>
      <br />
      {message}
      <br />
      <h4>Password list</h4>
      {passwordList.map(element => {
        return <div key={Math.random()}>{element.password}</div>
      })}
    </>
  )
}
