const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // only add this if you don't have yet
const { ModuleFederationPlugin } = webpack.container;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const deps = require("./package.json").dependencies;
require("dotenv").config({ path: "./.env" });

const buildDate = new Date().toLocaleString();

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";
    return {
        entry: "./src/index.ts",
        mode: process.env.NODE_ENV || "development",
        output: {
            publicPath: "/",
        },
        devServer: {
            port: 3000,
            open: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            historyApiFallback: true,
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|tsx|ts)$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: [
                            [
                                "@babel/preset-env",
                                { targets: { browsers: "last 2 versions" } },
                            ],
                            "@babel/preset-typescript",
                            "@babel/preset-react",
                        ],
                        plugins: [
                            "react-hot-loader/babel",
                            [
                                "@babel/plugin-proposal-class-properties",
                                { loose: true },
                            ],
                            [
                                "@babel/plugin-proposal-private-property-in-object",
                                { loose: true },
                            ],
                            [
                                "@babel/plugin-proposal-private-methods",
                                { loose: true },
                            ],
                        ],
                    },
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
            ],
        },

        plugins: [
            new webpack.EnvironmentPlugin({ BUILD_DATE: buildDate }),
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(process.env),
            }),
            new ModuleFederationPlugin({
                name: "container",
                remotes: {
                    mf_skillreview: isProduction
                        ? process.env.PROD_APP1
                        : process.env.DEV_APP1,
                    mf_header: isProduction
                        ? process.env.PROD_APP2
                        : process.env.DEV_APP2,
                    app3: isProduction
                        ? process.env.PROD_APP3
                        : process.env.DEV_APP3,
                },
                shared: {
                    ...deps,
                    react: {
                        singleton: true,
                        eager: true,
                        requiredVersion: deps.react,
                    },
                    "react-dom": {
                        singleton: true,
                        eager: true,
                        requiredVersion: deps["react-dom"],
                    },
                    "react-router-dom": {
                        singleton: true,
                        eager: true,
                        requiredVersion: deps["react-router-dom"],
                    },
                },
            }),
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
            new ForkTsCheckerWebpackPlugin(),
        ],
    };
};
