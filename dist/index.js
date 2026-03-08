"use strict";var q=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var m=q(function(F,k){
var i=require('@stdlib/number-float64-base-to-float32/dist'),b=require('@stdlib/math-base-special-absf/dist');function _(u,r,t,R){var e,o,s,a,f,v,n;if(u<=0)return 0;if(s=R,t===0)return i(u*r[s]);if(a=r[s],s+=t,e=a,e===0)for(n=1;n<u;n++){if(a=r[s],a!==0){o=!0;break}e=i(e+a),s+=t}else o=!0,n=1;for(v=0;n<u;n++)a=r[s],f=i(e+a),b(e)>=b(a)?v=i(v+i(i(e-f)+a)):v=i(v+i(i(a-f)+e)),e=f,s+=t;return o?i(e+v):e}k.exports=_
});var p=q(function(G,l){
var g=require('@stdlib/strided-base-stride2offset/dist'),E=m();function O(u,r,t){return E(u,r,t,g(u,t))}l.exports=O
});var d=q(function(H,j){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),w=m();h(y,"ndarray",w);j.exports=y
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=d(),c,x=A(z(__dirname,"./native.js"));B(x)?c=C:c=x;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
