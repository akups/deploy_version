import { ApolloServer } from "apollo-server-micro";
import type { NextApiRequest, NextApiResponse } from "next";
import { typeDefs } from "./graphl/schema";
import { resolvers } from "./graphl/resolvers"
import Cors from "cors";



// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  })
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: resolvers,
});

const startServer: any = apolloServer.start()



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await startServer;
  await runMiddleware(req, res, cors);
  const graphqlHandler = apolloServer.createHandler({ path: "/api/graphql" });
  return graphqlHandler(req, res);
};
