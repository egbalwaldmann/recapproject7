import React from 'react'
import Link from 'next/link'

const Button = ({ text, type, pageURL }) => {
  return (
    <Link className={`btn ${type}`} href={`${pageURL}`} >{text}</Link >
  )
}

export default Button
