import styled from "styled-components";

const CardCommonsProps = styled.div`
  background-color: ${props => props.theme["base-card"]};
  padding: 40px;
  margin-top: 2rem;
`

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 0px;

  h3{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${props => props.theme["base-subtitle"]};
  }
`

export const LeftDiv = styled.div`
  grid-area: 1 / 1 / 2 / 2;

`
export const RightDiv = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`

export const FormContainer = styled(CardCommonsProps)`
  border-radius: 6px;

  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;

    .fullWidth{
      width: 100%;
    }

    .box3, .box4{
      display: flex;
      flex-direction: row;
      gap: 12px;
    }

    input[type=text]{
      box-sizing: border-box;
      background-color: ${props => props.theme["base-input"]};
      border: 1px solid #E6E5E5;
      border-radius: 4px;
      height: 42px;
      padding: 12px;

      color: ${props => props.theme["base-text"]};
      font-size: 14px;
      font-weight: 400;
      line-height: 130%;
      
      ::placeholder{
        color: ${props => props.theme["base-label"]};
      }
    }
  }
`
export const PaymentContainer = styled(CardCommonsProps)`
  border-radius: 6px;

  .buttons{
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }
`

export const ItemsContainer = styled(CardCommonsProps)`
  border-radius: 6px 44px;

  .totals{
    display: block;
    margin-top: 12px;
    
    color: ${props => props.theme["base-text"]};
    font-size: 0.875rem;
    
    div{
      display: flex;
      justify-content: space-between;
      padding-top: 12px;

      .subTotal{
        font-size: 1rem;
        font-weight: 700;
      }
    }
   
  }
`

const COLORS_PROPS_LIST = {
  'yellow-dark': 'yellow-dark',
  'purple': 'purple',
} as const

interface ColorProps {
  colorProps: keyof typeof COLORS_PROPS_LIST
}

export const DescriptionBoxContainer = styled.div<ColorProps>`

  display: flex;
  margin-bottom: 32px;

  .icon-map-line{
    font-size: 22px;
    color: ${props => props.theme[COLORS_PROPS_LIST[props.colorProps]]};
    margin-right: 8px;
  }

  p:first-child{
    font-size: 1rem;
    line-height: 130%;
    color: ${props => props.theme["base-subtitle"]};
  }

  p:last-child{
    font-size: 0.875rem;
    line-height: 130%;
    color: ${props => props.theme["base-text"]};
  }
`

const BUTTON_PROPS_LIST = {
  'isSelected': 'purple-light',
  'notSelected': 'base-button',
} as const

interface ButtonProps {
  colorProps: keyof typeof BUTTON_PROPS_LIST
}

export const ButtonCheckout = styled.button<ButtonProps>`
  width: 100%;
  height: 51px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  
  padding: 16px;
  border-radius: 6px;
  background-color: ${props => props.theme[BUTTON_PROPS_LIST[props.colorProps]]};
  border: ${props =>
    props.colorProps === 'isSelected'
      ? `1px solid ${props.theme["purple"]}`
      : 0
  } ;

  font-size: 0.75rem;
  color: ${props => props.theme["base-text"]};

  cursor: pointer;

  span{
    color: ${props => props.theme.purple};
    font-size: 1rem;
  }

  &:hover{
    background-color: ${props => props.theme["base-hover"]};
  }

`