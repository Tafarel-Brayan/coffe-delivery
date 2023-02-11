import { MapPinLine } from "phosphor-react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Checkout/Button";
import { DescriptionBox } from "../../components/Checkout/DescriptionBox";
import { paymentMethod } from "../../fixtures/payment-methods";
import {
  CheckoutContainer,
  FormContainer,
  ItemsContainer,
  LeftDiv,
  PaymentContainer,
  RightDiv,
} from "./styles";

const renderButtonsPaymentMethod = () => {
  const payments = paymentMethod;

  return payments.map((payment) => (
    <Button key={payment.id} id={payment.id}>
      <span>{<payment.icon />}</span>
      <div>{payment.text}</div>
    </Button>
  ));
};

export const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <CheckoutContainer>
        <LeftDiv className="lefttDiv">
          <h3>Complete seu pedido</h3>
          <FormContainer>
            <DescriptionBox
              icon={<MapPinLine className="icon-map-line" />}
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
              colorIcon="yellow-dark"
            />

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="box1">
                <input type="text" placeholder="CEP" {...register("cep")} />
              </div>

              <div className="box2">
                <input
                  className="fullWidth"
                  type="text"
                  placeholder="Endereço"
                  {...register("logradouro")}
                />
              </div>

              <div className="box3">
                <input
                  type="text"
                  placeholder="Número"
                  {...register("numero")}
                />
                <input
                  className="fullWidth"
                  type="text"
                  placeholder="Complemento"
                  {...register("complemento")}
                />
              </div>

              <div className="box4">
                <input
                  type="text"
                  placeholder="Cidade"
                  {...register("cidade")}
                />
                <input
                  type="text"
                  className="fullWidth"
                  placeholder="Estado"
                  {...register("estado")}
                />
                <input
                  type="text"
                  style={{ width: "60px" }}
                  readOnly
                  placeholder="SG"
                  {...register("sigla")}
                />
              </div>
            </form>
          </FormContainer>

          <PaymentContainer>
            <DescriptionBox
              icon={<MapPinLine className="icon-map-line" />}
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              colorIcon="purple"
            />
            <div className="buttons">{renderButtonsPaymentMethod()}</div>
          </PaymentContainer>
        </LeftDiv>

        <RightDiv className="rightDiv">
          <h3>Café selecionados</h3>
          <ItemsContainer>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>

            <div className="totals">
              <div>
                <span>Total de itens</span>{" "}
                <span className="subTotal">R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span> <span className="subTotal">R$ 3,50</span>
              </div>
              <div>
                <span>Total</span> <span className="grandTotal">R$ 33,20</span>
              </div>
            </div>
          </ItemsContainer>
        </RightDiv>
      </CheckoutContainer>
    </>
  );
};
