// import { createNextApiHandler } from "@trpc/server/adapters/next";

import { NextApiHandler } from "next";

// import { appRouter, createTRPCContext } from "@wrapcbdc/api";

// // export API handler
// export default createNextApiHandler({
//   router: appRouter,
//   createContext: createTRPCContext,
//   batching: { enabled: false },
// });

// If you need to enable cors, you can do so like this:
// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   // Enable cors
//   await cors(req, res);

//   // Let the tRPC handler do its magic
//   return createNextApiHandler({
//     router: appRouter,
//     createContext,
//   })(req, res);
// };

export default function handler(): NextApiHandler {
  return (req, res) => {
    // respond with a default status
    res.status(200).json({
      code: 200,
      message: "Successfully",
    })
  };
}

// export default handler;
