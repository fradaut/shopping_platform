import { useNavigate, useLocation } from "react-router-dom"

const LoginButton = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLoginClick = () => {
    const targetPath = '/login'

    if (location.pathname !== targetPath) {
      navigate(targetPath)
    }
  }

  
  return (
    <button onClick={handleLoginClick} className="bg-pink-200 hover:bg-pink-300 active:bg-pink-400 px-3 py-1 rounded">登入</button>
  )
}

export default LoginButton
