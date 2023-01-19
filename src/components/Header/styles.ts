import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

  nav{
    display: flex;
    gap: 0.6rem;
    
    span, a {
      border-radius: 6px;
      padding: 8px;
      line-height: 130%;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
    }

    span {
      gap: 0.1rem;
      background-color: ${props => props.theme["purple-light"]};
      color: ${props => props.theme["purple"]};
    }
    
    a{
      text-decoration: none;
      background-color: ${props => props.theme["yellow-light"]};
      color: ${props => props.theme["yellow-dark"]};
    }
  }
  
`