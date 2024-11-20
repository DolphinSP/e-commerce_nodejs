import { Container } from "typedi";

import { TokenService } from "../services/TokenService";

const tokenService = Container.get<TokenService>(TokenService);

// Define the base context type
interface BaseContext {
  authScope: string;
}

// Define a generic Resolver type
type ResolverFn<
  P = any,
  A = any,
  C extends BaseContext = BaseContext,
  I = any
> = (parent: P, args: A, context: C, info: I) => any;

// Improve typing for the authenticated function
function authenticated<P, A, C extends BaseContext, I>(
  resolver: ResolverFn<P, A, C, I>
): ResolverFn<P, A, C, I> {
  return (parent, args, context, info) => {
    const token = context.authScope;
    if (!token || !tokenService.verifyToken(token)) {
      throw new Error("You must be authenticated to perform this action.");
    }
    return resolver(parent, args, context, info);
  };
}

export { authenticated };
