import styled from 'styled-components';
import Burger from './Burger';

const Navbar = () => {
  return (
    <Nav>
      <div className="nav-title">
        <h2>Übersicht</h2>
      </div>
      <Burger />
    </Nav>
  );
};

const Nav = styled.nav`
  background: red;
  min-height: 15vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0% 5%;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    background: #00f7ff;
    min-height: 5rem;
    width: 100%;
    padding: 0 5%;
    z-index: 444;
    .nav-title {
      padding-left: 25px;
      h2 {
        font-size: 1.6rem;
        background: #ff7300;
      }
    }
  }
`;
export default Navbar;
