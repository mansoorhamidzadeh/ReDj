import React from 'react'
import { Link } from 'react-router-dom'

const AddButton = () => {
  return (
    <Link to='/note/new'>
        <h3>add new one </h3>
    </Link>
  )
}

export default AddButton