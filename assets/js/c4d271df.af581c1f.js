"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70989],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),f=r,d=c["".concat(o,".").concat(f)]||c[f]||m[f]||i;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12574:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(96600),r=n(27279),i=(n(59496),n(49613)),l=["components"],p={title:"IPFS"},o=void 0,s={unversionedId:"dev/protocol/ipfs",id:"dev/protocol/ipfs",title:"IPFS",description:"- the InterPlanetary File System",source:"@site/notes/dev/protocol/ipfs.md",sourceDirName:"dev/protocol",slug:"/dev/protocol/ipfs",permalink:"/notes/dev/protocol/ipfs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/protocol/ipfs.md",tags:[],version:"current",frontMatter:{title:"IPFS"},sidebar:"docs",previous:{title:"HTTP 3",permalink:"/notes/dev/protocol/http3"},next:{title:"Quantum",permalink:"/notes/dev/quantum"}},u={},m=[{value:"libp2p",id:"libp2p",level:2},{value:"filestore",id:"filestore",level:2},{value:"gateway",id:"gateway",level:2}],c={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the InterPlanetary File System"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ipfs"},"ipfs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ipfspics/ipfspics-server"},"ipfs.pics"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Distributed image hosting"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/download13/ipfstube"},"ipfstube")),(0,i.kt)("li",{parentName:"ul"},"Why",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5757\u7ea7\u53bb\u91cd, \u4f7f\u5f97\u603b\u4f53\u6570\u636e\u91cf\u5f97\u5230\u538b\u7f29"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ipfs/notes/issues/208"},"Comparison of IPFS and BitTorrent for Archives")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discuss.ipfs.io/t/how-does-ipfs-compare-with-x/465"},"How does IPFS compare with X?")))))),(0,i.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"4001 - Swarm TCP"),(0,i.kt)("li",{parentName:"ul"},"4002 - Swarm uTP"),(0,i.kt)("li",{parentName:"ul"},"5001 - API",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/webui")," Web \u7ba1\u7406\u7aef"))),(0,i.kt)("li",{parentName:"ul"},"8080 - Gateway"),(0,i.kt)("li",{parentName:"ul"},"8081 - Swarm Websockets"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discuss.ipfs.io/t/is-it-possible-to-use-ipfs-for-live-video-streaming/1115"},"Is it possible to use IPFS for LIVE video streaming?")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apis.wener.me/ipfs/gateway/checker"},"IPFS \u516c\u5171\u7f51\u5173\u68c0\u6d4b")),(0,i.kt)("li",{parentName:"ul"},"\u4f18\u52bf",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 gateway - \u53ef\u4ee5\u901a\u8fc7 HTTP \u76f4\u63a5\u8bbf\u95ee"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 MFS/\u865a\u62df\u76ee\u5f55"),(0,i.kt)("li",{parentName:"ul"},"\u76ee\u6807\u662f\u66ff\u4ee3 internet \u800c\u4e0d\u662f\u5355\u7eaf\u7684 P2P \u6587\u4ef6\u5171\u4eab"),(0,i.kt)("li",{parentName:"ul"},"ipns \u66ff\u4ee3 dns\uff0cipfs \u66ff\u4ee3 internet"))),(0,i.kt)("li",{parentName:"ul"},"\u52a3\u52bf",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"IPFS \u7f51\u7edc\u76f8\u5bf9 torrent \u6ca1\u90a3\u4e48\u6210\u719f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u610f\u5473\u7740\u8282\u70b9\u5c11"),(0,i.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u5c11"))),(0,i.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5206\u53d1\u8f83\u6162"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u516c\u53f8\u91cd\u5fc3\u8f6c\u5411 filecoin"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/ipfs-ext"},"https://github.com/cloudflare/ipfs-ext"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS\nbrew install ipfs\n\n# https://docs.ipfs.io/reference/api/cli/\n# \u751f\u6210\u914d\u7f6e\u6587\u4ef6\n# \u9ed8\u8ba4\u4f4d\u4e8e $HOME/.ipfs \u53ef\u901a\u8fc7 IPFS_PATH \u66f4\u6539\nexport IPFS_PATH=$PWD/repo\n# \u4e5f\u53ef\u4ee5\u4f7f\u7528 --config \u6216 -c \u6307\u5b9a\nipfs init\n\n# \u83b7\u53d6\u914d\u7f6e\nipfs config -c $PWD/repo --json Addresses.API\n# \u4fee\u6539\u914d\u7f6e\n# \u9ed8\u8ba4\u53ea\u76d1\u542c 127.0.0.1\nipfs config Addresses.API /ip4/0.0.0.0/tcp/5001\n\n# \u542f\u52a8\u670d\u52a1\u7aef\nipfs daemon\n\n# \u53ef\u4f7f\u7528 --api \u6307\u5b9a\u8fdc\u7a0b\u63a5\u53e3\n# \u67e5\u770b\u8282\u70b9\nipfs --api /ip4/127.0.0.1/tcp/5001 swarm peers\n\n# \u5bb9\u5668\u73af\u5883\u4e2d\u4f7f\u7528 ipfs\ndocker run --rm -it -v $PWD:/host --entrypoint sh --workdir /host ipfs/go-ipfs\n\n# \u542f\u52a8\u670d\u52a1\n# -e IPFS_LOGGING=debug \u663e\u793a\u8c03\u8bd5\u65e5\u5fd7\ndocker run -it --rm \\\n   -v $PWD/repo:/data/ipfs \\\n   -p 8080:8080 -p 4001:4001 -p 5001:5001 \\\n   --name ipfs_host ipfs/go-ipfs\n\n\n# \u751f\u6210 hash \u4e0d\u6dfb\u52a0\u6587\u4ef6 - HASH \u5bf9\u5e94 IPLD file data\necho 'Hello IPFS!' | ipfs add -nq\n\n# MFS \u91cc\u6587\u4ef6\u7684 hash - \u662f\u4e00\u4e2a LINK - HASH \u5bf9\u5e94 IPLD \u591a\u4e2a file block - \u6700\u540e\u7684\u4e00\u4e2a block \u5bf9\u5e94 raw \u6570\u636e - \u76f8\u540c\u6570\u636e\u4f46\u4e0d\u540c hsah\nipfs files stat /myfile\n\n# cp \u53ef\u4ee5\u652f\u6301\u4ece add \u7684\u590d\u5236\u5230 mfs\nipfs files cp /ipfs/$(echo 'Hello IPFS!' | ipfs add -q) /hello.txt\nipfs files read /hello.txt\n")),(0,i.kt)("h2",{id:"libp2p"},"libp2p"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/libp2p/libp2p"},"libp2p/libp2p")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/libp2p/go-libp2p"},"libp2p/go-libp2p"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,i.kt)("th",{parentName:"tr",align:null},"\u76ee\u7684"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5b9e\u73b0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6570\u636e"),(0,i.kt)("td",{parentName:"tr",align:null},"applications"),(0,i.kt)("td",{parentName:"tr",align:null},"IPFS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u6570\u636e"),(0,i.kt)("td",{parentName:"tr",align:null},"naming",(0,i.kt)("br",null),"merkledag"),(0,i.kt)("td",{parentName:"tr",align:null},"IPNS",(0,i.kt)("br",null),"IPLD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u79fb\u52a8\u6570\u636e"),(0,i.kt)("td",{parentName:"tr",align:null},"exchange",(0,i.kt)("br",null),"routing",(0,i.kt)("br",null),"network"),(0,i.kt)("td",{parentName:"tr",align:null},"libp2p")))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ipld/specs/tree/master/ipld"},"https://github.com/ipld/specs/tree/master/ipld"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.cloudflare.com/distributed-web-gateway/"},"https://blog.cloudflare.com/distributed-web-gateway/"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/distributed-web/ipfs-gateway/"},"https://developers.cloudflare.com/distributed-web/ipfs-gateway/")),(0,i.kt)("h2",{id:"filestore"},"filestore"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u7528\u7279\u6027\nipfs config --json Experimental.FilestoreEnabled true\n")),(0,i.kt)("h2",{id:"gateway"},"gateway"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ipfs/go-ipfs/blob/master/docs/gateway.md"},"https://github.com/ipfs/go-ipfs/blob/master/docs/gateway.md")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ipfs/infra/blob/master/ipfs/gateway/nginx.conf"},"https://github.com/ipfs/infra/blob/master/ipfs/gateway/nginx.conf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rklaehn.github.io/2018/06/08/running-ipfs-gateway/"},"https://rklaehn.github.io/2018/06/08/running-ipfs-gateway/"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ipfs swarm connect $peer\nipfs bootstrap add $peer\n")))}f.isMDXComponent=!0}}]);