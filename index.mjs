// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";function n(r,n,s){var i,a,d,o,f,m;if(r<=0)return 0;if(1===r||0===s)return n[0];for(a=s<0?(1-r)*s:0,i=0,f=0,m=0;m<r;m++)d=n[a],o=e(i+d),f=t(i)>=t(d)?e(f+e(e(i-o)+d)):e(f+e(e(d-o)+i)),i=o,a+=s;return e(i+f)}function s(r,n,s,i){var a,d,o,f,m,l;if(r<=0)return 0;if(1===r||0===s)return n[i];for(d=i,a=0,m=0,l=0;l<r;l++)o=n[d],f=e(a+o),m=t(a)>=t(o)?e(m+e(e(a-f)+o)):e(m+e(e(o-f)+a)),a=f,d+=s;return e(a+m)}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
