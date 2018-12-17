/*! (c) Andrea Giammarchi - ISC */
var HyperHTMLElement=function(t){"use strict";var e={};try{e.WeakMap=WeakMap}catch(t){e.WeakMap=function(t,e){var n=e.defineProperty,r=e.hasOwnProperty,o=i.prototype;return o.delete=function(t){return this.has(t)&&delete t[this._]},o.get=function(t){return this.has(t)?t[this._]:void 0},o.has=function(t){return r.call(t,this._)},o.set=function(t,e){return n(t,this._,{configurable:!0,value:e}),this},i;function i(e){n(this,"_",{value:"_@ungap/weakmap"+t++}),e&&e.forEach(a,this)}function a(t){this.set(t[0],t[1])}}(Math.random(),Object)}var n=e.WeakMap,r={};try{r.WeakSet=WeakSet}catch(t){!function(t,e){var n=o.prototype;function o(){e(this,"_",{value:"_@ungap/weakmap"+t++})}n.add=function(t){return this.has(t)||e(t,this._,{value:!0,configurable:!0}),this},n.has=function(t){return this.hasOwnProperty.call(t,this._)},n.delete=function(t){return this.has(t)&&delete t[this._]},r.WeakSet=o}(Math.random(),Object.defineProperty)}var o=r.WeakSet,i={};try{i.Map=Map}catch(t){i.Map=function(){var t=0,e=[],n=[];return{delete:function(o){var i=r(o);return i&&(e.splice(t,1),n.splice(t,1)),i},get:function(e){return r(e)?n[t]:void 0},has:function(t){return r(t)},set:function(o,i){return n[r(o)?t:e.push(o)-1]=i,this}};function r(n){return-1<(t=e.indexOf(n))}}}var a=i.Map;const s=(t,e,n,r,o,i)=>{if(o-r<2)e.insertBefore(t(n[r],1),i);else{const a=e.ownerDocument.createDocumentFragment();for(;r<o;)a.appendChild(t(n[r++],1));e.insertBefore(a,i)}},l=(t,e)=>t==e,c=t=>t,u=(t,e,n,r,o,i,a)=>{const s=i-o;if(s<1)return-1;for(;n-e>=s;){let s=e,l=o;for(;s<n&&l<i&&a(t[s],r[l]);)s++,l++;if(l===i)return e;e=s+1}return-1},h=(t,e,n,r,o)=>n<r?t(e[n],0):0<n?t(e[n-1],-0).nextSibling:o,f=(t,e,n,r,o)=>{if(o-r<2)e.removeChild(t(n[r],-1));else{const i=e.ownerDocument.createRange();i.setStartBefore(t(n[r],-1)),i.setEndAfter(t(n[o-1],-1)),i.deleteContents()}},d=(t,e,n)=>{let r=1,o=e;for(;r<o;){const e=(r+o)/2>>>0;n<t[e]?o=e:r=e+1}return r},p=(t,e,n,r,o,i,l,c,u,h,p,v,m)=>{((t,e,n,r,o,i,l,c,u)=>{const h=new a,d=t.length;let p=l,v=0;for(;v<d;)switch(t[v++]){case 0:o++,p++;break;case 1:h.set(r[o],1),s(e,n,r,o++,o,p<c?e(i[p],1):u);break;case-1:p++}for(v=0;v<d;)switch(t[v++]){case 0:l++;break;case-1:h.has(i[l])?l++:f(e,n,i,l++,l)}})(((t,e,n,r,o,i,a)=>{const s=n+i,l=[];let c,u,h,f,d,p,v;t:for(c=0;c<=s;c++){if(c>50)return null;for(v=c-1,d=c?l[c-1]:[0,0],p=l[c]=[],u=-c;u<=c;u+=2){for(h=(f=u===-c||u!==c&&d[v+u-1]<d[v+u+1]?d[v+u+1]:d[v+u-1]+1)-u;f<i&&h<n&&a(r[o+f],t[e+h]);)f++,h++;if(f===i&&h===n)break t;p[c+u]=f}}const m=Array(c/2+s/2);let g=m.length-1;for(c=l.length-1;c>=0;c--){for(;f>0&&h>0&&a(r[o+f-1],t[e+h-1]);)m[g--]=0,f--,h--;if(!c)break;v=c-1,d=c?l[c-1]:[0,0],(u=f-h)==-c||u!==c&&d[v+u-1]<d[v+u+1]?(h--,m[g--]=1):(f--,m[g--]=-1)}return m})(n,r,i,l,c,h,v)||((t,e,n,r,o,i,s,l)=>{let c=0,u=r<l?r:l;const h=Array(u++),f=Array(u);f[0]=-1;for(let t=1;t<u;t++)f[t]=s;const p=new a;for(let t=i;t<s;t++)p.set(o[t],t);for(let r=e;r<n;r++){const e=p.get(t[r]);null!=e&&-1<(c=d(f,u,e))&&(f[c]=e,h[c]={newi:r,oldi:e,prev:h[c-1]})}for(c=--u,--s;f[c]>s;)--c;u=l+r-c;const v=Array(u);let m=h[c];for(--n;m;){const{newi:t,oldi:e}=m;for(;n>t;)v[--u]=1,--n;for(;s>e;)v[--u]=-1,--s;v[--u]=0,--n,--s,m=m.prev}for(;n>=e;)v[--u]=1,--n;for(;s>=i;)v[--u]=-1,--s;return v})(n,r,o,i,l,c,u,h),t,e,n,r,l,c,p,m)},v=(t,e,n,r)=>{r||(r={});const o=r.compare||l,i=r.node||c,a=null==r.before?null:i(r.before,0),d=e.length;let v=d,m=0,g=n.length,b=0;for(;m<v&&b<g&&o(e[m],n[b]);)m++,b++;for(;m<v&&b<g&&o(e[v-1],n[g-1]);)v--,g--;const y=m===v,w=b===g;if(y&&w)return n;if(y&&b<g)return s(i,t,n,b,g,h(i,e,m,d,a)),n;if(w&&m<v)return f(i,t,e,m,v),n;const N=v-m,E=g-b;let x=-1;if(N<E){if(-1<(x=u(n,b,g,e,m,v,o)))return s(i,t,n,b,x,i(e[m],0)),s(i,t,n,x+N,g,h(i,e,v,d,a)),n}else if(E<N&&-1<(x=u(e,m,v,n,b,g,o)))return f(i,t,e,m,x),f(i,t,e,x+E,v),n;return N<2||E<2?(s(i,t,n,b,g,i(e[m],0)),f(i,t,e,m,v),n):N===E&&((t,e,n,r,o,i)=>{for(;r<o&&i(n[r],t[e-1]);)r++,e--;return 0===e})(n,g,e,m,v,o)?(s(i,t,n,b,g,h(i,e,v,d,a)),n):(p(i,t,n,b,g,E,e,m,v,N,d,o,a),n)};var m={};m.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(t){return e.prototype=new e("").constructor.prototype,e;function e(t,e){e||(e={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!!e.bubbles,!!e.cancelable,e.detail),n}}();var g=m.CustomEvent;function b(){return this}const y=(t,e)=>{const n="_"+t+"$";return{get(){return this[n]||w(this,n,e.call(this,t))},set(t){w(this,n,t)}}},w=(t,e,n)=>Object.defineProperty(t,e,{configurable:!0,value:"function"==typeof n?function(){return t._wire$=n.apply(this,arguments)}:n})[e],N={},E={},x=[],_=E.hasOwnProperty;let k=0;var C,A,$={attributes:N,define:(t,e)=>{t.indexOf("-")<0?(t in E||(k=x.push(t)),E[t]=e):N[t]=e},invoke:(t,e)=>{for(let n=0;n<k;n++){let r=x[n];if(_.call(t,r))return E[r](t[r],e)}}},S=Array.isArray||(A=(C={}.toString).call([]),function(t){return C.call(t)===A}),O=function(t){var e="fragment",n="content"in o("template")?function(t){var e=o("template");return e.innerHTML=t,e.content}:function(t){var n=o(e),i=o("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var s=RegExp.$1;i.innerHTML="<table>"+t+"</table>",a=i.querySelectorAll(s)}else i.innerHTML=t,a=i.childNodes;return r(n,a),n};return function(t,i){return("svg"===i?function(t){var n=o(e),i=o("div");return i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",r(n,i.firstChild.childNodes),n}:n)(t)};function r(t,e){for(var n=e.length;n--;)t.appendChild(e[0])}function o(n){return n===e?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document);var T,M=function(t,e,n,r,o){var i="importNode"in t,a=t.createDocumentFragment();return a.appendChild(t.createTextNode("g")),a.appendChild(t.createTextNode("")),(i?t.importNode(a,!0):a.cloneNode(!0)).childNodes.length<2?function t(e,n){for(var r=e.cloneNode(),o=e.childNodes||[],i=o.length,a=0;n&&a<i;a++)r.appendChild(t(o[a],n));return r}:i?t.importNode:function(t,e){return t.cloneNode(!!e)}}(document),j="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},L="-"+Math.random().toFixed(6)+"%";"content"in(T=document.createElement("template"))&&(T.innerHTML='<p tabindex="'+L+'"></p>',T.content.childNodes[0].getAttribute("tabindex")==L)||(L="_dt: "+L.slice(1,-1)+";");var P="\x3c!--"+L+"--\x3e",D=8,R=11,W=1,F=3,H=/^(?:style|textarea)$/i,z=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var Z=" \\f\\n\\r\\t",B="[ "+Z+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",I="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",V="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",G=new RegExp(I+B+V+"+)([ "+Z+"]*/?>)","g"),q=new RegExp(I+B+V+"*)([ "+Z+"]*/>)","g"),K=new RegExp("("+B+"\\s*=\\s*)(['\"]?)"+P+"\\2","gi");function U(t,e,n,r){return"<"+e+n.replace(K,J)+r}function J(t,e,n){return e+(n||'"')+L+(n||'"')}function Q(t,e,n){return z.test(e)?t:"<"+e+n+"></"+e+">"}var X=-1;function Y(t,e,n){return{type:t,name:n,node:e,path:function(t){var e,n=[];switch(t.nodeType){case W:case R:X=-1,e=t;break;case D:e=t.parentNode,nt(n,e,t);break;default:e=t.ownerElement}for(;e=(t=e).parentNode;)nt(n,e,t);return n}(e)}}function tt(t,e){for(var n=e.length,r=0;r<n;)t=t.childNodes[e[r++]];return t}function et(t,e,n){for(var r=new a,o=t.attributes,i=[],s=i.slice.call(o,0),l=s.length,c=0;c<l;){var u=s[c++];if(u.value===L){var h=u.name;if(!r.has(h)){var f=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),d=o[f]||o[f.toLowerCase()];r.set(h,d);var p=X;e.push(Y("attr",d,f)),X=p}i.push(u)}}for(l=i.length,c=0;c<l;){var v=i[c++];/^id$/i.test(v.name)?t.removeAttribute(v.name):t.removeAttributeNode(v)}var m=t.nodeName;if(/^script$/i.test(m)){var g=document.createElement(m);for(l=o.length,c=0;c<l;)g.setAttributeNode(o[c++].cloneNode(!0));g.textContent=t.textContent,t.parentNode.replaceChild(g,t)}}function nt(t,e,n){t.unshift(X<0?t.indexOf.call(e.childNodes,n):X),X=-1}var rt=new n,ot=new n;function it(t,e){var n=function(t){return t.join(P).replace(q,Q).replace(G,U)}(e),r=t.transform;r&&(n=r(n));var o=O(n,t.type);!function(t){var e=t.childNodes,n=e.length;for(;n--;){var r=e[n];1!==r.nodeType&&0===j.call(r.textContent).length&&t.removeChild(r)}}(o);var i=[];!function t(e,n,r){for(var o=e.childNodes,i=o.length,a=0;a<i;){var s=o[X=a++];switch(s.nodeType){case W:et(s,n,r),t(s,n,r);break;case D:s.textContent===L&&(r.shift(),n.push(H.test(e.nodeName)?Y("text",e):Y("any",s)));break;case F:H.test(e.nodeName)&&j.call(s.textContent)===P&&(r.shift(),n.push(Y("text",e)))}}}(o,i,e.slice(0));var a={content:o,updates:function(n){for(var r=[],o=i.length,a=0;a<o;){var s=i[a++],l=tt(n,s.path);switch(s.type){case"any":r.push(t.any(l,[]));break;case"attr":r.push(t.attribute(l,s.name,s.node));break;case"text":r.push(t.text(l)),l.textContent=""}}return function(){var t=arguments.length,i=t-1,a=1;if(o!==i)throw new Error(i+" values instead of "+o+"\n"+e.join(", "));for(;a<t;)r[a-1](arguments[a++]);return n}}};return rt.set(e,a),a}function at(t){return function(e){var n=ot.get(t);return null!=n&&n.template===e||(n=function(t,e){var n=rt.get(e)||it(t,e),r=M.call(document,n.content,!0),o={content:r,template:e,updates:n.updates(r)};return ot.set(t,o),o}(t,e)),n.updates.apply(null,arguments),n.content}}var st=function(){var t=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,e=/([^A-Z])([A-Z]+)/g;return function(t,e){return"ownerSVGElement"in t?function(t,e){var n;e?n=e.cloneNode(!0):(t.setAttribute("style","--hyper:style;"),n=t.getAttributeNode("style"));return n.value="",t.setAttributeNode(n),r(n,!0)}(t,e):r(t.style,!1)};function n(t,e,n){return e+"-"+n.toLowerCase()}function r(r,o){var i,a;return function(s){var l,c,u,h;switch(typeof s){case"object":if(s){if("object"===i){if(!o&&a!==s)for(c in a)c in s||(r[c]="")}else o?r.value="":r.cssText="";for(c in l=o?{}:r,s)u="number"!=typeof(h=s[c])||t.test(c)?h:h+"px",!o&&/^--/.test(c)?l.setProperty(c,u):l[c]=u;i="object",o?r.value=function(t){var r,o=[];for(r in t)o.push(r.replace(e,n),":",t[r],";");return o.join("")}(a=l):a=s;break}default:a!=s&&(i="string",a=s,o?r.value=s||"":r.cssText=s||"")}}}}();const lt=document.defaultView,ct="ownerSVGElement";var ut=function(){var t=!1,e=function(n){if(!("raw"in n)||n.propertyIsEnumerable("raw")||!Object.isFrozen(n.raw)||/Firefox\/(\d+)/.test((document.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var r={};return(e=function(t){var e="raw"+t.join("raw");return r[e]||(r[e]=t)})(n)}return t=!0,n};return function(n){return t?n:e(n)}}();const ht=t=>t.ownerDocument||t,ft=t=>ht(t).createDocumentFragment(),dt="append"in ft(document)?(t,e)=>{t.append.apply(t,e)}:(t,e)=>{const n=e.length;for(let r=0;r<n;r++)t.appendChild(e[r])},pt=function(t){const e=[ut(t)];for(let t=1,n=arguments.length;t<n;t++)e[t]=arguments[t];return e},vt=[].slice;function mt(t){this.childNodes=t,this.length=t.length,this.first=t[0],this.last=t[this.length-1],this._=null}mt.prototype.valueOf=function(t){const e=null==this._;return e&&(this._=ft(this.first)),(e||t)&&dt(this._,this.childNodes),this._},mt.prototype.remove=function(){this._=null;const t=this.first,e=this.last;if(2===this.length)e.parentNode.removeChild(e);else{const n=ht(t).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(e),n.deleteContents()}return t};const gt=function(t){var e="connected",n="dis"+e,r=t.Event,o=t.WeakSet,i=!0,a=new o;return function(t){return i&&(i=!i,function(t){var i=null;try{new MutationObserver(u).observe(t,{subtree:!0,childList:!0})}catch(e){var s=0,l=[],c=function(t){l.push(t),clearTimeout(s),s=setTimeout(function(){u(l.splice(s=0,l.length))},0)};t.addEventListener("DOMNodeRemoved",function(t){c({addedNodes:[],removedNodes:[t.target]})},!0),t.addEventListener("DOMNodeInserted",function(t){c({addedNodes:[t.target],removedNodes:[]})},!0)}function u(t){i=new function(){this[e]=new o,this[n]=new o};for(var r,a=t.length,s=0;s<a;s++)h((r=t[s]).removedNodes,n,e),h(r.addedNodes,e,n);i=null}function h(t,e,n){for(var o,i=new r(e),a=t.length,s=0;s<a;1===(o=t[s++]).nodeType&&f(o,i,e,n));}function f(t,e,n,r){a.has(t)&&!i[n].has(t)&&(i[r].delete(t),i[n].add(t),t.dispatchEvent(e));for(var o=t.children||[],s=o.length,l=0;l<s;f(o[l++],e,n,r));}}(t.ownerDocument)),a.add(t),t}}({Event:g,WeakSet:o}),bt=t=>({html:t}),yt=(t,e)=>"ELEMENT_NODE"in t?t:t.constructor===mt?1/e<0?e?t.remove():t.last:e?t.valueOf(!0):t.first:yt(t.render(),e),wt=(t,e)=>{e(t.placeholder),"text"in t?Promise.resolve(t.text).then(String).then(e):"any"in t?Promise.resolve(t.any).then(e):"html"in t?Promise.resolve(t.html).then(bt).then(e):Promise.resolve($.invoke(t,e)).then(e)},Nt=t=>null!=t&&"then"in t,Et=/^(?:form|list)$/i;function xt(t){return this.type=t,at(this)}xt.prototype={attribute(t,e,n){const r=ct in t;let o;if("style"===e)return st(t,n,r);if(/^on/.test(e)){let n=e.slice(2);return"connected"===n||"disconnected"===n?gt(t):e.toLowerCase()in t&&(n=n.toLowerCase()),e=>{o!==e&&(o&&t.removeEventListener(n,o,!1),o=e,e&&t.addEventListener(n,e,!1))}}if("data"===e||!r&&e in t&&!Et.test(e))return n=>{o!==n&&(o=n,t[e]!==n&&(t[e]=n,null==n&&t.removeAttribute(e)))};if(e in $.attributes)return n=>{o=$.attributes[e](t,n),t.setAttribute(e,null==o?"":o)};{let e=!1;const r=n.cloneNode(!0);return n=>{o!==n&&(o=n,r.value!==n&&(null==n?(e&&(e=!1,t.removeAttributeNode(r)),r.value=n):(r.value=n,e||(e=!0,t.setAttributeNode(r)))))}}},any(t,e){const n={node:yt,before:t},r=ct in t?"svg":"html";let o,i=!1;const a=s=>{switch(typeof s){case"string":case"number":case"boolean":i?o!==s&&(o=s,e[0].textContent=s):(i=!0,o=s,e=v(t.parentNode,e,[((t,e)=>ht(t).createTextNode(e))(t,s)],n));break;case"function":a(s(t));break;case"object":case"undefined":if(null==s){i=!1,e=v(t.parentNode,e,[],n);break}default:if(i=!1,o=s,S(s))if(0===s.length)e.length&&(e=v(t.parentNode,e,[],n));else switch(typeof s[0]){case"string":case"number":case"boolean":a({html:s});break;case"object":if(S(s[0])&&(s=s.concat.apply([],s)),Nt(s[0])){Promise.all(s).then(a);break}default:e=v(t.parentNode,e,s,n)}else(t=>"ELEMENT_NODE"in t||t instanceof mt||t instanceof b)(s)?e=v(t.parentNode,e,11===s.nodeType?vt.call(s.childNodes):[s],n):Nt(s)?s.then(a):"placeholder"in s?wt(s,a):"text"in s?a(String(s.text)):"any"in s?a(s.any):"html"in s?e=v(t.parentNode,e,vt.call(O([].concat(s.html).join(""),r).childNodes),n):a("length"in s?vt.call(s):$.invoke(s,a))}};return a},text(t){let e;const n=r=>{if(e!==r){e=r;const o=typeof r;"object"===o&&r?Nt(r)?r.then(n):"placeholder"in r?wt(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?vt.call(r).join(""):$.invoke(r,n)):"function"===o?n(r(t)):t.textContent=null==r?"":r}};return n}};const _t=new n,kt=(t,e)=>null==t?Ct(e||"html"):At(t,e||"html"),Ct=t=>{let e,n,r;return function(){const o=pt.apply(null,arguments);return r!==o[0]?(r=o[0],n=new xt(t),e=$t(n.apply(n,o))):n.apply(n,o),e}},At=(t,e)=>{const n=e.indexOf(":");let r=_t.get(t),o=e;return-1<n&&(o=e.slice(n+1),e=e.slice(0,n)||"html"),r||_t.set(t,r={}),r[o]||(r[o]=Ct(e))},$t=t=>{const e=t.childNodes;return 1===e.length?e[0]:new mt(vt.call(e,0))},St=new n;function Ot(){const t=St.get(this),e=pt.apply(null,arguments);return t&&t.template===e[0]?t.tagger.apply(null,e):function(){const t=pt.apply(null,arguments),e=new xt(ct in this?"svg":"html");St.set(this,{tagger:e,template:t[0]}),this.textContent="",this.appendChild(e.apply(null,t))}.apply(this,e),this}const Tt=t=>Ot.bind(t),Mt=$.define,jt=xt.prototype;function Lt(t){return arguments.length<2?null==t?Ct("html"):"string"==typeof t?Lt.wire(null,t):"raw"in t?Ct("html")(t):"nodeType"in t?Lt.bind(t):At(t,"html"):("raw"in t?Ct("html"):Lt.wire).apply(null,arguments)}Lt.Component=b,Lt.bind=Tt,Lt.define=Mt,Lt.diff=v,Lt.hyper=Lt,Lt.observe=gt,Lt.tagger=jt,Lt.wire=kt,Lt._={global:lt,WeakMap:n,WeakSet:o},function(t){const e=new n,r=Object.create,o=(t,e)=>{const n={w:null,p:null};return e.set(t,n),n};Object.defineProperties(b,{for:{configurable:!0,value(t,i){return((t,e,i,a)=>{const s=e.get(t)||o(t,e);switch(typeof a){case"object":case"function":const e=s.w||(s.w=new n);return e.get(a)||((t,e,n)=>(t.set(e,n),n))(e,a,new t(i));default:const o=s.p||(s.p=r(null));return o[a]||(o[a]=new t(i))}})(this,e.get(t)||(t=>{const n=new a;return e.set(t,n),n})(t),t,null==i?"default":i)}}}),Object.defineProperties(b.prototype,{handleEvent:{value(t){const e=t.currentTarget;this["getAttribute"in e&&e.getAttribute("data-call")||"on"+t.type](t)}},html:y("html",t),svg:y("svg",t),state:y("state",function(){return this.defaultState}),defaultState:{get:()=>({})},dispatch:{value(t,e){const{_wire$:n}=this;if(n){const r=new g(t,{bubbles:!0,cancelable:!0,detail:e});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return!1}},setState:{value(t,e){const n=this.state,r="function"==typeof t?t.call(this,n):t;for(const t in r)n[t]=r[t];return!1!==e&&this.render(),this}}})}(Ct);const Pt="attributeChangedCallback",Dt=Object,Rt=[],Wt=Dt.defineProperty,Ft=Dt.getOwnPropertyDescriptor,Ht=Dt.getOwnPropertyNames,zt=Dt.getOwnPropertySymbols||(()=>[]),Zt=Dt.getPrototypeOf||(t=>t.__proto__),Bt="object"==typeof Reflect&&Reflect.ownKeys||(t=>Ht(t).concat(zt(t))),It=Dt.setPrototypeOf||((t,e)=>(t.__proto__=e,t)),Vt=t=>t.replace(/-([a-z])/g,(t,e)=>e.toUpperCase());class Gt extends HTMLElement{static define(t,e){const n=this,r=n.prototype,o=r[Pt],i=!!o,a=n.booleanAttributes||[];a.forEach(t=>{t in r||Wt(r,Vt(t),{configurable:!0,get(){return this.hasAttribute(t)},set(e){e&&"false"!==e?this.setAttribute(t,e):this.removeAttribute(t)}})});const s=n.observedAttributes||[];s.forEach(t=>{t in r||Wt(r,Vt(t),{configurable:!0,get(){return this.getAttribute(t)},set(e){null==e?this.removeAttribute(t):this.setAttribute(t,e)}})});const l=a.concat(s);l.length&&Wt(n,"observedAttributes",{get:()=>l});const c=r.created||function(){this.render()};Wt(r,"_init$",{configurable:!0,writable:!0,value:!0}),Wt(r,Pt,{configurable:!0,value:function t(e,n,r){if(this._init$&&(Kt.call(this,c),this._init$))return this._init$$.push(t.bind(this,e,n,r));i&&n!==r&&o.apply(this,arguments)}});const u=r.connectedCallback,h=!!u;if(Wt(r,"connectedCallback",{configurable:!0,value:function t(){if(this._init$&&(Kt.call(this,c),this._init$))return this._init$$.push(t.bind(this));h&&u.apply(this,arguments)}}),Ht(r).forEach(t=>{if(/^handle[A-Z]/.test(t)){const e="_"+t+"$",n=r[t];Wt(r,t,{configurable:!0,get(){return this[e]||(this[e]=n.bind(this))}})}}),"handleEvent"in r||Wt(r,"handleEvent",{configurable:!0,value(t){this[(t.currentTarget.dataset||{}).call||"on"+t.type](t)}}),e&&e.extends){const o=document.createElement(e.extends).constructor,i=class extends o{},a=Zt(n);Bt(a).filter(t=>["length","name","arguments","caller","prototype"].indexOf(t)<0).forEach(t=>Wt(i,t,Ft(a,t))),Bt(a.prototype).forEach(t=>Wt(i.prototype,t,Ft(a.prototype,t))),It(n,i),It(r,i.prototype),customElements.define(t,n,e)}else customElements.define(t,n);return Rt.push(n),n}get html(){return this._html$||(this.html=Tt(this.shadowRoot||this._shadowRoot||this))}set html(t){Wt(this,"_html$",{configurable:!0,value:t})}render(){}get defaultState(){return{}}get state(){return this._state$||(this.state=this.defaultState)}set state(t){Wt(this,"_state$",{configurable:!0,value:t})}setState(t,e){const n=this.state,r="function"==typeof t?t.call(this,n):t;for(const t in r)n[t]=r[t];return!1!==e&&this.render(),this}}Gt.Component=b,Gt.bind=Tt,Gt.intent=Mt,Gt.wire=kt,Gt.hyper=Lt;try{Symbol.hasInstance&&Rt.push(Wt(Gt,Symbol.hasInstance,{enumerable:!1,configurable:!0,value:t=>Rt.some(Jt,Zt(t))}))}catch(t){}const qt={type:"DOMContentLoaded",handleEvent(){qt.ready()?(document.removeEventListener(qt.type,qt,!1),qt.list.splice(0).forEach(Ut)):setTimeout(qt.handleEvent)},ready:()=>"complete"===document.readyState,list:[]};function Kt(t){if(qt.ready()||function(t){let e=this;do{if(e.nextSibling)return!0}while(e=e.parentNode);return setTimeout(Kt.bind(this,t)),!1}.call(this,t)){if(this._init$){const e=this._init$$;e&&delete this._init$$,t.call(Wt(this,"_init$",{value:!1})),e&&e.forEach(Ut)}}else this.hasOwnProperty("_init$$")||Wt(this,"_init$$",{configurable:!0,value:[]}),qt.list.push(Kt.bind(this,t))}function Ut(t){t()}function Jt(t){return this===t.prototype}return qt.ready()||document.addEventListener(qt.type,qt,!1),t.default=Gt,t.default}({});
