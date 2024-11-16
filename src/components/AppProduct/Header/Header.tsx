import { Container, Navbar} from "react-bootstrap"

export const Header = () => {
  return (
    <>
        <Navbar className="bg-body-tertiary" style={{margin:"2px"}}>
            <Container style={{justifyContent:"center"}}>
              <Navbar.Brand href="#home">Carga de productos</Navbar.Brand>
            </Container>
        </Navbar>
    </>
  )
}
