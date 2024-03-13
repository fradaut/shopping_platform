import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios"

import Button from "@/components/Button"
import Loading from "@/components/Loading"
import Modal from "@/components/Modal"

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [modalMessage, setModalMessage] = useState('')
  const [isloading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSetMail = (e) => setEmail(e.target.value)
  const handleSetPassword = (e) => setPassword(e.target.value)

  const showModalWithMessage = (message) => {
    setModalMessage(message)
    setIsModalOpen(true)
  }
  const handleCloseModal = () => setIsModalOpen(false)

  const handleLogin = async () => {
    setIsLoading(true)

    if(!email || !password) {
      showModalWithMessage("請輸入電子郵件和密碼。")
      setIsLoading(false)
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      showModalWithMessage("請輸入有效的電子郵件地址。")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      showModalWithMessage("密碼長度至少為6。")
      setIsLoading(false)
      return
    }

    try {
      const response = await axios.post('https://mtdl.ddns.net/dev/signin', { email, password })
      showModalWithMessage("登入成功, 即將跳轉至先前頁面。\n", response.data)
      navigate(location.state?.from || '/', { replace: true })
    } catch (error) {
      showModalWithMessage("登入失敗。\n", error)
    }

    setIsLoading(false)
  }


  return(
    <div className="flex items-center justify-center h-screen bg-gray-50">
      {isloading && <Loading />}
      {isModalOpen && <Modal onClose={handleCloseModal}>{modalMessage}</Modal>}
      <div className="bg-white px-8 pt-8 pb-1 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="mail" className="block text-sm font-medium text-gray-700">電子郵件:</label>
          <input type="text" id="email" value={email} onChange={handleSetMail} className="mt-1 block w-64 rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">密碼:</label>
          <input type="password" id="password" value={password} onChange={handleSetPassword} className="mt-1 block w-64 rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div className="mb-4 flex justify-end">
          <Button onClick={handleLogin}>登入</Button>
        </div>
        <div className="text-center flex justify-center gap-4">
          <a href="#" className="text-sm text-indigo-600 hover:underline">註冊帳號</a>
          <a href="#" className="text-sm text-indigo-600 hover:underline">忘記密碼?</a>
        </div>
      </div>
    </div>
  )
};

export default Login