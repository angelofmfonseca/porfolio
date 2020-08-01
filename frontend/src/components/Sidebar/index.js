import React from "react"

import * as S from "./styles"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"

const Sidebar = () => (
  <S.SideBarWrapper>
    <Profile />
    <SocialLinks />
  </S.SideBarWrapper>
)

export default Sidebar
