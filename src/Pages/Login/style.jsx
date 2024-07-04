import styled from 'styled-components'

const bigScreen = '1100px'

export const Container = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #E6E6E6;
  height: 100vh;
  width: 100%;
  ` 
  export const Header = styled.div `
    img{
      height: 100px;
    }
  
    @media screen and (min-width: ${bigScreen}) {
      img {
        height: 120px;
      }
    }
  ` 
export const FormTitle = styled.h3`
  font-size: 1.8rem;
`;
export const Form = styled.form `
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 1rem;
` 

export const ButtonControllers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  p{
    display: block;
  }
  i{
    font-size: 1.5rem;
  }
  button[type="submit"]{
    font-weight: 500;
    border: 2px solid black;
    transition: all .2s ease-in-out;
    &:hover{
      opacity: .7;
    }
  }
  button[type="button"]{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    gap: 1rem;
    font-weight: 500;
    border: 2px solid black;
    border-radius: 1rem;
    transition: all .2s ease-in-out;
    &:hover {
      color: #fff;
      background: #000;
    }
  }
`
export const Paragrapher = styled.p`
  font-size: 1.5rem;
`