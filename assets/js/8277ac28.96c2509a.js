"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[32875],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14353:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return N},default:function(){return f},frontMatter:function(){return k},metadata:function(){return O},toc:function(){return D}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>l(e,o(t)),c=(e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const k={title:"Android Build",tags:["Build"]},N="Android Build",O={unversionedId:"os/android/android-build",id:"os/android/android-build",title:"Android Build",description:"- AGP",source:"@site/../notes/os/android/android-build.md",sourceDirName:"os/android",slug:"/os/android/build",permalink:"/notes/os/android/build",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/android/android-build.md",tags:[{label:"Build",permalink:"/notes/tags/build"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1702882608,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"Android Build",tags:["Build"]},sidebar:"docs",previous:{title:"Android Awesome",permalink:"/notes/os/android/awesome"},next:{title:"Android Version",permalink:"/notes/os/android/version"}},g={},D=[{value:"env",id:"env",level:2},{value:"SDK",id:"sdk",level:2},{value:"NDK",id:"ndk",level:2},{value:"Build",id:"build",level:2},{value:"Dependant package with key emulator not found",id:"dependant-package-with-key-emulator-not-found",level:2},{value:"Installed Build Tools revision 33.0.0 is corrupted. Remove and install again using the SDK Manager.",id:"installed-build-tools-revision-3300-is-corrupted-remove-and-install-again-using-the-sdk-manager",level:2},{value:"Failed to install the following Android SDK packages as some licences have not been accepted",id:"failed-to-install-the-following-android-sdk-packages-as-some-licences-have-not-been-accepted",level:2},{value:"optimize",id:"optimize",level:2}],b={toc:D},_="wrapper";function f(e){var t=e,{components:n}=t,r=c(t,["components"]);return(0,a.kt)(_,m(u(u({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"android-build"}),"Android Build"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AGP",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"com.android.tools.build:gradle"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.android.com/studio/command-line"}),"https://developer.android.com/studio/command-line")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/alvr/alpine-android"}),"https://github.com/alvr/alpine-android")),(0,a.kt)("li",{parentName:"ul"},"ANDROID_SDK_ROOT")),(0,a.kt)("h2",u({},{id:"env"}),"env"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"env"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Android SDK")),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ANDROID_HOME"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("del",{parentName:"td"},"ANDROID_SDK_ROOT")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u4f7f\u7528 ANDROID_HOME")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ANDROID_USER_HOME"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"REPO_OS_OVERRIDE"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"windows\u3001macosx\u3001linux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ANDROID_NDK_HOME"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Emulator")),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ANDROID_EMULATOR_HOME"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"=$ANDROID_USER_HOME")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ANDROID_AVD_HOME"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"=$ANDROID_EMULATOR_HOME/avd/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ANDROID_LOG_TAGS"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"HTTP_PROXY"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ANDROID_VERBOSE"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ANDROID_HOME"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ANDROID_EMULATOR_USE_SYSTEM_LIBS"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"CMDLINE_VERSION"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ANDROID_EMULATOR_HOME=ANDROID_USER_HOME",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"$ANDROID_SDK_HOME/.android"))),(0,a.kt)("li",{parentName:"ul"},"ANDROID_HOME",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<\u7528\u6237\u540d>\\AppData\\Local\\Android\\Sdk")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/Users/<\u7528\u6237\u540d>/Library/Android/sdk")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/home/<\u7528\u6237\u540d>/Android/Sdk")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$ANDROID_HOME"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"add-ons/"),(0,a.kt)("li",{parentName:"ul"},"build-tools/ - aapt\u3001dx"),(0,a.kt)("li",{parentName:"ul"},"emulator/"),(0,a.kt)("li",{parentName:"ul"},"extras/ - \u9644\u52a0\u7684\u5e93\u548c\u652f\u6301\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"licenses/"),(0,a.kt)("li",{parentName:"ul"},"platform-tools/ - Android \u5e73\u53f0\u4ea4\u4e92\u6240\u9700\u7684\u57fa\u672c\u5de5\u5177 - adb\u3001fastboot"),(0,a.kt)("li",{parentName:"ul"},"platforms/ - \u6bcf\u4e2a Android \u7248\u672c\u7684 SDK \u5e73\u53f0\u6587\u4ef6 - \u6838\u5fc3\u5e93\u3001API"),(0,a.kt)("li",{parentName:"ul"},"skins/ - \u6a21\u62df\u5668\u7684\u76ae\u80a4\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"sources/ - \u7cfb\u7edf\u6e90\u7801"),(0,a.kt)("li",{parentName:"ul"},"system-images/ - \u6a21\u62df\u5668\u4e0d\u540c\u67b6\u6784\u7684\u7cfb\u7edf\u955c\u50cf"),(0,a.kt)("li",{parentName:"ul"},"tools/"),(0,a.kt)("li",{parentName:"ul"},"cmdline-tools/ - \u4e0d\u540c\u7248\u672c\u7684\u5de5\u5177\u96c6\uff0c\u66ff\u4ee3 tools/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"sdkmanager"),(0,a.kt)("li",{parentName:"ul"},"avdmanager"))))),(0,a.kt)("li",{parentName:"ul"},"aapt - Android Asset Packaging Tool"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.android.com/tools/variables"}),"https://developer.android.com/tools/variables"))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"export ANDROID_HOME=~/Library/Android/sdk # macOS\n\nexport PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools\n")),(0,a.kt)("h2",u({},{id:"sdk"}),"SDK"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# JDK 8\nCMDLINE_VERSION="8.0"\nSDK_TOOLS_VERSION="9123335"\n#\nCMDLINE_VERSION="9.0"\nSDK_TOOLS_VERSION="9477386"\n\nexport ANDROID_SDK_ROOT=$PWD\nexport PATH=$PATH:${ANDROID_SDK_ROOT}/cmdline-tools/${CMDLINE_VERSION}/bin:${ANDROID_SDK_ROOT}/platform-tools:${ANDROID_SDK_ROOT}/extras/google/instantapps\n\ncurl -Lo /tmp/tools.zip https://dl.google.com/android/repository/commandlinetools-linux-${SDK_TOOLS_VERSION}_latest.zip\n\nunzip -qq /tmp/tools.zip -d cmdline-tools\nmv cmdline-tools/cmdline-tools ${ANDROID_SDK_ROOT}/cmdline-tools/${CMDLINE_VERSION}\nrm /tmp/tools.zip\n\nmkdir -p ~/.android/ && touch ~/.android/repositories.cfg\n\nexport JAVA_HOME=/usr/lib/jvm/java-11-openjdk/\nsdkmanager --version\nyes | sdkmanager --sdk_root=${ANDROID_SDK_ROOT} --licenses\nsdkmanager --sdk_root=${ANDROID_SDK_ROOT} --install "platform-tools" "extras;google;instantapps"\n\n# 28.0.3, 29.0.3, 30.0.3, 31.0.0, 32.0.0, 33.0.2\n# 34.0.0-rc1\nBUILD_TOOLS="30.0.3"\nTARGET_SDK=$BUILD_TOOLS\n\nBUILD_TOOLS="30.0.2"\nTARGET_SDK=32\n\nexport PATH=$PATH:${ANDROID_SDK_ROOT}/build-tools/${BUILD_TOOLS}\n\nsdkmanager --sdk_root="${ANDROID_SDK_ROOT}" --install "build-tools;${BUILD_TOOLS}" "platforms;android-${TARGET_SDK}"\n\nsdkmanager --sdk_root="${ANDROID_SDK_ROOT}" --uninstall emulator\n\nsdkmanager "build-tools;29.0.2" # \u65e0 arm64, 30.0.2 \u4e5f \u65e0\nsdkmanager "build-tools;31.0.0" # \u6709 arm 64\n')),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-groovy"}),'android {\n    buildToolsVersion "33.0.1"\n}\n')),(0,a.kt)("h2",u({},{id:"ndk"}),"NDK"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.android.com/ndk/downloads"}),"https://developer.android.com/ndk/downloads"))),(0,a.kt)("h2",u({},{id:"build"}),"Build"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'export ANDROID_SDK_ROOT=/cache/opt/android/\nexport CMDLINE_VERSION="9.0"\nexport PATH=$PATH:${ANDROID_SDK_ROOT}/cmdline-tools/${CMDLINE_VERSION}/bin:${ANDROID_SDK_ROOT}/platform-tools:${ANDROID_SDK_ROOT}/extras/google/instantapps\nexport JAVA_HOME=/usr/lib/jvm/java-11-openjdk/\n')),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"./gradlew assembleRelease\n./gradlew assembleDebug\n")),(0,a.kt)("h2",u({},{id:"dependant-package-with-key-emulator-not-found"}),"Dependant package with key emulator not found"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"build-tools 29 emulator \u65e0 arm64"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/google/android-emulator-container-scripts/issues/192"}),"https://github.com/google/android-emulator-container-scripts/issues/192")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.android.com/studio/releases/emulator#emulator_for_arm64_hosts"}),"https://developer.android.com/studio/releases/emulator#emulator_for_arm64_hosts"))),(0,a.kt)("h2",u({},{id:"installed-build-tools-revision-3300-is-corrupted-remove-and-install-again-using-the-sdk-manager"}),"Installed Build Tools revision 33.0.0 is corrupted. Remove and install again using the SDK Manager."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'sdkmanager "build-tools;33.0.0"\nsdkmanager "build-tools;31.0.0"\n\n# \u5347\u7ea7 AGP to 7.x \u6216 d8 -> dx\ncd $ANDROID_SDK_ROOT/build-tools/33.0.0\ncp d8 dx\ncd lib\ncp d8.jar dx.jar\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/questions/68387270"}),"https://stackoverflow.com/questions/68387270"))),(0,a.kt)("h2",u({},{id:"failed-to-install-the-following-android-sdk-packages-as-some-licences-have-not-been-accepted"}),"Failed to install the following Android SDK packages as some licences have not been accepted"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"yes | sdkmanager --licenses\n")),(0,a.kt)("h2",u({},{id:"optimize"}),"optimize"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"org.gradle.daemon=true\norg.gradle.parallel=true\norg.gradle.caching=true\n\norg.gradle.jvmargs=-Xmx2048m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"--configuration-cache")))}f.isMDXComponent=!0}}]);