import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Wrapper = styled.div`
  width: 400px;
  border-radius: 10px;
  padding: 32px;
  padding-top: 48px;
  background: #444;
  box-shadow: 10px 10px 29px -2px rgba(0, 0, 0, 0.75);
`

export const Title = styled.h1`
  margin-bottom: 36px;
  text-align: center;
`

export const Label = styled.label`
  width: 100%;
  color: #fff;
  font-size: 18px;
`

export const Email = styled.input`
  width: 100%;
  background: #212121;
  color: #fff;
  height: 48px;
  border: 2px solid #212121;
  border-radius: 10px;
  padding: 8px 16px;
  margin: 12px 0;

  :hover,
  :focus {
    border: 2px solid #dc7633;
  }

  ::placeholder {
    color: #ccc;
  }
`

export const Submit = styled.button`
  width: 100%;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  background: #dc7633;
  border-radius: 10px;
  padding: 16px 32px;
`
