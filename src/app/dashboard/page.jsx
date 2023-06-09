"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

export default function Dashboard() {

  // const [data, setData] = useState({})
  // const [error, setError] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)


  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
  //     if (!res.ok) {
  //       setError(true)
  //     }
      
  //     const data = await res.json()
  //     setData(data)
  //     setIsLoading(false)
  //   };

  //   getData()
  // }, [])

  const session = useSession()
  console.log(session)

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)


  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
