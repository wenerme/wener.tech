"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99133],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return c}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(r),c=a,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39629:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return c},default:function(){return N},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))i.call(t,r)&&u(e,r,t[r]);return e};const d={title:"Prometheus Exporter"},c="Prometheus Exporter",h={unversionedId:"service/observability/metrics/prometheus/prometheus-exporter",id:"service/observability/metrics/prometheus/prometheus-exporter",title:"Prometheus Exporter",description:"- exporters and integration",source:"@site/../notes/service/observability/metrics/prometheus/prometheus-exporter.md",sourceDirName:"service/observability/metrics/prometheus",slug:"/service/observability/metrics/prometheus/exporter",permalink:"/notes/service/observability/metrics/prometheus/exporter",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/metrics/prometheus/prometheus-exporter.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647510739,formattedLastUpdatedAt:"Mar 17, 2022",frontMatter:{title:"Prometheus Exporter"},sidebar:"docs",previous:{title:"Prometheus Agent Mode",permalink:"/notes/service/observability/metrics/prometheus/agent"},next:{title:"Prometheus FAQ",permalink:"/notes/service/observability/metrics/prometheus/faq"}},b={},k=[{value:"blackbox-exporter",id:"blackbox-exporter",level:3},{value:"snmp-exporter",id:"snmp-exporter",level:2},{value:"cadvisor",id:"cadvisor",level:2}],g={toc:k};function N(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),u),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"prometheus-exporter"}),"Prometheus Exporter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://prometheus.io/docs/instrumenting/exporters/"}),"exporters and integration"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7aef\u53e3")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u670d\u52a1"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u7aef\u53e3"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u76d1\u63a7\u9762\u677f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/prometheus/blackbox_exporter"}),"blackbox_exporter")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9115"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u68c0\u6d4b HTTP, HTTPS, DNS, TCP, ICMP."),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/docker-infra/container_exporter"}),"container-exporter")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9104"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://grafana.net/dashboards/179"}),"Docker Dashboard"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/prometheus/jmx_exporter"}),"jmx_exporter")),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/prometheus/mysqld_exporter"}),"mysqld_exporter")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9104"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/knyar/nginx-lua-prometheus"}),"nginx-lua-prometheus")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://grafana.net/dashboards/462"}),"Nginx Overview"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/prometheus/node_exporter"}),"node_exporter")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9100"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u8282\u70b9\u72b6\u6001\u4fe1\u606f"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://grafana.net/dashboards/405"}),"Node Exporter Server Metrics"),(0,n.kt)("br",null),(0,n.kt)("a",m({parentName:"td"},{href:"https://grafana.net/dashboards/22"}),"Node exporter single server"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/wrouesnel/postgres_exporter"}),"postgres_exporter")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9178"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/oliver006/redis_exporter"}),"redis_exporter")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9121"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://grafana.net/dashboards/763"}),"Prometheus Redis"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/prometheus/snmp_exporter"}),"snmp_exporter")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9116"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"http://localhost:9116/snmp?target=1.2.3.4"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"grafana"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"3000"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"prometheus"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9090"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"brew install node_exporter\n\n# \u4ece\u6e90\u7801\u7f16\u8bd1\ngo get -u -v github.com/prometheus/node_exporter\ncd ~/gp/src/github.com/prometheus/node_exporter\nmake\n./node_exporter\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"redis_exporter")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"go get github.com/oliver006/redis_exporter\nredis_exporter\n# Prometheus Redis https://grafana.net/dashboards/763\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"mysqld_exporter")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"go get github.com/prometheus/mysqld_exporter\nexport DATA_SOURCE_NAME='login:password@(hostname:port)/'\nmysqld_exporter\n")),(0,n.kt)("h3",m({},{id:"blackbox-exporter"}),"blackbox-exporter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/prometheus/blackbox_exporter"}),"prometheus/blackbox_exporter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:9115/probe?target=google.com&module=http_2xx")," , debug=true \u4f1a\u5305\u542b\u989d\u5916\u4fe1\u606f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"probe_success"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SIGHUP"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"POST /-/reload")),(0,n.kt)("li",{parentName:"ul"},"ICMP \u9700\u8981\u66f4\u9ad8\u7684\u6743\u9650"),(0,n.kt)("li",{parentName:"ul"},"IP Hash \u8f6c\u6362 ",(0,n.kt)("inlineCode",{parentName:"li"},"(3057428492).toString(2).match(/.{8}/g).map(v=>parseInt(v,2)).join('.')"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"blackbox.yml")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/prometheus/blackbox_exporter/blob/master/CONFIGURATION.md"}),"\u914d\u7f6e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/prometheus/blackbox_exporter/blob/master/example.yml"}),"example.yml"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"# \u6a21\u5757\u914d\u7f6e - probe \u65f6\u8fdb\u884c\u5f15\u7528\nmodules:\n  http_2xx:\n    # \u5e95\u5c42 probe \u7c7b\u578b\n    # http, tcp, dns, icmp\n    prober: http\n  http_post_2xx:\n    prober: http\n    http:\n      method: POST\n  # IPv4\n  http_2xx_ipv4:\n    prober: http\n    timeout: 5s\n    http:\n      preferred_ip_protocol: \"ip4\"\n  tcp_connect:\n    prober: tcp\n  pop3s_banner:\n    prober: tcp\n    tcp:\n      query_response:\n        - expect: '^+OK'\n      tls: true\n      tls_config:\n        insecure_skip_verify: false\n  ssh_banner:\n    prober: tcp\n    tcp:\n      query_response:\n        - expect: '^SSH-2.0-'\n  irc_banner:\n    prober: tcp\n    tcp:\n      query_response:\n        - send: 'NICK prober'\n        - send: 'USER prober prober prober :prober'\n        - expect: 'PING :([^ ]+)'\n          send: 'PONG ${1}'\n        - expect: '^:[^ ]+ 001'\n  icmp:\n    prober: icmp\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"prometheus.yml")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"scrape_configs:\n  - job_name: 'blackbox'\n    metrics_path: /probe\n    params:\n      module: [http_2xx] # Look for a HTTP 200 response.\n    static_configs:\n      - targets:\n          - http://prometheus.io # Target to probe with http.\n          - https://prometheus.io # Target to probe with https.\n          - http://example.com:8080 # Target to probe with http on port 8080.\n    relabel_configs:\n      - source_labels: [__address__]\n        target_label: __param_target\n      - source_labels: [__param_target]\n        target_label: instance\n      - target_label: __address__\n        replacement: 127.0.0.1:9115 # The blackbox exporter's real hostname:port.\n")),(0,n.kt)("h2",m({},{id:"snmp-exporter"}),"snmp-exporter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 9116"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 ",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/prometheus/snmp_exporter/blob/master/generator/generator.yml"}),"generator.yaml")),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 ",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/prometheus/snmp_exporter/blob/master/snmp.yml"}),"snmp.yml"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"apcups"),(0,n.kt)("li",{parentName:"ul"},"arista_sw"),(0,n.kt)("li",{parentName:"ul"},"cisco_wlc"),(0,n.kt)("li",{parentName:"ul"},"ddwrt"),(0,n.kt)("li",{parentName:"ul"},"if_mib"),(0,n.kt)("li",{parentName:"ul"},"infrapower_pdu"),(0,n.kt)("li",{parentName:"ul"},"keepalived"),(0,n.kt)("li",{parentName:"ul"},"nec_ix"),(0,n.kt)("li",{parentName:"ul"},"paloalto_fw"),(0,n.kt)("li",{parentName:"ul"},"printer_mib"),(0,n.kt)("li",{parentName:"ul"},"paritan"),(0,n.kt)("li",{parentName:"ul"},"servertech_sentry3"),(0,n.kt)("li",{parentName:"ul"},"synology"),(0,n.kt)("li",{parentName:"ul"},"ubiquiti_airfiber"),(0,n.kt)("li",{parentName:"ul"},"ubiquiti_airmax"),(0,n.kt)("li",{parentName:"ul"},"ubiquiti_unifi"))),(0,n.kt)("li",{parentName:"ul"},"/usr/share/snmp/mibs")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5\napk add -X https://mirrors.aliyun.com/alpine/edge/testing/ prometheus-snmp-exporter\n\n# /usr/share/snmp/mibs/\napk add net-snmp\n# prepare mibs\nmkdir -p $HOME/.snmp/mibs\ncurl -O https://raw.githubusercontent.com/prometheus/snmp_exporter/master/generator/Makefile\nmake mibs MIBDIR=$HOME/.snmp/mibs\ncurl -LOC- https://raw.githubusercontent.com/prometheus/snmp_exporter/master/generator/generator.yml\n\n# docker \u542f\u52a8\ndocker run --rm -it -p 9116:9116 prom/snmp-exporter\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"modules:\n  module_name:\n    walk:\n      - 1.3.6.1.2.1.2\n      - sysUpTime\n      - 1.3.6.1.2.1.31.1.1.1.6.40\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"modules:\n  module_name:  # The module name. You can have as many modules as you want.\n    walk:       # List of OIDs to walk. Can also be SNMP object names or specific instances.\n      - 1.3.6.1.2.1.2              # Same as \"interfaces\"\n      - sysUpTime                  # Same as \"1.3.6.1.2.1.1.3\"\n      - 1.3.6.1.2.1.31.1.1.1.6.40  # Instance of \"ifHCInOctets\" with index \"40\"\n\n    version: 2  # SNMP version to use. Defaults to 2.\n                # 1 will use GETNEXT, 2 and 3 use GETBULK.\n    max_repetitions: 25  # How many objects to request with GET/GETBULK, defaults to 25.\n                         # May need to be reduced for buggy devices.\n    retries: 3   # How many times to retry a failed request, defaults to 3.\n    timeout: 5s  # Timeout for each individual SNMP request, defaults to 5s.\n\n    auth:\n      # Community string is used with SNMP v1 and v2. Defaults to \"public\".\n      community: public\n\n      # v3 has different and more complex settings.\n      # Which are required depends on the security_level.\n      # The equivalent options on NetSNMP commands like snmpbulkwalk\n      # and snmpget are also listed. See snmpcmd(1).\n      username: user  # Required, no default. -u option to NetSNMP.\n      security_level: noAuthNoPriv  # Defaults to noAuthNoPriv. -l option to NetSNMP.\n                                    # Can be noAuthNoPriv, authNoPriv or authPriv.\n      password: pass  # Has no default. Also known as authKey, -A option to NetSNMP.\n                      # Required if security_level is authNoPriv or authPriv.\n      auth_protocol: MD5  # MD5 or SHA, defaults to MD5. -a option to NetSNMP.\n                          # Used if security_level is authNoPriv or authPriv.\n      priv_protocol: DES  # DES or AES, defaults to DES. -x option to NetSNMP.\n                          # Used if security_level is authPriv.\n      priv_password: otherPass # Has no default. Also known as privKey, -X option to NetSNMP.\n                               # Required if security_level is authPriv.\n      context_name: context # Has no default. -n option to NetSNMP.\n                            # Required if context is configured on the device.\n\n    lookups:  # Optional list of lookups to perform.\n              # The default for `keep_source_indexes` is false. Indexes must be unique for this option to be used.\n\n      # If the index of a table is bsnDot11EssIndex, usually that'd be the label\n      # on the resulting metrics from that table. Instead, use the index to\n      # lookup the bsnDot11EssSsid table entry and create a bsnDot11EssSsid label\n      # with that value.\n      - source_indexes: [bsnDot11EssIndex]\n        lookup: bsnDot11EssSsid\n        drop_source_indexes: false  # If true, delete source index labels for this lookup.\n                                    # This avoids label clutter when the new index is unique.\n\n     overrides: # Allows for per-module overrides of bits of MIBs\n       metricName:\n         ignore: true # Drops the metric from the output.\n         regex_extracts:\n           Temp: # A new metric will be created appending this to the metricName to become metricNameTemp.\n             - regex: '(.*)' # Regex to extract a value from the returned SNMP walks's value.\n               value: '$1' # The result will be parsed as a float64, defaults to $1.\n           Status:\n             - regex: '.*Example'\n               value: '1' # The first entry whose regex matches and whose value parses wins.\n             - regex: '.*'\n               value: '0'\n         type: DisplayString # Override the metric type, possible types are:\n                             #   gauge:   An integer with type gauge.\n                             #   counter: An integer with type counter.\n                             #   OctetString: A bit string, rendered as 0xff34.\n                             #   DateAndTime: An RFC 2579 DateAndTime byte sequence. If the device has no time zone data, UTC is used.\n                             #   DisplayString: An ASCII or UTF-8 string.\n                             #   PhysAddress48: A 48 bit MAC address, rendered as 00:01:02:03:04:ff.\n                             #   Float: A 32 bit floating-point value with type gauge.\n                             #   Double: A 64 bit floating-point value with type gauge.\n                             #   InetAddressIPv4: An IPv4 address, rendered as 1.2.3.4.\n                             #   InetAddressIPv6: An IPv6 address, rendered as 0102:0304:0506:0708:090A:0B0C:0D0E:0F10.\n                             #   InetAddress: An InetAddress per RFC 4001. Must be preceded by an InetAddressType.\n                             #   InetAddressMissingSize: An InetAddress that violates section 4.1 of RFC 4001 by\n                             #       not having the size in the index. Must be preceded by an InetAddressType.\n                             #   EnumAsInfo: An enum for which a single timeseries is created. Good for constant values.\n                             #   EnumAsStateSet: An enum with a time series per state. Good for variable low-cardinality enums.\n                             #   Bits: An RFC 2578 BITS construct, which produces a StateSet with a time series per bit.\n")),(0,n.kt)("h2",m({},{id:"cadvisor"}),"cadvisor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.docker.com/config/daemon/prometheus/"}),"docker metric"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u9a8c\u9636\u6bb5"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/google/cadvisor"}),"google/cadvisor"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u7248\u672c https://github.com/google/cadvisor/releases\n# google/cadvisor \u6ca1\u6709\u65b0\u7248\u672c tag\ndocker run \\\n  --volume=/:/rootfs:ro \\\n  --volume=/var/run:/var/run:ro \\\n  --volume=/sys:/sys:ro \\\n  --volume=/var/lib/docker/:/var/lib/docker:ro \\\n  --volume=/dev/disk/:/dev/disk:ro \\\n  --publish=8080:8080 \\\n  --detach=true \\\n  --name=cadvisor \\\n  --privileged \\\n  --device=/dev/kmsg \\\n  gcr.io/cadvisor/cadvisor:v0.36.0\n")))}N.isMDXComponent=!0}}]);