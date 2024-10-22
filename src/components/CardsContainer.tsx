import { ReactNode } from "react";

const CardsContainer = ({ children }: { children: ReactNode }) => {
  return <div className="cards-container">{children}</div>;
};

export default CardsContainer;
