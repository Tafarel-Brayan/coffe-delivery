type TagsType = 'Tradicional' | 'Gelado' | 'Com Leite' | 'Especial' | 'Alcoólico'

export type CoffeListType = {
  title: string
  description: string
  value: number
  img: string
  tags?: TagsType[]
}

export const coffeList: CoffeListType[] = [
  {
    title: 'Expresso Tradicional',
    description: 'O Tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    img: '1.svg',
    tags: ['Tradicional']
  },
  {
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
    img: '2.svg',
    tags: ['Tradicional']
  },
  {
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
    img: '3.svg',
    tags: ['Tradicional']
  },
  {
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
    img: '4.svg',
    tags: ['Tradicional']
  },
  {
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
    img: '5.svg',
    tags: ['Tradicional']
  },
  {
    title: 'Late',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
    img: '6.svg',
    tags: ['Tradicional']
  },
  {
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
    img: '7.svg',
    tags: ['Tradicional']
  },
  {
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
    img: '8.svg',
    tags: ['Tradicional']
  },
  {
    title: 'Chocolate Macch',
    description: 'O Tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    img: '9.svg',
    tags: ['Tradicional']
  },
  {
    title: 'Choco Quente',
    description: 'O Tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    img: '10.svg',
    tags: ['Tradicional']
  },

]