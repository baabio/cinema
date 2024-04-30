import React, { useState } from 'react'

const Search = ({list, setList, filterFiled = item => item, ...props}) => {
    const [value, setValue] = useState(initialState)
    const handleChange = event => {
        setValue(event.target.value)
    }
  return (
    <input type="text" placeholder='search...' name="search" onChange={handleChange} value={value} />
  )
}

export default Search