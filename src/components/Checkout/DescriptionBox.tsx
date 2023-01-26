import { DescriptionBoxContainer } from "../../pages/Checkout/styles";

interface DescriptionBoxProps {
  icon: any;
  title: string;
  subtitle: string;
  colorIcon: "yellow-dark" | "purple";
}

export const DescriptionBox = ({
  icon,
  title,
  subtitle,
  colorIcon,
}: DescriptionBoxProps) => {
  return (
    <DescriptionBoxContainer colorProps={colorIcon}>
      <div>{icon}</div>
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </DescriptionBoxContainer>
  );
};
