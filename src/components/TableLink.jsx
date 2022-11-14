import React from 'react'
import { useNavigate } from 'react-router-dom'

const TableLink = (props) => {
    const {text} = props
    const navigate = useNavigate()
  return (
    <div className='tableLink' onClick={() => navigate('/companies/companyInfo')}>{text}</div>
  )
}

export default TableLink