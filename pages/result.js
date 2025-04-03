import { Button } from '@mui/material'
import axios from 'axios'
import Card from 'components/card'
import PicCard from 'components/picCard'
import Quote from 'components/quote'
import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import UserContext from 'components/context/userContext'

export default function Result() {
  const [foodData, setFoodData] = useState([])
  const router = useRouter()
  const u = useContext(UserContext)
  const [data, setData] = useState({})

  const q = router.query
  const percentage = 66
  const [pNutrients, setPNutrients] = useState([])

  const [d1, setD1] = useState([])
  const [s1, setS1] = useState(0)
  const [s2, setS2] = useState(0)

  const [finalValue, setFinalValue] = useState(0)

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

  const calculate = () => {
    var list = []
    var sum1 = 0
    var sum = 0

    pNutrients.map((e) => {
      if (e.nutrientName === 'Iron, Fe') {
        if (data.Iron > 0) {
          list.push(data.Iron - e.value)
          sum1 = sum1 + (100 - ((data.Iron - e.value) * 100) / data.Iron)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Vitamin A, IU') {
        if (data.VitaminA > 0) {
          list.push(data.VitaminA - e.value)
          sum1 =
            sum1 + (100 - ((data.VitaminA - e.value) * 100) / data.VitaminA)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Vitamin C, total ascorbic acid') {
        if (data.VitaminC > 0) {
          list.push(data.VitaminC - e.value)
          sum1 =
            sum1 + (100 - ((data.VitaminC - e.value) * 100) / data.VitaminC)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Carbohydrate, by difference') {
        if (data.Carbohydrate > 0) {
          list.push(data.Carbohydrate - e.value)
          sum1 =
            sum1 +
            (100 - ((data.Carbohydrate - e.value) * 100) / data.Carbohydrate)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Energy') {
        if (data.Energy > 0) {
          list.push(data.Energy - e.value)
          sum1 = sum1 + (100 - ((data.Energy - e.value) * 100) / data.Energy)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Sugars, total including NLEA') {
        if (data.Sugars > 0) {
          list.push(data.Sugars - e.value)
          sum1 = sum1 + (100 - ((data.Sugars - e.value) * 100) / data.Sugars)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Fiber, total dietary') {
        if (data.Fiber > 0) {
          list.push(data.Fiber - e.value)
          sum1 = sum1 + (100 - ((data.Fiber - e.value) * 100) / data.Fiber)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Potassium, K') {
        if (data.Potassium > 0) {
          list.push(data.Potassium - e.value)
          sum1 =
            sum1 + (100 - ((data.Potassium - e.value) * 100) / data.Potassium)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Total lipid (fat)') {
        if (data.Total_Lipid > 0) {
          list.push(data.Total_Lipid - e.value)
          sum1 =
            sum1 +
            (100 - ((data.Total_Lipid - e.value) * 100) / data.Total_Lipid)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Calcium, Ca') {
        if (data.Calcium > 0) {
          list.push(data.Calcium - e.value)
          sum1 = sum1 + (100 - ((data.Calcium - e.value) * 100) / data.Calcium)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Sodium, Na') {
        if (data.Sodium > 0) {
          list.push(data.Sodium - e.value)
          sum1 = sum1 + (100 - ((data.Sodium - e.value) * 100) / data.Sodium)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Cholesterol') {
        if (data.Cholesterol > 0) {
          list.push(data.Cholesterol - e.value)
          sum1 =
            sum1 +
            (100 - ((data.Cholesterol - e.value) * 100) / data.Cholesterol)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Fatty acids, total saturated') {
        if (data.Saturated_fat > 0) {
          list.push(data.Saturated_fat - e.value)
          sum1 =
            sum1 +
            (100 - ((data.Saturated_fat - e.value) * 100) / data.Saturated_fat)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Protein') {
        if (data.Protein > 0) {
          list.push(data.Protein - e.value)
          sum1 = sum1 + (100 - ((data.Protein - e.value) * 100) / data.Protein)
          sum = sum + 1
        }
      } else if (e.nutrientName === 'Fatty acids, total trans') {
        if (data.Total_Trans > 0) {
          list.push(data.Total_Trans - e.value)
          sum1 =
            sum1 +
            (100 - ((data.Total_Trans - e.value) * 100) / data.Total_Trans)
          sum = sum + 1
        }
      }
      setD1(list)
      // setS1(sum)
      // setS2(sum1)

      setFinalValue(sum1 / sum)

      // list.push(e.)
    })
    // list.push(pNutrients.)
  }

  const checkFood = async () => {
    const response = await axios
      .get(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${q.name}&pageSize=2&api_key=MbsrjC89NMdhdbDn7Rwu5Mb6Sh1v4u5beYP8dayn`,
      )

      .catch((e) => {
        console.log(e)
      })

    try {
      setFoodData(response.data.foods[0])
      setPNutrients(response.data.foods[0].foodNutrients)
    } catch (e) {
      console.log(e)
    }
    // console.log(foodData)

    // setPNutrients(foodData.foodNutrients)
    // console.log(response.data.foods)
  }

  const nutri = [
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
  ]

  const current = new Date()
  const d = `${current.getDate()}-${current.getMonth()}-${current.getFullYear()}`

  const [percentage2, setPercentage2] = useState()

  const getValue = async () => {
    const docRef = doc(db, `users/${u}/History/`, d)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      setPercentage2(docSnap.data().Percent / docSnap.data().Count)
    }
  }

  // useEffect(() => {
  //   console.log(percentage2)
  // }, [percentage2])

  const trim = () => {
    pNutrients.map((e, index) => {
      if (e.nutrientName === 'Iron, Fe') {
        pNutrients[index].value = e.value / 100
      } else if (e.nutrientName === 'Vitamin C, total ascorbic acid') {
        pNutrients[index].value = e.value / 100
      } else if (e.nutrientName === 'Potassium, K') {
        pNutrients[index].value = e.value / 100
      } else if (e.nutrientName === 'Calcium, Ca') {
        pNutrients[index].value = e.value / 100
      } else if (e.nutrientName === 'Sodium, Na') {
        pNutrients[index].value = e.value / 100
      } else if (e.nutrientName === 'Cholesterol') {
        pNutrients[index].value = e.value / 100
      } else if (e.nutrientName === 'Vitamin A, IU') {
        pNutrients[index].value = e.value * 0.003
      }
    })
  }

  useEffect(() => {
    checkFood()
    actualData()
    trim()
    calculate()
    getValue()

    // console.log(finalValue, percentage2)
    // console.log(s2)
    // calculate()
    // console.log(d1)
    // console.log(pNutrients)
  }, [foodData, percentage2])

  return (
    <div style={{ backgroundColor: '#f7fafc' }}>
      {/* <Button
        onClick={() => {
          checkFood()
        }}
        variant="outlined"
      >
        fghj
      </Button> */}
      <PicCard
        perc={percentage2}
        percent={finalValue > 100.000000 ? 100 : finalValue}
        image={q.image}
        name={q.name}
        disc={foodData ? foodData.foodCategory : 'NIL'}
        disc2={foodData ? foodData.foodCategory : 'NIL'}
      />

      {/* piccard */}

      <div class="flex flex-col bg-transparent mx-auto p-auto justify-around ">
        <h1 class="flex text-center py-5 m-auto font-bold text-2xl text-gray-800">
          NUTRITION PROFILE
        </h1>

        <div class="flex overflow-x-scroll  pb-10 hide-scroll-bar ">
          <div class="flex flex-nowrap ">
            {pNutrients.map((e, index) => {
              return (
                <div key={index} class="inline-block px-3 w-full">
                  <Card
                    // data={{pNutrients}}
                    color={e.color}
                    name={e.nutrientName}
                    severity={e.severity}
                    value={e.value}
                    serve={e.unitName}
                  />
                  {/* <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div> */}
                </div>
              )
            })}
          </div>
        </div>
        <Quote />
      </div>
    </div>
  )
}
