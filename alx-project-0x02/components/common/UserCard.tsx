import React from 'react'
import { type UserCardProps } from '@/interfaces'

const UserCard: React.FC<UserCardProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">{email}</p>
      <div className="text-gray-600">
        <p>{address.street}, {address.suite}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>
    </div>
  )
}

export default UserCard