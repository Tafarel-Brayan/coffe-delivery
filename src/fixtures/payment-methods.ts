import { Bank, CreditCard, Money } from "phosphor-react";

export const paymentMethod = [
  {
    id: 'creditCard',
    icon: CreditCard,
    text: 'Cartão de Crédito'
  },
  {
    id: 'debitCard',
    icon: Bank,
    text: 'Cartão de Débito'
  },
  {
    id: 'money',
    icon: Money,
    text: 'Dinheiro'
  }
]

