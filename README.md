## Gitpage blog
可直接在gitpage上使用的博客项目  
访问`/admin`页面可新增与编辑博客(仅本地调试时可访问)

### 项目目录结构介绍
* __data/__ 该目录下的文件会自动生成与修改，请勿手动操作
* __docs/__ 存放博客的路径
* __out/__ 项目打包生成的文件目录
* __pages/__ 项目页面源代码，可修改成自己的结构与风格
* __public/__ 项目依赖的第三方js文件
* __scripts/__ 项目js源文件
* __config.json__ 项目配置文件，`remote`为gitpage对应远程仓库与分支

### 命令
* __npm start__ 本地调试，只有在本地调试页面才可访问`/admin`页面
* __npm run build__ 打包项目
* __npm run publish__ 打包并将项目更新到git，达到更新博客的效果
