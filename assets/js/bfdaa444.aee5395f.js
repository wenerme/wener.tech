"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67636],{49613:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var a=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||r;return t?a.createElement(d,o(o({ref:n},m),{},{components:t})):a.createElement(d,o({ref:n},m))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},62261:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=t(96600),i=t(27279),r=(t(59496),t(49613)),o=["components"],l={title:"TinaCMS"},s="TinaCMS",c={unversionedId:"web/editor/tinacms",id:"web/editor/tinacms",title:"TinaCMS",description:"\u5728 Web \u4e0a\u6dfb\u52a0\u5c5e\u6027\u7f16\u8f91\u529f\u80fd\u3002",source:"@site/../notes/web/editor/tinacms.md",sourceDirName:"web/editor",slug:"/web/editor/tinacms",permalink:"/notes/web/editor/tinacms",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/editor/tinacms.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1653992153,formattedLastUpdatedAt:"May 31, 2022",frontMatter:{title:"TinaCMS"},sidebar:"docs",previous:{title:"react-page",permalink:"/notes/web/editor/react-page"},next:{title:"Tiptap Extension",permalink:"/notes/web/editor/tiptap-extension"}},m={},u=[{value:"schema",id:"schema",level:2},{value:"next-tinacms-json",id:"next-tinacms-json",level:2}],p={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tinacms"},"TinaCMS"),(0,r.kt)("p",null,"\u5728 Web \u4e0a\u6dfb\u52a0\u5c5e\u6027\u7f16\u8f91\u529f\u80fd\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tinacms/tinacms"},"tinacms/tinacms"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4e3b\u8981\u96c6\u6210 next \u548c gatsby"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u7aef\u4ea4\u4e92\u76ee\u524d\u4ee5 git \u4e3a\u4e3b"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u540e\u7aef\u53ef\u53c2\u7167 next \u7684 local json \u65b9\u5f0f")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u867d\u7136\u540d\u5b57\u662f tinacms \u4f46\u66f4\u504f\u5411\u7f16\u8f91\u5668 - Contextual Editing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6a21\u578b -formify->\u8868\u5355<->API"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Git \u7684 CMS - \u4f46\u4e2a\u4eba\u8ba4\u4e3a\u5176\u7f16\u8f91\u529f\u80fd\u66f4\u6709\u610f\u601d"),(0,r.kt)("li",{parentName:"ul"},"Git \u540e\u7aef\u751f\u6210 GraphQL API"))),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 final-form \u6784\u5efa form"))),(0,r.kt)("h2",{id:"schema"},"schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tina Content API"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tinacms/tinacms/blob/37ee94fb30bcbcc38c2ebf84ccbd3eb7e7485016/packages/tinacms/src/index.ts#L47-L50"},"defineSchema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tinacms/tinacms/blob/37ee94fb30bcbcc38c2ebf84ccbd3eb7e7485016/packages/@tinacms/schema-tools/src/types/SchemaTypes.ts"},"@tinacms/schema-tools/src/types/SchemaTypes.ts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tinacms/tinacms/blob/37ee94fb30bcbcc38c2ebf84ccbd3eb7e7485016/packages/@tinacms/schema-tools/src/schema/TinaSchema.ts"},"@tinacms/schema-tools/src/schema/TinaSchema.ts"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".tina/schema.ts"',title:'".tina/schema.ts"'},"import { defineSchema } from 'tinacms';\n\nconst schema = defineSchema({\n  // entity\n  collections: [\n    {\n      label: 'Blog Posts',\n      name: 'post',\n      path: 'content/posts',\n      fields: [\n        {\n          // scalar - string, datetime, boolean, image, number\n          // nonscalar - object, reference, rich-text, image\n          type: 'string',\n\n          // string\n          isBody: false,\n          isTitle: true,\n\n          // datetime\n          dateFormat: '',\n          timeFormat: '',\n\n          // reference\n          reverseLookup: { label: '', name: '' },\n          collections: [],\n\n          // object\n          visualSelector: false,\n          templates: '',\n          fields: [],\n\n          // \u57fa\u7840\u5b57\u6bb5\n          label: 'Title',\n          name: 'title',\n          required: true,\n          description: '',\n          list: false,\n\n          ui: {\n            defaultValue: 'A new title', // \u5b9a\u4e49\u9ed8\u8ba4\u503c\n            component: 'textarea', // \u5b9a\u4e49 UI \u7ec4\u4ef6\n          },\n        },\n        {\n          type: 'string',\n          label: 'Post Body',\n          name: 'body',\n          // markdown body\n          isBody: true,\n        },\n        {\n          label: 'Tags',\n          name: 'tags',\n          type: 'string',\n          // array\n          list: true,\n        },\n        {\n          label: 'Categories',\n          name: 'categories',\n          type: 'string',\n          list: true,\n          // \u9650\u5b9a\u503c\n          options: [\n            {\n              value: 'movies',\n              label: 'Movies',\n            },\n            {\n              value: 'music',\n              label: 'Music',\n            },\n          ],\n        },\n        // \u5d4c\u5957\u5bf9\u8c61\n        {\n          label: 'Testimonial',\n          name: 'testimonial',\n          type: 'object',\n          fields: [\n            {\n              label: 'Quote',\n              name: 'quote',\n              type: 'string',\n              ui: {\n                component: 'textarea',\n              },\n            },\n          ],\n        },\n        {\n          label: 'Author',\n          name: 'author',\n          type: 'reference',\n          collections: ['author'], // \u5f15\u7528\u5df2\u6709 entity\n        },\n      ],\n    },\n  ],\n});\n\nexport default schema;\n")),(0,r.kt)("h2",{id:"next-tinacms-json"},"next-tinacms-json"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u57fa\u4e8e \u672c\u5730 JSON \u63d0\u4f9b\u7f16\u8f91\u6570\u636e\uff0c\u5df2\u5e9f\u5f03\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tinacms/tinacms/tree/master/packages/next-tinacms-json"},"next-tinacms-json")),(0,r.kt)("li",{parentName:"ul"},"useJsonForm"),(0,r.kt)("li",{parentName:"ul"},"useLocalJsonForm"),(0,r.kt)("li",{parentName:"ul"},"useGlobalJsonForm"),(0,r.kt)("li",{parentName:"ul"},"InlineJsonForm: A render-children component"),(0,r.kt)("li",{parentName:"ul"},"inlineJsonForm: A higher-order component"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6 json \u6587\u4ef6\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"next \u5168\u5c40\u521d\u59cb\u5316\u65f6\u5019\u914d\u7f6e json \u6620\u5c04\u5173\u7cfb ",(0,r.kt)("inlineCode",{parentName:"li"},"{fileRelativePath:string,data:any}")),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"useLocalJsonForm")," \u83b7\u53d6\u6620\u5c04\u7684\u6587\u4ef6\u6570\u636e")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export function useLocalJsonForm<T = any>(\n  // \u6587\u4ef6\u6620\u5c04\u5b9a\u4e49\n  jsonFile: JsonFile<T>,\n  options?: Options,\n) {\n  const [values, form] = useJsonForm(jsonFile, options);\n\n  usePlugins(form);\n\n  return [values, form];\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { useCallback } from 'react';\nimport { useWatchFormValues, useForm, useCMS, FormOptions, Field } from 'tinacms';\nimport { generateFields } from './generate-fields';\n\n/**\n * \u8868\u793a git \u5b58\u50a8\u7684\u6587\u4ef6\n */\nexport interface JsonFile<T = any> {\n  fileRelativePath: string;\n  data: T;\n}\n\nexport interface Options {\n  id?: string;\n  label?: string;\n  fields?: Field[];\n  actions?: FormOptions<any>['actions'];\n}\n/**\n * \u521b\u5efa\u4e00\u4e2a\u7f16\u8f91 GIT \u91cc JSON \u7684\u8868\u5355\n */\nexport function useJsonForm<T = any>(jsonFile: JsonFile<T>, options: Options = {}) {\n  const cms = useCMS();\n\n  const id = options.id || jsonFile.fileRelativePath;\n  const label = options.label || jsonFile.fileRelativePath;\n  const fields = options.fields || generateFields(jsonFile);\n  const actions = options.actions || [];\n  // \u521b\u5efa\u8868\u5355\n  const [values, form] = useForm(\n    {\n      id,\n      label,\n      fields,\n      actions,\n      loadInitialValues() {\n        // \u901a\u8fc7 git \u63a5\u53e3\u521d\u59cb\u5316\u6570\u636e\n        return cms.api.git.show(jsonFile.fileRelativePath).then((git: { content: string }) => {\n          const jsonFileInGit = JSON.parse(git.content);\n\n          return jsonFileInGit;\n        });\n      },\n      onSubmit() {\n        // \u901a\u8fc7 git \u63a5\u53e3\u63d0\u4ea4\u6570\u636e - \u7248\u672c\u6982\u5ff5\n        return cms.api.git.commit({\n          files: [jsonFile.fileRelativePath],\n          message: `Commit from Tina: Update ${jsonFile.fileRelativePath}`,\n        });\n      },\n      reset() {\n        // \u91cd\u7f6e\u4fee\u6539\n        return cms.api.git.reset({ files: [id] });\n      },\n    },\n    //\n    { values: jsonFile.data, label },\n  );\n\n  const writeToDisk = useCallback(\n    (formState) => {\n      // \u53d8\u5316\u4fee\u6539\u5230\u6587\u4ef6\n      cms.api.git.writeToDisk({\n        fileRelativePath: jsonFile.fileRelativePath,\n        content: JSON.stringify(formState.values, null, 2),\n      });\n    },\n    [jsonFile.fileRelativePath],\n  );\n  // \u76d1\u542c\u8868\u5355\u53d8\u5316\n  useWatchFormValues(form, writeToDisk);\n\n  return [values || jsonFile.data, form];\n}\n")))}f.isMDXComponent=!0}}]);