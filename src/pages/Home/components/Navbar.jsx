import { useNavigate, useLocation } from "react-router-dom"

import Button from "@/components/Button"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const clickToLogin = () => navigate('/login', { state: { from: location.pathname } })

  return (
    <nav className="bg-black bg-opacity-80 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white text-xl font-bold" href="#">Title</a>

        <div className="flex items-center">
          <a className="text-white px-4" href="#">個人天地</a>
          <a className="text-white px-4" href="#">購物平台</a>

          <Button onClick={clickToLogin}>登入</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar