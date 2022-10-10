"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93567],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71968:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return S}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&u(e,n,t[n]);return e};const c={title:"S.M.A.R.T."},m="S.M.A.R.T.",f={unversionedId:"os/linux/hardware/smart",id:"os/linux/hardware/smart",title:"S.M.A.R.T.",description:"- S.M.A.R.T. - Self-Monitoring, Analysis and Reporting Technology",source:"@site/../notes/os/linux/hardware/smart.md",sourceDirName:"os/linux/hardware",slug:"/os/linux/hardware/smart",permalink:"/notes/os/linux/hardware/smart",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/hardware/smart.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"S.M.A.R.T."},sidebar:"docs",previous:{title:"NVME",permalink:"/notes/os/linux/hardware/nvme"},next:{title:"Trusted Platform Module",permalink:"/notes/os/linux/hardware/tpm"}},g={},S=[{value:"smartd",id:"smartd",level:2},{value:"\u786c\u76d8\u751f\u547d\u5468\u671f",id:"\u786c\u76d8\u751f\u547d\u5468\u671f",level:2},{value:"SSD \u751f\u547d\u5468\u671f\u548c\u5065\u5eb7\u72b6\u51b5",id:"ssd-\u751f\u547d\u5468\u671f\u548c\u5065\u5eb7\u72b6\u51b5",level:2},{value:"SSD output",id:"ssd-output",level:3},{value:"requires option &#39;-d cciss,N&#39;",id:"requires-option--d-ccissn",level:2}],k={toc:S};function v(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},k),u),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"smart"}),"S.M.A.R.T."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"S.M.A.R.T. - Self-Monitoring, Analysis and Reporting Technology"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://linux.die.net/man/8/smartctl"}),"https://linux.die.net/man/8/smartctl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://www.smartmontools.org"}),"https://www.smartmontools.org")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/smartmontools"}),"https://pkgs.alpinelinux.org/package/edge/main/x86_64/smartmontools"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apk add smartmontools\n\n# \u68c0\u67e5\u662f\u5426\u6709 SMART \u652f\u6301\nsmartctl -i /dev/sda1\n\n# \u5168\u90e8\u4fe1\u606f\nsmartctl -a /dev/sda\n# \u5305\u542b\u989d\u5916\u4fe1\u606f\nsmartctl -x /dev/sda\n# \u5065\u5eb7\u4fe1\u606f\nsmartctl  -H /dev/sdb\n\n# \u5f00\u542f\u76d1\u63a7\nsmartctl --smart=on --offlineauto=on --saveauto=on /dev/sdb\n\n# \u68c0\u67e5\nsmartctl -t short /dev/sda\n# \u68c0\u67e5\u5b8c\u6210\u67e5\u770b\u7ed3\u679c\nsmartctl -H /dev/sda\n")),(0,r.kt)("h2",p({},{id:"smartd"}),"smartd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/etc/smartd.conf - ",(0,r.kt)("a",p({parentName:"li"},{href:"https://linux.die.net/man/5/smartd.conf"}),"https://linux.die.net/man/5/smartd.conf")),(0,r.kt)("li",{parentName:"ul"},"/etc/smartd_warning.d/"),(0,r.kt)("li",{parentName:"ul"},"/etc/smartd_warning.sh")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-ini"}),"# \u626b\u63cf\u6240\u6709\nDEVICESCAN\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"flag"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-a"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u9ed8\u8ba4: -H -f -t -l error -l selftest -C 197 -U 198")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-p"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Report 'Prefailure'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-u"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Report 'Usage'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-U ID"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Report if Offline Uncorrectable count non-zero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-C ID"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Report if Current Pending Sector count non-zero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-t"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-pu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-R ID"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Track for -p,-u,-t")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-r ID"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Also report Raw values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-I ID"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Ignore for -p,-u,-t")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-i ID"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Ignore for -f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-d TYPE"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Device type: ata, scsi, marvell, removable, 3ware,N, hpt,L/M/N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-T TYPE"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"tolerance: normal, permissive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-m ADD"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Send warning email to ADD for -H, -l error, -l selftest, -f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-H"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Monitor Health Status, report if failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-l TYPE"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Monitor log: error, selftest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-f"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Monitor failure of any 'Usage' Attributes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-W D,I,C"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Monitor Temperature D)ifference, I)nformal limit, C)ritical limit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-n MODE"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"never, sleep, standby, idle")))),(0,r.kt)("h2",p({},{id:"\u786c\u76d8\u751f\u547d\u5468\u671f"}),"\u786c\u76d8\u751f\u547d\u5468\u671f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u786c\u6027\u9650\u5236",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cycle count over device lifetime - 10000"),(0,r.kt)("li",{parentName:"ul"},"load-unload count over device lifetime - 300000"))),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u65f6\u957f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Accumulated power on time")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e00\u5e74\u5927\u7ea6 8640 \u5c0f\u65f6")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"Accumulated power on time, hours:minutes 11364:04\nManufactured in week 24 of year 2016\nSpecified cycle count over device lifetime:  10000\nAccumulated start-stop cycles:  151\nSpecified load-unload count over device lifetime:  300000\nAccumulated load-unload cycles:  239\nElements in grown defect list: 8\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u68c0\u67e5\u9519\u8bef\u60c5\u51b5")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"Error counter log:\n           Errors Corrected by           Total   Correction     Gigabytes    Total\n               ECC          rereads/    errors   algorithm      processed    uncorrected\n           fast | delayed   rewrites  corrected  invocations   [10^9 bytes]  errors\nread:   232366863        0         0  232366863          0      44654.348           0\nwrite:         0        0         0         0          0      21812.815           0\nverify: 81711711        0         0  81711711          0      61007.393           0\n\nNon-medium error count:        4\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://serverfault.com/q/419007/190601"}),"https://serverfault.com/q/419007/190601")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://www.dell.com/support/kbdoc/zh-cn/000147878"}),"https://www.dell.com/support/kbdoc/zh-cn/000147878"))),(0,r.kt)("h2",p({},{id:"ssd-\u751f\u547d\u5468\u671f\u548c\u5065\u5eb7\u72b6\u51b5"}),"SSD \u751f\u547d\u5468\u671f\u548c\u5065\u5eb7\u72b6\u51b5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u5c5e\u6027\u8868")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE\n  5 Reallocated_Sector_Ct   0x0033   100   100   010    Pre-fail  Always       -       0\n  9 Power_On_Hours          0x0032   097   097   000    Old_age   Always       -       13543\n 12 Power_Cycle_Count       0x0032   098   098   000    Old_age   Always       -       1293\n177 Wear_Leveling_Count     0x0013   090   090   000    Pre-fail  Always       -       50\n179 Used_Rsvd_Blk_Cnt_Tot   0x0013   100   100   010    Pre-fail  Always       -       0\n181 Program_Fail_Cnt_Total  0x0032   100   100   010    Old_age   Always       -       0\n182 Erase_Fail_Count_Total  0x0032   100   100   010    Old_age   Always       -       0\n183 Runtime_Bad_Block       0x0013   100   099   010    Pre-fail  Always       -       0\n187 Uncorrectable_Error_Cnt 0x0032   100   100   000    Old_age   Always       -       0\n190 Airflow_Temperature_Cel 0x0032   053   047   000    Old_age   Always       -       47\n195 ECC_Error_Rate          0x001a   200   200   000    Old_age   Always       -       0\n199 CRC_Error_Count         0x003e   097   097   000    Old_age   Always       -       2988\n235 POR_Recovery_Count      0x0012   099   099   000    Old_age   Always       -       147\n241 Total_LBAs_Written      0x0032   099   099   000    Old_age   Always       -       10909128771\n")),(0,r.kt)("h3",p({},{id:"ssd-output"}),"SSD output"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Total_LBAs_Written",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"LBA = Logical block addressing"),(0,r.kt)("li",{parentName:"ul"},"TBW = LBA/Sector"),(0,r.kt)("li",{parentName:"ul"},"TBW = 21811089703/512 ~= 11TB - \u5b9e\u9645"),(0,r.kt)("li",{parentName:"ul"},"TBW = 120GB ","*"," 3000 ~= 300TB - \u603b\u8ba1")))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"=== START OF INFORMATION SECTION ===\nModel Family:     Samsung based SSDs\nDevice Model:     Samsung SSD 750 EVO 120GB\nSerial Number:    S2TTNDAH131915J\nLU WWN Device Id: 5 000000 000000000\nFirmware Version: MAT01B6Q\nUser Capacity:    120,034,123,776 bytes [120 GB]\nSector Size:      512 bytes logical/physical\nRotation Rate:    Solid State Device\nTRIM Command:     Available\nDevice is:        In smartctl database [for details use: -P show]\nATA Version is:   ACS-2, ATA8-ACS T13/1699-D revision 4c\nSATA Version is:  SATA 3.1, 6.0 Gb/s (current: 6.0 Gb/s)\nLocal Time is:    Fri Oct  8 00:56:37 2021 CST\nSMART support is: Available - device has SMART capability.\nSMART support is: Enabled\nAAM feature is:   Unavailable\nAPM feature is:   Unavailable\nRd look-ahead is: Enabled\nWrite cache is:   Enabled\nDSN feature is:   Unavailable\nATA Security is:  Disabled, frozen [SEC2]\nWt Cache Reorder: Enabled\n\n=== START OF READ SMART DATA SECTION ===\nSMART overall-health self-assessment test result: PASSED\n\nGeneral SMART Values:\nOffline data collection status:  (0x00) Offline data collection activity\n                    was never started.\n                    Auto Offline Data Collection: Disabled.\nSelf-test execution status:      (   0) The previous self-test routine completed\n                    without error or no self-test has ever\n                    been run.\nTotal time to complete Offline\ndata collection:        (    0) seconds.\nOffline data collection\ncapabilities:            (0x53) SMART execute Offline immediate.\n                    Auto Offline data collection on/off support.\n                    Suspend Offline collection upon new\n                    command.\n                    No Offline surface scan supported.\n                    Self-test supported.\n                    No Conveyance Self-test supported.\n                    Selective Self-test supported.\nSMART capabilities:            (0x0003) Saves SMART data before entering\n                    power-saving mode.\n                    Supports SMART auto save timer.\nError logging capability:        (0x01) Error logging supported.\n                    General Purpose Logging supported.\nShort self-test routine\nrecommended polling time:    (   2) minutes.\nExtended self-test routine\nrecommended polling time:    (  64) minutes.\nSCT capabilities:          (0x003d) SCT Status supported.\n                    SCT Error Recovery Control supported.\n                    SCT Feature Control supported.\n                    SCT Data Table supported.\n\nSMART Attributes Data Structure revision number: 1\nVendor Specific SMART Attributes with Thresholds:\nID# ATTRIBUTE_NAME          FLAGS    VALUE WORST THRESH FAIL RAW_VALUE\n  5 Reallocated_Sector_Ct   PO--CK   100   100   010    -    0\n  9 Power_On_Hours          -O--CK   096   096   000    -    16599\n 12 Power_Cycle_Count       -O--CK   098   098   000    -    1558\n177 Wear_Leveling_Count     PO--C-   031   031   000    -    344\n179 Used_Rsvd_Blk_Cnt_Tot   PO--C-   100   100   010    -    0\n181 Program_Fail_Cnt_Total  -O--CK   100   100   010    -    0\n182 Erase_Fail_Count_Total  -O--CK   100   100   010    -    0\n183 Runtime_Bad_Block       PO--C-   100   099   010    -    0\n187 Uncorrectable_Error_Cnt -O--CK   100   100   000    -    0\n190 Airflow_Temperature_Cel -O--CK   056   039   000    -    44\n195 ECC_Error_Rate          -O-RC-   200   200   000    -    0\n199 CRC_Error_Count         -OSRCK   099   099   000    -    49\n235 POR_Recovery_Count      -O--C-   099   099   000    -    126\n241 Total_LBAs_Written      -O--CK   099   099   000    -    21811089703\n                            ||||||_ K auto-keep\n                            |||||__ C event count\n                            ||||___ R error rate\n                            |||____ S speed/performance\n                            ||_____ O updated online\n                            |______ P prefailure warning\n\nGeneral Purpose Log Directory Version 1\nSMART           Log Directory Version 1 [multi-sector log support]\nAddress    Access  R/W   Size  Description\n0x00       GPL,SL  R/O      1  Log Directory\n0x01           SL  R/O      1  Summary SMART error log\n0x02           SL  R/O      1  Comprehensive SMART error log\n0x03       GPL     R/O      1  Ext. Comprehensive SMART error log\n0x06           SL  R/O      1  SMART self-test log\n0x07       GPL     R/O      1  Extended self-test log\n0x09           SL  R/W      1  Selective self-test log\n0x10       GPL     R/O      1  NCQ Command Error log\n0x11       GPL     R/O      1  SATA Phy Event Counters log\n0x13       GPL     R/O      1  SATA NCQ Send and Receive log\n0x30       GPL,SL  R/O      9  IDENTIFY DEVICE data log\n0x80-0x9f  GPL,SL  R/W     16  Host vendor specific log\n0xa1           SL  VS      16  Device vendor specific log\n0xa5           SL  VS      16  Device vendor specific log\n0xce           SL  VS      16  Device vendor specific log\n0xe0       GPL,SL  R/W      1  SCT Command/Status\n0xe1       GPL,SL  R/W      1  SCT Data Transfer\n\nSMART Extended Comprehensive Error Log Version: 1 (1 sectors)\nNo Errors Logged\n\nSMART Extended Self-test Log Version: 1 (1 sectors)\nNo self-tests have been logged.  [To run self-tests, use: smartctl -t]\n\nSMART Selective self-test log data structure revision number 1\n SPAN  MIN_LBA  MAX_LBA  CURRENT_TEST_STATUS\n    1        0        0  Not_testing\n    2        0        0  Not_testing\n    3        0        0  Not_testing\n    4        0        0  Not_testing\n    5        0        0  Not_testing\n  255        0    65535  Read_scanning was never started\nSelective self-test flags (0x0):\n  After scanning selected spans, do NOT read-scan remainder of disk.\nIf Selective self-test is pending on power-up, resume after 0 minute delay.\n\nSCT Status Version:                  3\nSCT Version (vendor specific):       256 (0x0100)\nDevice State:                        SCT command executing in background (5)\nCurrent Temperature:                    44 Celsius\nPower Cycle Min/Max Temperature:     40/56 Celsius\nLifetime    Min/Max Temperature:      0/70 Celsius\nUnder/Over Temperature Limit Count:  3758096367/4294901760\nSMART Status:                        0xffff (Reserved)\n\nSCT Temperature History Version:     2\nTemperature Sampling Period:         1 minute\nTemperature Logging Interval:        10 minutes\nMin/Max recommended Temperature:      0/70 Celsius\nMin/Max Temperature Limit:            0/70 Celsius\nTemperature History Size (Index):    128 (8)\n\nIndex    Estimated Time   Temperature Celsius\n   9    2021-10-07 03:40    44  *************************\n ...    ..(  2 skipped).    ..  *************************\n  12    2021-10-07 04:10    44  *************************\n  13    2021-10-07 04:20    45  **************************\n  14    2021-10-07 04:30    44  *************************\n  15    2021-10-07 04:40    45  **************************\n  16    2021-10-07 04:50    44  *************************\n  17    2021-10-07 05:00    44  *************************\n  18    2021-10-07 05:10    45  **************************\n  19    2021-10-07 05:20    44  *************************\n ...    ..(  4 skipped).    ..  *************************\n  24    2021-10-07 06:10    44  *************************\n  25    2021-10-07 06:20    45  **************************\n  26    2021-10-07 06:30    44  *************************\n ...    ..(  9 skipped).    ..  *************************\n  36    2021-10-07 08:10    44  *************************\n  37    2021-10-07 08:20    45  **************************\n  38    2021-10-07 08:30    45  **************************\n  39    2021-10-07 08:40    44  *************************\n  40    2021-10-07 08:50    45  **************************\n ...    ..( 32 skipped).    ..  **************************\n  73    2021-10-07 14:20    45  **************************\n  74    2021-10-07 14:30    44  *************************\n ...    ..( 30 skipped).    ..  *************************\n 105    2021-10-07 19:40    44  *************************\n 106    2021-10-07 19:50    45  **************************\n ...    ..( 12 skipped).    ..  **************************\n 119    2021-10-07 22:00    45  **************************\n 120    2021-10-07 22:10    44  *************************\n ...    ..( 15 skipped).    ..  *************************\n   8    2021-10-08 00:50    44  *************************\n\nSCT Error Recovery Control:\n           Read: Disabled\n          Write: Disabled\n\nDevice Statistics (GP/SMART Log 0x04) not supported\n\nPending Defects log (GP Log 0x0c) not supported\n\nSATA Phy Event Counters (GP Log 0x11)\nID      Size     Value  Description\n0x0001  2            0  Command failed due to ICRC error\n0x0002  2            0  R_ERR response for data FIS\n0x0003  2            0  R_ERR response for device-to-host data FIS\n0x0004  2            0  R_ERR response for host-to-device data FIS\n0x0005  2            0  R_ERR response for non-data FIS\n0x0006  2            0  R_ERR response for device-to-host non-data FIS\n0x0007  2            0  R_ERR response for host-to-device non-data FIS\n0x0008  2            0  Device-to-host non-data FIS retries\n0x0009  2            3  Transition from drive PhyRdy to drive PhyNRdy\n0x000a  2            3  Device-to-host register FISes sent due to a COMRESET\n0x000b  2            0  CRC errors within host-to-device FIS\n0x000d  2            0  Non-CRC errors within host-to-device FIS\n0x000f  2            0  R_ERR response for host-to-device data FIS, CRC\n0x0010  2            0  R_ERR response for host-to-device data FIS, non-CRC\n0x0012  2            0  R_ERR response for host-to-device non-data FIS, CRC\n0x0013  2            0  R_ERR response for host-to-device non-data FIS, non-CRC\n")),(0,r.kt)("h2",p({},{id:"requires-option--d-ccissn"}),"requires option '-d cciss,N'"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"smartctl -d cciss,1 -a /dev/sda\n")))}v.isMDXComponent=!0}}]);