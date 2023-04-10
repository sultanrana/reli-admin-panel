import React from 'react'
import { Link } from 'react-router-dom'

const TableLink = (props) => {
  const {text, route} = props
  // console.log('props: ', props);
  return (
    <Link to={route} className='tableLink'>{text}</Link>
  )
}

export default TableLink