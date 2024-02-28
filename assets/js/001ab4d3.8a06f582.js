/*! For license information please see 001ab4d3.8a06f582.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47752],{9036:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>_,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=r(2488),t=r(62780);const i={tags:["FAQ"]},o="CI FAQ",c={id:"service/forge/ci-faq",title:"CI FAQ",description:"env",source:"@site/../notes/service/forge/ci-faq.md",sourceDirName:"service/forge",slug:"/service/forge/ci-faq",permalink:"/notes/service/forge/ci-faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/ci-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1709090151,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"athens",permalink:"/notes/service/forge/athens"},next:{title:"Coding",permalink:"/notes/service/forge/coding"}},l={},a=[{value:"env",id:"env",level:2},{value:"snipptes",id:"snipptes",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ci-faq",children:"CI FAQ"}),"\n",(0,s.jsx)(n.h2,{id:"env",children:"env"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["drone\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DRONE_"})," \u524d\u7f00"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["woodpecker\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"drone fork"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CI_"})," \u524d\u7f00"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["GitHub Action\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GITHUB_"})," \u524d\u7f00"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# CI \u73af\u5883\u8bc6\u522b\n# ============\nCI=true\nCI=1\nCI=woodpecker\nGITLAB_CI=true\nDRONE=true\nGITHUB_ACTIONS=true\n# Runtime & CI\nVERCEL=1\nRENDER=true\nCLOUDFLARE_ACCOUNT_ID=\n\n# CSV/Git \u4fe1\u606f\n# ============\nCI_COMMIT_SHA=\nCI_COMMIT_SHORT_SHA=$(git rev-parse --short HEAD)\nCI_COMMIT_TAG=\nCI_COMMIT_TAG_MESSAGE=\nCI_COMMIT_TIMESTAMP=\nCI_COMMIT_MESSAGE=\nCI_COMMIT_DESCRIPTION=\nCI_COMMIT_BRANCH=\nCI_COMMIT_REF=\nCI_COMMIT_REF_NAME=\nCI_COMMIT_REF_SLUG=$(echo $CI_COMMIT_REF_NAME | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9-]//g' | sed 's/^-//g' | sed 's/-*$//g' | sed 's/-\\{2,\\}/-/g')\nCI_COMMIT_BEFORE_SHA=0000000000000000000000000000000000000000\n\n# Gitlab\n# ============\nCI_REGISTRY=\nCI_REGISTRY_USER=\nCI_REGISTRY_PASSWORD=\nCI_REGISTRY_IMAGE=\n\nCI_DEFAULT_BRANCH=\nCI_REPOSITORY_URL=\n\n# GitHub\n# ============\nGITHUB_ACTION=__repo-owner_name-of-action-repo\n\n# Jenkins\n# ============\nJOB_NAME=\nJOB_URL=\nEXECUTOR_NUMBER=0\nBUILD_NUMBER=1\n\nGIT_COMMIT=\n# GIT_{COMMITTER,AUTHOR}_{NAME,EMAIL}=\nGIT_URL=\nGIT_BRANCH=\nGIT_LOCAL_BRANCH=\nGIT_PREVIOUS_COMMIT=\nGIT_PREVIOUS_SUCCESSFUL_COMMIT=\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.drone.io/pipeline/environment/reference/",children:"https://docs.drone.io/pipeline/environment/reference/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html",children:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://woodpecker-ci.org/docs/next/usage/environment",children:"https://woodpecker-ci.org/docs/next/usage/environment"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/blob/e408c1ba27f7b1e1f769739d5042c58c643d2130/pipeline/frontend/metadata.go#L146-L243",children:"pipeline/frontend/metadata.go#L146-L243"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#using-environment-variables",children:"https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#using-environment-variables"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables",children:"GitHub Action Variables"})}),"\n",(0,s.jsxs)(n.li,{children:["Vercel ",(0,s.jsx)(n.a,{href:"https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables",children:"Environment Variables"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.cloudflare.com/workers/wrangler/system-environment-variables/",children:"https://developers.cloudflare.com/workers/wrangler/system-environment-variables/"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"snipptes",children:"snipptes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["NPM_TOKEN\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"A://registry.npmjs.org:_authToken,B://registry.npmjs.org:_authToken"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# TOKEN://registry\n[ -n "$NPM_TOKEN" ] && {\n  echo NPM Login\n  echo "$NPM_TOKEN" |\n  tr \',\' \'\\n\' |\n  xargs -I {} sh -c \'X="{}";npm config set -L user "$(echo $X|cut -d: -f2- ):_authToken" "$(echo $X|cut -d: -f1)"\'\n}\n\n[ -z "$DOCKER_REGISTRY" ] || docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD" "$DOCKER_REGISTRY"\n\n# github secrets\n[ -z "${{ secrets.DOCKER_REGISTRY }}" ] || docker login -u "${{ secrets.DOCKER_USERNAME }}" -p "${{ secrets.DOCKER_PASSWORD }}" "${{ secrets.DOCKER_REGISTRY }}"\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'- name: Install\n  env:\n    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n    # GITEA_TOKEN: ${{ secrets.GITEA_TOKEN }}\n  run: |\n    set -e\n    # TOKEN://registry\n    [ -n "$NPM_TOKEN" ] && {\n      echo NPM Login\n      echo "$NPM_TOKEN" |\n      tr \',\' \'\\n\' |\n      xargs -I {} sh -c \'X="{}";npm config set -L user "$(echo $X|cut -d: -f2- ):_authToken" "$(echo $X|cut -d: -f1)"\'\n    }\n\n    time npm add -g pnpm@latest\n    time CI=true \\\n    PUPPETEER_SKIP_DOWNLOAD=true \\\n    make install\n'})})]})}function _(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},38088:(e,n,r)=>{var s=r(96651),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var s,i={},a=null,d=null;for(s in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,s)&&!l.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:a,ref:d,props:i,_owner:c.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},2488:(e,n,r)=>{e.exports=r(38088)},62780:(e,n,r)=>{r.d(n,{I:()=>c,M:()=>o});var s=r(96651);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);