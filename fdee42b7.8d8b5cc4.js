(window.webpackJsonp=window.webpackJsonp||[]).push([[1086],{1159:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"toc",(function(){return m})),a.d(e,"default",(function(){return d}));var n=a(3),r=a(8),b=(a(0),a(1169)),l={id:"qemu-qmp",title:"QEMU QMP"},c={unversionedId:"os/virt/qemu-qmp",id:"os/virt/qemu-qmp",isDocsHomePage:!1,title:"QEMU QMP",description:"QMP - QEMU Machine Protocol",source:"@site/notes/os/virt/qemu-qmp.md",slug:"/os/virt/qemu-qmp",permalink:"/notes/os/virt/qemu-qmp",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/qemu-qmp.md",version:"current",sidebar:"docs",previous:{title:"QEMU\u76d1\u89c6\u5668",permalink:"/notes/os/virt/qemu-monitor"},next:{title:"QEMU Version",permalink:"/notes/os/virt/qemu-version"}},m=[{value:"Tips",id:"tips",children:[]},{value:"QMP \u547d\u4ee4",id:"qmp-\u547d\u4ee4",children:[]}],p={toc:m};function d(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"QMP - QEMU Machine Protocol")),Object(b.b)("h2",{id:"tips"},"Tips"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.qemu.org/docs/master/interop/qemu-qmp-ref.html"},"QEMU QMP reference")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/qemu/qemu/blob/master/scripts/qmp/qmp-shell"},"qmp-shell"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Low-level QEMU shell on top of QMP"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.nico.schottelius.org/blog/control-and-shutdown-qemu-kvm-vm-via-unix-socket/"},"https://www.nico.schottelius.org/blog/control-and-shutdown-qemu-kvm-vm-via-unix-socket/")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://wiki.qemu.org/Documentation/QMP"},"https://wiki.qemu.org/Documentation/QMP")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"-qmp unix:./qmp-sock,server")),Object(b.b)("li",{parentName:"ul"},"\u5e38\u7528\u547d\u4ee4",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"system_powerdown"),Object(b.b)("li",{parentName:"ul"},"system_reset"),Object(b.b)("li",{parentName:"ul"},"system_wakeup"),Object(b.b)("li",{parentName:"ul"},"query-status"))),Object(b.b)("li",{parentName:"ul"},"\u5f00\u53d1",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/digitalocean/go-qemu"},"digitalocean/go-qemu"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u57fa\u4e8e ",Object(b.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/qemu/qemu/stable-2.11/qapi-schema.json"},"2.11/qapi-schema.json")))))),Object(b.b)("li",{parentName:"ul"},"schema",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/qemu/qemu/blob/v5.1.0/qapi/qapi-schema.json"},"https://github.com/qemu/qemu/blob/v5.1.0/qapi/qapi-schema.json"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"qapi"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/qemu/qemu/blob/v5.1.0/qga/qapi-schema.json"},"https://github.com/qemu/qemu/blob/v5.1.0/qga/qapi-schema.json"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"guest agent"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/qemu/qemu/blob/v5.1.0/storage-daemon/qapi/qapi-schema.json"},"https://github.com/qemu/qemu/blob/v5.1.0/storage-daemon/qapi/qapi-schema.json"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"storage-daemon \u4e0e\u4e3b qapi \u7c7b\u4f3c\uff0c\u4f46\u63a5\u53e3\u66f4\u5c11"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/qemu/qemu/blob/stable-5.0/scripts/qapi-gen.py"},"scripts/qapi-gen.py"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u7528\u4e8e\u751f\u6210 c \u4ee3\u7801")))))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'// \u670d\u52a1\u7aef\u54cd\u5e94\n{"QMP": {"version": {"qemu": {"micro": 0, "minor": 1, "major": 5}, "package": ""}, "capabilities": ["oob"]}}\n\n// \u534f\u5546\u80fd\u529b\n{ "execute": "qmp_capabilities" }\n//\n{ "return": {}}\n\n// \u67e5\u8be2\u72b6\u6001\n{ "execute": "query-status" }\n//\n{"return": {"status": "running", "singlestep": false, "running": true}}\n\n// \u67e5\u8be2\u6240\u6709\u547d\u4ee4\n{ "execute": "query-commands" }\n\n// \u5185\u5b58\n{ "execute": "query-memdev" }\n//\n{"return": [{"prealloc": false, "host-nodes": [], "size": 134217728, "merge": true, "dump": true, "policy": "default", "id": "pc.ram"}]}\n\n//\n{ "execute": "system_powerdown" }\n')),Object(b.b)("h2",{id:"qmp-\u547d\u4ee4"},"QMP \u547d\u4ee4"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"command"),Object(b.b)("th",{parentName:"tr",align:null},"desc"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"add-fd"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"add_client"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"announce-self"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"balloon"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-commit"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-dirty-bitmap-add"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-dirty-bitmap-clear"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-dirty-bitmap-disable"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-dirty-bitmap-enable"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-dirty-bitmap-merge"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-dirty-bitmap-remove"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-job-cancel"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-job-complete"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-job-dismiss"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-job-finalize"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-job-pause"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-job-resume"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-job-set-speed"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-latency-histogram-set"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-set-write-threshold"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block-stream"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block_passwd"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block_resize"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"block_set_io_throttle"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-add"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-backup"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-change-medium"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-close-tray"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-create"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-del"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-insert-medium"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-mirror"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-open-tray"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-remove-medium"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-snapshot"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-snapshot-delete-internal-sync"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-snapshot-internal-sync"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"blockdev-snapshot-sync"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"change"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"change-backing-file"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"change-vnc-password"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"chardev-add"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"chardev-change"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"chardev-remove"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"chardev-send-break"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"client_migrate_info"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"closefd"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"cont"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"cpu-add"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"device-list-properties"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"device_add"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"device_del"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"drive-backup"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"drive-mirror"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"dump-guest-memory"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"eject"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"expire_password"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"getfd"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"human-monitor-command"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"inject-nmi"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"input-send-event"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"job-cancel"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"job-complete"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"job-dismiss"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"job-finalize"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"job-pause"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"job-resume"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"memsave"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"migrate"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"migrate-continue"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"migrate-incoming"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"migrate-pause"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"migrate-recover"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"migrate-set-cache-size"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"migrate-set-capabilities"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"migrate-set-parameters"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"migrate-start-postcopy"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"migrate_cancel"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"migrate_set_downtime"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"migrate_set_speed"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"nbd-server-add"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"nbd-server-remove"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"nbd-server-start"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"nbd-server-stop"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"netdev_add"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"netdev_del"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"object-add"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"object-del"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"pmemsave"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"qmp_capabilities"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"qom-get"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"qom-list"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"qom-list-properties"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"qom-list-types"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"qom-set"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-acpi-ospm-status"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-balloon"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-block"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-block-jobs"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-blockstats"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-chardev"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-chardev-backends"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-colo-status"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-command-line-options"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-commands"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-cpu-definitions"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-cpu-model-expansion"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-cpus"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-cpus-fast"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-current-machine"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-display-options"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-dump"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-dump-guest-memory-capability"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-events"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-fdsets"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-hotpluggable-cpus"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-iothreads"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-jobs"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-kvm"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-machines"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-memdev"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-memory-devices"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-memory-size-summary"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-mice"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-migrate"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-migrate-cache-size"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-migrate-capabilities"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-migrate-parameters"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-name"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-named-block-nodes"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-pci"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-pr-managers"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-qmp-schema"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-rocker"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-rocker-of-dpa-flows"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-rocker-of-dpa-groups"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-rocker-ports"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-rx-filter"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-sev"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-sev-capabilities"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-sev-launch-measure"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-status"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-target"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-tpm"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-tpm-models"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-tpm-types"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-uuid"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-version"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-vm-generation-id"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-vnc"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-vnc-servers"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"query-xen-replication-status"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"quit"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"remove-fd"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ringbuf-read"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ringbuf-write"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"rtc-reset-reinjection"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"screendump"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"send-key"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"set-numa-node"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"set_link"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"set_password"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"stop"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"system_powerdown"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"system_reset"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"system_wakeup"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"trace-event-get-state"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"trace-event-set-state"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"transaction"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"watchdog-set-action"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"x-blockdev-amend"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"x-blockdev-change"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"x-blockdev-reopen"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"x-blockdev-set-iothread"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"x-colo-lost-heartbeat"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"x-debug-block-dirty-bitmap-sha256"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"x-debug-query-block-graph"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"x-exit-preconfig"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"xen-colo-do-checkpoint"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"xen-load-devices-state"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"xen-save-devices-state"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"xen-set-global-dirty-log"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"xen-set-replication"),Object(b.b)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0},1169:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},b=Object.keys(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=r.a.createContext({}),d=function(t){var e=r.a.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},i=function(t){var e=d(t.components);return r.a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},j=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,b=t.originalType,l=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),i=d(a),j=n,O=i["".concat(l,".").concat(j)]||i[j]||u[j]||b;return a?r.a.createElement(O,c(c({ref:e},p),{},{components:a})):r.a.createElement(O,c({ref:e},p))}));function O(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var b=a.length,l=new Array(b);l[0]=j;var c={};for(var m in e)hasOwnProperty.call(e,m)&&(c[m]=e[m]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var p=2;p<b;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);