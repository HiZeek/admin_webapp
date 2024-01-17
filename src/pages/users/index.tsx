import Head from "next/head"
import { useEffect } from "react"
// import { useRouter } from "next/router"
import { useRouter } from "next/router"
// import Link from "next/link"
// import { buttonVariants } from "~/components/ui/button"
// import { siteConfig } from "@wrapcbdc/ui/config/site"
import { observer, useObservable } from "@legendapp/state/react"
import { ColumnDef } from "@tanstack/react-table"
// import { AccountStatus } from "@wrapcbdc/db"
import { useToast } from "~/components/hooks/use-toast"
import { DashIcons, Icons } from "~/components/icons"
import { AdminDashboardLayout } from "~/components/layout"
import { cn } from "~/components/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { DataTable } from "~/components/ui/data-table"
import { Input } from "~/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { api } from "~/utils/api"

const UsersPage = observer(() => {
  const { toast } = useToast()
  type Users = {
    id: string
    email: string
    name: string
    date: Date
    status: "unverified" | "active" | "under_review" | "freez"
    volume: number
  }

  const { push, pathname } = useRouter()

  // Column definition
  const columns: ColumnDef<Users>[] = [
    {
      accessorKey: "email",
      header: "Email address",
      // cell: ({ row }) => {
      //   return <span className="flex items-center">{row.}</span>
      // },
    },
    {
      accessorKey: "name",
      header: "Full name",
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => {
        const date = new Date(row.getValue("date"))
        const formatted = new Intl.DateTimeFormat("en-US", {
          // dateStyle: "short",
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }).format(date)
        return (
          <div className="truncate text-right font-medium">{formatted}</div>
        )
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string

        return (
          <div
            className={cn("capitalize", {
              "text-red-400": status === "unverified",
              "text-green-500": status === "active",
              "text-orange-300": status === "under_review",
            })}
          >
            {status}
          </div>
        )
      },
    },
    {
      accessorKey: "volume",
      header: "Transaction volume",
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const user = row.original

        return (
          <DashIcons.arrowRight
            className="hover:cursor-pointer"
            onClick={() => push(`/users/${user.id}`)}
          />
        )
      },
    },
  ]

  const users = useObservable<Users[]>([])

  const getAllUser = api.admin.users.getAllUser.useQuery()

  if (getAllUser.isError) {
    toast({
      title: "Fetching transactions",
      description: getAllUser.error.message,
      variant: "destructive",
    })
  }

  if (getAllUser.data) {
    if (getAllUser.data.length) {
      users.set(
        getAllUser.data.map((val, idx) => ({
          id: val.id,
          email: val.email,
          name: val.full_name,
          date: val.createdAt,
          status: val.status,
          volume: val.transactions.length,
        }))
      )
    }
  }

  useEffect(() => {}, [users])

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
                <CardTitle>View and manage all users</CardTitle>
                <div className="flex flex-row items-center">
                  <Input
                    type="search"
                    placeholder="Search users"
                    prefix={<Icons.search />}
                    className="mr-5"
                  />
                  <span className="text-muted-foreground mr-2 text-sm">
                    Filter by:
                  </span>
                  <Select>
                    <SelectTrigger className="w-[180px] border-none">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="last_week">Last week</SelectItem>
                      <SelectItem value="10_days">10 days</SelectItem>
                      <SelectItem value="30_days">30 days</SelectItem>
                      <SelectItem value="90_days">90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="w-full overflow-hidden bg-slate-900/50 p-4">
                  <DataTable columns={columns} data={users.get()} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AdminDashboardLayout>
  )
})

export default UsersPage
