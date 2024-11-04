// SummitTitle.tsx
import React from 'react';
import styled from 'styled-components';

// Styled component for the background
const TitleBackground = styled.div`
  background: linear-gradient(to right, #000428, #004e92);  // Define your gradient
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;  // Ensures all text is uppercase
`;

// Styled component for "THE" which is smaller
const TheText = styled.span`
  font-family: 'Segoe UI', sans-serif;  // Suggested font, adjust as needed
  font-size: 24px;  // Smaller font size for "THE"
  font-weight: bold;
  color: white;
  margin-right: 10px;  // Adds some space between "THE" and the rest
`;

// Styled component for the main title text
const MainTitleText = styled.span`
  font-family: 'Segoe UI', sans-serif;  // Ensure consistent font usage
  font-size: 36px;  // Larger font size for main text
  font-weight: bold;
  color: white;
`;

// React component for the Summit Title
const SummitTitle: React.FC = () => {
  return (
    <TitleBackground>
      <TheText>THE</TheText>
      <MainTitleText>INTELLIGENT DATA, AI & AUTOMATION SUMMIT</MainTitleText>
    </TitleBackground>
  );
};

export default SummitTitle;
