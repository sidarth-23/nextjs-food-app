import Link from 'next/link'

export default function Header () {
    return (
        <header className="flex items-center justify-between text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href={"/"}>ST PIZZA</Link>
        <nav className="flex gap-8 items-center">
          <Link href={"/"}>Home</Link>
          <Link href="">Menu</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </nav>
        <nav className="flex gap-8 items-center">
          <Link href={'/login'} className="bg-primary rounded-full text-white px-8 py-2">Login</Link>
          <Link href={'/register'}>Register</Link>
        </nav>
      </header>
    )
}