// src/components/TrophyCard.tsx
import React from "react";
import styled from "styled-components";

type TrophyCardProps = {
  number: number;
  title: string;
  description: string;
};
// background: #000066; /* Dark blue background */

const CardContainer = styled.div`
  background: linear-gradient(180deg, #8a34cc 0%, #6a34cc 50%, #345dcc 100%);
  color: white;
  padding: 20px;
  margin-right: 10px; // Only add margin to the right for spacing between cards
  border-radius: 8px;
  width: 250px; // Adjust width so four cards fit within most views
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 360px;
`;

const TrophyImage = styled.img`
  width: 100%;
  height: 90px;
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
    <CardContainer className="z-10" data-aos-duration={(number * 300) / 2} data-aos="fade-right">
      <TrophyImage src={`/images/statics/award.png`} alt={`Trophy ${number}`} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default TrophyCard;
