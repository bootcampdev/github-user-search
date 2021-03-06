import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  font-size: 32px;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 25px;
`

const Search = ({ username, setUsername, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input 
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
    </form>
  )
}

export default Search