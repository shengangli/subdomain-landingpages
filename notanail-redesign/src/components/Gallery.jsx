import React from 'react';
import styled from 'styled-components';

const Gallery = () => {
  const galleryItems = [
    { image: '/asset/nail-design-elegant-pink.png', title: 'エレガントピンク' },
    { image: '/asset/nail-design-french-classic.png', title: 'フレンチクラシック' },
    { image: '/asset/nail-design-rose-gold.png', title: 'ローズゴールド' },
    { image: '/asset/nail-design-minimalist.png', title: 'ミニマリスト' },
    { image: '/asset/nail-design-floral-art.png', title: 'フローラルアート' },
    { image: '/asset/nail-design-glitter-accent.png', title: 'グリッターアクセント' },
    { image: '/asset/nail-design-pastel-ombre.png', title: 'パステルオンブル' },
    { image: '/asset/nail-design-geometric.png', title: 'ジオメトリック' },
    { image: '/asset/nail-design-seasonal.png', title: 'シーズナル' }
  ];

  return (
    <GallerySection id="gallery">
      <Container>
        <SectionLabel>PORTFOLIO</SectionLabel>
        <SectionTitle>作品ギャラリー</SectionTitle>
        <Divider>
          <DividerLine />
          <DividerOrnament>♡</DividerOrnament>
          <DividerLine />
        </Divider>
        <GalleryGrid>
          {galleryItems.map((item, index) => (
            <GalleryItem key={index}>
              <GalleryImage src={item.image} alt={item.title} />
              <GalleryOverlay>
                <GalleryTitle>{item.title}</GalleryTitle>
              </GalleryOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </Container>
    </GallerySection>
  );
};

const GallerySection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, #FFF 0%, #F0F8F8 100%);

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionLabel = styled.span`
  display: block;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 800;
  color: #83CCC9;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 900;
  color: #818181;
  margin-bottom: 3rem;
  font-family: 'Noto Sans JP', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 3rem 0;
`;

const DividerLine = styled.div`
  flex: 1;
  height: 3px;
  background: #83CCC9;
  max-width: 150px;
`;

const DividerOrnament = styled.div`
  font-size: 1.5rem;
  color: #5AB9B5;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  border: 3px solid #818181;
  box-shadow: 4px 4px 0px 0px #83CCC9;
  transition: all 0.3s ease;
  aspect-ratio: 1;

  &:hover {
    transform: translateY(-8px) rotate(1deg);
    box-shadow: 6px 6px 0px 0px #83CCC9;
  }

  &:hover div {
    opacity: 1;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`;

const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(222, 84, 153, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const GalleryTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 800;
  color: #FFF;
  font-family: 'Noto Sans JP', sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export default Gallery;