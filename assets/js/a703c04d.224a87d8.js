"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[43317],{49613:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(n),k=r,c=d["".concat(o,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(c,p(p({ref:e},u),{},{components:n})):a.createElement(c,p({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56858:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return k},default:function(){return f},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return g}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&u(t,n,e[n]);if(i)for(var n of i(e))s.call(e,n)&&u(t,n,e[n]);return t};const d={title:"SOPS"},k="SOPS",c={unversionedId:"security/sops",id:"security/sops",title:"SOPS",description:"- mozilla/sops",source:"@site/../notes/security/sops.md",sourceDirName:"security",slug:"/security/sops",permalink:"/notes/security/sops",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/sops.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1668846252,formattedLastUpdatedAt:"Nov 19, 2022",frontMatter:{title:"SOPS"},sidebar:"docs",previous:{title:"smallstep",permalink:"/notes/security/smallstep"},next:{title:"ssh-audit",permalink:"/notes/security/ssh-audit"}},N={},g=[{value:"spawnSync sops ENOENT",id:"spawnsync-sops-enoent",level:2}],y={toc:g};function f(t){var e,n=t,{components:r}=n,u=((t,e)=>{var n={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=m(m({},y),u),l(e,p({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"sops"}),"SOPS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/mozilla/sops"}),"mozilla/sops"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"sops \u662f\u4e2a ",(0,a.kt)("strong",{parentName:"li"},"\u7f16\u8f91\u5668")),(0,a.kt)("li",{parentName:"ul"},"\u52a0\u5bc6 yaml, json \u5b57\u6bb5\u800c\u975e\u6574\u4e2a\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 yaml, json, dotenv, plaintext, ini"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u540e\u7aef: ",(0,a.kt)("a",m({parentName:"li"},{href:"/notes/security/age"}),"age"),", pgp, vault"))),(0,a.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\u540e\u5b57\u6bb5 ",(0,a.kt)("inlineCode",{parentName:"li"},"ENC[\u7b97\u6cd5\u540d\u5b57,data:,iv:,add:,tag:]"))),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301 SSH keys + age",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/mozilla/sops/pull/1134"}),"#1134")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/mozilla/sops/pull/898"}),"#898")))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 SSH keys ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/mozilla/sops/issues/692"}),"sops#692")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"brew install sops # macOS\n# \u76f4\u63a5\u4e0b\u8f7d\ncurl -Lo ~/bin/sops https://github.com/mozilla/sops/releases/download/v3.7.3/sops-v3.7.3.darwin.amd64\nchmod 755 ~/bin/sops\n\n# \u914d\u7f6e git diff \u5904\u7406 sops \u52a0\u5bc6\u6587\u4ef6\ngit config diff.sopsdiffer.textconv \"sops -d\"\n\n# \u52a0\u5bc6\u90e8\u5206\u6587\u4ef6\nsops --encrypt --encrypted-regex '^(data|stringData)$' k8s-secrets.yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"age",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"--age,SOPS_AGE_RECIPIENTS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$XDG_CONFIG_HOME/sops/age/keys.txt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/Library/Application Support/sops/age/keys.txt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%AppData%\\sops\\age\\keys.txt"))))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml",metastring:'title="\u52a0\u5bc6\u540e\u7684\u6570\u636e"',title:'"\u52a0\u5bc6\u540e\u7684\u6570\u636e"'}),"# \u6570\u636e\na: 1\n\n# \u9644\u52a0\u6570\u636e\nsops:\n  kms: []\n  gcp_kms: []\n  azure_kv: []\n  hc_vault: []\n  age: []\n  lastmodified: '2022-11-08T01:41:42Z'\n  mac:\n  pgp:\n    - created_at: '2022-11-08T01:40:45Z'\n      enc: |-\n        -----BEGIN PGP MESSAGE-----\n        -----END PGP MESSAGE-----\n      fp:\n  unencrypted_suffix: _unencrypted\n  version: 3.7.3\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".sops.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"creation_rules:\n  - path_regex:\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"env"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"SOPS_GPG_EXEC"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"EDITOR"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"vim")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"flag"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-d,--decrypt"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-e,--encrypt"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-r,--rotate"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-p,--pgp SOPS_PGP_FP"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-a,--age SOPS_AGE_RECIPIENTS"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-i,--in-place"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--extract PATH"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--input-type TYPE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--output-type TYPE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-s,--show-master-keys"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--add-hc-vault-transit VALUE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--rm-hc-vault-transit VALUE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--add-age VALUE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--rm-age VALUE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--add-pgp VALUE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--rm-pgp VALUE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--ignore-mac"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--unencrypted-suffix SUFFIX"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--unencrypted-regex REGEX"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--cofig FILE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),'--set "PATH VALUE"'),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--shamir-secret-sharing-threshold 0"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--output FILE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--enable-local-keyservice"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--keyservice PATH"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--verbose"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))))),(0,a.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",m({},{id:"spawnsync-sops-enoent"}),"spawnSync sops ENOENT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/signageos/vscode-sops/issues/4"}),"https://github.com/signageos/vscode-sops/issues/4"))))}f.isMDXComponent=!0}}]);