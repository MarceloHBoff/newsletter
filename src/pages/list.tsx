import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Head from 'next/head'

import {
  Container,
  Title,
  Wrapper,
  ScrollContainer,
  ListWrapper,
  Email,
  DateAt
} from '../styles/pages/List'

interface Email {
  _id: string
  email: string
  subscribeAt: Date
}

const List: React.FC = () => {
  const [emails, setEmails] = useState<Email[]>([])

  useEffect(() => {
    axios.post('/api/list').then(response => {
      setEmails(response.data.emails)
    })
  }, [])

  return (
    <Container>
      <Head>
        <title>Emails cadastrados</title>
      </Head>

      <Wrapper>
        <Title>Emails cadastrados</Title>

        <ScrollContainer>
          {emails.map(email => (
            <ListWrapper key={email._id}>
              <Email>{email.email}</Email>
              <DateAt>
                {new Date(email.subscribeAt).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })}
              </DateAt>
            </ListWrapper>
          ))}
        </ScrollContainer>
      </Wrapper>
    </Container>
  )
}

export default List
