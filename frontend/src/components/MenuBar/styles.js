import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  width: 3.75rem;
  height: 100vh;
  background: #192734;
  border-left: 1px solid #38444d;
  padding: 0.8rem 0;
  right: 0;
`

export const MenuBarLink = styled(Link)`
  display: block;
  width: 3.75rem;
  height: 3.75rem;
  position: relative;
  padding: 1.1rem;
  color: #8899a6;
  cursor: pointer;
  &:hover {
    color: #1fa1f2;
  }
`

export const MenuBarItem = styled.span`
  display: block;
  width: 3.75rem;
  height: 3.75rem;
  position: relative;
  padding: 1.1rem;
  color: #8899a6;
  cursor: pointer;
  &:hover {
    color: #1fa1f2;
  }
`
