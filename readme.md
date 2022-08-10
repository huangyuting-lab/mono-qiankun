# 开始

### 1. 安装pnpm
`npm install pnpm -g`

### 2. 安装项目依赖
`pnpm i`

### 3. 运行项目
`pnpm start`

### 4. 预览端口
<http://localhost:3000/>
<p>(请确认 3000 ~ 3003 端口没有被其它项目占用)</p>

<br>

# 项目结构

<table>
    <tr>
        <td>路径</td>
        <td>简介</td>
        <td>端口号</td>
    </tr>
    <tr>
        <td>./main-service</td>
        <td>基座应用，Webpack + Vue2，包含三个子应用</td>
        <td>3000</td>
    </tr>
    <tr>
        <td>./packages</td>
        <td>子应用目录</td>
        <td>/</td>
    </tr>
    <tr>
        <td>./packages/sub-vue2</td>
        <td>子应用一，Webpack + Vue2</td>
        <td>3001</td>
    </tr>
    <tr>
        <td>./packages/sub-vite2-vue3</td>
        <td>子应用二，Vite2 + Vue3</td>
        <td>3002</td>
    </tr>
    <tr>
        <td>./packages/sub-vite2-react</td>
        <td>子应用三，Vite2 + React</td>
        <td>3003</td>
    </tr>
    <tr>
        <td>./components</td>
        <td>公共组件目录</td>
        <td>/</td>
    </tr>
    <tr>
        <td>./components/button-vite2-vue3</td>
        <td>自定义button组件，Vite2 + Vue3，在sub-vite2-vue3子项目中存在引用</td>
        <td>8001</td>
    </tr>
    <tr>
        <td>./utils</td>
        <td>公共函数目录，Vite2 + TS，在sub-vite2-vue3子项目中存在引用</td>
        <td>8002</td>
    </tr>
</table>
