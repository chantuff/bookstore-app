import React from 'react'
import LogInForm from '../components/LogInForm.jsx'
import SignUpForm from '../components/SignupForm.jsx'

function AuthPage(props) {
  return (
    <>
    <h1>AuthPage</h1>
    <SignUpForm setUser={props.setUser}/>
    <LogInForm setUser={props.setUser} />
    </>
  )
}

export default AuthPage