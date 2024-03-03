import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import path from "path";
import { Users } from "./collections/Users";
import  dotenv  from "dotenv";
import { Products } from "./collections/Products/Products";
import { Media } from "./collections/Media";
import { Orders } from "./collections/Orders";

dotenv.config({
  path: path.resolve(__dirname, "../.env")
})

export default buildConfig({
  serverURL:"http://localhost:3000" || " ",
  collections: [Users, Products, Media,  Orders],
  routes: {
    admin: "/sell",
  },
  admin: {
    user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "DigitalMk",
      favicon: "/favicon.ico",
      ogImage: "thumbnail.jpg"
    },
  },
  rateLimit: {
    max: 2000
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: "mongodb+srv://gabrielfootze:2sDAdOUxAR2xF1pG@cluster0.d6jvwg9.mongodb.net/?retryWrites=true&w=majority"!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts" )
  }
});
