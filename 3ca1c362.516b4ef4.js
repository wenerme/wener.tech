(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{1169:function(n,t,e){"use strict";e.d(t,"a",(function(){return b})),e.d(t,"b",(function(){return d}));var r=e(0),o=e.n(r);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function i(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var l=o.a.createContext({}),s=function(n){var t=o.a.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):c(c({},t),n)),e},b=function(n){var t=s(n.components);return o.a.createElement(l.Provider,{value:t},n.children)},g={inlineCode:"code",wrapper:function(n){var t=n.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(n,t){var e=n.components,r=n.mdxType,a=n.originalType,p=n.parentName,l=i(n,["components","mdxType","originalType","parentName"]),b=s(e),u=r,d=b["".concat(p,".").concat(u)]||b[u]||g[u]||a;return e?o.a.createElement(d,c(c({ref:t},l),{},{components:e})):o.a.createElement(d,c({ref:t},l))}));function d(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var a=e.length,p=new Array(a);p[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=n,c.mdxType="string"==typeof n?n:r,p[1]=c;for(var l=2;l<a;l++)p[l]=e[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,e)}u.displayName="MDXCreateElement"},332:function(n,t,e){"use strict";e.r(t),e.d(t,"frontMatter",(function(){return p})),e.d(t,"metadata",(function(){return c})),e.d(t,"toc",(function(){return i})),e.d(t,"default",(function(){return s}));var r=e(3),o=e(8),a=(e(0),e(1169)),p={slug:"getopt-h-tips",title:"\u6982\u8ff0 getopt.h \u7684\u4f7f\u7528",tags:["C","\u7f16\u7a0b","\u5e93"],date:new Date("2012-02-23T00:00:00.000Z"),type:"post"},c={permalink:"/story/getopt-h-tips",editUrl:"https://github.com/wenerme/wener/edit/master/story/2012/2012-02-23-\u6982\u8ff0getopt.h\u7684\u4f7f\u7528.md",source:"@site/story/2012/2012-02-23-\u6982\u8ff0getopt.h\u7684\u4f7f\u7528.md",description:"\u6982\u8ff0",date:"2012-02-23T00:00:00.000Z",tags:[{label:"C",permalink:"/story/tags/c"},{label:"\u7f16\u7a0b",permalink:"/story/tags/\u7f16\u7a0b"},{label:"\u5e93",permalink:"/story/tags/\u5e93"}],title:"\u6982\u8ff0 getopt.h \u7684\u4f7f\u7528",readingTime:2.755,truncated:!0,prevItem:{title:"\u6211\u7684\u7b2c\u4e00\u4e2aVB.Net\u7a0b\u5e8f",permalink:"/story/first-vb-prog"},nextItem:{title:"\u68a6\u5e7b\u897f\u6e38\u7248\u4e2a\u4eba\u7b80\u4ecb PPT",permalink:"/story/fwj-resume"}},i=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"\u53c2\u6570\u4f20\u9012\u6807\u51c6",id:"\u53c2\u6570\u4f20\u9012\u6807\u51c6",children:[]}],l={toc:i};function s(n){var t=n.components,e=Object(o.a)(n,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,e,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),Object(a.b)("p",null,"c\u8bed\u8a00\u63a7\u5236\u53f0\u7f16\u7a0b\u65f6\uff0c\u7ecf\u5e38\u90fd\u8981\u63a5\u53d7\u547d\u4ee4\u884c\u4f20\u9012\u6765\u7684\u9009\u9879\uff0c\u800cgetopt\u662f\u4e13\u95e8\u7528\u6765\u89e3\u6790\u547d\u4ee4\u884c\u9009\u9879\u7684\u4e00\u5957\u51fd\u6570\u3002"),Object(a.b)("p",null,"\u7b80\u5355\u7684\u8bf4\u4e00\u4e0bgetopt\uff0c\u5979\u5df2\u7ecf\u6709\u76f8\u5f53\u957f\u7684\u5386\u53f2\u4e86\uff0c\u65e9\u671f\u662f\u5728Unix\u4e2d\u4f7f\u7528\uff0c\u73b0\u5728\u5df2\u7ecf\u79fb\u690d\u5230\u4e86\u4e2a\u4e2a\u4e0d\u540c\u7684\u8bed\u8a00\uff08Shell,Java,Php,.NET...\uff09\uff0c\u4e3a\u63a5\u53d7\u547d\u4ee4\u884c\u9009\u9879\u63d0\u4f9b\u4e86\u5f88\u5927\u7684\u4fbf\u5229\u3002\u540c\u65f6\u4e5f\u6307\u5b9a\u4e86\u4e00\u5957\u4f20\u9012\u9009\u9879\u548c\u53c2\u6570\u7684\u6807\u51c6\u3002"),Object(a.b)("h2",{id:"\u53c2\u6570\u4f20\u9012\u6807\u51c6"},"\u53c2\u6570\u4f20\u9012\u6807\u51c6"),Object(a.b)("p",null,"\u5982\u4eca\u7684\u9009\u9879\u6709\u4e24\u79cd\u6a21\u5f0f\uff0c\u77ed\u9009\u9879\u548c\u957f\u9009\u9879\uff0c\u9009\u9879\u53c8\u5206\u4e3a\u5e26\u53c2\u6570\u548c\u4e0d\u5e26\u53c2\u6570\u3002"),Object(a.b)("p",null,"\u6bd4\u5982\uff1a"),Object(a.b)("p",null,"gcc -V \u662f\u77ed\u9009\u9879\uff0c\u4e14\u4e0d\u5e26\u53c2\u6570"),Object(a.b)("p",null,"gcc --version \u662f\u957f\u9009\u9879\uff0c\u4e0d\u5e26\u53c2\u6570\u3002\u4e0egcc -V\u76f8\u540c"),Object(a.b)("p",null,"gcc -o exc \u662f\u77ed\u9009\u9879 \u5e26\u53c2\u6570\uff0c\u4e0egcc --output exc\u76f8\u540c"),Object(a.b)("p",null,"\u800c\u591a\u4e2a\u77ed\u9009\u9879\u53ef\u76f4\u63a5\u8fde\u63a5\uff0c\u4f8b\u5982gcc -so FILE \u4e0e gcc -s -o FILE\u76f8\u540c"),Object(a.b)("p",null,"\u77ed\u9009\u9879\u7684\u53c2\u6570\u53ef\u76f4\u63a5\u7d27\u63a5\u5728\u5176\u540e,\u4f8b\u5982gcc -oFILE = gcc -oFILE"),Object(a.b)("p",null,"\u957f\u9009\u9879\u7684\u53c2\u6570\u53ef\u4ee5\u4ee5\u7a7a\u683c\u5206\u9694\u6216\u8005=\u5206\u9694\uff0c\u4f8b\u5982 gcc --output FILE = gcc --output=FILE"),Object(a.b)("h1",null,"\u5b9e\u73b0"),"getopt\u4e2d\u7684\u5185\u5bb9\uff1a",Object(a.b)("p",null,"\u5177\u4f53\u8bb2\u89e3\u5728\u5b9e\u4f8b\u4e2d\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},'/* \u5df2\u5b9a\u4e49\u7684\u53d8\u91cf */\n\nint opterr\nint optopt\nint optind\nchar *optarg\n\n/* \u5df2\u5b9a\u4e49\u7684\u51fd\u6570 */\n/*  */\nint getopt (int argc, char **argv, const char *options)\nint getopt_long (int argc, char *const *argv, const char *shortopts, const struct option *longopts, int *indexptr)\n\nint getopt_long_only (int argc, char *const *argv, const char *shortopts, const struct option *longopts, int *indexptr)\n\n/* \u6570\u636e\u7c7b\u578b */\nstruct option</code>\n\n\u5b9e\u4f8b1.\u5b9e\u73b0\u77ed\u53c2\u6570\n\n<code lang="c[lines]">\n#include <ctype .h>\n#include <stdio .h>\n#include <stdlib .h>\n/* getopt\u65f6\u5fc5\u987b\u5305\u542b unistd\u5934\u6587\u4ef6 */\n#include <unistd .h>\n\nint main (int argc, char **argv)\n{\n    int index;\n    int c;\n\n    opterr = 0;\n /* getopt \u7528\u6765\u89e3\u6790\u77ed\u9009\u9879\uff0c\u7b2c\u4e00\u4e8c\u4e2a\u53c2\u6570\u57fa\u672c\u90fd\u662f\u76f8\u540c\u7684 */\n /* \u7b2c\u4e09\u4e2a\u9009\u9879\u4f20\u5165\u80fd\u63a5\u53d7\u7684\u53c2\u6570,\':\'\u4ee3\u8868\u9700\u8981\u503c \'::\'\u4ee3\u8868\u503c\u4e3a\u53ef\u9009*/\n /* \u5982\u679c\u4f20\u5165\u4e86\u503c\uff0c\u5176\u503c\u4fdd\u5b58\u5728optarg\u5f53\u4e2d\uff0c\u5f53\u5176\u503c\u4e3a\u5fc5\u987b\u662f\uff0c\u82e5\u6ca1\u6709\u4f20\u5165\u503c\u5219\u4f1a\u62a5\u9519 \u7f3a\u5c11\u503c */\n /* getopt\u8fd4\u56de\u5339\u914d\u7684\u9009\u9879&nbsp;\u4f8b\u5982a/b/c */\n /* \u672a\u5339\u914d\u503c\u65f6\u8fd4\u56de\uff1f \u89e3\u6790\u5b8c\u65f6\uff0c\u4f1a\u8fd4\u56de-1 \u8df3\u51fa */\n    while ((c = getopt (argc, argv, "abc:")) != -1)\n        switch (c)\n        {\n        case \'a\':\n            printf("\u68c0\u6d4b\u5230-a\u9009\u9879\\n");\n            break;\n        case \'b\':\n            printf("\u68c0\u6d4b\u5230-b\u9009\u9879\\n");\n            break;\n        case \'c\':\n            printf("\u68c0\u6d4b\u5230-c\u9009\u9879\uff0c\u5176\u53c2\u6570\u4e3a\uff1a%s\\n", optarg);\n            break;\n        /* \u7528\u6765\u68c0\u6d4b\u5176\u4ed6\u610f\u5916\u7684\u503c */\n        case \'?\':\n         /* optopt\u4e3a\u5728\u6ca1\u6709\u5339\u914d\u4efb\u4f55\u9009\u9879\u65f6\uff0c\u4fdd\u5b58\u7684\u9009\u9879\u503c */\n         /* \u4f8b\u5982-n\uff0c\u6ca1\u6709\u4e0e\u4e0a\u9762\u5339\u914d\uff0c\u5219\u6b64\u65f6optopt=c */\n            if (optopt == \'c\')\n                fprintf (stderr, "\u9009\u9879 -%c \u9700\u8981\u4e00\u4e2a\u53c2\u6570.\\n", optopt);\n            else if (isprint (optopt))\n                fprintf (stderr, "`-%c\'\u672a\u5b9a\u4e49\\n", optopt);\n            else\n                fprintf (stderr,\n                         " `\\\\x%x\' \u672a\u5b9a\u4e49\\n",\n                         optopt);\n            return 1;\n        default:\n            abort ();\n        }\n /*\n \u6700\u540e\u68c0\u6d4b\u547d\u4ee4\u884c\u7ed9\u7684\u9009\u9879\u662f\u5426\u5df2\u7ecf\u89e3\u6790\u5b8c\n  optind\u662f\u5f53\u524d\u89e3\u6790\u5230\u9009\u9879\u7684\u7d22\u5f15\n  \u5224\u65ad\u4f9d\u636e\u662f\u5982\u679c\u89e3\u6790\u7684\u4e2a\u6570\u5c0f\u4e8eargc\uff0c\u90a3\u4e48\u5c31\u662f\u6ca1\u6709\u89e3\u6790\u5b8c\n */\n    for (index = optind; index < argc; index++)\n        printf ("\u672a\u5b9a\u4e49\u7684\u53c2\u6570\uff1a %s\\n", argv[index]);\n    return 0;\n}\n')),Object(a.b)("p",null,"\u5b9e\u4f8b2.\u5b9e\u73b0\u957f\u9009\u9879"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},'#include <stdio .h>\n#include <stdlib .h>\n/* \u4f7f\u7528getopt_long\u65f6\u4e0d\u9700\u8981unistd*/\n#include <getopt .h>\n\n/* \u7528\u6765\u4f5c\u4e3a\u4e00\u4e2a\u6807\u5fd7\u7684\u503c. */\nstatic int verbose_flag;\n\nint\nmain (argc, argv)\nint argc;\nchar **argv;\n{\n    int c;\n\n    while (1)\n    {\n     /*\n \u7ed3\u6784\u8bf4\u660e\n  struct option {\n const char *name; //\u5339\u914d\u7684\u957f\u9009\u9879\u540d\n int  has_arg; //\u6307\u5b9a\u53c2\u6570\u9009\u9879no_argument required_argument optional_argument\n  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;// \u65e0\u503c \u503c\u5fc5\u987b \u503c\u53ef\u9009\n int *flag; //\u6807\u5fd7\u4f4d,\u6570\u636e\u7c7b\u578b\u4e3a int*\n int val; //\u503c\uff0c\u6807\u5fd7\u4f4d\u4e0d\u4e3a0\u65f6\uff0c\u5982\u679c\u8be5\u9009\u9879\u6307\u5b9a\uff0c\u90a3\u4e48flag=val \u6b64\u65f6val\u4e0d\u53ef\u4f5c\u4e3acase\u503c\n //\u5426\u5219val\u53ef\u4ee5\u4f5c\u4e3a\u77ed\u9009\u9879 \u4e5f\u5c31\u76f8\u5f53\u4e8ecase\n };\n */\n        static struct option long_options[] =\n        {\n            /* \u5982\u679c\u6307\u5b9a\u4e86-verbose \u90a3\u4e48verbose_flag = 1*/\n            {"verbose", no_argument,       &verbose_flag, 1},\n            /* \u5982\u679c\u6307\u5b9a\u4e86-brief \u90a3\u4e48verbose_flag = 0*/\n            {"brief",   no_argument,       &verbose_flag, 0},\n            /* --add = -a \u4e0d\u5e26\u53c2\u6570*/\n            {"add",     no_argument,       0, \'a\'},\n            {"append",  no_argument,       0, \'b\'},\n            /* --delete=XX = -dXX \u5e26\u53c2\u6570*/\n            {"delete",  required_argument, 0, \'d\'},\n            {"create",  required_argument, 0, \'c\'},\n            {"file",    required_argument, 0, \'f\'},\n            /* \u5f88\u660e\u663e5438\u4e0d\u53ef\u80fd\u7528\u4e00\u4e2aANSCI\u8868\u793a\u51fa\u6765\uff0c\u90a3\u4e48\u8fd9\u4e2a\u53ef\u4ee5\u76f4\u63a5\u7528case\u5c31\u53ef\u4ee5*/\n            {"a_very_long_arg",    no_argument, 0, 5438},\n            /* \u6700\u540e\u4e3a\u7a7a\u503c\uff0c\u6765\u6807\u8bc6\u7ed3\u675f */\n            {0, 0, 0, 0}\n        };\n        /* \u56e0\u4e3a\u6ca1\u6709\u4e86optind\uff0c\u90a3\u4e48\u5c31\u8981\u7528\u4e00\u4e2a\u503c\u6765\u5b58\u50a8\u5f53\u524d\u7d22\u5f15 */\n        int option_index = 0;\n\n /* \u524d\u4e09\u4e2a\u53c2\u6570\u4e0egetopt\u76f8\u540c\uff0c\u7b2c\u56db\u4e2a\u4e3aoption\uff0c\u7b2c\u4e94\u4e2a\u4e3a\u5b58\u7d22\u5f15int\u7684\u6307\u9488*/\n        c = getopt_long (argc, argv, "abc:d:f:",\n                         long_options, &option_index);\n\n        /* \u5f53\u89e3\u6790\u5b8c\u8fd4\u56de-1 \u8df3\u51fa\u5faa\u73af */\n        if (c == -1)\n            break;\n\n        switch (c)\n        {\n        case 0:\n            /* \u5f53 flag\u4e0d\u4e3a0\u65f6\uff0c\u9047\u5230\u90a3\u4e9b\u9009\u9879 getopt_long\u8fd4\u56de0*/\n            if (long_options[option_index].flag != 0)\n                break;\n            printf ("\u9009\u9879 %s", long_options[option_index].name);\n            if (optarg)\n                printf (" \u503c %s", optarg);\n            printf ("\\n");\n            break;\n\n        case \'a\':\n            puts ("\u9009\u9879 -a\\n");\n            break;\n\n        case \'b\':\n            puts ("\u9009\u9879 -b\\n");\n            break;\n        //\u957f\u9009\u9879\n        case 5438:\n            puts ("\u9009\u9879 --a_very_long_arg\\n");\n            break;\n            break;\n        case \'c\':\n            printf ("\u9009\u9879 -c \u503c\u4e3a `%s\'\\n", optarg);\n            break;\n\n        case \'d\':\n            printf ("\u9009\u9879 -d \u503c\u4e3a `%s\'\\n", optarg);\n            break;\n\n        case \'f\':\n            printf ("\u9009\u9879 -f \u503c\u4e3a `%s\'\\n", optarg);\n            break;\n\n        case \'?\':\n            /* getopt_long \u4f1a\u81ea\u52a8\u8f93\u51fa\u9519\u8bef\uff0c\u4e0d\u50cfgetopt\u9700\u8981\u81ea\u5df1\u68c0\u6d4b */\n            break;\n\n        default:\n            abort ();\n        }\n    }\n\n    /* \u68c0\u6d4b\u662f\u5426\u8bbe\u7f6e\u4e86\u6807\u5fd7\u4f4d */\n    if (verbose_flag)\n        puts ("verbose \u6807\u5fd7\u5df2\u88ab\u8bbe\u7f6e");\n\n    /* \u8f93\u5165\u672a\u89e3\u6790\u5b8c\u7684\u9009\u9879. */\n    if (optind < argc)\n    {\n        printf ("\u65e0\u6548\u9009\u9879\uff1a ");\n        while (optind < argc)\n            printf ("%s ", argv[optind++]);\n        putchar (\'\\n\');\n    }\n\n    exit (0);\n}\n')),Object(a.b)("p",null,"\u5b9e\u4f8b3.",Object(a.b)("strong",null,"getopt_long_only")),Object(a.b)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u7684\u53c2\u6570\u548cgetopt_long\u76f8\u540c\uff0c\u53ea\u662f\u63a5\u53d7\u957f\u53c2\u6570\u65f6\uff0c\u53ef\u4ee5\u53ea\u7528\u4e00\u4e2a'-'\u6765\u66ff\u4ee3'--'\u3002\u5f53-xx\u6ca1\u6709\u68c0\u6d4b\u5230xx\u7684\u957f\u53c2\u6570\u65f6\u4f1a\u68c0\u6d4b-x\u77ed\u53c2\u6570\u3002"),Object(a.b)("p",null,"\u540c\u65f6'--'\u4e5f\u80fd\u591f\u4f7f\u7528,\u4e5f\u5c31\u662f\u8bf4-xx=--xx"),Object(a.b)("h1",null,"\u7ed3\u5c3e"),"\u4e0d\u5f97\u4e0d\u8bf4\uff0cgetopt\u662f\u4e00\u4e2a\u5f88\u5b9e\u7528\u7684\u5de5\u5177\uff0c\u5bf9\u4e8e\u7f16\u7a0b\u80fd\u63d0\u4f9b\u5f88\u591a\u7684\u4fbf\u5229\u3002gnu\u4e5f\u6709\u5f00\u6e90\u7684\u5b9e\u73b0\u5728gnulib\u548clibc\u4e2d\u3002",Object(a.b)("p",null,"\u53c2\u8003\uff1a"),Object(a.b)("p",null,"GNU Libc\u624b\u518c\uff1a",Object(a.b)("a",{href:"http://www.gnu.org/software/libc/manual/html_node/Getopt.html#Getopt"},Object(a.b)("a",{parentName:"p",href:"http://www.gnu.org/software/libc/manual/html_node/Getopt.html#Getopt"},"http://www.gnu.org/software/libc/manual/html_node/Getopt.html#Getopt"))),Object(a.b)("p",null,"Getopt\u82f1\u6587\u7ef4\u57fa\u9875\u9762\uff1a",Object(a.b)("a",{href:"http://en.wikipedia.org/wiki/Getopt"},Object(a.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Getopt"},"http://en.wikipedia.org/wiki/Getopt"))))}s.isMDXComponent=!0}}]);