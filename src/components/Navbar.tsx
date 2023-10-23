import Link from 'next/link'

export const Navbar = () => {
  const routes = [
    {
      id: 1,
      path: '/',
      name: 'Home',
      svg: <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className=" w-4 h-4">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
    },
    {
      id: 2,
      path: '/books',
      name: 'Books',
      svg: <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className=" w-4 h-4">
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
            </svg>
    },
    {
      id: 3,
      path: '/categories',
      name: 'Categories',
      svg: <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className=" w-4 h-4">
                <path
                    d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z">
                </path>
                <path d="M13 5v2"></path>
                <path d="M13 17v2"></path>
                <path d="M13 11v2"></path>
            </svg>
    }
  ]

  return (
        <aside className="sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4">
            <div className="flex items-center mb-4 space-x-1">
                <h1 className="text-lg font-medium">ReadConnect</h1>
            </div>
            <nav className="space-y-2">
                {routes.map(route => (
                    <Link key={route.id} href={route.path} className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                        {route.svg}
                        <span className="text-sm font-medium">
                            {route.name}
                        </span>
                    </Link>
                ))}
            </nav>
        </aside>

  )
}
