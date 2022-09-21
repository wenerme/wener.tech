"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85855],{56335:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(96600),a=n(27279),l=(n(59496),n(3905)),i=["components"],o={title:"macOS Bundle",tags:["Bundle"]},p=void 0,u={unversionedId:"os/darwin/macos-bundle",id:"os/darwin/macos-bundle",title:"macOS Bundle",description:"macOS Bundle",source:"@site/notes/os/darwin/macos-bundle.md",sourceDirName:"os/darwin",slug:"/os/darwin/macos-bundle",permalink:"/notes/os/darwin/macos-bundle",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/darwin/macos-bundle.md",tags:[{label:"Bundle",permalink:"/notes/tags/bundle"}],version:"current",frontMatter:{title:"macOS Bundle",tags:["Bundle"]},sidebar:"docs",previous:{title:"macOS Awesome",permalink:"/notes/os/darwin/macos-awesome"},next:{title:"macOS Core Foundation",permalink:"/notes/os/darwin/macos-cf"}},s={},c=[{value:"macOS Bundle",id:"macos-bundle",level:2},{value:"Structure",id:"structure",level:2},{value:"LaunchService",id:"launchservice",level:2},{value:"Info.plist",id:"infoplist",level:2},{value:"Signature",id:"signature",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"macos-bundle"},"macOS Bundle"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bundle",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u3001\u6846\u67b6\u3001\u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"Info.plist"))),(0,l.kt)("li",{parentName:"ul"},"UTI com.apple.bundle"),(0,l.kt)("li",{parentName:"ul"},"CFBundleIdentifier",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/appstoreconnectapi/bundle_ids"},"https://developer.apple.com/documentation/appstoreconnectapi/bundle_ids")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleidentifier?language=objc"},"https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleidentifier?language=objc")))),(0,l.kt)("li",{parentName:"ul"},"CFBundlePackageType",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"APPL"),(0,l.kt)("li",{parentName:"ul"},"FMWK - Framework"),(0,l.kt)("li",{parentName:"ul"},"BNDL"))),(0,l.kt)("li",{parentName:"ul"},"CF -> Core Foundation"),(0,l.kt)("li",{parentName:"ul"},"NS -> NeXTSTEP"),(0,l.kt)("li",{parentName:"ul"},"/System/Library/CoreServices/CoreTypes.bundle"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/BundleTypes/BundleTypes.html"},"Bundle Structures")),(0,l.kt)("li",{parentName:"ul"},"wikipedia ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Bundle_(macOS)"},"Bundle"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"osascript -e 'id of app \"Finder\"'\n\ncurl https://itunes.apple.com/lookup?id=497799835 | jq\ncurl https://itunes.apple.com/lookup?id=497799835 -s | jq -r '.results[0].bundleId'\n\ncat /Applications/iTerm.app/Contents/Info.plist | grep -A 1 'BundleIdentifier'\ngrep -a -A 1 'BundleIdentifier<' /Applications/*.app/Contents/Info.plist\n")),(0,l.kt)("h2",{id:"structure"},"Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Contents/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CodeResources"),(0,l.kt)("li",{parentName:"ul"},"Info.plist - xml"),(0,l.kt)("li",{parentName:"ul"},"PkgInfo - text"),(0,l.kt)("li",{parentName:"ul"},"XPCServices/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*.xpc/")," - Bundle",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Contents/"))))),(0,l.kt)("li",{parentName:"ul"},"Frameworks/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*.dynlib")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*.framework/")))),(0,l.kt)("li",{parentName:"ul"},"MacOS/"),(0,l.kt)("li",{parentName:"ul"},"Resources/"),(0,l.kt)("li",{parentName:"ul"},"_","CodeSignature/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CodeResources - plist xml - files, rules")))))),(0,l.kt)("h2",{id:"launchservice"},"LaunchService"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"~/Library/Preferences/com.apple.LaunchServices/com.apple.LaunchServices.plist"),(0,l.kt)("li",{parentName:"ul"},"Core Services > ",(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/coreservices/launch_services"},"Launch Services")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/LaunchServicesConcepts/LSCGlossary/LSCGlossary.html"},"Glossary"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# dump \u6ce8\u518c\u4fe1\u606f\n# https://ss64.com/osx/lsregister.html\n/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Versions/Current/Support/lsregister -dump\n# \u8bb0\u5f55\u7684\u4fe1\u606f\nls $TMPDIR/../0/com.apple.LaunchServices*.csstore\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"claim id",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"bindings - \u7ed1\u5b9a\u7684 schema \u548c extension",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1a sftp:, .pdf, application/pdf"))))),(0,l.kt)("li",{parentName:"ul"},"claimed schemes"),(0,l.kt)("li",{parentName:"ul"},"claimed UTIs")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'claim id:                   Plain text document (0x5920)\nlocalizedNames:             "zh_CN" = "\u7eaf\u6587\u672c\u6587\u7a3f"\nrank:                       Alternate\nbundle:                     Safari (0x1b00)\nflags:                      apple-internal  doc-type  resolves-icloud-conflicts (0000000000000222)\nroles:                      Viewer (0000000000000002)\nbindings:                   .txt, .text, \'TEXT\', text/plain\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'claim id:                   Web site location (0x592c)\nlocalizedNames:             "en" = "Web site location" "zh_CN" = "\u7f51\u7ad9\u5730\u5740"\nrank:                       Default\nbundle:                     Safari (0x1b00)\nflags:                      apple-default  apple-internal  doc-type  resolves-icloud-conflicts (0000000000000223)\nroles:                      Viewer (0000000000000002)\nbindings:                   com.microsoft.internet-shortcut, .url, \'LINK\'\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"rank",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Alternate"),(0,l.kt)("li",{parentName:"ul"},"Default"),(0,l.kt)("li",{parentName:"ul"},"None"),(0,l.kt)("li",{parentName:"ul"},"Owner")))),(0,l.kt)("h2",{id:"infoplist"},"Info.plist"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>CFBundleDevelopmentRegion</key>\n    <string>English</string>\n    <key>CFBundleDocumentTypes</key>\n    <array>\n  </array>\n</dict>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/bundleresources/information_property_list"},"https://developer.apple.com/documentation/bundleresources/information_property_list"))),(0,l.kt)("h2",{id:"signature"},"Signature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b7e\u540d\u6570\u636e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Contents/CodeResources"),(0,l.kt)("li",{parentName:"ul"},"Contents/","_","CodeSignature/CodeResources")))))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);