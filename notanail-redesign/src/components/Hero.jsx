import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        <HeroLeft>
          <Title>
            華やかなネイルで
            <Accent>特別な1日を</Accent>
          </Title>
          <Subtitle>日常に輝きを与えるネイルチップをお届けします。</Subtitle>
          <HeroButton href="#gallery">作品を見る</HeroButton>
        </HeroLeft>
        <HeroRight>
          <ImageContainer>
            <NailImage src="/asset/nail-design-french-classic.png" alt="Premium Nail Art" className="img1" />
            <NailImage src="/asset/nail-design-elegant-pink.png" alt="Elegant Nail Art" className="img2" />
            <NailImage src="/asset/nail-design-rose-gold.png" alt="Luxury Nail Design" className="img3" />
          </ImageContainer>
          <DecorCircle />
        </HeroRight>
      </HeroWrapper>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  background: linear-gradient(135deg, #F0F8F8 0%, #E8F5F5 100%);
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HeroLeft = styled.div`
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const JapaneseText = styled.div`
  font-size: 8rem;
  font-weight: 900;
  color: #83CCC9;
  opacity: 0.15;
  position: absolute;
  top: -80px;
  left: -20px;
  z-index: -1;
  font-family: 'Noto Sans JP', sans-serif;

  @media (max-width: 968px) {
    font-size: 6rem;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    font-size: 4rem;
    top: -40px;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  color: #818181;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-family: 'Noto Sans JP', sans-serif;

  @media (max-width: 968px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Accent = styled.span`
  display: block;
  color: #5AB9B5;
  font-size: 4rem;
  margin-top: 0.5rem;

  @media (max-width: 968px) {
    font-size: 3.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #818181;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 15px 40px;
  background: #5AB9B5;
  color: #FFF;
  font-weight: 800;
  font-size: 1.1rem;
  border-radius: 10px;
  border: 3px solid #818181;
  box-shadow: 4px 4px 0px 0px #83CCC9;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 6px 6px 0px 0px #83CCC9;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 2px 2px 0px 0px #83CCC9;
  }

  @media (max-width: 768px) {
    padding: 12px 30px;
    font-size: 1rem;
  }
`;

const HeroRight = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 968px) {
    order: -1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 500px;

  @media (max-width: 768px) {
    height: 400px;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
    max-width: 300px;
  }
`;

const NailImage = styled.img`
  position: absolute;
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 20px;
  border: 3px solid #818181;
  box-shadow: 4px 4px 0px 1px #83CCC9;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px) rotate(2deg);
    box-shadow: 6px 6px 0px 1px #83CCC9;
  }

  &.img1 {
    top: 20px;
    left: 20px;
    z-index: 3;
    animation: float1 3s ease-in-out infinite;
  }

  &.img2 {
    top: 40%;
    right: 20px;
    transform: translateY(-50%);
    z-index: 2;
    animation: float2 3s ease-in-out 0.5s infinite;
  }

  &.img3 {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    animation: float3 3s ease-in-out 1s infinite;
  }

  @keyframes float1 {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-15px) rotate(2deg);
    }
  }

  @keyframes float2 {
    0%, 100% {
      transform: translateY(-50%) rotate(0deg);
    }
    50% {
      transform: translateY(calc(-50% - 15px)) rotate(-2deg);
    }
  }

  @keyframes float3 {
    0%, 100% {
      transform: translateX(-50%) rotate(0deg);
    }
    50% {
      transform: translateX(-50%) translateY(-15px) rotate(2deg);
    }
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const DecorCircle = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: #83CCC9;
  opacity: 0.1;
  z-index: -1;
  animation: pulse 4s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export default Hero;