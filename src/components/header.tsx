
const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center py-6 px-4">
        <div className="font-bold text-2xl text-green-700">Community Connect</div>
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-green-700">Home</a></li>
            <li><a href="#" className="hover:text-green-700">Explore</a></li>
            <li><a href="#" className="hover:text-green-700">Group Buys</a></li>
            <li><a href="#" className="hover:text-green-700">Bill Splitting</a></li>
          </ul>
        </nav>
      </header>
  )
}
export default Header;
