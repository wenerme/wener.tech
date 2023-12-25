/*! For license information please see cbcc1572.ab905f74.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62275],{96851:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=r(11527),o=r(47214);const s={tags:["Configuration"]},t="Spring Boot Properties",l={id:"java/spring/boot/spring-boot-conf",title:"Spring Boot Properties",description:"- https://cloud.spring.io/spring-cloud-gateway/reference/html/appendix.html",source:"@site/../notes/java/spring/boot/spring-boot-conf.md",sourceDirName:"java/spring/boot",slug:"/java/spring/boot/conf",permalink:"/notes/java/spring/boot/conf",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/spring/boot/spring-boot-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1691332314,formattedLastUpdatedAt:"Aug 6, 2023",frontMatter:{tags:["Configuration"]},sidebar:"docs",previous:{title:"Spring Boot",permalink:"/notes/java/spring/boot/"},next:{title:"Spring Cloud",permalink:"/notes/java/spring/cloud/"}},c={},d=[{value:"\u4e3b\u8981\u914d\u7f6e\u5bf9\u8c61",id:"\u4e3b\u8981\u914d\u7f6e\u5bf9\u8c61",level:2},{value:"\u914d\u7f6e\u5c5e\u6027\u52a0\u8f7d\u987a\u5e8f",id:"\u914d\u7f6e\u5c5e\u6027\u52a0\u8f7d\u987a\u5e8f",level:2},{value:"\u67e5\u627e\u5c5e\u6027\u6587\u4ef6\u7684\u987a\u5e8f",id:"\u67e5\u627e\u5c5e\u6027\u6587\u4ef6\u7684\u987a\u5e8f",level:2},{value:"\u7279\u6b8a\u914d\u7f6e\u8bf4\u660e",id:"\u7279\u6b8a\u914d\u7f6e\u8bf4\u660e",level:2},{value:"\u5c5e\u6027\u6587\u4ef6\u53ef\u4f7f\u7528\u5360\u4f4d\u7b26",id:"\u5c5e\u6027\u6587\u4ef6\u53ef\u4f7f\u7528\u5360\u4f4d\u7b26",level:2},{value:"\u5355\u4e2a YAML \u53ef\u6307\u5b9a\u591a\u4e2a profile",id:"\u5355\u4e2a-yaml-\u53ef\u6307\u5b9a\u591a\u4e2a-profile",level:2},{value:"\u914d\u7f6e\u6ce8\u89e3",id:"\u914d\u7f6e\u6ce8\u89e3",level:2},{value:"\u7ed1\u5b9a\u5c5e\u6027\u540d",id:"\u7ed1\u5b9a\u5c5e\u6027\u540d",level:2},{value:"\u65e5\u5fd7\u914d\u7f6e",id:"\u65e5\u5fd7\u914d\u7f6e",level:2},{value:"\u5e38\u7528\u914d\u7f6e",id:"\u5e38\u7528\u914d\u7f6e",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"spring-boot-properties",children:"Spring Boot Properties"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://cloud.spring.io/spring-cloud-gateway/reference/html/appendix.html",children:"https://cloud.spring.io/spring-cloud-gateway/reference/html/appendix.html"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html",children:"https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://docs.spring.io/spring-boot/docs/2.7.x-SNAPSHOT/reference/htmlsingle/#features.external-config",children:"https://docs.spring.io/spring-boot/docs/2.7.x-SNAPSHOT/reference/htmlsingle/#features.external-config"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4e3b\u8981\u914d\u7f6e\u5bf9\u8c61",children:"\u4e3b\u8981\u914d\u7f6e\u5bf9\u8c61"}),"\n",(0,i.jsx)(e.p,{children:"\u914d\u7f6e\u5bf9\u8c61\u90fd\u901a\u8fc7 Adapter/Configurer \u7684\u7c7b\u8fdb\u884c\u914d\u7f6e, \u53ea\u662f\u5bf9\u5185\u90e8\u914d\u7f6e\u8fdb\u884c\u4fee\u6539\u800c\u4e0d\u662f\u76f4\u63a5\u66ff\u6362."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter"}),"\n",(0,i.jsx)(e.li,{children:"org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter"}),"\n",(0,i.jsx)(e.li,{children:"org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter"}),"\n",(0,i.jsx)(e.li,{children:"org.springframework.security.config.annotation.SecurityConfigurerAdapter"}),"\n",(0,i.jsx)(e.li,{children:"org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter"}),"\n",(0,i.jsx)(e.li,{children:"org.springframework.scheduling.annotation.AsyncConfigurer"}),"\n",(0,i.jsx)(e.li,{children:"org.springframework.cache.annotation.CachingConfigurer"}),"\n",(0,i.jsx)(e.li,{children:"org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer"}),"\n",(0,i.jsx)(e.li,{children:"org.springframework.security.config.annotation.web.configurers.HeadersConfigurer"}),"\n",(0,i.jsx)(e.li,{children:"org.springframework.boot.autoconfigure.security.oauth2.resource.JwtAccessTokenConverterConfigurer"}),"\n",(0,i.jsx)(e.li,{children:"org.springframework.web.servlet.config.annotation.PathMatchConfigurer"}),"\n",(0,i.jsx)(e.li,{children:"org.springframework.security.config.annotation.web.configurers.RequestCacheConfigurer"}),"\n",(0,i.jsx)(e.li,{children:"org.springframework.transaction.annotation.TransactionManagementConfigurer"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u914d\u7f6e\u5c5e\u6027\u52a0\u8f7d\u987a\u5e8f",children:"\u914d\u7f6e\u5c5e\u6027\u52a0\u8f7d\u987a\u5e8f"}),"\n",(0,i.jsxs)(e.ol,{start:"0",children:["\n",(0,i.jsx)(e.li,{children:"\u547d\u4ee4\u884c\u53c2\u6570"}),"\n",(0,i.jsxs)(e.li,{children:["\u73af\u5883\u53d8\u91cf ",(0,i.jsx)(e.code,{children:"SPRING_APPLICATION_JSON"})," \u6307\u5b9a\u7684 JSON \u914d\u7f6e\u6216\u7cfb\u7edf\u5c5e\u6027"]}),"\n",(0,i.jsxs)(e.li,{children:["JNDI \u5c5e\u6027 ",(0,i.jsx)(e.code,{children:"java:comp/env"})]}),"\n",(0,i.jsx)(e.li,{children:"Java \u7cfb\u7edf\u5c5e\u6027 (System.getProperties())"}),"\n",(0,i.jsx)(e.li,{children:"\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883\u53d8\u91cf"}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"RandomValuePropertySource"})," \u4e3a ",(0,i.jsx)(e.code,{children:"random.*"})," \u8bbe\u7f6e\u968f\u673a\u5c5e\u6027\u503c"]}),"\n",(0,i.jsx)(e.li,{children:"Jar \u5305\u5916\u57fa\u4e8e profile \u7684\u5e94\u7528\u5c5e\u6027 (application-{profile}.properties \u6216 YAML)"}),"\n",(0,i.jsx)(e.li,{children:"Jar \u5305\u5185\u57fa\u4e8e profile \u7684\u5e94\u7528\u5c5e\u6027 (application-{profile}.properties \u6216 YAML)"}),"\n",(0,i.jsx)(e.li,{children:"Jar \u5305\u5916\u7684\u5e94\u7528\u5c5e\u6027\u914d\u7f6e (application.properties \u6216 YAML)"}),"\n",(0,i.jsx)(e.li,{children:"Jar \u5305\u5185\u7684\u5e94\u7528\u5c5e\u6027\u914d\u7f6e (application.properties \u6216 YAML)"}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"@Configuration"})," \u7c7b\u4e0a\u7684 ",(0,i.jsx)(e.code,{children:"@PropertySource"})]}),"\n",(0,i.jsx)(e.li,{children:"\u9ed8\u8ba4\u5c5e\u6027 (\u901a\u8fc7 SpringApplication.setDefaultProperties \u6307\u5b9a)"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u793a\u4f8b"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'SPRING_APPLICATION_JSON=\'{"foo":{"bar":"spam"}}\' java -jar myapp.jar\njava -Dspring.application.json=\'{"foo":"bar"}\' -jar myapp.jar\njava -jar myapp.jar --spring.application.json=\'{"foo":"bar"}\'\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u67e5\u627e\u5c5e\u6027\u6587\u4ef6\u7684\u987a\u5e8f",children:"\u67e5\u627e\u5c5e\u6027\u6587\u4ef6\u7684\u987a\u5e8f"}),"\n",(0,i.jsxs)(e.ol,{start:"0",children:["\n",(0,i.jsxs)(e.li,{children:["\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 ",(0,i.jsx)(e.code,{children:"/config"})," \u5b50\u76ee\u5f55"]}),"\n",(0,i.jsx)(e.li,{children:"\u5f53\u524d\u76ee\u5f55"}),"\n",(0,i.jsxs)(e.li,{children:["\u7c7b\u8def\u5f84\u4e0b\u7684 ",(0,i.jsx)(e.code,{children:"/config"})," \u5305"]}),"\n",(0,i.jsx)(e.li,{children:"\u7c7b\u8def\u5f84\u6839"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u4fee\u6539"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'# \u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u540d\njava -jar myproject.jar --spring.config.name=myproject\n# \u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\njava -jar myproject.jar --spring.config.location=classpath:/default.properties,classpath:/override.properties\n# \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u4fee\u6539\u6587\u4ef6\u540d\nSPRING_CONFIG_NAME=myproject java -jar myproject.jar\n# \u53ef\u540c\u65f6\u52a0\u8f7d\u591a\u4e2a\u914d\u7f6e\u540d\n# --spring.config.name=server-app,env\n# \u53ef\u5728\u542f\u52a8\u65f6\u6fc0\u6d3b\u76f8\u5e94\u914d\u7f6e\n# --spring.profiles.active=local\n# \u53ef\u4fee\u6539\u914d\u7f6e\u7684\u641c\u7d22\u8def\u5f84\n# --spring.profiles.location=file:./conf\n# \u4fee\u6539\u9ed8\u8ba4 Profile\n# --spring.profiles.default=test\n# \u53ef\u76f4\u63a5\u4f20\u9012 JSON \u53c2\u6570\n# --spring.application.json={"redis.port":6379}\n'})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6ce8\u610f"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4f7f\u7528 Profile \u65f6, include \u7684\u4f18\u5148\u7ea7\u4f1a\u6bd4\u5f53\u524d\u914d\u7f6e\u7684\u4f18\u5148\u7ea7\u9ad8,\u56e0\u6b64\u5728\u4f7f\u7528\u65f6\u5efa\u8bae\u907f\u514d\u4f7f\u7528 include \u6765\u5305\u542b\u9ed8\u8ba4\u914d\u7f6e."}),"\n",(0,i.jsx)(e.li,{children:"\u6307\u5b9a\u591a\u4e2a profile \u65f6\u540e\u9762\u7684\u4f1a\u8986\u76d6\u524d\u9762\u7684"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7279\u6b8a\u914d\u7f6e\u8bf4\u660e",children:"\u7279\u6b8a\u914d\u7f6e\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["DevTool \u4f1a\u5c1d\u8bd5\u67e5\u627e HOME \u4e0b\u7684 ",(0,i.jsx)(e.code,{children:".spring-boot-devtools.properties"})," \u914d\u7f6e\u6587\u4ef6"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"spring.main"})," \u4e0b\u7684\u53c2\u6570\u4f1a\u5e94\u7528\u5230 ",(0,i.jsx)(e.code,{children:"SpringApplication"})," \u4e0a,\u56e0\u6b64\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,i.jsx)(e.code,{children:"spring.main.web_environment: false"})," \u8fd9\u6837\u7684\u53c2\u6570"]}),"\n",(0,i.jsxs)(e.li,{children:["Spring \u542f\u52a8\u65f6\u7684\u5904\u7406\u7c7b\u4e3a ",(0,i.jsx)(e.code,{children:"org.springframework.boot.context.config.ConfigFileApplicationListener"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u8d1f\u8d23\u52a0\u8f7d\u7ed9\u5b9a\u7684\u914d\u7f6e ",(0,i.jsx)(e.code,{children:"spring.config.name"}),",",(0,i.jsx)(e.code,{children:"spring.profiles.active"}),",",(0,i.jsx)(e.code,{children:"spring.profiles.location"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u8d1f\u8d23\u5c06 ",(0,i.jsx)(e.code,{children:"spring.main"})," \u4e0a\u7684\u5c5e\u6027\u7ed1\u5b9a\u5230 ",(0,i.jsx)(e.code,{children:"SpringApplication"})," \u4e0a"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"\u53ef\u542f\u7528\u65e5\u5fd7,\u8bb0\u5f55\u6240\u6709\u5c1d\u8bd5\u52a0\u8f7d\u7684\u914d\u7f6e\u6587\u4ef6\u540d"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'<logger name="org.springframework.boot.context.config.ConfigFileApplicationListener"\n        level="TRACE"\n        additivity="false">\n    <appender-ref ref="CONSOLE"/>\n    <appender-ref ref="FILE"/>\n</logger>\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u5c5e\u6027\u6587\u4ef6\u53ef\u4f7f\u7528\u5360\u4f4d\u7b26",children:"\u5c5e\u6027\u6587\u4ef6\u53ef\u4f7f\u7528\u5360\u4f4d\u7b26"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"app.name=MyApp\napp.description=${app.name:Default Name} is a Spring Boot application\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5355\u4e2a-yaml-\u53ef\u6307\u5b9a\u591a\u4e2a-profile",children:"\u5355\u4e2a YAML \u53ef\u6307\u5b9a\u591a\u4e2a profile"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yaml",children:"server:\n  address: 192.168.1.100\n---\nspring:\n  profiles: development\nserver:\n  address: 127.0.0.1\n---\nspring:\n  profiles: production\nserver:\n  address: 192.168.1.120\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u914d\u7f6e\u6ce8\u89e3",children:"\u914d\u7f6e\u6ce8\u89e3"}),"\n",(0,i.jsxs)(e.p,{children:["\u9ed8\u8ba4\u4f1a\u5f00\u542f ",(0,i.jsx)(e.code,{children:"@EnableConfigurationProperties"})," \u6ce8\u89e3\u914d\u7f6e, \u6709 ",(0,i.jsx)(e.code,{children:"@ConfigurationProperties"})," \u6ce8\u89e3\u4f1a\u81ea\u52a8\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"Environment"})," \u8fdb\u884c\u521d\u59cb\u5316.\u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"@EnableConfigurationProperties"})," \u6765\u6ce8\u518c\u914d\u7f6e\u5bf9\u8c61"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7ed1\u5b9a\u5c5e\u6027\u540d",children:"\u7ed1\u5b9a\u5c5e\u6027\u540d"}),"\n",(0,i.jsx)(e.p,{children:"\u8fdb\u884c\u7ed1\u5b9a\u7684\u5c5e\u6027\u540d\u76f8\u5bf9\u5bbd\u5bb9"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5c5e\u6027\u540d\u683c\u5f0f"}),(0,i.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"person.firstName"}),(0,i.jsx)(e.td,{children:"\u6807\u51c6\u9a7c\u5cf0\u8bed\u6cd5"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"person.first-name"}),(0,i.jsx)(e.td,{children:"\u6a2a\u7ebf\u5206\u9694, \u63a8\u8350\u5728 .properties \u548c .yml \u4e2d\u4f7f\u7528"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"PERSON_FIRST_NAME"}),(0,i.jsx)(e.td,{children:"\u5927\u5199\u683c\u5f0f, \u63a8\u8350\u5728\u7cfb\u7edf\u53d8\u91cf\u4f7f\u7528"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u65e5\u5fd7\u914d\u7f6e",children:"\u65e5\u5fd7\u914d\u7f6e"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Spring Environment"}),(0,i.jsx)(e.th,{children:"System Property"}),(0,i.jsx)(e.th,{children:"Comments"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"logging.exception-conversion-word"}),(0,i.jsx)(e.td,{children:"LOG_EXCEPTION_CONVERSION_WORD"}),(0,i.jsx)(e.td,{children:"The conversion word that\u2019s used when logging exceptions."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"logging.file"}),(0,i.jsx)(e.td,{children:"LOG_FILE"}),(0,i.jsx)(e.td,{children:"\u5982\u679c\u5b9a\u4e49\u4e86\u4f1a\u4f5c\u4e3a\u9ed8\u8ba4\u65e5\u5fd7\u914d\u7f6e"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"logging.path"}),(0,i.jsx)(e.td,{children:"LOG_PATH"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"logging.pattern.console"}),(0,i.jsx)(e.td,{children:"CONSOLE_LOG_PATTERN"}),(0,i.jsx)(e.td,{children:"\u63a7\u5236\u53f0(stdout)\u8f93\u51fa\u7684\u65e5\u5fd7\u683c\u5f0f(\u4e0d\u652f\u6301 JDK logger)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"logging.pattern.file"}),(0,i.jsx)(e.td,{children:"FILE_LOG_PATTERN"}),(0,i.jsx)(e.td,{children:"\u8f93\u51fa\u5230\u6587\u4ef6\u7684\u65e5\u5fd7\u683c\u5f0f"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"logging.pattern.level"}),(0,i.jsx)(e.td,{children:"LOG_LEVEL_PATTERN"}),(0,i.jsx)(e.td,{children:"\u8f93\u51fa\u65e5\u5fd7\u7b49\u7ea7\u7684\u683c\u5f0f(\u9ed8\u8ba4 %5p)(logging.pattern.level \u652f\u6301\u76f4 Logback)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"PID"}),(0,i.jsx)(e.td,{children:"PID"}),(0,i.jsx)(e.td,{})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u5e38\u7528\u914d\u7f6e",children:"\u5e38\u7528\u914d\u7f6e"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yaml",children:"# \u65e5\u5fd7\u914d\u7f6e\nlogging.level.root: INFO\nlogging.level.org.springframework.web: DEBUG\nlogging.level.org.hibernate: ERROR\n\n# \u542f\u7528 h2 \u63a7\u5236\u53f0\nspring.h2.console.enabled: true\n# \u4fee\u6539\u63a7\u5236\u53f0\u8def\u5f84,\u9ed8\u8ba4 /h2-console\nspring.h2.console.path: /h2-console\n\n# \u4fee\u6539 Jackson \u65f6\u95f4\u683c\u5f0f,\u8bbe\u7f6e\u6b63\u786e\u7684\u65f6\u533a\u975e\u5e38\u91cd\u8981,\u5426\u5219\u4f1a\u5bfc\u81f4\u5e8f\u5217\u5316\u7684\u65f6\u95f4\u6709\u65f6\u5dee\nspring:\n  jackson:\n    date-format: yyyy-MM-dd HH:mm:ss\n    locale: zh_CN\n    time-zone: GMT+8\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},3354:(n,e,r)=>{var i=r(50959),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,r){var i,s={},d=null,a=null;for(i in void 0!==r&&(d=""+r),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(a=e.ref),e)t.call(e,i)&&!c.hasOwnProperty(i)&&(s[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps)void 0===s[i]&&(s[i]=e[i]);return{$$typeof:o,type:n,key:d,ref:a,props:s,_owner:l.current}}e.Fragment=s,e.jsx=d,e.jsxs=d},11527:(n,e,r)=>{n.exports=r(3354)},47214:(n,e,r)=>{r.d(e,{Z:()=>l,a:()=>t});var i=r(50959);const o={},s=i.createContext(o);function t(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);