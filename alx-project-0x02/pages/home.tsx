import React from 'react'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'

function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
        <h1>Home Page</h1>
        <Card title="Card Title" content="This is the card content." />
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={openModal}>
          Open Post Modal
        </button>
        <PostModal title="Modal Title" content="This is the modal content." isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default Home
