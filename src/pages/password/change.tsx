import { useSession } from "next-auth/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import { useToast } from "~/components/hooks/use-toast"
import { DashIcons, Icons } from "~/components/icons"
import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

export default function ChangePassword() {
  const [password, setPassword] = useState<string>("")
  const [cPassword, setCPassword] = useState<string>("")
  const [showPassword1, setShowPassword1] = useState<boolean>(false)
  const [showPassword2, setShowPassword2] = useState<boolean>(false)

  const [callbackUrl, setCallbackUrl] = useState<string>("")
  const { toast } = useToast()
  const { query, push } = useRouter()

  const { data: session, status } = useSession()
  useEffect(() => {
    if (query.callbackUrl) {
      setCallbackUrl(query.callbackUrl as string)
    }
  }, [query, status])

  return (
    <>
      <Head>
        <title>Wrapcbdc | Change password</title>
        <meta
          name="description"
          content="Wrap CBDC | stable coin pegged to CBDC"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="md:py-auto container px-4 pt-6 pb-8 md:justify-center">
        <Icons.logo className="mx-auto my-[2rem] h-14 w-14" />
        <div className="mx-auto grid w-full gap-4 rounded-2xl bg-slate-700/50 p-3 md:w-[588px] md:p-8">
          <h4 className="text-center text-base font-semibold md:text-lg">
            Change Password
          </h4>
          <span className="mb-6 text-center text-xs md:text-sm">
            Enter a new password for your account.
          </span>
          <div className="grid w-full items-start">
            <Label htmlFor="password" className="mb-2 text-left">
              New password
            </Label>
            <Input
              name="password"
              id="password"
              type={showPassword1 ? "text" : "password"}
              required
              placeholder="Please enter new password"
              value={password}
              suffix={
                showPassword1 ? (
                  <DashIcons.eyeClose
                    className="h-4 w-4 hover:cursor-pointer"
                    onClick={() => setShowPassword1((_prev) => !_prev)}
                  />
                ) : (
                  <DashIcons.eyeOpen
                    className="h-4 w-4 hover:cursor-pointer"
                    onClick={() => setShowPassword1((_prev) => !_prev)}
                  />
                )
              }
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <PasswordStrength />
          <div className="grid w-full items-start">
            <Label htmlFor="cpassword" className="mb-2 text-left">
              Confirm Password
            </Label>
            <Input
              name="cpassword"
              id="cpassword"
              type={showPassword2 ? "text" : "password"}
              required
              placeholder="Please confirm new password again"
              value={cPassword}
              suffix={
                showPassword2 ? (
                  <DashIcons.eyeClose
                    className="h-4 w-4 hover:cursor-pointer"
                    onClick={() => setShowPassword2((_prev) => !_prev)}
                  />
                ) : (
                  <DashIcons.eyeOpen
                    className="h-4 w-4 hover:cursor-pointer"
                    onClick={() => setShowPassword2((_prev) => !_prev)}
                  />
                )
              }
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>

          <Button
            size="lg"
            className="relative w-full"
            disabled={!password.length || !cPassword.length}
            onClick={async () => {
              if (!password.length || !cPassword.length) {
                return toast({
                  variant: "destructive",
                  title: "Oops, password not provided",
                  description:
                    "Please enter a valid password to update your access",
                })
              }

              if (password !== cPassword) {
                return toast({
                  variant: "destructive",
                  title: "Oops, password mismatch",
                  description:
                    "Your passwords do not match, please make sure both values are the same to confirm the password",
                })
              }

              // TODO: call change password and pass reset id
            }}
          >
            Change password
          </Button>
        </div>
        <span className="mt-6 flex items-center justify-center text-center text-xs">
          © Copyright© 2022 wrapcbdc.com. All rights reserved.
        </span>
      </section>
    </>
  )
}

const PasswordStrength: FC<{
  resend?: Function
  push?: Function
}> = ({ resend, push }) => (
  <div className="flex flex-col space-y-3">
    <span>
      Password strength: <b className="text-[#45D8A1]">strong</b>
    </span>
    <ul className="flex w-full flex-col items-start justify-start space-y-2">
      <li className="flex justify-center space-x-2">
        <Checkbox className="h-5 w-5 rounded dark:bg-[#45D8A1]" />
        <Label>Has at least 8 characters</Label>
      </li>
      <li className="flex justify-center space-x-2">
        <Checkbox className="h-5 w-5 rounded dark:bg-[#45D8A1]" />
        <Label>Contains at least one number</Label>
      </li>
      <li className="flex justify-center space-x-2">
        <Checkbox className="h-5 w-5 rounded dark:bg-[#45D8A1]" />
        <Label>Contains at least one lowercase letter</Label>
      </li>
      <li className="flex justify-center space-x-2">
        <Checkbox className="h-5 w-5 rounded dark:bg-[#45D8A1]" />
        <Label>Contains at least one uppercase letter</Label>
      </li>
    </ul>
  </div>
)

const LinkExpired: FC<{ push: Function }> = ({ push }) => (
  <section className="md:py-auto container px-4 pt-6 pb-8 md:justify-center">
    <Icons.logo className="mx-auto my-[2rem] h-14 w-14" />
    <div className="mx-auto grid w-full gap-4 rounded-2xl bg-slate-700/50 p-3 md:w-[588px] md:p-8">
      <h4 className="text-center text-base font-semibold md:text-lg">
        Link expired
      </h4>
      <span className="mb-6 text-center text-xs md:text-sm">
        This link has expired. Please check your inbox for the most recent link.
      </span>

      <Button
        size="lg"
        className="relative w-full"
        onClick={async () => push("/")}
      >
        Back to login
      </Button>
    </div>
  </section>
)
