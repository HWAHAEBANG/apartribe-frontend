import React from 'react'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import HeaderLanding from 'components/common/HeaderLanding'
import Footer from 'components/common/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { setAccessToken, setRefreshToken } from 'utils/localStorage'
import { userService } from 'services/auth/userService'
import { useDispatch } from 'react-redux'
import { setLogin } from 'redux/store/userSlice'
import { ResultWithData } from 'types/authType'
import { useAppSelector } from 'hooks/useRedux'

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userInfo = useAppSelector((state) => state.user.userInfo)
  const [searchParams, setSearchParams] = useSearchParams()

  const thirdPartyAccessToken = searchParams?.get('accessToken')
  const thirdPartyRefreshToken = searchParams?.get('refreshToken')

  if (thirdPartyAccessToken) setAccessToken(thirdPartyAccessToken)
  if (thirdPartyRefreshToken) setRefreshToken(thirdPartyRefreshToken)

  const showMember = async () => {
    if (!thirdPartyAccessToken || !thirdPartyRefreshToken) return
    if (userInfo.email) return
    const showMemberResult = await userService.showMember()
    const { result, data } = showMemberResult as ResultWithData

    if (result === 'success') {
      dispatch(setLogin(data))
    }
    setSearchParams({}) // 토큰이 param에 노출되어 있지 않도록, 사용 후 비워줌.
  }

  showMember()

  return (
    <>
      <HeaderLanding />
      <Outlet />
      <Footer />
      <ToastContainer
        toastStyle={{
          boxShadow: 'none',
          backgroundColor: '#303030',
          color: '#ffffff',
          fontSize: '12px',
        }}
      />
    </>
  )
}

export default App
