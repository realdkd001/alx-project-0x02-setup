import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/users">Users</Link>
    </div>
  )
}

export default Header