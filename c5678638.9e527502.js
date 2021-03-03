(window.webpackJsonp=window.webpackJsonp||[]).push([[545],{606:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(7),b=(r(0),r(749)),o={id:"prometheus-exporter",title:"Prometheus Exporter"},l={unversionedId:"devops/metrics/prometheus-exporter",id:"devops/metrics/prometheus-exporter",isDocsHomePage:!1,title:"Prometheus Exporter",description:"Prometheus Exporter",source:"@site/notes/devops/metrics/prometheus-exporter.md",slug:"/devops/metrics/prometheus-exporter",permalink:"/notes/devops/metrics/prometheus-exporter",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/metrics/prometheus-exporter.md",version:"current",sidebar:"docs",previous:{title:"PromQL",permalink:"/notes/devops/metrics/promql"},next:{title:"statsd_exporter",permalink:"/notes/devops/metrics/statsd_exporter"}},p=[{value:"Tips",id:"tips",children:[{value:"blackbox-exporter",id:"blackbox-exporter",children:[]}]},{value:"snmp-exporter",id:"snmp-exporter",children:[]},{value:"cadvisor",id:"cadvisor",children:[]}],c={rightToc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"prometheus-exporter"},"Prometheus Exporter"),Object(b.b)("h2",{id:"tips"},"Tips"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://prometheus.io/docs/instrumenting/exporters/"}),"exporters and integration"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u7aef\u53e3")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u670d\u52a1"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u7aef\u53e3"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u76d1\u63a7\u9762\u677f"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/prometheus/blackbox_exporter"}),"blackbox_exporter")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"9115"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u68c0\u6d4b HTTP, HTTPS, DNS, TCP, ICMP."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/docker-infra/container_exporter"}),"container-exporter")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"9104"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://grafana.net/dashboards/179"}),"Docker Dashboard"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/prometheus/jmx_exporter"}),"jmx_exporter")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/prometheus/mysqld_exporter"}),"mysqld-exporter")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"9104"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/prometheus/mysqld_exporter"}),"mysqld_exporter")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/knyar/nginx-lua-prometheus"}),"nginx-lua-prometheus")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://grafana.net/dashboards/462"}),"Nginx Overview"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/prometheus/node_exporter"}),"node_exporter")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"9100"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8282\u70b9\u72b6\u6001\u4fe1\u606f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://grafana.net/dashboards/405"}),"Node Exporter Server Metrics"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://grafana.net/dashboards/22"}),"Node exporter single server"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/wrouesnel/postgres_exporter"}),"postgres_exporter")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"9178"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/oliver006/redis_exporter"}),"redis-exporter")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"9121"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://grafana.net/dashboards/763"}),"Prometheus Redis"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/oliver006/redis_exporter"}),"redis_exporter")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/prometheus/snmp_exporter"}),"snmp_exporter")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"9116"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"http://localhost:9116/snmp?target=1.2.3.4"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"grafana"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3000"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"prometheus"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"9090"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew install node_exporter\n\n# \u4ece\u6e90\u7801\u7f16\u8bd1\ngo get -u -v github.com/prometheus/node_exporter\ncd ~/gp/src/github.com/prometheus/node_exporter\nmake\n./node_exporter\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"redis_exporter")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"go get github.com/oliver006/redis_exporter\nredis_exporter\n# Prometheus Redis https://grafana.net/dashboards/763\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"mysqld_exporter")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"go get github.com/prometheus/mysqld_exporter\nexport DATA_SOURCE_NAME='login:password@(hostname:port)/'\nmysqld_exporter\n")),Object(b.b)("h3",{id:"blackbox-exporter"},"blackbox-exporter"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prometheus/blackbox_exporter"}),"prometheus/blackbox_exporter")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"http://localhost:9115/probe?target=google.com&module=http_2xx")," , debug=true \u4f1a\u5305\u542b\u989d\u5916\u4fe1\u606f",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"probe_success"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"SIGHUP"),", ",Object(b.b)("inlineCode",{parentName:"li"},"POST /-/reload")),Object(b.b)("li",{parentName:"ul"},"ICMP \u9700\u8981\u66f4\u9ad8\u7684\u6743\u9650"),Object(b.b)("li",{parentName:"ul"},"IP Hash \u8f6c\u6362 ",Object(b.b)("inlineCode",{parentName:"li"},"(3057428492).toString(2).match(/.{8}/g).map(v=>parseInt(v,2)).join('.')"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"blackbox.yml")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prometheus/blackbox_exporter/blob/master/CONFIGURATION.md"}),"\u914d\u7f6e")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prometheus/blackbox_exporter/blob/master/example.yml"}),"example.yml"))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# \u6a21\u5757\u914d\u7f6e - probe \u65f6\u8fdb\u884c\u5f15\u7528\nmodules:\n  http_2xx:\n    # \u5e95\u5c42 probe \u7c7b\u578b\n    # http, tcp, dns, icmp\n    prober: http\n  http_post_2xx:\n    prober: http\n    http:\n      method: POST\n  # IPv4\n  http_2xx_ipv4:\n    prober: http\n    timeout: 5s\n    http:\n      preferred_ip_protocol: \"ip4\"\n  tcp_connect:\n    prober: tcp\n  pop3s_banner:\n    prober: tcp\n    tcp:\n      query_response:\n        - expect: '^+OK'\n      tls: true\n      tls_config:\n        insecure_skip_verify: false\n  ssh_banner:\n    prober: tcp\n    tcp:\n      query_response:\n        - expect: '^SSH-2.0-'\n  irc_banner:\n    prober: tcp\n    tcp:\n      query_response:\n        - send: 'NICK prober'\n        - send: 'USER prober prober prober :prober'\n        - expect: 'PING :([^ ]+)'\n          send: 'PONG ${1}'\n        - expect: '^:[^ ]+ 001'\n  icmp:\n    prober: icmp\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"prometheus.yml")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"scrape_configs:\n  - job_name: 'blackbox'\n    metrics_path: /probe\n    params:\n      module: [http_2xx] # Look for a HTTP 200 response.\n    static_configs:\n      - targets:\n          - http://prometheus.io # Target to probe with http.\n          - https://prometheus.io # Target to probe with https.\n          - http://example.com:8080 # Target to probe with http on port 8080.\n    relabel_configs:\n      - source_labels: [__address__]\n        target_label: __param_target\n      - source_labels: [__param_target]\n        target_label: instance\n      - target_label: __address__\n        replacement: 127.0.0.1:9115 # The blackbox exporter's real hostname:port.\n")),Object(b.b)("h2",{id:"snmp-exporter"},"snmp-exporter"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 9116"),Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 ",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prometheus/snmp_exporter/blob/master/generator/generator.yml"}),"generator.yaml")),Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 ",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prometheus/snmp_exporter/blob/master/snmp.yml"}),"snmp.yml"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"apcups"),Object(b.b)("li",{parentName:"ul"},"arista_sw"),Object(b.b)("li",{parentName:"ul"},"cisco_wlc"),Object(b.b)("li",{parentName:"ul"},"ddwrt"),Object(b.b)("li",{parentName:"ul"},"if_mib"),Object(b.b)("li",{parentName:"ul"},"infrapower_pdu"),Object(b.b)("li",{parentName:"ul"},"keepalived"),Object(b.b)("li",{parentName:"ul"},"nec_ix"),Object(b.b)("li",{parentName:"ul"},"paloalto_fw"),Object(b.b)("li",{parentName:"ul"},"printer_mib"),Object(b.b)("li",{parentName:"ul"},"paritan"),Object(b.b)("li",{parentName:"ul"},"servertech_sentry3"),Object(b.b)("li",{parentName:"ul"},"synology"),Object(b.b)("li",{parentName:"ul"},"ubiquiti_airfiber"),Object(b.b)("li",{parentName:"ul"},"ubiquiti_airmax"),Object(b.b)("li",{parentName:"ul"},"ubiquiti_unifi"))),Object(b.b)("li",{parentName:"ul"},"/usr/share/snmp/mibs")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5\napk add -X https://mirrors.aliyun.com/alpine/edge/testing/ prometheus-snmp-exporter\n\n# /usr/share/snmp/mibs/\napk add net-snmp\n# prepare mibs\nmkdir -p $HOME/.snmp/mibs\ncurl -O https://raw.githubusercontent.com/prometheus/snmp_exporter/master/generator/Makefile\nmake mibs MIBDIR=$HOME/.snmp/mibs\ncurl -LOC- https://raw.githubusercontent.com/prometheus/snmp_exporter/master/generator/generator.yml\n\n# docker \u542f\u52a8\ndocker run --rm -it -p 9116:9116 prom/snmp-exporter\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"modules:\n  module_name:\n    walk:\n      - 1.3.6.1.2.1.2\n      - sysUpTime\n      - 1.3.6.1.2.1.31.1.1.1.6.40\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"modules:\n  module_name:  # The module name. You can have as many modules as you want.\n    walk:       # List of OIDs to walk. Can also be SNMP object names or specific instances.\n      - 1.3.6.1.2.1.2              # Same as \"interfaces\"\n      - sysUpTime                  # Same as \"1.3.6.1.2.1.1.3\"\n      - 1.3.6.1.2.1.31.1.1.1.6.40  # Instance of \"ifHCInOctets\" with index \"40\"\n\n    version: 2  # SNMP version to use. Defaults to 2.\n                # 1 will use GETNEXT, 2 and 3 use GETBULK.\n    max_repetitions: 25  # How many objects to request with GET/GETBULK, defaults to 25.\n                         # May need to be reduced for buggy devices.\n    retries: 3   # How many times to retry a failed request, defaults to 3.\n    timeout: 5s  # Timeout for each individual SNMP request, defaults to 5s.\n\n    auth:\n      # Community string is used with SNMP v1 and v2. Defaults to \"public\".\n      community: public\n\n      # v3 has different and more complex settings.\n      # Which are required depends on the security_level.\n      # The equivalent options on NetSNMP commands like snmpbulkwalk\n      # and snmpget are also listed. See snmpcmd(1).\n      username: user  # Required, no default. -u option to NetSNMP.\n      security_level: noAuthNoPriv  # Defaults to noAuthNoPriv. -l option to NetSNMP.\n                                    # Can be noAuthNoPriv, authNoPriv or authPriv.\n      password: pass  # Has no default. Also known as authKey, -A option to NetSNMP.\n                      # Required if security_level is authNoPriv or authPriv.\n      auth_protocol: MD5  # MD5 or SHA, defaults to MD5. -a option to NetSNMP.\n                          # Used if security_level is authNoPriv or authPriv.\n      priv_protocol: DES  # DES or AES, defaults to DES. -x option to NetSNMP.\n                          # Used if security_level is authPriv.\n      priv_password: otherPass # Has no default. Also known as privKey, -X option to NetSNMP.\n                               # Required if security_level is authPriv.\n      context_name: context # Has no default. -n option to NetSNMP.\n                            # Required if context is configured on the device.\n\n    lookups:  # Optional list of lookups to perform.\n              # The default for `keep_source_indexes` is false. Indexes must be unique for this option to be used.\n\n      # If the index of a table is bsnDot11EssIndex, usually that'd be the label\n      # on the resulting metrics from that table. Instead, use the index to\n      # lookup the bsnDot11EssSsid table entry and create a bsnDot11EssSsid label\n      # with that value.\n      - source_indexes: [bsnDot11EssIndex]\n        lookup: bsnDot11EssSsid\n        drop_source_indexes: false  # If true, delete source index labels for this lookup.\n                                    # This avoids label clutter when the new index is unique.\n\n     overrides: # Allows for per-module overrides of bits of MIBs\n       metricName:\n         ignore: true # Drops the metric from the output.\n         regex_extracts:\n           Temp: # A new metric will be created appending this to the metricName to become metricNameTemp.\n             - regex: '(.*)' # Regex to extract a value from the returned SNMP walks's value.\n               value: '$1' # The result will be parsed as a float64, defaults to $1.\n           Status:\n             - regex: '.*Example'\n               value: '1' # The first entry whose regex matches and whose value parses wins.\n             - regex: '.*'\n               value: '0'\n         type: DisplayString # Override the metric type, possible types are:\n                             #   gauge:   An integer with type gauge.\n                             #   counter: An integer with type counter.\n                             #   OctetString: A bit string, rendered as 0xff34.\n                             #   DateAndTime: An RFC 2579 DateAndTime byte sequence. If the device has no time zone data, UTC is used.\n                             #   DisplayString: An ASCII or UTF-8 string.\n                             #   PhysAddress48: A 48 bit MAC address, rendered as 00:01:02:03:04:ff.\n                             #   Float: A 32 bit floating-point value with type gauge.\n                             #   Double: A 64 bit floating-point value with type gauge.\n                             #   InetAddressIPv4: An IPv4 address, rendered as 1.2.3.4.\n                             #   InetAddressIPv6: An IPv6 address, rendered as 0102:0304:0506:0708:090A:0B0C:0D0E:0F10.\n                             #   InetAddress: An InetAddress per RFC 4001. Must be preceded by an InetAddressType.\n                             #   InetAddressMissingSize: An InetAddress that violates section 4.1 of RFC 4001 by\n                             #       not having the size in the index. Must be preceded by an InetAddressType.\n                             #   EnumAsInfo: An enum for which a single timeseries is created. Good for constant values.\n                             #   EnumAsStateSet: An enum with a time series per state. Good for variable low-cardinality enums.\n                             #   Bits: An RFC 2578 BITS construct, which produces a StateSet with a time series per bit.\n")),Object(b.b)("h2",{id:"cadvisor"},"cadvisor"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/config/daemon/prometheus/"}),"docker metric"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5b9e\u9a8c\u9636\u6bb5"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/google/cadvisor"}),"google/cadvisor"))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u7248\u672c https://github.com/google/cadvisor/releases\n# google/cadvisor \u6ca1\u6709\u65b0\u7248\u672c tag\ndocker run \\\n  --volume=/:/rootfs:ro \\\n  --volume=/var/run:/var/run:ro \\\n  --volume=/sys:/sys:ro \\\n  --volume=/var/lib/docker/:/var/lib/docker:ro \\\n  --volume=/dev/disk/:/dev/disk:ro \\\n  --publish=8080:8080 \\\n  --detach=true \\\n  --name=cadvisor \\\n  --privileged \\\n  --device=/dev/kmsg \\\n  gcr.io/cadvisor/cadvisor:v0.36.0\n")))}s.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),i=s(r),u=a,d=i["".concat(o,".").concat(u)]||i[u]||m[u]||b;return r?n.a.createElement(d,l(l({ref:t},c),{},{components:r})):n.a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,o=new Array(b);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<b;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);