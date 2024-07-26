import styled from 'styled-components'

export const Header1 = styled.div`
  padding: 14px;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  padding: 10px 50px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.changerBackground ? 'rgb(0,0,0,0.8)' : 'transparent'};
  transition: background-color 0.7s ease-in-out;

  img {
    width: 25%;
  }
`
export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`
export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 28px;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;

    &:hover {
      color: #189b20;
    }
  }
  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.$isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`
