import React from "react";
import { Title } from "../HighlightCard/styles";
import { Amount, Container } from "./styles";

interface Props {
  title: string;
  amount: string;
  color: string;
}

export function HistoryCard({ title, amount, color }: Props) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}
