import { ComponentPropsWithoutRef } from "react";

const Button = ({
  text,
  ...rest
}: {
  text: string;
} & ComponentPropsWithoutRef<"button">) => {
  return (
    <button className="custom-button" {...rest}>
      {text}
    </button>
  );
};

export default Button;
