"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var config_1 = require("payload/config");
var path_1 = __importDefault(require("path"));
var Users_1 = require("./collections/Users");
var dotenv_1 = __importDefault(require("dotenv"));
var Products_1 = require("./collections/Products/Products");
var Media_1 = require("./collections/Media");
var Orders_1 = require("./collections/Orders");
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, "../.env")
});
exports.default = (0, config_1.buildConfig)({
    serverURL: "http://localhost:3000" || " ",
    collections: [Users_1.Users, Products_1.Products, Media_1.Media, Orders_1.Orders],
    routes: {
        admin: "/sell",
    },
    admin: {
        user: "users",
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        meta: {
            titleSuffix: "DigitalMk",
            favicon: "/favicon.ico",
            ogImage: "thumbnail.jpg"
        },
    },
    rateLimit: {
        max: 2000
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: "mongodb+srv://gabrielfootze:2sDAdOUxAR2xF1pG@cluster0.d6jvwg9.mongodb.net/?retryWrites=true&w=majority",
    }),
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts")
    }
});
