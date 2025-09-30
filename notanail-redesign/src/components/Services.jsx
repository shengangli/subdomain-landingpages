import React from 'react';
import styled from 'styled-components';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'NAIL CHIPS',
      japanese: 'ネイルチップ',
      description: '季節感や流行に合った高品質なネイルチップの販売行っています。定番デザインからお客様のニーズに合わせたオリジナルデザインまで幅広く取り揃え、サロン様向けの卸売りも承っております。',
      tags: ['オリジナルデザイン', 'サロン向け卸売り', '高品質素材']
    },
    {
      number: '02',
      title: 'CUSTOM DESIGN',
      japanese: 'カスタムデザイン',
      description: 'お客様のご要望に応じたオリジナルネイルチップの企画・開発。トレンドを取り入れたデザインから、ブランド様向けのコラボレーション商品まで、幅広いニーズにお応えします。小ロットから大量生産まで対応可能です。',
      tags: ['企画開発', 'ブランドコラボ', '小ロット対応']
    },
    {
      number: '03',
      title: 'WHOLESALE',
      japanese: '卸売・販売',
      description: 'ネイルサロン様、小売店様向けの卸売事業を展開。高品質なネイルチップをバリュー価格でご提供いたします。常に最新のトレンドをお届けできる様、新商品の開発に力を入れて取り組んでおります。',
      tags: ['サロン向け', '小売店向け', '新商品開発']
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <SectionLabel>OUR SERVICES</SectionLabel>
        <SectionTitle>サービス内容</SectionTitle>
        <ServiceCards>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceNumber>{service.number}</ServiceNumber>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceJapanese>{service.japanese}</ServiceJapanese>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceTags>
                {service.tags.map((tag, idx) => (
                  <Tag key={idx}>{tag}</Tag>
                ))}
              </ServiceTags>
            </ServiceCard>
          ))}
        </ServiceCards>
      </Container>
    </ServicesSection>
  );
};

const ServicesSection = styled.section`
  padding: 6rem 0;
  background: #FFF;

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
  margin-bottom: 4rem;
  font-family: 'Noto Sans JP', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const ServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ServiceCard = styled.div`
  background: #E8F5F5;
  padding: 2.5rem;
  border-radius: 20px;
  border: 3px solid #818181;
  box-shadow: 5px 5px 0px 0px #83CCC9;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 7px 7px 0px 0px #83CCC9;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ServiceNumber = styled.span`
  font-size: 4rem;
  font-weight: 900;
  color: #83CCC9;
  opacity: 0.3;
  position: absolute;
  top: -10px;
  right: 20px;
  font-family: 'Montserrat', sans-serif;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 800;
  color: #818181;
  margin-bottom: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ServiceJapanese = styled.span`
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  color: #5AB9B5;
  margin-bottom: 1.5rem;
  font-family: 'Noto Sans JP', sans-serif;
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.8;
  color: #818181;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ServiceTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  padding: 0.4rem 1rem;
  background: #FFF;
  border: 2px solid #818181;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #818181;
  transition: all 0.3s ease;

  &:hover {
    background: #5AB9B5;
    color: #FFF;
    transform: translateY(-2px);
  }
`;

export default Services;