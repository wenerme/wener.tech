/*! For license information please see 69c10e36.fe13ec3c.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68140],{2264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(11527),r=t(47214);const o={title:"ESXi"},i="ESXi",l={id:"os/virt/esxi",title:"ESXi",description:"- wikipedia VMFS",source:"@site/../notes/os/virt/esxi.md",sourceDirName:"os/virt",slug:"/os/virt/esxi",permalink:"/notes/os/virt/esxi",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/esxi.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1624798319,formattedLastUpdatedAt:"Jun 27, 2021",frontMatter:{title:"ESXi"},sidebar:"docs",previous:{title:"\u865a\u62df\u5316",permalink:"/notes/os/virt/"},next:{title:"Firecracker",permalink:"/notes/os/virt/firecracker"}},a={},d=[{value:"esxcli",id:"esxcli",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"esxi",children:"ESXi"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["wikipedia ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/VMware_VMFS",children:"VMFS"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/VMware_ESXi",children:"VMware ESXi"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Elastic Sky X integrated"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/vsphere/vmw-feature-comparison.pdf",children:"VMware vSphere\xae Feature Comparison"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.vmware.com/reusable_content/vsphere_pricing.html",children:"Pricing"})}),"\n",(0,s.jsx)(n.li,{children:".vmx, .vmdk, .vmsd, .vmsn"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Item"}),(0,s.jsx)(n.th,{children:"Free"}),(0,s.jsx)(n.th,{children:"Paid"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"physical CPUs"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"768"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"physical memory"}),(0,s.jsx)(n.td,{children:"16TB"}),(0,s.jsx)(n.td,{children:"16TB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vCPUs per VM"}),(0,s.jsx)(n.td,{children:"8 vCPUs"}),(0,s.jsx)(n.td,{children:"256 vCPUs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vRAM per VM"}),(0,s.jsx)(n.td,{children:"6TB"}),(0,s.jsx)(n.td,{children:"6TB"})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"qemu-img convert -f qcow2 -O vmdk -o adapter_type=lsilogic,subformat=streamOptimized,compat6 SC-1.qcow2 SC-1.vmdk\n\n# https://github.com/alpinelinux/alpine-make-vm-image#creating-image-for-vmware-esxi\nqemu-img convert -f qcow2 -O vmdk -o adapter_type=lsilogic,subformat=monolithicFlat alpine.qcow2 alpine.vmdk\n"})}),"\n",(0,s.jsx)(n.h2,{id:"esxcli",children:"esxcli"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://code.vmware.com/docs/11743/esxi-7-0-esxcli-command-reference",children:"ESXi 7.0 ESXCLI Command Reference"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u670d\u52a1\u5668\u4fe1\u606f\nesxcli --server myESXi --username user1 --password 'my_password' --thumbprint\n\n# \u8f93\u51fa\u683c\u5f0f\nesxcli --formatter=csv storage filesystem list\n\nesxcli --server MyVC --vihost MyESXi storage filesystem list\n\n# \u5347\u7ea7\nesxcli software vib\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u7cfb\u7edf\u7ba1\u7406\n# ==========\n# \u7ef4\u62a4\u6a21\u5f0f\nsystem maintenanceMode set --enable true\n\n# system module list --module=<module_name>\nsystem module list --enabled=true\nsystem module list --loaded=true\n# \u542f\u7528\nsystem module set --module=<module_name> --enabled=true\n# \u53c2\u6570\nsystem module parameters set --module=<module_name> --parameter-string=<parameter_string>\n# \u9a8c\u8bc1\nsystem module parameters list --module=<module_name>\n\n\n# \u7ec4\u4ef6\u7ba1\u7406\n# ==========\n# \u7cfb\u7edf\u7ec4\u4ef6\nsoftware component list\n# \u7ec4\u4ef6\u4fe1\u606f <component_name>:<version>\nsoftware component get -n <component_name>\nsoftware baseimage get\nsoftware addon get\n# \u4ed3\u5e93 - index.xml \u6216\u8005 zip\nsoftware sources component list -d <depot_url_or_offline_bundle_path>\n# \u8be6\u7ec6\u4fe1\u606f\nsoftware sources component get -n <component_name> -d <depot_url_or_offline_bundle_path>\n# \u5b89\u88c5\nsoftware component apply -n <component_name>:<version> -d <depot_url_or_offline_bundle_path>\n# \u79fb\u9664\nsoftware component remove -n <component_name>\n\n# \u7ba1\u7406 baseimage\nsoftware sources baseimage list -d <depot_url_or_offline_bundle_path>\nsoftware sources baseimage get -b <base_image_version> -d <depot_url_or_offline_bundle_path>\nsoftware sources addon list -d <depot_url_or_offline_bundle_path>\nsoftware sources addon get -a <add-on_name> -d <depot_url_or_offline_bundle_path>\n\n# \u901a\u8fc7 JSON \u914d\u7f6e\nsoftware apply -s <location_of_software_spec>.json -d <depot_url_or_offline_bundle_path>\n\n\n# \u5b58\u50a8\u7ba1\u7406\n# ==========\n# \u6302\u8f7d\u7684\u5377\nstorage filesystem list\n# \u5378\u8f7d\nstorage filesystem unmount\n# \u5feb\u7167\nstorage vmfs\n\n# \u6302\u8f7d\nstorage filesystem volume mount --volume-label=<label>|--volume-uuid=<VMFSUUID>\n# \u5378\u8f7d\nstorage filesystem volume unmount --volume-label=<label>|--volume-uuid=<VMFSUUID>\n\n# \u5feb\u7167\u5217\u8868\nstorage vmfs snapshot list\nstorage filesystem unmount\nstorage vmfs snapshot resignature --volume-label=<label>|--volume-uuid=<id>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3354:(e,n,t)=>{var s=t(50959),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var s,o={},d=null,c=null;for(s in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,s)&&!a.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:d,ref:c,props:o,_owner:l.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(50959);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);