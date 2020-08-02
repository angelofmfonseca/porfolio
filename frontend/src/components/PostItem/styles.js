import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  display: flex;
  color: #8899a6;
  text-decoration: none;
  &:hover {
    color: #1fa1f2;
  }
`

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  border-bottom: 1px solid #38444d;
`

export const PostItemTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  min-width: 90px;
  min-height: 90px;
  background: ${props => props.background};
  color: ${props => props.color};
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.8rem;
`

export const PostItemTitle = styled.h1`
  margin: 0.5rem 0 0.2rem;
  font-size: 1.6rem;
  font-weight: 700;
`

export const PostItemDescription = styled.p`
  line-height: 1.2;
  font-size: 1.1rem;
  font-weight: 300;
`
