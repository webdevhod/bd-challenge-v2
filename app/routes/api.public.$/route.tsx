import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../../shopify.server";

// Feel free to use other tools like "hono" to handle the proxied api requests!

export const loader = async (args: LoaderFunctionArgs) => {
  const { admin } = await authenticate.public.appProxy(args.request);
};

export const action = async (args: ActionFunctionArgs) => {
  const { admin } = await authenticate.public.appProxy(args.request);
};
