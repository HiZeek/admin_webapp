import { ColumnDef } from "@tanstack/react-table";
import Head from "next/head";
import { useRouter } from "next/router";
import { Icons } from "~/components/icons";
import { AdminDashboardLayout } from "~/components/layout";
import { cn } from "~/components/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { DataTable } from "~/components/ui/data-table";
import {
  DialogClose,
  DialogFooter,
  DialogItem,
} from "~/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export default function HistoryPage() {
  const { pathname } = useRouter();
  type Transaction = {
    id: string
    title: string
    amount: number
    fromEmail: string
    narration: string
    uuid: string
    date: Date
    status: "completed" | "canceled"
  }

  const transactions: Transaction[] = [
    {
      id: "1",
      title: "Fiat Deposit",
      amount: 100000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of naira",
      uuid: "asdcasdv-asdcassd-24sdcs",
      date: new Date(),
      status: "completed",
    },
    {
      id: "2",
      title: "Fiat Deposit",
      amount: 200000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "completed",
    },
    {
      id: "3",
      title: "Fiat Deposit",
      amount: 204300,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "canceled",
    },
    {
      id: "4",
      title: "Fiat Deposit",
      amount: 60000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "completed",
    },
    {
      id: "5",
      title: "Fiat Deposit",
      amount: 20000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "completed",
    },
    {
      id: "6",
      title: "Fiat Deposit",
      amount: 200900,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of naira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "canceled",
    },
    {
      id: "7",
      title: "Fiat Deposit",
      amount: 620000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "completed",
    },
    {
      id: "8",
      title: "Fiat Deposit",
      amount: 40000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "canceled",
    },
    {
      id: "9",
      title: "Fiat Deposit",
      amount: 300000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "completed",
    },
    {
      id: "10",
      title: "Fiat Deposit",
      amount: 4200000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "completed",
    },
    {
      id: "11",
      title: "Fiat Deposit",
      amount: 210000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "completed",
    },
    {
      id: "12",
      title: "Fiat Deposit",
      amount: 9800000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "completed",
    },
    {
      id: "13",
      title: "Fiat Deposit",
      amount: 9800000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "canceled",
    },
    {
      id: "14",
      title: "Fiat Deposit",
      amount: 2520000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "completed",
    },
    {
      id: "15",
      title: "Fiat Deposit",
      amount: 3200000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "canceled",
    },
    {
      id: "16",
      title: "Fiat Deposit",
      amount: 10900000,
      fromEmail: "miraclef60@gmail.com",
      narration: "Deposit of enaira",
      uuid: "34rfwa-ascdvw-24sdcs",
      date: new Date(),
      status: "completed",
    },
  ]

  // Column definition
  const columns: ColumnDef<Transaction>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => {
        return (
          <span className="flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.65963 2.45845C5.78427 2.54842 5.98528 2.75509 5.98528 2.75509C6.76559 3.48643 7.94089 5.30545 8.31832 6.22833C8.32622 6.22833 8.55005 6.77706 8.55882 7.03807V7.07281C8.55882 7.47278 8.335 7.84692 7.97512 8.03844C7.82677 8.1174 7.46592 8.19084 7.29182 8.22626C7.23416 8.238 7.19699 8.24556 7.19481 8.24778C6.68045 8.32617 5.89136 8.37784 5.02502 8.37784C4.11568 8.37784 3.29235 8.32617 2.7859 8.22996C2.77712 8.22996 2.31455 8.13465 2.16006 8.07318C1.93712 7.97786 1.7484 7.80327 1.62815 7.58591C1.54213 7.4122 1.5 7.2287 1.5 7.03807C1.5079 6.83764 1.63693 6.4635 1.69661 6.31563C2.07405 5.3402 3.30903 3.47753 4.06389 2.76399C4.14231 2.68441 4.23154 2.60105 4.29364 2.54304C4.32677 2.51208 4.35217 2.48835 4.36408 2.47626C4.5528 2.32839 4.78452 2.25 5.0338 2.25C5.25587 2.25 5.47882 2.31948 5.65963 2.45845ZM13.6715 7.62134C13.6715 8.01419 13.3581 8.33221 12.971 8.33221C12.5839 8.33221 12.2706 8.01419 12.2706 7.62134L12.0775 4.18722C12.0775 3.68657 12.4777 3.28125 12.971 3.28125C13.4643 3.28125 13.8637 3.68657 13.8637 4.18722L13.6715 7.62134ZM15.8399 9.9267C16.0629 10.0229 16.2516 10.1966 16.3718 10.414C16.4579 10.5877 16.5 10.7712 16.5 10.9627C16.4921 11.1623 16.3631 11.5373 16.3025 11.6852C15.926 12.6597 14.6901 14.5224 13.9361 15.2369C13.859 15.3146 13.7714 15.3963 13.7095 15.4541L13.7095 15.4541L13.7095 15.4541C13.6748 15.4864 13.6482 15.5113 13.6359 15.5237C13.4463 15.6716 13.2155 15.75 12.9671 15.75C12.7433 15.75 12.5203 15.6805 12.3404 15.5407C12.2157 15.4516 12.0147 15.2449 12.0147 15.2449C11.2335 14.5144 10.0591 12.6945 9.68168 11.7716C9.6729 11.7716 9.44995 11.2237 9.44118 10.9627V10.928C9.44118 10.5271 9.66412 10.153 10.0249 9.96144C10.1729 9.8833 10.5326 9.80967 10.7071 9.77395L10.7071 9.77395C10.7654 9.76202 10.803 9.75432 10.8052 9.75209C11.3196 9.6737 12.1086 9.62203 12.975 9.62203C13.8843 9.62203 14.7076 9.6737 15.2141 9.76991C15.222 9.76991 15.6855 9.86523 15.8399 9.9267ZM5.02915 9.6679C4.64206 9.6679 4.32871 9.98591 4.32871 10.3788L4.1356 13.8128C4.1356 14.3134 4.53586 14.7188 5.02915 14.7188C5.52244 14.7188 5.92181 14.3134 5.92181 13.8128L5.72959 10.3788C5.72959 9.98591 5.41623 9.6679 5.02915 9.6679Z"
                fill="#B8C1E0"
              />
            </svg>
            {row.getValue("title")}
          </span>
        )
      },
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)

        return (
          <div className="truncate text-right font-medium">{formatted}</div>
        )
      },
    },
    {
      accessorKey: "fromEmail",
      header: "Email",
    },
    {
      accessorKey: "narration",
      header: "Narration",
    },
    {
      accessorKey: "uuid",
      header: "TrxID",
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
              "text-red-400": status === "canceled",
              "text-green-500": status === "completed",
            })}
          >
            {status}
          </div>
        )
      },
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const transaction = row.original

        return transaction.status === "completed" ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <Icons.moreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(transaction.id)}
              >
                Copy transaction ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DialogItem
                triggerChildren="Flag"
                triggerClass="border-red-400 text-red-500 mb-2"
              >
                <div className="mb-4 grid items-center justify-items-center gap-4">
                  <svg
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M159.707 79.7077C159.707 123.729 124.021 159.415 79.9997 159.415C35.9783 159.415 0.291992 123.729 0.291992 79.7077C0.291992 35.6864 35.9783 0 79.9997 0C124.021 0 159.707 35.6864 159.707 79.7077ZM24.3462 79.7077C24.3462 110.444 49.2631 135.361 79.9997 135.361C110.736 135.361 135.653 110.444 135.653 79.7077C135.653 48.9711 110.736 24.0542 79.9997 24.0542C49.2631 24.0542 24.3462 48.9711 24.3462 79.7077Z"
                      fill="url(#paint0_linear_885_67002)"
                    />
                    <circle
                      cx="79.9989"
                      cy="79.7078"
                      r="29.8602"
                      fill="url(#paint1_linear_885_67002)"
                    />
                    <path
                      d="M82.779 67.2098C82.779 68.7439 81.5354 69.9875 80.0013 69.9875C78.4672 69.9875 77.2236 68.7439 77.2236 67.2098C77.2236 65.6757 78.4672 64.4321 80.0013 64.4321C81.5354 64.4321 82.779 65.6757 82.779 67.2098Z"
                      fill="url(#paint2_linear_885_67002)"
                    />
                    <path
                      d="M77.2236 75.5429C77.2236 74.0088 78.4672 72.7652 80.0013 72.7652C81.5354 72.7652 82.779 74.0088 82.779 75.5429V92.2091C82.779 93.7431 81.5354 94.9867 80.0013 94.9867C78.4672 94.9867 77.2236 93.7431 77.2236 92.2091V75.5429Z"
                      fill="url(#paint3_linear_885_67002)"
                    />
                    <rect
                      x="27.6648"
                      y="27.3748"
                      width="104.667"
                      height="104.667"
                      rx="52.3333"
                      stroke="url(#paint4_linear_885_67002)"
                      strokeWidth="6.44103"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_885_67002"
                        x1="79.9997"
                        y1="0"
                        x2="79.9997"
                        y2="159.415"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#444A69" stopOpacity="0.6" />
                        <stop offset="1" stopColor="#444A69" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_885_67002"
                        x1="79.9989"
                        y1="49.8477"
                        x2="79.9989"
                        y2="109.568"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFAC32" />
                        <stop offset="1" stopColor="#FFAC32" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_885_67002"
                        x1="80.0013"
                        y1="64.4321"
                        x2="80.0013"
                        y2="94.9867"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_885_67002"
                        x1="80.0013"
                        y1="64.4321"
                        x2="80.0013"
                        y2="94.9867"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_885_67002"
                        x1="79.9982"
                        y1="24.1543"
                        x2="79.9982"
                        y2="135.262"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#7E85A9" />
                        <stop offset="1" stopColor="#7E85A9" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span className="text-center text-lg font-medium">
                    Confirm flagging
                  </span>
                  <span className="text-center text-sm">
                    Are you sure you want to flag transaction with ID:
                    <b>{transaction.uuid}</b>
                  </span>
                </div>
                <DialogFooter>
                  <div className="flex w-full items-center justify-center space-x-4">
                    <DialogClose asChild>
                      <Button variant="ghost" size="lg">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button variant="default" size="lg">
                      Flag
                    </Button>
                  </div>
                </DialogFooter>
              </DialogItem>
              <DialogItem triggerChildren="Unflag">
                <div className="mb-4 grid items-center justify-items-center gap-4">
                  <svg
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M159.707 79.7077C159.707 123.729 124.021 159.415 79.9997 159.415C35.9783 159.415 0.291992 123.729 0.291992 79.7077C0.291992 35.6864 35.9783 0 79.9997 0C124.021 0 159.707 35.6864 159.707 79.7077ZM24.3462 79.7077C24.3462 110.444 49.2631 135.361 79.9997 135.361C110.736 135.361 135.653 110.444 135.653 79.7077C135.653 48.9711 110.736 24.0542 79.9997 24.0542C49.2631 24.0542 24.3462 48.9711 24.3462 79.7077Z"
                      fill="url(#paint0_linear_885_67002)"
                    />
                    <circle
                      cx="79.9989"
                      cy="79.7078"
                      r="29.8602"
                      fill="url(#paint1_linear_885_67002)"
                    />
                    <path
                      d="M82.779 67.2098C82.779 68.7439 81.5354 69.9875 80.0013 69.9875C78.4672 69.9875 77.2236 68.7439 77.2236 67.2098C77.2236 65.6757 78.4672 64.4321 80.0013 64.4321C81.5354 64.4321 82.779 65.6757 82.779 67.2098Z"
                      fill="url(#paint2_linear_885_67002)"
                    />
                    <path
                      d="M77.2236 75.5429C77.2236 74.0088 78.4672 72.7652 80.0013 72.7652C81.5354 72.7652 82.779 74.0088 82.779 75.5429V92.2091C82.779 93.7431 81.5354 94.9867 80.0013 94.9867C78.4672 94.9867 77.2236 93.7431 77.2236 92.2091V75.5429Z"
                      fill="url(#paint3_linear_885_67002)"
                    />
                    <rect
                      x="27.6648"
                      y="27.3748"
                      width="104.667"
                      height="104.667"
                      rx="52.3333"
                      stroke="url(#paint4_linear_885_67002)"
                      strokeWidth="6.44103"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_885_67002"
                        x1="79.9997"
                        y1="0"
                        x2="79.9997"
                        y2="159.415"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#444A69" stopOpacity="0.6" />
                        <stop offset="1" stopColor="#444A69" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_885_67002"
                        x1="79.9989"
                        y1="49.8477"
                        x2="79.9989"
                        y2="109.568"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFAC32" />
                        <stop offset="1" stopColor="#FFAC32" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_885_67002"
                        x1="80.0013"
                        y1="64.4321"
                        x2="80.0013"
                        y2="94.9867"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_885_67002"
                        x1="80.0013"
                        y1="64.4321"
                        x2="80.0013"
                        y2="94.9867"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_885_67002"
                        x1="79.9982"
                        y1="24.1543"
                        x2="79.9982"
                        y2="135.262"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#7E85A9" />
                        <stop offset="1" stopColor="#7E85A9" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span className="text-center text-lg font-medium">
                    Confirm Unflagging
                  </span>
                  <span className="text-center text-sm">
                    Are you sure you want to unflag transaction with ID:
                    <b>{transaction.uuid}</b>
                  </span>
                </div>
                <DialogFooter>
                  <div className="flex w-full items-center justify-center space-x-4">
                    <DialogClose asChild>
                      <Button variant="ghost" size="lg">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button variant="default" size="lg">
                      Unflag
                    </Button>
                  </div>
                </DialogFooter>
                {/* <DropdownMenuItem
                    // onClick={() => alert("Decline clicked")}
                    className="mt-2 cursor-pointer border border-red-400 text-center text-red-500"
                  >
                    Decline
                  </DropdownMenuItem> */}
              </DialogItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : null
      },
    },
  ]

  return (
    <AdminDashboardLayout pathname={pathname}>
      <Head>
        <title>Wrapcbdc | History</title>
        <meta
          name="description"
          content="WrapCBDC admin history page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container space-y-4 pb-16 pt-4">
        <div className="grid w-full grid-cols-3 gap-4">
          <div className="col-span-3 h-full rounded-lg bg-slate-800/40">
            <Card className="border-none bg-slate-800/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>View and manage all transaction history</CardTitle>
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
                  <DataTable columns={columns} data={transactions} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AdminDashboardLayout>
  )
}
