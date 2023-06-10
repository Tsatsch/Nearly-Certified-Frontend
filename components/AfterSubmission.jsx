const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center;
  height: 80vh;
  background-color: #1c1f2a;
`;

const Heading = styled.h3`
  text-align: center;
  color: #8f73ff;
  margin-top: -300px;
`;

const SubHeading = styled.h4`
  color: #e3e6ec;
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
`;

const FinishedIcon = styled.svg`
  width: 80px;
  height: 80px;
  fill: #8f73ff;
  margin-bottom: 100px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #e3e6ec;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #e3e6ec;
`;

return (
  <Container>
    <FinishedIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" fill="#8f73ff" />
      <path
        fill="#FFF"
        d="M9.292 16.708l-4.2-4.2a.999.999 0 1 1 1.414-1.414L9 13.586l7.293-7.292a.999.999 0 1 1 1.414 1.414l-8 8a.999.999 0 0 1-1.414 0z"
      />
    </FinishedIcon>
    <Heading>Thank you for submitting the application!</Heading>
    <SubHeading>Your application is pending review.</SubHeading>
    <Footer>
      <HorizontalLine />
      <FooterText>With Love from TBC &#x2665;</FooterText>
    </Footer>
  </Container>
);
