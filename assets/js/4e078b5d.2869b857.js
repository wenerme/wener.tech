/*! For license information please see 4e078b5d.2869b857.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11972],{492:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=r(2488),s=r(62780);const i={title:"goaccess"},d="goaccess",c={id:"service/observability/goaccess",title:"goaccess",description:"- allinurl/goaccess",source:"@site/../notes/service/observability/goaccess.md",sourceDirName:"service/observability",slug:"/service/observability/goaccess",permalink:"/notes/service/observability/goaccess",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/goaccess.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664328487,formattedLastUpdatedAt:"Sep 28, 2022",frontMatter:{title:"goaccess"},sidebar:"docs",previous:{title:"alertmanager",permalink:"/notes/service/observability/alertmanager"},next:{title:"Grafana",permalink:"/notes/service/observability/grafana/"}},l={},o=[{value:"Nginx",id:"nginx",level:2},{value:"Token &#39;25/Sep/2022&#39; doesn&#39;t match specifier &#39;%d&#39;",id:"token-25sep2022-doesnt-match-specifier-d",level:2},{value:"IPv4/6 is required",id:"ipv46-is-required",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"goaccess",children:"goaccess"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://github.com/allinurl/goaccess",children:"allinurl/goaccess"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"MIT, C"}),"\n",(0,t.jsx)(e.li,{children:"real-time web log analyzer and interactive viewer"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://goaccess.io/man",children:"https://goaccess.io/man"})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"brew install goaccess\n\ngoaccess access.log -o report.html --log-format=COMBINED\ngoaccess access.log -o report.html --log-format=COMBINED --real-time-html\n\nLC_ALL=C LC_TIME=en_US.UTF-8 goaccess ac.log -p goaccess.conf -o report.html -a\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"name"}),(0,t.jsx)(e.th,{children:"log-format"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"NCSA Combined Log Format"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'%h %^[%d:%t %^] "%r" %s %b "%R" "%u"'})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"NCSA Combined Log Format with Virtual Host"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'%v:%^ %h %^[%d:%t %^] "%r" %s %b "%R" "%u"'})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Common Log Format (CLF)"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'%h %^[%d:%t %^] "%r" %s %b'})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Common Log Format (CLF) with Virtual Host"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'%v:%^ %h %^[%d:%t %^] "%r" %s %b'})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"W3C"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"%d %t %h %^ %^ %^ %^ %r %^ %s %b %^ %^ %u %R"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Squid native log format"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"%^ %^ %^ %v %^: %x.%^ %~%L %h %^/%s %b %m %U"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"AWS / Amazon CloudFront (Download Distribution)"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"%d\\t%t\\t%^\\t%b\\t%h\\t%m\\t%^\\t%r\\t%s\\t%R\\t%u\\t%^"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Google Cloud Storage"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'"%x","%h",%^,%^,"%m","%U","%s",%^,"%b","%D",%^,"%R","%u"'})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"AWS / Elastic Load Balancing"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'%dT%t.%^ %^ %h:%^ %^ %T %^ %^ %^ %s %^ %b "%r" "%u"'})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"AWSS3 / Amazon Simple Storage Service (S3)"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'%^[%d:%t %^] %h %^"%r" %s %^ %b %^ %L %^ "%R" "%u"'})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Virtualmin Log Format with Virtual Host"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'%h %^ %v %^[%d:%t %^] "%r" %s %b "%R" "%u"'})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Kubernetes Nginx Ingress Log Format"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'%^ %^ [%h] %^ %^ [%d:%t %^] "%r" %s %b "%R" "%u" %^ %^ [%v] %^:%^ %^ %T %^ %^'})})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"name"}),(0,t.jsx)(e.th,{children:"for"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"COMBINED"}),(0,t.jsx)(e.td,{children:"Combined Log Format"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VCOMBINED"}),(0,t.jsx)(e.td,{children:"Combined Log Format with Virtual Host"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"COMMON"}),(0,t.jsx)(e.td,{children:"Common Log Format"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VCOMMON"}),(0,t.jsx)(e.td,{children:"Common Log Format with Virtual Host"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"W3C"}),(0,t.jsx)(e.td,{children:"W3C Extended Log File Format"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"SQUID"}),(0,t.jsx)(e.td,{children:"Native Squid Log Format"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"CLOUDFRONT"}),(0,t.jsx)(e.td,{children:"Amazon CloudFront Web Distribution"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"CLOUDSTORAGE"}),(0,t.jsx)(e.td,{children:"Google Cloud Storage"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"AWSELB"}),(0,t.jsx)(e.td,{children:"Amazon Elastic Load Balancing"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"AWSS3"}),(0,t.jsx)(e.td,{children:"Amazon Simple Storage Service (S3)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"AWSALB"}),(0,t.jsx)(e.td,{children:"Amazon Application Load Balancer"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"CADDY"}),(0,t.jsx)(e.td,{children:"Caddy's JSON Structured format"})]})]})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["CADDY JSON Structured\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:'{ts:"%x.%^",request:{remote_ip:"%h",proto:"%H",method:"%m",host:"%v",uri:"%U",headers:{"User-Agent":["%u","%^"]},tls:{cipher_suite:"%k",proto:"%K"}},duration:"%T",size:"%b",status:"%s",resp_headers:{"Content-Type":["%M;%^"]}}'})}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"specifier"}),(0,t.jsx)(e.th,{children:"for"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%^"}),(0,t.jsx)(e.td,{children:"\u5ffd\u7565"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%h"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%d"}),(0,t.jsx)(e.td,{children:"date"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%t"}),(0,t.jsx)(e.td,{children:"time"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%r"}),(0,t.jsx)(e.td,{children:"request"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%H"}),(0,t.jsx)(e.td,{children:"protocol"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%s"}),(0,t.jsx)(e.td,{children:"status code"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%q"}),(0,t.jsx)(e.td,{children:"query string"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%b"}),(0,t.jsx)(e.td,{children:"response size"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%R"}),(0,t.jsx)(e.td,{children:"Referer"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%u"}),(0,t.jsx)(e.td,{children:"User-Agent"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%T"}),(0,t.jsx)(e.td,{children:"process time - seconds"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%D"}),(0,t.jsx)(e.td,{children:"process time - ms"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%L"}),(0,t.jsx)(e.td,{children:"process time - ms decimal number"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%v"}),(0,t.jsx)(e.td,{children:"server name - virtual host"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%e"}),(0,t.jsx)(e.td,{children:"user id"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"%C"}),(0,t.jsx)(e.td,{children:"cache status"})]})]})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u81f3\u5c11\u9700\u8981 %h %d %r"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"nginx",children:"Nginx"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"log_format combined '$remote_addr - $remote_user [$time_local] '\n                    '\"$request\" $status $body_bytes_sent '\n                    '\"$http_referer\" \"$http_user_agent\"';\n\nlog_format timed_combined '$remote_addr - $remote_user [$time_local] '\n    '\"$request\" $status $body_bytes_sent '\n    '\"$http_referer\" \"$http_user_agent\" '\n    '$request_time $upstream_response_time $pipe';\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Nginx"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'time-format %H:%M:%S\ndate-format %d/%b/%Y\nlog-format %^ - %^ [%d:%t %^]  "%r" %s %b "%R" "%u" %T "%h,%^"\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Nginx with Cache & VHost"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"log_format full '$remote_addr - $remote_user [$time_local] '\n              '\"$request\" $status $body_bytes_sent '\n              '\"$http_referer\" \"$http_user_agent\" '\n              '\"$host\" $upstream_cache_status '\n              '$request_time';\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'time-format %H:%M:%S\ndate-format %d/%b/%Y\nlog-format %h - %^ [%d:%t %^] "%r" %s %b "%R" "%u" "%v" %C %T\n'})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"http://nginx.org/en/docs/http/ngx_http_log_module.html",children:"http://nginx.org/en/docs/http/ngx_http_log_module.html"})}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"http://nginx.org/en/docs/http/ngx_http_upstream_module.html",children:"http://nginx.org/en/docs/http/ngx_http_upstream_module.html"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"upstream_response_time"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.nginx.com/blog/using-nginx-logging-for-application-performance-monitoring/",children:"https://www.nginx.com/blog/using-nginx-logging-for-application-performance-monitoring/"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.digitalocean.com/community/tutorials/how-to-optimize-nginx-configuration",children:"https://www.digitalocean.com/community/tutorials/how-to-optimize-nginx-configuration"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.nginx.com/blog/10-tips-for-10x-application-performance/",children:"https://www.nginx.com/blog/10-tips-for-10x-application-performance/"})}),"\n"]}),"\n",(0,t.jsx)(e.h1,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(e.h2,{id:"token-25sep2022-doesnt-match-specifier-d",children:"Token '25/Sep/2022' doesn't match specifier '%d'"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"LC_ALL=C LC_TIME=en_US.UTF-8 goaccess access.log -p goaccess.conf -o report.html\n"})}),"\n",(0,t.jsx)(e.h2,{id:"ipv46-is-required",children:"IPv4/6 is required"}),"\n",(0,t.jsx)(e.p,{children:"%h \u672a\u5339\u914d"})]})}function a(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},38088:(n,e,r)=>{var t=r(96651),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,r){var t,i={},o=null,h=null;for(t in void 0!==r&&(o=""+r),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(h=e.ref),e)d.call(e,t)&&!l.hasOwnProperty(t)&&(i[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===i[t]&&(i[t]=e[t]);return{$$typeof:s,type:n,key:o,ref:h,props:i,_owner:c.current}}e.Fragment=i,e.jsx=o,e.jsxs=o},2488:(n,e,r)=>{n.exports=r(38088)},62780:(n,e,r)=>{r.d(e,{I:()=>c,M:()=>d});var t=r(96651);const s={},i=t.createContext(s);function d(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);