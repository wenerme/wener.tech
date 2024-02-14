/*! For license information please see 6670d4c2.e109e1b7.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88510],{57168:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var l=s(2488),i=s(62780);const r={title:"OpenEBS"},o="OpenEBS",t={id:"devops/kubernetes/storage/openebs",title:"OpenEBS",description:"- openebs/openebs",source:"@site/../notes/devops/kubernetes/storage/openebs.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/openebs",permalink:"/notes/devops/kubernetes/storage/openebs",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/storage/openebs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647510739,formattedLastUpdatedAt:"Mar 17, 2022",frontMatter:{title:"OpenEBS"},sidebar:"docs",previous:{title:"OpenEBS Version",permalink:"/notes/devops/kubernetes/storage/openebs-version"},next:{title:"Rook",permalink:"/notes/devops/kubernetes/storage/rook"}},a={},c=[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"Helm",id:"helm",level:2},{value:"Operator",id:"operator",level:2},{value:"zfs pv",id:"zfs-pv",level:2},{value:"Data Engine",id:"data-engine",level:2},{value:"CSI",id:"csi",level:2},{value:"LocalPV ZFS",id:"localpv-zfs",level:2},{value:"snapshot",id:"snapshot",level:3},{value:"clone",id:"clone",level:3},{value:"Backup/Restore",id:"backuprestore",level:3},{value:"driver name zfs.csi.openebs.io not found in the list of registered CSI drivers",id:"driver-name-zfscsiopenebsio-not-found-in-the-list-of-registered-csi-drivers",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"openebs",children:"OpenEBS"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/openebs/openebs",children:"openebs/openebs"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.openebs.io",children:"openebs.io"})}),"\n",(0,l.jsxs)(n.li,{children:["Jiva \u6e90\u4e8e longhorn ",(0,l.jsx)(n.a,{href:"https://github.com/openebs/longhorn",children:"fork"}),"\uff0c\u5728\u4e00\u4e9b\u5b9e\u73b0\u4e0a\u6709\u5206\u6b67\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u76ee\u524d\u533a\u522b\u5df2\u7ecf\u975e\u5e38\u5927"}),"\n",(0,l.jsx)(n.li,{children:"\u5206\u6b67\u70b9: Control Plane functionality, iSCSI Target implementation, Quorum, Backup / Restore, UI"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"DB \u7c7b\u578b\u5e94\u7528\u6700\u597d\u4f7f\u7528 Local PV"}),"\n",(0,l.jsx)(n.li,{children:"\u65e0\u96c6\u7fa4\u80fd\u529b DB \u53ef\u4f7f\u7528 NVMe, SPDK, cStor + ZFS"}),"\n",(0,l.jsx)(n.li,{children:"\u6d41\u5e94\u7528\uff08Kafka\uff09\u5b58\u50a8\u63a8\u8350 NVMe Mayastor"}),"\n"]})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5b58\u50a8\u7c7b\u578b"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Volume"}),(0,l.jsx)(n.th,{children:"Storage"}),(0,l.jsx)(n.th,{children:"Requirement"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"OpenEBS Mayastor"}),(0,l.jsx)(n.td,{children:"SSDs/Cloud Volumes"}),(0,l.jsx)(n.td,{children:"\u4f4e\u5ef6\u65f6, HA, \u540c\u6b65\u526f\u672c, \u5feb\u7167, \u514b\u9686, Thin provisioning"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"OpenEBS cStor"}),(0,l.jsx)(n.td,{children:"Disks/SSDs/Cloud Volumes"}),(0,l.jsx)(n.td,{children:"\u4fdd\u62a4\u8282\u70b9\u5f02\u5e38, \u540c\u6b65\u526f\u672c, \u5feb\u7167, \u514b\u9686, Thin provisioning"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"OpenEBS Jiva"}),(0,l.jsx)(n.td,{children:"hostpath, \u5916\u90e8\u6302\u8f7d"}),(0,l.jsx)(n.td,{children:"\u4fdd\u62a4\u8282\u70b9\u5f02\u5e38, \u540c\u6b65\u526f\u672c, Thin provisioning"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Local PV - Hostpath"}),(0,l.jsx)(n.td,{children:"hostpath, \u5916\u90e8\u6302\u8f7d"}),(0,l.jsx)(n.td,{children:"\u4f4e\u5ef6\u65f6, \u672c\u5730\u6301\u4e45\u5377"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Local PV - Device"}),(0,l.jsx)(n.td,{children:"Disks/SSDs/Cloud Volumes"}),(0,l.jsx)(n.td,{children:"\u4f4e\u5ef6\u65f6, \u672c\u5730\u6301\u4e45\u5377"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Local PV - ZFS"}),(0,l.jsx)(n.td,{children:"Disks/SSDs/Cloud Volumes"}),(0,l.jsx)(n.td,{children:"\u4f4e\u5ef6\u65f6, \u672c\u5730\u6301\u4e45\u5377, \u5feb\u7167, \u514b\u9686"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Local PV - Rawfile"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"\u4f4e\u5ef6\u65f6, \u672c\u5730\u6301\u4e45\u5377"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u76ee\u5f55\u7ed3\u6784",children:"\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["/var/openebs/\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"local/ - Local PV - Hostpath"}),"\n",(0,l.jsx)(n.li,{children:"ndm/"}),"\n",(0,l.jsx)(n.li,{children:"sparse/"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"helm",children:"Helm"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/openebs/charts",children:"https://github.com/openebs/charts"})}),"\n",(0,l.jsxs)(n.li,{children:["helm \u5b50 chart\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"cstor"}),"\n",(0,l.jsx)(n.li,{children:"jiva"}),"\n",(0,l.jsxs)(n.li,{children:["localpv-provisioner\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"StorageClass: openebs-hostpath"}),"\n",(0,l.jsx)(n.li,{children:"/var/openebs/local"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"lvm-localpv"}),"\n",(0,l.jsx)(n.li,{children:"openebs-ndm - node-disk-manager"}),"\n",(0,l.jsx)(n.li,{children:"zfs-localpv"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"helm \u529f\u80fd\u533a\u5206 \u5b50 chart \u6a21\u5f0f\u548c bundle \u7684 templates"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u9700\u8981\u5148\u5b89\u88c5 iscsi\n# https://docs.openebs.io/docs/next/prerequisites.html\n\nhelm repo add openebs https://openebs.github.io/charts\nhelm repo update\nhelm install --namespace openebs --name openebs openebs/openebs\n"})}),"\n",(0,l.jsx)(n.h2,{id:"operator",children:"Operator"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u662f Helm Operator\uff0c\u66f4\u5efa\u8bae\u76f4\u63a5\u5b89\u88c5 HELM"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u76f4\u63a5\u5b89\u88c5\nkubectl apply -f https://openebs.github.io/charts/openebs-operator.yaml\n"})}),"\n",(0,l.jsx)(n.h2,{id:"zfs-pv",children:"zfs pv"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u62d3\u666e Key - ",(0,l.jsx)(n.a,{href:"https://github.com/openebs/zfs-localpv/blob/develop/docs/faq.md#6-how-to-add-custom-topology-key",children:"How to add custom topology key"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4f1a\u6dfb\u52a0 openebs.io/nodeid,openebs.io/nodename"}),"\n",(0,l.jsx)(n.li,{children:"\u9ed8\u8ba4\u6dfb\u52a0\u6240\u6709 node \u4e0a\u7684 label"}),"\n",(0,l.jsx)(n.li,{children:"ALLOWED_TOPOLOGIES \u63a7\u5236"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/openebs/zfs-localpv/tree/develop/docs",children:"https://github.com/openebs/zfs-localpv/tree/develop/docs"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"kubectl get csinodes -A\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="openebs-zfspv.sc.yaml"',children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: openebs-zfspv\nallowVolumeExpansion: true\nparameters:\n  poolname: 'zfspv-pool'\n  # zfs,ext2,ext3,ext4,xfs,btrfs\n  # \u975e zfs \u5219\u7528 zvol\n  # \u6709\u4e9b\u5e94\u7528\u5728\u6307\u5b9a\u7684 fs \u4e0a\u8fd0\u884c\u7684\u66f4\u597d - https://github.com/openebs/zfs-localpv/issues/169\n  # \u4e0d\u8bbe\u7f6e\u9ed8\u8ba4 ext4\n  fstype: 'zfs'\n  # \u5141\u8bb8\u591a\u6b21\u6302\u8f7d\n  # Deployment \u53ef\u4ee5\u4e0d\u7528 Recreate \u7b56\u7565\n  shared: 'yes'\n  # yes - \u5373\u4fbf zpool \u7a7a\u95f4\u4e0d\u591f\u4e5f\u4f1a\u63d0\u4f9b pv\n  # no - \u4f1a\u786e\u4fdd\u4fdd\u7559\u7a7a\u95f4\u8db3\u591f\n  thinprovision: 'no'\n  dedup: 'no'\n  # on,off,lzjb,zstd,gzip,gzip-1,gzip-2,gzip-3,gzip-4,gzip-5,gzip-6,gzip-7,gzip-8,gzip-9,zle,lz4\n  # on - \u9ed8\u8ba4\u52a0\u5bc6\u7b97\u6cd5\n  compression: 'on'\n  # zfs \u914d\u7f6e\n  # recordsize:\n  # zvol \u914d\u7f6e\n  # volblocksize:\nprovisioner: zfs.csi.openebs.io\nallowedTopologies:\n  - matchLabelExpressions:\n      - key: openebs.io/nodeid\n        values:\n          - zfspv-node1\n          - zfspv-node2\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5feb\u7167"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="zfspv-snapclass.yaml"',children:'kind: VolumeSnapshotClass\napiVersion: snapshot.storage.k8s.io/v1beta1\nmetadata:\n  name: zfspv-snapclass\n  annotations:\n    # snapshot.storage.kubernetes.io/is-default-class: "true"\ndriver: zfs.csi.openebs.io\ndeletionPolicy: Delete\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5bf9 PVC \u8fdb\u884c\u5feb\u7167"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"apiVersion: snapshot.storage.k8s.io/v1beta1\nkind: VolumeSnapshot\nmetadata:\n  name: zfspv-snap\nspec:\n  volumeSnapshotClassName: zfspv-snapclass\n  source:\n    persistentVolumeClaimName: csi-zfspv\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"kubectl get volumesnapshot.snapshot\n# \u67e5\u770b\u5feb\u7167\nkubectl get zfssnap -n openebs\nzfs list -t all\n"})}),"\n",(0,l.jsx)(n.h2,{id:"data-engine",children:"Data Engine"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/openebs/libcstor",children:"cStor"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Apache-2.0, C"}),"\n",(0,l.jsx)(n.li,{children:"IOs on ZVOL/uZFS over network"}),"\n",(0,l.jsx)(n.li,{children:"synchronous replication, snapshots and clones"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/openebs/jiva",children:"Jiva"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Apache-2.0, Go"}),"\n",(0,l.jsx)(n.li,{children:"iSCSI Distributed Block Storage Controller"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/longhorn/longhorn-engine",children:"longhorn/longhorn-engine"})," fork"]}),"\n",(0,l.jsxs)(n.li,{children:["SCSI \u57fa\u4e8e ",(0,l.jsx)(n.a,{href:"https://github.com/gostor/gotgt",children:"gostor/gotgt"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/openebs/mayastor",children:"Mayastor"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Apache-2.0, Rust"}),"\n",(0,l.jsxs)(n.li,{children:["cloud native declarative data plane\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"abstract storage resources - Storage unification"}),"\n",(0,l.jsx)(n.li,{children:"Low latency"}),"\n",(0,l.jsx)(n.li,{children:"support Micro-VM based containers"}),"\n",(0,l.jsx)(n.li,{children:"Programmatic based storage access"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"NVMe SSD"}),"\n",(0,l.jsx)(n.li,{children:"SPDK, NVMe-oF"}),"\n",(0,l.jsx)(n.li,{children:"Linux kernel 5.4+ - nvme-tcp, ext4, optionally xfs"}),"\n",(0,l.jsx)(n.li,{children:"x86-64, SSE4.2"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/openebs/maya",children:"Maya"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"non-csi - 3.0 \u5e9f\u5f03"}),"\n",(0,l.jsx)(n.li,{children:"\u4f7f\u7528 CStore CSI \u6216 Jiva CSI"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"csi",children:"CSI"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/openebs/cstor-operators",children:"cStor"})}),"\n",(0,l.jsxs)(n.li,{children:["Local PV - ",(0,l.jsx)(n.a,{href:"https://openebs.io/docs/main/concepts/casengines#local-engines",children:"https://openebs.io/docs/main/concepts/casengines#local-engines"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"hostpath"}),"\n",(0,l.jsx)(n.li,{children:"device"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/openebs/zfs-localpv",children:"ZFS"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8282\u70b9\u4e0a\u521b\u5efa ZPOOL - SC"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"LVM"}),"\n",(0,l.jsx)(n.li,{children:"Rawfile"}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"abbr."}),(0,l.jsx)(n.th,{children:"stand for"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"CAS"}),(0,l.jsx)(n.td,{children:"Container Attached Storage"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"CSPC"}),(0,l.jsx)(n.td,{children:"CStorPoolCluster"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"CSI"}),(0,l.jsx)(n.td,{children:"Container Storage Interface"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Storage Pool Claim"}),(0,l.jsx)(n.td,{children:"SPC"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"CSP"}),(0,l.jsx)(n.td,{children:"cStor Storage Pool"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"CV"}),(0,l.jsx)(n.td,{children:"cStor Volume"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"CVR"}),(0,l.jsx)(n.td,{children:"cStor Volume Replica"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"SPDK"}),(0,l.jsx)(n.td,{children:"Intel Storage Performance Development Kit"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"MSN"}),(0,l.jsx)(n.td,{children:"Mayastor Node"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"localpv-zfs",children:"LocalPV ZFS"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/openebs/zfs-localpv",children:"openebs/zfs-localpv"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8282\u70b9\u4e0a\u521b\u5efa ZPOOL - SC"}),"\n",(0,l.jsx)(n.li,{children:"\u652f\u6301 FS\u3001Block"}),"\n",(0,l.jsx)(n.li,{children:"\u652f\u6301 \u5feb\u7167\u3001\u514b\u9686\u3001Resize"}),"\n",(0,l.jsx)(n.li,{children:"\u652f\u6301 Velero \u5907\u4efd\u6062\u590d"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"caution",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5efa\u8bae\u8282\u70b9\u4e0a\u5173\u95ed zfs import"}),"\n",(0,l.jsxs)(n.li,{children:["\u76ee\u524d\u4e0d\u652f\u6301\u8fc1\u79fb - syncoid\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/openebs/zfs-localpv/issues/291",children:"openebs/zfs-localpv#291"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/openebs/zfs-localpv/issues/219",children:"openebs/zfs-localpv#219"})}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="zfs-localpv.yaml"',children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: openebs-zfspv\nparameters:\n  # zfs \u53c2\u6570\n  recordsize: '4k'\n  # volblocksize: \"4k\" # zvol \u4f7f\u7528\u8be5\u53c2\u6570\n  compression: 'off'\n  dedup: 'off'\n  fstype: 'zfs' # \u5176\u4ed6 fs \u4f1a\u521b\u5efa\u4e3a zvol\n  poolname: 'zfspv-pool' # \u5339\u914d\u521b\u5efa\u7684\u540d\u5b57\nprovisioner: zfs.csi.openebs.io\nallowedTopologies:\n  - matchLabelExpressions:\n      # \u9650\u5b9a\u8282\u70b9\n      - key: kubernetes.io/hostname\n        values:\n          - zfspv-node1\n          - zfspv-node2\n      # \u81ea\u5b9a\u4e49 key\n      - key: openebs.io/rack\n        values:\n          - rack1\n# \u9ed8\u8ba4\u4f7f\u7528 zfs scheduler - VolumeWeighted, CapacityWeighted\n# \u53ef\u4f7f\u7528 kubernetes scheduler - pod \u8282\u70b9\u4eb2\u548c\nvolumeBindingMode: WaitForFirstConsumer\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="csi-zfspv.yaml"',children:"kind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: csi-zfspv\nspec:\n  storageClassName: openebs-zfspv\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 4Gi\n"})}),"\n",(0,l.jsx)(n.h3,{id:"snapshot",children:"snapshot"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="zfspv-snapclass.yaml"',children:"kind: VolumeSnapshotClass\napiVersion: snapshot.storage.k8s.io/v1beta1\nmetadata:\n  name: zfspv-snapclass\n  annotations:\n    snapshot.storage.kubernetes.io/is-default-class: 'true'\ndriver: zfs.csi.openebs.io\ndeletionPolicy: Delete\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="zfspv-snap.yaml"',children:"apiVersion: snapshot.storage.k8s.io/v1beta1\nkind: VolumeSnapshot\nmetadata:\n  name: zfspv-snap\nspec:\n  volumeSnapshotClassName: zfspv-snapclass\n  source:\n    persistentVolumeClaimName: csi-zfspv\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"kubectl get volumesnapshot.snapshot\n# \u8282\u70b9\u4e0a\u4e5f\u53ef\u4ee5\u67e5\u770b\u5feb\u7167\nzfs list -t all\n"})}),"\n",(0,l.jsx)(n.h3,{id:"clone",children:"clone"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="zfspv-clone.yaml"',children:"kind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: zfspv-clone\nspec:\n  storageClassName: openebs-zfspv\n  dataSource:\n    # clone \u81ea snapshot\n    name: zfspv-snap\n    kind: VolumeSnapshot\n    apiGroup: snapshot.storage.k8s.io\n    # clone \u81ea volume\n    name: zfspv-pvc\n    kind: PersistentVolumeClaim\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 4Gi\n"})}),"\n",(0,l.jsx)(n.h3,{id:"backuprestore",children:"Backup/Restore"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u9700\u8981 Velero"}),"\n",(0,l.jsx)(n.li,{children:"\u9700\u8981 openebs/velero-plugin \u63d2\u4ef6"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="zfspv-full.yaml"',children:"apiVersion: velero.io/v1\nkind: VolumeSnapshotLocation\nmetadata:\n  name: zfspv-full\n  namespace: velero\nspec:\n  provider: openebs.io/zfspv-blockstore\n  config:\n    bucket: velero\n    prefix: zfs\n    incrBackupCount: '3' # number of incremental backups we want to have\n    namespace: openebs # this is the namespace where ZFS-LocalPV creates all the CRs, passed as OPENEBS_NAMESPACE env in the ZFS-LocalPV deployment\n    provider: aws\n    region: minio\n    s3ForcePathStyle: 'true'\n    s3Url: http://minio.velero.svc:9000\n"})}),"\n",(0,l.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,l.jsx)(n.h2,{id:"driver-name-zfscsiopenebsio-not-found-in-the-list-of-registered-csi-drivers",children:"driver name zfs.csi.openebs.io not found in the list of registered CSI drivers"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u786e\u4fdd driver \u5b58\u5728\nkubectl get csinodes -oyaml\n"})}),"\n",(0,l.jsx)(n.p,{children:"driver null \u53ef\u80fd\u662f\u6ce8\u518c\u51fa\u95ee\u9898\u4e86"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u53ef\u5c1d\u8bd5\u5220\u9664 openebs-zfs-localpv-node \u7684 Pod\nkubectl delete csinodes NODEID\nkubectl get pods -A -l role=openebs-zfs -owide\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd8\u6709\u95ee\u9898\uff0c\u5e94\u8be5\u662f kubelet \u76ee\u5f55\u914d\u7f6e\u4e0d\u5bf9\uff0c\u9ed8\u8ba4\u662f /var/lib/kubelet\uff0c\u4f46 k0s\u3001rke\u3001k3s \u9700\u8981\u4fee\u6539\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},38088:(e,n,s)=>{var l=s(96651),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,t=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var l,r={},c=null,d=null;for(l in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,l)&&!a.hasOwnProperty(l)&&(r[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===r[l]&&(r[l]=n[l]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:t.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>t,M:()=>o});var l=s(96651);const i={},r=l.createContext(i);function o(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);