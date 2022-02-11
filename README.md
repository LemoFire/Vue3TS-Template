# XFVue3-TS

讯飞 Vue3+Vite+TypeScript 快速开发模板

_main 分支为基本分支，不带任何业务逻辑。业务逻辑可在对应分支进行开发，main 分支的提交通过 pull request 再同步到各业务模板对应分支_

## 开启的功能

- [x] ref suger：[reactivity-transform](https://vuejs.org/guide/extras/reactivity-transform.html)
- [x] 按需自动导入 API：[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)

## 开发要求

### 开发工具

#### 编辑器和插件

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) ( 请禁用 Vetur 再安装 )
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [pnpm](https://pnpm.io/)

#### 其他

- import 代码时，使用完整相对路径，不实用`@` ，避免升级/更换脚手架时出现兼容性问题

## 可参考文档

- [Vue3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [pinia](https://pinia.vuejs.org)
- [TypeScript](https://zhuanlan.zhihu.com/p/405982472)
- [代码风格](https://vuejs.org/style-guide/)

## 项目安装

```sh
pnpm i
```

### 开发环境

```sh
pnpm run dev
```

### 打包

```sh
pnpm run build
```

### 单元测试 [Vitest](https://vitest.dev/)

```sh
pnpm run test:unit
```

### 端到端测试 [Cypress](https://www.cypress.io/)

```sh
pnpm run build
pnpm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm run lint
```
