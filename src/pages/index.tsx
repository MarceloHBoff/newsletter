import React, { useCallback, useState } from 'react'

import axios from 'axios'
import Head from 'next/head'

import {
  Container,
  Wrapper,
  Title,
  Label,
  Email,
  Submit
} from '../styles/pages/Home'

const Home: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = useCallback(() => {
    axios.post('/api/subscribe', { email })

    setEmail('')
  }, [email])

  return (
    <Container>
      <Head>
        <title>NewsLetter</title>
      </Head>

      <Wrapper>
        <Title>NewsLetter</Title>

        <Label>Email</Label>
        <Email
          placeholder="Digite seu email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Submit onClick={handleSubmit}>Inscrever</Submit>
      </Wrapper>
    </Container>
  )
}

export default Home
