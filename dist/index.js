"use strict";var q=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var m=q(function(F,k){
var i=require('@stdlib/number-float64-base-to-float32/dist'),b=require('@stdlib/math-base-special-absf/dist');function _(u,r,s,R){var e,o,t,a,f,v,n;if(u<=0)return 0;if(t=R,s===0)return i(u*r[t]);if(a=r[t],t+=s,e=a,e===0)for(n=1;n<u;n++){if(a=r[t],a!==0){o=!0;break}e=i(e+a),t+=s}else o=!0,n=1;for(v=0;n<u;n++)a=r[t],f=i(e+a),b(e)>=b(a)?v=i(v+i(i(e-f)+a)):v=i(v+i(i(a-f)+e)),e=f,t+=s;return o?i(e+v):e}k.exports=_
});var p=q(function(G,l){
var g=require('@stdlib/strided-base-stride2offset/dist'),E=m();function O(u,r,s){return E(u,r,s,g(u,s))}l.exports=O
});var d=q(function(H,j){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),w=m();h(y,"ndarray",w);j.exports=y
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=d(),c,x=A(z(__dirname,"./native.js"));B(x)?c=C:c=x;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
