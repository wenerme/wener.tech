"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75842],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64293:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(96600),a=n(27279),i=(n(59496),n(49613)),l=["components"],o={id:"data-rest",title:"Spring Data REST"},s="Spring Data REST",p={unversionedId:"java/spring/data-rest",id:"java/spring/data-rest",title:"Spring Data REST",description:"Tips",source:"@site/../notes/java/spring/spring-data-rest.md",sourceDirName:"java/spring",slug:"/java/spring/data-rest",permalink:"/notes/java/spring/data-rest",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/java/spring/spring-data-rest.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"data-rest",title:"Spring Data REST"},sidebar:"docs",previous:{title:"Spring Cloud",permalink:"/notes/java/spring/cloud"},next:{title:"Spring Data",permalink:"/notes/java/spring/data"}},u={},c=[{value:"Tips",id:"tips",level:2},{value:"NOTES",id:"notes",level:2},{value:"HATEOAS",id:"hateoas",level:2},{value:"\u5982\u4f55\u5b9e\u73b0\u52a8\u6001\u6620\u5c04 ?",id:"\u5982\u4f55\u5b9e\u73b0\u52a8\u6001\u6620\u5c04-",level:2},{value:"\u4f7f\u7528\u865a\u62df\u6620\u5c04\u5b57\u6bb5",id:"\u4f7f\u7528\u865a\u62df\u6620\u5c04\u5b57\u6bb5",level:2},{value:"\u8986\u76d6\u5904\u7406\u65b9\u6cd5",id:"\u8986\u76d6\u5904\u7406\u65b9\u6cd5",level:2},{value:"\u81ea\u5b9a\u4e49\u5b9e\u4f53\u5904\u7406",id:"\u81ea\u5b9a\u4e49\u5b9e\u4f53\u5904\u7406",level:2},{value:"\u6dfb\u52a0 Spring Data REST \u5230\u73b0\u6709 Spring MVC \u9879\u76ee",id:"\u6dfb\u52a0-spring-data-rest-\u5230\u73b0\u6709-spring-mvc-\u9879\u76ee",level:2},{value:"\u81ea\u5b9a\u4e49\u8d44\u6e90\u7c7b\u578b\u5904\u7406",id:"\u81ea\u5b9a\u4e49\u8d44\u6e90\u7c7b\u578b\u5904\u7406",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spring-data-rest"},"Spring Data REST"),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://docs.spring.io/spring-hateoas/docs/current/reference/html/"},"Spring HATEOAS \u6587\u6863")),(0,i.kt)("li",{parentName:"ul"},"\u5355\u4e2a Item \u4f1a\u4f7f\u7528 E-Tag \u505a\u7f13\u5b58")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class SpringDataRestCustomization extends RepositoryRestConfigurerAdapter {\n\n  @Override\n  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {\n\n    config.withEntityLookup().\n      // \u4fee\u6539 URL \u8def\u5f84\u4e0a\u7684 ID \u5c5e\u6027\n      forRepository(UserRepository.class, User::getUsername, UserRepository::findByUsername);\n  }\n}\n")),(0,i.kt)("h2",{id:"notes"},"NOTES"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExcerptProjection"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7247\u6bb5\u6620\u5c04"),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u9488\u5bf9\u96c6\u5408\u6709\u6548"),(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u989d\u5916\u5b57\u6bb5"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RepositoryRestConfigurer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Spring Data WebMVC \u7684\u914d\u7f6e\u63a5\u53e3"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RepositoryEntityController"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"WebMVC \u5165\u53e3"))),(0,i.kt)("li",{parentName:"ul"},"RestMediaTypes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"application/hal+json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"application/x-spring-data-compact+json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text/uri-list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"application/json-patch+json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"application/merge-patch+json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"application/alps+json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"application/schema+json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"application/x-spring-data-verbose+json")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BackendIdConverter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e URL \u4e0a id \u751f\u6210\u65b9\u5f0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@BackendId")," \u53ef\u7528\u4e8e\u6ce8\u89e3\u8be5\u914d\u7f6e"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ResourceAssembler"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u6784\u5efa\u8d44\u6e90"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PersistentEntityResourceAssembler")," : ResourceAssembler<Object, PersistentEntityResource>",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5c06\u4efb\u610f\u5bf9\u8c61\u8f6c\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"PersistentEntityResource")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PersistentEntityJackson2Module"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"PersistentEntityResource \u5e8f\u5217\u5316\u6a21\u5757"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AssociationOmittingSerializerModifier"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5c06\u5173\u8054\u5b57\u6bb5\u79fb\u9664"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u6539\u52a8\u6001\u4fee\u6539, \u56e0\u4e3a\u5e8f\u5217\u5316\u5668\u6784\u5efa\u6210\u529f\u540e\u4f1a\u7f13\u5b58")))))),(0,i.kt)("h2",{id:"hateoas"},"HATEOAS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Resources"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8868\u793a\u4e00\u7ec4\u8d44\u6e90\u5185\u5bb9"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ResourceProcessor<T extends ResourceSupport>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u9884\u5904\u7406\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ResourceProcessorInvoker"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u8c03\u7528\u65b9\u6cd5")))))),(0,i.kt)("h2",{id:"\u5982\u4f55\u5b9e\u73b0\u52a8\u6001\u6620\u5c04-"},"\u5982\u4f55\u5b9e\u73b0\u52a8\u6001\u6620\u5c04 ?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u901a\u8fc7\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"li"},"select=id,name,parent(id,name)")," \u6765\u786e\u5b9a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PersistentEntityResourceAssemblerArgumentResolver")," \u5b9e\u73b0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"PersistentEntityResourceAssembler")," \u7684\u6ce8\u5165"),(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u5165\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"PersistentEntityProjector")," \u662f\u6839\u636e\u53c2\u6570\u4e2d\u7684 projection \u6765\u521b\u5efa\u7684"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectionDefinitions")," \u62ff\u5230\u6620\u5c04\u7c7b"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectionFactory")," \u521b\u5efa\u6620\u5c04, \u6620\u5c04\u7684\u6700\u7ec8\u7ed3\u679c\u5c31\u662f\u6620\u5c04\u540e\u7684\u5185\u5bb9"),(0,i.kt)("li",{parentName:"ul"},"\u6620\u5c04\u540e\u7684\u5185\u5bb9\u88ab\u5c01\u88c5\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"PersistentEntityResource"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5305\u542b Link ,Embededs, Content, Entity"))),(0,i.kt)("li",{parentName:"ul"},"Spel \u7684\u6620\u5c04\u662f\u901a\u8fc7\u65b9\u6cd5\u62e6\u622a\u5b9e\u73b0\u7684"),(0,i.kt)("li",{parentName:"ul"},"TODO")),(0,i.kt)("h2",{id:"\u4f7f\u7528\u865a\u62df\u6620\u5c04\u5b57\u6bb5"},"\u4f7f\u7528\u865a\u62df\u6620\u5c04\u5b57\u6bb5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Projection(name = "virtual", types = { Person.class })\npublic interface VirtualProjection {\n  @Value("#{target.firstName} #{target.lastName}")\n  String getFullName();\n}\n')),(0,i.kt)("h2",{id:"\u8986\u76d6\u5904\u7406\u65b9\u6cd5"},"\u8986\u76d6\u5904\u7406\u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@RepositoryRestController\npublic class ScannerController {\n\n    private final ScannerRepository repository;\n\n    @Autowired\n    public ScannerController(ScannerRepository repo) {\n        repository = repo;\n    }\n\n    @RequestMapping(method = GET, value = "/scanners/search/listProducers")\n    public @ResponseBody ResponseEntity<?> getProducers() {\n        List<String> producers = repository.listProducers();\n\n        //\n        // do some intermediate processing, logging, etc. with the producers\n        //\n\n        Resources<String> resources = new Resources<String>(producers);\n\n        resources.add(linkTo(methodOn(ScannerController.class).getProducers()).withSelfRel());\n\n        // add other links as needed\n\n        return ResponseEntity.ok(resources);\n    }\n\n}\n')),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5b9e\u4f53\u5904\u7406"},"\u81ea\u5b9a\u4e49\u5b9e\u4f53\u5904\u7406"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic ResourceProcessor<Resource<Person>> personProcessor() {\n\n   return new ResourceProcessor<Resource<Person>>() {\n\n     @Override\n     public Resource<Person> process(Resource<Person> resource) {\n\n      resource.add(new Link("http://localhost:8080/people", "added-link"));\n      return resource;\n     }\n   };\n}\n')),(0,i.kt)("h2",{id:"\u6dfb\u52a0-spring-data-rest-\u5230\u73b0\u6709-spring-mvc-\u9879\u76ee"},"\u6dfb\u52a0 Spring Data REST \u5230\u73b0\u6709 Spring MVC \u9879\u76ee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import org.springframework.context.annotation.Import;\nimport org.springframework.data.rest.webmvc.RepositoryRestMvcConfiguration;\n\n@Configuration\n@Import(RepositoryRestMvcConfiguration.class)\npublic class MyApplicationConfiguration {\n  \u2026\n}\n")),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u8d44\u6e90\u7c7b\u578b\u5904\u7406"},"\u81ea\u5b9a\u4e49\u8d44\u6e90\u7c7b\u578b\u5904\u7406"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Controller\n@ExposesResourceFor(Order.class)\n@RequestMapping("/orders")\nclass OrderController {\n\n  @RequestMapping\n  ResponseEntity orders(\u2026) { \u2026 }\n\n  @RequestMapping("/{id}")\n  ResponseEntity order(@PathVariable("id") \u2026 ) { \u2026 }\n}\n')))}d.isMDXComponent=!0}}]);