import UserContext from '@/components/context/userContext'
import { db } from '@/firebase'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'

export default function DiseaseSelect() {
  const u = useContext(UserContext)
  const router = useRouter()

  const [disease, setDisease] = useState('Select Disease')
  const [allergy, setAllergy] = useState('Select Allergy')
  const [saveor, setSavour] = useState(1)

  const [data, setData] = useState([{ Disease: 'nill' }])

  const factor = [1.8, 1.4, 1, 0.6, 0.2]

  const GetDiseaseData = async () => {
    const q = collection(db, 'Disease_Data')

    const querySnapshot = await getDocs(q)
    var list = []
    querySnapshot.forEach((doc) => {
      list.push(doc.data())
    })
    setData(list)
  }

  var data3 = [
    'Lactose',
    'Gluten',
    'Lupin',
    'Celery',
    'Crustaceans',
    'Eggs',
    'Fish',
    'Molluscs',
    'Mustard',
    'Nuts',
    'Peanuts',
    'Seasme Seeds',
    'Soy',
    'Sulphite',
  ]

  const setAllergyData = async () => {
    if (!allergy) {
      alert('Enter Data')
    } else {
      try {
        await setDoc(doc(db, `users/${u}/Disease_Data`, 'Allergies'), {
          Name: allergy,
        })
      } catch (e) {}
    }
  }

  const setUserDiseaseData = async () => {
    if (!disease || !saveor) {
      alert('Select Disease Disease')
    } else {
      data.forEach(async (e) => {
        if (e.Disease === disease) {
          try {
            await setDoc(doc(db, `users/${u}/Disease_Data`, 'Disease'), {
              Disease: e.Disease,
              Severity: saveor,
              Calcium: e.Calcium * factor[saveor - 1],
              Iron: e.Iron * factor[saveor - 1],
              Sodium: e.Sodium * factor[saveor - 1],
              VitaminA: e.VitaminA * factor[saveor - 1],
              VitaminC: e.VitaminC * factor[saveor - 1],
              Cholesterol: e.Cholesterol * factor[saveor - 1],
              Saturated_fat: e.Saturated_fat * factor[saveor - 1],
              Protein: e.Protein * factor[saveor - 1],
              Carbohydrate: e.Carbohydrate * factor[saveor - 1],
              Energy: e.Energy * factor[saveor - 1],
              Sugars: e.Sugars * factor[saveor - 1],
              Fiber: e.Fiber * factor[saveor - 1],
              Potassium: e.Potassium * factor[saveor - 1],
              Total_Trans: e.Total_Trans * factor[saveor - 1],
              Total_Lipid: e.Total_Lipid * factor[saveor - 1],
            })
              .then(() => {
                setAllergyData()
              })
              .then(() => {
                alert('success')
              })
              .then(() => {
                router.push('/user/mainHome')
              })
          } catch (e) {
            console.log(e.message)
          }
        }
      })
    }
  }

  useEffect(() => {
    GetDiseaseData()
  }, [data])

  const [pick, setPick] = useState(false)
  const [pick2, setPick2] = useState(false)

  return (
    <>
      <div
        style={{ backgroundColor: '#f7fafc' }}
        className="h-auto w-full  p-4 "
      >
        <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40 my-20">
          <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-8/12">
            <div class="rounded-xl bg-white shadow-xl">
              <div class="p-6 sm:p-16">
                {/* <div class="space-y-4">
                  <img
                    src="https://tailus.io/sources/blocks/social/preview/images/icon.svg"
                    // loading="lazy"
                    class="w-10"
                    alt="tailus logo"
                  />
                  <h2 class="mb-8 text-2xl text-cyan-900 font-bold">
                    Sign in to unlock the <h1> best of EatSmart.</h1>
                  </h2>
                </div> */}
                <div class="mt-16 grid space-y-4">
                  <button
                    onClick={() => {
                      setPick(!pick)
                    }}
                    class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  >
                    <div class="relative flex items-center space-x-4 justify-center">
                      {/* <img
                        src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                        class="absolute left-0 w-5"
                        alt="google logo"
                      /> */}

                      <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        {disease}
                      </span>
                    </div>
                  </button>
                </div>
                {pick && (
                  <div className="p-4 w-full rounded-2xl ">
                    <div className=" justify-center rounded-xl p-2">
                      <ScrollMenu>
                        {data.map((e, index) => {
                          return (
                            <>
                              <div
                                onClick={() => {
                                  setDisease(e.Disease)
                                  setPick(false)
                                }}
                                key={index}
                                className="p-1 m-1 flex items-center justify-center hover:cursor-pointer h-24 w-40 hover:scale-105  bg-gradient-to-br from-sky-100  to-sky-300 font-bold text-2xl rounded-xl"
                              >
                                {e.Disease}
                              </div>
                            </>
                          )
                        })}
                      </ScrollMenu>
                    </div>
                  </div>
                )}
                <div class="mt-16 grid space-y-4">
                  <button
                    onClick={() => {
                      setPick2(!pick2)
                    }}
                    class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  >
                    <div class="relative flex items-center space-x-4 justify-center">
                      {/* <img
                        src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                        class="absolute left-0 w-5"
                        alt="google logo"
                      /> */}

                      <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        {allergy}
                      </span>
                    </div>
                  </button>
                </div>
                {pick2 && (
                  <div className="p-4 w-full rounded-2xl ">
                    <div className=" justify-center rounded-xl p-2">
                      <ScrollMenu>
                        {data3.map((e, index) => {
                          return (
                            <>
                              <div
                                onClick={() => {
                                  setAllergy(e)
                                  setPick2(false)
                                }}
                                key={index}
                                className="p-1 m-1 flex items-center justify-center hover:cursor-pointer h-24 w-40 hover:scale-105  bg-gradient-to-br from-sky-100  to-sky-300 font-bold text-2xl rounded-xl"
                              >
                                {e}
                              </div>
                            </>
                          )
                        })}
                      </ScrollMenu>
                    </div>
                  </div>
                )}
                <div className="m-4 ">
                  <div className="flex w-full text-xl justify-center font-bold mb-4">
                    Disease Severity
                  </div>
                  <div class="slidecontainer w-full ">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={saveor}
                      class={`slider w-full  `}
                      id="myRange"
                      onChange={(e) => {
                        setSavour(e.target.value)
                      }}
                    />
                    <div className="flex w-full ">
                      <div className="w-1/4">1</div>
                      <div className="w-1/4">2</div>
                      <div className="w-1/4">3</div>
                      <div>4</div>
                      <div className="w-1/4 text-right">5</div>
                    </div>

                    <div className="flex w-full h-auto justify-center mt-5">
                      <button
                        onClick={setUserDiseaseData}
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

//[alergy1,allergy2]
//[[food1,food2][food1,food2][food1,food2]]
