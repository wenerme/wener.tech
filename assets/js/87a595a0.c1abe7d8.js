"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97015],{49613:function(e,n,t){t.d(n,{Zo:function(){return _},kt:function(){return d}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},_=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,_=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,u=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(u,i(i({ref:n},_),{},{components:t})):r.createElement(u,i({ref:n},_))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},57314:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return b}});var r=t(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,_=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&_(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&_(e,t,n[t]);return e};const p={tags:["Configuration"]},d="ScyllaDB \u914d\u7f6e",u={unversionedId:"db/column/scylladb/scylladb-conf",id:"db/column/scylladb/scylladb-conf",title:"ScyllaDB \u914d\u7f6e",description:"- /etc/scylla/scylla.yaml",source:"@site/../notes/db/column/scylladb/scylladb-conf.md",sourceDirName:"db/column/scylladb",slug:"/db/column/scylladb/conf",permalink:"/notes/db/column/scylladb/conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/column/scylladb/scylladb-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{tags:["Configuration"]},sidebar:"docs",previous:{title:"ScyllaDB",permalink:"/notes/db/column/scylladb/"},next:{title:"ScyllaDB \u5f00\u53d1",permalink:"/notes/db/column/scylladb/dev"}},f={},b=[],y={toc:b};function h(e){var n,t=e,{components:a}=t,_=((e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=m(m({},y),_),o(n,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"scylladb-\u914d\u7f6e"}),"ScyllaDB \u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/etc/scylla/scylla.yaml"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/scylladb/scylladb/blob/master/conf/scylla.yaml"}),"https://github.com/scylladb/scylladb/blob/master/conf/scylla.yaml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://docs.scylladb.com/stable/getting-started/system-configuration.html"}),"https://docs.scylladb.com/stable/getting-started/system-configuration.html"))))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"listen_address: 0.0.0.0\n# listen_interface: eth0\n# listen_interface_prefer_ipv6: false\nbroadcast_address: POD_IP\nbroadcast_rpc_address: POD_IP\nlisten_on_broadcast_address: false\nrpc_address: 0.0.0.0\n# = listen_address\nalternator_address: 0.0.0.0\n# rpc_interface: eth1\n# rpc_interface_prefer_ipv6: false\napi_address: 0.0.0.0\nprometheus_address: 0.0.0.0\n\nrpc_port: 9160\napi_port: 10000\nprometheus_port: 9180\nnative_transport_port: 9042\nnative_shard_aware_transport_port: 19042\nalternator_port: 8000\nalternator_https_port: 8443\n# native_transport_port_ssl: 9142\n# native_shard_aware_transport_port_ssl: 19142\n# storage_port: 7000\n# ssl_storage_port: 7001\n# start_native_transport: true\n# native_transport_max_frame_size_in_mb: 256\nstart_rpc: true # thrift\nrpc_keepalive: true\n\nread_request_timeout_in_ms: 5000\nwrite_request_timeout_in_ms: 2000\ncas_contention_timeout_in_ms: 1000\n\n# \u63a8\u8350\u8bbe\u7f6e\uff0c\u4e0d\u80fd\u4fee\u6539\ncluster_name: scylladb1\nseed_provider:\n  # \u76f4\u63a5\u6307\u5b9a\n  - class_name: org.apache.cassandra.locator.SimpleSeedProvider\n    parameters:\n      # \u9017\u53f7\u5206\u9694\u591a\u4e2a\n      - seeds: '127.0.0.1'\n# SimpleSnitch - \u5355\u8282\u70b9\n# GossipingPropertyFileSnitch\n# PropertyFileSnitch, Ec2Snitch, Ec2MultiRegionSnitch, RackInferringSnitch\nendpoint_snitch: SimpleSnitch\n\n# \u6570\u91cf\u8d8a\u5927\u5219\u4f1a\u5206\u914d\u8d8a\u591a\u7684\u6570\u636e\nnum_tokens: 256\n\nworkdir: /var/lib/scylla\ndata_file_directories:\n  - /var/lib/scylla/data\nhints_directory: /var/lib/scylla/hints\nview_hints_directory: /var/lib/scylla/view_hints\ncommitlog_directory: /var/lib/scylla/commitlog\n\n# https://docs.scylladb.com/architecture/anti-entropy/hinted-handoff\n# hinted_handoff_enabled: DC1,DC2\n# hinted_handoff_enabled: true\n# max_hint_window_in_ms: 10800000 # 3 hours\n\n# ====================\n# Commit Log\n# ====================\n# periodic, batch\n# batch ACK \u4f1a\u7b49\u5f85 commitlog_sync_batch_window_in_ms fsync\n# periodic \u7acb\u5373 ACK \u7136\u540e\u5b9a\u65f6 fsync\ncommitlog_sync: periodic\ncommitlog_sync_period_in_ms: 10000\n# \u5982\u679c\u60f3\u8981\u5f52\u6863 commitlog \u53ef\u4ee5\u8bbe\u7f6e\u5c0f\u4e00\u70b9\ncommitlog_segment_size_in_mb: 32\ncommitlog_total_space_in_mb: -1\nforce_schema_commit_log: true\n\nbatch_size_warn_threshold_in_kb: 128\nbatch_size_fail_threshold_in_kb: 1024\n\n\n# PasswordAuthenticator - \u5b58\u50a8\u5728 system_auth.credentials\n# com.scylladb.auth.TransitionalAuthenticator - \u7528\u4e8e\u5347\u7ea7 auth\nauthenticator: AllowAllAuthenticator\n# CassandraAuthorizer - \u5b58\u50a8\u5728 system_auth.permissions\n# com.scylladb.auth.TransitionalAuthorizer\nauthorizer: AllowAllAuthorizer\npermissions_validity_in_ms: 10000\npermissions_update_interval_in_ms: 2000\n\n# initial_token: # \u4e00\u822c\u4e0d\u4f1a\u7528\u5230\n\n# experimental_features:\n#     - udf\n#     - alternator-streams\n#     - alternator-ttl\n#     - raft\n\npartitioner: org.apache.cassandra.dht.Murmur3Partitioner\nmurmur3_partitioner_ignore_msb_bits: 12\n\nphi_convict_threshold: 8\n\nincremental_backups: false\nsnapshot_before_compaction: false\nauto_snapshot: true\n# tombstone_warn_threshold: 1000\n# tombstone_failure_threshold: 100000\n\n# column_index_size_in_kb: 64\n# column_index_auto_scale_threshold_in_kb: 10240\n# compaction_large_partition_warning_threshold_mb: 1000\n# compaction_large_row_warning_threshold_mb: 10\n# compaction_large_cell_warning_threshold_mb: 1\n# compaction_rows_count_warning_threshold: 100000\n\n# range_request_timeout_in_ms: 10000\n# counter_write_request_timeout_in_ms: 5000\n# cas_contention_timeout_in_ms: 1000\n# truncate_request_timeout_in_ms: 60000\n# request_timeout_in_ms: 10000\n\n# server_encryption_options:\n# client_encryption_options:\n\n# internode_compression: none\n# inter_dc_tcp_nodelay: false\n\n# developer_mode: false\n\n# defragment_memory_on_idle: true\n\n# reversed_reads_auto_bypass_cache: false\n# enable_optimized_reversed_reads: true\n# enable_parallelized_aggregation: true\n\n# always, forbid, unsafe\nalternator_write_isolation: only_rmw_uses_lwt\n")))}h.isMDXComponent=!0}}]);