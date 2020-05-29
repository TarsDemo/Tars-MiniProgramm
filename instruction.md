# 基于Tars 大学生服务应用前端环境搭建步骤

## 第一步： 下载并安装小程序工具
下载如下链接中的“稳定版”
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
并且安装
![image](https://github.com/qiuxin/Life_Service/blob/master/instruction_add_pic/download_version.png)

## 第二步： 下载代码
gitclone https://github.com/qiuxin/Life_Service.git  到任意路径（我的下载路径为：~/Documents/GitHub/）


## 第三步： nodejs安装
-  如果是Windows系统，从https://nodejs.org/en/ 下载.msi文件，并安装node。 安装.msi文件之后，需要重启。
-  如果是MacOS，从https://nodejs.org/en/ 下载.pkg文件，并安装node. 


## 第四步： 进入代码下载路径，安装工具包
执行：
```
cd ${Code_download_path}/Life_Service
npm install wepy-cli -g
npm install
npm run dev
```

注：
1) 如果是MacOS，在命令前增加sudo. 
2) npm run dev 的作用是： 监听加触发自动编译，当书写代码有修改的时候，书写的wpy文件将被自动编译成小程序使用的.wxss/js/wxml文件。


## 第五步： 扫描登入并且配置小程序界面
登入小程序，在Mini Program下操作，不用理会Mini Game， Mini Code
![image](https://github.com/qiuxin/Life_Service/blob/master/instruction_add_pic/login.png)
![image](https://github.com/qiuxin/Life_Service/blob/master/instruction_add_pic/configMiniPro.png)
-  注意上图选择“Import Project”, 导入项目。

## 第六步： 加载小程序工具
在VSCode上安装如下四个插件：wpy-beautify,minapp,wepy snippets,Vue 2 Snippets


## 第七步： 配置VSCode
按照如下方式找到VSCode的Setting文件：
VSCode左下角，右键，选择Setting点入。
![image](https://github.com/qiuxin/Life_Service/blob/master/instruction_add_pic/findSetting_1.png)

在弹出的对话框中，输入associations. 在弹出的下拉菜单中，点击“Edit in setting.json”.
![image](https://github.com/qiuxin/Life_Service/blob/master/instruction_add_pic/findSetting_2.png)

将VSCode的Setting文件修改成如下：
```
{
    "window.zoomLevel": 1,
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "git.ignoreLegacyWarning": true,
    "files.associations": {
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript",
        "*.vue": "vue",
        "*.wpy": "vue",
        "*.wxml": "html",
        "*.wxss": "css",
        "*.cjson": "jsonc",
        "*.wxs": "javascript"
    },
    "emmet.includeLanguages": {
        "wxml": "html"
    },
    "minapp-vscode.disableAutoConfig": true
}
```

## 第八步： 修改appid和secret
前端代码需要使用appid和secret, 每一个appid对应着一个secret，appid和secret都在微信小程序中申请和获取，链接如下：
https://mp.weixin.qq.com/wxamp/home/guide?lang=zh_CN&token=1718841124

申请到自己的appid和secret之后，填写在文件~/Documents/GitHub/Life_Service/src/pages路径下的index.wpy中的如下部分：
```
      //每个用户填写自己的appid,appid在微信公众平台申请
      appid: 'wait developper input',
      //每个开发者填写自己的secret，secrect在微信公众平台获取
      //每一个appid对应一个secret
      secret: 'wait developper input'
```

## 学习前端代码预备知识
建议阅读https://www.w3schools.com/  中的HTML，CSS， JavaScript
