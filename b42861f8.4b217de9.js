(window.webpackJsonp=window.webpackJsonp||[]).push([[730],{1083:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||l;return n?r.a.createElement(d,i(i({ref:t},o),{},{components:n})):r.a.createElement(d,i({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<l;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},803:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),l=(n(0),n(1083)),c={id:"apache-superset",title:"Apache Superset"},i={unversionedId:"service/bi/apache-superset",id:"service/bi/apache-superset",isDocsHomePage:!1,title:"Apache Superset",description:"Tips",source:"@site/notes/service/bi/superset.md",slug:"/service/bi/apache-superset",permalink:"/notes/service/bi/apache-superset",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/bi/superset.md",version:"current",sidebar:"docs",previous:{title:"AppWrite",permalink:"/notes/service/baas/appwrite"},next:{title:"youtube-dl",permalink:"/notes/service/download/youtube-dl"}},s=[{value:"Tips",id:"tips",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"SQL Macro",id:"sql-macro",children:[]},{value:"\u524d\u7aef\u663e\u793a\u7684 UTC \u65e5\u671f",id:"\u524d\u7aef\u663e\u793a\u7684-utc-\u65e5\u671f",children:[]},{value:"Hide menus",id:"hide-menus",children:[]}],o={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u524d\u7aef\u4f1a\u663e\u793a\u4e3a UTC\uff0c\u5bfc\u81f4\u65f6\u95f4 -8",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/apache/incubator-superset/issues/3928"},"#3928")))),Object(l.b)("li",{parentName:"ul"},"\u5206\u4eab\u6dfb\u52a0 ",Object(l.b)("inlineCode",{parentName:"li"},"?standalone=true")," \u53ef\u4ee5\u9690\u85cf\u4e0d\u5fc5\u8981\u7684\u5185\u5bb9"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://medium.com/@sairamkrish/8217956273c1"},"\u81ea\u5b9a\u4e49\u6388\u6743\u5b9e\u73b0\u5206\u4eab")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/54219101/apache-superset-dashboard-in-webpage"},"Apache superset dashboard in webpage")),Object(l.b)("li",{parentName:"ul"},"Helm ",Object(l.b)("a",{parentName:"li",href:"https://github.com/apache/incubator-superset/tree/master/helm/superset"},"chart")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/amancevice/docker-superset"},"amancevice/docker-superset")," - \u5355 docker \u542f\u52a8 superset",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/amancevice/docker-superset/tree/main/examples"},"\u542f\u52a8\u793a\u4f8b")),Object(l.b)("li",{parentName:"ul"},"\u7ba1\u7406\u5de5\u5177 ",Object(l.b)("inlineCode",{parentName:"li"},"/usr/local/bin/superset")),Object(l.b)("li",{parentName:"ul"},"\u5b89\u88c5\u4f4d\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"/usr/local/lib/python3.6/site-packages/superset/")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://preset.io/blog/2020-07-02-hello-world/"},"\u5982\u4f55\u65b0\u589e\u63d2\u4ef6")))),Object(l.b)("li",{parentName:"ul"},"Dashboard \u53ea\u8bfb\u57fa\u7840\u6743\u9650",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"can explore json on Superset"),Object(l.b)("li",{parentName:"ul"},"can dashboard on Superset"),Object(l.b)("li",{parentName:"ul"},"can read on CssTemplateModelView",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u6743\u9650\u4f1a\u51fa\u4e00\u4e2a\u9519\u8bef\u4fe1\u606f"),Object(l.b)("li",{parentName:"ul"},"\u65e7\u7248\u672c\u4e3a can list on CssTemplateModelView"))),Object(l.b)("li",{parentName:"ul"},"datasource access on xxx.xxx"),Object(l.b)("li",{parentName:"ul"},"can csrf token on Superset"),Object(l.b)("li",{parentName:"ul"},"can show on DashboardModelView"))),Object(l.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/apache-superset/superset-ui/issues/409"},"apache-superset/superset-ui#409")," - Calendar heatmap dates shifted by one (converting to local time zone)")))),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://superset.apache.org/docs/installation/cache"},"\u7f13\u5b58\u914d\u7f6e")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/apache/superset/blob/master/superset/config.py"},"config.py"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-py"},"PUBLIC_ROLE_LIKE_GAMMA = True\nSESSION_COOKIE_SAMESITE = None\nSESSION_COOKIE_HTTPONLY = False\n#HTTP_HEADERS = {'X-Frame-Options': 'ALLOW-FROM http://localhost:8080'}\n#HTTP_HEADERS = {'Content-Security-Policy': 'frame-ancestors \\'self\\' localhost:8081','Access-Control-Allow-Origin':'*'}\n\n#\nROW_LIMIT = 5000\nSUPERSET_WORKERS = 2\n\nSUPERSET_WEBSERVER_PORT = 8088\n\n# Flask App Builder configuration\n# Your App secret key\nSECRET_KEY = '\\2\\1thisismyscretkey\\1\\2\\e\\y\\y\\h'\n\n# The SQLAlchemy connection string to your database backend\n# This connection defines the path to the database that stores your\n# superset metadata (slices, connections, tables, dashboards, ...).\n# Note that the connection information to connect to the datasources\n# you want to explore are managed directly in the web UI\nSQLALCHEMY_DATABASE_URI = 'sqlite:////var/lib/superset/superset.db'\n\n# Flask-WTF flag for CSRF\nWTF_CSRF_ENABLED = True\n# Add endpoints that need to be exempt from CSRF protection\nWTF_CSRF_EXEMPT_LIST = []\nMAPBOX_API_KEY = ''\n\n#\nMAPBOX_API_KEY = os.getenv('MAPBOX_API_KEY', '')\n\n# Flask \u7f13\u5b58\n# https://flask-caching.readthedocs.io/en/latest/#configuring-flask-caching\n# Superset \u81ea\u5df1\u7f13\u5b58\nCACHE_CONFIG = {\n    'CACHE_TYPE': 'redis',\n    'CACHE_DEFAULT_TIMEOUT': 300,\n    'CACHE_KEY_PREFIX': 'superset_',\n    'CACHE_REDIS_HOST': 'redis',\n    'CACHE_REDIS_PORT': 6379,\n    'CACHE_REDIS_DB': 1,\n    'CACHE_REDIS_URL': 'redis://redis:6379/1'}\n\n# \u6570\u636e\u5e93\u7f13\u5b58\nDATA_CACHE_CONFIG = {\n    'CACHE_TYPE': 'redis',\n    'CACHE_DEFAULT_TIMEOUT': 60 * 60 * 24, # 1 day default (in secs)\n    'CACHE_KEY_PREFIX': 'superset_results',\n    'CACHE_REDIS_URL': 'redis://localhost:6379/0',\n}\n\n# SQL Lab \u67e5\u8be2\u7ed3\u679c\u5b58\u50a8\n# RESULTS_BACKEND\n\nSQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://superset:superset@postgresql:5432/superset'\nSQLALCHEMY_TRACK_MODIFICATIONS = True\nSECRET_KEY = ''\n\n# \u8df3\u8f6c\u5230 https\nENABLE_PROXY_FIX = True\nPREFERRED_URL_SCHEME = 'https'\n")),Object(l.b)("h2",{id:"sql-macro"},"SQL Macro"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://superset.incubator.apache.org/sqllab.html#templating-with-jinja"},"https://superset.incubator.apache.org/sqllab.html#templating-with-jinja")),Object(l.b)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4 ",Object(l.b)("inlineCode",{parentName:"li"},"superset.jinja_context"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jinja"},"{% set date_ref =   filter_values('my_date')[0] %}\nAND date >= DATE_ADD({{date_ref}}, INTERVAL -7 DAYS)\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Macro"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Describe"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"current_user_id()"),Object(l.b)("td",{parentName:"tr",align:null},"int?"),Object(l.b)("td",{parentName:"tr",align:null},"\u5f53\u524d\u7528\u6237 ID")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"current_username()"),Object(l.b)("td",{parentName:"tr",align:null},"str?"),Object(l.b)("td",{parentName:"tr",align:null},"\u5f53\u524d\u7528\u6237\u540d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"url_param(param, default=None)"),Object(l.b)("td",{parentName:"tr",align:null},"any"),Object(l.b)("td",{parentName:"tr",align:null},"URL \u53c2\u6570")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"filter_values(column, default=None)"),Object(l.b)("td",{parentName:"tr",align:null},"any"),Object(l.b)("td",{parentName:"tr",align:null},"form_data \u91cc\u7684\u6570\u636e")))),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"\u524d\u7aef\u663e\u793a\u7684-utc-\u65e5\u671f"},"\u524d\u7aef\u663e\u793a\u7684 UTC \u65e5\u671f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/apache/incubator-superset/issues/3928"},"#3928")," - Timestamps are not displayed in the client's local timezone"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/apache/incubator-superset/issues/9304#issuecomment-609524741"},"#9304"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Superset decided to always UTC time to keep things simple. It'd be quite some work if we want to add custom timezone support.")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-py"},'SUPERSET_D3_LOCALE = """\n{\n  "decimal": ".",\n  "thousands": ",",\n  "grouping": [3],\n  "currency": ["\xa3", ""],\n  "dateTime": "%a %e %b %X %Y",\n  "date": "%d/%m/%Y",\n  "time": "%H:%M:%S",\n  "periods": ["AM", "PM"],\n  "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],\n  "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],\n  "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],\n  "shortMonths": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]\n} """\n\nSUPERSET_D3_LOCALE = """\n{\n  "decimal": ".",\n  "thousands": ",",\n  "grouping": [3],\n  "currency": ["\xa5", ""],\n  "dateTime": "%a %b %e %X %Y",\n  "date": "%Y-%d-%m",\n  "time": "%H:%M:%S",\n  "periods": ["\u4e0a\u5348", "\u4e0b\u5348"],\n  "days": ["\u5468\u65e5", "\u5468\u4e00", "\u5468\u4e8c", "\u5468\u4e09", "\u5468\u56db", "\u5468\u4e94", "\u5468\u516d"],\n  "shortDays": ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],\n  "months": ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],\n  "shortMonths": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]\n} """\n')),Object(l.b)("h2",{id:"hide-menus"},"Hide menus"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-css"},"html:not([mode='edit']) .dashboard-header > .button-container {\n    display: none !important;\n}\nhtml:not([mode='edit']) header.top {\n    display: none;\n}\nhtml:not([mode='edit']) .chart-header>.header>.dropdown {\n    display: none !important;\n}\nhtml:not([mode='edit']) .dragdroppable-tab .anchor-link-container {\n    display: none !important;\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// \u663e\u793a\n$('html').attr('mode','edit')\n")))}p.isMDXComponent=!0}}]);