import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutPage>
      <Container>
        <PageHeader>
          <SectionLabel>ABOUT US</SectionLabel>
          <PageTitle>私たちについて</PageTitle>
        </PageHeader>

        <ConceptSection>
          <ConceptQuote>
            <QuoteMark>"</QuoteMark>
            <QuoteText>日常に輝きを与えるネイルチップをお届けします。</QuoteText>
            <QuoteMark closing>"</QuoteMark>
          </ConceptQuote>
          <ConceptIntro>簡単に着脱でき、毎日に彩りを与えるネイルチップを提供いたします。</ConceptIntro>
          <ConceptImage>
            <img src="/asset/nail-design-elegant-pink.png" alt="サロン内観" />
          </ConceptImage>
        </ConceptSection>

        <MessageSection>
          <MessageTitle>代表者の挨拶</MessageTitle>
          <MessageContent>
            <MessageText>
              私たちは、手作業の品質を活かしながら効率的な量産体制を構築し、デザイナーが生み出す優れた作品を広くご紹介することを使命としております。
            </MessageText>
            <MessageText>
              海外における高度に整備されたサプライチェーンを活用し、独創的なアイデアを確かな品質で具現化いたします。効率性とスケールを両立させながら、高い完成度を実現することが可能です。
            </MessageText>
            <MessageText>
              デザイナーの皆さまには創作活動に専念していただき、そのほかの生産・販売に関わるプロセスはすべて弊社が担います。企画から収益化に至るまでトータルにサポートすることで、安心してものづくりに取り組んでいただける環境を提供いたします。
            </MessageText>
            <Signature>
              <SignatureName>代表取締役　鄭 秋華</SignatureName>
            </Signature>
          </MessageContent>
        </MessageSection>

        <CompanyInfoSection>
          <CompanyTitle>会社概要</CompanyTitle>
          <InfoGrid>
            <InfoItem>
              <Label>会社名</Label>
              <Value>株式会社 一舟</Value>
            </InfoItem>
            <InfoItem>
              <Label>店舗名</Label>
              <Value>nöt a nail tokyo</Value>
            </InfoItem>
            <InfoItem>
              <Label>代表者</Label>
              <Value>鄭 秋華 (ZHENG QIUHUA)</Value>
            </InfoItem>
            <InfoItem>
              <Label>所在地</Label>
              <Value>〒101-0032 東京都千代田区岩本町2-1-8 SOUSIA神田ビル6H</Value>
            </InfoItem>
            <InfoItem>
              <Label>資本金</Label>
              <Value>500万円</Value>
            </InfoItem>
            <InfoItem>
              <Label>設立</Label>
              <Value>2025年5月27日</Value>
            </InfoItem>
            <InfoItem>
              <Label>事業内容</Label>
              <Value>ネイルチップ関連商品の販売及び開発</Value>
            </InfoItem>
            <InfoItem>
              <Label>連絡先</Label>
              <Value>info@not-a-nail.com</Value>
            </InfoItem>
          </InfoGrid>
        </CompanyInfoSection>
      </Container>
    </AboutPage>
  );
};

const AboutPage = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(180deg, #F0F8F8 0%, #FFF 50%, #E8F5F5 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SectionLabel = styled.span`
  display: block;
  font-size: 0.9rem;
  font-weight: 800;
  color: #83CCC9;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #818181;
  font-family: 'Noto Sans JP', sans-serif;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ConceptSection = styled.div`
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const ConceptQuote = styled.div`
  background: #E8F5F5;
  padding: 3rem;
  border-radius: 20px;
  border: 3px solid #818181;
  box-shadow: 5px 5px 0px 0px #83CCC9;
  margin-bottom: 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const QuoteMark = styled.div`
  font-size: 4rem;
  font-weight: 900;
  color: #5AB9B5;
  opacity: 0.5;
  line-height: 0.5;
  font-family: 'Georgia', serif;

  ${props => props.closing && `
    text-align: right;
  `}
`;

const QuoteText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #818181;
  text-align: center;
  margin: 1.5rem 0;
  line-height: 1.8;
  font-family: 'Noto Sans JP', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ConceptIntro = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #818181;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ConceptImage = styled.div`
  max-width: 500px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  border: 3px solid #818181;
  box-shadow: 5px 5px 0px 0px #83CCC9;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const MessageSection = styled.div`
  background: #FFF;
  padding: 3rem;
  border-radius: 20px;
  border: 3px solid #818181;
  box-shadow: 5px 5px 0px 0px #83CCC9;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    padding: 2rem;
    margin-bottom: 4rem;
  }
`;

const MessageTitle = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: #818181;
  margin-bottom: 2rem;
  font-family: 'Noto Sans JP', sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const MessageContent = styled.div``;

const MessageText = styled.p`
  font-size: 1rem;
  line-height: 2;
  color: #818181;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Signature = styled.div`
  text-align: right;
  margin-top: 3rem;
`;

const SignatureName = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #818181;
  font-family: 'Noto Sans JP', sans-serif;
`;

const CompanyInfoSection = styled.div`
  background: #E8F5F5;
  padding: 3rem;
  border-radius: 20px;
  border: 3px solid #818181;
  box-shadow: 5px 5px 0px 0px #83CCC9;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CompanyTitle = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: #818181;
  margin-bottom: 2rem;
  font-family: 'Noto Sans JP', sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1rem;
  padding: 1.5rem;
  background: #FFF;
  border-radius: 10px;
  border: 2px solid #818181;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 3px 3px 0px 0px #83CCC9;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1rem;
  }
`;

const Label = styled.span`
  font-weight: 700;
  color: #818181;
  font-family: 'Noto Sans JP', sans-serif;
`;

const Value = styled.span`
  color: #818181;
  line-height: 1.6;
`;

export default About;