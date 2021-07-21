(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{1151:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return _}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),m=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=m(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(r),f=t,_=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return r?a.a.createElement(_,i(i({ref:n},s),{},{components:r})):a.a.createElement(_,i({ref:n},s))}));function _(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},337:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return m}));var t=r(3),a=r(8),o=(r(0),r(1151)),c={id:"terraform-cookbook",title:"Terraform \u5e38\u7528\u811a\u672c"},i={unversionedId:"ops/infra/terraform-cookbook",id:"ops/infra/terraform-cookbook",isDocsHomePage:!1,title:"Terraform \u5e38\u7528\u811a\u672c",description:"acme dns challenge",source:"@site/notes/ops/infra/terraform-cookbook.md",slug:"/ops/infra/terraform-cookbook",permalink:"/notes/ops/infra/terraform-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/terraform-cookbook.md",version:"current",sidebar:"docs",previous:{title:"cf-terraforming",permalink:"/notes/ops/infra/terraform-cf"},next:{title:"Terraform K8S",permalink:"/notes/ops/infra/terraform-k8s"}},l=[{value:"acme dns challenge",id:"acme-dns-challenge",children:[]},{value:"\u6a21\u677f\u6e32\u67d3\u89e6\u53d1\u547d\u4ee4",id:"\u6a21\u677f\u6e32\u67d3\u89e6\u53d1\u547d\u4ee4",children:[]}],s={toc:l};function m(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"acme-dns-challenge"},"acme dns challenge"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-hcl"},'variable "alicloud_access_key"{type=string}\nvariable "alicloud_secret_key"{type=string}\n\nprovider "acme" {\n  server_url = "https://acme-v02.api.letsencrypt.org/directory"\n}\n\nresource "tls_private_key" "any_wener_me_private_key" {\n  algorithm = "RSA"\n}\n\nresource "acme_registration" "any_wener_me_reg" {\n  account_key_pem = "${tls_private_key.any_wener_me_private_key.private_key_pem}"\n  email_address   = "admin@wener.me"\n}\n\nresource "acme_certificate" "any_wener_me" {\n  account_key_pem           = "${acme_registration.any_wener_me_reg.account_key_pem}"\n  common_name               = "wener.me"\n  subject_alternative_names = ["*.wener.me"]\n\n  dns_challenge {\n    provider = "alidns"\n\n    config = {\n      ALICLOUD_ACCESS_KEY    = var.alicloud_access_key\n      ALICLOUD_SECRET_KEY    = var.alicloud_secret_key\n    }\n\n    # pdns\n    # PDNS_API_KEY\n    # PDNS_API_URL\n\n    # rfc2136\n    # RFC2136_NAMESERVER - "host" or "host:port".\n    # RFC2136_TSIG_ALGORITHM - \u652f\u6301\u7b97\u6cd5 https://github.com/miekg/dns/blob/master/tsig.go#L18 - \u4e0d\u8bbe\u7f6e TSIG \u76f8\u5173\u53d8\u91cf\u5219\u7981\u7528\n    # RFC2136_TSIG_KEY\n    # RFC2136_TSIG_SECRET\n  }\n}\n\n# write cert and key\nresource "local_file" "any_wener_me_crt" {\n    sensitive_content     = acme_certificate.any_wener_me.certificate_pem\n    filename = "${path.module}/wener.me.crt"\n    file_permission = 0600\n}\nresource "local_file" "any_wener_me_key" {\n    sensitive_content     = acme_certificate.any_wener_me.private_key_pem\n    filename = "${path.module}/wener.me.key"\n    file_permission = 0600\n}\n')),Object(o.b)("h2",{id:"\u6a21\u677f\u6e32\u67d3\u89e6\u53d1\u547d\u4ee4"},"\u6a21\u677f\u6e32\u67d3\u89e6\u53d1\u547d\u4ee4"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-hcl"},'# \u6e32\u67d3\u6a21\u677f\ndata "template_file" "cluster-manifesto" {\n  template = "${file("${path.module}/cluster.yaml.tpl")}"\n  vars {\n    # ....\n  }\n}\n\n# \u5199\u5165\u6587\u4ef6\nresource "local_file" "saved-cluster-manifesto" {\n  content = "${data.template_file.cluster-manifesto.rendered}"\n  filename = "${local.cluster_manifesto_path}"\n}\n\n# \u4f7f\u7528\u6587\u4ef6\u8fdb\u884c\u64cd\u4f5c\nresource "null_resource" "cluster-upload" {\n  triggers {\n    file = "${data.template_file.cluster-manifesto.rendered}"\n  }\n\n  provisioner "local-exec" {\n    command = "kops -v 10 replace -f ${local.cluster_manifesto_path}\n  }\n}\n')))}m.isMDXComponent=!0}}]);