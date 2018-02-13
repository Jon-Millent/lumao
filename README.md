# mycat
:cat:前端项目目录自动化构建工具

## 安装

```cmd
npm install mycat -g
```

## 使用

### `mycat list`
显示目前可用的插件列表
### `mycat list-info [name]`
显示插件信息
### `mycat init [type]`
初始化项目，已经支持的项目模板类型
* `website` 生成现代网站通用模板 [包含 jquery@3.3.0]
* `website-ie` 生成兼容ie8+的传统网页模板 [ jquery@1.9.1 + respond.js + html5shiv + jquery-placeholder ]
* `bootstrap` 生成普通bootstrap模板 [ bootstrap@3.3.7 + jquery@3.3.0 ]
* `bootstrap-ie` 生成兼容ie8+的bootstrap模板 [ bootstrap@3.3.7 + jquery@1.9.1 + respond.js + html5shiv + jquery-placeholder ]

## 关于
* 本项目api支持 `http://www.bootcdn.cn/`
    ![image](http://www.bootcdn.cn/assets/img/bootcdn.png)
* MIT