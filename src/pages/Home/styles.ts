import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  padding: 94px 0;
`

const COLORS_PROPS_LIST = {
  'yellow-dark': 'yellow-dark',
  'yellow': 'yellow',
  'base-text': 'base-text',
  'purple': 'purple',
} as const

interface ColorProps {
  colorProps: keyof typeof COLORS_PROPS_LIST
}

export const DescriptionContainer = styled.div`

  .titleAndSubtitle{
    margin-bottom: 4.125rem;;

    .title{
      color: ${props => props.theme["base-title"]};
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 3rem;
      line-height: 130%;
    }

    .subtitle {
      color: ${props => props.theme["base-subtitle"]};
      font-size: 1.35rem;
      line-height: 130%;
      font-stretch: 100;
    }
  }

  .features {
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }
`

export const Feature = styled.span<ColorProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 20px;
  .brand{
    width: 32px;
    height: 32px;
    background: ${(props) => props.theme[COLORS_PROPS_LIST[props.colorProps]]};
    color: ${props => props.theme.white};
    border-radius: 50%;
    padding: 0.5rem;
  }
`

export const ImgContainer = styled.div`
  img{
    width: 476px;
  }
`