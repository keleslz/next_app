// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiHandler } from "next";

const sessionOptions = {
    cookieName: process.env['COOKIE_DATA_NAME'] as string ,
    password: process.env['COOKIE_PASSWORD'] as string ,
    ttl: parseInt(process.env['COOKIE_DATA_TTL'] as string)  ,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};

export function withSessionRoute<T = any>(handler: NextApiHandler<T>) {
    return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSsr<
    P extends { [key: string]: unknown } = { [key: string]: unknown },
    >(handler: (
        context: GetServerSidePropsContext,
    ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,) {
    return withIronSessionSsr(handler, sessionOptions);
}