"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36893],{37662:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return s}});var l=n(96600),a=n(27279),r=(n(59496),n(3905)),o=["components"],u={title:"cloudflared"},c=void 0,i={unversionedId:"platform/cloudflared",id:"platform/cloudflared",title:"cloudflared",description:"- cloudflare/cloudflared",source:"@site/notes/platform/cloudflared.md",sourceDirName:"platform",slug:"/platform/cloudflared",permalink:"/notes/platform/cloudflared",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/platform/cloudflared.md",tags:[],version:"current",frontMatter:{title:"cloudflared"},sidebar:"docs",previous:{title:"CloudFlare",permalink:"/notes/platform/cloudflare"},next:{title:"Heroku",permalink:"/notes/platform/heroku"}},d={},s=[{value:"tunnel",id:"tunnel",level:2},{value:"\u8fdc\u7a0b\u542f\u52a8 tunnel",id:"\u8fdc\u7a0b\u542f\u52a8-tunnel",level:2},{value:"config.yaml",id:"configyaml",level:2},{value:"ingress",id:"ingress",level:3},{value:"Unable to establish connection with Cloudflare edge",id:"unable-to-establish-connection-with-cloudflare-edge",level:2},{value:"failed to sufficiently increase receive buffer size",id:"failed-to-sufficiently-increase-receive-buffer-size",level:2}],p={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/cloudflared"},"cloudflare/cloudflared"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cloudflare Tunnel client - Argo Tunnel"))),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.cloudflared/config.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.cloudflared/<UUID>.json")))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/argo-tunnel-examples"},"cloudflare/argo-tunnel-examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/"},"Get started")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/cloudflare-one/tutorials/warp-to-tunnel/"},"Warp to Tunnel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/cloudflare-one/technical-limitations/"},"Technical limitations"))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"support haproxy proxy protocol ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/cloudflared/issues/369"},"#369")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS \u5b89\u88c5\nbrew install cloudflare/cloudflare/cloudflared\n# Docker \u8fd0\u884c\n# https://hub.docker.com/r/cloudflare/cloudflared\ndocker run -v ~/.cloudflared:/etc/cloudflared \\\n  --name cfd cloudflare/cloudflared:2021.4.0 \\\n  tunnel --no-autoupdate --hostname demo.wener.me --url http://localhost:8080\n# Linux \u5b89\u88c5\ncurl -Lo cloudflared https://github.com/cloudflare/cloudflared/releases/download/2021.4.0/cloudflared-linux-amd64\nchmod +x cloudflared\nsudo mv cloudflared /usr/local/bin/\n\n# \u5347\u7ea7\u7248\u672c\ncloudflared update\n\n# \u624b\u52a8\u66f4\u65b0\ncurl -Lo $(which cloudflared) https://github.com/cloudflare/cloudflared/releases/download/2021.11.0/cloudflared-linux-amd64\n")),(0,r.kt)("h2",{id:"tunnel"},"tunnel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u767b\u9646\u540e\u751f\u6210\u8bc1\u4e66 ~/.cloudflared/cert.pem\ncloudflared tunnel login\n\n# \u521b\u5efa\u540e\u751f\u6210\u914d\u7f6e ~/.cloudflared/UUID.json\ncloudflared tunnel create dev\ncloudflared tunnel list\n\n# cloudflared tunnel delete dev\n\nTUNNEL_ID=6ff42ae2-765d-4adf-8112-31c55c1551ef\ncat << YAML > ~/.cloudflared/config.yml\ntunnel: dev\ncredentials-file: $HOME/.cloudflared/$TUNNEL_ID.json\n\ningress:\n  - hostname: demo.wener.me\n    service: http://localhost:3000\n  - service: http_status:404\nYAML\n# \u6821\u9a8c\u8def\u7531\u89c4\u5219\ncloudflared tunnel ingress validate\n# \u6d4b\u8bd5\u8def\u7531\ncloudflared tunnel ingress rule https://demo.wener.me\n# \u542f\u52a8\ncloudflared tunnel run dev\n\n# \u8bbf\u95ee\u670d\u52a1\u9700\u8981\n# CNAME demo.wener.me \u5230 ${TUNNEL_ID}.cfargotunnel.com\ncloudflared tunnel route dns dev demo.wener.me\n# \u81f3\u6b64\u53ef\u4ee5\u901a\u8fc7\u901a\u9053\u8bbf\u95ee\u670d\u52a1\ncurl -L demo.wener.me\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ArgoTunnel Ports and IPs\n",(0,r.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/ports-and-ips/"},"https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/ports-and-ips/"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dig SRV _v2-origintunneld._tcp.argotunnel.com\n\n# --alt-svc altsvc.cache\ncurl --http3 https://region1.v2.argotunnel.com:7844 -kv\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bagder.github.io/HTTP3-test/"},"https://bagder.github.io/HTTP3-test/"))),(0,r.kt)("h2",{id:"\u8fdc\u7a0b\u542f\u52a8-tunnel"},"\u8fdc\u7a0b\u542f\u52a8 tunnel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cloudflared tunnel list\n# \u53ea\u9700\u8981 tunnel json\nTUNNEL_ID=6ff42ae2-765d-4adf-8112-31c55c1551ef\n# rsync \u65b9\u4fbf\u521b\u5efa\u76ee\u5f55\nrsync --no-owner ~/.cloudflared/$TUNNEL_ID.json admin@192.168.1.1:~/.cloudflared/\nrsync --no-owner ~/.cloudflared/config.yml admin@192.168.1.1:~/.cloudflared/\n")),(0,r.kt)("h2",{id:"configyaml"},"config.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u53ef\u662f\u540d\u5b57\u6216\u8005 ID\n# cloudflared tunnel run NAME-OR-ID\ntunnel: dev\ncredentials-file: /root/.cloudflared/6ff42ae2-765d-4adf-8112-31c55c1551ef.json\ningress:\n  - service: hello_world\n")),(0,r.kt)("h3",{id:"ingress"},"ingress"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u8def\u7531\u89c4\u5219\ningress:\n  # \u57df\u540d\u8def\u7531\n  - hostname: example.com\n    service: https://localhost:8000\n  # \u57df\u540d+\u8def\u5f84\u89c4\u5219\n  - hostname: '*.example.com'\n    path: /.well-known/acme-challenge/\n    service: https://localhost:8000\n  - hostname: static.example.com\n    path: /*.(jpg|png|css|js)\n    service: https://localhost:8001\n  # \u6cdb\u57df\u540d\n  - hostname: '*.example.com'\n    service: https://localhost:8002\n  # \u5339\u914d\u6240\u6709 - \u5fc5\u987b\u5305\u542b\u4e00\u4e2a\u6355\u83b7\u6240\u6709\u7684\u89c4\u5219\n  # \u672a\u5339\u914d\u7684\u8bf7\u6c42\u8fd9\u4e2a\u670d\u52a1\n  - service: https://localhost:8003\n  # \u672a\u5339\u914d\u7684\u8fd4\u56de 404\n  - service: http_status:404\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"service \u89c4\u5219")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"https://localhost:8000"),(0,r.kt)("li",{parentName:"ul"},"ssh://localhost:2222",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TCP, RDP, SSH, SMB, kubectl"))),(0,r.kt)("li",{parentName:"ul"},"bastion",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TCP, RDP, SSH, SMB, kubectl"),(0,r.kt)("li",{parentName:"ul"},"cloudflared \u4f5c\u4e3a\u8df3\u677f\u673a"))),(0,r.kt)("li",{parentName:"ul"},"hello_world",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u670d\u52a1"))),(0,r.kt)("li",{parentName:"ul"},"tcp://localhost:8000"),(0,r.kt)("li",{parentName:"ul"},"unix:/home/production/echo.sock"),(0,r.kt)("li",{parentName:"ul"},"http_status:404",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u72b6\u6001\u7801")))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u8def\u7531 Root Domain \u53ea\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"li"},"A")," \u8bb0\u5f55\u5373\u53ef",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"IP \u4efb\u610f\uff0c\u4e0d\u91cd\u8981"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress/"},"Ingress rules"))),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"unable-to-establish-connection-with-cloudflare-edge"},"Unable to establish connection with Cloudflare edge"),(0,r.kt)("p",null,"7844 \u7aef\u53e3\u53ef\u80fd\u88ab block\uff0c \u65e0\u6cd5\u8fdb\u884c quic \u94fe\u63a5"),(0,r.kt)("h2",{id:"failed-to-sufficiently-increase-receive-buffer-size"},"failed to sufficiently increase receive buffer size"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9ed8\u8ba4 208kiB\nsysctl net.core.rmem_max\n\n# \u4fee\u6539\u4e3a 2.5 MB\nsysctl -w net.core.rmem_max=2500000\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UDP receive buffer"),(0,r.kt)("li",{parentName:"ul"},"was: 208 kiB, wanted: 2048 kiB, got: 416 kiB"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size"},"https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size"))))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return p}});var l=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),i=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||r;return n?l.createElement(m,o(o({ref:t},s),{},{components:n})):l.createElement(m,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<r;i++)o[i]=n[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);