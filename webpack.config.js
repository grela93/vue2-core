import { defineConfig } from "@vue/cli-service";

export default defineConfig({
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // {
      //   test: /\.ts$/,
      //   loader: "ts-loader",
      //   options: {
      //     appendTsSuffixTo: [/\.vue$/],
      //     transpileOnly: true,
      //   },
      // },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
