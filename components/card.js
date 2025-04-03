import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import UserContext from './context/userContext'

export default function Card({ color, severity, name, value, serve }) {
  const u = useContext(UserContext)
  const [data, setData] = useState([])
  const [res, setRes] = useState()

  const actualData = async () => {
    try {
      const docRef = doc(db, `users/${u}/Disease_Data`, 'Disease')
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setData(docSnap.data())
      } else {
        console.log('not exist')
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  const list = []

  const filter = () => {
    // console.log(name);
    if (name === 'Iron, Fe') {
      setRes(data.Iron)
    } else if (name === 'Vitamin A, IU') {
      setRes(data.VitaminA)
    } else if (name === 'Vitamin C, total ascorbic acid') {
      setRes(data.VitaminC)
    } else if (name === 'Carbohydrate, by difference') {
      setRes(data.Carbohydrate)
    } else if (name === 'Energy') {
      setRes(data.Energy)
    } else if (name === 'Sugars, total including NLEA') {
      setRes(data.Sugars)
    } else if (name === 'Fiber, total dietary') {
      setRes(data.Fiber)
    } else if (name === 'Potassium, K') {
      setRes(data.Potassium)
    } else if (name === 'Total lipid (fat)') {
      setRes(data.Total_Lipid)
    } else if (name === 'Total lipid (fat)') {
      setRes(data.Total_Lipid)
    } else if (name === 'Calcium, Ca') {
      setRes(data.Calcium)
    } else if (name === 'Sodium, Na') {
      setRes(data.Sodium)
    } else if (name === 'Cholesterol') {
      setRes(data.Cholesterol)
    } else if (name === 'Fatty acids, total saturated') {
      setRes(data.Saturated_fat)
    } else if (name === 'Protein') {
      setRes(data.Protein)
    } else if (name === 'Fatty acids, total trans') {
      setRes(data.Total_Trans)
    }
  }

  useEffect(() => {
    actualData()
    filter()
    // console.log(name)
    // console.log(data);
    // console.log(data.Protein)
  }, [data, res])

  return (
    <div class=" flex items-center justify-between p-4 hover:scale-105 transition ease-in-out delay-150  hover:-translate-y-1   duration-300 rounded-lg bg-white shadow-indigo-50 shadow-md">
      <div className="w-full p-4">
        <h2 class="text-gray-900 text-lg font-bold">{name}</h2>
        <h3
          // style={{ color: { red } }}
          class="mt-2 text-xl font-bold text-red-500  text-left "
        >
          {value}
        </h3>
        <p class="text-sm font-semibold text-gray-400">
          Recommended Limit: {res}
        </p>
      </div>
      <div
        // style={{ backgroundColor: `${color}` }}
        class={` w-36 h-20  rounded-full ${
          value > res && res!=0
            ? 'bg-red-500'
            : 'bg-gradient-to-tr from-green-600 to-lime-400'
        } shadow-2xl ${
          value > res && res!=0? 'shadow-red-500' : 'shadow-green-400'
        } border-white  border-dashed border-2  flex justify-center items-center `}
      >
        <div>
          <h1 class="text-white text-2xl">
            {value > res && res != 0 ? 'Harm' : 'Basic'}
          </h1>
        </div>
      </div>
    </div>
  )
}
