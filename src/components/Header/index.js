import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const HeaderWrapper = styled.div`
  background: #e0d6eb;
  margin-bottom: 1.45rem;
`

const TitleWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  margin: 0;
`

const HyperLink = styled(Link)`
  text-decoration: none;
  color: #663399;
`

const Header = () => (
  <HeaderWrapper>
    <TitleWrapper>
      <Title>
        <HyperLink to="/">Szkolenia</HyperLink>
      </Title>
    </TitleWrapper>
  </HeaderWrapper>
)

export default Header
