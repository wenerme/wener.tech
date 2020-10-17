(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{171:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return f}));var n=t(2),o=t(7),a=(t(0),t(586)),c={id:"dmesg-faq",title:"Linux Kernel \u65e5\u5fd7\u5e38\u89c1\u95ee\u9898"},i={unversionedId:"ops/os/linux/sys/dmesg-faq",id:"ops/os/linux/sys/dmesg-faq",isDocsHomePage:!1,title:"Linux Kernel \u65e5\u5fd7\u5e38\u89c1\u95ee\u9898",description:"Linux Kernel \u65e5\u5fd7\u5e38\u89c1\u95ee\u9898",source:"@site/notes/ops/os/linux/sys/kernel-dmesg-faq.md",slug:"/ops/os/linux/sys/dmesg-faq",permalink:"/notes/ops/os/linux/sys/dmesg-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/os/linux/sys/kernel-dmesg-faq.md",version:"current"},s=[{value:"No handler for Region POWR",id:"no-handler-for-region-powr",children:[]},{value:"FW version command failed -5",id:"fw-version-command-failed--5",children:[]},{value:"EDAC DEBUG: ie31200_check: MC0",id:"edac-debug-ie31200_check-mc0",children:[]},{value:"pstore: crypto_comp_decompress failed, ret = -22!",id:"pstore-crypto_comp_decompress-failed-ret---22",children:[]},{value:"pcieport 0000:00:1c.7: AER: Corrected error received: 0000:00:1c.7",id:"pcieport-0000001c7-aer-corrected-error-received-0000001c7",children:[{value:"perf: interrupt took too long",id:"perf-interrupt-took-too-long",children:[]}]},{value:"Longhorn iSCSI \u5f02\u5e38\u540e\u65e5\u5fd7",id:"longhorn-iscsi-\u5f02\u5e38\u540e\u65e5\u5fd7",children:[]},{value:"mlx4_core Internal error detected",id:"mlx4_core-internal-error-detected",children:[]},{value:"Firmware Bug: TSC_DEADLINE disabled due to Errata: please update microcode to version: 0x52 (or later)",id:"firmware-bug-tsc_deadline-disabled-due-to-errata-please-update-microcode-to-version-0x52-or-later",children:[]},{value:"Firmware Bug: the BIOS has corrupted hw-PMU resources (MSR 38d is 30)",id:"firmware-bug-the-bios-has-corrupted-hw-pmu-resources-msr-38d-is-30",children:[]},{value:"EDAC sbridge: Failed to register device with error -19.",id:"edac-sbridge-failed-to-register-device-with-error--19",children:[{value:"The NVM Checksum Is Not Valid",id:"the-nvm-checksum-is-not-valid",children:[]}]},{value:"ext4 filesystem being mounted at /boot supports timestamps until 2038 (0x7fffffff)",id:"ext4-filesystem-being-mounted-at-boot-supports-timestamps-until-2038-0x7fffffff",children:[]},{value:"lpc_ich: Resource conflict(s) found affecting gpio_ich",id:"lpc_ich-resource-conflicts-found-affecting-gpio_ich",children:[]}],l={rightToc:s};function f(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"linux-kernel-\u65e5\u5fd7\u5e38\u89c1\u95ee\u9898"},"Linux Kernel \u65e5\u5fd7\u5e38\u89c1\u95ee\u9898"),Object(a.b)("h2",{id:"no-handler-for-region-powr"},"No handler for Region ","[POWR]"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u6dfb\u52a0 acpi_ipmi \u540e\u5f02\u5e38\u505c\u6b62")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u5c1d\u8bd5\u6dfb\u52a0 module\nmodprobe ipmi_si\nmodprobe acpi_ipmi\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"ACPI Error: No handler for Region [POWR] (00000000a03df149) [IPMI] (20190816/evregion-127)\nACPI Error: Region IPMI (ID=7) has no handler (20190816/exfldio-261)\nACPI Error: Aborting method \\_SB.PMI0._PMM due to previous error (AE_NOT_EXIST) (20190816/psparse-529)\nACPI Error: AE_NOT_EXIST, Evaluating _PMM (20190816/power_meter-325)\n")),Object(a.b)("h2",{id:"fw-version-command-failed--5"},"FW version command failed -5"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"mei 0000:00:16.0-56213584-9a29-4916-badf-0fb7ed682aeb: Could not read FW version\nmei 0000:00:16.0-56213584-9a29-4916-badf-0fb7ed682aeb: FW version command failed -5\n")),Object(a.b)("h2",{id:"edac-debug-ie31200_check-mc0"},"EDAC DEBUG: ie31200_check: MC0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5185\u5b58\u95ee\u9898\uff0c\u5c1d\u8bd5\u66f4\u6362\u5185\u5b58\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u662f\u53cc\u901a\u9053\uff0c\u4f46\u662f\u53ea\u6709\u4e00\u6839\u5185\u5b58\u6761\uff0c\u5c1d\u8bd5\u8865\u9f50")),Object(a.b)("h2",{id:"pstore-crypto_comp_decompress-failed-ret---22"},"pstore: crypto_comp_decompress failed, ret = -22!"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"pstore: crypto_comp_decompress failed, ret = -22!\npstore: decompression failed: -22\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/torvalds/linux/blob/bf929479893052b1c7bfe23a4e7a903643076350/fs/pstore/platform.c#L280"}),"fs/pstore/platform.c#L280")),Object(a.b)("li",{parentName:"ul"},"\u4e0e\u8be5\u76ee\u5f55\u76f8\u5173 ",Object(a.b)("inlineCode",{parentName:"li"},"/sys/fs/pstore/")),Object(a.b)("li",{parentName:"ul"},"\u4e0e\u5347\u7ea7\u5185\u6838\u6709\u5173"),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003 ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=902966"}),"pstore: crypto_comp_decompress failed"))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# root \u6267\u884c - sudo \u4e0d\u4f1a\u5c55\u5f00\nrm /sys/fs/pstore/dmesg*\n")),Object(a.b)("h2",{id:"pcieport-0000001c7-aer-corrected-error-received-0000001c7"},"pcieport 0000:00:1c.7: AER: Corrected error received: 0000:00:1c.7"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5185\u6838\u53c2\u6570 - \u5efa\u8bae\u4f9d\u6b21\u5c1d\u8bd5",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pci=nomsi")," - \u5173\u95ed\u90e8\u5206\u4e2d\u65ad - MSI=Message Signaled Interrupts - PCI_MSI \u7f16\u8bd1\u5185\u6838\u53c2\u6570"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pci=noaer")," - \u5173\u95ed\u62a5\u9519 - AER=Advanced Error Reporting - PCIEAER \u7f16\u8bd1\u5185\u6838\u53c2\u6570"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pcie_aspm=off")," - \u5173\u95ed PCIe \u7701\u7535\u7ba1\u7406 - \u53ef\u80fd\u4f1a\u66f4\u8017\u7535 - ASPM=Active State Power Management"))),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://askubuntu.com/questions/863150"}),"PCIe Bus Error: severity=Corrected, type=Physical Layer, id=00e5(Receiver ID)"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u53ef\u80fd\u662f\u7531\u4e8e PCI \u7684\u989d\u7535\u6e90\u7ba1\u7406\u5c06\u94fe\u8def\u8bbe\u7f6e\u4e3a\u4f4e\u7535\u6a21\u5f0f\u89e6\u53d1\u7684\u5f02\u5e38"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://bbs.archlinux.org/viewtopic.php?id=242182"}),"PCIe Bus Error: severity=Corrected, type=Physical Layer, (Receiver ID)"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u53ef\u80fd\u662f\u5e26\u5bbd\u95ee\u9898"),Object(a.b)("li",{parentName:"ul"},"Corrected \u6d88\u606f\u4e0d\u5f71\u54cd\uff0c\u94fe\u8def\u5c42\u81ea\u52a8\u77eb\u6b63\u3002Uncorrected \u6709\u95ee\u9898")))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u5b9a\u4f4d\u95ee\u9898")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"[519708.849337] pcieport 0000:00:1c.7: AER: Corrected error received: 0000:00:1c.7\n[519708.849346] pcieport 0000:00:1c.7: AER: PCIe Bus Error: severity=Corrected, type=Physical Layer, (Receiver ID)\n[519708.849349] pcieport 0000:00:1c.7: AER:   device [8086:a297] error status/mask=00000001/00002000\n[519708.849352] pcieport 0000:00:1c.7: AER:    [ 0] RxErr\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"lspci -vs 0000:00:1c.7\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"00:1c.7 PCI bridge: Intel Corporation 200 Series PCH PCI Express Root Port #8 (rev f0) (prog-if 00 [Normal decode])\n    Flags: bus master, fast devsel, latency 0, IRQ 124\n    Bus: primary=00, secondary=03, subordinate=03, sec-latency=0\n    I/O behind bridge: [disabled]\n    Memory behind bridge: df100000-df1fffff [size=1M]\n    Prefetchable memory behind bridge: [disabled]\n    Capabilities: <access denied>\n    Kernel driver in use: pcieport\n")),Object(a.b)("h3",{id:"perf-interrupt-took-too-long"},"perf: interrupt took too long"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Linux ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://perf.wiki.kernel.org/index.php/Main_Page"}),"perf")," \u65e5\u5fd7"),Object(a.b)("li",{parentName:"ul"},"\u5bf9\u7cfb\u7edf\u6ca1\u6709\u5f71\u54cd\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u5728\u81ea\u52a8\u8c03\u6574\u5904\u7406\u9891\u7387")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"[109932.035738] perf: interrupt took too long (2511 > 2500), lowering kernel.perf_event_max_sample_rate to 79500\n[110540.025443] perf: interrupt took too long (3146 > 3138), lowering kernel.perf_event_max_sample_rate to 63300\n[111374.568374] perf: interrupt took too long (3935 > 3932), lowering kernel.perf_event_max_sample_rate to 50700\n[112979.009891] perf: interrupt took too long (4927 > 4918), lowering kernel.perf_event_max_sample_rate to 40500\n[121152.410414] perf: interrupt took too long (6159 > 6158), lowering kernel.perf_event_max_sample_rate to 32400\n")),Object(a.b)("h2",{id:"longhorn-iscsi-\u5f02\u5e38\u540e\u65e5\u5fd7"},"Longhorn iSCSI \u5f02\u5e38\u540e\u65e5\u5fd7"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dmesg"}),"ata1.00: exception Emask 0x0 SAct 0x140180 SErr 0x0 action 0x6\nata1.00: irq_stat 0x40000008\nata1.00: failed command: READ FPDMA QUEUED\nata1.00: cmd 60/20:40:00:37:c7/00:00:47:00:00/40 tag 8 ncq dma 16384 in\n         res 41/84:20:00:37:c7/00:00:47:00:00/00 Emask 0x410 (ATA bus error) <F>\nata1.00: status: { DRDY ERR }\nata1.00: error: { ICRC ABRT }\nata1: hard resetting link\nata1: SATA link up 6.0 Gbps (SStatus 133 SControl 300)\nata1.00: configured for UDMA/133\nsd 0:0:0:0: [sda] tag#8 UNKNOWN(0x2003) Result: hostbyte=0x00 driverbyte=0x08\nsd 0:0:0:0: [sda] tag#8 Sense Key : 0xb [current]\nsd 0:0:0:0: [sda] tag#8 ASC=0x47 ASCQ=0x0\nsd 0:0:0:0: [sda] tag#8 CDB: opcode=0x28 28 00 47 c7 37 00 00 00 20 00\nblk_update_request: I/O error, dev sda, sector 1204238080 op 0x0:(READ) flags 0x80700 phys_seg 4 prio class 0\nata1: EH complete\nscsi host4: iSCSI Initiator over TCP/IP\nscsi 4:0:0:0: RAID              IET      Controller       0001 PQ: 0 ANSI: 5\nscsi 4:0:0:1: Direct-Access     IET      VIRTUAL-DISK     0001 PQ: 0 ANSI: 5\nsd 4:0:0:1: Power-on or device reset occurred\nsd 4:0:0:1: [sdb] 41943040 512-byte logical blocks: (21.5 GB/20.0 GiB)\nsd 4:0:0:1: [sdb] Write Protect is off\nsd 4:0:0:1: [sdb] Mode Sense: 69 00 10 08\nsd 4:0:0:1: [sdb] Write cache: enabled, read cache: enabled, supports DPO and FUA\nsd 4:0:0:1: [sdb] Attached SCSI disk\n session2: session recovery timed out after 120 secs\nsd 5:0:0:1: rejecting I/O to offline device\nblk_update_request: I/O error, dev sdc, sector 0 op 0x1:(WRITE) flags 0x800 phys_seg 0 prio class 0\nsd 5:0:0:1: rejecting I/O to offline device\nblk_update_request: I/O error, dev sdc, sector 0 op 0x1:(WRITE) flags 0x800 phys_seg 0 prio class 0\nsd 5:0:0:1: rejecting I/O to offline device\nblk_update_request: I/O error, dev sdc, sector 0 op 0x1:(WRITE) flags 0x800 phys_seg 0 prio class 0\nsd 5:0:0:1: rejecting I/O to offline device\nblk_update_request: I/O error, dev sdc, sector 0 op 0x1:(WRITE) flags 0x800 phys_seg 0 prio class 0\nsd 5:0:0:1: rejecting I/O to offline device\nblk_update_request: I/O error, dev sdc, sector 21241888 op 0x1:(WRITE) flags 0x20800 phys_seg 1 prio class 0\nbuffer_io_error: 24 callbacks suppressed\nBuffer I/O error on dev sdc, logical block 2655236, lost sync page write\nJBD2: Error -5 detected when updating journal superblock for sdc-8.\nAborting journal on device sdc-8.\nsd 5:0:0:1: rejecting I/O to offline device\nblk_update_request: I/O error, dev sdc, sector 21241888 op 0x1:(WRITE) flags 0x20800 phys_seg 1 prio class 0\nBuffer I/O error on dev sdc, logical block 2655236, lost sync page write\nJBD2: Error -5 detected when updating journal superblock for sdc-8.\nsd 5:0:0:1: rejecting I/O to offline device\nblk_update_request: I/O error, dev sdc, sector 0 op 0x1:(WRITE) flags 0x20800 phys_seg 1 prio class 0\nBuffer I/O error on dev sdc, logical block 0, lost sync page write\nEXT4-fs: 24 callbacks suppressed\nEXT4-fs (sdc): I/O error while writing superblock\n")),Object(a.b)("h1",{id:"todo"},"TODO"),Object(a.b)("h2",{id:"mlx4_core-internal-error-detected"},"mlx4_core Internal error detected"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"[  149.148339] mlx4_core 0000:82:00.0: Internal error detected:\n[  149.148368] mlx4_core 0000:82:00.0:   buf[00]: ffffffff\n[  149.148375] mlx4_core 0000:82:00.0:   buf[01]: ffffffff\n[  149.148398] mlx4_core 0000:82:00.0:   buf[02]: ffffffff\n[  149.148421] mlx4_core 0000:82:00.0:   buf[03]: ffffffff\n[  149.148427] mlx4_core 0000:82:00.0:   buf[04]: ffffffff\n[  149.148433] mlx4_core 0000:82:00.0:   buf[05]: ffffffff\n[  149.148478] mlx4_core 0000:82:00.0:   buf[06]: ffffffff\n[  149.148483] mlx4_core 0000:82:00.0:   buf[07]: ffffffff\n[  149.148489] mlx4_core 0000:82:00.0:   buf[08]: ffffffff\n[  149.148494] mlx4_core 0000:82:00.0:   buf[09]: ffffffff\n[  149.148500] mlx4_core 0000:82:00.0:   buf[0a]: ffffffff\n[  149.148523] mlx4_core 0000:82:00.0:   buf[0b]: ffffffff\n[  149.148546] mlx4_core 0000:82:00.0:   buf[0c]: ffffffff\n[  149.148568] mlx4_core 0000:82:00.0:   buf[0d]: ffffffff\n[  149.148574] mlx4_core 0000:82:00.0:   buf[0e]: ffffffff\n[  149.148579] mlx4_core 0000:82:00.0:   buf[0f]: ffffffff\n[  149.148603] mlx4_core 0000:82:00.0: device is going to be reset\n[  149.148607] mlx4_core 0000:82:00.0: crdump: FW doesn't support health buffer access, skipping\n")),Object(a.b)("h2",{id:"firmware-bug-tsc_deadline-disabled-due-to-errata-please-update-microcode-to-version-0x52-or-later"},"[Firmware Bug]",": TSC_DEADLINE disabled due to Errata: please update microcode to version: 0x52 (or later)"),Object(a.b)("h2",{id:"firmware-bug-the-bios-has-corrupted-hw-pmu-resources-msr-38d-is-30"},"[Firmware Bug]",": the BIOS has corrupted hw-PMU resources (MSR 38d is 30)"),Object(a.b)("h2",{id:"edac-sbridge-failed-to-register-device-with-error--19"},"EDAC sbridge: Failed to register device with error -19."),Object(a.b)("h3",{id:"the-nvm-checksum-is-not-valid"},"The NVM Checksum Is Not Valid"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"e1000e: Intel(R) PRO/1000 Network Driver - 3.2.6-k\ne1000e: Copyright(c) 1999 - 2015 Intel Corporation.\ne1000e 0000:00:1f.6: Interrupt Throttling Rate (ints/sec) set to dynamic conservative mode\ne1000e 0000:00:1f.6: The NVM Checksum Is Not Valid\ne1000e: probe of 0000:00:1f.6 failed with error -5\n")),Object(a.b)("h2",{id:"ext4-filesystem-being-mounted-at-boot-supports-timestamps-until-2038-0x7fffffff"},"ext4 filesystem being mounted at /boot supports timestamps until 2038 (0x7fffffff)"),Object(a.b)("h2",{id:"lpc_ich-resource-conflicts-found-affecting-gpio_ich"},"lpc_ich: Resource conflict(s) found affecting gpio_ich"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"[    5.019593] ACPI Warning: SystemIO range 0x0000000000001C00-0x0000000000001C2F conflicts with OpRegion 0x0000000000001C00-0x0000000000001FFF (\\GPR) (20190816/utaddress-204)\n[    5.019594] ACPI: If an ACPI driver is available for this device, you should use it instead of the native driver\n\n\n[    4.297023] wmi_bus wmi_bus-PNP0C14:00: WQBC data block query control method not found\n\n[    0.172443] pmd_set_huge: Cannot satisfy [mem 0xf8000000-0xf8200000] with a huge-page mapping due to MTRR override.\n\n[    0.172443] ENERGY_PERF_BIAS: Set to 'normal', was 'performance'\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"[    0.165743] MDS: Mitigation: Clear CPU buffers\n[    0.165864] Freeing SMP alternatives memory: 28K\n[    0.166679] smpboot: CPU0: Intel(R) Xeon(R) CPU E3-1265L v3 @ 2.50GHz (family: 0x6, model: 0x3c, stepping: 0x3)\n[    0.166754] Performance Events: PEBS fmt2+, Haswell events, 16-deep LBR, full-width counters, Intel PMU driver.\n[    0.166766] ... version:                3\n[    0.166767] ... bit width:              48\n[    0.166767] ... generic registers:      4\n[    0.166768] ... value mask:             0000ffffffffffff\n[    0.166768] ... max period:             00007fffffffffff\n[    0.166768] ... fixed-purpose events:   3\n[    0.166769] ... event mask:             000000070000000f\n[    0.166792] rcu: Hierarchical SRCU implementation.\n[    0.167184] NMI watchdog: Enabled. Permanently consumes one hw-PMU counter.\n[    0.167241] smp: Bringing up secondary CPUs ...\n[    0.167292] x86: Booting SMP configuration:\n[    0.167292] .... node  #0, CPUs:      #1 #2 #3 #4\n[    0.167683] MDS CPU bug present and SMT on, data leak possible. See https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/mds.html for more details.\n[    0.167683]  #5 #6 #7\n[    0.169202] smp: Brought up 1 node, 8 CPUs\n[    0.169202] smpboot: Max logical packages: 1\n[    0.169202] ----------------\n[    0.169202] | NMI testsuite:\n[    0.169202] --------------------\n[    0.169202]   remote IPI:  ok  |\n[    0.169202]    local IPI:  ok  |\n[    0.169202] --------------------\n[    0.169202] Good, all   2 testcases passed! |\n[    0.169202] ---------------------------------\n[    0.169202] smpboot: Total of 8 processors activated (39924.80 BogoMIPS)\n")))}f.isMDXComponent=!0},586:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return u}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),f=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=f(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=f(t),b=n,u=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return t?o.a.createElement(u,i(i({ref:r},l),{},{components:t})):o.a.createElement(u,i({ref:r},l))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);