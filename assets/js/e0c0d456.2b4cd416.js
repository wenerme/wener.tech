"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52917],{49613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},96924:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return b}});var a=t(49613),o=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,h=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))u.call(n,t)&&c(e,t,n[t]);return e};const p={title:"nebula"},d="nebula",m={unversionedId:"service/network/nebula",id:"service/network/nebula",title:"nebula",description:"- slackhq/nebula \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/network/nebula.md",sourceDirName:"service/network",slug:"/service/network/nebula",permalink:"/notes/service/network/nebula",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/nebula.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1631511501,formattedLastUpdatedAt:"Sep 13, 2021",frontMatter:{title:"nebula"},sidebar:"docs",previous:{title:"NAT",permalink:"/notes/service/network/nat"},next:{title:"NetSNMP",permalink:"/notes/service/network/net-snmp"}},f={},b=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"NAT",id:"nat",level:2}],g={toc:b};function y(e){var n,t=e,{components:o}=t,c=((e,n)=>{var t={};for(var a in e)l.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))n.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=h(h({},g),c),r(n,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h1",h({},{id:"nebula"}),"nebula"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"https://github.com/slackhq/nebula"}),"slackhq/nebula")," \u662f\u4ec0\u4e48\uff1f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MIT"),(0,a.kt)("li",{parentName:"ul"},"P2P overlay \u7f51\u7edc - \u7c7b\u4f3c Tinc"),(0,a.kt)("li",{parentName:"ul"},"Layer 3 - IP \u5c42 - \u4e0d\u652f\u6301 MAC -\b \u9884\u5148\u914d\u7f6e\u7f51\u7edc"),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u91cd\u6027\u80fd\u548c\u7b80\u6d01"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 iOS \u548c Android - ",(0,a.kt)("a",h({parentName:"li"},{href:"https://github.com/DefinedNet/mobile_nebula"}),"DefinedNet/mobile_nebula"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Flutter+Go binding"))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Windows, MacOS, FreeBSD"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 elliptic curve Diffie-Hellman key exchange, AES-256-GCM"),(0,a.kt)("li",{parentName:"ul"},"Open Source Since 2019 Nov - slackhq \u5185\u90e8\u5f00\u53d1 3 \u5e74"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,a.kt)("a",h({parentName:"li"},{href:"https://noiseprotocol.org/"}),"Noise Protocol Framework."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53cc\u5411\u8ba4\u8bc1, p2p, SDN"))))),(0,a.kt)("li",{parentName:"ul"},"lighthouse \u8f85\u52a9 nat punch"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"https://youtu.be/qy2cgqglt3o"}),"Creating a Fast, Secure, Location Agnostic Mesh Network with Nebula - Ryan Huber")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"https://github.com/slackhq/nebula/issues/33"}),"slackhq/nebula#33"))))),(0,a.kt)("admonition",h({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u76f4\u8fde\u4e3a\u4e3b\uff0c\u6ca1\u6709\u7c7b\u4f3c tinc \u7684\u901a\u8fc7\u8282\u70b9\u8def\u7531\u7684\u903b\u8f91",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 lighthouse \u652f\u6301\u8def\u7531\u4e00\u4e2a\u7f51\u7edc"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"https://github.com/slackhq/nebula/issues/218"}),"#218")," Route traffic through other nodes like Tinc VPN"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"https://github.com/slackhq/nebula/issues/204"}),"#204")," Nebula does not reroute through lighthouse if hole punching does not work"))),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 unsafe_routes \u4e4b\u5916\u81ea\u5b9a\u4e49\u8def\u7531 - ",(0,a.kt)("a",h({parentName:"li"},{href:"https://github.com/slackhq/nebula/issues/274"}),"#274"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u4f7f\u7528\u9884\u5148\u5b9a\u4e49\u7684\u7f51\u7edc - \u4e0d\u80fd ",(0,a.kt)("inlineCode",{parentName:"li"},"ip ro add")),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 flannel+nebula"))),(0,a.kt)("li",{parentName:"ul"},"NAT \u4e0d\u662f\u7279\u522b\u7a33\u5b9a\uff0c\u4e0d\u4e00\u5b9a\u80fd\u7a7f\u900f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u51fa\u73b0"))),(0,a.kt)("li",{parentName:"ul"},"macOS CPU \u5360\u7528\u5f88\u9ad8 - 100M \u8dd1\u6ee1 CPU, Linux \u5927\u7ea6 20%"))),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-bash"}),'# macOS\nbrew install nebula\n# AlpineLinux\napk add nebula\n\n# ca.crt ca.key\nnebula-cert ca -name "Wener"\n# Lighthouse\n# lh-1.crt lh-1.key\nnebula-cert sign -name "lh-1" -ip "192.168.100.1/24"\ncat <<LH > lh-1.yaml\npki:\n  ca: /home/admin/ca.crt\n  cert: /home/admin/lh-1.crt\n  key: /home/admin/lh-1.key\nstatic_host_map:\n  "192.168.100.1": ["100.64.22.11:4242"]\nlighthouse:\n  am_lighthouse: true\nlisten:\n  host: 0.0.0.0\n  port: 4242\nfirewall:\n  outbound:\n  - port: any\n    proto: any\n    host: any\n  inbound:\n  - port: any\n    proto: icmp\n    host: any\n  - port: 22\n    proto: tcp\n    group: ssh\nLH\n# \u540c\u6b65\u8bc1\u4e66\u5230 lighthouse \u8282\u70b9\nscp ca.crt lh-1.yaml lh-1.crt lh-1.key admin@my-lighthouse:~\n# \u542f\u52a8\u670d\u52a1\nssh admin@my-lighthouse sudo ./nebula -config lh-1.yaml\n\n# laptop\n# \u6dfb\u52a0 ssh \u5206\u7ec4\u5373\u53ef\u8bbf\u95ee lh-1 \u7684 22 \u7aef\u53e3\nnebula-cert sign -name "laptop" -ip "192.168.100.2/24" -groups "laptop,home,ssh"\ncat <<LH > laptop.yaml\npki:\n  ca: ca.crt\n  cert: laptop.crt\n  key: laptop.key\nstatic_host_map:\n  "192.168.100.1": ["100.64.22.11:4242"]\nlighthouse:\n  hosts:\n    - "192.168.100.1"\nlisten:\n  host: 0.0.0.0\n  port: 4242\nfirewall:\n  outbound:\n  - port: any\n    proto: any\n    host: any\n  inbound:\n  - port: any\n    proto: icmp\n    host: any\nLH\nsudo nebula -config laptop.yaml\n')),(0,a.kt)("h2",h({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"https://github.com/slackhq/nebula/blob/master/examples/config.yml"}),"https://github.com/slackhq/nebula/blob/master/examples/config.yml"))),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-yaml"}),'# This is the nebula example configuration file. You must edit, at a minimum, the static_host_map, lighthouse, and firewall sections\n# Some options in this file are HUPable, including the pki section. (A HUP will reload credentials from disk without affecting existing tunnels)\n\n# PKI defines the location of credentials for this node. Each of these can also be inlined by using the yaml ": |" syntax.\npki:\n  # The CAs that are accepted by this node. Must contain one or more certificates created by \'nebula-cert ca\'\n  ca: /etc/nebula/ca.crt\n  cert: /etc/nebula/host.crt\n  key: /etc/nebula/host.key\n  #blocklist is a list of certificate fingerprints that we will refuse to talk to\n  #blocklist:\n  #  - c99d4e650533b92061b09918e838a5a0a6aaee21eed1d12fd937682865936c72\n\n# The static host map defines a set of hosts with fixed IP addresses on the internet (or any network).\n# A host can have multiple fixed IP addresses defined here, and nebula will try each when establishing a tunnel.\n# The syntax is:\n#   "{nebula ip}": ["{routable ip/dns name}:{routable port}"]\n# Example, if your lighthouse has the nebula IP of 192.168.100.1 and has the real ip address of 100.64.22.11 and runs on port 4242:\nstatic_host_map:\n  "192.168.100.1": ["100.64.22.11:4242"]\n\n\nlighthouse:\n  # am_lighthouse is used to enable lighthouse functionality for a node. This should ONLY be true on nodes\n  # you have configured to be lighthouses in your network\n  am_lighthouse: false\n  # serve_dns optionally starts a dns listener that responds to various queries and can even be\n  # delegated to for resolution\n  #serve_dns: false\n  #dns:\n    # The DNS host defines the IP to bind the dns listener to. This also allows binding to the nebula node IP.\n    #host: 0.0.0.0\n    #port: 53\n  # interval is the number of seconds between updates from this node to a lighthouse.\n  # during updates, a node sends information about its current IP addresses to each node.\n  interval: 60\n  # hosts is a list of lighthouse hosts this node should report to and query from\n  # IMPORTANT: THIS SHOULD BE EMPTY ON LIGHTHOUSE NODES\n  # IMPORTANT2: THIS SHOULD BE LIGHTHOUSES\' NEBULA IPs, NOT LIGHTHOUSES\' REAL ROUTABLE IPs\n  hosts:\n    - "192.168.100.1"\n\n  # remote_allow_list allows you to control ip ranges that this node will\n  # consider when handshaking to another node. By default, any remote IPs are\n  # allowed. You can provide CIDRs here with `true` to allow and `false` to\n  # deny. The most specific CIDR rule applies to each remote. If all rules are\n  # "allow", the default will be "deny", and vice-versa. If both "allow" and\n  # "deny" rules are present, then you MUST set a rule for "0.0.0.0/0" as the\n  # default.\n  #remote_allow_list:\n    # Example to block IPs from this subnet from being used for remote IPs.\n    #"172.16.0.0/12": false\n\n    # A more complicated example, allow public IPs but only private IPs from a specific subnet\n    #"0.0.0.0/0": true\n    #"10.0.0.0/8": false\n    #"10.42.42.0/24": true\n\n  # local_allow_list allows you to filter which local IP addresses we advertise\n  # to the lighthouses. This uses the same logic as `remote_allow_list`, but\n  # additionally, you can specify an `interfaces` map of regular expressions\n  # to match against interface names. The regexp must match the entire name.\n  # All interface rules must be either true or false (and the default will be\n  # the inverse). CIDR rules are matched after interface name rules.\n  # Default is all local IP addresses.\n  #local_allow_list:\n    # Example to block tun0 and all docker interfaces.\n    #interfaces:\n      #tun0: false\n      #\'docker.*\': false\n    # Example to only advertise this subnet to the lighthouse.\n    #"10.0.0.0/8": true\n\n# Port Nebula will be listening on. The default here is 4242. For a lighthouse node, the port should be defined,\n# however using port 0 will dynamically assign a port and is recommended for roaming nodes.\nlisten:\n  # To listen on both any ipv4 and ipv6 use "[::]"\n  host: 0.0.0.0\n  port: 4242\n  # Sets the max number of packets to pull from the kernel for each syscall (under systems that support recvmmsg)\n  # default is 64, does not support reload\n  #batch: 64\n  # Configure socket buffers for the udp side (outside), leave unset to use the system defaults. Values will be doubled by the kernel\n  # Default is net.core.rmem_default and net.core.wmem_default (/proc/sys/net/core/rmem_default and /proc/sys/net/core/rmem_default)\n  # Maximum is limited by memory in the system, SO_RCVBUFFORCE and SO_SNDBUFFORCE is used to avoid having to raise the system wide\n  # max, net.core.rmem_max and net.core.wmem_max\n  #read_buffer: 10485760\n  #write_buffer: 10485760\n\n# EXPERIMENTAL: This option is currently only supported on linux and may\n# change in future minor releases.\n#\n# Routines is the number of thread pairs to run that consume from the tun and UDP queues.\n# Currently, this defaults to 1 which means we have 1 tun queue reader and 1\n# UDP queue reader. Setting this above one will set IFF_MULTI_QUEUE on the tun\n# device and SO_REUSEPORT on the UDP socket to allow multiple queues.\n#routines: 1\n\npunchy:\n  # Continues to punch inbound/outbound at a regular interval to avoid expiration of firewall nat mappings\n  punch: true\n\n  # respond means that a node you are trying to reach will connect back out to you if your hole punching fails\n  # this is extremely useful if one node is behind a difficult nat, such as a symmetric NAT\n  # Default is false\n  #respond: true\n\n  # delays a punch response for misbehaving NATs, default is 1 second, respond must be true to take effect\n  #delay: 1s\n\n# Cipher allows you to choose between the available ciphers for your network. Options are chachapoly or aes\n# IMPORTANT: this value must be identical on ALL NODES/LIGHTHOUSES. We do not/will not support use of different ciphers simultaneously!\n#cipher: chachapoly\n\n# Local range is used to define a hint about the local network range, which speeds up discovering the fastest\n# path to a network adjacent nebula node.\n#local_range: "172.16.0.0/24"\n\n# sshd can expose informational and administrative functions via ssh this is a\n#sshd:\n  # Toggles the feature\n  #enabled: true\n  # Host and port to listen on, port 22 is not allowed for your safety\n  #listen: 127.0.0.1:2222\n  # A file containing the ssh host private key to use\n  # A decent way to generate one: ssh-keygen -t ed25519 -f ssh_host_ed25519_key -N "" < /dev/null\n  #host_key: ./ssh_host_ed25519_key\n  # A file containing a list of authorized public keys\n  #authorized_users:\n    #- user: steeeeve\n      # keys can be an array of strings or single string\n      #keys:\n        #- "ssh public key string"\n\n# Configure the private interface. Note: addr is baked into the nebula certificate\ntun:\n  # When tun is disabled, a lighthouse can be started without a local tun interface (and therefore without root)\n  disabled: false\n  # Name of the device\n  dev: nebula1\n  # Toggles forwarding of local broadcast packets, the address of which depends on the ip/mask encoded in pki.cert\n  drop_local_broadcast: false\n  # Toggles forwarding of multicast packets\n  drop_multicast: false\n  # Sets the transmit queue length, if you notice lots of transmit drops on the tun it may help to raise this number. Default is 500\n  tx_queue: 500\n  # Default MTU for every packet, safe setting is (and the default) 1300 for internet based traffic\n  mtu: 1300\n  # Route based MTU overrides, you have known vpn ip paths that can support larger MTUs you can increase/decrease them here\n  routes:\n    #- mtu: 8800\n    #  route: 10.0.0.0/16\n  # Unsafe routes allows you to route traffic over nebula to non-nebula nodes\n  # Unsafe routes should be avoided unless you have hosts/services that cannot run nebula\n  # NOTE: The nebula certificate of the "via" node *MUST* have the "route" defined as a subnet in its certificate\n  unsafe_routes:\n    #- route: 172.16.1.0/24\n    #  via: 192.168.100.99\n    #  mtu: 1300 #mtu will default to tun mtu if this option is not sepcified\n\n\n# TODO\n# Configure logging level\nlogging:\n  # panic, fatal, error, warning, info, or debug. Default is info\n  level: info\n  # json or text formats currently available. Default is text\n  format: text\n  # Disable timestamp logging. useful when output is redirected to logging system that already adds timestamps. Default is false\n  #disable_timestamp: true\n  # timestamp format is specified in Go time format, see:\n  #     https://golang.org/pkg/time/#pkg-constants\n  # default when `format: json`: "2006-01-02T15:04:05Z07:00" (RFC3339)\n  # default when `format: text`:\n  #     when TTY attached: seconds since beginning of execution\n  #     otherwise: "2006-01-02T15:04:05Z07:00" (RFC3339)\n  # As an example, to log as RFC3339 with millisecond precision, set to:\n  #timestamp_format: "2006-01-02T15:04:05.000Z07:00"\n\n#stats:\n  #type: graphite\n  #prefix: nebula\n  #protocol: tcp\n  #host: 127.0.0.1:9999\n  #interval: 10s\n\n  #type: prometheus\n  #listen: 127.0.0.1:8080\n  #path: /metrics\n  #namespace: prometheusns\n  #subsystem: nebula\n  #interval: 10s\n\n  # enables counter metrics for meta packets\n  #   e.g.: `messages.tx.handshake`\n  # NOTE: `message.{tx,rx}.recv_error` is always emitted\n  #message_metrics: false\n\n  # enables detailed counter metrics for lighthouse packets\n  #   e.g.: `lighthouse.rx.HostQuery`\n  #lighthouse_metrics: false\n\n# Handshake Manger Settings\n#handshakes:\n  # Total time to try a handshake = sequence of `try_interval * retries`\n  # With 100ms interval and 20 retries it is 23.5 seconds\n  #try_interval: 100ms\n  #retries: 20\n  # wait_rotation is the number of handshake attempts to do before starting to try non-local IP addresses\n  #wait_rotation: 5\n  # trigger_buffer is the size of the buffer channel for quickly sending handshakes\n  # after receiving the response for lighthouse queries\n  #trigger_buffer: 64\n\n# \u9632\u706b\u5899\u5b89\u5168\u914d\u7f6e\n# \u8fdb\u51fa\u89c4\u5219\u9ed8\u8ba4 deny - \u6240\u6709\u914d\u7f6e\u90fd\u662f\u914d\u7f6e\u5141\u8bb8\n# \u5339\u914d\u903b\u8f91 port AND proto AND (ca_sha OR ca_name) AND (host OR group OR groups OR cidr)\nfirewall:\n  conntrack:\n    tcp_timeout: 12m\n    udp_timeout: 3m\n    default_timeout: 10m\n    max_connections: 100000\n\n  outbound:\n    # \u5141\u8bb8\u6240\u6709\u51fa\u53bb\u6d41\u91cf\n    - port: any\n      proto: any\n      host: any\n\n    # 0, any, 80, 1000-200, fragment\n  - port: any\n    # \u7c7b\u4f3c port \u4f46\u5728 ICMP \u8fd9\u6837\u7684\u534f\u8bae\u4e2d\u4f7f\u7528 code \u66f4\u5408\u7406 - \u76ee\u524d\u672a\u5b9e\u73b0\n    code: any\n    # tcp, udp, icmp\n    proto: any\n    # \u4e3b\u673a\u540d - test-host\n    host: any\n    # \u5728\u8bc1\u4e66\u4e2d\u5305\u542b\u7684\u5206\u7ec4\n    group: any\n    # \u7b49\u540c\u4e8e group, \u4f46\u652f\u6301\u591a\u4e2a\u503c, \u8981\u6c42\u90fd\u5339\u914d\n    groups: []\n    # \u5730\u5740\u9650\u5b9a\n    cidr: 0.0.0.0/0\n  #   ca_name: An issuing CA name\n  #   ca_sha: An issuing CA shasum\n\n  inbound:\n    # \u5141\u8bb8 ICMP - \u80fd Ping\n    - port: any\n      proto: icmp\n      host: any\n\n    # Allow tcp/443 from any host with BOTH laptop and home group\n    - port: 443\n      proto: tcp\n      groups:\n        - laptop\n        - home\n')),(0,a.kt)("h2",h({},{id:"nat"}),"NAT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"https://github.com/slackhq/nebula/issues/33"}),"slackhq/nebula#33"))))}y.isMDXComponent=!0}}]);