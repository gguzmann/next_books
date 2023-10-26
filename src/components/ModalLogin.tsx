'use client'
import { registerNewUsers, singIn, singInWithGoogle, singOut } from '@/data/firebase'
import { userAuth } from '@/store/userStore'

import { useState } from 'react'
const initialState = {
  email: '',
  password: ''
}
export const ModalLogin = () => {
  const [open, setOpen] = useState(false)
  const [login, setLogin] = useState(true)
  const [formulario, setFormulario] = useState(initialState)
  const [error, setError] = useState(null)

  const { setAuth, authenticate } = userAuth()
  const handleLogout = () => {
    singOut()
    setAuth(false, '')
  }

  const handleChange = (e: any) => {
    console.log(authenticate)
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }
  const submitLogin = async (e: any) => {
    e.preventDefault()
    try {
      const { user } = await singIn(formulario.email, formulario.password)
      console.log(user)
      setOpen(false)
      setFormulario(initialState)
      setAuth(true, user.email ?? '')
      setError(null)
    } catch (error: any) {
      console.log('error:', error)
      setError(error.message)
    }
  }

  const submitRegister = async (e: any) => {
    e.preventDefault()
    try {
      await registerNewUsers(formulario.email, formulario.password)
      console.log(formulario)
      setLogin(true)
      setOpen(false)
      setFormulario(initialState)
      setError(null)
    } catch (error: any) {
      console.log('error:', error)
      setError(error.message)
    }
  }

  const loginWithGoogle = async () => {
    try {
      console.log('asd')
      const { user } = await singInWithGoogle()
      setLogin(true)
      setOpen(false)
      setFormulario(initialState)
      setAuth(true, user.email ?? '')
      setError(null)
    } catch (error) {
      console.log('ERRORRRR', error)
    }
  }

  return (
        <>
            <div className={`${!open && 'hidden'} bg-gray-100 min-h-screen flex items-center justify-center z-[1100]`}>
                <div className="max-w-md w-[400px] rounded-lg shadow-lg bg-white p-8 space-y-6 border border-gray-200 dark:border-gray-700">
                    <div className="space-y-2 text-center">
                        <div className='flex justify-between w-full'>
                            <div></div>
                            <h1 className="text-3xl font-bold">
                                {login ? 'Login' : 'Register'}
                            </h1>
                            <button onClick={() => { setOpen(false) }} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {error}
                    </div>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Email
                            </label>
                            <input type="email"
                            onChange={handleChange}
                            value={formulario.email}
                            name="email"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="email" placeholder="m@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Password
                            </label>
                            <input type="password"
                            onChange={handleChange}
                            value={formulario.password}
                            name="password"

                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="password" placeholder="******" required />
                        </div>
                        {
                            login
                              ? <button onClick={submitLogin} type="submit" className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-black text-white'>Login</button>
                              : <button onClick={submitRegister} type="submit" className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-black text-white'>Register</button>

                        }
                        <p className="text-zinc-500 w-full truncate">
                            {!login ? 'Already a user?' : 'Dont have an account?'}
                            <span
                            onClick={() => { setLogin(!login) }} className="cursor-pointer text-blue-500 hover:text-blue-700"> {!login ? 'Login' : 'Register'}</span>.
                        </p>
                        <div className="flex items-center space-x-2">
                            <hr className="flex-grow border-zinc-200" />
                            <span
                                className="text-zinc-400 dark:text-zinc-300 text-sm">
                                OR
                            </span>
                            <hr className="flex-grow border-zinc-200" />
                        </div>
                        <button
                        onClick={loginWithGoogle}
                        type='button'
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-[#4285F4] text-white">
                            <div className="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" className=" w-5 h-5 mr-2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="12" r="4"></circle>
                                <line x1="21.17" x2="12" y1="8" y2="8"></line>
                                <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
                                <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
                            </svg>
                                Login with Google
                            </div>
                        </button>

                    </form>
                </div>
            </div>
            {
              !authenticate
                ? <button
                onClick={() => { setOpen(true) }}
                className="absolute z-[500] right-0 m-5 justify-center font-medium ring-offset-background h-10 px-2 py-1 bg-gray-800 text-white rounded-lg flex items-center space-x-2 text-sm"
                type="button">
                <span>Iniciar Sesion</span>
            </button>
                : <button
            onClick={ handleLogout }
            className="absolute z-[500] right-0 m-5 justify-center font-medium ring-offset-background h-10 px-2 py-1 bg-gray-800 text-white rounded-lg flex items-center space-x-2 text-sm"
            type="button">
            <span>Cerrar Sesion</span>
        </button>
            }
        </>
  )
}
