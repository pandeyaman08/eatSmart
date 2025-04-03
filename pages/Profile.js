import { Button } from '@mui/material'
import React, { useState } from 'react'

export default function Profile() {
  const [name, setName] = useState('')
  const [disease, setDisease] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [allergy, setAllergy] = useState('')

  return (
    <div>
      <div className="w-screen">
        <div class="bg-gray-100 flex bg-local w-screen">
          <div class="bg-gray-100 mx-auto w-screen h-auto bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
            <div>
              <h1 className="text-center font-bold text-2xl p-4">
                User Profile{' '}
              </h1>
              <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <div class="-mx-3 md:flex mb-6">
                  <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="company"
                    >
                      Name*
                    </label>
                    <input
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                      class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="company"
                      type="text"
                      placeholder="NAME"
                    />
                  </div>
                  <div class="md:w-1/2 px-3">
                    <label
                      class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="title"
                    >
                      Disease
                    </label>
                    <select
                      onChange={(e) => {
                        setDisease(e.target.value)
                      }}
                      class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="title"
                      type="number"
                      placeholder="DISEASE"
                    >
                      <option>please Select </option>
                      <option>please Select </option>
                      <option>please Select </option>
                      <option>please Select </option>
                      <option>please Select </option>
                    </select>
                  </div>
                </div>
                <div class="-mx-3 md:flex mb-6">
                  <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="company"
                    >
                      Height*
                    </label>
                    <input
                      onChange={(e) => {
                        setHeight(e.target.value)
                      }}
                      class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="company"
                      type="number"
                      placeholder="HEIGHT IN CM"
                    />
                  </div>
                  <div class="md:w-1/2 px-3">
                    <label
                      class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="title"
                    >
                      Weight
                    </label>
                    <input
                      onChange={(e) => {
                        setWeight(e.target.value)
                      }}
                      class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="title"
                      type="number"
                      placeholder="WEIGHT"
                    />
                  </div>
                </div>
                <div class="-mx-3 md:flex mb-6">
                  <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="company"
                    >
                      Allergy*
                    </label>
                    <select
                      onChange={(e) => {
                        setAllergy(e.target.value)
                      }}
                      class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="title"
                      type="number"
                      placeholder="DISEASE"
                    >
                      <option>please Select </option>
                      <option>please Select </option>
                      <option>please Select </option>
                      <option>please Select </option>
                      <option>please Select </option>
                    </select>
                  </div>
                  <div class="md:w-1/2 px-3 flex justify-center items-center">
                    <Button
                      variant="outlined"
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    >
                      Update
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
