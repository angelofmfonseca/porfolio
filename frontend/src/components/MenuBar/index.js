import React from "react"
import { LightBulb as Light } from "@styled-icons/octicons/LightBulb"
import { ArrowUpCircle as Arrow } from "@styled-icons/ionicons-outline/ArrowUpCircle"

import * as S from "./styles"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarItem to="mudar tema">
      <Light />
    </S.MenuBarItem>
    <S.MenuBarItem to="ir para o topo">
      <Arrow />
    </S.MenuBarItem>
  </S.MenuBarWrapper>
)

export default MenuBar
