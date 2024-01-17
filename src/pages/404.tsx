import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div className="grid justify-center pt-10">
      <h1 className="justify-self-center text-center align-middle text-base font-semibold">
        Page not found <br />
        <Link href="/" className="text-blue-500">
          Login
        </Link>
      </h1>
    </div>
  )
}
