import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <Link className='logo' href={"/"}>
            <h2>Desishub Coding School</h2>
        </Link>
        <Link href={"/add-course"}>
        <h2 >Add Course</h2>
        </Link>
    </header>
  )
}

export default Header