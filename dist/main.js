var Client=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e),n.d(e,"performAction",(function(){return o})),n.d(e,"checkForInput",(function(){return i})),n.d(e,"postData",(function(){return a}));n(0),n(1);function o(t){let e=document.getElementById("newsUrl").value;Client.checkForInput(e),r().then((function(t){}))}document.getElementById("submit").addEventListener("click",o);const r=async()=>{let t=document.getElementById("newsUrl").value;const e=await fetch("http://localhost:3000/key");try{let n="http://api.meaningcloud.com/sentiment-2.1?key="+(await e.json()).apikey+"&lang=en&model=general&url="+t;const o=await fetch(n);try{const t=await o.json();Client.postData("http://localhost:3000/wData",{polarity:t.score_tag,confidence:t.confidence,subjectivity:t.subjectivity}).then(c())}catch(t){console.log("error",t)}}catch(t){console.log("error",t)}},c=async()=>{const t=await fetch("http://localhost:3000/all");try{const e=await t.json();let n=e.length-1;document.getElementById("Polarity").innerHTML="Polarity: "+e[n].polarity,document.getElementById("confidence").innerHTML="Confidence: "+e[n].confidence,document.getElementById("SUBJECTIVE").innerHTML="Subjectivity: "+e[n].subjectivity}catch(t){console.log("error",t)}};function i(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)||(alert("Please Enter URL in correct format, like (www.example.com/)"),!1)}const a=async(t="",e={})=>{const n=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return await n.json()}catch(t){console.log("error",t)}}}]);