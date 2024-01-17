import { observer, useObservable } from "@legendapp/state/react"
import { signIn, useSession } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useToast } from "~/components/hooks/use-toast"
import { DashIcons, Icons } from "~/components/icons"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Loader } from "~/components/ui/loader"

const IndexPage = observer(() => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [callbackUrl, setCallbackUrl] = useState<string>("")
  const { toast } = useToast()
  const { push } = useRouter()
  const { query } = useRouter()

  const isLoading = useObservable<boolean>(false);

  const { data: session, status } = useSession()
  useEffect(() => {
    if (query.callbackUrl) {
      console.log(query, "Query")
      console.log(status, "status")
      setCallbackUrl(query.callbackUrl as string)
      isLoading.set(status === "loading")
    }
  }, [query, status])

  return (
    <>
      <Head>
        <title>Wrapcbdc | Login</title>
        <meta
          name="description"
          content="Wrap CBDC | stable coin pegged to CBDC"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="md:py-auto container px-4 pb-8 pt-6 md:justify-center">
        <Icons.logo className="mx-auto my-[2rem] h-14 w-14" />
        <div className="mx-auto grid w-full gap-4 rounded-2xl bg-slate-700/50 p-3 md:w-[588px] md:p-8">
          <h4 className="mb-6 text-center text-base font-semibold md:text-lg">
            Log in to Wrapped CBDC as an Admin
          </h4>
          <div className="w-full">
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Label htmlFor="email" className="mb-2">
              Password
            </Label>
            <Input
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              suffix={
                showPassword ? (
                  <DashIcons.eyeClose
                    className="h-full w-full hover:cursor-pointer"
                    onClick={() => setShowPassword((_prev) => !_prev)}
                  />
                ) : (
                  <DashIcons.eyeOpen
                    className="h-full w-full hover:cursor-pointer"
                    onClick={() => setShowPassword((_prev) => !_prev)}
                  />
                )
              }
            />
          </div>

          <span className="my-6 flex items-center justify-between text-center text-sm">
            Forgot Password?{" "}
            <Link href="/password/reset" className="text-blue-500">
              Reset it here
            </Link>
          </span>

          <Button
            size="lg"
            className="relative w-full"
            onClick={async () => {
              isLoading.set(true);
              if (!password.length) {
                isLoading.set(false)
                return toast({
                  variant: "destructive",
                  title: "Oops something went wrong",
                  description: "Please enter your details",
                })
              }
              if (!email.length) {
                isLoading.set(false)
                return toast({
                  variant: "destructive",
                  title: "Oops something went wrong",
                  description: "Please enter your details",
                })
              }
              await signIn("credentials", {
                redirect: false,
                email,
                password,
                // callbackUrl: "/overview",
              }).then((res) => {
                console.log(res, "Sign in response", callbackUrl)
                if (res?.ok && res?.status === 200) {
                isLoading.set(false)
                  push(callbackUrl.length ? callbackUrl : (res?.url as string))
                } else {
                isLoading.set(false)
                  toast({
                    variant: "destructive",
                    title: "An error occurred while login in",
                    description: res?.error?.toString(),
                  })
                }
              })
            }}
          >
            {isLoading.get()? <Loader /> : "Login"}
          </Button>
        </div>
        <span className="mt-6 flex items-center justify-center text-center text-xs">
          © Copyright© 2022 wrapcbdc.com. All rights reserved.
        </span>
      </section>
    </>
  )
});

export default IndexPage;
