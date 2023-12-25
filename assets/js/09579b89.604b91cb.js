/*! For license information please see 09579b89.604b91cb.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10867],{37446:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var t=r(11527),i=r(47214);const s={title:"pip"},o="pip",p={id:"languages/python/pip",title:"pip",description:"Torch",source:"@site/../notes/languages/python/pip.md",sourceDirName:"languages/python",slug:"/languages/python/pip",permalink:"/notes/languages/python/pip",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/python/pip.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1681042995,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{title:"pip"},sidebar:"docs",previous:{title:"Python",permalink:"/notes/languages/python/"},next:{title:"pyenv",permalink:"/notes/languages/python/pyenv"}},a={},c=[{value:"Torch",id:"torch",level:2},{value:"Mirror",id:"mirror",level:2},{value:"Running pip as the &#39;root&#39; user can result in broken permissions",id:"running-pip-as-the-root-user-can-result-in-broken-permissions",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"pip",children:"pip"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# pip install | download | uninstall | freeze | inspect | list | show | check | config | search | cache | index | wheel | hash | debug\n"})}),"\n",(0,t.jsx)(e.h2,{id:"torch",children:"Torch"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# Torch\n# ======\npip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu\n\n# libgomp-a34b3233.so.1: pthread_attr_setaffinity_np: symbol not found\n# \u53ef\u66ff\u6362\napk add libgomp\ncp /usr/lib/python3.10/site-packages/torch/lib/libgomp-a34b3233.so.1 backup/\ncp /usr/lib/libgomp.so.1 /usr/lib/python3.10/site-packages/torch/lib/libgomp-a34b3233.so.1\n\n# libtorch_python.so: __register_atfork\n# \u65e0\u6cd5\u66ff\u6362\u53ea\u80fd\u91cd\u65b0\u7f16\u8bd1\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-py",children:"import torch\nprint(torch.__version__)\n\nprint(torch.version.cuda)\nprint(torch.backends.cudnn.version())\n\ntorch.cuda.is_available() # CUDA \u662f\u5426\u53ef\u7528\ntorch.cuda.device_count() # GPU \u6570\u91cf\ntorch.cuda.get_device_name(0) # \u8fd4\u56de GPU \u540d\u79f0\ntorch.cuda.current_device() # \u8fd4\u56de\u5f53\u524d GPU \u7d22\u5f15\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"cudnn \u4e0d\u4f1a\u652f\u6301 musl"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"mirror",children:"Mirror"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ini",metastring:'title="~/.pip/pip.conf"',children:"[global]\nindex-url = https://pypi.tuna.tsinghua.edu.cn/simple\n[install]\ntrusted-host = https://pypi.tuna.tsinghua.edu.cn\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://pypi.tuna.tsinghua.edu.cn/simple",children:"https://pypi.tuna.tsinghua.edu.cn/simple"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://pypi.mirrors.ustc.edu.cn/simple",children:"https://pypi.mirrors.ustc.edu.cn/simple"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"http://pypi.douban.com/simple",children:"http://pypi.douban.com/simple"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"http://mirrors.aliyun.com/pypi/simple",children:"http://mirrors.aliyun.com/pypi/simple"})}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/",children:"https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/"})}),"\n"]}),"\n",(0,t.jsx)(e.h1,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(e.h2,{id:"running-pip-as-the-root-user-can-result-in-broken-permissions",children:"Running pip as the 'root' user can result in broken permissions"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"--root-user-action=ignore\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"PIP_ROOT_USER_ACTION=ignore"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},3354:(n,e,r)=>{var t=r(50959),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(n,e,r){var t,s={},c=null,l=null;for(t in void 0!==r&&(c=""+r),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(l=e.ref),e)o.call(e,t)&&!a.hasOwnProperty(t)&&(s[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===s[t]&&(s[t]=e[t]);return{$$typeof:i,type:n,key:c,ref:l,props:s,_owner:p.current}}e.Fragment=s,e.jsx=c,e.jsxs=c},11527:(n,e,r)=>{n.exports=r(3354)},47214:(n,e,r)=>{r.d(e,{Z:()=>p,a:()=>o});var t=r(50959);const i={},s=t.createContext(i);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);