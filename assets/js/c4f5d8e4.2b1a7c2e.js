/*! For license information please see c4f5d8e4.2b1a7c2e.js.LICENSE.txt */
(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64195],{84875:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},27390:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(59496),a=n(84875),l=n.n(a),i=n(42519),s=n(60706),o=n(13133),c=n(68710),m={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i"};const u=[{title:r.createElement(r.Fragment,null,"as a Programmer"),imageUrl:"img/terminal-input-filled.svg",description:r.createElement(r.Fragment,null,"Never stop writing.",r.createElement("br",null),"Languages are alcohol.")},{title:r.createElement(r.Fragment,null,"as a Player"),imageUrl:"img/nintendo-switch-frame.svg",description:r.createElement(r.Fragment,null,"Never stop playing",r.createElement("br",null),"If not fun, why bother?")},{title:r.createElement(r.Fragment,null,"as a Man"),imageUrl:"img/wener-logo-head.svg",description:r.createElement(r.Fragment,null,"Just give all my love to them.")}];var g=function(){const e=(0,o.Z)(),{siteConfig:t={}}=e;return r.createElement(i.Z,{title:`Hello from ${t.title}`,description:"Wener's story site"},r.createElement("header",{className:l()("hero hero--primary",m.heroBanner)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},t.title),r.createElement("p",{className:"hero__subtitle"},t.tagline),r.createElement("div",{className:m.buttons},r.createElement(s.Z,{className:l()("button button--outline button--secondary button--lg",m.getStarted),to:(0,c.Z)("story/wener-is-my-name")},"Get to know me")))),r.createElement("main",null,u&&u.length&&r.createElement("section",{className:m.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},u.map((({imageUrl:e,title:t,description:n},a)=>r.createElement("div",{key:a,className:l()("col col--4",m.feature)},e&&r.createElement("div",{className:"text--center"},r.createElement("img",{className:m.featureImage,src:(0,c.Z)(e),alt:t})),r.createElement("h3",null,t),r.createElement("p",null,n)))))))))}}}]);