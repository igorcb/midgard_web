export function HeaderChatGpt() {
  return (
    <div>
      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold mr-6">Logo</a>
            <ul className="hidden md:flex">
              <li><a href="#" className="px-4 hover:text-gray-300">Home</a></li>
              <li><a href="#" className="px-4 hover:text-gray-300">Product</a></li>
              <li><a href="#" className="px-4 hover:text-gray-300">Pricing</a></li>
              <li><a href="#" className="px-4 hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div className="flex items-center">
            <a href="#" className="mr-6 hover:text-gray-300">Login</a>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Cadastre-se
            </button>
          </div>
        </nav>
      </header>
      <main className="py-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold">Olá, mundo!</h2>
        <p className="mt-4">Esta é uma página responsiva com Tailwind CSS.</p>
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>Desenvolvido por Seu Nome - Ano</p>
      </footer>

    </div>
  )
}