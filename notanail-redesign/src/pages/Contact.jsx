import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactPage>
      <Container>
        <PageHeader>
          <SectionLabel>RESERVATION</SectionLabel>
          <PageTitle>ご予約・お問い合わせ</PageTitle>
          <PageIntro>
            完全予約制となっております。お電話またはメールフォームよりご予約ください。<br />
            施術中はお電話に出られない場合がございます。予めご了承ください。
          </PageIntro>
        </PageHeader>

        <FormContainer>
          <FormTitle>メールフォーム</FormTitle>
          <Form action="https://formspree.io/f/xldwywae" method="POST">
            <FormGroup>
              <Label htmlFor="name">お名前 *</Label>
              <Input type="text" id="name" name="name" required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">メールアドレス *</Label>
              <Input type="email" id="email" name="email" required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">お電話番号</Label>
              <Input type="tel" id="phone" name="phone" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="service">ご希望のサービス</Label>
              <Select id="service" name="service">
                <option value="">選択してください</option>
                <option value="premium">購入</option>
                <option value="care">ビジネス関係</option>
                <option value="other">その他</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">メッセージ *</Label>
              <Textarea
                id="message"
                name="message"
                rows="6"
                required
                placeholder="ご質問やご要望がございましたらお聞かせください"
              />
            </FormGroup>

            <input type="hidden" name="_subject" value="nöt a nail tokyo - お問い合わせ" />
            <input type="hidden" name="_next" value="/thank-you" />
            <input type="hidden" name="_language" value="ja" />

            <SubmitButton type="submit">送信する</SubmitButton>
          </Form>
        </FormContainer>
      </Container>
    </ContactPage>
  );
};

const ContactPage = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(180deg, #F0F8F8 0%, #E8F5F5 100%);
`;

const Container = styled.div`
  max-width: 800px;
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
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const PageIntro = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #818181;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const FormContainer = styled.div`
  background: #E8F5F5;
  padding: 3rem;
  border-radius: 20px;
  border: 3px solid #818181;
  box-shadow: 5px 5px 0px 0px #83CCC9;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 900;
  color: #818181;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Noto Sans JP', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #818181;
  font-size: 1rem;
  font-family: 'Noto Sans JP', sans-serif;
`;

const Input = styled.input`
  padding: 12px 15px;
  font-size: 1rem;
  border: 2px solid #818181;
  border-radius: 8px;
  background: #FFF;
  color: #818181;
  font-family: inherit;
  box-shadow: 3px 3px 0px 0px #83CCC9;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    transform: translateY(2px);
    box-shadow: 1px 1px 0px 0px #83CCC9;
  }

  &::placeholder {
    color: #818181;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 0.95rem;
  }
`;

const Select = styled.select`
  padding: 12px 15px;
  font-size: 1rem;
  border: 2px solid #818181;
  border-radius: 8px;
  background: #FFF;
  color: #818181;
  font-family: inherit;
  box-shadow: 3px 3px 0px 0px #83CCC9;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    transform: translateY(2px);
    box-shadow: 1px 1px 0px 0px #83CCC9;
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 0.95rem;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 15px;
  font-size: 1rem;
  border: 2px solid #818181;
  border-radius: 8px;
  background: #FFF;
  color: #818181;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  box-shadow: 3px 3px 0px 0px #83CCC9;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    transform: translateY(2px);
    box-shadow: 1px 1px 0px 0px #83CCC9;
  }

  &::placeholder {
    color: #818181;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 0.95rem;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 800;
  background: #5AB9B5;
  color: #FFF;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 4px 0px 0px #83CCC9;
  transition: all 0.3s ease;
  margin-top: 1rem;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 6px 6px 0px 0px #83CCC9;
    opacity: 0.9;
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

export default Contact;