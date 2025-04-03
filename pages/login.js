import UserContext from '@/components/context/userContext'
import { auth } from '@/firebase'
import { Button, CircularProgress } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

export default function Login() {
  const router = useRouter()
  const a = useContext(UserContext)
  const [email, setEmail] = useState('null')
  const [password, setPassword] = useState('null')
  const [isLoading, setIsLoading] = useState(false)
  const u = useContext(UserContext)
  const [eye, setEye] = useState(false)

  const handleSignIn = () => {
    try {
      setIsLoading(true)

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          router.push('/user/diseaseSelect')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setIsLoading(false)
        })
    } catch (e) {
      alert(e.message)
      setIsLoading(false)
    }
  }

  // useEffect(() => {
  //   if (u) {
  //     router.push('/user/mainHome')
  //   }
  // }, [u])

  return (
    <div className="w-full h-screen ">
      <section className="">
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full ">
            <div class="grid flex-wrap items-center justify-center  grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
              <div class="m-auto w-full h-full">
                <div class="rounded-xl w-full bg-white shadow-xl h-full">
                  <div class="p-6 sm:p-16 ">
                    <div class="space-y-4 ">
                      {/* <img
                      src="/lg.png"
                      // loading="lazy"
                      class="w-20 m-0"
                      alt="tailus logo"
                    /> */}
                      <div class="mb-6 mx-2 text-2xl text-cyan-900 font-bold">
                        Sign In
                        <h1 className="mt-3"> </h1>
                      </div>
                    </div>

                    <div class="mt-16 grid space-y-4 ">
                      <div>
                        {/* <label for="name" class="sr-only">
                          Name
                        </label> */}
                        <input
                          onChange={(e) => {
                            setEmail(e.target.value)
                          }}
                          type="text"
                          name="name"
                          id="email"
                          class="block w-full px-5 py-3  text-neutral-900  transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 text-sm"
                          placeholder="Email"
                        />
                      </div>
                      <div>
                        {/* <label for="name" class="sr-only">
                          Name
                        </label> */}
                        <input
                          onChange={(e) => {
                            setPassword(e.target.value)
                          }}
                          type="password"
                          name="name"
                          id="email"
                          class="block w-full px-5 py-3 text-base text-neutral-900  transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          placeholder="Password"
                        />
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <Button
                          onClick={(e) => {
                            console.log('clicked')
                            if (!email || !password) {
                              alert('Enter Details')
                            } else {
                              if (email.includes('@')) {
                                handleSignIn(e)
                              } else {
                                alert('email wrong')
                              }
                            }
                          }}
                          variant="outlined"
                          color="success"
                        >
                          {isLoading ? <CircularProgress /> : 'Log In'}
                        </Button>
                      </div>
                    </div>

                    <div class="mt-16 space-y-4 text-gray-600 text-center sm:-mb-8">
                      <p class="text-xs">
                        By proceeding, you agree to our{' '}
                        <a href="#" class="underline">
                          Terms of Use
                        </a>{' '}
                        and confirm you have read our{' '}
                        <a href="#" class="underline">
                          Privacy and Cookie Statement
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-first hidden w-full h-full lg:block">
                <img
                  class="object-cover h-full bg-cover rounded-l-lg"
                  src="https://images.unsplash.com/photo-1576021182211-9ea8dced3690?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
//open localhost:3000
