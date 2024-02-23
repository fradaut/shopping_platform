const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-80 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white text-xl font-bold" href="#">Title</a>

        <div className="flex items-center">
          <a className="text-white px-4" href="#">個人天地</a>
          <a className="text-white px-4" href="#">購物平台</a>

          <button className="bg-pink-200 hover:bg-pink-300 active:bg-pink-400 px-3 py-1 rounded">登入</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar