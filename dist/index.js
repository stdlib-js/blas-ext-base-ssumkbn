"use strict";var q=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var f=q(function(B,b){
var e=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/math-base-special-absf/dist');function R(a,r,u,j){var i,n,t,v,s,o;if(a<=0)return 0;if(n=j,u===0)return e(a*r[n]);for(i=0,s=0,o=0;o<a;o++)t=r[n],v=e(i+t),c(i)>=c(t)?s=e(s+e(e(i-v)+t)):s=e(s+e(e(t-v)+i)),i=v,n+=u;return e(i+s)}b.exports=R
});var p=q(function(C,l){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=f();function F(a,r,u){return E(a,r,u,_(a,u))}l.exports=F
});var k=q(function(D,d){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),T=f();O(y,"ndarray",T);d.exports=y
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=k(),m,x=h(g(__dirname,"./native.js"));w(x)?m=z:m=x;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
