'use client'

import Link from 'next/link'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  padding: 15px 50px;
  border-bottom: 1px solid #2f2f2f;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Menu = styled.span`
  display: flex;
  column-gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
`

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 20px;
  border: 1px solid #434343;
  padding: 8px 20px;
  font-size: 15px;
`

export default function Header() {
  return (
    <StyledHeader>
      <Menu>
        <Link href={'/'}>랜덤채팅</Link>
        <Link href={'/board'}>게시판</Link>
      </Menu>
      <LoginButton>
        <p>로그인</p>
        <p>・</p>
        <p>회원가입</p>
      </LoginButton>
    </StyledHeader>
  )
}
