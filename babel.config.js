module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibrary: {
          name: "~node_modules/element-ui/packages/theme-chalk/src", // element-ui的scss目录
          base: true, // if theme package has a base.css
          path: "[module].scss", // element-ui的组件scss文件
          mixin: true, // if theme-package not found css file, then use [libraryName]'s css file
        },
        ext: ".scss",
      },
    ],
  ],
};
