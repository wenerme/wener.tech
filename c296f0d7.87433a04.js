(window.webpackJsonp=window.webpackJsonp||[]).push([[834],{1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,l(l({ref:t},c),{},{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},907:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(1129)),i={title:"Longhorn \u7248\u672c"},l={unversionedId:"devops/kubernetes/storage/longhorn-version",id:"devops/kubernetes/storage/longhorn-version",isDocsHomePage:!1,title:"Longhorn \u7248\u672c",description:"v1.1",source:"@site/notes/devops/kubernetes/storage/longhorn-version.md",slug:"/devops/kubernetes/storage/longhorn-version",permalink:"/notes/devops/kubernetes/storage/longhorn-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/storage/longhorn-version.md",version:"current",sidebar:"docs",previous:{title:"Longhorn \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/storage/longhorn-faq"},next:{title:"Longhorn",permalink:"/notes/devops/kubernetes/storage/longhorn"}},s=[{value:"v1.1",id:"v11",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"v11"},"v1.1"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"2020-10-18"),Object(a.b)("li",{parentName:"ul"},"\u8bd5\u9a8c\u6027 ",Object(a.b)("a",{parentName:"li",href:"https://longhorn.io/docs/1.1.0/advanced-resources/rwx-workloads/"},"RWX"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4f1a\u542f\u52a8 NFSv4 \u63d0\u4f9b\u670d\u52a1"))),Object(a.b)("li",{parentName:"ul"},"ARM64"),Object(a.b)("li",{parentName:"ul"},"CSI Snapshotter",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"longhornio/csi-provisioner:v1.6.0"),Object(a.b)("li",{parentName:"ul"},"longhornio/csi-snapshotter:v2.1.1"),Object(a.b)("li",{parentName:"ul"},"CRD ",Object(a.b)("a",{parentName:"li",href:"https://github.com/kubernetes-csi/external-snapshotter/tree/master/client/config/crd"},"kubernetes-csi/external-snapshotter/client/config/crd")),Object(a.b)("li",{parentName:"ul"},"Controller - ",Object(a.b)("a",{parentName:"li",href:"https://github.com/kubernetes-csi/external-snapshotter/tree/master/deploy/kubernetes/snapshot-controller"},"kubernetes-csi/external-snapshotter/deploy/kubernetes/snapshot-controller")))),Object(a.b)("li",{parentName:"ul"},"Prometheus Metrics"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://longhorn.io/docs/1.1.0/high-availability/data-locality/"},"Data Locality")),Object(a.b)("li",{parentName:"ul"},"K8S v1.16+")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"# k8s >= 1.17\nkind: VolumeSnapshotClass\napiVersion: snapshot.storage.k8s.io/v1beta1\nmetadata:\n  name: longhorn\ndriver: driver.longhorn.io\ndeletionPolicy: Delete\n")))}p.isMDXComponent=!0}}]);