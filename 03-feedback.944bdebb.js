function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(t,e,n){var o,i,r,f,u,a,c=0,l=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,r=i;return o=i=void 0,c=e,f=t.apply(r,n)}function h(t){return c=t,u=setTimeout(S,e),l?y(t):f}function j(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=r}function S(){var t=p();if(j(t))return w(t);u=setTimeout(S,function(t){var n=e-(t-a);return s?v(n,r-(t-c)):n}(t))}function w(t){return u=void 0,m&&o?y(t):(o=i=void 0,f)}function O(){var t=p(),n=j(t);if(o=arguments,i=this,a=t,n){if(void 0===u)return h(a);if(s)return u=setTimeout(S,e),y(a)}return void 0===u&&(u=setTimeout(S,e)),f}return e=g(e)||0,b(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(g(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=i=u=void 0},O.flush=function(){return void 0===u?f:w(p())},O}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||f.test(t)?u(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(t,e,{leading:o,maxWait:e,trailing:i})};const y=document.querySelector(".feedback-form");function h(t){const e={};return new FormData(y).forEach(((t,n)=>{e[n]=t})),e}!function(){const t=localStorage.getItem("feedbackFormState");if(!t)return;const e=JSON.parse(t);if(Object.values(e).length)for(const t in e)y.elements[t].value=e[t]}(),y.addEventListener("submit",(function(t){t.preventDefault(),console.log(h(t)),localStorage.removeItem("feedbackFormState"),t.target.reset()})),y.addEventListener("input",t(e)((function(t){const e=h(t);localStorage.setItem("feedbackFormState",JSON.stringify(e))}),250));
//# sourceMappingURL=03-feedback.944bdebb.js.map
