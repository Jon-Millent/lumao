# lumao
:cat: 前端项目自动化构建工具  

<a href="https://github.com/Jon-Millent/lumao/blob/master/README.md">中文</a>
|
<a href="https://github.com/Jon-Millent/lumao/blob/master/en.MD">English</a>  

## 安装

```cmd
npm install lumao -g
```

## 使用

### `lumao list`
显示目前可用的插件列表
### `lumao list-info [name]`
显示插件信息
### `lumao init [type]`
初始化项目，已经支持的项目模板类型
* `website` 生成现代网站通用模板 [包含 jquery@3.3.0]
* `website-ie` 生成兼容ie8+的传统网页模板 [ jquery@1.9.1 + respond.js + html5shiv + jquery-placeholder ]
* `bootstrap` 生成普通bootstrap模板 [ bootstrap@3.3.7 + jquery@3.3.0 ]
* `bootstrap-ie` 生成兼容ie8+的bootstrap模板 [ bootstrap@3.3.7 + jquery@1.9.1 + respond.js + html5shiv + jquery-placeholder ]

## 以后计划要实现的功能

* `append` 动态添加模块
* `remove` 删除模块
* `install` 根据 mycat.json 安装依赖

## 以后计划要添加的模板

* jquery-plugin
* website-mobile
* website-mobile-rem
* website-swiper

## 关于
* 本项目api支持 `http://www.bootcdn.cn/`
    ![image](http://www.bootcdn.cn/assets/img/bootcdn.png)
* MIT