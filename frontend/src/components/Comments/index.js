import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import * as S from "./styles"

const Comments = ({ url, title }) => {
  const completeUrl = `https://angelofonseca.com${url}` //url do site

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="example" //conta do disqus
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
