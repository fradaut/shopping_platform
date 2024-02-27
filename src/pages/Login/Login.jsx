import LoginButton from "../../components/LoginButton";

const Login = () => {
  return(
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white px-8 pt-8 pb-1 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="mail" className="block text-sm font-medium text-gray-700">電子郵件:</label>
          <input type="text" id="mail" className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">密碼:</label>
          <input type="text" id="password" className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div className="flex justify-end">
          <LoginButton />
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-indigo-600 hover:underline">忘記密碼?</a>
        </div>
      </div>
    </div>
  )
};

export default Login