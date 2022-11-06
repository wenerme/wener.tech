"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71447],{49613:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||s;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,c=new Array(s);c[0]=m;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<s;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53102:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return _}});var r=t(49613),o=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&l(e,t,n[t]);if(a)for(var t of a(n))p.call(n,t)&&l(e,t,n[t]);return e};const m={title:"Docker compose"},u="Docker compose",f={unversionedId:"devops/docker/docker-compose",id:"devops/docker/docker-compose",title:"Docker compose",description:"- Compose V2",source:"@site/../notes/devops/docker/docker-compose.md",sourceDirName:"devops/docker",slug:"/devops/docker/compose",permalink:"/notes/devops/docker/compose",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/docker/docker-compose.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666510159,formattedLastUpdatedAt:"Oct 23, 2022",frontMatter:{title:"Docker compose"},sidebar:"docs",previous:{title:"Docker",permalink:"/notes/devops/docker/"},next:{title:"Docker \u5e38\u7528\u670d\u52a1",permalink:"/notes/devops/docker/cookbook"}},v={},_=[{value:"docker-compose.yaml",id:"docker-composeyaml",level:2}],b={toc:_};function y(e){var n,t=e,{components:o}=t,l=((e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=d(d({},b),l),s(n,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"docker-compose"}),"Docker compose"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compose V2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"docker compose")))),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# V1\ndocker-compose version\n# V2\ndocker compose version\n\n# disable v2\n# docker-compose disable-v2\n")),(0,r.kt)("h2",d({},{id:"docker-composeyaml"}),"docker-compose.yaml"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://github.com/compose-spec/compose-spec/blob/master/spec.md"}),"https://github.com/compose-spec/compose-spec/blob/master/spec.md"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"compose.yaml, docker-compose.yaml")))),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),'services:\n  web:\n    # \u6784\u5efa\n    build: .\n    # \u4fee\u6539 CMD - \u6570\u7ec4\u6216\u5b57\u7b26\u4e32\n    command: bundle exec thin -p 3000\n    # \u4fee\u6539 ENTRYPOINT - \u6570\u7ec4\u6216\u5b57\u7b26\u4e32\n    entrypoint: /code/entrypoint.sh\n    # USER\n    user:\n    # namespace\n    userns_mode: "host"\n    # [HOST:]CONTAINER[/PROTOCOL]\n    # HOST - [IP:](port | range)\n    # CONTAINER - port | range\n    # PROTOCOL - tcp|udp\n    ports:\n      - \'5000:5000\'\n      - target: 80\n        host_ip: 127.0.0.1\n        published: 8000-9000\n        protocol: tcp\n        mode: host\n    expose:\n      - "3000"\n      - "8000"\n    # \u6570\u7ec4\u6216\u5b57\u7b26\u4e32\n    env_file: .env\n    environment:\n      RACK_ENV: development\n      SHOW: "true"\n      USER_INPUT:\n    environment:\n      - RACK_ENV=development\n      - SHOW=true\n      - USER_INPUT\n    # \u542f\u52a8\u4ee5\u6765\u9662\u7cfb\n    depends_on:\n      - redis\n    # \u53e6\u5916\u4e00\u79cd\u5199\u6cd5\n    depends_on:\n      redis:\n        # service_healthy\n        condition: service_started\n    container_name: my_web\n    credential_spec:\n      # Windows  HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Virtualization\\Containers\\CredentialSpecs\n      file: my-credential-spec.json\n      registry: my-credential-spec\n    # SERVICE:ALIAS\n    links:\n    # /etc/hosts\n    # container -> alias\n    external_links:\n    - redis\n    - database:mysql\n    # /etc/hosts\n    extra_hosts:\n    - "somehost:162.242.195.82"\n    - "otherhost:50.31.209.229"\n    # ACL\n    group_add:\n      - mail\n    # \u5065\u5eb7\u68c0\u67e5 - \u548c dockerfile \u76f8\u540c\n    # https://docs.docker.com/engine/reference/builder/#healthcheck\n    healthcheck:\n      test: ["CMD", "curl", "-f", "http://localhost"]\n      interval: 1m30s\n      timeout: 10s\n      retries: 3\n      start_period: 40s\n    # always|never|missing|build\n    pull_policy:\n    # no|always|no-failure|unless-stopped\n    restart:\n    # fs \u53ea\u8bfb\n    read_only:\n    # \u6570\u7ec4\u6216\u5b57\u7b26\u4e32\n    tmpfs:\n    - /run\n    - /tmp\n    # \u8fd0\u884c\u5e73\u53f0\n    runtime: runc\n    # \u5f15\u7528\u914d\u7f6e\n    configs:\n    - web_config\n    - source: my_config # \u5f15\u7528\n      target: /redis_config # \u76ee\u6807\u4f4d\u7f6e - \u9ed8\u8ba4 /<source>\n      uid: "103"\n      gid: "103"\n      mode: 0440\n    profiles:\n    # \u5f15\u7528 secrets\n    # /run/secrets/<secret_name>\n    secrets:\n    - server-certificate\n    # VOLUME:CONTAINER_PATH:ACCESS_MODE\n    volumes:\n      - type: volume\n        source: db-data\n        target: /data\n        volume:\n          nocopy: true\n      - type: bind\n        source: /var/run/postgres/postgres.sock\n        target: /var/run/postgres/postgres.sock\n    volumes_from:\n    working_dir:\n  redis:\n    image: \'redis:alpine\'\n    domainname:\n    hostname:\n    labels:\n    stdin_open:\n    tty:\n    ulimits:\n      nproc: 65535\n      nofile:\n        soft: 20000\n        hard: 40000\n    stop_grace_period: 10s\n    stop_signal: SIGTERM\n    storage_opt:\n      size: \'1G\'\n    # tinit\n    init: false\n    # shareable\n    # service:{name}\n    ipc:\n    isolation:\n    # \u65e5\u5fd7\u914d\u7f6e\n    logging:\n      driver: syslog\n      options:\n        syslog-address: "tcp://192.168.0.42:123"\n    # host|none|service:[service name]\n    network_mode:\n    # \u6570\u7ec4\u6216\u5bf9\u8c61\n    networks:\n      some-network:\n        ipv4_address:\n        ipv6_address:\n        aliases:\n          - alias1\n      app_net:\n        link_local_ips:\n          - 57.123.22.11\n        priority: 100\n        mac_address:\n    dns:\n    - 8.8.8.8\n    - 9.9.9.9\n    # /etc/resolv.conf\n    dns_opt:\n    - use-vc\n    - no-tld-query\n    dns_search:\n    - dc1.example.com\n    - dc2.example.com\n    # \u80fd\u529b\u6743\u9650\n    cap_add:\n      - ALL\n    cap_drop:\n      - NET_ADMIN\n      - SYS_ADMIN\n    # \u6570\u7ec4\u6216\u5bf9\u8c61\n    sysctls:\n      net.core.somaxconn: 1024\n      net.ipv4.tcp_syncookies: 0\n    privileged:\n    security_opt:\n    - label:user:USER\n    # CPU \u9650\u5236\n    cpu_count:\n    cpu_percent:\n    cpu_shares:\n    cpu_period:\n    cpu_quota:\n    cpu_rt_runtime:\n    cpu_rt_period:\n    cpuset:\n    # \u5185\u5b58\u9650\u5236\n    mem_swappiness:\n    memswap_limit:\n    oom_kill_disable:\n    oom_score_adj:\n    # /dev/shm\n    shm_size:\n    #\n    pid:\n    # os[/arch[/variant]]\n    platform:\n    # cgourp\n    cgroup_parent:\n    # https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v1/devices.html\n    device_cgroup_rules:\n      - \'c 1:3 mr\'\n      - \'a 7:* rmw\'\n    # HOST_PATH:CONTAINER_PATH[:CGROUP_PERMISSIONS]\n    devices:\n      - "/dev/ttyUSB0:/dev/ttyUSB0"\n      - "/dev/sda:/dev/xvda:rwm"\n    # Block device \u914d\u7f6e\n    blkio_config:\n      weight: 300\n      weight_device:\n        - path: /dev/sda\n          weight: 400\n      device_read_bps:\n        - path: /dev/sdb\n          rate: \'12mb\'\n      device_read_iops:\n        - path: /dev/sdb\n          rate: 120\n      device_write_bps:\n        - path: /dev/sdb\n          rate: \'1024k\'\n      device_write_iops:\n        - path: /dev/sdb\n          rate: 30\nconfigs:\n  web_config:\n    file: ./default.nginx\n  redis_config:\n    external: true\nnetworks:\n  front-tier:\n    ipam:\n      driver: default\n      config:\n        - subnet: "172.16.238.0/24"\n        - subnet: "2001:3984:3989::/64"\n  app_net:\n    driver: bridge\nvolumes:\n  db-data:\n')),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"web:\n  extends:\n    # compose.yaml\n    file: common.yml\n    # base service\n    service: webapp\n")))}y.isMDXComponent=!0}}]);