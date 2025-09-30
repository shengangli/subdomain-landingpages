import React from 'react';
import styled from 'styled-components';

const Access = () => {
  return (
    <AccessPage>
      <Container>
        <PageHeader>
          <SectionLabel>LOCATION</SectionLabel>
          <PageTitle>アクセス</PageTitle>
        </PageHeader>

        <ContentWrapper>
          <MapContainer>
            <iframe
              src="https://google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3691273053196!2d139.7730697754462!3d35.69253302935358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188eabada13f4b%3A0xe38246644f03b5fc!2zU09VU0lB56We55Sw44OT44Or!5e0!3m2!1sen!2sus!4v1758108563094!5m2!1sen!2sus"
              height="400"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapContainer>

          <InfoContainer>
            <InfoBox>
              <ShopName>nöt a nail tokyo</ShopName>

              <InfoSection>
                <InfoTitle>所在地</InfoTitle>
                <InfoText>
                  〒101-0032<br />
                  東京都千代田区岩本町2-1-8<br />
                  SOUSIA神田ビル6H
                </InfoText>
              </InfoSection>

              <InfoSection>
                <InfoTitle>交通アクセス</InfoTitle>
                <AccessList>
                  <AccessItem>JR総武線「秋葉原駅」岩本町方面出口より徒歩5分</AccessItem>
                  <AccessItem>東京メトロ日比谷線「秋葉原駅」より徒歩6分</AccessItem>
                  <AccessItem>都営新宿線「岩本町駅」A4出口より徒歩3分</AccessItem>
                  <AccessItem>JR山手線・京浜東北線「神田駅」より徒歩8分</AccessItem>
                </AccessList>
              </InfoSection>
            </InfoBox>
          </InfoContainer>
        </ContentWrapper>
      </Container>
    </AccessPage>
  );
};

const AccessPage = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(180deg, #F0F8F8 0%, #E8F5F5 100%);
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

const ContentWrapper = styled.div`
  display: grid;
  gap: 3rem;
`;

const MapContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  border: 3px solid #818181;
  box-shadow: 5px 5px 0px 0px #83CCC9;
  height: 400px;

  iframe {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const InfoContainer = styled.div``;

const InfoBox = styled.div`
  background: #E8F5F5;
  padding: 3rem;
  border-radius: 20px;
  border: 3px solid #818181;
  box-shadow: 5px 5px 0px 0px #83CCC9;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ShopName = styled.h3`
  font-size: 2rem;
  font-weight: 900;
  color: #818181;
  margin-bottom: 2.5rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const InfoSection = styled.div`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 800;
  color: #5AB9B5;
  margin-bottom: 1rem;
  font-family: 'Noto Sans JP', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #818181;
  padding: 1.5rem;
  background: #FFF;
  border-radius: 10px;
  border: 2px solid #818181;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const AccessList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const AccessItem = styled.li`
  padding: 1.2rem;
  background: #FFF;
  border-radius: 10px;
  border: 2px solid #818181;
  color: #818181;
  font-size: 1rem;
  line-height: 1.6;
  position: relative;
  padding-left: 2.5rem;
  transition: all 0.3s ease;

  &::before {
    content: '→';
    position: absolute;
    left: 1rem;
    color: #5AB9B5;
    font-weight: 800;
    font-size: 1.2rem;
  }

  &:hover {
    transform: translateX(5px);
    box-shadow: 3px 3px 0px 0px #83CCC9;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 1rem 1rem 1rem 2rem;

    &::before {
      left: 0.7rem;
    }
  }
`;

export default Access;