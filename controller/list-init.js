// 初始化目录let config = require('../config/index')let _ = require('lodash')const fs = require('fs-extra')const path = require('path')const axios = require('axios')const colors = require('colors')const co = require('co')const download = require('download')const tool = require('../tool/index')const output = new tool.ConsoleHelp()class Init{    constructor(templateName){        this.templateName = templateName        this.templateConfig = config.list[templateName]        this.templateUrl = path.join(__dirname, '../', 'template/' )        this.pluginUrl = path.join(process.cwd(), '/plugin/')        this.mycat = new tool.MyCat(process.cwd())    }    ajax(pluginName, pluginVersion){        // 使用 Promise 封装        return new Promise((resolve)=> {            axios.get(config.cdn.url+(config.api.getListInfo).replace('{{name}}', pluginName))                .then( (response)=> {                    var versionArray = response.data.assets                    var downloadList = null                    var outputDownloadList = []                    for(var i=0; i<versionArray.length; i++){                        var nowTarget = versionArray[i]                        var nowVersion = nowTarget.version                        if(nowVersion == pluginVersion){                            downloadList = nowTarget.files                        }                    }                    if(!downloadList){                        output.errorTitle()                        output.error('未找到对应版本的信息')                    }                    for(var j=0; j<downloadList.length; j++){                        outputDownloadList.push(config.api.download + pluginName + '/' + pluginVersion + '/' + downloadList[j])                    }                    Promise.all(outputDownloadList.map(x => download(x, path.join('plugin', pluginName)))).then(() => {                        output.success('(: '+pluginName+' 拉取完毕');                        resolve(response);                    });                })                .catch(err=>{                    resolve(err);                })        });    }    renderFile(){        if(!this.templateConfig){            console.log('未找到对应的模板')            return        }        try {            output.info('初始化中...')            var root = this            if(this.mycat.isExist()){                output.warnTitle()                output.warn('已经初始化的项目，无法再次初始化，重新初始化会覆盖当前的文件')                output.warn('如果需要，请手动删除 mycat.json 以重新初始化，请确认操作')                return            }            fs.copySync(path.join(this.templateUrl, 'public'), process.cwd()) // 首先克隆公用文件            fs.copySync(path.join(this.templateUrl, this.templateName), process.cwd()) //克隆私有文件            // 设置配置文件            this.mycat.setJson({                name: this.templateName,                need: this.templateConfig.need            })            // 最后下载插件            // 插件下载默认列表中 [name].min.js [name].min.css 文件            co(function* () {                for(var i=0; i<root.templateConfig.need.length; i++){                    var taString = root.templateConfig.need[i].split('@')                    var pluginName = taString[0]                    var pluginVersion = taString[1]                    yield root.ajax(pluginName, pluginVersion)                }                output.successTitle()                output.success('初始化完毕')            });        } catch (err) {            console.error(err)        }    }}module.exports = function (args) {    let doer = new Init(args[0])    doer.renderFile()}