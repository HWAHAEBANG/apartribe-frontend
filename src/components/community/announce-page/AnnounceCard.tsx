import React, { FC } from 'react'
import { Badge, Img, P } from 'styles/reusable-style/elementStyle'
import { AiOutlineEye, AiOutlineLike } from 'react-icons/ai'
import { BiConversation } from 'react-icons/bi'
import { styled } from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { AnnounceCardType } from 'types/community-type/announceType'
import { BoardType } from 'services/community/postsService'
import { timeAgo } from 'utils/timeAgo'
import { tagRemover } from 'utils/tagRemover'
import defaultAvatar from 'assets/users/defaultAvatar.png'

interface Props {
  post: AnnounceCardType
}

const AnnounceCard: FC<Props> = ({
  post: {
    id,
    level: category,
    title,
    content,
    createdBy,
    createdAt,
    saw,
    liked,
    commentCounts,
    thumbnail,
    profileImage,
  },
}) => {
  const { aptId } = useParams()
  const navigate = useNavigate()

  const moveToDetail = () => {
    navigate(`/community/${aptId}/announce/${id}/detail`) // 추후 경로 수정
  }

  // level 과 category 관련 이슈 announceType.ts 주석 참고.
  const badgeColor = (category: string | undefined): string => {
    if (category === '일반') return '#0B2A08'
    if (category === '긴급') return '#C9AB0C'
    return '#EA1616'
  }

  return (
    <StyledWrapper className="flex" onClick={moveToDetail}>
      <Img
        src={profileImage || defaultAvatar}
        $width="40px"
        $height="40px"
        $borderRadius="50%"
        $lineHeight="12px"
        $margin="5px 0"
      />
      <StyledDiv className="row">
        <StyledDiv className="column">
          <div>
            <P $fontSize="12px" $fontWeight="700">
              [직책정보필요] {createdBy}
            </P>
            <P $fontSize="10px" $color="#b3b3b3" $lineHeight="12px">
              {timeAgo(createdAt)}
            </P>
          </div>
          <StyledDiv className="row">
            <Badge $background={badgeColor(category)}>{category}</Badge>
            <StyledParagraph className="singleLineEclips">{title}</StyledParagraph>
          </StyledDiv>
          <StyledParagraph className="doubleLineEclips">
            {tagRemover(content)}
          </StyledParagraph>
          <StyledDiv className="row">
            <P $fontSize="12px">
              <AiOutlineEye />
              &nbsp;{saw}
            </P>
            <P $fontSize="12px">
              <AiOutlineLike />
              &nbsp;{liked}
            </P>
            <P $fontSize="12px">
              <BiConversation />
              &nbsp;{commentCounts}
            </P>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
      {thumbnail ? (
        <StyledImgWrapper>
          <StyledImg src={thumbnail} />
        </StyledImgWrapper>
      ) : (
        ''
      )}
    </StyledWrapper>
  )
}

export default AnnounceCard

const StyledWrapper = styled.div`
  max-width: 870px;
  width: 100%;
  height: 170px;
  display: flex;
  border-top: 1px solid #f2f2f2;
  padding: 10px 20px;
  gap: 20px;
  cursor: pointer;
`

const StyledDiv = styled.div`
  &.row {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  &.column {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

const StyledParagraph = styled.p`
  &.singleLineEclips {
    margin: 0;
    font-size: 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 17px;
    font-weight: 700;
  }

  &.doubleLineEclips {
    margin: 0;
    font-size: 12px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`
const StyledImgWrapper = styled.div`
  min-width: 150px;
  min-height: 80px;
  height: 80px;
  border-radius: 5px;
  overflow: hidden;
  margin: 45px 0;
`

const StyledImg = styled.img`
  width: 150px;
  height: auto;
`