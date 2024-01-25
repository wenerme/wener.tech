/*! For license information please see 4b90ff9f.b232efaf.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39722],{95630:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>m});var a=l(11527),s=l(47214);const t={title:"amplify"},i="amplify",o={id:"platform/aws/amplify",title:"amplify",description:"Build",source:"@site/../notes/platform/aws/amplify.md",sourceDirName:"platform/aws",slug:"/platform/aws/amplify",permalink:"/notes/platform/aws/amplify",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/platform/aws/amplify.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1706172619,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{title:"amplify"},sidebar:"docs",previous:{title:"AWS",permalink:"/notes/platform/aws/"},next:{title:"Azure OpenAI",permalink:"/notes/platform/azure/oai"}},r={},m=[{value:"Build",id:"build",level:2},{value:"amazonlinux:2",id:"amazonlinux2",level:3},{value:"amazonlinux:2023",id:"amazonlinux2023",level:3}];function p(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"amplify",children:"amplify"}),"\n",(0,a.jsx)(e.h2,{id:"build",children:"Build"}),"\n",(0,a.jsx)(e.admonition,{type:"caution",children:(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u6784\u5efa\u524d\u5c3d\u91cf\u6ce8\u610f\u9009\u62e9\u4e0b\u66f4\u65b0\u7684\u6784\u5efa\u955c\u50cf\uff0c\u8001\u7684\u955c\u50cf\u53ef\u80fd\u51fa\u73b0\u5404\u79cd\u95ee\u9898"}),"\n"]})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",children:"version: 1\nfrontend:\n  phases:\n    preBuild:\n      commands:\n        - nvm use 20\n        - npm i -g pnpm\n        - pnpm install\n    build:\n      commands:\n        - nvm use 20\n        - pnpm run build\n  artifacts:\n    baseDirectory: .next\n    files:\n      - '**/*'\n  cache:\n    paths:\n      - node_modules/**/*\n"})}),"\n",(0,a.jsx)(e.h3,{id:"amazonlinux2",children:"amazonlinux:2"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-dockerfile",children:'# Use the standard Amazon Linux base, provided by ECR/KaOS\n# It points to the standard shared Amazon Linux image, with a versioned tag.\nFROM amazonlinux:2\n\n# https://docs.docker.com/engine/reference/builder/#maintainer-deprecated\nLABEL maintainer="Amazon AWS"\n\n# Framework Versions\nENV VERSION_NODE_8=8.12.0\nENV VERSION_NODE_10=10.16.0\nENV VERSION_NODE_12=12\nENV VERSION_NODE_14=14\nENV VERSION_NODE_16=16\nENV VERSION_NODE_17=17\nENV VERSION_NODE_DEFAULT=$VERSION_NODE_14\nENV VERSION_RUBY_2_4=2.4.6\nENV VERSION_RUBY_2_6=2.6.3\nENV VERSION_BUNDLER=2.0.1\nENV VERSION_RUBY_DEFAULT=$VERSION_RUBY_2_4\nENV VERSION_HUGO=0.75.1\nENV VERSION_YARN=1.22.0\nENV VERSION_AMPLIFY=6.3.1\n\n# UTF-8 Environment\nENV LANGUAGE en_US:en\nENV LANG=en_US.UTF-8\nENV LC_ALL en_US.UTF-8\n\n## Install OS packages\nRUN touch ~/.bashrc\nRUN yum -y update \\\n  && yum -y install \\\n    alsa-lib-devel \\\n    autoconf \\\n    automake \\\n    bzip2 \\\n    bison \\\n    bzr \\\n    cmake \\\n    expect \\\n    fontconfig \\\n    git \\\n    gcc-c++ \\\n    GConf2-devel \\\n    gtk2-devel \\\n    gtk3-devel \\\n    libnotify-devel \\\n    libpng \\\n    libpng-devel \\\n    libffi-devel \\\n    libtool \\\n    libX11 \\\n    libXext \\\n    libxml2 \\\n    libxml2-devel \\\n    libXScrnSaver \\\n    libxslt \\\n    libxslt-devel \\\n    libyaml \\\n    libyaml-devel \\\n    make \\\n    nss-devel \\\n    openssl-devel \\\n    openssh-clients \\\n    patch \\\n    procps \\\n    python3 \\\n    python3-devel \\\n    readline-devel \\\n    sqlite-devel \\\n    tar \\\n    tree \\\n    unzip \\\n    wget \\\n    which \\\n    xorg-x11-server-Xvfb \\\n    zip \\\n    zlib \\\n    zlib-devel \\\n    yum clean all \\\n  && rm -rf /var/cache/yum\n\n## Install Hugo\nRUN wget https://github.com/gohugoio/hugo/releases/download/v${VERSION_HUGO}/hugo_${VERSION_HUGO}_Linux-64bit.tar.gz \\\n  && tar -xf hugo_${VERSION_HUGO}_Linux-64bit.tar.gz hugo -C / \\\n  && mv /hugo /usr/bin/hugo \\\n  && rm -rf hugo_${VERSION_HUGO}_Linux-64bit.tar.gz\n\n## Install dotnet sdk and host 3.1\nRUN rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm\nRUN yum -y install dotnet-host-3.1.4\nRUN yum -y install dotnet-sdk-3.1\n\n## Install amazon dotnet tools\nRUN dotnet tool install -g Amazon.Lambda.Tools\nRUN dotnet tool install -g Amazon.Lambda.TestTool-3.1\n\n## Install python3.8\nRUN wget https://www.python.org/ftp/python/3.8.0/Python-3.8.0.tgz\nRUN tar xvf Python-3.8.0.tgz\nWORKDIR Python-3.8.0\nRUN ./configure --enable-optimizations --prefix=/usr/local\nRUN make altinstall\n\n## Install python3.9\nRUN wget https://www.python.org/ftp/python/3.9.0/Python-3.9.0.tgz\nRUN tar xvf Python-3.9.0.tgz\nWORKDIR Python-3.9.0\nRUN ./configure --enable-optimizations --prefix=/usr/local\nRUN make altinstall\n\n## Install Node\nRUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\nRUN /bin/bash -c ". ~/.nvm/nvm.sh &&     nvm install $VERSION_NODE_8 && nvm use $VERSION_NODE_8 && \\\n\tnvm install $VERSION_NODE_10 && nvm use $VERSION_NODE_10 && \\\n\tnpm install -g yarn@${VERSION_YARN} sm grunt-cli bower vuepress gatsby-cli && \\\n\tnvm install $VERSION_NODE_12 && nvm use $VERSION_NODE_12 && \\\n\tnpm install -g yarn@${VERSION_YARN} sm grunt-cli bower vuepress gatsby-cli && \\\n\tnvm install $VERSION_NODE_14 && nvm use $VERSION_NODE_14 && \\\n\tnpm install -g yarn@${VERSION_YARN} sm grunt-cli bower vuepress gatsby-cli && \\\n\tnvm install $VERSION_NODE_16 && nvm use $VERSION_NODE_16 && chown -R root:root /root/.nvm &&  \\\n\tnpm install -g yarn@${VERSION_YARN} sm grunt-cli bower vuepress gatsby-cli && \\\n\tnvm install $VERSION_NODE_17 && nvm use $VERSION_NODE_17 && chown -R root:root /root/.nvm && \\\n    npm install -g yarn@${VERSION_YARN} sm grunt-cli bower vuepress gatsby-cli && \\\n\tnvm alias default ${VERSION_NODE_DEFAULT} && nvm cache clear"\n\n# Handle yarn for any `nvm install` in the future\nRUN echo "yarn@${VERSION_YARN}" > /root/.nvm/default-packages\n\n## Install Ruby 2.4.x and 2.6.x\n## https://github.com/rvm/rvm/issues/5096 | https://rvm.io/rvm/security#install-our-keys - The old keyserver is no longer available\nRUN curl -sSL https://rvm.io/mpapis.asc | gpg --import - && curl -sSL https://rvm.io/pkuczynski.asc | gpg --import - && curl -sL https://get.rvm.io | bash -s -- --with-gems="bundler"\n\nENV PATH /usr/local/rvm/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\nRUN /bin/bash --login -c "\\\n\trvm install $VERSION_RUBY_2_4 && rvm use $VERSION_RUBY_2_4 && gem install bundler -v $VERSION_BUNDLER && gem install jekyll && \\\n\trvm install $VERSION_RUBY_2_6 && rvm use $VERSION_RUBY_2_6 && gem install bundler -v $VERSION_BUNDLER && gem install -N jekyll && \\\n\trvm cleanup all"\n\n## Install awscli\nRUN /bin/bash -c "pip3.8 install awscli && rm -rf /var/cache/apk/*"\nRUN /bin/bash -c "pip3.9 install awscli && rm -rf /var/cache/apk/*"\n\n## Install SAM CLI\nRUN /bin/bash -c "pip3.8 install aws-sam-cli"\nRUN /bin/bash -c "pip3.9 install aws-sam-cli"\n\n## Installing Cypress\nRUN /bin/bash -c ". ~/.nvm/nvm.sh && \\\n    nvm use ${VERSION_NODE_DEFAULT} && \\\n    npm install -g --unsafe-perm=true --allow-root cypress"\n\n## Install AWS Amplify CLI for all node versions\nRUN /bin/bash -c ". ~/.nvm/nvm.sh && nvm use ${VERSION_NODE_8} && \\\n    npm config set user 0 && npm config set unsafe-perm true && \\\n\tnpm install -g @aws-amplify/cli@${VERSION_AMPLIFY}"\nRUN /bin/bash -c ". ~/.nvm/nvm.sh && nvm use ${VERSION_NODE_10} && \\\n    npm config set user 0 && npm config set unsafe-perm true && \\\n\tnpm install -g @aws-amplify/cli@${VERSION_AMPLIFY}"\nRUN /bin/bash -c ". ~/.nvm/nvm.sh && nvm use ${VERSION_NODE_12} && \\\n    npm config set user 0 && npm config set unsafe-perm true && \\\n\tnpm install -g @aws-amplify/cli@${VERSION_AMPLIFY}"\nRUN /bin/bash -c ". ~/.nvm/nvm.sh && nvm use ${VERSION_NODE_14} && \\\n    npm config set user 0 && npm config set unsafe-perm true && \\\n\tnpm install -g @aws-amplify/cli@${VERSION_AMPLIFY}"\nRUN /bin/bash -c ". ~/.nvm/nvm.sh && nvm use ${VERSION_NODE_16} && \\\n    npm config set user 0 && npm config set unsafe-perm true && \\\n\tnpm install -g @aws-amplify/cli@${VERSION_AMPLIFY}"\nRUN /bin/bash -c ". ~/.nvm/nvm.sh && nvm use ${VERSION_NODE_17}  && \\\n    npm config set user 0 && npm config set unsafe-perm true && \\\n\tnpm install -g @aws-amplify/cli@${VERSION_AMPLIFY}"\n\n## Environment Setup\nRUN echo export PATH="/usr/local/rvm/gems/ruby-${VERSION_RUBY_DEFAULT}/bin:\\\n/usr/local/rvm/gems/ruby-${VERSION_RUBY_DEFAULT}@global/bin:\\\n/usr/local/rvm/rubies/ruby-${VERSION_RUBY_DEFAULT}/bin:\\\n/usr/local/rvm/bin:\\\n/root/.nvm/versions/node/${VERSION_NODE_DEFAULT}/bin:\\\n$(python3 -m site --user-base)/bin:\\\n$(python3.8 -m site --user-base)/bin:\\\n$(python3.9 -m site --user-base)/bin:\\\n$PATH" >> ~/.bashrc \\\n  && echo export GEM_PATH="/usr/local/rvm/gems/ruby-${VERSION_RUBY_DEFAULT}" >> ~/.bashrc \\\n  && echo "nvm use ${VERSION_NODE_DEFAULT} 1> /dev/null" >> ~/.bashrc \\\n  && echo "export PATH=$PATH:/root/.dotnet/tools" >> ~/.bashrc\n\nENTRYPOINT [ "bash", "-c" ]\n'})}),"\n",(0,a.jsx)(e.h3,{id:"amazonlinux2023",children:"amazonlinux:2023"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-dockerfile",children:"FROM public.ecr.aws/amazonlinux/amazonlinux:2023\n\nLABEL maintainer=\"Amazon AWS\"\n\n######################################################################\n#   Environment variable to identify the image version at runtime    #\n######################################################################\n\nENV AWS_AMPLIFY_BUILD_IMAGE_VERSION=2023-11\n\n###########################\n#   Install OS packages   #\n###########################\n\nRUN yum -y update \\\n  && yum -y install --allowerasing \\\n    alsa-lib-devel \\\n    autoconf \\\n    automake \\\n    bzip2 \\\n    bison \\\n    cmake \\\n    expect \\\n    fontconfig \\\n    gawk \\\n    gcc-c++ \\\n    git \\\n    gnupg2 \\\n    gtk3-devel \\\n    libnotify-devel \\\n    libpng \\\n    libpng-devel \\\n    libffi-devel \\\n    libtool \\\n    libX11 \\\n    libXext \\\n    libxml2 \\\n    libxml2-devel \\\n    libXScrnSaver \\\n    libxslt \\\n    libxslt-devel \\\n    libwebp \\\n    libwebp-devel \\\n    libyaml \\\n    libyaml-devel \\\n    make \\\n    nss-devel \\\n    openssl-devel \\\n    openssh-clients \\\n    patch \\\n    procps \\\n    readline-devel \\\n    sqlite-devel \\\n    sudo \\\n    tar \\\n    tree \\\n    unzip \\\n    vi \\\n    wget \\\n    which \\\n    xorg-x11-server-Xvfb \\\n    zip \\\n    zlib \\\n    zlib-devel \\\n    bzip2-devel \\\n  && yum clean all \\\n  && rm -rf /var/cache/yum\n\nUSER root\nENV HOME=/root\n\nRUN echo '# Aliases to allow running commands without `sudo`,\\n''# pretending to be running as root\\n''alias yum=\"sudo yum\"\\n''alias dfn=\"sudo dnf\"\\n''alias rpm=\"sudo rpm\"\\n''alias amazon-linux-extras=\"sudo amazon-linux-extras\"\\n''\\n''# Load NVM when the shell is initialized\\n''export NVM_DIR=\"$HOME/.nvm\"\\n''[ -s \"$NVM_DIR/nvm.sh\" ] && . \"$NVM_DIR/nvm.sh\"\\n''\\n' \\\n  > $HOME/.bashrc\n\n###########################\n#   Create Amplify user   #\n###########################\n\nRUN adduser --system --uid 900 --create-home --home-dir $HOME amplify \\\n  && echo \"amplify ALL = NOPASSWD : /usr/bin/yum, /usr/bin/dnf, /bin/rpm, /usr/bin/amazon-linux-extras\" >> /etc/sudoers \\\n  && chown -R amplify:amplify $HOME \\\n  && chmod -R u+w $HOME\n\nRUN chown root:root /usr/bin\nRUN usermod -aG root amplify\nRUN chmod 775 /usr/bin\n\nUSER amplify\n\n#####################################\n#   Change base working directory   #\n#####################################\n\nWORKDIR $HOME\nRUN mkdir -p $HOME/bin\n\n###############################################\n#   Install NPM, Node, and default packages   #\n###############################################\n\nRUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash\nENV NVM_DIR=$HOME/.nvm\n\nRUN echo \\\n  '@aws-amplify/cli\\n''bower\\n''cypress\\n''grunt-cli\\n''hugo-extended\\n''vuepress\\n''yarn' \\\n  > $NVM_DIR/default-packages\n\nRUN chown amplify:amplify $NVM_DIR/default-packages\n\nRUN [ -s \"$NVM_DIR/nvm.sh\" ] && . \"$NVM_DIR/nvm.sh\" \\\n  && nvm install 14 \\\n  && nvm install 16 \\\n  && nvm install 18 \\\n  && nvm install 20 \\\n  && nvm alias default 18 \\\n  && nvm cache clear\n\n###################################################\n#   Install Pyenv, Python, and default packages   #\n###################################################\n\nENV PYENV_ROOT=$HOME/.pyenv\nENV PATH=\"$PYENV_ROOT/bin:$PATH\"\n\nRUN curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash \\\n  && git clone https://github.com/jawshooah/pyenv-default-packages.git $PYENV_ROOT/plugins/pyenv-default-packages \\\n  && echo 'eval \"$(pyenv init -)\"' >> $HOME/.bashrc\n\nRUN echo \\\n  'awscli >= 1\\n''aws-sam-cli >= 1.90.0' \\\n  > $PYENV_ROOT/default-packages\n\nRUN chown amplify:amplify $PYENV_ROOT/default-packages\n\nRUN pyenv install 3.8 \\\n  && pyenv install 3.9 \\\n  && pyenv install 3.10 \\\n  && pyenv install 3.11 \\\n  && pyenv global 3.10\n\n###################################################################\n#   Create symlinks for old versions of Python,                   #\n#   this keeps backwards compatibility with the previous image.   #\n###################################################################\n\nUSER root\nRUN ln -s $HOME/.pyenv/shims/python3.8 /usr/bin/python3.8 \\\n  && ln -s $HOME/.pyenv/shims/pip3.8 /usr/bin/pip3.8\nUSER amplify\n\n###############################################\n#   Install RVM, Ruby, and default packages   #\n###############################################\n\nENV RVM_ROOT=$HOME/.rvm/\nENV PATH=\"$RVM_ROOT/bin:$PATH\"\n\nRUN command curl -sSL https://rvm.io/mpapis.asc | gpg --import - \\\n  && command curl -sSL https://rvm.io/pkuczynski.asc | gpg --import - \\\n  && curl -sSL https://get.rvm.io | bash -s stable\n\nRUN echo \\\n  'bundler\\n''jekyll\\n''jekyll-sass-converter' \\\n  > $RVM_ROOT/gemsets/default.gems\n\nRUN chown amplify:amplify $RVM_ROOT/gemsets/default.gems\n\nRUN rvm install 3.0.6 \\\n  && rvm install 3.1.4 \\\n  && rvm install 3.2.2 --default \\\n  && rvm cleanup all\n\nENV PATH=\"$HOME/bin:$PATH\"\nRUN echo 'export PATH=\"$PATH\"' >> $HOME/.bashrc\nENTRYPOINT [ \"bash\", \"-c\" ]\n"})})]})}function c(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},3354:(n,e,l)=>{var a=l(50959),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function m(n,e,l){var a,t={},m=null,p=null;for(a in void 0!==l&&(m=""+l),void 0!==e.key&&(m=""+e.key),void 0!==e.ref&&(p=e.ref),e)i.call(e,a)&&!r.hasOwnProperty(a)&&(t[a]=e[a]);if(n&&n.defaultProps)for(a in e=n.defaultProps)void 0===t[a]&&(t[a]=e[a]);return{$$typeof:s,type:n,key:m,ref:p,props:t,_owner:o.current}}e.Fragment=t,e.jsx=m,e.jsxs=m},11527:(n,e,l)=>{n.exports=l(3354)},47214:(n,e,l)=>{l.d(e,{Z:()=>o,a:()=>i});var a=l(50959);const s={},t=a.createContext(s);function i(n){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);