import Link from 'next/link'
import React from 'react'
import {LiaUserCircleSolid} from 'react-icons/lia'

const Header = () => {
  return (
    <div className='w-full'>
      <div className='w-[95%] mx-auto flex justify-between py-6'>
        <h1>Logo</h1>
        <Link href="/"><LiaUserCircleSolid size={20}/></Link>
      </div>
      <hr />
    </div>
  )
}

export default Header