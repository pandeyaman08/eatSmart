import { db } from '@/firebase'
import { doc, getDoc, increment, setDoc, updateDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import UserContext from './context/userContext'
import { useRouter } from 'next/router'

export default function PicCard({ name, image, disc, disc2, percent, perc }) {
  const percentage = percent.toFixed(2)
  const router = useRouter()
  // const [percentage2, setPercentage2] = useState(0)
  const [count, setCount] = useState(0)
  const current = new Date()
  const d = `${current.getDate()}-${current.getMonth()}-${current.getFullYear()}`

  const time = new Intl.DateTimeFormat('en-IN', { timeStyle: 'medium' }).format(
    current.getTime(),
  )
  const u = useContext(UserContext)

  const saveData = async () => {
    const docRef = doc(db, `users/${u}/History/`, d)
    try {
      await updateDoc(docRef, {
        Last_Comsumed_Item: name,
        Percent: increment(percentage),
        Count: increment(1),
      }).then(() => {
        console.log('done')
      })
    } catch {
      await setDoc(docRef, {
        Last_Comsumed_Item: name,
        Percent: percentage,
        Count: 0,
      })
        .catch((e) => {
          console.log(e.message)
        })
        .then(() => {
          console.log('done')
        })
    }
    alert('You successfully Consumed The Food')
    router.push('/user/mainHome')
  }

  useEffect(() => {
    console.log(percentage)
  }, [percentage, count])

  return (
    <div>
      {/* <!-- component --> */}
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"> */}

      <div class="flex items-center justify-center p-3 from-blue-400 via-purple-300 to-blue-400 bg-gradient-to-br">
        <div class="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl">
          <div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
            <div class="w-full md:w-2/5 flex flex-col items-center justify-center">
              <figure class="w-1/2 h-full md:w-full  ">
                <img
                  src={image}
                  alt="Food Image"
                  className="rounded-full overflow-hidden"
                />
              </figure>
            </div>
            <div class="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
              <div class="flex flex-col justify-center">
                <h1 class="text-center  uppercase text-2xl font-bold text-gray-900">
                  {name}
                </h1>
                <p class="inline text-gray-700 font-normal leading-6 w-full text-center">
                  {/* {disc + ', ' + disc2} */}
                </p>
              </div>

              <button
                onClick={() => {
                  saveData()
                }}
                class="transition-colors bg-purple-700 hover:bg-purple-800 p-2 rounded-sm w-full text-white text-hover shadow-md shadow-purple-900"
              >
                Consume Item
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center p-3 from-blue-400 via-purple-300 to-blue-400 bg-gradient-to-bl">
        <div class="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-1 bg-[#FFFBFB] bg-opacity-80 rounded-lg shadow-xl ">
          <div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
            <div class="w-full md:w-2/5 flex flex-col items-center justify-center">
              <figure class="w-2/5 md:w-full ">
                {/* <img
                  src="https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="woman wearing a headwrap and an Africa-shaped earring while smiling"
                /> */}
                <CircularProgressbar
                  value={percentage < 100 ? percentage : 100}
                  text={`${percentage < 100 ? percentage : 100}%`}
                />
              </figure>
            </div>
            <div class="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
              <div class="flex flex-col justify-center">
                <h1 class="text-center  text-2xl font-bold text-gray-900">
                  Current Food Index
                </h1>
                <p class="inline text-gray-700 font-normal leading-6 w-full text-center">
                  &quot;Calculated data&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-1 bg-[#FFFBFB] bg-opacity-80 rounded-lg shadow-xl ">
          <div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
            <div class="w-full md:w-2/5 flex flex-col items-center justify-center">
              <figure class="w-2/5 md:w-full ">
                {/* <img
                  src="https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="woman wearing a headwrap and an Africa-shaped earring while smiling"
                /> */}
                <CircularProgressbar
                  value={perc < 100 ? perc : 100}
                  text={`${perc < 100 ? perc : 100}%`}
                />
              </figure>
            </div>
            <div class="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
              <div class="flex flex-col justify-center">
                <h1 class="text-center  text-2xl font-bold text-gray-900">
                  Daily Food Index
                </h1>
                <p class="inline text-gray-700 font-normal leading-6 w-full text-center">
                  &quot;Calculated data&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
