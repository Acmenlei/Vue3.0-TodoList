[todolist](#todolist)
- [todolist](#todolist)
    - [1. 功能介绍：](#1-功能介绍)
    - [2. 项目技术](#2-项目技术)
    - [3. 适合用户](#3-适合用户)
    - [4. 效果图](#4-效果图)
    - [5. 项目上手](#5-项目上手)
      - [注意事项](#注意事项)
      - [项目启动](#项目启动)
      - [项目打包](#项目打包)

# todolist

### 1. 功能介绍：

- 类似便签的一个轻量级事务管理 App
- 主要功能：
  - 计划的增加
  - 计划的删除
  - 计划进度条
  - 计划代办数量总览
  - 侧边栏`Menu`
  - 一键清空计划

### 2. 项目技术

技术栈使用最新的`Vue3.0`+`Typescript`，大量使用`css3`动画和组件传值(props、 provide、inject)

### 3. 适合用户

学习完 Vue3.0 想找项目练手的朋友。

### 4. 效果图

1. 首页效果图
   ![todolist](https://codeleilei.gitee.io/blog/todolist-index.jpg)

### 5. 项目上手

#### 注意事项

- 首先确定您的`vuecli`是否支持`Vue3.0`的环境，如若不支持，请卸载安装最新的`vuecli`，如下：

```shell
1. npm uninstall vue-cli -g
2. npm install @vue/cli -g
```

#### 项目启动

1. 安装依赖

```shell
npm install
```

2. 启动项目

```shell
npm run serve
```

#### 项目打包

```shell
npm run build
```
