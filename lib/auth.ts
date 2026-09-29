import { env } from "cloudflare:workers";
import { betterAuth } from "better-auth/minimal";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import { getPrisma } from "./prisma";
// import { Resend } from "resend";
import { openAPI, haveIBeenPwned, bearer, jwt } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

const authUrl = env.BETTER_AUTH_URL;
const allowedOrigin = env.ALLOWED_ORIGIN;
// const resend = new Resend(env.RESEND_API_KEY as string);

export const auth = betterAuth({
  appName: "LINAW",
  baseURL: authUrl,
  basePath: "/api/auth",
  trustedOrigins: [allowedOrigin],
  database: prismaAdapter(getPrisma(), {
    provider: "postgresql",
  }),
  secret: env.BETTER_AUTH_SECRET,
  advanced: {
    database: {
      joins: true,
    },
    ipAddress: {
      disableIpTracking: false,
      ipAddressHeaders: ["X-Forwarded-For", "CF-Connecting-IP"],
    },
  },
  user: {
    modelName: "User",
  },
  session: {
    modelName: "Session",
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
      strategy: "jwt",
    },
  },
  useSecureCookies: authUrl.startsWith("https://"),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  /*
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
        to: user.email,
        subject: "Verify your email",
        react: VerifyEmail({ username: user.name, verifyUrl: url }),
      });
    },
    sendOnSignUp: true,
  },
  */
  plugins: [
    openAPI(),
    haveIBeenPwned({
      customPasswordCompromisedMessage:
        "This password was exposed in a public data breach. Please create a stronger password.",
    }),
    bearer(),
    jwt({
      disableSettingJwtHeader: true,
      jwt: {
        issuer: authUrl,
        audience: authUrl,
        expirationTime: "15m",
        definePayload: ({ user }) => ({
          sub: user.id,
          email: user.email,
        }),
      },
    }),
    nextCookies(),
  ],
});

export type AuthType = {
  user: typeof auth.$Infer.Session.user | null;
  session: typeof auth.$Infer.Session.session | null;
};
