/*! For license information please see aaa264c0.2c38e22c.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[34559],{45192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(2488),s=t(62780);const o={title:"Teleport"},l="Teleport",a={id:"service/network/teleport",title:"Teleport",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/network/teleport.md",sourceDirName:"service/network",slug:"/service/network/teleport",permalink:"/notes/service/network/teleport",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/teleport.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645693721,formattedLastUpdatedAt:"Feb 24, 2022",frontMatter:{title:"Teleport"},sidebar:"docs",previous:{title:"stun",permalink:"/notes/service/network/stun"},next:{title:"TProxy",permalink:"/notes/service/network/tproxy"}},i={},c=[{value:"demo",id:"demo",level:2},{value:"access plugin",id:"access-plugin",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"access denied to admin connecting to on cluster teleport",id:"access-denied-to-admin-connecting-to-on-cluster-teleport",level:2},{value:"the connection was closed on the remote side",id:"the-connection-was-closed-on-the-remote-side",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"teleport",children:"Teleport"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u662f\u4ec0\u4e48\uff1f\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u652f\u6301 CA,\u52a0\u5bc6,\u8ba4\u8bc1\u6388\u6743\u7684\u53cd\u5411\u4ee3\u7406"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u534f\u8bae SSH, Kubernetes, Web"}),"\n",(0,r.jsx)(n.li,{children:"kubectl exec"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7aef\u53e3\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"3023, 3024, 3025, 3080"}),"\n",(0,r.jsx)(n.li,{children:"3022 - Node - SSH"}),"\n",(0,r.jsx)(n.li,{children:"3023 - Proxy -> 3022"}),"\n",(0,r.jsx)(n.li,{children:"3024 - Proxy - \u53cd\u5411 SSH \u901a\u9053"}),"\n",(0,r.jsx)(n.li,{children:"3025 - Auth - SSH Auth Service"}),"\n",(0,r.jsx)(n.li,{children:"3080 - Proxy - HTTPS auth tsh, Web UI"}),"\n",(0,r.jsx)(n.li,{children:"3026 - Kubernetes - HTTPS Proxy"}),"\n",(0,r.jsx)(n.li,{children:"3027 - Kubernetes - Kubernetes Service"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://goteleport.com/teleport/docs/enterprise/introduction/",children:"\u4f01\u4e1a\u7248"})," \u7279\u6027 / ",(0,r.jsx)(n.a,{href:"https://goteleport.com/teleport/docs/faq/#commercial-teleport-editions",children:"Commercial Teleport Editions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"RBAC"}),"\n",(0,r.jsxs)(n.li,{children:["SSO\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SAML"}),"\n",(0,r.jsx)(n.li,{children:"OIDC - Okta, Active Directory, Auth0"}),"\n",(0,r.jsx)(n.li,{children:"\u793e\u533a\u7248\u672c\u652f\u6301 github \u548c local \u8ba4\u8bc1"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Approval"}),"\n",(0,r.jsx)(n.li,{children:"FedRAMP/FIPS"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7ec4\u4ef6\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"tsh - ssh"}),"\n",(0,r.jsx)(n.li,{children:"tctl - auth server"}),"\n",(0,r.jsx)(n.li,{children:"teleport - sshd"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u589e\u5f3a\u4f1a\u8bdd\u8bb0\u5f55 \u57fa\u4e8e BPF \u9700\u8981 ",(0,r.jsx)(n.a,{href:"https://github.com/iovisor/bcc",children:"iovisor/bcc"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"demo",children:"demo"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"teleport.yaml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"teleport:\n  data_dir: ./teleport\n  advertise_ip: 192.168.1.2\nauth_service:\n  enabled: true\n  cluster_name: 'teleport'\n  listen_addr: 0.0.0.0:3025\n  tokens:\n    - proxy,node,app:f7adb7ccdf04037bcd2b52ec6010fd6f0caec94ba190b765\nssh_service:\n  enabled: true\n  labels:\n    env: staging\napp_service:\n  enabled: true\n  debug_app: true\nproxy_service:\n  enabled: true\n  listen_addr: 0.0.0.0:3023\n  web_listen_addr: 0.0.0.0:3080\n  tunnel_listen_addr: 0.0.0.0:3024\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"teleport:\n  data_dir: ./teleport\n  auth_token: proxy,node,app:f7adb7ccdf04037bcd2b52ec6010fd6f0caec94ba190b765\n  auth_servers:\n  - 192.168.1.2:3025\n  advertise_ip: 192.168.1.3\nssh_service:\n  enabled: true\n  listen_addr: 0.0.0.0:3022\nproxy_service:\n  enabled: false\nauth_service:\n  enabled: false\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'teleport configure --cluster-name demo-cluster -o $PWD/tele.yaml\n\n# \u542f\u52a8\nteleport start -c tele.yaml\n# \u6dfb\u52a0\u7528\u6237\ntctl users add admin -c tele.yaml --roles=admin --logins=root,admin\n\ntsh --proxy localhost:3080 --insecure login --user admin\ntsh status\ntsh ls\n\n# \u6dfb\u52a0\u8282\u70b9\ntctl tokens add --type=node -c tele.yaml\n# \u542f\u52a8\u8282\u70b9\nsudo teleport start \\\n--roles=node \\\n--auth-server=https://teleport.example.com:443 \\\n--token=${TOKEN?} \\\n--labels=env=demo\n\n# macOS\ncurl -O https://get.gravitational.com/teleport-v6.0.1-darwin-amd64-bin.tar.gz\n# Linux\ncurl -O https://get.gravitational.com/teleport-v6.0.1-linux-amd64-bin.tar.gz\n\ndocker run --rm -it quay.io/gravitational/teleport\n\nteleport start --roles=node --auth-server=10.1.0.1 --token=xyz --nodename=d\n\nteleport start --roles=app --token=xyz --auth-server=proxy.example.com:3080 \\\n    --app-name="example-app" \\\n    --app-uri="http://localhost:8080" \\\n    --labels=group:dev\n\nteleport start --roles=app --token=xyz --auth-server=proxy.example.com:3080 \\\n  --app-name="example-app" \\\n  --app-uri="http://localhost:8080"\n\nteleport start --roles=database --token=xyz --auth-server=proxy.example.com:3080 \\\n  --db-name="example-db" \\\n  --db-protocol="postgres" \\\n  --db-uri="localhost:5432"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"access-plugin",children:"access plugin"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/gravitational/teleport-plugins/tree/master/access",children:"https://github.com/gravitational/teleport-plugins/tree/master/access"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://goteleport.com/teleport/docs/config-reference/",children:"Teleport Configuration Reference"})}),"\n",(0,r.jsx)(n.li,{children:"/etc/teleport.yaml"}),"\n",(0,r.jsxs)(n.li,{children:["\u670d\u52a1\u7c7b\u578b\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"auth - \u63d0\u4f9b\u8ba4\u8bc1\u6388\u6743"}),"\n",(0,r.jsx)(n.li,{children:"node/ssh - \u5bf9\u63a5\u8282\u70b9\u5230\u96c6\u7fa4"}),"\n",(0,r.jsx)(n.li,{children:"proxy - \u63d0\u4f9b WebUI \u548c SSH"}),"\n",(0,r.jsx)(n.li,{children:"app - \u53cd\u5411\u4ee3\u7406\u5e94\u7528"}),"\n",(0,r.jsx)(n.li,{children:"kubernetes"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# \u5168\u5c40\u914d\u7f6e \u5f71\u54cd\u6240\u6709\u670d\u52a1\nteleport:\n  # \u4f5c\u4e3a hostname \u522b\u540d\n  nodename: graviton\n  # \u6570\u636e\u76ee\u5f55 https://goteleport.com/teleport/docs/admin-guide/#filesystem-layout\n  data_dir: /var/lib/teleport\n\n  # JOIN \u5230\u96c6\u7fa4\u7684 Token - \u521d\u6b21\u4f7f\u7528\u540e\u4fbf\u4e0d\u5728\u9700\u8981\n  auth_token: xxxx-token-xxxx\n\n  # AuthServer CA PIN\n  # https://goteleport.com/teleport/docs/admin-guide/#adding-nodes-to-the-cluster\n  ca_pin: "sha256:7e12c17c20d9cb504bbcb3f0236be3f446861f1396dcbb44425fe28ec1c108f1"\n\n  # \u652f\u6301 FQDN\n  advertise_ip: 10.1.0.5\n\n  # \u96c6\u7fa4\u4e2d\u7684\u6388\u6743\u670d\u52a1\n  auth_servers:\n  - 10.1.0.5:3025\n  - 10.1.0.6:3025\n\n  # \u9650\u6d41\n  connection_limits:\n    max_connections: 1000\n    max_users: 250\n\n  # \u652f\u6301\u914d\u7f6e stdout,stderr,syslog  INFO, WARN, ERROR\n  # \u9ed8\u8ba4 ERROR\n  log:\n    output: /var/lib/teleport/teleport.log\n    severity: ERROR\n\n  # \u5b58\u50a8\u96c6\u7fa4\u72b6\u6001\u548c\u5ba1\u8ba1\u65e5\u5fd7\n  # \u652f\u6301 DynamoDB, S3, etcd \u7b49\n  # https://goteleport.com/teleport/docs/admin-guide/#high-availability\n  storage:\n    # \u9ed8\u8ba4\u5b58\u50a8\u5230\u6570\u636e\u76ee\u5f55\n    type: dir\n\n    # \u9ed8\u8ba4 /var/lib/teleport/log\n    audit_events_uri: [ \'dynamodb://events_table_name\', \'firestore://events_table_name\', \'file:///var/lib/teleport/log\', \'stdout://\' ]\n\n    # \u5b58\u50a8\u8bb0\u5f55\u7684\u4f1a\u8bdd\n    # https://goteleport.com/teleport/docs/admin-guide/#using-amazon-s3\n    audit_sessions_uri: \'s3://example.com/path/to/bucket?region=us-east-1\'\n\n    # DynamoDB\n    # ==========\n    continuous_backups: [ true|false ]\n    auto_scaling: [ true|false ]\n\n    # minimum/maximum read capacity in units\n    read_min_capacity: int\n    read_max_capacity: int\n    read_target_value: float\n    # minimum/maximum write capacity in units\n    write_min_capacity: int\n    write_max_capacity: int\n    write_target_value: float\n\n  # ssh-rsa, rsa-sha2-256, rsa-sha2-512\n  ca_signature_algo: "rsa-sha2-512"\n  ciphers:\n  - aes128-ctr\n  - aes192-ctr\n  - aes256-ctr\n  - aes128-gcm@openssh.com\n  - chacha20-poly1305@openssh.com\n  kex_algos:\n  - curve25519-sha256@libssh.org\n  - ecdh-sha2-nistp256\n  - ecdh-sha2-nistp384\n  - ecdh-sha2-nistp521\n  mac_algos:\n  - hmac-sha2-256-etm@openssh.com\n  - hmac-sha2-256\n  ciphersuites:\n  - tls-ecdhe-rsa-with-aes-128-gcm-sha256\n  - tls-ecdhe-ecdsa-with-aes-128-gcm-sha256\n  - tls-ecdhe-rsa-with-aes-256-gcm-sha384\n  - tls-ecdhe-ecdsa-with-aes-256-gcm-sha384\n  - tls-ecdhe-rsa-with-chacha20-poly1305\n  - tls-ecdhe-ecdsa-with-chacha20-poly1305\n\n# Auth \u670d\u52a1\nauth_service:\n  # \u662f\u5426\u542f\u7528\n  enabled: yes\n\n  # \u751f\u6210 CA \u5305\u542b\u7684\u540d\u5b57 - \u5c3d\u91cf\u8bbe\u7f6e\u4e3a\u6709\u610f\u4e49\u7684\u540d\u5b57\n  # \u4fee\u6539\u4f1a\u5bfc\u81f4\u6240\u6709\u751f\u6210\u7684\u8bc1\u4e66\u5931\u6548\uff0c\u53ef\u80fd\u9700\u8981\u6e05\u9664 /var/lib/teleport\n  cluster_name: "main"\n  # \u8ba4\u8bc1\n  authentication:\n    # OSS \'local\', \'github\'\n    # Enterprise \'oidc\', \'saml\', \'false\'\n    type: local\n    # off,otp, u2f\n    second_factor: otp\n    u2f:\n      # Teleport Web UI (proxy) - \u786e\u4fdd\u5176\u4ed6\u8282\u70b9\u53ef\u8bbf\u95ee\n      app_id: https://localhost:3080\n      # \u5217\u4e3e\u6240\u6709\n      facets:\n      - https://localhost:3080\n\n  # Auth API, Cluster API\n  listen_addr: 0.0.0.0:3025\n\n  # AuthServer DNS - \u53ef\u9009\n  # https://goteleport.com/teleport/docs/admin-guide/#public-addr\n  public_addr: auth.example.com:3025\n\n  # \u9884\u5b9a\u4e49\u7528\u4e8e\u52a0\u5165\u8282\u70b9\u7684 Token\n  # tctl nodes add --ttl \u751f\u6210\u5e26 TTL \u7684\u968f\u673a Token\n  # \u5efa\u8bae\u4f7f\u7528 pwgen \u751f\u6210 32+ byte \u7684 Token\n  tokens:\n  - "proxy,node:xxxxx"\n  - "auth:yyyy"\n  # node - \u9ed8\u8ba4\n  # proxy - https://goteleport.com/teleport/docs/architecture/proxy/#recording-proxy-mode\n  # off - \u5173\u95ed\n  # \u5b9e\u9a8c\u6027 *-sync - \u76f4\u63a5\u53d1\u9001\u5230 S3\n  session_recording: "node"\n\n  # session_recording=proxy \u751f\u6548\n  # https://goteleport.com/teleport/docs/architecture/proxy/#recording-proxy-mode\n  proxy_checks_host_keys: yes\n  # \u4f8b\u5982 30m, 1h, 1h30m\n  client_idle_timeout: never\n  # \u8fde\u63a5\u4e0a\u7684 ssh \u5982\u679c cert \u8fc7\u671f\u662f\u5426\u65ad\u5f00\n  disconnect_expired_cert: no\n\n  keep_alive_interval: 5m\n  keep_alive_count_max: 3\n\n  # \u96c6\u7fa4\u7eac\u5ea6\u4f1a\u8bdd\u63a7\u5236\u8d85\u65f6\u65f6\u95f4\n  # session_control_timeout: 2m\n\n  license_file: /var/lib/teleport/license.pem\n\n# \u8282\u70b9 SSH \u670d\u52a1\nssh_service:\n  enabled: yes\n  listen_addr: 0.0.0.0:3022\n  # \u53ef\u4ee5\u914d\u7f6e\u5141\u8bb8\u76f4\u8fde\n  public_addr: node.example.com:3022\n  # \u8282\u70b9\u6807\u7b7e\n  # https://goteleport.com/teleport/docs/admin-guide/#labeling-nodes-and-applications\n  labels:\n    role: leader\n    type: postgres\n\n  # \u547d\u4ee4\u5b9a\u4e49\u6807\u7b7e\n  commands:\n  # arch=x86_64\n  - name: arch\n    command: [ \'/bin/uname\', \'-p\' ]\n    period: 1h0m0s\n\n  # ~/.tsh/environment\n  permit_user_env: false\n\n  # \u589e\u5f3a\u4f1a\u8bdd\u8bb0\u5f55\n  # https://gravitational.com/teleport/docs/features/enhanced-session-recording\n  enhanced_recording:\n    enabled: false\n    # \u5355\u4f4d page\n    command_buffer_size: 8\n    disk_buffer_size: 128\n    network_buffer_size: 8\n    # cgroupv2 \u6302\u8f7d\u70b9\n    cgroup_path: /cgroup2\n  # PAM \u96c6\u6210\n  # https://goteleport.com/teleport/docs/features/ssh-pam/\n  pam:\n    enabled: no\n    service_name: teleport\n\n# \u4ee3\u7406\u670d\u52a1\nproxy_service:\n  enabled: yes\n  # SSH forwarding/proxy\n  listen_addr: 0.0.0.0:3023\n  # Reverse tunnel\n  tunnel_listen_addr: 0.0.0.0:3024\n  # Web UI - password+HOTP\n  web_listen_addr: 0.0.0.0:3080\n  public_addr: proxy.example.com:3080\n  ssh_public_addr: proxy.example.com:3023\n  tunnel_public_addr: proxy.example.com:3024\n\n  https_keypairs:\n  - key_file: /var/lib/teleport/webproxy_key.pem\n    cert_file: /var/lib/teleport/webproxy_cert.pem\n  - key_file: /etc/letsencrypt/live/*.teleport.example.com/privkey.pem\n    cert_file: /etc/letsencrypt/live/*.teleport.example.com/fullchain.pem\n\n  kube_listen_addr: 0.0.0.0:3026\n  # \u4fee\u6539 k8s \u63a5\u5165\u5730\u5740\n  kube_public_addr: kube.example.com:3026\n\n# \u5e94\u7528\u670d\u52a1\napp_service:\n  enabled: yes\n  # \u5f00\u542f debug \u5e94\u7528 - \u4f1a\u663e\u793a JWT \u5185\u5bb9\n  debug_app: true\n  apps:\n  - name: "kubernetes-dashboard"\n    # \u5e94\u7528\n    uri: "http://10.0.1.27:8000"\n    # \u5916\u90e8\u5730\u5740\n    public_addr: "example.com"\n    # \u6807\u7b7e\n    labels:\n      env: "prod"\n    # \u52a8\u6001\u6807\u7b7e\n    commands:\n    - name: "os"\n      command: [ "/usr/bin/uname" ]\n      period: "5s"\n\nkubernetes_service:\n  enabled: yes\n  public_addr: [ k8s.example.com:3026 ]\n  listen_addr: 0.0.0.0:3026\n  # \u672a\u8fd0\u884c\u5728 k8s \u5185\u901a\u8fc7 kubeconfig_file \u6307\u5b9a\u914d\u7f6e\n  kubeconfig_file: /secrets/kubeconfig\n  # \u8fd0\u884c\u5728 k8s \u5185 \u5b9a\u4e49\u96c6\u7fa4\u540d\u5b57\n  # \u4f7f\u7528 SA \u8ba4\u8bc1\n  kube_cluster_name:\n  labels:\n    env: "prod"\n    # \u52a8\u6001\u6807\u7b7e\n    - name: "os"\n        command: [ "/usr/bin/uname" ]\n        period: "5s"\n    # GKE \u96c6\u7fa4\u540d\u5b57\n    - name: cluster-name\n      command: [ \'curl\', \'http://metadata.google.internal/computeMetadata/v1/instance/attributes/cluster-name\', \'-H\', \'Metadata-Flavor: Google\' ]\n      period: 1m0s\n'})}),"\n",(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h2,{id:"access-denied-to-admin-connecting-to-on-cluster-teleport",children:"access denied to admin connecting to on cluster teleport"}),"\n",(0,r.jsx)(n.h2,{id:"the-connection-was-closed-on-the-remote-side",children:"the connection was closed on the remote side"})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},38088:(e,n,t)=>{var r=t(96651),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!i.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:a.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>l});var r=t(96651);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);