import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { AdminDashboardLayout } from "~/components/layout"
import { cn } from "~/components/lib/utils"
import { Avatar, AvatarFallback } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Checkbox } from "~/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { Separator } from "~/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"

export default function SettingsPage() {
  const { pathname } = useRouter()
  return (
    <AdminDashboardLayout pathname={pathname}>
      <Head>
        <title>Wrapcbdc | History</title>
        <meta
          name="description"
          content="Wrap CBDC | stable coin pegged to CBDC"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container space-y-4 pb-16 pt-4">
        <div className="grid w-full grid-cols-3 gap-4">
          <div className="col-span-3">
            <Tabs defaultValue="general" className="w-full">
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="preference">Preference</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <Card className="border-none">
                  <CardHeader className="p-0">
                    <CardTitle>General</CardTitle>
                    <CardDescription>
                      Manage your Wrapped CBDC account
                    </CardDescription>
                  </CardHeader>
                  <Separator className="my-6" />
                  <CardContent className="grid grid-cols-3 items-start p-0">
                    <div className="col-span-2">
                      <div className="grid gap-4">
                        <span className="font-medium">Company Logo</span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Avatar className="h-[96px] w-[96px] border border-blue-600 bg-transparent text-blue-800">
                              <AvatarFallback>AN</AvatarFallback>
                            </Avatar>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>
                              Upload a photo...
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Revert to avatar
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <span className="-mt-1 text-xs font-light">
                          Pick a logo for your account. Recommended size is
                          256x256
                        </span>
                        <Separator className="mb-6" />
                      </div>
                      <div className="grid gap-4">
                        <span className="font-medium">General</span>
                        <Label className="text-xs font-light">
                          Legal Full Name *
                          <Input placeholder="Alex Brown" className="mt-2" />
                        </Label>
                        <Label className="text-xs font-light">
                          <span className="mb-2">Email address *</span>
                          <Input
                            placeholder="alexbrown@cbdc.com"
                            className=""
                            suffix={
                              <Checkbox
                                className={cn("rounded", {
                                  "bg-green-400": false,
                                })}
                                checked={false}
                              />
                            }
                          />
                        </Label>
                        <Label className="text-xs font-light">
                          Country of residence
                          <Select>
                            <SelectTrigger className="mt-2 w-full">
                              <SelectValue placeholder="select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="nigeria">Nigeria</SelectItem>
                              <SelectItem value="algeria">Algeria</SelectItem>
                              <SelectItem value="ghana">Ghana</SelectItem>
                              <SelectItem value="cameroun">Cameroun</SelectItem>
                              <SelectItem value="kenya">Kenya</SelectItem>
                            </SelectContent>
                          </Select>
                        </Label>
                      </div>
                      <Button className="mt-4">Update</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="preference">
                <Card className="border-none">
                  <CardHeader className="p-0">
                    <CardTitle>Preference</CardTitle>
                    <CardDescription>Manage your preference</CardDescription>
                  </CardHeader>
                  <Separator className="my-6" />
                  <CardContent className="grid grid-cols-3 items-start p-0">
                    <div className="col-span-2">
                      <div className="grid gap-4">
                        <div className="flex w-full items-center justify-between">
                          <div className="grid gap-4">
                            <span className="font-medium">Change Currency</span>
                            <span className="-mt-1 text-xs font-light">
                              Change to your preferred currency
                            </span>
                          </div>
                          <Select>
                            <SelectTrigger className="mt-2 w-[120px]">
                              <SelectValue placeholder="NGN" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ngn">NGN</SelectItem>
                              <SelectItem value="usd">USD</SelectItem>
                              <SelectItem value="ghc">GHC</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Separator className="mb-6" />
                      </div>
                      <div className="grid gap-4">
                        <div className="flex w-full items-center justify-between">
                          <div className="grid gap-4">
                            <span className="font-medium">Logout Timer</span>
                            <span className="-mt-1 text-xs font-light">
                              This changes how long you can be idle before the
                              app logs you out
                            </span>
                          </div>
                          <Select>
                            <SelectTrigger className="mt-2 w-[120px]">
                              <SelectValue placeholder="5 Mins" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="5_mins">5 Mins</SelectItem>
                              <SelectItem value="10_mins">10 Mins</SelectItem>
                              <SelectItem value="15_mins">15Mins</SelectItem>
                              <SelectItem value="20_mins">20 Mins</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Separator className="mb-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="security">
                <Card className="border-none">
                  <CardHeader className="p-0">
                    <CardTitle>Security</CardTitle>
                    <CardDescription>
                      To increase your account security, it is recommended that
                      you enable 2FA, including Google authenticator/Yubikey.
                    </CardDescription>
                  </CardHeader>
                  <Separator className="my-6" />
                  <CardContent className="grid grid-cols-3 items-start p-0">
                    <div className="col-span-3">
                      <div className="grid gap-10">
                        <div className="flex cursor-pointer items-center space-x-3">
                          <svg
                            width="64"
                            height="57"
                            viewBox="0 0 64 57"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.7"
                              d="M45.7922 0.461915C47.3697 0.461915 48.8275 1.29563 49.6163 2.649L63.4084 26.3129C64.1972 27.6663 64.1972 29.3337 63.4084 30.6871L49.6163 54.351C48.8275 55.7044 47.3697 56.5381 45.7921 56.5381H18.2079C16.6303 56.5381 15.1725 55.7044 14.3837 54.351L0.591592 30.6871C-0.197198 29.3337 -0.197197 27.6663 0.591594 26.3129L14.3837 2.64899C15.1725 1.29562 16.6303 0.461914 18.2079 0.461914L45.7922 0.461915Z"
                              fill="#24293D"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M39.0147 32.1051C39.5943 32.1051 40.0647 31.6347 40.0647 31.0551V28.4623C40.0647 27.8827 39.5943 27.4123 39.0147 27.4123H31.0459C30.5923 25.9185 29.2175 24.8209 27.5767 24.8209C25.5691 24.8209 23.9353 26.4547 23.9353 28.4623C23.9353 30.4713 25.5691 32.1051 27.5767 32.1051C29.2175 32.1051 30.5923 31.0075 31.0459 29.5123H34.0027V31.0551C34.0027 31.6347 34.4731 32.1051 35.0527 32.1051C35.6323 32.1051 36.1027 31.6347 36.1027 31.0551V29.5123H37.9647V31.0551C37.9647 31.6347 38.4351 32.1051 39.0147 32.1051ZM25.9324 14.4619H38.069C42.8122 14.4619 46 17.7911 46 22.7457V34.1795C46 39.1341 42.8122 42.4619 38.0676 42.4619H25.9324C21.1878 42.4619 18 39.1341 18 34.1795V22.7457C18 17.7911 21.1878 14.4619 25.9324 14.4619ZM26.0339 28.4632C26.0339 27.612 26.7269 26.9204 27.5767 26.9204C28.4265 26.9204 29.1195 27.612 29.1195 28.4632C29.1195 29.313 28.4265 30.0046 27.5767 30.0046C26.7269 30.0046 26.0339 29.313 26.0339 28.4632Z"
                              fill="#545DE9"
                            />
                          </svg>

                          <div className="flex-1 space-y-1 truncate">
                            <p className="text-sn font-medium leading-none">
                              Google Authenticator
                            </p>

                            <p className="text-muted-foreground max-w-min flex-wrap text-xs text-slate-200/60">
                              Use the Google Authenticator app
                              <br /> to generate one time security codes
                            </p>
                          </div>
                          <span className="flex items-center text-xs">
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mr-2"
                            >
                              <rect
                                y="0.5"
                                width="24"
                                height="24"
                                rx="12"
                                fill="white"
                                fill-opacity="0.1"
                              />
                              <rect
                                width="16"
                                height="16"
                                transform="translate(4 4.5)"
                                fill="white"
                                style={{ mixBlendMode: "multiply" }}
                                // className="mix-blend-multiply"
                              />
                              <path
                                d="M16 9.2L15.3 8.5L12 11.8L8.7 8.5L8 9.2L11.3 12.5L8 15.8L8.7 16.5L12 13.2L15.3 16.5L16 15.8L12.7 12.5L16 9.2Z"
                                fill="#545DE9"
                              />
                            </svg>
                            Not linked
                          </span>
                          <Link passHref href="/settings/authenticator">
                            <Button variant="subtle">Enable</Button>
                          </Link>
                        </div>
                        <div className="flex cursor-pointer items-center space-x-3">
                          <svg
                            width="64"
                            height="57"
                            viewBox="0 0 64 57"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.7"
                              d="M45.7922 0.461915C47.3697 0.461915 48.8275 1.29563 49.6163 2.649L63.4084 26.3129C64.1972 27.6663 64.1972 29.3337 63.4084 30.6871L49.6163 54.351C48.8275 55.7044 47.3697 56.5381 45.7921 56.5381H18.2079C16.6303 56.5381 15.1725 55.7044 14.3837 54.351L0.591592 30.6871C-0.197198 29.3337 -0.197197 27.6663 0.591594 26.3129L14.3837 2.64899C15.1725 1.29562 16.6303 0.461914 18.2079 0.461914L45.7922 0.461915Z"
                              fill="#24293D"
                            />
                            <g clipPath="url(#clip0_1563_26637)">
                              <rect
                                x="25.8203"
                                y="19.5349"
                                width="13.3598"
                                height="28.6089"
                                fill="#545DE9"
                              />
                              <rect
                                x="27.3945"
                                y="9.14355"
                                width="10.211"
                                height="10.391"
                                fill="#444A69"
                              />
                              <rect
                                x="28.6094"
                                y="10.8071"
                                width="1.21453"
                                height="8.72661"
                                fill="#757DEE"
                              />
                              <rect
                                x="30.8125"
                                y="11.8867"
                                width="1.21453"
                                height="7.64703"
                                fill="#757DEE"
                              />
                              <rect
                                x="33.0176"
                                y="11.8867"
                                width="1.21453"
                                height="7.64703"
                                fill="#757DEE"
                              />
                              <rect
                                x="35.2207"
                                y="10.8081"
                                width="1.21453"
                                height="8.72661"
                                fill="#757DEE"
                              />
                              <circle
                                cx="32.5231"
                                cy="33.8385"
                                r="4.09341"
                                fill="#24293D"
                              />
                              <path
                                d="M32.1296 33.6816H31.6348L32.6469 31.3425H33.1867L32.8043 32.1522L33.4341 33.6816H32.8718L32.5344 32.7145L32.1296 33.6816Z"
                                fill="#757DEE"
                              />
                              <path
                                d="M31.9165 34.7161C32.3365 34.8716 32.711 34.8716 33.131 34.7161M31.5341 35.4358C32.3631 35.7639 32.7879 35.7457 33.4909 35.4358M31.1967 36.1105C32.2638 36.4898 32.877 36.5099 33.9857 36.1105M30.8594 36.8752C32.2345 37.346 32.9614 37.3353 34.2106 36.8752"
                                stroke="#757DEE"
                                stroke-width="0.17993"
                                stroke-linecap="round"
                              />
                              <path
                                d="M32.5232 42.1157L33.7827 43.3752L32.5232 44.6347L31.2637 43.3752L32.5232 42.1157Z"
                                fill="#3640D7"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1563_26637">
                                <rect
                                  width="13.3598"
                                  height="38.9998"
                                  fill="white"
                                  transform="translate(25.8203 9.14331)"
                                />
                              </clipPath>
                            </defs>
                          </svg>

                          <div className="flex-1 space-y-1 truncate">
                            <p className="text-sn font-medium leading-none">
                              Yubikey
                            </p>

                            <p className="text-muted-foreground max-w-min flex-wrap text-xs text-slate-200/60">
                              Security keys are a more secure second step.
                              <br />
                              You can add a physical key.
                            </p>
                          </div>
                          <span className="flex items-center text-xs">
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mr-2"
                            >
                              <rect
                                y="0.5"
                                width="24"
                                height="24"
                                rx="12"
                                fill="white"
                                fill-opacity="0.1"
                              />
                              <rect
                                width="16"
                                height="16"
                                transform="translate(4 4.5)"
                                fill="white"
                                style={{ mixBlendMode: "multiply" }}
                                // className="mix-blend-multiply"
                              />
                              <path
                                d="M16 9.2L15.3 8.5L12 11.8L8.7 8.5L8 9.2L11.3 12.5L8 15.8L8.7 16.5L12 13.2L15.3 16.5L16 15.8L12.7 12.5L16 9.2Z"
                                fill="#545DE9"
                              />
                            </svg>
                            Not linked
                          </span>
                          <Button variant="subtle">Enable</Button>
                        </div>
                        <div className="flex cursor-pointer items-center space-x-3">
                          <svg
                            width="64"
                            height="57"
                            viewBox="0 0 64 57"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.7"
                              d="M45.7922 0.461915C47.3697 0.461915 48.8275 1.29563 49.6163 2.649L63.4084 26.3129C64.1972 27.6663 64.1972 29.3337 63.4084 30.6871L49.6163 54.351C48.8275 55.7044 47.3697 56.5381 45.7921 56.5381H18.2079C16.6303 56.5381 15.1725 55.7044 14.3837 54.351L0.591592 30.6871C-0.197198 29.3337 -0.197197 27.6663 0.591594 26.3129L14.3837 2.64899C15.1725 1.29562 16.6303 0.461914 18.2079 0.461914L45.7922 0.461915Z"
                              fill="#24293D"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18 22.6712C18 19.7942 20.3323 17.4619 23.2093 17.4619H40.7907C43.6677 17.4619 46 19.7942 46 22.6712V33.741C46 36.618 43.6677 38.9503 40.7907 38.9503H23.2093C20.3323 38.9503 18 36.618 18 33.741V22.6712ZM19.3868 23.2512C19.6058 22.7582 20.1831 22.5362 20.676 22.7553L31.868 27.7296C31.9522 27.767 32.0483 27.767 32.1325 27.7296L43.3245 22.7553C43.8174 22.5362 44.3946 22.7582 44.6137 23.2512C44.8328 23.7441 44.6108 24.3214 44.1179 24.5404L37.6813 27.4011L44.2765 31.9607C44.7202 32.2675 44.8312 32.8759 44.5244 33.3196C44.2177 33.7633 43.6093 33.8744 43.1656 33.5676L36.2451 28.7831C36.15 28.7173 36.0271 28.707 35.9223 28.7559L32.9639 30.1365C32.353 30.4215 31.6472 30.4215 31.0363 30.1365L28.0779 28.7559C27.9731 28.707 27.8502 28.7173 27.7551 28.7831L20.8346 33.5676C20.3909 33.8744 19.7825 33.7633 19.4757 33.3196C19.169 32.8759 19.28 32.2675 19.7237 31.9607L26.319 27.401L19.8826 24.5404C19.3897 24.3214 19.1677 23.7441 19.3868 23.2512Z"
                              fill="#545DE9"
                            />
                          </svg>

                          <div className="flex-1 space-y-1 truncate">
                            <p className="text-sn font-medium leading-none">
                              Email Address Verification
                            </p>

                            <p className="text-muted-foreground max-w-min flex-wrap text-xs text-slate-200/60">
                              Protect your account and transactions..
                            </p>
                          </div>
                          <span className="flex items-center text-xs">
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mr-2"
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
                            al***@cbdc.com
                          </span>
                          {/* <Button variant="subtle">Enable</Button> */}
                        </div>
                        <Separator className="mb-6" />
                      </div>
                      <div className="grid gap-4">
                        <span className="font-medium">Advanced Security</span>
                        <div className="flex cursor-pointer items-center space-x-3">
                          <svg
                            width="64"
                            height="57"
                            viewBox="0 0 64 57"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.7"
                              d="M45.7922 0.461915C47.3697 0.461915 48.8275 1.29563 49.6163 2.649L63.4084 26.3129C64.1972 27.6663 64.1972 29.3337 63.4084 30.6871L49.6163 54.351C48.8275 55.7044 47.3697 56.5381 45.7921 56.5381H18.2079C16.6303 56.5381 15.1725 55.7044 14.3837 54.351L0.591592 30.6871C-0.197198 29.3337 -0.197197 27.6663 0.591594 26.3129L14.3837 2.64899C15.1725 1.29562 16.6303 0.461914 18.2079 0.461914L45.7922 0.461915Z"
                              fill="#24293D"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M39.363 22.3233V24.3678C41.6594 25.0846 43.3327 27.1635 43.3327 29.6465V36.2291C43.3327 39.303 40.7842 41.7953 37.6423 41.7953H26.3577C23.2145 41.7953 20.666 39.303 20.666 36.2291V29.6465C20.666 27.1635 22.3406 25.0846 24.6357 24.3678V22.3233C24.6493 18.3484 27.9416 15.1287 31.979 15.1287C36.0707 15.1287 39.363 18.3484 39.363 22.3233ZM32.0061 17.4474C34.7565 17.4474 36.992 19.6336 36.992 22.3233V24.0803H27.0067V22.2968C27.0203 19.6204 29.2558 17.4474 32.0061 17.4474ZM33.1848 34.4019C33.1848 35.0512 32.6565 35.5679 31.9926 35.5679C31.3422 35.5679 30.8139 35.0512 30.8139 34.4019V31.4604C30.8139 30.8244 31.3422 30.3077 31.9926 30.3077C32.6565 30.3077 33.1848 30.8244 33.1848 31.4604V34.4019Z"
                              fill="#545DE9"
                            />
                          </svg>

                          <div className="flex-1 space-y-1 truncate">
                            <p className="text-sn font-medium leading-none">
                              Login Password
                            </p>

                            <p className="text-muted-foreground max-w-min flex-wrap text-xs text-slate-200/60">
                              Login password is used to log in to your account.
                            </p>
                          </div>
                          <Button variant="subtle">Change</Button>
                        </div>
                        {/* <Separator className="mb-6" /> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </AdminDashboardLayout>
  )
}
