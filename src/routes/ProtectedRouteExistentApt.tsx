import React, { ReactNode, useState, useEffect } from 'react'
import FlexibleModal from 'components/common/FlexibleModal'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { aptService } from 'services/apt/aptService'
import { useAppSelector } from 'hooks/useRedux'

interface Props {
  children: ReactNode
}

// 존재하지 않는 아파트 주소로 직접 접근하는 행위를 차단하는 라우트
const ProtectedRouteExistentApt = ({ children }: Props) => {
  const { aptId } = useParams()
  const navigate = useNavigate()
  const userInfo = useAppSelector((state) => state.user.userInfo)
  const isNotVerifiedAptUser = userInfo.apartCode === '' || userInfo.apartCode === 'EMPTY'

  const [isExistentApt, setIsExistentApt] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAptExistence = async () => {
      const response = await aptService.aptExists({ aptId: aptId as string })
      if (response?.apartExists) {
        setIsExistentApt(response.apartExists)
      }
      setLoading(false)
    }

    checkAptExistence()
  }, [aptId])

  const notLoggedInModal = {
    text: `로그인 후 사용할 수 있는 서비스입니다.
    지금 로그인 하시겠습니까?`,
    buttons: [
      { title: '뒤로 가기', action: () => navigate(-1) },
      { title: '로그인', action: () => navigate('/login') },
    ],
  }

  const noAptInfoModal = {
    text: `인증하신 아파트 정보가 없습니다.
    지금 인증 하시겠습니까?`,
    buttons: [
      { title: '뒤로 가기', action: () => navigate(-1) },
      { title: '아파트 인증', action: () => navigate('/setting/apartment-verification') },
    ],
  }

  const commonModal = {
    text: `존재하지 않는 아파트 커뮤니티 입니다.`,
    buttons: [
      { title: '홈으로 돌아가기', action: () => navigate('/') },
      { title: '뒤로 가기', action: () => navigate(-1) },
    ],
  }

  const decideModal = () => {
    switch (aptId) {
      case 'not-logged-in':
        return notLoggedInModal
      case 'EMPTY':
        return noAptInfoModal
      default:
        return commonModal
    }
  }

  if (loading) return <div>아파트 존재 유무 확인중...</div>
  if (!isNotVerifiedAptUser && !isExistentApt)
    return (
      <Navigate
        to={`/community/${userInfo.apartCode}/create`}
        state={{ aptId: userInfo.apartCode, aptName: userInfo.apartName }}
      />
    )

  return isExistentApt ? <>{children}</> : <FlexibleModal modalProps={decideModal()} />
}

export default ProtectedRouteExistentApt
