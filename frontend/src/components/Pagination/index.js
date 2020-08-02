import React from "react"
import propTypes from "prop-types"
import { Link } from "gatsby"

import * as S from "./styles"

const Pagination = ({
  isFirstPage,
  isLastPage,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirstPage && <Link to={prevPage}>página anterior</Link>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLastPage && <Link to={nextPage}>próxima página</Link>}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirstPage: propTypes.bool,
  isLastPage: propTypes.bool,
  currentPage: propTypes.number,
  numPages: propTypes.number,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
