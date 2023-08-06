import {Container} from 'react-bootstrap';

function Header() {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>LoLype</h1>
    </Container>
  );
}

export default Header;
