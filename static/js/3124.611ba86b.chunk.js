"use strict";(self.webpackChunkUnion_front_end=self.webpackChunkUnion_front_end||[]).push([[3124],{43235:function(e,n,t){function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}t.d(n,{Ul:function(){return i},gY:function(){return r},gK:function(){return o}})},88755:function(e,n,t){t.d(n,{J:function(){return M}});var r,o=t(43235),u=t(72791),i=t(13090),a=t(93878);function c(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,u.useRef)(n);return(0,u.useEffect)((function(){r.current=n}),[n]),(0,u.useCallback)((function(e){for(var n,t=(0,o.Ul)(r.current);!(n=t()).done;){var u=n.value;null!=u&&("function"===typeof u?u(e):u.current=e)}}),[r])}function l(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var u=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!u||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&u}!function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(r||(r={}));var s,f,d,p,v=t(6278),m=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function b(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(m))}function g(e,n){var t=Array.isArray(e)?e.slice().sort((function(e,n){var t=e.compareDocumentPosition(n);return t&Node.DOCUMENT_POSITION_FOLLOWING?-1:t&Node.DOCUMENT_POSITION_PRECEDING?1:0})):b(e),r=document.activeElement,o=function(){if(n&(s.First|s.Next))return d.Next;if(n&(s.Previous|s.Last))return d.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),u=function(){if(n&s.First)return 0;if(n&s.Previous)return Math.max(0,t.indexOf(r))-1;if(n&s.Next)return Math.max(0,t.indexOf(r))+1;if(n&s.Last)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),i=n&s.NoScroll?{preventScroll:!0}:{},a=0,c=t.length,l=void 0;do{var p;if(a>=c||a+c<=0)return f.Error;var v=u+a;if(n&s.WrapAround)v=(v+c)%c;else{if(v<0)return f.Underflow;if(v>=c)return f.Overflow}null==(p=l=t[v])||p.focus(i),a+=o}while(l!==document.activeElement);return l.hasAttribute("tabindex")||l.setAttribute("tabindex","0"),f.Success}function y(e,n,t){var r=(0,u.useRef)(n);r.current=n,(0,u.useEffect)((function(){function n(e){r.current.call(window,e)}return window.addEventListener(e,n,t),function(){return window.removeEventListener(e,n,t)}}),[e,t])}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(s||(s={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(f||(f={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(d||(d={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(p||(p={}));var E,h,S,w=t(91896),C=t(63426);function P(e){var n;if(e.type)return e.type;var t=null!=(n=e.as)?n:"button";return"string"===typeof t&&"button"===t.toLowerCase()?"button":void 0}!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(h||(h={})),function(e){e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId"}(S||(S={}));var O=((E={})[S.TogglePopover]=function(e){var n;return(0,o.gY)({},e,{popoverState:(0,i.E)(e.popoverState,(n={},n[h.Open]=h.Closed,n[h.Closed]=h.Open,n))})},E[S.ClosePopover]=function(e){return e.popoverState===h.Closed?e:(0,o.gY)({},e,{popoverState:h.Closed})},E[S.SetButton]=function(e,n){return e.button===n.button?e:(0,o.gY)({},e,{button:n.button})},E[S.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:(0,o.gY)({},e,{buttonId:n.buttonId})},E[S.SetPanel]=function(e,n){return e.panel===n.panel?e:(0,o.gY)({},e,{panel:n.panel})},E[S.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:(0,o.gY)({},e,{panelId:n.panelId})},E),x=(0,u.createContext)(null);function T(e){var n=(0,u.useContext)(x);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+M.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,T),t}return n}x.displayName="PopoverContext";var k=(0,u.createContext)(null);function A(e){var n=(0,u.useContext)(k);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+M.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return n}k.displayName="PopoverAPIContext";var I=(0,u.createContext)(null);function F(){return(0,u.useContext)(I)}I.displayName="PopoverGroupContext";var L=(0,u.createContext)(null);function N(e,n){return(0,i.E)(n.type,O,e,n)}L.displayName="PopoverPanelContext";function M(e){var n,t="headlessui-popover-button-"+(0,v.M)(),r="headlessui-popover-panel-"+(0,v.M)(),o=(0,u.useReducer)(N,{popoverState:h.Closed,button:null,buttonId:t,panel:null,panelId:r}),c=o[0],l=c.popoverState,s=c.button,f=c.panel,d=o[1];(0,u.useEffect)((function(){return d({type:S.SetButtonId,buttonId:t})}),[t,d]),(0,u.useEffect)((function(){return d({type:S.SetPanelId,panelId:r})}),[r,d]);var b=(0,u.useMemo)((function(){return{buttonId:t,panelId:r,close:function(){return d({type:S.ClosePopover})}}}),[t,r,d]),g=F(),E=null==g?void 0:g.registerPopover,C=(0,u.useCallback)((function(){var e;return null!=(e=null==g?void 0:g.isFocusWithinPopoverGroup())?e:(null==s?void 0:s.contains(document.activeElement))||(null==f?void 0:f.contains(document.activeElement))}),[g,s,f]);(0,u.useEffect)((function(){return null==E?void 0:E(b)}),[E,b]),y("focus",(function(){l===h.Open&&(C()||s&&f&&d({type:S.ClosePopover}))}),!0),y("mousedown",(function(e){var n=e.target;l===h.Open&&((null==s?void 0:s.contains(n))||(null==f?void 0:f.contains(n))||(d({type:S.ClosePopover}),function(e,n){var t;return void 0===n&&(n=p.Strict),e!==document.body&&(0,i.E)(n,((t={})[p.Strict]=function(){return e.matches(m)},t[p.Loose]=function(){for(var n=e;null!==n;){if(n.matches(m))return!0;n=n.parentElement}return!1},t))}(n,p.Loose)||(e.preventDefault(),null==s||s.focus())))}));var P=(0,u.useCallback)((function(e){d({type:S.ClosePopover});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:s:s;null==n||n.focus()}),[d,s]),O=(0,u.useMemo)((function(){return{close:P}}),[P]),T=(0,u.useMemo)((function(){return{open:l===h.Open,close:P}}),[l,P]);return u.createElement(x.Provider,{value:o},u.createElement(k.Provider,{value:O},u.createElement(w.up,{value:(0,i.E)(l,(n={},n[h.Open]=w.ZM.Open,n[h.Closed]=w.ZM.Closed,n))},(0,a.sY)({props:e,slot:T,defaultTag:"div",name:"Popover"}))))}var j=(0,a.yV)((function e(n,t){var i=T([M.name,e.name].join(".")),f=i[0],d=i[1],p=(0,u.useRef)(null),v=F(),m=null==v?void 0:v.closeOthers,E=(0,u.useContext)(L),w=null!==E&&E===f.panelId,O=c(p,t,w?null:function(e){return d({type:S.SetButton,button:e})}),x=c(p,t),k=(0,u.useRef)(null),A=(0,u.useRef)("undefined"===typeof window?null:document.activeElement);y("focus",(function(){A.current=k.current,k.current=document.activeElement}),!0);var I=(0,u.useCallback)((function(e){var n;if(w){if(f.popoverState===h.Closed)return;switch(e.key){case r.Space:case r.Enter:e.preventDefault(),e.stopPropagation(),d({type:S.ClosePopover}),null==(n=f.button)||n.focus()}}else switch(e.key){case r.Space:case r.Enter:e.preventDefault(),e.stopPropagation(),f.popoverState===h.Closed&&(null==m||m(f.buttonId)),d({type:S.TogglePopover});break;case r.Escape:if(f.popoverState!==h.Open)return null==m?void 0:m(f.buttonId);if(!p.current)return;if(!p.current.contains(document.activeElement))return;e.preventDefault(),e.stopPropagation(),d({type:S.ClosePopover});break;case r.Tab:if(f.popoverState!==h.Open)return;if(!f.panel)return;if(!f.button)return;if(e.shiftKey){var t;if(!A.current)return;if(null==(t=f.button)?void 0:t.contains(A.current))return;if(f.panel.contains(A.current))return;var o=b(),u=o.indexOf(A.current);if(o.indexOf(f.button)>u)return;e.preventDefault(),e.stopPropagation(),g(f.panel,s.Last)}else e.preventDefault(),e.stopPropagation(),g(f.panel,s.First)}}),[d,f.popoverState,f.buttonId,f.button,f.panel,p,m,w]),N=(0,u.useCallback)((function(e){var n;if(!w&&(e.key===r.Space&&e.preventDefault(),f.popoverState===h.Open&&f.panel&&f.button&&e.key===r.Tab)){if(!A.current)return;if(null==(n=f.button)?void 0:n.contains(A.current))return;if(f.panel.contains(A.current))return;var t=b(),o=t.indexOf(A.current);if(t.indexOf(f.button)>o)return;e.preventDefault(),e.stopPropagation(),g(f.panel,s.Last)}}),[f.popoverState,f.panel,f.button,w]),j=(0,u.useCallback)((function(e){var t,r;l(e.currentTarget)||(n.disabled||(w?(d({type:S.ClosePopover}),null==(t=f.button)||t.focus()):(f.popoverState===h.Closed&&(null==m||m(f.buttonId)),null==(r=f.button)||r.focus(),d({type:S.TogglePopover}))))}),[d,f.button,f.popoverState,f.buttonId,n.disabled,m,w]),H=(0,u.useMemo)((function(){return{open:f.popoverState===h.Open}}),[f]),R=function(e,n){var t=(0,u.useState)((function(){return P(e)})),r=t[0],o=t[1];return(0,C.e)((function(){o(P(e))}),[e.type,e.as]),(0,C.e)((function(){r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")}),[r,n]),r}(n,p),U=n,D=w?{ref:x,type:R,onKeyDown:I,onClick:j}:{ref:O,id:f.buttonId,type:R,"aria-expanded":n.disabled?void 0:f.popoverState===h.Open,"aria-controls":f.panel?f.panelId:void 0,onKeyDown:I,onKeyUp:N,onClick:j};return(0,a.sY)({props:(0,o.gY)({},U,D),slot:H,defaultTag:"button",name:"Popover.Button"})})),H=a.AN.RenderStrategy|a.AN.Static,R=(0,a.yV)((function e(n,t){var r=T([M.name,e.name].join(".")),i=r[0].popoverState,s=r[1],f=c(t),d="headlessui-popover-overlay-"+(0,v.M)(),p=(0,w.oJ)(),m=null!==p?p===w.ZM.Open:i===h.Open,b=(0,u.useCallback)((function(e){if(l(e.currentTarget))return e.preventDefault();s({type:S.ClosePopover})}),[s]),g=(0,u.useMemo)((function(){return{open:i===h.Open}}),[i]),y={ref:f,id:d,"aria-hidden":!0,onClick:b},E=n;return(0,a.sY)({props:(0,o.gY)({},E,y),slot:g,defaultTag:"div",features:H,visible:m,name:"Popover.Overlay"})})),U=a.AN.RenderStrategy|a.AN.Static,D=(0,a.yV)((function e(n,t){var i=n.focus,l=void 0!==i&&i,d=(0,o.gK)(n,["focus"]),p=T([M.name,e.name].join(".")),v=p[0],m=p[1],E=A([M.name,e.name].join(".")).close,C=(0,u.useRef)(null),P=c(C,t,(function(e){m({type:S.SetPanel,panel:e})})),O=(0,w.oJ)(),x=null!==O?O===w.ZM.Open:v.popoverState===h.Open,k=(0,u.useCallback)((function(e){var n;if(e.key===r.Escape){if(v.popoverState!==h.Open)return;if(!C.current)return;if(!C.current.contains(document.activeElement))return;e.preventDefault(),e.stopPropagation(),m({type:S.ClosePopover}),null==(n=v.button)||n.focus()}}),[v,C,m]);(0,u.useEffect)((function(){return function(){return m({type:S.SetPanel,panel:null})}}),[m]),(0,u.useEffect)((function(){var e;n.static||v.popoverState!==h.Closed||null!=(e=n.unmount)&&!e||m({type:S.SetPanel,panel:null})}),[v.popoverState,n.unmount,n.static,m]),(0,u.useEffect)((function(){if(l&&v.popoverState===h.Open&&C.current){var e=document.activeElement;C.current.contains(e)||g(C.current,s.First)}}),[l,C,v.popoverState]),y("keydown",(function(e){if(v.popoverState===h.Open&&C.current&&e.key===r.Tab&&document.activeElement&&C.current&&C.current.contains(document.activeElement)){e.preventDefault();var n,t=g(C.current,e.shiftKey?s.Previous:s.Next);if(t===f.Underflow)return null==(n=v.button)?void 0:n.focus();if(t===f.Overflow){if(!v.button)return;var o=b(),u=o.indexOf(v.button);g(o.splice(u+1).filter((function(e){var n;return!(null==(n=C.current)?void 0:n.contains(e))})),s.First)===f.Error&&g(document.body,s.First)}}})),y("focus",(function(){var e;l&&v.popoverState===h.Open&&C.current&&((null==(e=C.current)?void 0:e.contains(document.activeElement))||m({type:S.ClosePopover}))}),!0);var I=(0,u.useMemo)((function(){return{open:v.popoverState===h.Open,close:E}}),[v,E]),F={ref:P,id:v.panelId,onKeyDown:k};return u.createElement(L.Provider,{value:v.panelId},(0,a.sY)({props:(0,o.gY)({},d,F),slot:I,defaultTag:"div",features:U,visible:x,name:"Popover.Panel"}))}));M.Button=j,M.Overlay=R,M.Panel=D,M.Group=function(e){var n=(0,u.useRef)(null),t=(0,u.useState)([]),r=t[0],i=t[1],c=(0,u.useCallback)((function(e){i((function(n){var t=n.indexOf(e);if(-1!==t){var r=n.slice();return r.splice(t,1),r}return n}))}),[i]),l=(0,u.useCallback)((function(e){return i((function(n){return[].concat(n,[e])})),function(){return c(e)}}),[i,c]),s=(0,u.useCallback)((function(){var e,t=document.activeElement;return!!(null==(e=n.current)?void 0:e.contains(t))||r.some((function(e){var n,r;return(null==(n=document.getElementById(e.buttonId))?void 0:n.contains(t))||(null==(r=document.getElementById(e.panelId))?void 0:r.contains(t))}))}),[n,r]),f=(0,u.useCallback)((function(e){for(var n,t=(0,o.Ul)(r);!(n=t()).done;){var u=n.value;u.buttonId!==e&&u.close()}}),[r]),d=(0,u.useMemo)((function(){return{registerPopover:l,unregisterPopover:c,isFocusWithinPopoverGroup:s,closeOthers:f}}),[l,c,s,f]),p=(0,u.useMemo)((function(){return{}}),[]),v={ref:n},m=e;return u.createElement(I.Provider,{value:d},(0,a.sY)({props:(0,o.gY)({},m,v),slot:p,defaultTag:"div",name:"Popover.Group"}))}},72662:function(e,n,t){t.d(n,{u:function(){return T}});var r=t(43235),o=t(72791),u=t(13090),i=t(93878),a=t(63426),c=t(99840),l=t(6278);var s,f=t(91896);function d(){var e=[],n={requestAnimationFrame:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=requestAnimationFrame.apply(void 0,arguments);n.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n.requestAnimationFrame((function(){n.requestAnimationFrame.apply(n,t)}))},setTimeout:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=setTimeout.apply(void 0,arguments);n.add((function(){return clearTimeout(e)}))})),add:function(n){e.push(n)},dispose:function(){for(var n,t=(0,r.Ul)(e.splice(0));!(n=t()).done;){var o=n.value;o()}}};return n}function p(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function v(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}function m(e,n,t,r,o,u){var i=d(),a=void 0!==u?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(u):function(){};return v.apply(void 0,[e].concat(o)),p.apply(void 0,[e].concat(n,t)),i.nextFrame((function(){v.apply(void 0,[e].concat(t)),p.apply(void 0,[e].concat(r)),i.add(function(e,n){var t=d();if(!e)return t.dispose;var r=getComputedStyle(e),o=[r.transitionDuration,r.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e}))[0];return void 0===n?0:n})),u=o[0],i=o[1];return 0!==u?t.setTimeout((function(){n(s.Finished)}),u+i):n(s.Finished),t.add((function(){return n(s.Cancelled)})),t.dispose}(e,(function(t){return v.apply(void 0,[e].concat(r,n)),p.apply(void 0,[e].concat(o)),a(t)})))})),i.add((function(){return v.apply(void 0,[e].concat(n,t,r,o))})),i.add((function(){return a(s.Cancelled)})),i.dispose}function b(e){return void 0===e&&(e=""),(0,o.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(s||(s={}));var g,y=(0,o.createContext)(null);y.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(g||(g={}));var E=(0,o.createContext)(null);function h(e){return"children"in e?h(e.children):e.current.filter((function(e){return e.state===g.Visible})).length>0}function S(e){var n=(0,o.useRef)(e),t=(0,o.useRef)([]),r=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,o.useEffect)((function(){n.current=e}),[e]);var a=(0,o.useCallback)((function(e,o){var a;void 0===o&&(o=i.l4.Hidden);var c=t.current.findIndex((function(n){return n.id===e}));-1!==c&&((0,u.E)(o,((a={})[i.l4.Unmount]=function(){t.current.splice(c,1)},a[i.l4.Hidden]=function(){t.current[c].state=g.Hidden},a)),!h(t)&&r.current&&(null==n.current||n.current()))}),[n,r,t]),c=(0,o.useCallback)((function(e){var n=t.current.find((function(n){return n.id===e}));return n?n.state!==g.Visible&&(n.state=g.Visible):t.current.push({id:e,state:g.Visible}),function(){return a(e,i.l4.Unmount)}}),[t,a]);return(0,o.useMemo)((function(){return{children:t,register:c,unregister:a}}),[c,a,t])}function w(){}E.displayName="NestingContext";var C=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function P(e){for(var n,t={},o=(0,r.Ul)(C);!(n=o()).done;){var u,i=n.value;t[i]=null!=(u=e[i])?u:w}return t}var O=i.AN.RenderStrategy;function x(e){var n,t=e.beforeEnter,d=e.afterEnter,p=e.beforeLeave,v=e.afterLeave,w=e.enter,C=e.enterFrom,x=e.enterTo,T=e.entered,k=e.leave,A=e.leaveFrom,I=e.leaveTo,F=(0,r.gK)(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),L=(0,o.useRef)(null),N=(0,o.useState)(g.Visible),M=N[0],j=N[1],H=F.unmount?i.l4.Unmount:i.l4.Hidden,R=function(){var e=(0,o.useContext)(y);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),U=R.show,D=R.appear,Y=R.initial,V=function(){var e=(0,o.useContext)(E);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),B=V.register,K=V.unregister,Z=(0,l.M)(),W=(0,o.useRef)(!1),_=S((function(){W.current||(j(g.Hidden),K(Z),ee.current.afterLeave())}));(0,a.e)((function(){if(Z)return B(Z)}),[B,Z]),(0,a.e)((function(){var e;H===i.l4.Hidden&&Z&&(U&&M!==g.Visible?j(g.Visible):(0,u.E)(M,((e={})[g.Hidden]=function(){return K(Z)},e[g.Visible]=function(){return B(Z)},e)))}),[M,Z,B,K,U,H]);var G=b(w),q=b(C),J=b(x),$=b(T),z=b(k),Q=b(A),X=b(I),ee=function(e){var n=(0,o.useRef)(P(e));return(0,o.useEffect)((function(){n.current=P(e)}),[e]),n}({beforeEnter:t,afterEnter:d,beforeLeave:p,afterLeave:v}),ne=(0,c.H)();(0,o.useEffect)((function(){if(ne&&M===g.Visible&&null===L.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[L,M,ne]);var te=Y&&!D;(0,a.e)((function(){var e=L.current;if(e&&!te)return W.current=!0,U&&ee.current.beforeEnter(),U||ee.current.beforeLeave(),U?m(e,G,q,J,$,(function(e){W.current=!1,e===s.Finished&&ee.current.afterEnter()})):m(e,z,Q,X,$,(function(e){W.current=!1,e===s.Finished&&(h(_)||(j(g.Hidden),K(Z),ee.current.afterLeave()))}))}),[ee,Z,W,K,_,L,te,U,G,q,J,z,Q,X]);var re={ref:L},oe=F;return o.createElement(E.Provider,{value:_},o.createElement(f.up,{value:(0,u.E)(M,(n={},n[g.Visible]=f.ZM.Open,n[g.Hidden]=f.ZM.Closed,n))},(0,i.sY)({props:(0,r.gY)({},oe,re),defaultTag:"div",features:O,visible:M===g.Visible,name:"Transition.Child"})))}function T(e){var n,t=e.show,a=e.appear,c=void 0!==a&&a,l=e.unmount,s=(0,r.gK)(e,["show","appear","unmount"]),d=(0,f.oJ)();void 0===t&&null!==d&&(t=(0,u.E)(d,((n={})[f.ZM.Open]=!0,n[f.ZM.Closed]=!1,n)));if(![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var p=(0,o.useState)(t?g.Visible:g.Hidden),v=p[0],m=p[1],b=S((function(){m(g.Hidden)})),w=function(){var e=(0,o.useRef)(!0);return(0,o.useEffect)((function(){e.current=!1}),[]),e.current}(),C=(0,o.useMemo)((function(){return{show:t,appear:c||!w,initial:w}}),[t,c,w]);(0,o.useEffect)((function(){t?m(g.Visible):h(b)||m(g.Hidden)}),[t,b]);var P={unmount:l};return o.createElement(E.Provider,{value:b},o.createElement(y.Provider,{value:C},(0,i.sY)({props:(0,r.gY)({},P,{as:o.Fragment,children:o.createElement(x,Object.assign({},P,s))}),defaultTag:o.Fragment,features:O,visible:v===g.Visible,name:"Transition"})))}T.Child=function(e){var n=null!==(0,o.useContext)(y),t=null!==(0,f.oJ)();return!n&&t?o.createElement(T,Object.assign({},e)):o.createElement(x,Object.assign({},e))},T.Root=T},6278:function(e,n,t){t.d(n,{M:function(){return c}});var r=t(72791),o=t(63426),u=t(99840),i=0;function a(){return++i}function c(){var e=(0,u.H)(),n=(0,r.useState)(e?a:null),t=n[0],i=n[1];return(0,o.e)((function(){null===t&&i(a())}),[t]),null!=t?""+t:void 0}},63426:function(e,n,t){t.d(n,{e:function(){return o}});var r=t(72791),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},99840:function(e,n,t){t.d(n,{H:function(){return u}});var r=t(72791),o={serverHandoffComplete:!1};function u(){var e=(0,r.useState)(o.serverHandoffComplete),n=e[0],t=e[1];return(0,r.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,r.useEffect)((function(){!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),n}},91896:function(e,n,t){t.d(n,{up:function(){return a},ZM:function(){return r},oJ:function(){return i}});var r,o=t(72791),u=(0,o.createContext)(null);function i(){return(0,o.useContext)(u)}function a(e){var n=e.value,t=e.children;return o.createElement(u.Provider,{value:n},t)}u.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(r||(r={}))},13090:function(e,n,t){function r(e,n){if(e in n){for(var t=n[e],o=arguments.length,u=new Array(o>2?o-2:0),i=2;i<o;i++)u[i-2]=arguments[i];return"function"===typeof t?t.apply(void 0,u):t}var a=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(a,r),a}t.d(n,{E:function(){return r}})},93878:function(e,n,t){t.d(n,{AN:function(){return r},l4:function(){return o},yV:function(){return s},sY:function(){return c}});var r,o,u=t(43235),i=t(72791),a=t(13090);function c(e){var n=e.props,t=e.slot,i=e.defaultTag,c=e.features,s=e.visible,f=void 0===s||s,d=e.name;if(f)return l(n,t,i,d);var p=null!=c?c:r.None;if(p&r.Static){var v=n.static,m=void 0!==v&&v,b=(0,u.gK)(n,["static"]);if(m)return l(b,t,i,d)}if(p&r.RenderStrategy){var g,y=n.unmount,E=void 0===y||y,h=(0,u.gK)(n,["unmount"]),S=E?o.Unmount:o.Hidden;return(0,a.E)(S,((g={})[o.Unmount]=function(){return null},g[o.Hidden]=function(){return l((0,u.gY)({},h,{hidden:!0,style:{display:"none"}}),t,i,d)},g))}return l(n,t,i,d)}function l(e,n,t,r){var o;void 0===n&&(n={});var a=f(e,["unmount","static"]),c=a.as,l=void 0===c?t:c,s=a.children,d=a.refName,p=void 0===d?"ref":d,v=(0,u.gK)(a,["as","children","refName"]),m=void 0!==e.ref?((o={})[p]=e.ref,o):{},b="function"===typeof s?s(n):s;if(v.className&&"function"===typeof v.className&&(v.className=v.className(n)),l===i.Fragment&&Object.keys(v).length>0){if(!(0,i.isValidElement)(b)||Array.isArray(b)&&b.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,i.cloneElement)(b,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),i=function(){var t,u=r.value;void 0!==e[u]&&void 0!==n[u]&&Object.assign(o,((t={})[u]=function(t){t.defaultPrevented||e[u](t),t.defaultPrevented||n[u](t)},t))},a=(0,u.Ul)(t);!(r=a()).done;)i();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(f(v,["ref"])),b.props,["onClick"]),m))}return(0,i.createElement)(l,Object.assign({},f(v,["ref"]),l!==i.Fragment&&m),b)}function s(e){var n;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function f(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=(0,u.Ul)(n);!(t=o()).done;){var i=t.value;i in r&&delete r[i]}return r}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(o||(o={}))},9588:function(e,n,t){t.d(n,{Oqj:function(){return o},b0D:function(){return u}});var r=t(72791);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var u=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))}}}]);
//# sourceMappingURL=3124.611ba86b.chunk.js.map