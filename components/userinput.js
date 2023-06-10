const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
  background-color: #1c1f2a;
`;

const Heading = styled.h1`
  margin-top: 30px;
  margin-bottom: 60px;
  text-align: center;
  color: #8f73ff;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  max-width: 600px; 
  margin: 0 auto; 
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  color: #e3e6ec;
  margin-bottom: 0.5rem;
  font-weight: bold;
  min-width: 100px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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

State.init({
  fullname,
  matriculationnumber,
  email,
});

return (
  <Container>
    <FormContainer>
      <Heading>Hey, let's make you officially certified!</Heading>
      <FormGroup>
        <Label htmlFor="fullname">Name</Label>
        <Input
          type="text"
          id="fullname"
          value={formData.fullname}
          onChange={(fullname) => State.update({ fullname })}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="matriculationnumber">Matriculation Number</Label>
        <Input
          type="text"
          id="matriculationnumber"
          value={formData.matriculationnumber}
          onChange={(matriculationnumber) =>
            State.update({ matriculationnumber })
          }
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          value={formData.email}
          onChange={(email) => State.update({ email })}
          required
        />
      </FormGroup>
      <br></br>
      <CommitButton
        data={{
          fullname: state.fullname,
          matriculationnumber: state.matriculationnumber,
          email: state.email,
        }}
      >
        Submit
      </CommitButton>
    </FormContainer>
    <Footer>
      <HorizontalLine />
      <FooterText>With Love from TBC &#x2665;</FooterText>
    </Footer>
  </Container>
);
