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
  width: 800px;
  min-height: 300px;
  border-radius: 10px;
  padding: 32px;
  background: #444;
  box-shadow: 10px 10px 29px -2px rgba(0, 0, 0, 0.75);
`

export const Title = styled.h1`
  margin-bottom: 36px;
  text-align: center;
`

export const ScrollContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + div {
    border-top: 1px solid #dc7633;
  }
`

export const Email = styled.div`
  margin: 8px;
  padding: 8px;
`

export const DateAt = styled.div`
  margin: 8px;
  padding: 8px;
`
