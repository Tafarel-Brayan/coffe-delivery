import styled from "styled-components";

export const CardCoffeContainer = styled.div`
  background-color: ${props => props.theme["base-card"]};
  width: 256px;
  max-height: 310px;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.25rem;
  margin-bottom: 2rem;

    
  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
    margin-bottom: 0.75rem;
  }
  
  .tags{
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      gap: 4;
      margin-bottom: 1rem;
      li{
        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
        padding: 5px;
        border-radius: 20px;
        font-weight: 700;
        font-size: 0.625rem;
        text-transform: uppercase;
      }
    }
  }
  
  .title{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: 8px;
  }

  .description{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    padding: 0 8px;
    margin-bottom: 33px;
  }
  
  .buy{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0 20px;

    .value {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;

      &:before {
        content: 'R$ ';
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      color: ${props => props.theme.purple};
      height: 38px;

      .countdown{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 72px;
        background-color: ${props => props.theme["base-button"]};
        padding: 8px;
        border-radius: 6px;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 20.8px;

        .minus, .plus{
          cursor: pointer;
          width: 14px;
          text-align: center;
        }

        input[type=text]{
          border: 0;
          width: 20px;
          background-color: transparent;
          
          text-align: center;
          color: ${props => props.theme["base-title"]};
        }
      }

      button {
        width: 38px;
        height: 38px;
        background-color: ${props => props.theme["purple-dark"]};
        color: ${props => props.theme.white};
        padding: 8px;
        border-radius: 6px;
        border: 0;
        margin: 8px 0;
        cursor: pointer;
        
        &:hover{
          background-color: ${props => props.theme["purple"]};
        }
      }
    }
  }
`
