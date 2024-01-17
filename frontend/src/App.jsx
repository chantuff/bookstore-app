import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
import LogInForm from './components/LogInForm';
import SignUpForm from './components/SignUpForm';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LogInForm />} /> 
      <Route path='/' element={<SignUpForm />} /> 
      {/* <Route path='/home' element={<Home />} /> */}
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App