"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[34226],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54139:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e};const m={title:"Kubernetest \u5b58\u50a8\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},d="Kubernetest \u5b58\u50a8\u5e38\u89c1\u95ee\u9898",f={unversionedId:"devops/kubernetes/storage/k8s-storage-faq",id:"devops/kubernetes/storage/k8s-storage-faq",title:"Kubernetest \u5b58\u50a8\u5e38\u89c1\u95ee\u9898",description:"OpenEBS vs Longhorn",source:"@site/../notes/devops/kubernetes/storage/k8s-storage-faq.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/k8s-storage-faq",permalink:"/notes/devops/kubernetes/storage/k8s-storage-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/storage/k8s-storage-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655970411,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{title:"Kubernetest \u5b58\u50a8\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"NFS",permalink:"/notes/devops/kubernetes/storage/k8s-nfs"},next:{title:"Local Path Provisioner",permalink:"/notes/devops/kubernetes/storage/local-path-provisioner"}},v={},k=[{value:"OpenEBS vs Longhorn",id:"openebs-vs-longhorn",level:2},{value:"pv \u5220\u9664\u4e0d\u4e86",id:"pv-\u5220\u9664\u4e0d\u4e86",level:2},{value:"volume already bound to a different claim",id:"volume-already-bound-to-a-different-claim",level:2},{value:"driver name driver.longhorn.io not found in the list of registered CSI drivers",id:"driver-name-driverlonghornio-not-found-in-the-list-of-registered-csi-drivers",level:2},{value:"\u8bbe\u7f6e\u9ed8\u8ba4 StorageClass",id:"\u8bbe\u7f6e\u9ed8\u8ba4-storageclass",level:2},{value:"failed to generate spec: path &quot;/&quot; is mounted on &quot;/&quot; but it is not a shared or slave mount",id:"failed-to-generate-spec-path--is-mounted-on--but-it-is-not-a-shared-or-slave-mount",level:2},{value:"subPath \u4f1a\u8986\u76d6\u539f\u6709\u5185\u5bb9",id:"subpath-\u4f1a\u8986\u76d6\u539f\u6709\u5185\u5bb9",level:2}],g={toc:k};function b(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},g),p),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"kubernetest-\u5b58\u50a8\u5e38\u89c1\u95ee\u9898"}),"Kubernetest \u5b58\u50a8\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h2",c({},{id:"openebs-vs-longhorn"}),"OpenEBS vs Longhorn"),(0,r.kt)("admonition",c({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4f18\u5148\u9009\u62e9 Longhorn - UI \u53cb\u597d"),(0,r.kt)("li",{parentName:"ul"},"OpenEBS \u76ee\u524d\u5f00\u53d1\u6162 - \u652f\u6301\u591a\u79cd store \u7cbe\u529b\u5206\u6563"))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OpenEBS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Jiva \u6e90\u4e8e longhorn ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/openebs/longhorn"}),"fork"),"\uff0c\u5728\u4e00\u4e9b\u5b9e\u73b0\u4e0a\u6709\u5206\u6b67",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u533a\u522b\u5df2\u7ecf\u975e\u5e38\u5927"),(0,r.kt)("li",{parentName:"ul"},"\u5206\u6b67\u70b9: Control Plane functionality, iSCSI Target implementation, Quorum, Backup / Restore, UI"))),(0,r.kt)("li",{parentName:"ul"},"OpenEBS \u9664\u4e86 Jiva \u8fd8\u6709\u5176\u4ed6\u65b9\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 localpath - localpv \u4e5f\u652f\u6301\u5f88\u591a provision \u65b9\u5f0f"))),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u66f4\u52a0\u7075\u6d3b/\u590d\u6742"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a\u573a\u666f"))),(0,r.kt)("li",{parentName:"ul"},"Longhorn",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e iSCSI \u7684\u5206\u5e03\u5f0f\u5757\u5b58\u50a8 - \u5bf9 lan \u8981\u6c42\u9ad8"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e NFS \u652f\u6301 RWX"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7b80\u5355\uff0cUI \u53cb\u597d\uff0c\u65b9\u4fbf\u5907\u4efd"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981 LocalPV \u53ef\u4f7f\u7528 - ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/rancher/local-path-provisioner"}),"rancher/local-path-provisioner"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"K3S \u5185\u7f6e")))))),(0,r.kt)("admonition",c({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"OLTP \u6570\u636e\u5e93\u4e0d\u9002\u5408 OpenEBS/Longhorn \u5206\u5e03\u5f0f\u5b58\u50a8 - \u53ef\u8bbe\u7f6e\u597d\u5907\u4efd\u5b58\u50a8"))),(0,r.kt)("h2",c({},{id:"pv-\u5220\u9664\u4e0d\u4e86"}),"pv \u5220\u9664\u4e0d\u4e86"),(0,r.kt)("p",null,"\u5c1d\u8bd5\u5220\u9664 finalizer"),(0,r.kt)("h2",c({},{id:"volume-already-bound-to-a-different-claim"}),"volume already bound to a different claim"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'# \u5982\u679c pvc \u4e0d\u5b58\u5728\u4e86\u4f46\u662f pv \u8fd8\u5728\uff0c\u65b0\u521b\u5efa pvc \u4e0d\u4f1a\u88ab\u7ed1\u5b9a\n# \u5c1d\u8bd5\u6e05\u9664 claimRef - \u8bbe\u7f6e\u4e3a null\nkubectl patch pv my-pv-name -p \'{"spec":{"claimRef": null}}\'\n')),(0,r.kt)("h2",c({},{id:"driver-name-driverlonghornio-not-found-in-the-list-of-registered-csi-drivers"}),"driver name driver.longhorn.io not found in the list of registered CSI drivers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"csi \u63d2\u4ef6\u76ee\u5f55 /var/lib/kubelet/plugins_registry"),(0,r.kt)("li",{parentName:"ul"},"hostpath /var/lib/kubelet/plugins/csi-hostpath"),(0,r.kt)("li",{parentName:"ul"},"/var/lib/kubelet/plugins"),(0,r.kt)("li",{parentName:"ul"},"k3s \u53ef\u80fd\u76ee\u5f55 /var/lib/rancher/k3s/agent/kubelet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/kubernetes-csi/csi-driver-host-path/issues/71"}),"kubernetes-csi/csi-driver-host-path#71"))),(0,r.kt)("h2",c({},{id:"\u8bbe\u7f6e\u9ed8\u8ba4-storageclass"}),"\u8bbe\u7f6e\u9ed8\u8ba4 StorageClass"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'kubectl get storageclass\n\n# \u53d6\u6d88 sc \u7684\u9ed8\u8ba4\u503c\nkubectl patch storageclass local-path -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}\'\n# \u8bbe\u7f6e\u9ed8\u8ba4\nkubectl patch storageclass longhorn -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n')),(0,r.kt)("h2",c({},{id:"failed-to-generate-spec-path--is-mounted-on--but-it-is-not-a-shared-or-slave-mount"}),'failed to generate spec: path "/" is mounted on "/" but it is not a shared or slave mount'),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"mount --make-rshared /\n")),(0,r.kt)("h2",c({},{id:"subpath-\u4f1a\u8986\u76d6\u539f\u6709\u5185\u5bb9"}),"subPath \u4f1a\u8986\u76d6\u539f\u6709\u5185\u5bb9"),(0,r.kt)("p",null,"\u4f8b\u5982:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"volumeMounts:\n  - name: data\n    mountPath: /etc/app/\n    subPath: config.yaml\n")),(0,r.kt)("p",null,"\u52a0\u5165\u6302\u8f7d\u524d /etc/app \u8fd8\u6709\u5176\u4ed6\u5185\u5bb9\uff0c\u4f46\u6302\u8f7d\u540e\u53ea\u6709 config.yaml\uff0c \u4f46\u5982\u679c\u6302\u8f7d\u8def\u5f84\u4e3a\u6587\u4ef6\u5219\u4e0d\u4f1a\u8986\u76d6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"volumeMounts:\n  - name: data\n    mountPath: /etc/app/config.yaml\n    subPath: config.yaml\n")))}b.isMDXComponent=!0}}]);