// src/components/TrophyCard.tsx
import React from "react";
import styled from "styled-components";

type TrophyCardProps = {
  number: number;
  title: string;
  description: string;
};

const CardContainer = styled.div`
  background: #000066; /* Dark blue background */
  color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 370px;
`;

const TrophyImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: contain;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin-top: 10px;
`;

const CardDescription = styled.p`
  font-size: 12px;
  line-height: 1.5;
  margin-top: 10px;
`;

const TrophyCard: React.FC<TrophyCardProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <CardContainer data-aos-duration={number * 300} data-aos="fade-right">
      <TrophyImage src={`/images/statics/award.png`} alt={`Trophy ${number}`} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default TrophyCard;
