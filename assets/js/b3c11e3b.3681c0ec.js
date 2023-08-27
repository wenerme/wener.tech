"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85345],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11455:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return h}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&s(e,n,t[n]);return e};const c={title:"nano"},m="nano",f={unversionedId:"os/linux/shell/nano",id:"os/linux/shell/nano",title:"nano",description:"- nano.1",source:"@site/../notes/os/linux/shell/nano.md",sourceDirName:"os/linux/shell",slug:"/os/linux/shell/nano",permalink:"/notes/os/linux/shell/nano",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/shell/nano.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693133627,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{title:"nano"},sidebar:"docs",previous:{title:"lsof",permalink:"/notes/os/linux/shell/lsof"},next:{title:"rename",permalink:"/notes/os/linux/shell/rename"}},b={},h=[{value:"nanorc",id:"nanorc",level:2},{value:"\u5feb\u6377\u952e",id:"\u5feb\u6377\u952e",level:2}],k={toc:h};function g(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},k),s),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"nano"}),"nano"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://www.nano-editor.org/dist/latest/nano.1.html"}),"nano.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://www.nano-editor.org/dist/latest/nanorc.5.html"}),"nanorc.5"))),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"apk add nano # 308 kB\n")),(0,r.kt)("h2",d({},{id:"nanorc"}),"nanorc"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"# \u9ed8\u8ba4\u4e3a 8\nset tabsize 4\n")),(0,r.kt)("h2",d({},{id:"\u5feb\u6377\u952e"}),"\u5feb\u6377\u952e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<C-k><C-u><C-u>")," \u590d\u5236\u5f53\u524d\u884c")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u6309\u952e"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u64cd\u4f5c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<C-g> / <F1>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u5e2e\u52a9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<C-x> / <F2>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u9000\u51fa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<C-o> / <F3>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u4fdd\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<C-j> / <F4>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u683c\u5f0f\u8c03\u6574")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<C-r> / <F5>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u8bfb\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<C-w> / <F6>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u641c\u7d22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<C-y> / <F7>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u4e0a\u4e00\u9875")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<C-v> / <F8>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u4e0b\u4e00\u9875")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<C-k> / <F9>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u526a\u5207")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<C-u> / <F10>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u7c98\u8d34")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<C-c> / <F11>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u5f53\u524d\u4f4d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<C-t> / <F12>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u62fc\u5199\u68c0\u67e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<M-\\\\> / <M-\\|>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u7b2c\u4e00\u884c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<M-/> / <M-?\\|>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u6700\u540e\u4e00\u884c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<C-\\_> / <F13> / <M-g>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u8df3\u8f6c\u5230\u6307\u5b9a\u884c")))),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"^G      (F1)            Display this help text\n^X      (F2)            Close the current file buffer / Exit from nano\n^O      (F3)            Write the current file to disk\n^J      (F4)            Justify the current paragraph\n\n^R      (F5)            Insert another file into the current one\n^W      (F6)            Search for a string or a regular expression\n^Y      (F7)            Go to previous screen\n^V      (F8)            Go to next screen\n\n^K      (F9)            Cut the current line and store it in the cutbuffer\n^U      (F10)           Uncut from the cutbuffer into the current line\n^C      (F11)           Display the position of the cursor\n^T      (F12)           Invoke the spell checker, if available\n\nM-\\     (M-|)           Go to the first line of the file\nM-/     (M-?)           Go to the last line of the file\n\n^_      (F13)   (M-G)   Go to line and column number\n^\\      (F14)   (M-R)   Replace a string or a regular expression\n^^      (F15)   (M-A)   Mark text at the cursor position\nM-W     (F16)           Repeat last search\n\nM-^     (M-6)           Copy the current line and store it in the cutbuffer\nM-}                     Indent the current line\nM-{                     Unindent the current line\n^F                      Go forward one character\n^B                      Go back one character\n^Space                  Go forward one word\nM-Space                 Go back one word\n^P                      Go to previous line\n^N                      Go to next line\n\n^A                      Go to beginning of current line\n^E                      Go to end of current line\nM-(     (M-9)           Go to beginning of paragraph; then of previous paragraph\nM-)     (M-0)           Go just beyond end of paragraph; then of next paragraph\nM-]                     Go to the matching bracket\nM--     (M-\\_)           Scroll up one line without scrolling the cursor\nM-+     (M-=)           Scroll down one line without scrolling the cursor\nM-<     (M-,)           Switch to the previous file buffer\nM->     (M-.)           Switch to the next file buffer\n\nM-V                     Insert the next keystroke verbatim\n^I                      Insert a tab at the cursor position\n^M                      Insert a newline at the cursor position\n^D                      Delete the character under the cursor\n^H                      Delete the character to the left of the cursor\nM-T                     Cut from the cursor position to the end of the file\n\nM-J                     Justify the entire file\nM-D                     Count the number of words, lines, and characters\n^L                      Refresh (redraw) the current screen\n^Z                      Suspend the editor (if suspend is enabled)\n\n(M-X)                   Help mode enable/disable\n(M-C)                   Constant cursor position display enable/disable\n(M-O)                   Use of one more line for editing enable/disable\n(M-S)                   Smooth scrolling enable/disable\n(M-P)                   Whitespace display enable/disable\n(M-Y)                   Color syntax highlighting enable/disable\n(M-H)                   Smart home key enable/disable\n(M-I)                   Auto indent enable/disable\n(M-K)                   Cut to end enable/disable\n(M-L)                   Long line wrapping enable/disable\n(M-Q)                   Conversion of typed tabs to spaces enable/disable\n(M-B)                   Backup files enable/disable\n(M-F)                   Multiple file buffers enable/disable\n(M-M)                   Mouse support enable/disable\n(M-N)                   No conversion from DOS/Mac format enable/disable\n(M-Z)                   Suspension enable/disable\n(M-$)                   Soft line wrapping enable/disable\n")))}g.isMDXComponent=!0}}]);