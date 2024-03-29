# uni-app Vue3 Vite4 pinia2 TypeScript 基础框架

## 目录结构

```shell
.
├─ src
│   ├─assets # 静态资源目录
│   │
│   ├─components # 组件目录
│   │   ├─ Components
│   │   │    ├─index.vue
│   │   │    └─prpos.ts
│   │   └─...
│   │
│   ├─enums # 枚举/常量
│   │   ├─ cacheEnum.ts
│   │   └─...
│   │
│   ├─pages # 页面
│   │   ├─ index
│   │   │    └─index.vue
│   │   └─...
│   │
│   ├─request # 接口相关
│   │
│   ├─state # 状态管理模式(pinia)
│   │   ├─ modules # 数据模块
│   │   │    ├─auth.ts
│   │   │    └─...
│   │   │
│   │   └─ index.ts
│   │
│   ├─static # 静态公共文件
│   │   ├─ images # 图片
│   │   │    ├─avatar.png
│   │   │    └─...
│   │   │
│   │   └─ ...
│   │
│   ├─types # 类型文件
│   │   ├─ http.d.ts
│   │   └─ ...
│   │
│   └─utils # 工具类
│
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.js
├─ favicon.ico
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ tree.txt
├─ tsconfig.json
└─ vite.config.ts

```

## 安装使用

-   安装依赖

```bash
pnpm install
```

-   运行

```bash
# 其他端请查看 package.json script
pnpm dev:h5
```

-   打包

```bash
# 其他端请查看 package.json script
pnpm build:h5
```

-   更新依赖到最新（新手请忽略）

```bash
pnpm up
# 打开HBuilder X alpha桌面程序-->点击上面的帮助-->历次更新说明-->获取最新版本号（如：3.7.2.20230217-alpha）
npx @dcloudio/uvm 3.7.2.20230217-alpha
```

### Mac m1 ARM 芯片 运行报错

```bash
pnpm add @esbuild/darwin-x64@0.17.19 -D
```

### 提交类型

| 提交类型   | 标题               | 描述                                                                                  |
| ---------- | ------------------ | ------------------------------------------------------------------------------------- |
| `feat`     | 特征               | 新功能、新特性                                                                        |
| `fix`      | Bug 修复           | bug 修复                                                                              |
| `docs`     | 文档               | 仅文档更改                                                                            |
| `style`    | 风格               | 不影响代码含义的更改（空格、格式、缺少分号等）                                        |
| `refactor` | 代码重构           | 重构，在不影响代码内部行为，功能下的代码修改                                          |
| `perf`     | 性能改进           | 更改代码，以提高性能                                                                  |
| `test`     | 测试               | 添加缺失的测试或纠正现有的测试                                                        |
| `build`    | 构建               | 影响构建系统或外部依赖项的更改（示例范围：gulp、broccoli、npm）                       |
| `ci`       | 持续集成           | 对我们的 CI 配置文件和脚本的更改（示例范围：Travis、Circle、BrowserStack、SauceLabs） |
| `chore`    | 其他文件修改       | 不修改 src 或测试文件的其他更改                                                       |
| `revert`   | 还原               | 恢复之前的提交                                                                        |
| `release`  | 发布新版本         | \-                                                                                    |
| `workflow` | 工作流相关文件修改 | \-                                                                                    |

### 提交别名

| 提交类型           | 映射到  | 标题     | 描述                       |
| ------------------ | ------- | -------- | -------------------------- |
| `initial`          | `feat`  | 最初的   | 初始提交                   |
| `dependencies`     | `fix`   | 依赖项   | 更新依赖项                 |
| `peerDependencies` | `fix`   | 对等依赖 | 更新对等依赖项             |
| `devDependencies`  | `chore` | 开发依赖 | 更新开发依赖               |
| `metadata`         | `fix`   | 元数据   | 更新元数据（package.json） |

### 快捷别名提示

1.  resolve a conflict：解决冲突
2.  merge branch：合并分支
3.  feat: [...] : 添加的新功能说明
4.  fix: [...] : 修复的 bug 说明
5.  initial project：初始化项目
6.  style: [...] : 修改的样式范围
7.  perf：[...] : 优化的范围
8.  release : 发布新版本
9.  docs: 文档修改
10. refactor： 代码重构
11. revert： 还原之前的版本
12. dependencies： 依赖项修改
13. devDependencies： 开发依赖修改
14. review：复习，回顾
15. strengthen: 加强，巩固

### 参考资料

-   [Vue3.0 官方文档](https://v3.cn.vuejs.org/guide/introduction.html)
-   [uni-app + vue3 开发文档](https://docs.qq.com/doc/DZG5yRHdzbnhYQlNC)
-   [uni-app 官方文档](https://uniapp.dcloud.io/frame?id=vue-support)
-   [TuniaoUI 官方组件库](https://vue3.tuniaokj.com/zh-CN/)
-   [pinia](https://pinia.vuejs.org/introduction.html)
