## Gitpage blog
可直接在gitpage上使用的博客项目  
访问`/admin`页面可新增与编辑博客

### 项目目录结构介绍
* __data__ 该目录下的文件会自动生成与修改，请勿手动操作
* __docs__ 存放博客的路径
* __out__ 项目打包生成的文件，请设置为gitpage根目录
* __pages__ 项目页面源代码，可修改成自己的结构与风格
* __scripts__ 项目js源文件

### 命令
* __npm start__ 本地调试，只有在本地调试页面才可访问`/admin`页面
* __npm run build__ 打包项目
