import { observer, useObservable } from "@legendapp/state/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { FC, ReactNode, useEffect } from "react"
import { toast, useToast } from "~/components/hooks/use-toast"
import { AdminDashboardLayout } from "~/components/layout"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader } from "~/components/ui/card"
import { Checkbox } from "~/components/ui/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Separator } from "~/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"
import { api } from "~/utils/api"

const SingleUserPage = observer(() => {
  const { query, pathname } = useRouter()
  const { toast } = useToast()


  const userId = useObservable(query?.userId as string)
  const userDetails = useObservable({})

  //TODO: useEffectOnce to get userId from param when page mounts or loads
  useEffect(() => {
    console.log(query, query?.userId, ":::observer_query?.userId")
    userId.set(query?.userId as string)
  }, [query, userId])

  const getUser = api.admin.users.getUser.useQuery(userId.get())

  if (getUser.isError) {
    toast({
      title: "Error getting user details",
      description: getUser.error.message,
      variant: "destructive",
    })
  }

  if (getUser.data) {
    userDetails.set(getUser.data)
  }

  return (
    <AdminDashboardLayout pathname={pathname}>
      <Head>
        <title>Wrapcbdc | Mint</title>
        <meta
          name="description"
          content="Wrap CBDC | stable coin pegged to CBDC"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container space-y-4 pb-16 pt-4">
        <div className="grid w-full grid-cols-3 gap-4">
          <div className="col-span-3 h-full rounded-lg bg-slate-800/40">
            <Card className="border-none bg-slate-800/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex w-full justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <Avatar className="h-[80px] w-[80px] border-[1px] border-[#3640D7] bg-slate-900 text-[#3640D7]">
                      <AvatarFallback>JE</AvatarFallback>
                      <AvatarImage></AvatarImage>
                    </Avatar>
                    <div className="grid gap-2 text-sm">
                      <span>Business name</span>
                      <span className="text-[#3640D7]">Email address</span>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-end gap-2">
                    <span className="text-sm">Status</span>
                    {userDetails.get()["email_verified"] ? (
                      <span className="flex items-center gap-2 rounded-full bg-[#5B63E029] p-2 text-xs">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#15BB7D"
                          />
                          <rect
                            width="16"
                            height="16"
                            transform="translate(4 4.5)"
                            fill="white"
                            style={{ mixBlendMode: "multiply" }}
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.1204 8.1978C17.2902 8.05239 17.5087 7.97641 17.732 7.98504C17.9554 7.99367 18.1673 8.08627 18.3254 8.24434C18.4835 8.40242 18.5761 8.61432 18.5847 8.83771C18.5933 9.06109 18.5174 9.2795 18.3719 9.4493L18.3594 9.46392L10.636 17.1914L6.22607 12.7857L6.21343 12.7709C6.06802 12.6011 5.99203 12.3827 6.00066 12.1593C6.00929 11.936 6.10189 11.7241 6.25997 11.566C6.41804 11.4079 6.62995 11.3153 6.85333 11.3067C7.07671 11.298 7.29513 11.374 7.46493 11.5194L7.4796 11.532L10.6282 14.6806L17.1059 8.21027L17.1204 8.1978Z"
                            fill="#F0F1FF"
                          />
                        </svg>
                        Verified
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 rounded-full bg-[#5B63E029] p-2 text-xs">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="24"
                            height="24"
                            rx="12"
                            fill="white"
                            fill-opacity="0.1"
                          />
                          <rect
                            width="16"
                            height="16"
                            transform="translate(4 4)"
                            fill="white"
                            style={{ mixBlendMode: "multiply" }}
                          />
                          <path
                            d="M16 8.7L15.3 8L12 11.3L8.7 8L8 8.7L11.3 12L8 15.3L8.7 16L12 12.7L15.3 16L16 15.3L12.7 12L16 8.7Z"
                            fill="#545DE9"
                          />
                        </svg>
                        Not verified
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>
              <Separator className="my-2" />
              <CardContent>
                <Tabs defaultValue="details">
                  <TabsList>
                    <TabsTrigger value="details">User details</TabsTrigger>
                    <TabsTrigger value="transaction">
                      User transaction
                    </TabsTrigger>
                    <TabsTrigger value="fee">Verification fee</TabsTrigger>
                    <TabsTrigger value="documents">KYC Documents</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details">
                    <UserDetails
                      fullName={
                        typeof userDetails.get()["first_name"] !== "undefined"
                          ? `${userDetails.get()["first_name"]} ${
                              userDetails.get()["last_name"]
                            }`
                          : userDetails.get()["full_name"]?.length &&
                            `${userDetails.get()["full_name"]}`
                      }
                      email={userDetails.get() && userDetails.get()["email"]}
                      phone={userDetails.get() && userDetails.get()["phone"]}
                      country={
                        userDetails.get() && userDetails.get()["country"]
                      }
                      balance={100}
                    />
                  </TabsContent>
                  <TabsContent value="transaction">
                    Users transaction
                  </TabsContent>
                  <TabsContent value="fee">
                    <Fee
                      feeStatus="pendingVerification"
                      feeAmount={35000}
                      datePaid={new Date(Date.now())}
                    />
                  </TabsContent>
                  <TabsContent value="documents">
                    <Documents
                      documents={[
                        "Identification",
                        "Nin document",
                        "CAC Certification",
                      ]}
                      userId={userId.get()}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AdminDashboardLayout>
  )
})

export default SingleUserPage

type UserDetailsProps = {
  children?: ReactNode
  fullName: string
  email: string
  country: string
  phone: string
  balance: number
}
const UserDetails: FC<UserDetailsProps> = observer(
  ({ fullName, email, country, phone, balance }) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        <span className="col-span-3">Representative Details</span>
        <div className="col-span-3 grid gap-3 md:col-span-1">
          <Label>
            Legal Full Name
            <Input
              placeholder="Alex Brown"
              defaultValue={fullName}
              type="text"
              readOnly
            />
          </Label>
          <Label>
            Country of residence
            <Input
              placeholder="Nigeria"
              defaultValue={country}
              type="text"
              readOnly
            />
          </Label>
        </div>
        <div className="col-span-3 grid gap-3 md:col-span-1">
          <Label>
            Email Address
            <Input
              placeholder="miracle@withconvexity.com"
              defaultValue={email}
              type="email"
              readOnly
            />
          </Label>
          <Label>
            Phone Number
            <Input
              placeholder="9081146028"
              defaultValue={phone}
              type="phone"
              readOnly
            />
          </Label>
        </div>
        {/* <div className="col-span-2 md:col-span-3">{balance} cNGN</div> */}
      </div>
    )
  }
)

type FeeProps = {
  feeStatus: string
  feeAmount: number
  datePaid: Date
}
const Fee: FC<FeeProps> = observer(({ feeStatus, feeAmount, datePaid }) => {
  console.log(feeStatus, feeAmount, datePaid, ":::data_FeeComponent")

  return (
    <div className="grid grid-cols-3 gap-4">
      <span className="col-span-3">Verification fee</span>
      <div className="col-span-3 grid gap-3 md:col-span-1">
        <span>
          This is a one time payment, once payment is confirmed, you will
          receive an email confirming that the deposit has been received in your
          account.{" "}
          <a href="#" className="text-[#5C66FF]">
            Learn more
          </a>{" "}
        </span>
        <div className="grid gap-1">
          <span className="text-xs">Amount</span>
          <span className="text-lg font-medium">85,000</span>
        </div>
        <div className="flex items-center justify-end gap-4">
          <Button variant="destructiveOutline">Decline</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Confirm</Button>
            </DialogTrigger>
            <DialogContent>
              <div className="grid items-center justify-center gap-4 text-center">
                <span>Confirm Vefication fee payment</span>
                <span>
                  This will confirm that user_name has paid 80,000 NGN into Wrap
                  CBDC account and user_name account will be credited with
                  80,000cNGN
                </span>
                <div className="flex items-center justify-center gap-4">
                  <DialogClose>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button>Confirm Payment</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
})

//TODO: Users kyc documents list interaction
type DocumentsProps = {
  documents: Array<any>
  userId: string
}
const Documents: FC<DocumentsProps> = observer(({ documents, userId }) => {
  const verify = api.admin.users.updateUserVerification.useMutation({
    onSuccess(data, variables, context) {
      if (data) {
        return toast({
          title: "User verification",
          description: "Updated user verification status",
        })
      }
    },
    onError(err) {
      return toast({
        title: "Fetching transactions",
        description: err.message,
        variant: "destructive",
      })
    },
  })

  const DocCheck = {
    true: (
      <svg
        className="absolute left-1 top-1 h-4 w-4"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.67 2H16.34C19.73 2 22 4.38 22 7.92V16.091C22 19.62 19.73 22 16.34 22H7.67C4.28 22 2 19.62 2 16.091V7.92C2 4.38 4.28 2 7.67 2ZM11.43 14.99L16.18 10.24C16.52 9.9 16.52 9.35 16.18 9C15.84 8.66 15.28 8.66 14.94 9L10.81 13.13L9.06 11.38C8.72 11.04 8.16 11.04 7.82 11.38C7.48 11.72 7.48 12.27 7.82 12.62L10.2 14.99C10.37 15.16 10.59 15.24 10.81 15.24C11.04 15.24 11.26 15.16 11.43 14.99Z"
          fill="#17CE89"
        />
      </svg>
    ),
    false: (
      <svg
        className="absolute left-1 top-1 h-5 w-5"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.67 1.99902H16.34C19.73 1.99902 22 4.37902 22 7.91902V16.09C22 19.62 19.73 21.999 16.34 21.999H7.67C4.28 21.999 2 19.62 2 16.09V7.91902C2 4.37902 4.28 1.99902 7.67 1.99902ZM15.01 14.999C15.35 14.66 15.35 14.11 15.01 13.77L13.23 11.99L15.01 10.209C15.35 9.87002 15.35 9.31002 15.01 8.97002C14.67 8.62902 14.12 8.62902 13.77 8.97002L12 10.749L10.22 8.97002C9.87 8.62902 9.32 8.62902 8.98 8.97002C8.64 9.31002 8.64 9.87002 8.98 10.209L10.76 11.99L8.98 13.76C8.64 14.11 8.64 14.66 8.98 14.999C9.15 15.169 9.38 15.26 9.6 15.26C9.83 15.26 10.05 15.169 10.22 14.999L12 13.23L13.78 14.999C13.95 15.18 14.17 15.26 14.39 15.26C14.62 15.26 14.84 15.169 15.01 14.999Z"
          fill="#FF9292"
        />
      </svg>
    ),
    null: (
      <Checkbox checked={false} disabled className="absolute left-1 top-1" />
    ),
  }

  const Doc = () => (
    <div className="relative grid items-center justify-center justify-items-center rounded-md bg-slate-800/70 px-2 py-6">
      {DocCheck[false.toString()]}
      <svg
        width="93"
        height="93"
        viewBox="0 0 93 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7559 15.4418C11.7559 11.1775 15.2127 7.7207 19.4769 7.7207H57.2827C57.7947 7.7207 58.2856 7.92407 58.6476 8.28607L80.6801 30.3186C81.0421 30.6805 81.2455 31.1715 81.2455 31.6835V77.2103C81.2455 81.4746 77.7886 84.9314 73.5244 84.9314H19.4769C15.2127 84.9314 11.7559 81.4746 11.7559 77.2103V15.4418Z"
          fill="#444A69"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.4768 10.616C16.8117 10.616 14.6512 12.7765 14.6512 15.4417V77.2102C14.6512 79.8754 16.8117 82.0359 19.4768 82.0359H73.5243C76.1894 82.0359 78.35 79.8754 78.35 77.2102V32.0831L56.8829 10.616H19.4768ZM8.86035 15.4417C8.86035 9.57835 13.6135 4.8252 19.4768 4.8252H57.2826C58.5625 4.8252 59.7899 5.33361 60.6949 6.2386L82.7274 28.2711C83.6324 29.1761 84.1408 30.4035 84.1408 31.6833V77.2102C84.1408 83.0735 79.3876 87.8267 73.5243 87.8267H19.4768C13.6135 87.8267 8.86035 83.0735 8.86035 77.2102V15.4417Z"
          fill="#444A69"
        />
        <path
          d="M80.5862 30.2227L58.7411 8.37752C58.4979 8.13432 58.082 8.30656 58.082 8.6505V30.4956C58.082 30.7088 58.2549 30.8817 58.4681 30.8817H80.3132C80.6572 30.8817 80.8294 30.4659 80.5862 30.2227Z"
          fill="#C1CAEB"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M55.1865 8.6562C55.1865 5.73273 58.7211 4.26866 60.7883 6.33586L82.6335 28.181C84.7007 30.2482 83.2366 33.7828 80.3131 33.7828H58.468C56.6557 33.7828 55.1865 32.3136 55.1865 30.5013V8.6562ZM60.9773 14.7143V27.992H74.255L60.9773 14.7143Z"
          fill="#444A69"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.1631 46.3261C28.1631 44.727 29.4594 43.4307 31.0585 43.4307H61.9428C63.5419 43.4307 64.8382 44.727 64.8382 46.3261C64.8382 47.9252 63.5419 49.2215 61.9428 49.2215H31.0585C29.4594 49.2215 28.1631 47.9252 28.1631 46.3261Z"
          fill="#C1CAEB"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.1631 61.7684C28.1631 60.1694 29.4594 58.873 31.0585 58.873H61.9428C63.5419 58.873 64.8382 60.1694 64.8382 61.7684C64.8382 63.3675 63.5419 64.6638 61.9428 64.6638H31.0585C29.4594 64.6638 28.1631 63.3675 28.1631 61.7684Z"
          fill="#C1CAEB"
        />
      </svg>
      <span>Document name</span>
      <div className="mt-2 flex gap-2">
        <Button size="xs">View</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="xs">:</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="grid justify-items-center gap-2">
            <DropdownMenuItem className="flex w-full justify-center border-[1px] border-green-400 text-green-500 hover:cursor-pointer">
              Approve
            </DropdownMenuItem>
            <DropdownMenuItem className="flex w-full justify-center border-[1px] border-red-400 text-red-500 hover:cursor-pointer">
              Decline
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )

  return (
    <div className="grid w-full grid-cols-3 gap-4">
      <div className="col-span-3 flex w-full items-center justify-between gap-2">
        <span>KYB Documents</span>
        <div className="flex items-center gap-2">
          <Button
            onClick={async () => {
              verify.mutate({
                status: "active",
                userId,
                verify: true,
              })
            }}
          >
            {verify.isPending ? "Verifying..." : "Verify KYB status"}
          </Button>
          <Button variant="destructiveOutline">Reject</Button>
        </div>
      </div>
      <div className="col-span-3 mt-2 grid grid-cols-3 gap-3 md:grid-cols-4">
        {documents.length && documents.map((doc, index) => <Doc />)}
      </div>
    </div>
  )
})
