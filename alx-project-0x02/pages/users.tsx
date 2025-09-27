import React from 'react'
import UserCard from '@/components/common/UserCard'
import { type UserCardProps } from '@/interfaces'

const Users: React.FC<{ users: Pick<UserCardProps, 'name' | 'email' | 'address'>[] }> = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} email={user.email} address={user.address} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users")
  const users = await res.json()

  return {
    props: { users },
  }
}
export default Users
