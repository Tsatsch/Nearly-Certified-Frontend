const Heading = styled.h1`
  margin-top: 30px;
  text-align: center;
  color: #8f73ff;
`
const SubHeading = styled.h2`
  color: #e3e6ec;
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
`
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
  background-color: #1c1f2a;
`

const ButtonContainer = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #e3e6ec;
  border-radius: 10px;
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #e3e6ec;
  margin-bottom: 10px;
`

const FooterText = styled.p`
  font-size: 14px;
  color: #e3e6ec;
`

State.init({
  currentAccountId: '',
})

const getEVMAccountId = () => {
  if (ethers !== undefined) {
    return Ethers.send('eth_requestAccounts', [])[0] ?? ''
  }
  return ''
}

const fetchCred = () => {
  return asyncFetch(
    'https://9fe7-2a00-20-d049-b8aa-bdb9-9afa-8dfa-fa90.eu.ngrok.io/api/issue',
    {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'no-cors',
    },
  )
}

// Update on Action from AdminPage
const updatePendingApplications = (action, application) => {
  const pendingApplications = Storage.privateGet('pendingApplications')
  const updatedApplications = pendingApplications.filter(
    (item) => item.address !== application.address,
  )
  Storage.privateSet('pendingApplications', updatedApplications)
  if (action === 'accept') {
    const updatedAccepted = Storage.privateGet('acceptedApplications') || []
    updatedAccepted.push(application)
    Storage.privateSet('acceptedApplications', updatedAccepted)
    fetchCred().then((res) => {
      console.log('Resulting Credential: ', res)
      Storage.privateSet(application.address, res)
    })
  } else if (action === 'reject') {
    const updatedRejected = Storage.privateGet('rejectedApplications') || []
    updatedRejected.push(application)
    Storage.privateSet('rejectedApplications', updatedRejected)
    Storage.privateSet(application.address, 'rejected')
  }
  console.log('updatedApplications: ', updatedApplications)
}

// Add a new pending application
const addPendingApplication = (application) => {
  const pendingApplications = Storage.privateGet('pendingApplications') || []
  pendingApplications.push(application)
  Storage.privateSet('pendingApplications', pendingApplications)
  Storage.privateSet(application.address, 'pending')
}

console.log('storage: ', Storage.privateGet('pendingApplication'))

if (state.currentAccountId.length === 0)
  state.currentAccountId = getEVMAccountId()

let userComponentToRender = null
if (state.currentAccountId.length > 0) {
  const status = Storage.privateGet(state.currentAccountId)
  userComponentToRender =
    status === 'pending' || 'rejected' ? (
      <Widget src="sipars.near/widget/AfterSubmission" props={{ status }} />
    ) : status ? (
      <div>Cred is approved</div>
    ) : (
      <Widget src="sipars.near/widget/InputForm" props={{ state }} />
    )
}
const isAdmin = true

return (
  <>
    {state.currentAccountId.length > 0 ? (
      isAdmin ? (
        <Widget
          src="sipars.near/widget/SimpleTable"
          props={{
            pendingApplications: Storage.privateGet('pendingApplications'),
            updatePendingApplications,
          }}
        />
      ) : (
        userComponentToRender
      )
    ) : (
      <LoginContainer>
        <Heading>Welcome to the Login Page</Heading>
        <SubHeading>Please login with your fancy wallet</SubHeading>
        <ButtonContainer>
          <Web3Connect
            className="swap-button-enabled swap-button-text p-2"
            connectLabel="Connect with wallet"
          />
        </ButtonContainer>
        <Footer>
          <HorizontalLine />
          <FooterText>With Love from TBC &#x2665;</FooterText>
        </Footer>
      </LoginContainer>
    )}
  </>
)
