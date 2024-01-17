import { QueryCache } from "@tanstack/react-query"
import { httpLink, loggerLink } from "@trpc/client"
import { createTRPCNext } from "@trpc/next"
// import type { AppRouter } from "@wrapcbdc/api"
import superjson from "superjson"
import { toast } from "~/components/hooks/use-toast"

export const getBaseUrl = () => {
  // if (typeof window !== "undefined") return "" // browser should use relative url
  
  switch(process.env.NODE_ENV) {
    case 'development':
      return process.env.ASC_API_DEV_URL;
    case 'test':
      return process.env.ASC_API_STAGING_URL;
    case 'production':
      return process.env.ASC_API_PROD_URL;
  }
}

export const api: any = createTRPCNext({
  config() {
    return {
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpLink({
          url: `${getBaseUrl()}/admin/trpc`,
        }),
      ],
      queryClientConfig: {
        queryCache: new QueryCache({
          onError(error, query) {
            console.log(error, query, ":::Error object")
            toast({
              title: error.name,
              description: error.message,
              variant: "destructive",
            })
          },
        }),
      },
    }
  },
  ssr: false,
})

// export { type RouterInputs, type RouterOutputs } from "@wrapcbdc/api"
