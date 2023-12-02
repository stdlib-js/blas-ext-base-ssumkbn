"use strict";var l=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var p=l(function(B,b){
var n=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/math-base-special-abs/dist');function _(a,i,f){var u,r,t,v,e,s;if(a<=0)return 0;if(a===1||f===0)return i[0];for(f<0?r=(1-a)*f:r=0,u=0,e=0,s=0;s<a;s++)t=i[r],v=n(u+t),c(u)>=c(t)?e=n(e+n(n(u-v)+t)):e=n(e+n(n(t-v)+u)),u=v,r+=f;return n(u+e)}b.exports=_
});var y=l(function(C,x){
var o=require('@stdlib/number-float64-base-to-float32/dist'),k=require('@stdlib/math-base-special-abs/dist');function E(a,i,f,u){var r,t,v,e,s,q;if(a<=0)return 0;if(a===1||f===0)return i[u];for(t=u,r=0,s=0,q=0;q<a;q++)v=i[t],e=o(r+v),k(r)>=k(v)?s=o(s+o(o(r-e)+v)):s=o(s+o(o(v-e)+r)),r=e,t+=f;return o(r+s)}x.exports=E
});var R=l(function(D,F){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=p(),d=y();O(j,"ndarray",d);F.exports=j
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=R(),m,T=h(g(__dirname,"./native.js"));w(T)?m=z:m=T;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
