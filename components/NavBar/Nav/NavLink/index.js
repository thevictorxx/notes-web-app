import Link from 'next/link'

function NavLink({ to, children }) {
  return (
    <Link href={to}>
      <a className="cursor-pointer rounded hover:ring-1 p-2 ring-gray-300 hover:bg-gray-300 text-gray-800">
        {children}
      </a>
    </Link>
  )
}

export default NavLink
