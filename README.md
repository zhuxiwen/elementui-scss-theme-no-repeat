# elementui-scss-theme-no-repeat

参考的 https://www.jianshu.com/p/904b36676304 的配置

不过上面的文章中的ext配置应该和libraryName、styleLibrary同级

这个自定义主题的demo(vue cli项目)仅参考。


### 主要做了下面几个配置
## 1、配置babel.config.js
<img src="https://user-images.githubusercontent.com/19161200/130808727-85026050-00e8-4631-84e9-e341d95e19bc.png" height="400px">
## 2、全局scss
<img src="https://user-images.githubusercontent.com/19161200/130808593-5b9cbe8e-e457-4874-99a0-eb984fe070b7.png" height="400px">
## 3、自定义主题
<img src="https://user-images.githubusercontent.com/19161200/130808777-ab56edcd-4763-4c0f-a76c-38bd7db202ba.png" height="400px">



### 结尾
```
开发环境中，有时候你可能会发现用了上面方式还是有重复的现象。
拿.el-button--primary举例，它是el-button组件的样式。不过在 dropdown.scss 中也引用了它的样式，还是会有重复的问题不过仅在开发环境。
```
