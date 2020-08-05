import styled from "styled-components";
export const ButttonCntainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--mainWhite);
  border-color: ${(props) =>
    props.cart
      ? "var(--mainYellow)"
      : (props) => (props.cancel ? "var(--mainRed)" : "var(--mainWhite)")};
  color: ${(props) =>
    props.cart
      ? "var(--mainYellow)"
      : (props) => (props.cancel ? "var(--mainRed)" : "var(--mainWhite)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.cart
        ? "var(--mainYellow)"
        : (props) => (props.cancel ? "var(--mainRed)" : "var(--mainWhite)")};
    color: ${(props) =>
      props.cancel || props.cart ? "var(--mainWhite)" : "var(--mainBlue)"};
    &:focus {
      outline: none;
    }
  }
`;
export const NavbarContent = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
