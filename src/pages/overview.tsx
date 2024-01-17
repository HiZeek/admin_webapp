import Head from "next/head"
// import { siteConfig } from "@wrapcbdc/ui/config/site"
import { observer } from "@legendapp/state/react"
import { useRouter } from "next/router"
import { toast } from "~/components/hooks/use-toast"
import { Icons } from "~/components/icons"
import { AdminDashboardLayout } from "~/components/layout"
import { Avatar, AvatarFallback } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Label } from "~/components/ui/label"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { Statistics } from "~/components/ui/statistics"
import { api } from "~/utils/api"

const OverviewPage = observer(() => {
  const { pathname } = useRouter()
  const recentUsers = api.admin.users.getRecentUsers.useQuery()
  if (recentUsers.isError) {
    console.log(recentUsers.error, ":::data_recentUsers")
    toast({
      title: "Error fetching recent users",
      description: recentUsers.error.message,
      variant: "destructive",
    })
  }

  const verifiedUserCount = api.admin.users.verifiedUserCount.useQuery()

  if (verifiedUserCount.isError) {
    console.error(verifiedUserCount.error, ":::error_verifiedUserCount")
    toast({
      title: "Error getting verified user count",
      description: verifiedUserCount.error.message,
      variant: "destructive",
    })
  }

  const transactionCount = api.admin.transaction.transactionCount.useQuery()

  if (transactionCount.isError) {
    console.error(transactionCount.error, ":::error_transactionCount")
    toast({
      title: "Error getting transaction count",
      description: transactionCount.error.message,
      variant: "destructive",
    })
  }

  return (
    <AdminDashboardLayout pathname={pathname}>
      <Head>
        <title>Wrapcbdc | Overview</title>
        <meta
          name="description"
          content="Wrap CBDC | stable coin pegged to CBDC"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container space-y-4 pb-16 pt-4">
        <Statistics
          verifiedUserCount={verifiedUserCount.data}
          transactionCount={transactionCount.data}
        />
        <div className="grid w-full grid-cols-3 gap-4">
          <div className="h-full w-full rounded-lg bg-slate-800/40 md:col-span-3 lg:col-span-2">
            <Card className="border-none">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Transaction Count</CardTitle>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="select date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="last_week">Last week</SelectItem>
                    <SelectItem value="10_days">10 days</SelectItem>
                    <SelectItem value="30_days">30 days</SelectItem>
                    <SelectItem value="90_days">90 days</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="grid">
                    <span className="text-base text-slate-300/50">
                      Total trade
                    </span>
                    <span className="font-sans text-lg font-bold text-white">
                      0 cNGN
                    </span>
                  </div>
                  <div className="flex items-center">
                    <RadioGroup
                      defaultValue="deposit"
                      className="flex flex-row items-center space-x-4"
                    >
                      <div className="flex items-center space-x-1">
                        <RadioGroupItem value="deposit" id="deposit" />
                        <Label htmlFor="deposit">Deposit</Label>
                      </div>
                      <div className="flex items-center space-x-1">
                        <RadioGroupItem value="redeem" id="redeem" />
                        <Label htmlFor="redeem">Redeem</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Button size="sm" variant="subtle">
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="h-full max-h-[640px] overflow-y-scroll rounded-lg bg-slate-800/40 md:hidden lg:flex">
            <Card className="border-none">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>New Users</CardTitle>
                <Button
                  size="sm"
                  variant="link"
                  className="items-center space-x-2"
                >
                  <span className="text-[#AEB2FE]">View all</span>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentUsers.data ? (
                    recentUsers.data.map((user) => (
                      <div
                        className="flex cursor-pointer items-center space-x-3"
                        key={user.id}
                      >
                        <Avatar className="h-10 w-10 rounded-full border border-purple-200">
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1 truncate">
                          <p className="text-sn font-medium leading-none">
                            {user.email}
                          </p>
                          {!user.email_verified ? (
                            <p className="text-muted-foreground text-sm text-red-400">
                              unverified
                            </p>
                          ) : (
                            <p className="text-muted-foreground text-sm text-green-400">
                              verified
                            </p>
                          )}
                        </div>
                        <Icons.chevronArrowRight />
                      </div>
                    ))
                  ) : (
                    <span>No recent users yet</span>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-3 h-full rounded-lg bg-slate-800/40">
            <Card className="border-none">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Transaction</CardTitle>
                <Button
                  size="sm"
                  variant="link"
                  className="items-center space-x-2"
                >
                  <span className="text-[#AEB2FE]">View all</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.02919 10.0055L9.03046 10.3006C9.0406 11.471 9.11115 12.5152 9.23283 13.177C9.23283 13.1889 9.36555 13.8452 9.4501 14.0637C9.58282 14.3795 9.82282 14.6475 10.1237 14.8173C10.3646 14.9385 10.6174 15 10.8819 15C11.0899 14.9904 11.4328 14.8857 11.6776 14.798L11.881 14.72C13.2282 14.1849 15.8037 12.4362 16.79 11.3668L16.8627 11.2921L17.1873 10.9418C17.3918 10.6738 17.5 10.3461 17.5 9.99357C17.5 9.6778 17.4036 9.36203 17.2109 9.10685C17.1532 9.02417 17.0603 8.91811 16.9776 8.82849L16.6617 8.49782C15.5746 7.39643 13.221 5.85153 12.001 5.33964C12.001 5.32862 11.2428 5.01193 10.8819 5H10.8337C10.2801 5 9.76282 5.31577 9.49828 5.82614C9.42601 5.96567 9.35669 6.23898 9.30396 6.47903L9.20919 6.93226C9.10101 7.6611 9.02919 8.77914 9.02919 10.0055ZM3.75271 8.73472C3.0609 8.73472 2.5 9.30108 2.5 9.99963C2.5 10.6982 3.0609 11.2645 3.75271 11.2645L6.8354 10.9919C7.37812 10.9919 7.81812 10.5486 7.81812 9.99963C7.81812 9.45162 7.37812 9.00734 6.8354 9.00734L3.75271 8.73472Z"
                      fill="#AEB2FE"
                    />
                  </svg>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-24">
                  <div className="flex flex-col">
                    <svg
                      width="96"
                      height="97"
                      viewBox="0 0 96 97"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M64 8.5H34C29.5817 8.5 26 12.0817 26 16.5V80.5C26 84.9183 29.5817 88.5 34 88.5H76C80.4183 88.5 84 84.9183 84 80.5V28.5H72C67.5817 28.5 64 24.9183 64 20.5V8.5ZM36 37.5H74V41.5H36V37.5ZM36 46.5H74V50.5H36V46.5ZM74 55.5H36V59.5H74V55.5Z"
                        fill="url(#paint0_linear_1520_15198)"
                      />
                      <g opacity="0.3">
                        <path
                          d="M84.0002 28.5H72.0002C67.5819 28.5 64.0002 24.9183 64.0002 20.5V8.5L84.0002 28.5Z"
                          fill="#929AA5"
                        />
                        <path
                          d="M91.8138 63.5H89.0027C88.7563 63.5 88.5272 63.6267 88.4023 63.8333L87.0002 66.1667C86.8752 66.3733 86.8752 66.6267 87.0002 66.8333L88.4023 69.1667C88.5272 69.3733 88.7563 69.5 89.0027 69.5H91.8103C92.0567 69.5 92.2857 69.3733 92.4107 69.1667L93.8128 66.8333C93.9377 66.6267 93.9377 66.3733 93.8128 66.1667L92.4107 63.8333C92.2892 63.6267 92.0602 63.5 91.8138 63.5Z"
                          fill="#929AA5"
                        />
                        <path
                          d="M37.001 14.5H34.1899C33.9435 14.5 33.7144 14.6267 33.5895 14.8333L32.1874 17.1667C32.0625 17.3733 32.0625 17.6267 32.1874 17.8333L33.5895 20.1667C33.7144 20.3733 33.9435 20.5 34.1899 20.5H36.9975C37.2439 20.5 37.473 20.3733 37.5979 20.1667L39 17.8333C39.1249 17.6267 39.1249 17.3733 39 17.1667L37.5979 14.8333C37.4764 14.6267 37.2474 14.5 37.001 14.5Z"
                          fill="#929AA5"
                        />
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 85.4949L19.7024 77.7925L22.7069 80.798L15.0045 88.5005L12 85.4949Z"
                        fill="#404654"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M36.8752 72.124C36.8752 67.4298 33.0702 63.6248 28.376 63.6248C23.6818 63.6248 19.8768 67.4298 19.8768 72.124C19.8768 76.8183 23.6818 80.6233 28.376 80.6233C33.0702 80.6233 36.8752 76.8183 36.8752 72.124ZM39 72.124C39 66.2564 34.2436 61.5 28.376 61.5C22.5083 61.5 17.752 66.2564 17.752 72.124C17.752 77.9917 22.5083 82.7481 28.376 82.7481C34.2436 82.7481 39 77.9917 39 72.124Z"
                        fill="#404654"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1520_15198"
                          x1="55"
                          y1="8.5"
                          x2="55"
                          y2="88.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#929AA5" stopOpacity="0.1" />
                          <stop
                            offset="1"
                            stopColor="#929AA5"
                            stopOpacity="0.25"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-center">No recent activity</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AdminDashboardLayout>
  )
})

export default OverviewPage
