"use client"

import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'

export default function Login() {
  return (
    <div>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}
