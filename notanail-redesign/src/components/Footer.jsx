import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <FooterInfo>
            <img src="/logo.svg" alt="nöt a nail tokyo" />
            <h3>nöt a nail tokyo</h3>
            <p>〒101-0032 東京都千代田区岩本町2-1-8 SOUSIA神田ビル6H</p>
            <p>株式会社 一舟</p>
            <p>EMAIL: info@not-a-nail.com</p>
          </FooterInfo>
          <FooterNav>
            <Link to="/">ホーム</Link>
            <Link to="/about">私たちについて</Link>
            <a href="/#services">サービス</a>
            <a href="/#gallery">ギャラリー</a>
            <Link to="/access">アクセス</Link>
            <Link to="/contact">お問い合わせ</Link>
          </FooterNav>
        </FooterContent>
        <Copyright>
          <p>&copy; 2025 nöt a nail tokyo Co., Ltd. All rights reserved.</p>
        </Copyright>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: #E8F5F5;
  border-top: 3px solid #818181;
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterInfo = styled.div`
  img {
    height: 40px;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #818181;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.8;
    color: #818181;
    opacity: 0.8;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  a {
    font-weight: 600;
    color: #818181;
    transition: all 0.3s ease;
    width: fit-content;
    padding: 0.3rem 0;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #5AB9B5;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #5AB9B5;
      transform: translateX(5px);

      &::after {
        width: 100%;
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 2px solid #818181;

  p {
    font-size: 0.85rem;
    color: #818181;
    opacity: 0.7;
  }
`;

export default Footer;