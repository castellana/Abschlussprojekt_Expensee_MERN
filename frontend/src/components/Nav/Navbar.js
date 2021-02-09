import styled from 'styled-components';
import Burger from './Burger';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  // console.log(location.pathname);
  const pfad = location.pathname.substring(1);

  console.log(pfad);
  let result;
  if (pfad.match('add')) {
    result = 'Neue Transaktion hinzufügen';
  } else if (pfad.match('transactions')) {
    result = 'Transaktion';
  } else if (pfad.match('charts')) {
    result = 'Charts';
  } else if (pfad.match('test')) {
    result = 'Test';
  } else if (pfad.match('')) {
    result = 'Übersicht';
  }

  return (
    <Nav>
      <div className="nav-title">
        <h2>{result}</h2>
      </div>
      <Burger />
    </Nav>
  );
};

const Nav = styled.nav`
  min-height: 15vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0% 5%;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    background-image: linear-gradient(
      to right,
      #31326c 0%,
      #2d2e60 60%,
      #242658 80%
    );
    min-height: 5rem;
    width: 100%;
    padding: 0 5%;
    z-index: 444;

    .nav-title {
      padding-left: 25px;
      h2 {
        font-size: 1.6rem;
      }
    }
  }
`;
export default Navbar;
