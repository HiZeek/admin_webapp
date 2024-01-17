import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { AdminDashboardLayout } from "~/components/layout"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Separator } from "~/components/ui/separator"

export default function AuthPage() {
  const { pathname } = useRouter()
  return (
    <AdminDashboardLayout pathname={pathname}>
      <Head>
        <title>Wrapcbdc | Google Authenticator</title>
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
            <Link className="flex items-center" href="/settings">
              <svg
                className="mr-2"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.87373 8.99504L9.87258 8.72947C9.86346 7.67611 9.79996 6.7363 9.69045 6.14072C9.69045 6.12998 9.571 5.53929 9.49491 5.34267C9.37546 5.05847 9.15946 4.81724 8.88865 4.6644C8.67183 4.55535 8.44438 4.5 8.20629 4.5C8.01913 4.50867 7.71048 4.60285 7.49019 4.68182L7.30712 4.75197C6.09459 5.23361 3.77671 6.80742 2.88899 7.76987L2.82355 7.83715L2.53145 8.15238C2.34736 8.39361 2.25 8.68854 2.25 9.00578C2.25 9.28998 2.33673 9.57417 2.51018 9.80384C2.56211 9.87824 2.64575 9.9737 2.7202 10.0544L3.0045 10.352C3.98284 11.3432 6.10114 12.7336 7.19912 13.1943C7.19912 13.2042 7.88148 13.4893 8.20629 13.5H8.24965C8.74792 13.5 9.21346 13.2158 9.45155 12.7565C9.51659 12.6309 9.57898 12.3849 9.62643 12.1689L9.71173 11.761C9.80909 11.105 9.87373 10.0988 9.87373 8.99504ZM14.6226 10.1388C15.2452 10.1388 15.75 9.62903 15.75 9.00033C15.75 8.37164 15.2452 7.86191 14.6226 7.86191L11.8481 8.10727C11.3597 8.10727 10.9637 8.5063 10.9637 9.00033C10.9637 9.49354 11.3597 9.89339 11.8481 9.89339L14.6226 10.1388Z"
                  fill="#AEB2FE"
                />
              </svg>

              <span className="text-[#AEB2FE]">Security</span>
            </Link>
            <Card className="w-full border-none">
              <CardHeader className="text-center">
                <CardTitle>Enable Google Authenticator</CardTitle>
                <CardDescription>
                  Follow the guide below to set up Google authenticator for
                  additional layer of security.
                </CardDescription>
              </CardHeader>
              <Separator className="my-0" />
              <CardContent>
                <div className="mx-auto mt-4 rounded-lg bg-slate-700/40 p-4 md:max-w-[538px]">
                  <Stepper />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AdminDashboardLayout>
  )
}

const Stepper = () => {
  return (
    // <!-- component -->
    <div className="w-full py-6">
      <div className="flex">
        <div className="w-1/4">
          <div className="relative mb-2">
            <div className="mx-auto flex h-10 w-10 items-center rounded-full bg-green-500 text-lg text-white">
              <span className="w-full text-center text-white">
                <svg
                  className="w-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="text-center text-xs md:text-base">Select Server</div>
        </div>

        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="align-center absolute flex content-center items-center align-middle"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="align-center w-full flex-1 items-center rounded bg-gray-200 align-middle">
                <div
                  className="w-0 rounded bg-green-300 py-1"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>

            <div className="mx-auto flex h-10 w-10 items-center rounded-full bg-green-500 text-lg text-white">
              <span className="w-full text-center text-white">
                <svg
                  className="w-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="text-center text-xs md:text-base">Add User</div>
        </div>

        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="align-center absolute flex content-center items-center align-middle"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="align-center w-full flex-1 items-center rounded bg-gray-200 align-middle">
                <div
                  className="w-0 rounded bg-green-300 py-1"
                  style={{ width: "33%" }}
                ></div>
              </div>
            </div>

            <div className="mx-auto flex h-10 w-10 items-center rounded-full border-2 border-gray-200 bg-white text-lg text-white">
              <span className="w-full text-center text-gray-600">
                <svg
                  className="w-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="text-center text-xs md:text-base">Setting</div>
        </div>

        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="align-center absolute flex content-center items-center align-middle"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="align-center w-full flex-1 items-center rounded bg-gray-200 align-middle">
                <div
                  className="w-0 rounded bg-green-300 py-1"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <div className="mx-auto flex h-10 w-10 items-center rounded-full border-2 border-gray-200 bg-white text-lg text-white">
              <span className="w-full text-center text-gray-600">
                <svg
                  className="w-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="text-center text-xs md:text-base">Finished</div>
        </div>
      </div>
    </div>
  )
}
