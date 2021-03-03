(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(7),s=(n(0),n(766)),i={id:"systemd"},l={unversionedId:"os/linux/init/systemd",id:"os/linux/init/systemd",isDocsHomePage:!1,title:"systemd",description:"Systemd",source:"@site/notes/os/linux/init/systemd.md",slug:"/os/linux/init/systemd",permalink:"/notes/os/linux/init/systemd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/init/systemd.md",version:"current",sidebar:"docs",previous:{title:"Process supervision",permalink:"/notes/os/linux/init/supervision"},next:{title:"interfaces",permalink:"/notes/os/linux/network/interfaces"}},o=[{value:"Tips",id:"tips",children:[]},{value:"Service",id:"service",children:[]},{value:"Unit",id:"unit",children:[]},{value:"help",id:"help",children:[]}],b={rightToc:o};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"systemd"},"Systemd"),Object(s.b)("h2",{id:"tips"},"Tips"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.freedesktop.org/software/systemd/man/systemd.unit.html"}),"systemd.unit")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.freedesktop.org/software/systemd/man/systemctl.html"}),"systemctl manpage")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units"}),"How To Use Systemctl to Manage Systemd Services and Units")),Object(s.b)("li",{parentName:"ul"},"\u914d\u7f6e\u76ee\u5f55",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"/etc/systemd/system/docker.service.d/*.conf")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"/etc/systemd/system/")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"/lib/systemd/system/"))))),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://wiki.archlinux.org/index.php/Systemd-networkd"}),"https://wiki.archlinux.org/index.php/Systemd-networkd")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u914d\u7f6e\nsystemctl show docker\n# \u4fee\u6539 Service \u9700\u8981\u91cd\u8f7d\nsystemctl daemon-reload\n# \u67e5\u770b\u5b9a\u4e49\u7684\u914d\u7f6e\nsystemctl show --property=Environment docker\n# \u91cd\u542f\u670d\u52a1\nsystemctl restart docker\n\nsystemctl list-units --all\nsystemctl list-units --type=service\nsystemctl list-unit-files\n# \u67e5\u770b service \u6587\u4ef6\nsystemctl cat docker.service\n# \u67e5\u770b\u4f9d\u8d56\nsystemctl list-dependencies sshd.service\n# mask \u540e\u7684\u670d\u52a1\u4e0d\u80fd\u88ab\u542f\u52a8\nsystemctl mask nginx.service\nsystemctl unmask nginx.service\n# \u7f16\u8f91 service \u6587\u4ef6\nsystemctl edit nginx.service\n# \u7f16\u8f91\u5b8c\u6574\u7684\u6587\u4ef6,\u800c\u4e0d\u662f\u4e00\u4e2a\u7247\u6bb5,\u4f1a\u751f\u6210\u90e8\u5206\u5185\u5bb9\nsystemctl edit --full nginx.service\n\n# \u670d\u52a1\u72b6\u6001\nsystemctl status prometheus-node-exporter.service\n")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"command"),Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"mean"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u67e5\u8be2"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl list-dependencies"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"unit \u4f9d\u8d56")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl list-sockets"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"sockets \u72b6\u6001")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl list-jobs"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6d3b\u8dc3 jobs")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl list-unit-files"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"unit \u6587\u4ef6\u548c\u72b6\u6001")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl list-units"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"units loaded/active")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl get-default"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"default target (like run level)")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u670d\u52a1"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl stop ",Object(s.b)("em",{parentName:"td"},"service")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u505c\u6b62")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl start ",Object(s.b)("em",{parentName:"td"},"service")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u542f\u52a8")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl restart ",Object(s.b)("em",{parentName:"td"},"service")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u91cd\u542f")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl reload ",Object(s.b)("em",{parentName:"td"},"service")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u914d\u7f6e\u91cd\u8f7d")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl daemon-reload"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u91cd\u8f7d unit \u6587\u4ef6")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl status ",Object(s.b)("em",{parentName:"td"},"service")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u670d\u52a1\u72b6\u6001")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl --failed"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5931\u8d25\u7684\u670d\u52a1")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl reset-failed"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u91cd\u7f6e\u5931\u8d25\u7684\u72b6\u6001")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl enable ",Object(s.b)("em",{parentName:"td"},"service")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u670d\u52a1\u81ea\u542f\u52a8")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl disable ",Object(s.b)("em",{parentName:"td"},"service")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5173\u95ed\u81ea\u542f\u52a8")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl show ",Object(s.b)("em",{parentName:"td"},"service")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u670d\u52a1\u4fe1\u606f")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl edit ",Object(s.b)("em",{parentName:"td"},"service")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7f16\u8f91 unit")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl edit --full ",Object(s.b)("em",{parentName:"td"},"service")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7f16\u8f91\u670d\u52a1")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl -H ",Object(s.b)("em",{parentName:"td"},"host")," status network"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8fdc\u7a0b\u6267\u884c")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7cfb\u7edf\u72b6\u6001"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl reboot"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u91cd\u542f / reboot.target")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl poweroff"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5173\u673a / poweroff.target")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl emergency"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"emergency.target")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"systemctl default"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6062\u590d\u5230\u9ed8\u8ba4 multi-user.target")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u65e5\u5fd7"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"journalctl"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6240\u6709\u65e5\u5fd7")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"journalctl -u network.service"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7f51\u7edc\u670d\u52a1\u65e5\u5fd7")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"journalctl -f"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8ddf\u968f\u663e\u793a")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"journalctl -k"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5185\u6838\u65e5\u5fd7")))),Object(s.b)("h2",{id:"service"},"Service"),Object(s.b)("h2",{id:"unit"},"Unit"),Object(s.b)("h1",{id:"example"},"Example"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/docker/docker/blob/master/contrib/init/systemd/"}),"docker systemd"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"/etc/systemd/system/prometheus-node-exporter.service")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ini"}),"[Unit]\nDescription=Prometheus Node Exporter\nAfter=network-online.target\n\n[Service]\n# User=prometheus\nRestart=on-failure\n\nExecStart=/opt/prometheus/bin/node_exporter\n")),Object(s.b)("h2",{id:"help"},"help"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"systemctl [OPTIONS...] {COMMAND} ...\n\nQuery or send control commands to the systemd manager.\n\n  -h --help           Show this help\n     --version        Show package version\n     --system         Connect to system manager\n     --user           Connect to user service manager\n  -H --host=[USER@]HOST\n                      Operate on remote host\n  -M --machine=CONTAINER\n                      Operate on local container\n  -t --type=TYPE      List units of a particular type\n     --state=STATE    List units with particular LOAD or SUB or ACTIVE state\n  -p --property=NAME  Show only properties by this name\n  -a --all            Show all properties/all units currently in memory,\n                      including dead/empty ones. To list all units installed on\n                      the system, use the 'list-unit-files' command instead.\n     --failed         Same as --state=failed\n  -l --full           Don't ellipsize unit names on output\n  -r --recursive      Show unit list of host and local containers\n     --reverse        Show reverse dependencies with 'list-dependencies'\n     --job-mode=MODE  Specify how to deal with already queued jobs, when\n                      queueing a new job\n     --show-types     When showing sockets, explicitly show their type\n     --value          When showing properties, only print the value\n  -i --ignore-inhibitors\n                      When shutting down or sleeping, ignore inhibitors\n     --kill-who=WHO   Who to send signal to\n  -s --signal=SIGNAL  Which signal to send\n     --now            Start or stop unit in addition to enabling or disabling it\n     --dry-run        Only print what would be done\n  -q --quiet          Suppress output\n     --wait           For (re)start, wait until service stopped again\n     --no-block       Do not wait until operation finished\n     --no-wall        Don't send wall message before halt/power-off/reboot\n     --no-reload      Don't reload daemon after en-/dis-abling unit files\n     --no-legend      Do not print a legend (column headers and hints)\n     --no-pager       Do not pipe output into a pager\n     --no-ask-password\n                      Do not ask for system passwords\n     --global         Enable/disable/mask unit files globally\n     --runtime        Enable/disable/mask unit files temporarily until next\n                      reboot\n  -f --force          When enabling unit files, override existing symlinks\n                      When shutting down, execute action immediately\n     --preset-mode=   Apply only enable, only disable, or all presets\n     --root=PATH      Enable/disable/mask unit files in the specified root\n                      directory\n  -n --lines=INTEGER  Number of journal entries to show\n  -o --output=STRING  Change journal output mode (short, short-precise,\n                             short-iso, short-iso-precise, short-full,\n                             short-monotonic, short-unix,\n                             verbose, export, json, json-pretty, json-sse, cat)\n     --firmware-setup Tell the firmware to show the setup menu on next boot\n     --plain          Print unit dependencies as a list instead of a tree\n\nUnit Commands:\n  list-units [PATTERN...]             List units currently in memory\n  list-sockets [PATTERN...]           List socket units currently in memory,\n                                      ordered by address\n  list-timers [PATTERN...]            List timer units currently in memory,\n                                      ordered by next elapse\n  start UNIT...                       Start (activate) one or more units\n  stop UNIT...                        Stop (deactivate) one or more units\n  reload UNIT...                      Reload one or more units\n  restart UNIT...                     Start or restart one or more units\n  try-restart UNIT...                 Restart one or more units if active\n  reload-or-restart UNIT...           Reload one or more units if possible,\n                                      otherwise start or restart\n  try-reload-or-restart UNIT...       If active, reload one or more units,\n                                      if supported, otherwise restart\n  isolate UNIT                        Start one unit and stop all others\n  kill UNIT...                        Send signal to processes of a unit\n  is-active PATTERN...                Check whether units are active\n  is-failed PATTERN...                Check whether units are failed\n  status [PATTERN...|PID...]          Show runtime status of one or more units\n  show [PATTERN...|JOB...]            Show properties of one or more\n                                      units/jobs or the manager\n  cat PATTERN...                      Show files and drop-ins of specified units\n  set-property UNIT PROPERTY=VALUE... Sets one or more properties of a unit\n  help PATTERN...|PID...              Show manual for one or more units\n  reset-failed [PATTERN...]           Reset failed state for all, one, or more\n                                      units\n  list-dependencies [UNIT]            Recursively show units which are required\n                                      or wanted by this unit or by which this\n                                      unit is required or wanted\n\nUnit File Commands:\n  list-unit-files [PATTERN...]        List installed unit files\n  enable [UNIT...|PATH...]            Enable one or more unit files\n  disable UNIT...                     Disable one or more unit files\n  reenable UNIT...                    Reenable one or more unit files\n  preset UNIT...                      Enable/disable one or more unit files\n                                      based on preset configuration\n  preset-all                          Enable/disable all unit files based on\n                                      preset configuration\n  is-enabled UNIT...                  Check whether unit files are enabled\n  mask UNIT...                        Mask one or more units\n  unmask UNIT...                      Unmask one or more units\n  link PATH...                        Link one or more units files into\n                                      the search path\n  revert UNIT...                      Revert one or more unit files to vendor\n                                      version\n  add-wants TARGET UNIT...            Add 'Wants' dependency for the target\n                                      on specified one or more units\n  add-requires TARGET UNIT...         Add 'Requires' dependency for the target\n                                      on specified one or more units\n  edit UNIT...                        Edit one or more unit files\n  get-default                         Get the name of the default target\n  set-default TARGET                  Set the default target\n\nMachine Commands:\n  list-machines [PATTERN...]          List local containers and host\n\nJob Commands:\n  list-jobs [PATTERN...]              List jobs\n  cancel [JOB...]                     Cancel all, one, or more jobs\n\nEnvironment Commands:\n  show-environment                    Dump environment\n  set-environment VARIABLE=VALUE...   Set one or more environment variables\n  unset-environment VARIABLE...       Unset one or more environment variables\n  import-environment [VARIABLE...]    Import all or some environment variables\n\nManager Lifecycle Commands:\n  daemon-reload                       Reload systemd manager configuration\n  daemon-reexec                       Reexecute systemd manager\n\nSystem Commands:\n  is-system-running                   Check whether system is fully running\n  default                             Enter system default mode\n  rescue                              Enter system rescue mode\n  emergency                           Enter system emergency mode\n  halt                                Shut down and halt the system\n  poweroff                            Shut down and power-off the system\n  reboot [ARG]                        Shut down and reboot the system\n  kexec                               Shut down and reboot the system with kexec\n  exit [EXIT_CODE]                    Request user instance or container exit\n  switch-root ROOT [INIT]             Change to a different root file system\n  suspend                             Suspend the system\n  hibernate                           Hibernate the system\n  hybrid-sleep                        Hibernate and suspend the system\n")))}c.isMDXComponent=!0},766:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),c=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,p=m["".concat(i,".").concat(u)]||m[u]||d[u]||s;return n?a.a.createElement(p,l(l({ref:t},b),{},{components:n})):a.a.createElement(p,l({ref:t},b))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<s;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);