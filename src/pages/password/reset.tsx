import { useSession } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import { useToast } from "~/components/hooks/use-toast"
import { Icons } from "~/components/icons"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

export default function ResetPassword() {
  const [email, setEmail] = useState<string>("")
  const [linkSent, setLinkSent] = useState<boolean>(false)
  const [callbackUrl, setCallbackUrl] = useState<string>("")
  const { toast } = useToast()
  const { query, push } = useRouter()

  const { data: session, status } = useSession()
  useEffect(() => {
    if (query.callbackUrl) {
      console.log(query, "Query")
      console.log(status, "status")
      setCallbackUrl(query.callbackUrl as string)
    }

    if (query.linkSent && query.linkSent === "true") {
      setLinkSent(true)
    }
  }, [query, status, linkSent])

  return (
    <>
      <Head>
        <title>Wrapcbdc | Reset password</title>
        <meta
          name="description"
          content="Wrap CBDC | stable coin pegged to CBDC"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!linkSent ? (
        <section className="md:py-auto container px-4 pt-6 pb-8 md:justify-center">
          <Icons.logo className="mx-auto my-[2rem] h-14 w-14" />
          <div className="mx-auto grid w-full gap-4 rounded-2xl bg-slate-700/50 p-3 md:w-[588px] md:p-8">
            <h4 className="text-center text-base font-semibold md:text-lg">
              Reset password
            </h4>
            <span className="mb-6 text-center text-xs md:text-sm">
              Enter your registered email to reset your password.
            </span>
            <div className="w-full">
              <Label htmlFor="email" className="mb-2">
                Email address
              </Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <span className="my-6 flex items-center justify-between text-center text-sm">
              Remembered Password?{" "}
              <Link href="/" className="text-blue-500">
                Log in
              </Link>
            </span>

            <Button
              size="lg"
              className="relative w-full"
              disabled={!email.length}
              onClick={async () => {
                if (!email.length) {
                  return toast({
                    variant: "destructive",
                    title: "Oops, email address not provided",
                    description:
                      "Please enter your email address registered on the platform, to receive a password reset link",
                  })
                }

                push("/password/reset?linkSent=true", "/password/reset", {
                  shallow: true,
                })
              }}
            >
              Send reset link
            </Button>
          </div>
          <span className="mt-6 flex items-center justify-center text-center text-xs">
            © Copyright© 2022 wrapcbdc.com. All rights reserved.
          </span>
        </section>
      ) : (
        <LinkSent resend={() => {}} push={push} email={email} />
      )}
    </>
  )
}

const LinkSent: FC<{ resend: Function; push: Function; email: string }> = ({
  resend,
  push,
  email,
}) => (
  <section className="md:py-auto container px-4 pt-6 pb-8 md:justify-center">
    <Icons.logo className="mx-auto my-[2rem] h-14 w-14" />
    <div className="mx-auto grid w-full gap-4 rounded-2xl bg-slate-700/50 p-3 md:w-[588px] md:p-8">
      <h4 className="text-center text-base font-semibold md:text-lg">
        Password reset link sent
      </h4>
      <span className="mb-6 text-center text-xs md:text-sm">
        A password reset link has been sent to{" "}
        <a href={`mailto:${email}`} className="text-blue-500">
          {email}
        </a>
        , please click on the link attached to verify your account. If email
        can`t be found, please make sure to check the spam folder of your email
        application
      </span>
      <div className="flex space-x-4">
        <Button
          size="lg"
          variant="outline"
          className="relative w-full"
          onClick={async () => {}}
        >
          Resend link
        </Button>
        <Button
          size="lg"
          className="relative w-full"
          onClick={async () => push("/")}
        >
          Done
        </Button>
      </div>
    </div>
    <span className="mt-6 flex items-center justify-center text-center text-xs">
      © Copyright© 2022 wrapcbdc.com. All rights reserved.
    </span>
  </section>
)
