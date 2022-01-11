import Image from 'next/image'

function NavLogo() {
  return (
    <div className="text-3xl font-extralight navlogo flex items-center gap-2">
      <Image src="/logo/logo.png" alt="Logo" width="48" height="48" />{' '}
      <span>Notes</span>
    </div>
  )
}

export default NavLogo
