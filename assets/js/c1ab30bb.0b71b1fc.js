/*! For license information please see c1ab30bb.0b71b1fc.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85128],{36876:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>_,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=i(2488),s=i(62780);const l={title:"imgproxy"},t="imgproxy",c={id:"service/media/server/imgproxy",title:"imgproxy",description:"- imgproxy/imgproxy",source:"@site/../notes/service/media/server/imgproxy.md",sourceDirName:"service/media/server",slug:"/service/media/server/imgproxy",permalink:"/notes/service/media/server/imgproxy",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/media/server/imgproxy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680629704,formattedLastUpdatedAt:"Apr 4, 2023",frontMatter:{title:"imgproxy"},sidebar:"docs",previous:{title:"\u8d44\u6e90\u7ad9",permalink:"/notes/service/media/resource-awesome"},next:{title:"Jellyfin",permalink:"/notes/service/media/server/jellyfin"}},_={},h=[{value:"next.js",id:"nextjs",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"imgproxy",children:"imgproxy"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/imgproxy/imgproxy",children:"imgproxy/imgproxy"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"MIT, Go"}),"\n",(0,r.jsx)(e.li,{children:"JPEG, PNG, WebP, AVIF, GIF, SVG, ICO, HEIC, BMP, TIFF, and animated GIF and WebP"}),"\n",(0,r.jsxs)(e.li,{children:["Pro\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"PDF, MP4/H264"}),"\n",(0,r.jsx)(e.li,{children:"PDF, MP4, GIF -> MP4, Video thumbnail"}),"\n",(0,r.jsx)(e.li,{children:"\u6307\u5b9a resize \u7b97\u6cd5 linear, cubic, Lanczos3"}),"\n",(0,r.jsx)(e.li,{children:"\u586b\u5145\u534a\u900f\u660e\u80cc\u666f"}),"\n",(0,r.jsx)(e.li,{children:"\u56fe\u50cf\u8c03\u6574 - brightness, contrast, saturation"}),"\n",(0,r.jsx)(e.li,{children:"resize \u53bb\u9510\u5316"}),"\n",(0,r.jsx)(e.li,{children:"SVG \u6ce8\u5165 CSS"}),"\n",(0,r.jsx)(e.li,{children:"pipeline \u5904\u7406"}),"\n",(0,r.jsx)(e.li,{children:"\u81ea\u5b9a\u4e49\u6c34\u5370"}),"\n",(0,r.jsx)(e.li,{children:"\u9ad8\u7ea7 JPEG \u4f18\u5316"}),"\n",(0,r.jsx)(e.li,{children:"SVG \u6700\u5c0f\u5316"}),"\n",(0,r.jsx)(e.li,{children:"URL \u4f20\u9012\u4f18\u5316\u53c2\u6570"}),"\n",(0,r.jsx)(e.li,{children:"\u5bf9\u8c61\u68c0\u6d4b - \u66f4\u667a\u80fd\u7684\u88c1\u526a"}),"\n",(0,r.jsx)(e.li,{children:"SSIM \u8d28\u91cf\u8bc4\u6d4b"}),"\n",(0,r.jsx)(e.li,{children:"\u83b7\u53d6\u56fe\u50cf\u4fe1\u606f"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["HELM ",(0,r.jsx)(e.a,{href:"https://helm.imgproxy.net/",children:"https://helm.imgproxy.net/"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.admonition,{type:"caution",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["imgproxy \u4e0d\u652f\u6301\u7f13\u5b58 - \u4f7f\u7528\u7f51\u5173\u7f13\u5b58\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"next/image \u9ed8\u8ba4\u4f1a\u7f13\u5b58"}),"\n",(0,r.jsx)(e.li,{children:"\u63a8\u8350 varnish"}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.nginx.com/blog/nginx-caching-guide/",children:"NGINX Caching"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://www.haproxy.com/blog/accelerate-your-apis-by-using-the-haproxy-cache/",children:"HAProxy Caching"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e0d\u63a8\u8350"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"docker run --rm -it \\\n  -e IMGPROXY_ENABLE_WEBP_DETECTION=true \\\n  -e IMGPROXY_ENABLE_AVIF_DETECTION=true \\\n  -e IMGPROXY_USE_ETAG=true \\\n  -e IMGPROXY_CACHE_CONTROL_PASSTHROUGH=true \\\n  -e IMGPROXY_ENABLE_CLIENT_HINTS=true \\\n  -p 8080:8080 \\\n  --name imgproxy darthsim/imgproxy\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"/{signature}/{processing_options}/plain/{source_url}@{extension}\n/{signature}/{processing_options}/{encoded_source_url}.{extension}\n\n/insecure/pr:sharp/w:500/plain/http://example.com/images/curiosity.jpg\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["signature - \u7528\u4e8e\u907f\u514d\u5916\u90e8\u4fee\u6539\u53c2\u6570\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"base64(hmac(key,salt+path))"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u6ca1\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u7528 insecure"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["processing_options\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"%option_name:%argument1:%argument2:...:argumentN"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["encoded_source_url=base64(url)\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u53ef\u4ee5\u5206 segment"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"| option                |                                                | default  |\n| --------------------- | ---------------------------------------------- | -------- | ------------------------------------------ |\n| resize,rs             | %resizing_type:%width:%height:%enlarge:%extend |\n| size,s                | %width:%height:%enlarge:%extend                |\n| resizing_type,rt      | %resizing_type                                 | fit      | fit,fill,fill-down,force,auto              |\n| resizing_algorithm,ra | %algorithm                                     | lanczos3 | nearest, linear, cubic, lanczos2, lanczos3 |\n| zoom,z                |\n| dpr                   |\n| enlarge,el            |\n| extend,ex             | %extend:%gravity                               |"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"{min}-{width,height}"}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://docs.imgproxy.net/generating_the_url",children:"https://docs.imgproxy.net/generating_the_url"})}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["| env                                       |\n| ----------------------------------------- | ------------------------ | ----- |\n| IMGPROXY_KEY                              | hex(key)                 |\n| IMGPROXY_SALT                             | hex(salt)                |\n| IMGPROXY_SIGNATURE_SIZE                   | 32                       |\n| IMGPROXY_READ_TIMEOUT                     | 10                       |\n| IMGPROXY_WRITE_TIMEOUT                    | 10                       |\n| IMGPROXY_KEEP_ALIVE_TIMEOUT               | 10                       |\n| IMGPROXY_DOWNLOAD_TIMEOUT                 | 5                        |\n| IMGPROXY_CONCURRENCY                      | nprc*2                  |\n| IMGPROXY_MAX_CLIENTS                      | IMGPROXY_CONCURRENCY*10 |\n| IMGPROXY_TTL                              | 3600                     |\n| IMGPROXY_CACHE_CONTROL_PASSTHROUGH        | false                    |\n| IMGPROXY_USE_ETAG                         | false                    |\n| IMGPROXY_ENABLE_DEBUG_HEADERS             | false                    |\n| IMGPROXY_MAX_SRC_RESOLUTION               | 16.8                     |\n| IMGPROXY_MAX_SRC_FILE_SIZE                | 0                        |\n| IMGPROXY_MAX_ANIMATION_FRAMES             | 1                        |\n| IMGPROXY_MAX_SVG_CHECK_BYTES              | 32768                    |\n| IMGPROXY_MAX_REDIRECTS                    |\n| IMGPROXY_SECRET                           |\n| IMGPROXY_ALLOW_ORIGIN                     |\n| IMGPROXY_ALLOWED_SOURCES                  |\n| IMGPROXY_SANITIZE_SVG                     | true                     |\n| IMGPROXY_IGNORE_SSL_VERIFICATION          | false                    |\n| IMGPROXY_DEVELOPMENT_ERRORS_MODE          | false                    |\n| IMGPROXY_COOKIE_PASSTHROUGH               | false                    |\n| IMGPROXY_COOKIE_BASE_URL                  |\n| IMGPROXY_QUALITY                          | 80                       |\n| IMGPROXY_FORMAT_QUALITY                   | avif=50                  |\n| IMGPROXY_JPEG_PROGRESSIVE                 | false                    |\n| IMGPROXY_PNG_INTERLACED                   | false                    |\n| IMGPROXY_PNG_QUANTIZE                     | false                    |\n| IMGPROXY_PNG_QUANTIZATION_COLORS          | 256                      | 2-256 |\n| IMGPROXY_AVIF_SPEED                       | 5                        | 0-6   |\n| IMGPROXY_ENABLE_WEBP_DETECTION            |\n| IMGPROXY_ENFORCE_WEBP                     |\n| IMGPROXY_ENABLE_AVIF_DETECTION            |\n| IMGPROXY_ENFORCE_AVIF                     |\n| IMGPROXY_ENABLE_CLIENT_HINTS              | false                    |\n| ",(0,r.jsx)(e.code,{children:"IMGPROXY_WATERMARK_{DATA,PATH,URL}"}),"      |\n| IMGPROXY_WATERMARK_OPACITY                |\n| ",(0,r.jsx)(e.code,{children:"IMGPROXY_FALLBACK_IMAGE_{DATA,PATH,URL}"})," |\n| IMGPROXY_FALLBACK_IMAGE_HTTP_CODE         | 200                      |\n| IMGPROXY_FALLBACK_IMAGE_TTL               | IMGPROXY_TTL             |\n| IMGPROXY_SKIP_PROCESSING_FORMATS          |\n| IMGPROXY_PRESETS                          |\n| IMGPROXY_ONLY_PRESETS                     |\n| IMGPROXY_LOCAL_FILESYSTEM_ROOT            |\n| IMGPROXY_USE_S3                           |\n| IMGPROXY_S3_ENDPOINT                      |\n| IMGPROXY_PROMETHEUS_BIND                  |\n| IMGPROXY_PROMETHEUS_NAMESPACE             |\n| IMGPROXY_RETURN_ATTACHMENT                | false                    |\n| IMGPROXY_AUTO_ROTATE                      | true                     |\n| IMGPROXY_STRIP_COLOR_PROFILE              | true                     |\n| IMGPROXY_KEEP_COPYRIGHT                   | true                     |\n| IMGPROXY_STRIP_METADATA                   | true                     |"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u63a8\u8350\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"IMGPROXY_ENABLE_WEBP_DETECTION=true"}),"\n",(0,r.jsx)(e.li,{children:"IMGPROXY_ENABLE_AVIF_DETECTION=true"}),"\n",(0,r.jsx)(e.li,{children:"IMGPROXY_USE_ETAG=true"}),"\n",(0,r.jsxs)(e.li,{children:["IMGPROXY_CACHE_CONTROL_PASSTHROUGH=true\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4f7f\u7528\u6e90\u56fe\u7247\u7684\u7f13\u5b58\u5934\u4fe1\u606f"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"IMGPROXY_ENABLE_CLIENT_HINTS"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["IMGPROXY_ENABLE_CLIENT_HINTS\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4f7f\u7528 Width, Viewport-Width, DPR \u5934\u68c0\u6d4b\u5bbd\u5ea6"}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://developer.chrome.com/blog/automating-resource-selection-with-client-hints/",children:"Automating resource selection with client hints"})}),"\n",(0,r.jsx)(e.li,{children:"DPR -> device pixel ratio"}),"\n",(0,r.jsx)(e.li,{children:"CH -> Client Hints"}),"\n",(0,r.jsxs)(e.li,{children:["mdn ",(0,r.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-CH",children:"Accept-CH"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'\x3c!-- Chrome 46+ --\x3e\n<meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width" />\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"IMGPROXY_ETAG_BUSTER - \u4fee\u6539\u540e\u6240\u6709 ETag \u53d1\u751f\u53d8\u5316"}),"\n",(0,r.jsxs)(e.li,{children:["IMGPROXY_ENABLE_DEBUG_HEADERS=true\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"X-Origin-Content-Length"}),"\n",(0,r.jsx)(e.li,{children:"X-Origin-Width"}),"\n",(0,r.jsx)(e.li,{children:"X-Origin-Height"}),"\n",(0,r.jsx)(e.li,{children:"X-Result-Width"}),"\n",(0,r.jsx)(e.li,{children:"X-Result-Height"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"IMGPROXY_MAX_SRC_RESOLUTION - \u6700\u5927\u50cf\u7d20 - \u5355\u4f4d\u767e\u4e07"}),"\n",(0,r.jsx)(e.li,{children:"IMGPROXY_MAX_SRC_FILE_SIZE - \u6700\u5927\u6e90\u6587\u4ef6 - \u5355\u4f4d \u5b57\u8282"}),"\n",(0,r.jsx)(e.li,{children:"IMGPROXY_MAX_ANIMATION_FRAMES - \u5904\u7406\u7684\u52a8\u753b\u5e27\u6570"}),"\n",(0,r.jsx)(e.li,{children:"IMGPROXY_SECRET - \u8981\u6c42\u5ba2\u6237\u7aef\u5e26 Authorization"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"nextjs",children:"next.js"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/BitPatty/next-image-s3-imgproxy-loader",children:"https://github.com/BitPatty/next-image-s3-imgproxy-loader"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://jamesku.cc/blog/imgproxy",children:"https://jamesku.cc/blog/imgproxy"})}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},38088:(n,e,i)=>{var r=i(96651),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,i){var r,l={},h=null,d=null;for(r in void 0!==i&&(h=""+i),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(d=e.ref),e)t.call(e,r)&&!_.hasOwnProperty(r)&&(l[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===l[r]&&(l[r]=e[r]);return{$$typeof:s,type:n,key:h,ref:d,props:l,_owner:c.current}}e.Fragment=l,e.jsx=h,e.jsxs=h},2488:(n,e,i)=>{n.exports=i(38088)},62780:(n,e,i)=>{i.d(e,{I:()=>c,M:()=>t});var r=i(96651);const s={},l=r.createContext(s);function t(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);