"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35209],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17122:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return f}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&s(e,n,t[n]);return e},m=(e,t)=>l(e,i(t)),d=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const k={title:"electron-builder"},b="electron-builder",N={unversionedId:"web/framework/electron/electron-builder",id:"web/framework/electron/electron-builder",title:"electron-builder",description:"- electron-userland/electron-builder",source:"@site/../notes/web/framework/electron/electron-builder.md",sourceDirName:"web/framework/electron",slug:"/web/framework/electron/builder",permalink:"/notes/web/framework/electron/builder",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/electron/electron-builder.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1669864776,formattedLastUpdatedAt:"Dec 1, 2022",frontMatter:{title:"electron-builder"},sidebar:"docs",previous:{title:"Electron Browser",permalink:"/notes/web/framework/electron/browser"},next:{title:"Electron Dev",permalink:"/notes/web/framework/electron/dev"}},g={},f=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Publish",id:"publish",level:3},{value:"Icons",id:"icons",level:2},{value:"\u81ea\u52a8\u5347\u7ea7",id:"\u81ea\u52a8\u5347\u7ea7",level:2},{value:"electron-updater vs autoUpdater",id:"electron-updater-vs-autoupdater",level:2},{value:"blockmap",id:"blockmap",level:2}],w={toc:f},h="wrapper";function v(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(h,m(c(c({},w),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"electron-builder"}),"electron-builder"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/electron-userland/electron-builder"}),"electron-userland/electron-builder")),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f .npmrc \u6216 .yarnrc \u914d\u7f6e\u597d mirror")),(0,a.kt)("admonition",c({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"electron-builder \u63d0\u4f9b\u591a\u5e73\u53f0\u6253\u5305\uff0c\u4f46\u4e0d\u8981\u671f\u671b\u80fd\u8de8\u5e73\u53f0\u6784\u5efa",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"node \u90e8\u5206\u5305\u9700\u8981\u7f16\u8bd1"),(0,a.kt)("li",{parentName:"ul"},"dmg \u53ea\u80fd\u5728 mac \u4e0b\u624d\u80fd\u7b7e\u540d"))))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528\u955c\u50cf\nexport ELECTRON_BUILDER_BINARIES_MIRROR=http://npm.taobao.org/mirrors/electron-builder-binaries/\n\nelectron-builder build --publish never\n\n# \u6784\u5efa windows \u5355 exe - \u9ed8\u8ba4 nsis \u5b89\u88c5\nelectron-builder build --win portable\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"flag"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"default"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"mean"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"--mac,-m,-o,--macos"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"--linux,-l"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"--win,-w,--windows"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"--x64"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"x86_64")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"--ia32"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"x86")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"--armv7l"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"--arm64"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"--universal"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"--dir"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u6784\u5efa\u4e3a\u76ee\u5f55\uff0c\u4e0d\u6253\u5305")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"--prepackaged, --pd"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"--projectDir,--project"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"$PWD"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"--config,-c"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"electron-builder.yml"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u914d\u7f6e\u6587\u4ef6")))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"electron-builder --linux deb tar.xz\nelectron-builder --win --ia32\nelectron-builder --win nsis-web --ia32\n# \u989d\u5916\u914d\u7f6e\nelectron-builder -c.extraMetadata.foo=bar\nelectron-builder --config.nsis.unicode=false\n")),(0,a.kt)("h2",c({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u4ece package.json \u8bfb\u53d6\u90e8\u5206\u5143\u4fe1\u606f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"name"),(0,a.kt)("li",{parentName:"ul"},"description"),(0,a.kt)("li",{parentName:"ul"},"homepage"),(0,a.kt)("li",{parentName:"ul"},"license"),(0,a.kt)("li",{parentName:"ul"},"author: { name, email }"),(0,a.kt)("li",{parentName:"ul"},"repository: string | { url }"),(0,a.kt)("li",{parentName:"ul"},"build - \u914d\u7f6e"))),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u65b9\u5f0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"packages.son \u4e2d build \u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"--config yaml-json5-toml-js"))),(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u8bfb\u53d6 electron-builder.env \u73af\u5883\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ul"},"macOS - mac, mas(Mac Application Store),dmg,pkg"),(0,a.kt)("li",{parentName:"ul"},"windows - win,nsis, nsisWeb,appx,squirrelWindows"),(0,a.kt)("li",{parentName:"ul"},"linux - linux,deb,snap,appImage,pacman,rpm,freebsd,p5p,apk"),(0,a.kt)("li",{parentName:"ul"},"${macro}",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"arch - x64, ia32, armv7l, arm64"),(0,a.kt)("li",{parentName:"ul"},"os - mac,linux,win"),(0,a.kt)("li",{parentName:"ul"},"platform - darwin,linux,win32 - Node process.platform"),(0,a.kt)("li",{parentName:"ul"},"name - package.json name"),(0,a.kt)("li",{parentName:"ul"},"productName"),(0,a.kt)("li",{parentName:"ul"},"version - beta"),(0,a.kt)("li",{parentName:"ul"},"channel"),(0,a.kt)("li",{parentName:"ul"},"env.ENV_NAME"),(0,a.kt)("li",{parentName:"ul"},"buildVersion, buildNumber - AppInfo"),(0,a.kt)("li",{parentName:"ul"},"ext - exe - windows")))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"appId: me.wener.desk.DeskAssistant\n# \u5305\u542b\u7684\u5185\u5bb9\n# \u53ef\u4ee5\u81ea\u5b9a\u4e49 { from, to, filter }\nfiles: ['dist', 'node_modules', 'package.json']\ndirectories:\n  app: build/app\n  buildResources: assets\n  output: build/release\n# macOS Contents/Resources \u76ee\u5f55, Windows.Linux resource \u76ee\u5f55\nextraResources: ['./assets/**']\n# macOS Contents \u76ee\u5f55, Windows,Linux \u6839\u76ee\u5f55\nextraFiles: []\npublish:\n  provider: github\n  owner: electron-react-boilerplate\n  repo: electron-react-boilerplate\nafterSign: '.erb/scripts/notarize.js'\nelectronDownload:\n")),(0,a.kt)("h3",c({},{id:"macos"}),"macOS"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"mac:\nmas:\ndmg:\npkg:\n")),(0,a.kt)("h3",c({},{id:"windows"}),"Windows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u57fa\u4e8e appId \u6216 name \u8ba1\u7b97 guid"),(0,a.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 guid")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"# Windows \u6784\u5efa\u914d\u7f6e\nwin:\n  # nsis, nsis-web, portable, appx, msi, squirrel, 7z, zip, tar.xz, tar.lz, tar.gz, tar.bz2, dir\n  target:\n    - nsis\n    - target: nsis\n      arch:\n        - x64\n        - ia32\n  icon: build/icon.ico\n  # legalTrademarks:\nnsis:\n  oneClick: true\n  perMachine: false\n  allowElevation: true\n  allowToChangeInstallationDirectory: false\n\n  # Install\n  installerIcon: build/installerIcon.ico\n  uninstallerIcon: build/uninstallerIcon.ico\n  installerHeader: build/installerHeader.bmp\n  installerHeaderIcon: build/installerHeaderIcon.ico\n  # 164 \xd7 314\n  # ${NSISDIR}\\\\Contrib\\\\Graphics\\\\Wizard\\\\nsis3-metro.bmp\n  installerSidebar: build/installerSidebar.bmp\n  # build/installerSidebar.bmp\n  # ${NSISDIR}\\\\Contrib\\\\Graphics\\\\Wizard\\\\nsis3-metro.bmp\n  uninstallerSidebar: build/uninstallerSidebar.bmp\n  uninstallDisplayName: ${productName} ${version}\n\n  # Script\n  include: build/installer.nsh\n  script: build/installer.nsi\n  # {license,eula}.{txt,html}\n  # _zh,_en - \u652f\u6301\u591a\u8bed\u8a00\n  license:\n  artifactName: ${productName} Setup ${version}.${ext}\n  # one-click \u5b89\u88c5\u65f6\u662f\u5426\u5378\u8f7d\u65f6\u5220\u9664 app \u6570\u636e\n  deleteAppDataOnUninstall: false\n  # nsis-web\n  differentialPackage: true\n\n  # \u6b63\u5e38 installer \u8bed\u8a00\u914d\u7f6e\n  displayLanguageSelector: false\n  installerLanguages: []\n  # https://msdn.microsoft.com/en-au/goglobal/bb964664.aspx\n  # 1033 -> English - United States\n  language: 1033\n  multiLanguageInstaller:\n  packElevateHelper: true\n  preCompressedFileExtensions: ['.avi', '.mov', '.m4v', '.mp4', '.m4p', '.qt', '.mkv', '.webm', '.vmdk']\n  unicode: true\n  # \u4f7f\u7528 GUID \u800c\u4e0d\u662f\u5e94\u7528\u540d\u5b57\n  guid:\n  warningsAsErrors: true\n  runAfterFinish: true\n\n  createDesktopShortcut: true\n  createStartMenuShortcut: true\n  menuCategory: false\n  # \u9ed8\u8ba4\u5e94\u7528\u540d\u5b57\n  shortcutName:\nnsisWeb:\n  # \u9ed8\u8ba4\u901a\u8fc7 publish \u8ba1\u7b97\n  # \u81ea\u5b9a\u4e49 X-Arch \u5934\n  appPackageUrl: https://example.com/download/latest\n  artifactName: ${productName} Web Setup ${version}.${ext}\n  portable:\n  # user, highest, admin\n  requestExecutionLevel: user\n  # TEMP \u76ee\u5f55\u540d - \u9ed8\u8ba4 build uuid\n  unpackDirName:\nappx:\nsquirrelWindows:\n")),(0,a.kt)("h3",c({},{id:"publish"}),"Publish"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"provider",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"github - \u9ed8\u8ba4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"env GH_TOKEN, GITHUB_TOKEN"),(0,a.kt)("li",{parentName:"ul"},"repo, owner, vPrefixedTagName=true, host=github.com, protocol=https, token, private, releaseType=draft"))))),(0,a.kt)("li",{parentName:"ul"},"PublishConfiguration",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"publishAutoUpdate=true"))),(0,a.kt)("li",{parentName:"ul"},"--publish - \u63a7\u5236\u4ec0\u4e48\u65f6\u5019\u53d1\u5e03",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"onTag"),(0,a.kt)("li",{parentName:"ul"},"onTagOrDraft"),(0,a.kt)("li",{parentName:"ul"},"always"),(0,a.kt)("li",{parentName:"ul"},"never")))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"publish:\n  - provider: s3 # env AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY\n    bucket:\n    endpoint: http://minio:3000\n    channel: latest\n    path: /\n    # public-read | private | null\n    acl: null\n    storageClass: STANDARD\n  - provider: generic\n    url:\n    channel: latest\n    useMultipleRangeRequest: true\nwin:\n  publish:\n    - github\n    - bintray\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"s3 acl")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "AllowAppS3Releases",\n      "Effect": "Allow",\n      "Action": [\n        "s3:AbortMultipartUpload",\n        "s3:GetObject",\n        "s3:GetObjectAcl",\n        "s3:GetObjectVersion",\n        "s3:ListMultipartUploadParts",\n        "s3:PutObject",\n        "s3:PutObjectAcl"\n      ],\n      "Resource": ["arn:aws:s3:::release-bucket/*"]\n    },\n    {\n      "Effect": "Allow",\n      "Action": ["s3:ListBucket", "s3:ListBucketMultipartUploads"],\n      "Resource": ["arn:aws:s3:::release-bucket"]\n    }\n  ]\n}\n')),(0,a.kt)("h2",c({},{id:"icons"}),"Icons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u653e\u5728 buildResources \u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"macOS",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"icon.icns, icon.png - 512x512"),(0,a.kt)("li",{parentName:"ul"},"background.png, ",(0,a.kt)("a",c({parentName:"li"},{href:"mailto:background@2x.png"}),"background@2x.png")," - DMG background"))),(0,a.kt)("li",{parentName:"ul"},"Windows - NSIS",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"icon.ico, icon.png - 256x256"))),(0,a.kt)("li",{parentName:"ul"},"Linux",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Windows \u6216 macOS \u751f\u6210\u6216 build/icons \u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"build/icons/iconXxX.png - 16,32,48,64,128,256,512 - \u6216\u8005\u53ea\u6709 512")))),(0,a.kt)("h2",c({},{id:"\u81ea\u52a8\u5347\u7ea7"}),"\u81ea\u52a8\u5347\u7ea7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"macOS DMG, Windows NSIS, Linux AppImage"),(0,a.kt)("li",{parentName:"ul"},"macOS \u5fc5\u987b\u8981\u7b7e\u540d")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"// AppImageUpdater, MacUpdater, NsisUpdater\nimport { autoUpdater } from 'electron-updater';\n\nexport default class AppUpdater {\n  constructor() {\n    const log = require('electron-log');\n    log.transports.file.level = 'debug';\n    autoUpdater.logger = log;\n    autoUpdater.checkForUpdatesAndNotify();\n  }\n}\n\n// \u5185\u7f6e autoUpdater \u529f\u80fd\u66f4\u5f31\n// import { autoUpdater } from \"electron\"\n")),(0,a.kt)("h2",c({},{id:"electron-updater-vs-autoupdater"}),"electron-updater vs autoUpdater"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"autoUpdater",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5185\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 macOS \u7b7e\u540d\u8ba4\u8bc1"))),(0,a.kt)("li",{parentName:"ul"},"electron-updater",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e09\u65b9"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u4e13\u95e8\u7684 \u53d1\u5e03 \u670d\u52a1\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Windows \u548c macOS \u7b7e\u540d\u8ba4\u8bc1"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u751f\u6210\u6240\u6709\u5143\u6570\u636e\u6587\u4ef6\u548c\u5347\u7ea7\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u5e73\u53f0\u652f\u6301\u4e0b\u8f7d\u8fdb\u5ea6\u548c\u90e8\u5206\u5347\u7ea7"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u652f\u6301\u8f83\u591a provider - github release, s3, http"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u7b80\u5355")))),(0,a.kt)("h2",c({},{id:"blockmap"}),"blockmap"),(0,a.kt)("p",null,"\u5305\u5185\u5bb9\u5217\u8868\uff0c\u5185\u5bb9 hash \u503c\uff0c\u5347\u7ea7\u65f6\u7528\u4e8e\u5bf9\u6bd4\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/electron-userland/electron-builder/issues/2851"}),"electron-userland/electron-builder#2851"),"\nWhat is the purpose of blockmap file?")))}v.isMDXComponent=!0}}]);