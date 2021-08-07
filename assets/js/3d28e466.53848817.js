"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75825],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40176:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i=["components"],u={title:"electron-builder"},o=void 0,p={unversionedId:"web/framework/electron-builder",id:"web/framework/electron-builder",isDocsHomePage:!1,title:"electron-builder",description:"- electron-userland/electron-builder",source:"@site/notes/web/framework/electron-builder.md",sourceDirName:"web/framework",slug:"/web/framework/electron-builder",permalink:"/notes/web/framework/electron-builder",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/electron-builder.md",version:"current",frontMatter:{title:"electron-builder"},sidebar:"docs",previous:{title:"Electron Browser",permalink:"/notes/web/framework/electron-browser"},next:{title:"Electron Dev",permalink:"/notes/web/framework/electron-dev"}},s=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"macOS",id:"macos",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Publish",id:"publish",children:[]}]},{value:"Icons",id:"icons",children:[]},{value:"\u81ea\u52a8\u5347\u7ea7",id:"\u81ea\u52a8\u5347\u7ea7",children:[]},{value:"electron-updater vs autoUpdater",id:"electron-updater-vs-autoupdater",children:[]},{value:"blockmap",id:"blockmap",children:[]}],m={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/electron-userland/electron-builder"},"electron-userland/electron-builder")),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f .npmrc \u6216 .yarnrc \u914d\u7f6e\u597d mirror")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"electron-builder \u63d0\u4f9b\u591a\u5e73\u53f0\u6253\u5305\uff0c\u4f46\u4e0d\u8981\u671f\u671b\u80fd\u8de8\u5e73\u53f0\u6784\u5efa",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"node \u90e8\u5206\u5305\u9700\u8981\u7f16\u8bd1"),(0,l.kt)("li",{parentName:"ul"},"dmg \u53ea\u80fd\u5728 mac \u4e0b\u624d\u80fd\u7b7e\u540d")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u955c\u50cf\nexport ELECTRON_BUILDER_BINARIES_MIRROR=http://npm.taobao.org/mirrors/electron-builder-binaries/\n\nelectron-builder build --publish never\n\n# \u6784\u5efa windows \u5355 exe - \u9ed8\u8ba4 nsis \u5b89\u88c5\nelectron-builder build --win portable\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"flag"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"mean"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--mac,-m,-o,--macos"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--linux,-l"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--win,-w,--windows"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--x64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"x86_64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--ia32"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"x86")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--armv7l"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--arm64"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--universal"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dir"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6784\u5efa\u4e3a\u76ee\u5f55\uff0c\u4e0d\u6253\u5305")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--prepackaged, --pd"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--projectDir,--project"),(0,l.kt)("td",{parentName:"tr",align:null},"$PWD"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--config,-c"),(0,l.kt)("td",{parentName:"tr",align:null},"electron-builder.yml"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u6587\u4ef6")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"electron-builder --linux deb tar.xz\nelectron-builder --win --ia32\nelectron-builder --win nsis-web --ia32\n# \u989d\u5916\u914d\u7f6e\nelectron-builder -c.extraMetadata.foo=bar\nelectron-builder --config.nsis.unicode=false\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u4ece package.json \u8bfb\u53d6\u90e8\u5206\u5143\u4fe1\u606f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"name"),(0,l.kt)("li",{parentName:"ul"},"description"),(0,l.kt)("li",{parentName:"ul"},"homepage"),(0,l.kt)("li",{parentName:"ul"},"license"),(0,l.kt)("li",{parentName:"ul"},"author: { name, email }"),(0,l.kt)("li",{parentName:"ul"},"repository: string | { url }"),(0,l.kt)("li",{parentName:"ul"},"build - \u914d\u7f6e"))),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u65b9\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"packages.son \u4e2d build \u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"--config yaml-json5-toml-js"))),(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u8bfb\u53d6 electron-builder.env \u73af\u5883\u53d8\u91cf"),(0,l.kt)("li",{parentName:"ul"},"macOS - mac, mas(Mac Application Store),dmg,pkg"),(0,l.kt)("li",{parentName:"ul"},"windows - win,nsis, nsisWeb,appx,squirrelWindows"),(0,l.kt)("li",{parentName:"ul"},"linux - linux,deb,snap,appImage,pacman,rpm,freebsd,p5p,apk"),(0,l.kt)("li",{parentName:"ul"},"${macro}",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"arch - x64, ia32, armv7l, arm64"),(0,l.kt)("li",{parentName:"ul"},"os - mac,linux,win"),(0,l.kt)("li",{parentName:"ul"},"platform - darwin,linux,win32 - Node process.platform"),(0,l.kt)("li",{parentName:"ul"},"name - package.json name"),(0,l.kt)("li",{parentName:"ul"},"productName"),(0,l.kt)("li",{parentName:"ul"},"version - beta"),(0,l.kt)("li",{parentName:"ul"},"channel"),(0,l.kt)("li",{parentName:"ul"},"env.ENV_NAME"),(0,l.kt)("li",{parentName:"ul"},"buildVersion, buildNumber - AppInfo"),(0,l.kt)("li",{parentName:"ul"},"ext - exe - windows")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"appId: me.wener.desk.DeskAssistant\n# \u5305\u542b\u7684\u5185\u5bb9\n# \u53ef\u4ee5\u81ea\u5b9a\u4e49 { from, to, filter }\nfiles: ['dist', 'node_modules', 'package.json']\ndirectories:\n  app: build/app\n  buildResources: assets\n  output: build/release\n# macOS Contents/Resources \u76ee\u5f55, Windows.Linux resource \u76ee\u5f55\nextraResources: ['./assets/**']\n# macOS Contents \u76ee\u5f55, Windows,Linux \u6839\u76ee\u5f55\nextraFiles: []\npublish:\n  provider: github\n  owner: electron-react-boilerplate\n  repo: electron-react-boilerplate\nafterSign: '.erb/scripts/notarize.js'\nelectronDownload:\n")),(0,l.kt)("h3",{id:"macos"},"macOS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"mac:\nmas:\ndmg:\npkg:\n")),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u57fa\u4e8e appId \u6216 name \u8ba1\u7b97 guid"),(0,l.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 guid")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# Windows \u6784\u5efa\u914d\u7f6e\nwin:\n  # nsis, nsis-web, portable, appx, msi, squirrel, 7z, zip, tar.xz, tar.lz, tar.gz, tar.bz2, dir\n  target:\n    - nsis\n    - target: nsis\n      arch:\n        - x64\n        - ia32\n  icon: build/icon.ico\n  # legalTrademarks:\nnsis:\n  oneClick: true\n  perMachine: false\n  allowElevation: true\n  allowToChangeInstallationDirectory: false\n\n  # Install\n  installerIcon: build/installerIcon.ico\n  uninstallerIcon: build/uninstallerIcon.ico\n  installerHeader: build/installerHeader.bmp\n  installerHeaderIcon: build/installerHeaderIcon.ico\n  # 164 \xd7 314\n  # ${NSISDIR}\\\\Contrib\\\\Graphics\\\\Wizard\\\\nsis3-metro.bmp\n  installerSidebar: build/installerSidebar.bmp\n  # build/installerSidebar.bmp\n  # ${NSISDIR}\\\\Contrib\\\\Graphics\\\\Wizard\\\\nsis3-metro.bmp\n  uninstallerSidebar: build/uninstallerSidebar.bmp\n  uninstallDisplayName: ${productName} ${version}\n\n  # Script\n  include: build/installer.nsh\n  script: build/installer.nsi\n  # {license,eula}.{txt,html}\n  # _zh,_en - \u652f\u6301\u591a\u8bed\u8a00\n  license:\n  artifactName: ${productName} Setup ${version}.${ext}\n  # one-click \u5b89\u88c5\u65f6\u662f\u5426\u5378\u8f7d\u65f6\u5220\u9664 app \u6570\u636e\n  deleteAppDataOnUninstall: false\n  # nsis-web\n  differentialPackage: true\n\n  # \u6b63\u5e38 installer \u8bed\u8a00\u914d\u7f6e\n  displayLanguageSelector: false\n  installerLanguages: []\n  # https://msdn.microsoft.com/en-au/goglobal/bb964664.aspx\n  # 1033 -> English - United States\n  language: 1033\n  multiLanguageInstaller:\n  packElevateHelper: true\n  preCompressedFileExtensions: ['.avi', '.mov', '.m4v', '.mp4', '.m4p', '.qt', '.mkv', '.webm', '.vmdk']\n  unicode: true\n  # \u4f7f\u7528 GUID \u800c\u4e0d\u662f\u5e94\u7528\u540d\u5b57\n  guid:\n  warningsAsErrors: true\n  runAfterFinish: true\n\n  createDesktopShortcut: true\n  createStartMenuShortcut: true\n  menuCategory: false\n  # \u9ed8\u8ba4\u5e94\u7528\u540d\u5b57\n  shortcutName:\nnsisWeb:\n  # \u9ed8\u8ba4\u901a\u8fc7 publish \u8ba1\u7b97\n  # \u81ea\u5b9a\u4e49 X-Arch \u5934\n  appPackageUrl: https://example.com/download/latest\n  artifactName: ${productName} Web Setup ${version}.${ext}\n  portable:\n  # user, highest, admin\n  requestExecutionLevel: user\n  # TEMP \u76ee\u5f55\u540d - \u9ed8\u8ba4 build uuid\n  unpackDirName:\nappx:\nsquirrelWindows:\n")),(0,l.kt)("h3",{id:"publish"},"Publish"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"provider",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"github - \u9ed8\u8ba4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"env GH_TOKEN, GITHUB_TOKEN"),(0,l.kt)("li",{parentName:"ul"},"repo, owner, vPrefixedTagName=true, host=github.com, protocol=https, token, private, releaseType=draft"))))),(0,l.kt)("li",{parentName:"ul"},"PublishConfiguration",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"publishAutoUpdate=true"))),(0,l.kt)("li",{parentName:"ul"},"--publish - \u63a7\u5236\u4ec0\u4e48\u65f6\u5019\u53d1\u5e03",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"onTag"),(0,l.kt)("li",{parentName:"ul"},"onTagOrDraft"),(0,l.kt)("li",{parentName:"ul"},"always"),(0,l.kt)("li",{parentName:"ul"},"never")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"publish:\n  - provider: s3 # env AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY\n    bucket:\n    endpoint: http://minio:3000\n    channel: latest\n    path: /\n    # public-read | private | null\n    acl: null\n    storageClass: STANDARD\n  - provider: generic\n    url:\n    channel: latest\n    useMultipleRangeRequest: true\nwin:\n  publish:\n    - github\n    - bintray\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"s3 acl")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "AllowAppS3Releases",\n      "Effect": "Allow",\n      "Action": [\n        "s3:AbortMultipartUpload",\n        "s3:GetObject",\n        "s3:GetObjectAcl",\n        "s3:GetObjectVersion",\n        "s3:ListMultipartUploadParts",\n        "s3:PutObject",\n        "s3:PutObjectAcl"\n      ],\n      "Resource": ["arn:aws:s3:::release-bucket/*"]\n    },\n    {\n      "Effect": "Allow",\n      "Action": ["s3:ListBucket", "s3:ListBucketMultipartUploads"],\n      "Resource": ["arn:aws:s3:::release-bucket"]\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"icons"},"Icons"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u653e\u5728 buildResources \u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},"macOS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"icon.icns, icon.png - 512x512"),(0,l.kt)("li",{parentName:"ul"},"background.png, ",(0,l.kt)("a",{parentName:"li",href:"mailto:background@2x.png"},"background@2x.png")," - DMG background"))),(0,l.kt)("li",{parentName:"ul"},"Windows - NSIS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"icon.ico, icon.png - 256x256"))),(0,l.kt)("li",{parentName:"ul"},"Linux",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Windows \u6216 macOS \u751f\u6210\u6216 build/icons \u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},"build/icons/iconXxX.png - 16,32,48,64,128,256,512 - \u6216\u8005\u53ea\u6709 512")))),(0,l.kt)("h2",{id:"\u81ea\u52a8\u5347\u7ea7"},"\u81ea\u52a8\u5347\u7ea7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macOS DMG, Windows NSIS, Linux AppImage"),(0,l.kt)("li",{parentName:"ul"},"macOS \u5fc5\u987b\u8981\u7b7e\u540d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// AppImageUpdater, MacUpdater, NsisUpdater\nimport { autoUpdater } from 'electron-updater';\n\nexport default class AppUpdater {\n  constructor() {\n    const log = require('electron-log');\n    log.transports.file.level = 'debug';\n    autoUpdater.logger = log;\n    autoUpdater.checkForUpdatesAndNotify();\n  }\n}\n\n// \u5185\u7f6e autoUpdater \u529f\u80fd\u66f4\u5f31\n// import { autoUpdater } from \"electron\"\n")),(0,l.kt)("h2",{id:"electron-updater-vs-autoupdater"},"electron-updater vs autoUpdater"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"autoUpdater",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5185\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 macOS \u7b7e\u540d\u8ba4\u8bc1"))),(0,l.kt)("li",{parentName:"ul"},"electron-updater",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e09\u65b9"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u4e13\u95e8\u7684 \u53d1\u5e03 \u670d\u52a1\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Windows \u548c macOS \u7b7e\u540d\u8ba4\u8bc1"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u751f\u6210\u6240\u6709\u5143\u6570\u636e\u6587\u4ef6\u548c\u5347\u7ea7\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u5e73\u53f0\u652f\u6301\u4e0b\u8f7d\u8fdb\u5ea6\u548c\u90e8\u5206\u5347\u7ea7"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u652f\u6301\u8f83\u591a provider - github release, s3, http"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u7b80\u5355")))),(0,l.kt)("h2",{id:"blockmap"},"blockmap"),(0,l.kt)("p",null,"\u5305\u5185\u5bb9\u5217\u8868\uff0c\u5185\u5bb9 hash \u503c\uff0c\u5347\u7ea7\u65f6\u7528\u4e8e\u5bf9\u6bd4\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/electron-userland/electron-builder/issues/2851"},"electron-userland/electron-builder#2851"),"\nWhat is the purpose of blockmap file?")))}c.isMDXComponent=!0}}]);