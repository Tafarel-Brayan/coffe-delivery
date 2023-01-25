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

      .badge {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 10px;

        border-radius: 1000px;
        background-color: ${props => props.theme["yellow-dark"]};
        width: 20px;
        height: 20px;
        
        position: absolute;
        top: 25px;
        transform: translateX(100%);

        color: ${props => props.theme.white};
        font-weight: 700;
        font-size: 0.75rem;

      }
    }
  }
  
`