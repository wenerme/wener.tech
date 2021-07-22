(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{1152:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||o;return t?r.a.createElement(d,s(s({ref:n},c),{},{components:t})):r.a.createElement(d,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},389:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),o=(t(0),t(1152)),l={title:"zalando/postgres-operator"},s={unversionedId:"devops/kubernetes/app/zalando-postgres-operator",id:"devops/kubernetes/app/zalando-postgres-operator",isDocsHomePage:!1,title:"zalando/postgres-operator",description:"- zalando/postgres-operator",source:"@site/notes/devops/kubernetes/app/zalando-postgres-operator.md",slug:"/devops/kubernetes/app/zalando-postgres-operator",permalink:"/notes/devops/kubernetes/app/zalando-postgres-operator",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/zalando-postgres-operator.md",version:"current",sidebar:"docs",previous:{title:"sealed-secrets",permalink:"/notes/devops/kubernetes/app/sealed-secrets"},next:{title:"K8S \u4f7f\u7528\u7ecf\u9a8c",permalink:"/notes/devops/kubernetes/k3s-story"}},i=[{value:"OperatorConfiguration",id:"operatorconfiguration",children:[]},{value:"PostgresTeam",id:"postgresteam",children:[]},{value:"postgresql",id:"postgresql",children:[]},{value:"S3 \u76f8\u5173\u73af\u5883\u53d8\u91cf",id:"s3-\u76f8\u5173\u73af\u5883\u53d8\u91cf",children:[]},{value:"WAL-E \u914d\u7f6e",id:"wal-e-\u914d\u7f6e",children:[]},{value:"\u4f7f\u7528 wal-e \u800c\u4e0d\u662f wal-g",id:"\u4f7f\u7528-wal-e-\u800c\u4e0d\u662f-wal-g",children:[]},{value:"\u903b\u8f91\u5907\u4efd\u6ce8\u610f\u4e8b\u9879",id:"\u903b\u8f91\u5907\u4efd\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"The request signature we calculated does not match the signature you provided. Check your key and signing method.",id:"the-request-signature-we-calculated-does-not-match-the-signature-you-provided-check-your-key-and-signing-method",children:[]},{value:"Server side encryption specified but KMS is not configured",id:"server-side-encryption-specified-but-kms-is-not-configured",children:[]},{value:"cannot perform switch over before re-creating the pod: no replicas",id:"cannot-perform-switch-over-before-re-creating-the-pod-no-replicas",children:[]},{value:"\u6e05\u7406\u5df2\u5220\u9664\u96c6\u7fa4",id:"\u6e05\u7406\u5df2\u5220\u9664\u96c6\u7fa4",children:[]},{value:"operator-ui backup \u9519\u8bef",id:"operator-ui-backup-\u9519\u8bef",children:[{value:"TypeError: expected string or bytes-like object",id:"typeerror-expected-string-or-bytes-like-object",children:[]},{value:"OSError: Errno 101 Network unreachable",id:"oserror-errno-101-network-unreachable",children:[]},{value:"No snapshots found",id:"no-snapshots-found",children:[]}]},{value:"pg_hba.conf rejects connection for host",id:"pg_hbaconf-rejects-connection-for-host",children:[]},{value:"\u5176\u4ed6\u95ee\u9898",id:"\u5176\u4ed6\u95ee\u9898",children:[]}],c={toc:i};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator"},"zalando/postgres-operator"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://postgres-operator.readthedocs.io/en/latest/"},"\u6587\u6863")))),Object(o.b)("li",{parentName:"ul"},"Operator \u53ef\u901a\u8fc7 ConfigMap \u6216 CRD \u914d\u7f6e - \u63a8\u8350 CRD \u914d\u7f6e",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"CRD \u8981\u6c42\u7c7b\u578b\u5339\u914d - Helm values \u9700\u8981\u8c03\u6574"),Object(o.b)("li",{parentName:"ul"},"ConfigMap \u503c\u5747\u4e3a\u5b57\u7b26\u4e32"))),Object(o.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7528\u6237\u4f1a\u521b\u5efa\u4e00\u4e2a secret \u5b58\u50a8\u8d26\u53f7\u5bc6\u7801",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{username}.{team}-{clustername}.credentials.postgresql.acid.zalan.do"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"username"),Object(o.b)("li",{parentName:"ul"},"password"))))),Object(o.b)("li",{parentName:"ul"},"CRD",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"OperatorConfiguration - CRD \u914d\u7f6e Operator"),Object(o.b)("li",{parentName:"ul"},"postgresql - \u5b9a\u4e49 PostgreSQL \u96c6\u7fa4"),Object(o.b)("li",{parentName:"ul"},"PostgresTeam - \u5b9a\u4e49\u56e2\u961f"))),Object(o.b)("li",{parentName:"ul"},"\u7279\u6027",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"WAL \u5907\u4efd"),Object(o.b)("li",{parentName:"ul"},"\u903b\u8f91\u5907\u4efd - SQL dump")))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"cluster-name \u5fc5\u987b\u5339\u914d {TEAM}-{NAME} \u683c\u5f0f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5373 postgresql crd \u7684\u540d\u5b57"))),Object(o.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u540d\u5b57\u9650\u5236\u548c PG \u4e0d\u540c - \u5fc5\u987b ",Object(o.b)("inlineCode",{parentName:"li"},"^[a-zA-Z_][a-zA-Z0-9_]*$"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u540d\u5b57\u4e0d\u53ef\u4ee5\u5305\u542b ",Object(o.b)("inlineCode",{parentName:"li"},"-")," - \u9700\u8981 quote"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator/issues/667"},"#667")))),Object(o.b)("li",{parentName:"ul"},"\u7528\u6237\u540d\u4e0d\u8981\u5305\u542b ",Object(o.b)("inlineCode",{parentName:"li"},"_")," - \u56e0\u4e3a\u751f\u6210 secret \u4e0d\u652f\u6301\u540d\u5b57\u5305\u542b ",Object(o.b)("inlineCode",{parentName:"li"},"_"))))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u5907\u4efd\u6ce8\u610f\u4e8b\u9879")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"S3 bukect \u662f\u5168\u5c40\u7684\uff0c\u4e0d\u652f\u6301\u6bcf\u4e2a\u96c6\u7fa4\u72ec\u7acb\u914d\u7f6e"),Object(o.b)("li",{parentName:"ul"},"pod_environment_secret \u76ee\u524d\u53ea\u6302\u8f7d\u5728\u4e86 operator \u4e0a",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u903b\u8f91\u5907\u4efd\u65e0\u6cd5\u4f7f\u7528\u8be5\u914d\u7f6e"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator/issues/1348"},"#1348")))),Object(o.b)("li",{parentName:"ul"},"\u975e AWS S3 \u53ea\u80fd\u4f7f\u7528 WAL-G - \u56e0\u4e3a WAL-E \u5f00\u542f\u4e86 SSE",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4f8b\u5982 Minio")))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# {team}-{name}\nCLUSTER_NAME=acid-minimal-cluster\n# Master Host\nPGMASTER=$(kubectl get pods -o jsonpath={.items..metadata.name} -l application=spilo,cluster-name=${CLUSTER_NAME},spilo-role=master)\n# \u7aef\u53e3\u8f6c\u53d1\nkubectl port-forward $PGMASTER 6432:5432\n\n# \u83b7\u53d6\u5bc6\u7801\u8fde\u63a5\u6570\u636e\u5e93\nexport PGUSER=postgres\nexport PGPASSWORD=$(kubectl get secret ${PGUSER}.${CLUSTER_NAME}.credentials.postgresql.acid.zalan.do -o 'jsonpath={.data.password}' | base64 -d)\nexport PGSSLMODE=require\npsql -h localhost -p 6432\n\n\n# \u8f6c\u53d1 operator-ui\nkubectl port-forward -n postgres-operator svc/postgres-operator-ui 8080:80\n")),Object(o.b)("h2",{id:"operatorconfiguration"},"OperatorConfiguration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"kind: OperatorConfiguration\napiVersion: acid.zalan.do/v1\nconfiguration:\n  # \u901a\u7528\u914d\u7f6e\n  enable_crd_validation: true\n  enable_lazy_spilo_upgrade: false\n  enable_pgversion_env_var: true\n  enable_spilo_wal_path_compat: false\n  # \u9ed8\u8ba4\u4f7f\u7528 DCS\n  etcd_host:\n  kubernetes_use_configmaps: false\n  docker_image:\n  sidecars: []\n  enable_shm_volume: true\n  # operator create/update/delete/sync\n  workers: 8\n  max_instances: -1\n  min_instances: -1\n  resync_period: 30m\n  repair_period: 5m\n  set_memory_request_to_limit: false\n\n  # Postgres \u7528\u6237\u914d\u7f6e\n  users:\n    super_username: postgres\n    replication_username: stanby\n  load_balancer:\n  # AWS \u548c GCP \u914d\u7f6e\n  aws_or_gcp:\n    wal_s3_bucket:\n    log_s3_bucket:\n\n    aws_region: eu-central-1\n    additional_secret_mount:\n    additional_secret_mount_path:\n\n    wal_gs_bucket:\n    gcp_credentials:\n\n    # \u5b9e\u9645\u4f7f\u7528 AWS S3 \u5173\u5fc3\u7684\u914d\u7f6e\n    enable_ebs_gp3_migration: false\n    enable_ebs_gp3_migration_max_size: 1000\n    # AWS IAM role - https://github.com/jtblin/kube2iam\n    # Pod annotation iam.amazonaws.com/role\n    kube_iam_role:\n  # \u903b\u8f91\u526f\u672c\n  logical_backup:\n    logical_backup_docker_image: registry.opensource.zalan.do/acid/logical-backup\n    logical_backup_job_prefix: logical-backup-\n    logical_backup_provider: s3\n    logical_backup_s3_bucket:\n    logical_backup_s3_endpoint:\n    logical_backup_s3_region:\n    # AWS_ACCESS_KEY_ID\n    logical_backup_s3_access_key_id:\n    # AWS_SECRET_ACCESS_KEY\n    logical_backup_s3_secret_access_key:\n    logical_backup_schedule: \"30 00 * * *\"\n\n    logical_backup_google_application_credentials:\n  # Operator \u8c03\u8bd5\u914d\u7f6e\n  debug:\n    debug_logging: true\n    enable_database_access: true\n  # \u65e5\u5fd7\u63a5\u53e3\n  logging_rest_api:\n    api_port: 8080\n    ring_log_lines: 100\n    cluster_history_entries: 1000\n  # Team API \u53ef\u7528\u4e8e\u670d\u52a1\u96c6\u6210\n  teams_api:\n    enable_teams_api: true\n    # https://github.com/mkabilov/fake-teams-api\n    teams_api_url:\n    team_api_role_configuration: log_statement:all\n    enable_team_superuser: false\n    team_admin_role: admin\n    enable_admin_role_for_users: true\n    pam_role_name: zalandos\n    # https://github.com/CyberDem0n/pam-oauth2\n    pam_configuration:\n    protected_role_names: admin\n    postgres_superuser_teams:\n    # \u76d1\u542c PostgresTeam CRD\n    enable_postgres_team_crd: false\n    enable_postgres_team_crd_superusers: false\n  # \u8d1f\u8f7d\u5747\u8861\u914d\u7f6e\n  load_balancer:\n    custom_service_annotations: {}\n    # DNS Zone\n    # \u4f7f\u7528 https://github.com/kubernetes-sigs/external-dns\n    db_hosted_zone: db.example.com\n    enable_master_load_balancer: true\n    enable_replica_load_balancer: false\n    # Cluster, Local\n    external_traffic_policy: Cluster\n    master_dns_name_format: \"{cluster}.{team}.{hostedzone}\"\n    replica_dns_name_format: \"{cluster}-repl.{team}.{hostedzone}\"\n  # \u8d85\u65f6\u76f8\u5173\u914d\u7f6e\n  timeouts:\n  # \u94fe\u63a5\u6c60\u914d\u7f6e\n  connection_pooler:\n    connection_pooler_number_of_instances: 2\n    connection_pooler_schema: pooler\n    connection_pooler_user: pooler\n    connection_pooler_image: registry.opensource.zalan.do/acid/pgbouncer\n    connection_pooler_max_db_connections: 60\n    connection_pooler_mode: transaction\n    connection_pooler_default_cpu_request: 500m\n    connection_pooler_default_memory_reques: 100Mi\n    connection_pooler_default_cpu_limit: 1\n    connection_pooler_default_memory_limit: 100Mi\n  # Kubernetes \u8d44\u6e90\u914d\u7f6e\n  kubernetes:\n    # \u521b\u5efa\u57fa\u7840\u8bbe\u65bd\u8d26\u53f7\u4fe1\u606f - \u81ea\u5b9a\u4e49\u5bc6\u7801\u548c\u7528\u6237\u89d2\u8272 - \u9ed8\u8ba4\u5bc6\u7801\u662f\u751f\u6210\u7684\n    infrastructure_roles_secrets:\n      - secretname: 'postgresql-infrastructure-roles'\n        userkey: 'user1'\n        passwordkey: 'password1'\n        rolekey: 'inrole1'\n    # pod_environment_configmap: \"postgres-operator-system/pod-env-overrides\"\n    pod_environment_configmap:\n    # \u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf secret - \u7528\u4e8e\u643a\u5e26 s3 \u5bc6\u94a5\u4fe1\u606f\n    pod_environment_secret:\n\n  # \u8d44\u6e90\u914d\u7f6e\n  postgres_pod_resources:\n    default_cpu_request: 100m\n    default_memory_request: 100Mi\n    default_cpu_limit: 1\n    default_memory_limit: 500Mi\n    min_cpu_limit: 250m\n    min_memory_limit: 250Mi\n")),Object(o.b)("h2",{id:"postgresteam"},"PostgresTeam"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Team \u7531\u4e8e\u51cf\u5c11 cluster-name \u51b2\u7a81\uff0c\u5212\u5206\u56e2\u961f\uff0c\u8bbe\u7f6e\u9ed8\u8ba4\u89d2\u8272\u8d26\u53f7")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: "acid.zalan.do/v1"\nkind: PostgresTeam\nmetadata:\n  name: custom-team-membership\nspec:\n  # \u9644\u52a0\u56e2\u961f\n  additionalTeams:\n    # a \u4f5c\u4e3a b \u7684\u9644\u52a0\u56e2\u961f\n    # \u6548\u679c\u7b49\u540c\u4e8e\u5c06 a \u91cd\u547d\u540d\u4e3a b - \u91cd\u547d\u540d\u901a\u8fc7 \u8be5\u529f\u80fd\u5b9e\u73b0 - teamdID \u5728 postgresql \u5185\u4e0d\u53ef\u53d8\n    a-team:\n    - "b-team"\n    # \u53ef\u4e92\u76f8\u4e3a\u9644\u52a0\u56e2\u961f\n    b-team:\n    - "a-team"\n\n    # \u865a\u62df\u56e2\u961f\u53ef\u7528\u4e8e\u6253\u5305\u56e2\u961f\n    virtual-team:\n    - "c-team"\n    - "d-team"\n    a-team:\n    - "virtual-team"\n    b-team:\n    - "virtual-team"\n  # \u9644\u52a0\u6210\u5458\n  additionalMembers:\n    # \u5728\u6240\u6709 a \u56e2\u961f\u7684\u96c6\u7fa4\u4e2d\u521b\u5efa tia \u53ef\u767b\u9646\u8d26\u6237\n    a-team:\n    - "tia"\n    virtual-team:\n    - "flynch"\n    - "rdecker"\n')),Object(o.b)("h2",{id:"postgresql"},"postgresql"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator/blob/master/manifests/minimal-postgres-manifest.yaml"},"manifests/minimal-postgres-manifest.yaml"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'kind: \'postgresql\'\napiVersion: \'acid.zalan.do/v1\'\n\nmetadata:\n  name: \'acid-demo\'\n  namespace: \'default\'\n  labels:\n    team: acid\n  # \u5b9e\u4f8b\u5bf9\u5e94 ID - \u4f1a\u7528\u4e8e\u5907\u4efd\u548c\u514b\u9686\n  uid: efd12e58-5786-11e8-b5a7-06148230260c\nspec:\n  # \u6240\u5c5e\u56e2\u961f - \u521b\u5efa\u540e\u4e0d\u53ef\u53d8\n  teamId: \'acid\'\n  postgresql:\n    version: \'13\'\n    # \u5176\u4ed6\u53c2\u6570\n    parameters: {}\n  # \u53d7 operator \u7684 max_instances min_instances \u53c2\u6570\u5f71\u54cd\n  numberOfInstances: 1\n  volume:\n    # \u652f\u6301\u589e\u52a0 - \u4e0d\u652f\u6301\u51cf\u5c11\n    size: \'10Gi\'\n  # \u7528\u6237\u5217\u8868\n  users:\n    # \u652f\u6301 flags\n    # SUPERUSER, REPLICATION, INHERIT, LOGIN, NOLOGIN, CREATEROLE, CREATEDB, BYPASSURL\n    # \u9ed8\u8ba4 LOGIN\n    demo: []\n  # \u6570\u636e\u5e93\u5217\u8868 - \u4e0d\u4f1a\u521b\u5efa\u5173\u8054\u89d2\u8272\n  databases:\n    # \u6570\u636e\u5e93: owner\n    demo: demo\n  allowedSourceRanges:\n    # IP ranges to access your cluster go here\n\n  # \u6700\u5c0f 200m 250Mi\n  resources:\n    requests:\n      cpu: 100m\n      memory: 100Mi\n    limits:\n      cpu: 500m\n      memory: 500Mi\n  # \u63a7\u5236\u8c03\u5ea6\n  tolerations:\n  - key: postgres\n    operator: Exists\n    effect: NoSchedule\n\n  nodeAffinity:\n    requiredDuringSchedulingIgnoredDuringExecution:\n      nodeSelectorTerms:\n      - matchExpressions:\n        - key: environment\n          operator: In\n          values:\n          - pci\n  podPriorityClassName:\n  podAnnotations:\n  serviceAnnotations:\n  # \u9ed8\u8ba4\u5f00\u542f\n  enableShmVolume: true\n  additionalVolumes: [ ]\n\n  # \u51c6\u5907\u6570\u636e\u5e93\u548c schema - \u4f1a\u521b\u5efa\u5bf9\u5e94\u7684\u89d2\u8272\u548c\u7528\u6237\n  preparedDatabases:\n    # \u521b\u5efa foo_{owner,reader,writer} \u89d2\u8272\n    # \u521b\u5efa foo_{owner,reader,writer}_user \u7528\u6237\n    foo:\n      # \u662f\u5426\u521b\u5efa\u9ed8\u8ba4\u7528\u6237\n      defaultUsers: true\n      schemas:\n        # \u521b\u5efa foo_bar_{owner,reader,writer} \u89d2\u8272\n        # \u521b\u5efa foo_bar_{owner,reader,writer}_user \u7528\u6237\n        bar:\n          # \u53ef\u6307\u5b9a\u4e0d\u521b\u5efa\u9ed8\u8ba4\u89d2\u8272\n          defaultRoles: false\n          defaultUsers: true\n        # public \u4e0b\u4e0d\u521b\u5efa\u9ed8\u8ba4\u89d2\u8272 - \u8ba9 search_path \u5305\u542b public\n        public:\n          defaultRoles: false\n      # \u6269\u5c55\u914d\u7f6e\n      # https://github.com/dimitri/pgextwlist\n      # SHOW extwlist.extensions;\n      # btree_gin,btree_gist,citext,hstore,intarray,ltree,pgcrypto,pgq,pg_trgm,postgres_fdw,tablefunc,uuid-ossp,hypopg,timescaledb,pg_partman\n      extensions:\n        pg_partman: public\n        postgis: data\n  # \u4ece S3 \u514b\u9686\n  clone:\n    uid: "efd12e58-5786-11e8-b5a7-06148230260c"\n    cluster: "acid-batman"\n    timestamp: "2017-12-19T12:40:33+01:00"\n    s3_endpoint: https://s3.acme.org\n    s3_access_key_id: 0123456789abcdef0123456789abcdef\n    s3_secret_access_key: 0123456789abcdef0123456789abcdef\n    s3_force_path_style: true\n    # \u76f4\u63a5\u514b\u9686 - pg_basebackup \u751f\u6210\u5907\u4efd\n    # \u76f8\u540c namespace\n    cluster: "acid-batman"\n\n  # \u70ed\u5907\u96c6\u7fa4 - \u4f5c\u4e3a\u53e6\u5916\u4e00\u4e2a\u96c6\u7fa4\u7684 standby\n  # \u5efa\u8bae\u96c6\u7fa4\u4e3a\u5355 Pod numberOfInstances: 1, \u56e0\u4e3a\u76ee\u524d\u53ea\u6709 master \u4ece S3 \u63a5\u53d7 WAL\n  # https://github.com/zalando/postgres-operator/blob/master/manifests/standby-manifest.yaml\n  standby:\n    # \u901a\u8fc7 S3 WAL \u73b0\u6210\u70ed\u5907\u5173\u7cfb\n    s3_wal_path: "s3://path/to/bucket/containing/wal/of/source/cluster/"\n  # \u63d0\u5347 standby \u4e3a\u4f7f\u7528\u96c6\u7fa4\n  # \u5728\u5bb9\u5668\u5185\u64cd\u4f5c patronictl edit-config\n  # \u5220\u9664\u4e0b\u5217\u914d\u7f6e\n  # \u5b8c\u6210\u540e\u5220\u9664\u4e0a\u8ff0 standby \u914d\u7f6e\n  # \u6b63\u5e38\u96c6\u7fa4\u8f6c standby \u53ef\u5728\u5bb9\u5668\u5185\u6dfb\u52a0\u914d\u7f6e\n  standby_cluster:\n    create_replica_methods:\n      - bootstrap_standby_with_wale\n      - basebackup_fast_xlog\n    restore_command: envdir "/home/postgres/etc/wal-e.d/env-standby" /scripts/restore_command.sh\n      "%f" "%p"\n\n  # Sidebar\n  # enable_sidecars\n  sidecars:\n    - name: "container-name"\n      image: "company/image:tag"\n      resources:\n        limits:\n          cpu: 500m\n          memory: 500Mi\n        requests:\n          cpu: 100m\n          memory: 100Mi\n      # POD_NAME\n      # POD_NAMESPACE\n      # POSTGRES_USER\n      # POSTGRES_PASSWORD\n      # PG \u6570\u636e\u76ee\u5f55 /home/postgres/pgdata\n      env:\n        - name: "ENV_VAR_NAME"\n          value: "any-k8s-env-things"\n  # \u521d\u59cb\u5316\u5bb9\u5668\n  # enable_init_containers\n  initContainers:\n    - name: "container-name"\n      image: "company/image:tag"\n      env:\n        - name: "ENV_VAR_NAME"\n          value: "any-k8s-env-things"\n\n  enableMasterLoadBalancer: false\n  enableReplicaLoadBalancer: false\n  # \u5141\u8bb8\u8bbf\u95ee LB \u7684\u5730\u5740\u8303\u56f4\n  allowedSourceRanges:\n\n  # \u5f00\u542f\u903b\u8f91\u5907\u4efd\n  # \u901a\u8fc7\u521b\u5efa k8s cronjob \u8fdb\u884c\u5907\u4efd\n  # \u53ef\u80fd\u5931\u8d25\uff0c\u6ce8\u610f\u76d1\u63a7 - \u53d7 cronjob \u9650\u5236 https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations\n  enableLogicalBackup: true\n  logicalBackupSchedule: "30 00 * * *"\n  # \u94fe\u63a5\u6c60 - pgbouncer\n  # Service {cluster-name}-pooler\n  enableConnectionPooler: true\n  # \u526f\u672c\u94fe\u63a5\u6c60\n  enableReplicaConnectionPooler: true\n\n  # \u94fe\u63a5\u6c60\u914d\u7f6e\n  # \u5982\u679c\u914d\u7f6e\u4e86\u8be5\u53c2\u6570\u5219\u9ed8\u8ba4 enableConnectionPooler=true\n  connectionPooler:\n    numberOfInstances: 2\n    # session, transaction\n    mode: "transaction"\n    # \u521b\u5efa\u51fd\u6570\u548c\u7528\u6237\u7684 schema\n    schema: "pooler"\n    # \u7528\u6237\n    user: "pooler"\n    resources:\n      requests:\n        cpu: 500m\n        memory: 100Mi\n      limits:\n        # \u5efa\u8bae limit \u4e3a 1 \u5373\u53ef\n        cpu: "1"\n        memory: 100Mi\n  # \u81ea\u5b9a\u4e49 TLS \u914d\u7f6e\n  # \u53ef\u901a\u8fc7 cert-manager \u751f\u6210\n  tls:\n    secretName: "pg-tls"    # this should hold tls.key and tls.crt\n    caSecretName: "pg-tls-ca" # this should hold ca.crt\n    caFile: "ca.crt" # add this if the secret is configured with a CA\n\n  dockerImage:\n  schedulerName: default-scheduler\n  spiloRunAsUser: root\n  spiloRunAsGroup: root\n  # \u5982\u679c\u975e root \u8fd0\u884c - \u9700\u8981\u81ea\u5b9a\u4e49 image\n  # spiloFSGroup:\n\n  # Patroni \u76f8\u5173\u914d\u7f6e\n  # https://patroni.readthedocs.io/en/latest/SETTINGS.html\n  patroni:\n')),Object(o.b)("h1",{id:"faq"},"FAQ"),Object(o.b)("h2",{id:"s3-\u76f8\u5173\u73af\u5883\u53d8\u91cf"},"S3 \u76f8\u5173\u73af\u5883\u53d8\u91cf"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"WAL_BUCKET_SCOPE_SUFFIX",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/{uid}")))),Object(o.b)("li",{parentName:"ul"},"LOG_BUCKET_SCOPE_SUFFIX",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/{uid}")))),Object(o.b)("li",{parentName:"ul"},"WAL_BUCKET_SCOPE_PREFIX"),Object(o.b)("li",{parentName:"ul"},"LOG_BUCKET_SCOPE_PREFIX")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: pod-var-custom\ndata:\n  BACKUP_NUM_TO_RETAIN: '5'\n  BACKUP_SCHEDULE: '00 01 * * *'\n  AWS_ACCESS_KEY_ID: '****'\n  AWS_SECRET_ACCESS_KEY: '****'\n  # AWS_ENDPOINT: \"s3.eu-west-1.amazonaws.com\"\n  AWS_REGION: 'eu-west-1'\n  WAL_S3_BUCKET: 'somebucket'\n\n  USE_WALG_BACKUP: 'false'\n  USE_WALG_RESTORE: 'false'\n  WALG_DOWNLOAD_CONCURRENCY: '1'\n  WALG_DISABLE_S3_SSE: 'true'\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"$HOME/pgdata/pgroot/pg_log/postgres-?.log")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'archive_command:  `envdir "{WALE_ENV_DIR}" {WALE_BINARY} wal-push "%p"`\nrestore_command:  `envdir "{{WALE_ENV_DIR}}" /scripts/restore_command.sh "%f" "%p"`\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'# \u624b\u52a8\u89e6\u53d1\n# \u5982\u679c\u51fa\u73b0 root \u4e0d\u5b58\u5728\n# export PGUSER=postgres\nenvdir "/run/etc/wal-e.d/env" /scripts/postgres_backup.sh "/home/postgres/pgdata/pgroot/data"\n# \u67e5\u770b wal-e \u53d8\u91cf\ngrep . /run/etc/wal-e.d/env/*\n# \u903b\u8f91\u5907\u4efd\ngrep . /run/etc/log.d/env/*\n\ntail -f -n 100 /home/postgres/pgdata/pgroot/pg_log/postgresql-?.log\n\n# \u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u6b63\u786e\n# \u5982\u679c hang \u4f4f \u53ef\u80fd\u662f\u56e0\u4e3a\u57df\u540d\u6216 endpoint \u9519\u8bef\n# minio \u5982\u679c\u6ca1\u914d\u7f6e\u5b50\u57df\u540d\uff0c\u9700\u8981\u8bbe\u7f6e AWS_S3_FORCE_PATH_STYLE=true\nenvdir /run/etc/wal-e.d/env wal-g backup-list --detail\n')),Object(o.b)("h2",{id:"wal-e-\u914d\u7f6e"},"WAL-E \u914d\u7f6e"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u914d\u7f6e\u73af\u5883\u53d8\u91cf\nAWS_ENDPOINT='https://s3.eu-central-1.amazonaws.com:443'\nWALE_S3_ENDPOINT='https+path://s3.eu-central-1.amazonaws.com:443'\n# \u672a\u8bbe\u7f6e prefix \u5219\u901a\u8fc7 WAL_S3_BUCKET \u751f\u6210\n# SCOPE \u4e3a cluster \u540d\u5b57\nWALE_S3_PREFIX=$WAL_S3_BUCKET/spilo/{WAL_BUCKET_SCOPE_PREFIX}{SCOPE}{WAL_BUCKET_SCOPE_SUFFIX}/wal/{PGVERSION}\n")),Object(o.b)("h2",{id:"\u4f7f\u7528-wal-e-\u800c\u4e0d\u662f-wal-g"},"\u4f7f\u7528 wal-e \u800c\u4e0d\u662f wal-g"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: pod-env-overrides\n  namespace: postgres-operator-system\ndata:\n  # \u73af\u5883\u53d8\u91cf\u63a7\u5236\n  USE_WALG_BACKUP: 'true'\n  USE_WALG_RESTORE: 'true'\n  CLONE_USE_WALG_RESTORE: 'true'\n  # minio \u9700\u8981\n  AWS_S3_FORCE_PATH_STYLE: 'true'\n")),Object(o.b)("h2",{id:"\u903b\u8f91\u5907\u4efd\u6ce8\u610f\u4e8b\u9879"},"\u903b\u8f91\u5907\u4efd\u6ce8\u610f\u4e8b\u9879"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u4ece\u903b\u8f91\u5907\u4efd\u6062\u590d - \u4e0d\u80fd\u4f5c\u4e3a point-in-time recovery"),Object(o.b)("li",{parentName:"ul"},"\u53ea\u662f\u5f53\u4f5c\u6570\u636e\u5feb\u7167"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator/tree/master/docker/logical-backup/Dockerfile"},"\u955c\u50cf"),"\u5185\u5305\u542b pg_dumpall \u5de5\u5177 - dump \u540e\u538b\u7f29\u4e0a\u4f20 s3"),Object(o.b)("li",{parentName:"ul"},"\u4f9d\u8d56 cronjob - \u4e0d\u592a\u7a33\u5b9a"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u4e0d\u4f1a\u5220\u9664\u65e7\u7684\u5907\u4efd")),Object(o.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u955c\u50cf\u8981\u5904\u7406\u597d\u91cd\u542f\u548c\u5e76\u53d1\u8bf7\u6c42 - ",Object(o.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/job/#handling-pod-and-container-failures"},"Handling Pod and container failures")),Object(o.b)("li",{parentName:"ul"},"RBAC \u6dfb\u52a0 batch \u63a5\u53e3 cronjobs \u8d44\u6e90",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator/blob/master/manifests/operator-service-account-rbac.yaml"},"operator-service-account-rbac"))))),Object(o.b)("h2",{id:"the-request-signature-we-calculated-does-not-match-the-signature-you-provided-check-your-key-and-signing-method"},"The request signature we calculated does not match the signature you provided. Check your key and signing method."),Object(o.b)("p",null,"\u540c\u6b65\u5230 S3 \u5f02\u5e38\u3002\u53ef\u80fd\u662f access_key \u9519\u8bef\u3002"),Object(o.b)("h2",{id:"server-side-encryption-specified-but-kms-is-not-configured"},"Server side encryption specified but KMS is not configured"),Object(o.b)("p",null,"\u540c\u6b65\u5230 S3 \u5f02\u5e38\u3002\u53d6\u6d88\u53c2\u6570 logical_backup_s3_sse"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"wal-e \u9ed8\u8ba4\u5f00\u542f sse",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u5173\u95ed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/wal-e/wal-e/issues/404"},"wal-e/wal-e#404")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/wal-e/wal-e/pull/410"},"wal-e/wal-e#410"))))),Object(o.b)("h2",{id:"cannot-perform-switch-over-before-re-creating-the-pod-no-replicas"},"cannot perform switch over before re-creating the pod: no replicas"),Object(o.b)("p",null,"\u53ef\u80fd\u7531\u4e8e secret \u51b2\u7a81\u6216\u8005\u4e0d\u540c\u6b65\u5bfc\u81f4\u5f02\u5e38"),Object(o.b)("h2",{id:"\u6e05\u7406\u5df2\u5220\u9664\u96c6\u7fa4"},"\u6e05\u7406\u5df2\u5220\u9664\u96c6\u7fa4"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"operator \u53ef\u80fd\u4f1a\u5220\u9664 sts\uff0c\u53ef\u80fd\u6709\u8d44\u6e90\u4e0d\u4f1a\u88ab\u5220\u9664\u3002",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u53d6\u51b3\u4e8e\u5220\u9664\u96c6\u7fa4\u65f6\u7684\u72b6\u6001\u3002")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"CLUSTER_NAME=acid-demo\n\nkubectl delete secret -l cluster-name=$CLUSTER_NAME\nkubectl delete pdb -l cluster-name=$CLUSTER_NAME\nkubectl delete svc -l cluster-name=$CLUSTER_NAME\nkubectl delete ep -l cluster-name=$CLUSTER_NAME\nkubectl delete pvc -l cluster-name=$CLUSTER_NAME\n")),Object(o.b)("h2",{id:"operator-ui-backup-\u9519\u8bef"},"operator-ui backup \u9519\u8bef"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator/blob/master/ui/operator_ui/main.py#L73"},"ui/operator_ui/main.py#L73"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u7684\u914d\u7f6e\u53c2\u6570"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator/issues/937"},"#937")),Object(o.b)("li",{parentName:"ul"},"operator ui helm \u4e0d\u652f\u6301\u81ea\u5b9a\u4e49 env - \u6bd4\u8f83\u9ebb\u70e6")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'# Minio \u73af\u5883\u53d8\u91cf\u914d\u7f6e\n- name: "TARGET_NAMESPACE"\n  value: "*"\n- name: "AWS_ENDPOINT"\n  value: "http://minio-service:9000"\n- name: "AWS_ACCESS_KEY_ID"\n  value: "access"\n- name: "AWS_SECRET_ACCESS_KEY"\n  value: "secret"\n- name: "SPILO_S3_BACKUP_BUCKET"\n  value: "bucket-name"\n- name: "SPILO_S3_BACKUP_PREFIX"\n  value: "spilo/"\n- name: "WALE_S3_ENDPOINT"\n  value: "http+path://minio-service:9000\n')),Object(o.b)("h3",{id:"typeerror-expected-string-or-bytes-like-object"},"TypeError: expected string or bytes-like object"),Object(o.b)("p",null,"\u53ef\u80fd\u662f\u56e0\u4e3a operator-ui \u6ca1\u6709\u914d\u7f6e S3 \u76f8\u5173\u73af\u5883\u53d8\u91cf\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-log"},'operator_ui.main ERROR    Exception on /stored_clusters [GET]\n          File "/usr/lib/python3.8/site-packages/botocore/handlers.py", line 205, in validate_bucket_name\n            if not VALID_BUCKET.search(bucket) and not VALID_S3_ARN.search(bucket):\n        TypeError: expected string or bytes-like object\n')),Object(o.b)("h3",{id:"oserror-errno-101-network-unreachable"},"OSError: ","[Errno 101]"," Network unreachable"),Object(o.b)("p",null,"\u5e94\u8be5\u662f S3 \u5730\u5740\u914d\u7f6e\u9519\u8bef\u3002\u540c\u65f6\u914d\u7f6e AWS_ENDPOINT \u548c WALE_S3_ENDPOINT"),Object(o.b)("p",null,"\u6ce8\u610f WALE_S3_ENDPOINT schema \u662f https+path"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"WALE_S3_ENDPOINT=https+path://minio.example.com:443\n")),Object(o.b)("h3",{id:"no-snapshots-found"},"No snapshots found"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u76ee\u524d\u65e0\u89e3\uff0c\u9700\u8981\u4fee\u6539\u6e90\u7801"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator/issues/1365"},"#1365"))),Object(o.b)("h1",{id:"\u5bb9\u5668\u5185\u5bb9"},"\u5bb9\u5668\u5185\u5bb9"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"/home/postgres/",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"pgdata/",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"pgroot/",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"data/",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"pg_hba.conf")))))))))),Object(o.b)("h2",{id:"pg_hbaconf-rejects-connection-for-host"},"pg_hba.conf rejects connection for host"),Object(o.b)("h2",{id:"\u5176\u4ed6\u95ee\u9898"},"\u5176\u4ed6\u95ee\u9898"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5f02\u5e38 resync \u91cd\u542f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u65e5\u5fd7\u67e5\u770b resync \u539f\u56e0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator/issues/927"},"#927"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"resync_period \u95f4\u9694\u91cd\u542f"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator/issues/1397"},"#1397")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator/issues/1377"},"#1377")," Rolling restart/update at every sync cycle since v1.6.1",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"v1.6.1 \u6709\u95ee\u9898 - \u5df2 fix ",Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator/pull/1380"},"#1380")),Object(o.b)("li",{parentName:"ul"},"\u4fee\u590d ",Object(o.b)("inlineCode",{parentName:"li"},"configKubernetes.additional_pod_capabilities=SYS_NICE")),Object(o.b)("li",{parentName:"ul"},"\u7a7a capabilities \u4f1a\u6dfb\u52a0 SYS_NICE\uff0c\u5bfc\u81f4\u6bcf\u6b21\u540c\u6b65 security context \u90fd\u4e0d\u4e00\u81f4"))))),Object(o.b)("li",{parentName:"ul"},"pod_environment_secret \u76ee\u524d\u53ea\u6302\u8f7d\u5728\u4e86 operator \u4e0a",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u903b\u8f91\u5907\u4efd\u65e0\u6cd5\u4f7f\u7528\u8be5\u914d\u7f6e - cronjob, backup \u955c\u50cf"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator/issues/1348"},"#1348")),Object(o.b)("li",{parentName:"ul"},"\u5728\u95ee\u9898\u4fee\u590d\u4e4b\u524d\u53ea\u80fd\u4f7f\u7528 pod_environment_configmap")))))}p.isMDXComponent=!0}}]);