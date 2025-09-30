import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledHeader className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Logo>
          <Link to="/">
            <img src="/logo.svg" alt="nöt a nail tokyo" />
          </Link>
        </Logo>

        <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>

        <Nav className={menuOpen ? 'open' : ''}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>ホーム</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>私たちについて</NavLink>
          <NavLink
            to="/#services"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }
              setMenuOpen(false);
            }}
          >
            サービス
          </NavLink>
          <NavLink
            to="/#gallery"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }
              setMenuOpen(false);
            }}
          >
            ギャラリー
          </NavLink>
          <NavLink to="/access" onClick={() => setMenuOpen(false)}>アクセス</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>お問い合わせ</NavLink>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #E8F5F5;
  border-bottom: 3px solid #818181;
  box-shadow: 0 4px 0 0 #83CCC9;
  transition: all 0.3s ease;

  &.scrolled {
    box-shadow: 0 6px 0 0 #83CCC9;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  img {
    height: 50px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    img {
      height: 40px;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  padding: 5px;

  span {
    width: 25px;
    height: 3px;
    background: #818181;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: #E8F5F5;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
    border-bottom: 3px solid #818181;
    box-shadow: 0 4px 0 0 #83CCC9;
    transform: translateX(-100%);
    transition: transform 0.3s ease;

    &.open {
      transform: translateX(0);
    }
  }
`;

const NavLink = styled(Link)`
  font-weight: 600;
  font-size: 0.95rem;
  color: #818181;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: #5AB9B5;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: #5AB9B5;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.8rem 0;
  }
`;

export default Header;