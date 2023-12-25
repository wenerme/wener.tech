/*! For license information please see 923c14de.f87da50c.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58956],{1565:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=r(11527),i=r(47214);const l={title:"ArgoCD \u7248\u672c",tags:["Version"]},a="ArgoCD \u7248\u672c",o={id:"devops/kubernetes/app/argocd/argocd-version",title:"ArgoCD \u7248\u672c",description:"- \u955c\u50cf argoproj/argocd:v1.8.4",source:"@site/../notes/devops/kubernetes/app/argocd/argocd-version.md",sourceDirName:"devops/kubernetes/app/argocd",slug:"/devops/kubernetes/app/argocd/version",permalink:"/notes/devops/kubernetes/app/argocd/version",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/argocd/argocd-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1699940620,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{title:"ArgoCD \u7248\u672c",tags:["Version"]},sidebar:"docs",previous:{title:"argocd-vault-plugin",permalink:"/notes/devops/kubernetes/app/argocd/vault-plugin"},next:{title:"cert-manager version",permalink:"/notes/devops/kubernetes/app/cert-manager-version"}},c={},d=[{value:"ArgoCD 2.9",id:"argocd-29",level:2},{value:"ArgoCD 2.8",id:"argocd-28",level:2},{value:"ArgoCD 2.7",id:"argocd-27",level:2},{value:"ArgoCD 2.6",id:"argocd-26",level:2},{value:"ArgoCD 2.5",id:"argocd-25",level:2},{value:"ArgoCD 2.4",id:"argocd-24",level:2},{value:"ArgoCD 2.3",id:"argocd-23",level:2},{value:"ArgoCD 2.2",id:"argocd-22",level:2},{value:"ArgoCD 2.1",id:"argocd-21",level:2},{value:"2.0",id:"20",level:2},{value:"1.8",id:"18",level:2}];function t(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"argocd-\u7248\u672c",children:"ArgoCD \u7248\u672c"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u955c\u50cf argoproj/argocd:v1.8.4\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53ef\u4ee5\u8003\u8651\u63d0\u524d\u62c9\u597d"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"2.0 \u955c\u50cf quay.io/argoproj/argocd"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u5b89\u88c5\u548c\u5347\u7ea7\u662f\u4e00\u6837\u7684 - \u4ed3\u5e93\u7684 stable tag \u603b\u662f\u6307\u5411\u6700\u65b0 stable \u7248\u672c\n# \u5347\u7ea7\u6ce8\u610f\u5904\u7406\u597d argocd-cm\n# \u666e\u901a\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n# HA\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/ha/install.yaml\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"version"}),(0,s.jsx)(e.th,{children:"date"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"#argocd-26",children:"ArgoCD 2.6"})}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"#argocd-25",children:"ArgoCD 2.5"})}),(0,s.jsx)(e.td,{children:"2022-10-25"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"#argocd-24",children:"ArgoCD 2.4"})}),(0,s.jsx)(e.td,{children:"2022-06-11"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"#argocd-23",children:"ArgoCD 2.3"})}),(0,s.jsx)(e.td,{children:"2022-03-06"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"#argocd-22",children:"ArgoCD 2.2"})}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"#argocd-21",children:"ArgoCD 2.1"})}),(0,s.jsx)(e.td,{})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"argocd-29",children:"ArgoCD 2.9"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://blog.argoproj.io/argo-cd-v2-9-release-candidate-a1e256d01017",children:"https://blog.argoproj.io/argo-cd-v2-9-release-candidate-a1e256d01017"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"argocd-28",children:"ArgoCD 2.8"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"create a one-off Job"}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://blog.argoproj.io/argo-cd-v2-8-release-candidate-be4443d974f",children:"https://blog.argoproj.io/argo-cd-v2-8-release-candidate-be4443d974f"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"argocd-27",children:"ArgoCD 2.7"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Proxy Extensions"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"argocd-26",children:"ArgoCD 2.6"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://argo-cd.readthedocs.io/en/latest/proposals/parameterized-config-management-plugins/",children:"Parameterized Config Management Plugins"})}),"\n",(0,s.jsxs)(e.li,{children:["managedNamespaceMetadata\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u521b\u5efa NS \u53ef\u6dfb\u52a0\u989d\u5916\u4fe1\u606f"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Multiple Sources for Applications"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  namespace: test\nspec:\n  # \u591a\u6e90 - Argo CD \u4f1a\u505a\u5408\u5e76\n  sources:\n    - chart: elasticsearch\n      repoURL: https://helm.elastic.co\n      targetRevision: 7.6.0\n    - repoURL: https://github.com/argoproj/argocd-example-apps.git\n      path: guestbook\n      targetRevision: HEAD\n  syncPolicy:\n    # \u521b\u5efa\u7684 NS \u4fe1\u606f\n    managedNamespaceMetadata:\n      labels:\n        any: label\n        you: like\n      annotations:\n        the: same\n        applies: for\n        annotations: on-the-namespace\n    syncOptions:\n      - CreateNamespace=true\n"})}),"\n",(0,s.jsx)(e.h2,{id:"argocd-25",children:"ArgoCD 2.5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Server-Side Apply ",(0,s.jsx)(e.strong,{children:"Beta"})]}),"\n",(0,s.jsx)(e.li,{children:"API/CLI for ApplicationSets"}),"\n",(0,s.jsx)(e.li,{children:"UI extension"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"argocd-24",children:"ArgoCD 2.4"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Web Terminal"}),"\n",(0,s.jsx)(e.li,{children:"Access Control For Pod Logs & Web Terminal"}),"\n",(0,s.jsx)(e.li,{children:"OpenTelemetry Tracing Integration"}),"\n",(0,s.jsx)(e.li,{children:"ApplicationSet \u652f\u6301 Gitea"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"argocd-23",children:"ArgoCD 2.3"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5185\u7f6e ApplicationSet & Notifications"}),"\n",(0,s.jsxs)(e.li,{children:["\u65b0\u589e RespectIgnoreDifferences\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u540c\u6b65\u65f6\u4e0d\u4f1a\u4fee\u6539\u5ffd\u7565\u5b57\u6bb5"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  #...\nspec:\n  #...\n  ignoreDifferences:\n    - group: 'apps'\n      kind: 'Deployment'\n      jsonPointers:\n        - /spec/replicas\n    - group: '*'\n      kind: '*'\n      # \u53ef\u4ee5\u901a\u8fc7 managedFieldsManagers \u544a\u8bc9 argocd \u9700\u8981\u5ffd\u7565\u7684\u5185\u5bb9\n      # \u7528\u4e8e\u7ec4\u4ef6/\u63d2\u4ef6\u96c6\u6210\n      managedFieldsManagers:\n        - rollouts-controller\n  syncPolicy:\n    syncOptions:\n      - RespectIgnoreDifferences=true\n"})}),"\n",(0,s.jsx)(e.h2,{id:"argocd-22",children:"ArgoCD 2.2"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4ed3\u5e93\u5173\u8054 Project - \u7ec6\u7c92\u5ea6\uff0c\u4e0d\u9700\u8981\u5168\u5c40"}),"\n",(0,s.jsxs)(e.li,{children:["Config Management Plugins V2\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://argo-cd.readthedocs.io/en/stable/user-guide/config-management-plugins/",children:"https://argo-cd.readthedocs.io/en/stable/user-guide/config-management-plugins/"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u652f\u6301\u4f7f\u7528 annotation argocd.argoproj.io/tracking-id \u8ddf\u8e2a\u8d44\u6e90\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e4b\u524d\u4f7f\u7528 label app.kubernetes.io/instance \u5bb9\u6613\u51b2\u7a81"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["argocd-cmp-server\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ArgoCD ConfigManagementPlugin Server"}),"\n",(0,s.jsx)(e.li,{children:"sidecar container in reposerver deployment"}),"\n",(0,s.jsxs)(e.li,{children:["\u63d0\u4f9b\u63d2\u4ef6\u7ba1\u7406\u80fd\u529b\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"apiVersion: argoproj.io/v1alpha1"}),"\n",(0,s.jsx)(e.li,{children:"kind: ConfigManagementPlugin"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Helm v3.7.1 - pass credentials, OCI"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u9650\u5b9a cluster,repository \u5230 project"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"apiVersion: v1\nkind: ConfigMap\ndata:\n  # \u9ed8\u8ba4 label - \u652f\u6301 annotation+label, annotation\n  application.resourceTrackingMethod: annotation\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: kube-stub-cluster-repo\n  labels:\n    argocd.argoproj.io/secret-type: repository\ntype: Opaque\nstringData:\n  # \u9650\u5b9a Project\n  project: my-project1\n  name: kube-stub-cluster\n  url: https://github.com/wenerme/kube-stub-cluster.git\n  username:\n  password:\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",metastring:'title="ConfigManagementPlugin"',children:"apiVersion: argoproj.io/v1alpha1\nkind: ConfigManagementPlugin\nmetadata:\n  name: cdk8s\nspec:\n  version: v1.0\n  init:\n    command: [cdk8s, init]\n  generate:\n    command: [sh, -c, 'cdk8s synth && cat dist/*.yaml']\n  discovery:\n    fileName: main.ts\n"})}),"\n",(0,s.jsx)(e.h2,{id:"argocd-21",children:"ArgoCD 2.1"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u62c6\u5206 Argo CD Core\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e0d\u96c6\u6210 RBAC \u548c\u6743\u9650"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u589e\u52a0 Repo \u7f13\u5b58\u786e\u4fdd\u4e00\u4e2a revision \u53ea\u8bf7\u6c42\u4e00\u6b21 git - \u63d0\u9ad8\u6027\u80fd\u548c\u901f\u5ea6"}),"\n",(0,s.jsxs)(e.li,{children:["argocd-cm \u652f\u6301\u5f15\u7528 secret \u8fdb\u884c\u914d\u7f6e\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://argoproj.github.io/argo-cd/operator-manual/argocd-cmd-params-cm.yaml",children:"argocd-cmd-params-cm.yaml"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u5bf9\u6bd4\u5ffd\u7565\u652f\u6301 jq \u8def\u5f84"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"# \u5355\u4e2a\u5e94\u7528\nspec:\n  ignoreDifferences:\n    - group: apps\n      kind: Deployment\n      jqPathExpressions:\n        - .spec.template.spec.initContainers[] | select(.name == \"injected-init-container\")\n# \u5168\u5c40\u914d\u7f6e\ndata:\n  resource.customizations.ignoreDifferences.admissionregistration.k8s.io_MutatingWebhookConfiguration: |\n    jqPathExpressions:\n    - '.webhooks[]?.clientConfig.caBundle'\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 Secret Repositor - \u4e0d\u518d\u9700\u8981\u4fee\u6539 argocd-cm"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  annotations:\n    managed-by: argocd.argoproj.io\n  labels:\n    argocd.argoproj.io/secret-type: repository\n  name: my-repo-secret\nstringData:\n  username: my-username\n  password: my-password\n  type: git\n  url: https://github.com/argoproj/argocd-example-apps\n"})}),"\n",(0,s.jsx)(e.h2,{id:"20",children:"2.0"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Pods View\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u65b0\u589e Pod \u89c6\u56fe - \u53ef\u67e5\u770b Pod \u5206\u5e03\u60c5\u51b5"}),"\n",(0,s.jsx)(e.li,{children:"Pod \u975e\u5e38\u591a\u7684\u65f6\u5019\u5f88\u6709\u7528"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Logs Viewer\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u5206\u9875\u3001\u8fc7\u6ee4\u3001Dark \u6a21\u5f0f"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u805a\u5408\u591a\u4e2a Pod \u65e5\u5fd7 - Deployment\u3001ReplicaSet\u3001STS"}),"\n",(0,s.jsxs)(e.li,{children:["\u547d\u4ee4\u884c ",(0,s.jsx)(e.code,{children:"rgocd app logs"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u65b0\u589e Banner\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ui.bannercontent"}),"\n",(0,s.jsx)(e.li,{children:"ui.bannerurl"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["PrunePropagationPolicy=background\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u540c\u6b65\u65f6\u540e\u53f0\u6e05\u9664\u81ea\u613f - \u73b0\u5728\u7684\u903b\u8f91\u53ef\u80fd\u5bfc\u81f4 delet \u5361\u6b7b"}),"\n",(0,s.jsx)(e.li,{children:"Foreground - k8s \u5fc5\u987b\u5220\u9664\u6240\u6709 child \u8d44\u6e90\u624d\u80fd\u5220\u9664\u8d44\u6e90\u672c\u8eab"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["finalizer resources-finalizer.argocd.argoproj.io:background\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5220\u9664\u5e94\u7528\u65f6\u540e\u53f0\u5904\u7406"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["ApplyOutOfSyncOnly=true\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53ea\u540c\u6b65\u4e0d\u540c\u6b65\u8d44\u6e90"}),"\n",(0,s.jsx)(e.li,{children:"\u9ed8\u8ba4\u662f kubectl apply \u6240\u6709 - \u6162"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["PruneLast=true\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5728\u540c\u6b65\u6700\u540e\u6e05\u9664\u8d44\u6e90"}),"\n",(0,s.jsx)(e.li,{children:"\u4f8b\u5982 \u6700\u540e\u5220\u9664\u914d\u7f6e\uff0c\u5148\u6e05\u7406 Pod \u7b49\u8d44\u6e90"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u72ec\u7acb\u8d44\u6e90\u914d\u7f6e - argocd.argoproj.io/sync-options"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5065\u5eb7\u68c0\u67e5\u652f\u6301\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"sealed-secrets - \u4e4b\u524d\u5982\u679c secret \u9519\u8bef\u65e0\u6cd5\u53d1\u73b0"}),"\n",(0,s.jsx)(e.li,{children:"kubernetes-external-secrets"}),"\n",(0,s.jsx)(e.li,{children:"strimzi"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/argoproj/argo-cd/releases/tag/v2.0.0",children:"v2.0.0"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"18",children:"1.8"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["mono-repository \u5904\u7406\u6548\u7387\u589e\u5f3a\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u76f8\u540c commit \u5e76\u884c\u5904\u7406 - \u4e4b\u524d\u662f\u6bcf\u4e2a\u90fd\u8981\u5904\u7406\u4e00\u904d"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"argocd.argoproj.io/manifest-generate-paths"})}),"\n",(0,s.jsxs)(e.li,{children:["argocd-application-controller \u7ec4\u4ef6\u652f\u6301\u6c34\u5e73\u6269\u5bb9\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u66f4\u597d\u7ba1\u7406\u591a\u96c6\u7fa4"}),"\n",(0,s.jsxs)(e.li,{children:["\u26a0\ufe0f depolyment -> statuefulset\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5347\u7ea7\u540e\u9700\u8981\u624b\u52a8\u5220\u9664 ",(0,s.jsx)(e.code,{children:"kubectl -n argocd delete deploy argocd-application-controller"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u5b50\u5e94\u7528\u5065\u5eb7\u72b6\u6001\u4e0d\u5f71\u54cd\u7236\u5e94\u7528"}),"\n",(0,s.jsx)(e.li,{children:"\u5168\u5c40 Project"}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://argoproj.github.io/argo-cd/operator-manual/upgrading/1.7-1.8/",children:"v1.7 to 1.8"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(t,{...n})}):t(n)}},3354:(n,e,r)=>{var s=r(50959),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,r){var s,l={},d=null,t=null;for(s in void 0!==r&&(d=""+r),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(t=e.ref),e)a.call(e,s)&&!c.hasOwnProperty(s)&&(l[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===l[s]&&(l[s]=e[s]);return{$$typeof:i,type:n,key:d,ref:t,props:l,_owner:o.current}}e.Fragment=l,e.jsx=d,e.jsxs=d},11527:(n,e,r)=>{n.exports=r(3354)},47214:(n,e,r)=>{r.d(e,{Z:()=>o,a:()=>a});var s=r(50959);const i={},l=s.createContext(i);function a(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);