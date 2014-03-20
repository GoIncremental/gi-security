
angular.module('gint.security', ['ngResource', 'gint.util', 'gint.ui']);

/*1369044063,178534957,JIT Construction: v819514,en_US*/

/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {window.FB || (function(window) {
var self = window, document = window.document;
var setTimeout = window.setTimeout, setInterval = window.setInterval;var __DEV__ = 0;
function emptyFunction() {};

var require,__d;(function(a){var b={},c={},d=['global','require','requireDynamic','requireLazy','module','exports'];require=function(e,f){if(c.hasOwnProperty(e))return c[e];if(!b.hasOwnProperty(e)){if(f)return null;throw new Error('Module '+e+' has not been defined');}var g=b[e],h=g.deps,i=h.length,j,k=[];for(var l=0;l<i;l++){switch(h[l]){case 'module':j=g;break;case 'exports':j=g.exports;break;case 'global':j=a;break;case 'require':j=require;break;case 'requireDynamic':j=require;break;case 'requireLazy':j=null;break;default:j=require(h[l]);}k.push(j);}g.factory.apply(a,k);c[e]=g.exports;return g.exports;};__d=function(e,f,g,h){switch(typeof g){case 'function':b[e]={factory:g,deps:d.concat(f),exports:{}};if(h===3)require(e);break;case 'object':c[e]=g;break;default:throw new TypeError('Wrong type for factory object');}};})(this);
var ES5 = function(){
__d("ES5ArrayPrototype",[],function(a,b,c,d,e,f){var g={};g.map=function(h,i){if(typeof h!='function')throw new TypeError();var j,k=this.length,l=new Array(k);for(j=0;j<k;++j)if(j in this)l[j]=h.call(i,this[j],j,this);return l;};g.forEach=function(h,i){g.map.call(this,h,i);};g.filter=function(h,i){if(typeof h!='function')throw new TypeError();var j,k,l=this.length,m=[];for(j=0;j<l;++j)if(j in this){k=this[j];if(h.call(i,k,j,this))m.push(k);}return m;};g.every=function(h,i){if(typeof h!='function')throw new TypeError();var j=new Object(this),k=j.length;for(var l=0;l<k;l++)if(l in j)if(!h.call(i,j[l],l,j))return false;return true;};g.some=function(h,i){if(typeof h!='function')throw new TypeError();var j=new Object(this),k=j.length;for(var l=0;l<k;l++)if(l in j)if(h.call(i,j[l],l,j))return true;return false;};g.indexOf=function(h,i){var j=this.length;i|=0;if(i<0)i+=j;for(;i<j;i++)if(i in this&&this[i]===h)return i;return -1;};e.exports=g;});
__d("ES5FunctionPrototype",[],function(a,b,c,d,e,f){var g={};g.bind=function(h){if(typeof this!='function')throw new TypeError('Bind must be called on a function');var i=this,j=Array.prototype.slice.call(arguments,1);function k(){return i.apply(h,j.concat(Array.prototype.slice.call(arguments)));}k.displayName='bound:'+(i.displayName||i.name||'(?)');k.toString=function l(){return 'bound: '+i;};return k;};e.exports=g;});
__d("ES5StringPrototype",[],function(a,b,c,d,e,f){var g={};g.trim=function(){if(this==null)throw new TypeError('String.prototype.trim called on null or undefined');return String.prototype.replace.call(this,/^\s+|\s+$/g,'');};e.exports=g;});
__d("ES5Array",[],function(a,b,c,d,e,f){var g={};g.isArray=function(h){return Object.prototype.toString.call(h)=='[object Array]';};e.exports=g;});
__d("ES5Object",[],function(a,b,c,d,e,f){var g={};g.create=function(h){var i=typeof h;if(i!='object'&&i!='function')throw new TypeError('Object prototype may only be a Object or null');var j=new Function();j.prototype=h;return new j();};g.keys=function(h){var i=typeof h;if(i!='object'&&i!='function'||h===null)throw new TypeError('Object.keys called on non-object');var j=[];for(var k in h)if(Object.prototype.hasOwnProperty.call(h,k))j.push(k);var l=!({toString:true}).propertyIsEnumerable('toString'),m=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','prototypeIsEnumerable','constructor'];if(l)for(var n=0;n<m.length;n++){var o=m[n];if(Object.prototype.hasOwnProperty.call(h,o))j.push(o);}return j;};e.exports=g;});
__d("ES5Date",[],function(a,b,c,d,e,f){var g={};g.now=function(){return new Date().getTime();};e.exports=g;});
/**
 * @providesModule JSON3
 * @option preserve-header
 *
 *! JSON v3.2.3 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org
 */__d("JSON3",[],function(a,b,c,d,e,f){(function(){var g={}.toString,h,i,j,k=e.exports={},l='{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba=new Date(-3509827334573292),ca,da,ea;try{ba=ba.getUTCFullYear()==-109252&&ba.getUTCMonth()===0&&ba.getUTCDate()==1&&ba.getUTCHours()==10&&ba.getUTCMinutes()==37&&ba.getUTCSeconds()==6&&ba.getUTCMilliseconds()==708;}catch(fa){}if(!ba){ca=Math.floor;da=[0,31,59,90,120,151,181,212,243,273,304,334];ea=function(ga,ha){return da[ha]+365*(ga-1970)+ca((ga-1969+(ha=+(ha>1)))/4)-ca((ga-1901+ha)/100)+ca((ga-1601+ha)/400);};}if(typeof JSON=="object"&&JSON){k.stringify=JSON.stringify;k.parse=JSON.parse;}if((m=typeof k.stringify=="function"&&!ea)){(ba=function(){return 1;}).toJSON=ba;try{m=k.stringify(0)==="0"&&k.stringify(new Number())==="0"&&k.stringify(new String())=='""'&&k.stringify(g)===j&&k.stringify(j)===j&&k.stringify()===j&&k.stringify(ba)==="1"&&k.stringify([ba])=="[1]"&&k.stringify([j])=="[null]"&&k.stringify(null)=="null"&&k.stringify([j,g,null])=="[null,null,null]"&&k.stringify({result:[ba,true,false,null,"\0\b\n\f\r\t"]})==l&&k.stringify(null,ba)==="1"&&k.stringify([1,2],null,1)=="[\n 1,\n 2\n]"&&k.stringify(new Date(-8.64e+15))=='"-271821-04-20T00:00:00.000Z"'&&k.stringify(new Date(8.64e+15))=='"+275760-09-13T00:00:00.000Z"'&&k.stringify(new Date(-62198755200000))=='"-000001-01-01T00:00:00.000Z"'&&k.stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"';}catch(fa){m=false;}}if(typeof k.parse=="function")try{if(k.parse("0")===0&&!k.parse(false)){ba=k.parse(l);if((r=ba.A.length==5&&ba.A[0]==1)){try{r=!k.parse('"\t"');}catch(fa){}if(r)try{r=k.parse("01")!=1;}catch(fa){}}}}catch(fa){r=false;}ba=l=null;if(!m||!r){if(!(h={}.hasOwnProperty))h=function(ga){var ha={},ia;if((ha.__proto__=null,ha.__proto__={toString:1},ha).toString!=g){h=function(ja){var ka=this.__proto__,la=ja in (this.__proto__=null,this);this.__proto__=ka;return la;};}else{ia=ha.constructor;h=function(ja){var ka=(this.constructor||ia).prototype;return ja in this&&!(ja in ka&&this[ja]===ka[ja]);};}ha=null;return h.call(this,ga);};i=function(ga,ha){var ia=0,ja,ka,la,ma;(ja=function(){this.valueOf=0;}).prototype.valueOf=0;ka=new ja();for(la in ka)if(h.call(ka,la))ia++;ja=ka=null;if(!ia){ka=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];ma=function(na,oa){var pa=g.call(na)=="[object Function]",qa,ra;for(qa in na)if(!(pa&&qa=="prototype")&&h.call(na,qa))oa(qa);for(ra=ka.length;qa=ka[--ra];h.call(na,qa)&&oa(qa));};}else if(ia==2){ma=function(na,oa){var pa={},qa=g.call(na)=="[object Function]",ra;for(ra in na)if(!(qa&&ra=="prototype")&&!h.call(pa,ra)&&(pa[ra]=1)&&h.call(na,ra))oa(ra);};}else ma=function(na,oa){var pa=g.call(na)=="[object Function]",qa,ra;for(qa in na)if(!(pa&&qa=="prototype")&&h.call(na,qa)&&!(ra=qa==="constructor"))oa(qa);if(ra||h.call(na,(qa="constructor")))oa(qa);};return ma(ga,ha);};if(!m){n={"\\":"\\\\",'"':'\\"',"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};o=function(ga,ha){return ("000000"+(ha||0)).slice(-ga);};p=function(ga){var ha='"',ia=0,ja;for(;ja=ga.charAt(ia);ia++)ha+='\\"\b\f\n\r\t'.indexOf(ja)>-1?n[ja]:ja<" "?"\\u00"+o(2,ja.charCodeAt(0).toString(16)):ja;return ha+'"';};q=function(ga,ha,ia,ja,ka,la,ma){var na=ha[ga],oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,ab,bb,cb;if(typeof na=="object"&&na){oa=g.call(na);if(oa=="[object Date]"&&!h.call(na,"toJSON")){if(na>-1/0&&na<1/0){if(ea){ra=ca(na/86400000);for(pa=ca(ra/365.2425)+1970-1;ea(pa+1,0)<=ra;pa++);for(qa=ca((ra-ea(pa,0))/30.42);ea(pa,qa+1)<=ra;qa++);ra=1+ra-ea(pa,qa);sa=(na%86400000+86400000)%86400000;ta=ca(sa/3600000)%24;ua=ca(sa/60000)%60;va=ca(sa/1000)%60;wa=sa%1000;}else{pa=na.getUTCFullYear();qa=na.getUTCMonth();ra=na.getUTCDate();ta=na.getUTCHours();ua=na.getUTCMinutes();va=na.getUTCSeconds();wa=na.getUTCMilliseconds();}na=(pa<=0||pa>=10000?(pa<0?"-":"+")+o(6,pa<0?-pa:pa):o(4,pa))+"-"+o(2,qa+1)+"-"+o(2,ra)+"T"+o(2,ta)+":"+o(2,ua)+":"+o(2,va)+"."+o(3,wa)+"Z";}else na=null;}else if(typeof na.toJSON=="function"&&((oa!="[object Number]"&&oa!="[object String]"&&oa!="[object Array]")||h.call(na,"toJSON")))na=na.toJSON(ga);}if(ia)na=ia.call(ha,ga,na);if(na===null)return "null";oa=g.call(na);if(oa=="[object Boolean]"){return ""+na;}else if(oa=="[object Number]"){return na>-1/0&&na<1/0?""+na:"null";}else if(oa=="[object String]")return p(na);if(typeof na=="object"){for(ab=ma.length;ab--;)if(ma[ab]===na)throw TypeError();ma.push(na);xa=[];bb=la;la+=ka;if(oa=="[object Array]"){for(za=0,ab=na.length;za<ab;cb||(cb=true),za++){ya=q(za,na,ia,ja,ka,la,ma);xa.push(ya===j?"null":ya);}return cb?(ka?"[\n"+la+xa.join(",\n"+la)+"\n"+bb+"]":("["+xa.join(",")+"]")):"[]";}else{i(ja||na,function(db){var eb=q(db,na,ia,ja,ka,la,ma);if(eb!==j)xa.push(p(db)+":"+(ka?" ":"")+eb);cb||(cb=true);});return cb?(ka?"{\n"+la+xa.join(",\n"+la)+"\n"+bb+"}":("{"+xa.join(",")+"}")):"{}";}ma.pop();}};k.stringify=function(ga,ha,ia){var ja,ka,la,ma,na,oa;if(typeof ha=="function"||typeof ha=="object"&&ha)if(g.call(ha)=="[object Function]"){ka=ha;}else if(g.call(ha)=="[object Array]"){la={};for(ma=0,na=ha.length;ma<na;oa=ha[ma++],((g.call(oa)=="[object String]"||g.call(oa)=="[object Number]")&&(la[oa]=1)));}if(ia)if(g.call(ia)=="[object Number]"){if((ia-=ia%1)>0)for(ja="",ia>10&&(ia=10);ja.length<ia;ja+=" ");}else if(g.call(ia)=="[object String]")ja=ia.length<=10?ia:ia.slice(0,10);return q("",(oa={},oa[""]=ga,oa),ka,la,ja,"",[]);};}if(!r){s=String.fromCharCode;t={"\\":"\\",'"':'"',"/":"/",b:"\b",t:"\t",n:"\n",f:"\f",r:"\r"};u=function(){z=aa=null;throw SyntaxError();};v=function(){var ga=aa,ha=ga.length,ia,ja,ka,la,ma;while(z<ha){ia=ga.charAt(z);if("\t\r\n ".indexOf(ia)>-1){z++;}else if("{}[]:,".indexOf(ia)>-1){z++;return ia;}else if(ia=='"'){for(ja="@",z++;z<ha;){ia=ga.charAt(z);if(ia<" "){u();}else if(ia=="\\"){ia=ga.charAt(++z);if('\\"/btnfr'.indexOf(ia)>-1){ja+=t[ia];z++;}else if(ia=="u"){ka=++z;for(la=z+4;z<la;z++){ia=ga.charAt(z);if(!(ia>="0"&&ia<="9"||ia>="a"&&ia<="f"||ia>="A"&&ia<="F"))u();}ja+=s("0x"+ga.slice(ka,z));}else u();}else{if(ia=='"')break;ja+=ia;z++;}}if(ga.charAt(z)=='"'){z++;return ja;}u();}else{ka=z;if(ia=="-"){ma=true;ia=ga.charAt(++z);}if(ia>="0"&&ia<="9"){if(ia=="0"&&(ia=ga.charAt(z+1),ia>="0"&&ia<="9"))u();ma=false;for(;z<ha&&(ia=ga.charAt(z),ia>="0"&&ia<="9");z++);if(ga.charAt(z)=="."){la=++z;for(;la<ha&&(ia=ga.charAt(la),ia>="0"&&ia<="9");la++);if(la==z)u();z=la;}ia=ga.charAt(z);if(ia=="e"||ia=="E"){ia=ga.charAt(++z);if(ia=="+"||ia=="-")z++;for(la=z;la<ha&&(ia=ga.charAt(la),ia>="0"&&ia<="9");la++);if(la==z)u();z=la;}return +ga.slice(ka,z);}if(ma)u();if(ga.slice(z,z+4)=="true"){z+=4;return true;}else if(ga.slice(z,z+5)=="false"){z+=5;return false;}else if(ga.slice(z,z+4)=="null"){z+=4;return null;}u();}}return "$";};w=function(ga){var ha,ia,ja;if(ga=="$")u();if(typeof ga=="string"){if(ga.charAt(0)=="@")return ga.slice(1);if(ga=="["){ha=[];for(;;ia||(ia=true)){ga=v();if(ga=="]")break;if(ia)if(ga==","){ga=v();if(ga=="]")u();}else u();if(ga==",")u();ha.push(w(ga));}return ha;}else if(ga=="{"){ha={};for(;;ia||(ia=true)){ga=v();if(ga=="}")break;if(ia)if(ga==","){ga=v();if(ga=="}")u();}else u();if(ga==","||typeof ga!="string"||ga.charAt(0)!="@"||v()!=":")u();ha[ga.slice(1)]=w(v());}return ha;}u();}return ga;};y=function(ga,ha,ia){var ja=x(ga,ha,ia);if(ja===j){delete ga[ha];}else ga[ha]=ja;};x=function(ga,ha,ia){var ja=ga[ha],ka;if(typeof ja=="object"&&ja)if(g.call(ja)=="[object Array]"){for(ka=ja.length;ka--;)y(ja,ka,ia);}else i(ja,function(la){y(ja,la,ia);});return ia.call(ga,ha,ja);};k.parse=function(ga,ha){z=0;aa=ga;var ia=w(v());if(v()!="$")u();z=aa=null;return ha&&g.call(ha)=="[object Function]"?x((ba={},ba[""]=ia,ba),"",ha):ia;};}}}).call(this);});
__d("ES5",["ES5ArrayPrototype","ES5FunctionPrototype","ES5StringPrototype","ES5Array","ES5Object","ES5Date","JSON3"],function(a,b,c,d,e,f){var g=b('ES5ArrayPrototype'),h=b('ES5FunctionPrototype'),i=b('ES5StringPrototype'),j=b('ES5Array'),k=b('ES5Object'),l=b('ES5Date'),m=b('JSON3'),n=Array.prototype.slice,o=Object.prototype.toString,p={'JSON.stringify':m.stringify,'JSON.parse':m.parse},q={array:g,'function':h,string:i,Object:k,Array:j,Date:l};for(var r in q){if(!q.hasOwnProperty(r))continue;var s=q[r],t=r===r.toLowerCase()?window[r.replace(/^\w/,function(x){return x.toUpperCase();})].prototype:window[r];for(var u in s){if(!s.hasOwnProperty(u))continue;var v=t[u];p[r+'.'+u]=v&&/\{\s+\[native code\]\s\}/.test(v)?v:s[u];}}function w(x,y,z){var aa=n.call(arguments,3),ba=z?/\s(.*)\]/.exec(o.call(x).toLowerCase())[1]:x,ca=p[ba+'.'+y]||x[y];if(typeof ca==='function')return ca.apply(x,aa);}e.exports=w;});ES5 = require('ES5');
return ES5.apply(null, arguments);
};

__d("sdk.RuntimeConfig",[],{"locale":"en_US","rtl":false});__d("SDKConfig",[],{"bustCache":true,"tagCountLogRate":0.01,"errorHandling":{"rate":4},"usePluginPipe":true,"features":{"xfbml_profile_pic_server":true,"error_handling":4,"oauth_ping":true},"api":{"mode":"warn","whitelist":["Canvas","Canvas.Prefetcher","Canvas.Prefetcher.addStaticResource","Canvas.Prefetcher.setCollectionMode","Canvas.getPageInfo","Canvas.hideFlashElement","Canvas.scrollTo","Canvas.setAutoGrow","Canvas.setDoneLoading","Canvas.setSize","Canvas.setUrlHandler","Canvas.showFlashElement","Canvas.startTimer","Canvas.stopTimer","Data","Data.process","Data.query","Data.query:wait","Data.waitOn","Data.waitOn:wait","Event","Event.subscribe","Event.unsubscribe","Music.flashCallback","Music.init","Music.send","Payment","Payment.cancelFlow","Payment.continueFlow","Payment.init","Payment.parse","Payment.setSize","ThirdPartyProvider","ThirdPartyProvider.init","ThirdPartyProvider.sendData","UA","UA.nativeApp","XFBML","XFBML.RecommendationsBar","XFBML.RecommendationsBar.markRead","XFBML.parse","addFriend","api","getAccessToken","getAuthResponse","getLoginStatus","getUserID","init","login","logout","publish","share","ui","ui:subscribe"]},"initSitevars":{"enableMobileComments":1,"iframePermissions":{"read_stream":false,"manage_mailbox":false,"manage_friendlists":false,"read_mailbox":false,"publish_checkins":true,"status_update":true,"photo_upload":true,"video_upload":true,"sms":false,"create_event":true,"rsvp_event":true,"offline_access":true,"email":true,"xmpp_login":false,"create_note":true,"share_item":true,"export_stream":false,"publish_stream":true,"publish_likes":true,"ads_management":false,"contact_email":true,"access_private_data":false,"read_insights":false,"read_requests":false,"read_friendlists":true,"manage_pages":false,"physical_login":false,"manage_groups":false,"read_deals":false}}});__d("UrlMapConfig",[],{"www":"www.facebook.com","m":"m.facebook.com","connect":"connect.facebook.net","api_https":"api.facebook.com","api_read_https":"api-read.facebook.com","graph_https":"graph.facebook.com","fbcdn_http":"static.ak.fbcdn.net","fbcdn_https":"fbstatic-a.akamaihd.net","cdn_http":"static.ak.facebook.com","cdn_https":"s-static.ak.facebook.com"});__d("XDConfig",[],{"XdUrl":"connect\/xd_arbiter.php?version=24","Flash":{"path":"https:\/\/connect.facebook.net\/rsrc.php\/v1\/yX\/r\/VpkNidONSDC.swf"},"useCdn":true});__d("CssConfig",[],{"rules":".fb_hidden{position:absolute;top:-10000px;z-index:10001}\n.fb_invisible{display:none}\n.fb_reset{background:none;border-spacing:0;border:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}\n.fb_link img{border:none}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}\n.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}\n.fb_dialog_content{background:#fff;color:#333}\n.fb_dialog_close_icon{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px;top:8px\\9;right:7px\\9}\n.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}\n.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}\n.fb_dialog_close_icon:hover{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif)}\n.fb_dialog_close_icon:active{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif)}\n.fb_dialog_loader{background-color:#f2f2f2;border:1px solid #606060;font-size:24px;padding:20px}\n.fb_dialog_top_left,\n.fb_dialog_top_right,\n.fb_dialog_bottom_left,\n.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}\n\/* \u0040noflip *\/\n.fb_dialog_top_left{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}\n\/* \u0040noflip *\/\n.fb_dialog_top_right{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}\n\/* \u0040noflip *\/\n.fb_dialog_bottom_left{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}\n\/* \u0040noflip *\/\n.fb_dialog_bottom_right{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right,\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right{width:10px;height:100\u0025}\n.fb_dialog_vert_left{margin-left:-10px}\n.fb_dialog_vert_right{right:0;margin-right:-10px}\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{width:100\u0025;height:10px}\n.fb_dialog_horiz_top{margin-top:-10px}\n.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}\n.fb_dialog_iframe{line-height:0}\n.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #3b5998;color:#fff;font-size:14px;font-weight:bold;margin:0}\n.fb_dialog_content .dialog_title > span{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yd\/r\/Cou7n-nqK52.gif)\nno-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}\nbody.fb_hidden{-webkit-transform:none;height:100\u0025;margin:0;left:-10000px;overflow:visible;position:absolute;top:-10000px;width:100\u0025\n}\n.fb_dialog.fb_dialog_mobile.loading{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ya\/r\/3rhSv5V8j3o.gif)\nwhite no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}\n.fb_dialog.fb_dialog_mobile.loading.centered{max-height:590px;min-height:590px;max-width:500px;min-width:500px}\n#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;left:0;top:0;width:100\u0025;min-height:100\u0025;z-index:10000}\n#fb-root #fb_dialog_ipad_overlay.hidden{display:none}\n.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}\n.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0 0, 0 100\u0025, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}\n.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100\u0025\n}\n.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px\n}\n.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px\n}\n.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0 0, 0 100\u0025, from(#4966A6),\ncolor-stop(0.5, #355492), to(#2A4887));border:1px solid #29447e;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset,\nrgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}\n.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}\n.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}\n.fb_dialog_content .dialog_content{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/y9\/r\/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}\n.fb_dialog_content .dialog_footer{background:#f2f2f2;border:1px solid #555;border-top-color:#ccc;height:40px}\n#fb_dialog_loader_close{float:left}\n.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}\n.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}\n.fb_iframe_widget{display:inline-block;position:relative}\n.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}\n.fb_iframe_widget iframe{position:absolute}\n.fb_iframe_widget_lift{z-index:1}\n.fb_hide_iframes iframe{position:relative;left:-10000px}\n.fb_iframe_widget_loader{position:relative;display:inline-block}\n.fb_iframe_widget_fluid{display:inline}\n.fb_iframe_widget_fluid span{width:100\u0025}\n.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}\n.fb_iframe_widget_loader .FB_Loader{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/y9\/r\/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}\n.fb_connect_bar_container div,\n.fb_connect_bar_container span,\n.fb_connect_bar_container a,\n.fb_connect_bar_container img,\n.fb_connect_bar_container strong{background:none;border-spacing:0;border:0;direction:ltr;font-style:normal;font-variant:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal;vertical-align:baseline}\n.fb_connect_bar_container{position:fixed;left:0 !important;right:0 !important;height:42px !important;padding:0 25px !important;margin:0 !important;vertical-align:middle !important;border-bottom:1px solid #333 !important;background:#3b5998 !important;z-index:99999999 !important;overflow:hidden !important}\n.fb_connect_bar_container_ie6{position:absolute;top:expression(document.compatMode==\"CSS1Compat\"? document.documentElement.scrollTop+\"px\":body.scrollTop+\"px\")}\n.fb_connect_bar{position:relative;margin:auto;height:100\u0025;width:100\u0025;padding:6px 0 0 0 !important;background:none;color:#fff !important;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif !important;font-size:13px !important;font-style:normal !important;font-variant:normal !important;font-weight:normal !important;letter-spacing:normal !important;line-height:1 !important;text-decoration:none !important;text-indent:0 !important;text-shadow:none !important;text-transform:none !important;white-space:normal !important;word-spacing:normal !important}\n.fb_connect_bar a:hover{color:#fff}\n.fb_connect_bar .fb_profile img{height:30px;width:30px;vertical-align:middle;margin:0 6px 5px 0}\n.fb_connect_bar div a,\n.fb_connect_bar span,\n.fb_connect_bar span a{color:#bac6da;font-size:11px;text-decoration:none}\n.fb_connect_bar .fb_buttons{float:right;margin-top:7px}\n.fb_edge_widget_with_comment{position:relative;*z-index:1000}\n.fb_edge_widget_with_comment span.fb_edge_comment_widget{position:absolute}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget{z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget .FB_Loader{left:0;top:1px;margin-top:6px;margin-left:0;background-position:50\u0025 50\u0025;background-color:#fff;height:150px;width:394px;border:1px #666 solid;border-bottom:2px solid #283e6c;z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.dark .FB_Loader{background-color:#000;border-bottom:2px solid #ccc}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.siderender\n.FB_Loader{margin-top:0}\n.fbpluginrecommendationsbarleft,\n.fbpluginrecommendationsbarright{position:fixed !important;bottom:0;z-index:999}\n\/* \u0040noflip *\/\n.fbpluginrecommendationsbarleft{left:10px}\n\/* \u0040noflip *\/\n.fbpluginrecommendationsbarright{right:10px}","components":["fb.css.base","fb.css.dialog","fb.css.iframewidget","fb.css.connectbarwidget","fb.css.edgecommentwidget","fb.css.sendbuttonformwidget","fb.css.plugin.recommendationsbar"]});__d("CanvasPrefetcherConfig",[],{"blacklist":[144959615576466],"sampleRate":500});__d("PluginPipeConfig",[],{"threshold":0,"enabledApps":{"209753825810663":1,"187288694643718":1}});__d("ConnectBarConfig",[],{"imgs":{"buttonUrl":"rsrc.php\/v2\/yY\/r\/h_Y6u1wrZPW.png","missingProfileUrl":"rsrc.php\/v2\/yo\/r\/UlIqmHJn-SK.gif"}});__d("ProfilePicConfig",[],{"defPicMap":{"pic":"rsrc.php\/v1\/yh\/r\/C5yt7Cqf3zU.jpg","pic_big":"rsrc.php\/v2\/yL\/r\/HsTZSDw4avx.gif","pic_big_with_logo":"rsrc.php\/v2\/y5\/r\/SRDCaeCL7hM.gif","pic_small":"rsrc.php\/v1\/yi\/r\/odA9sNLrE86.jpg","pic_small_with_logo":"rsrc.php\/v2\/yD\/r\/k1xiRXKnlGd.gif","pic_square":"rsrc.php\/v2\/yo\/r\/UlIqmHJn-SK.gif","pic_square_with_logo":"rsrc.php\/v2\/yX\/r\/9dYJBPDHXwZ.gif","pic_with_logo":"rsrc.php\/v2\/yu\/r\/fPPR9f2FJ3t.gif"}});__d("ApiClientConfig",[],{"FlashRequest":{"swfUrl":"https:\/\/connect.facebook.net\/rsrc.php\/v1\/yB\/r\/YV5wijq5fkW.swf"}});
__d("QueryString",[],function(a,b,c,d,e,f){function g(k){var l=[];ES5(ES5('Object','keys',false,k),'forEach',true,function(m){var n=k[m];if(typeof n==='undefined')return;if(n===null){l.push(m);return;}l.push(encodeURIComponent(m)+'='+encodeURIComponent(n));});return l.join('&');}function h(k,l){var m={};if(k==='')return m;var n=k.split('&');for(var o=0;o<n.length;o++){var p=n[o].split('=',2),q=decodeURIComponent(p[0]);if(l&&m.hasOwnProperty(q))throw new URIError('Duplicate key: '+q);m[q]=p.length===2?decodeURIComponent(p[1]):null;}return m;}function i(k,l){return k+(~ES5(k,'indexOf',true,'?')?'&':'?')+(typeof l==='string'?l:j.encode(l));}var j={encode:g,decode:h,appendToUrl:i};e.exports=j;});
__d("copyProperties",[],function(a,b,c,d,e,f){function g(h,i,j,k,l,m,n){h=h||{};var o=[i,j,k,l,m],p=0,q;while(o[p]){q=o[p++];for(var r in q)h[r]=q[r];if(q.hasOwnProperty&&q.hasOwnProperty('toString')&&(typeof q.toString!='undefined')&&(h.toString!==q.toString))h.toString=q.toString;}return h;}e.exports=g;});
__d("ManagedError",[],function(a,b,c,d,e,f){function g(h,i){Error.prototype.constructor.call(this,h);this.message=h;this.innerError=i;}g.prototype=new Error();g.prototype.constructor=g;e.exports=g;});
__d("AssertionError",["ManagedError"],function(a,b,c,d,e,f){var g=b('ManagedError');function h(i){g.prototype.constructor.apply(this,arguments);}h.prototype=new g();h.prototype.constructor=h;e.exports=h;});
__d("sprintf",[],function(a,b,c,d,e,f){function g(h,i){i=Array.prototype.slice.call(arguments,1);var j=0;return h.replace(/%s/g,function(k){return i[j++];});}e.exports=g;});
__d("Assert",["AssertionError","sprintf"],function(a,b,c,d,e,f){var g=b('AssertionError'),h=b('sprintf');function i(n,o){if(!n)throw new g(o);return n;}function j(n,o,p){var q;if(o===undefined){q='undefined';}else if(o===null){q='null';}else{var r=Object.prototype.toString.call(o);q=/\s(\w*)/.exec(r)[1].toLowerCase();}i(ES5(n,'indexOf',true,q)!==-1,p||h('Expression is of type %s, not %s',q,n));return o;}function k(n,o,p){i(o instanceof n,p||'Expression not instance of type');return o;}function l(n,o){m['is'+n]=o;m['maybe'+n]=function(p,q){if(p!=null)o(p,q);};}var m={isInstanceOf:k,isTrue:i,isTruthy:function(n,o){return i(!!n,o);},type:j,define:function(n,o){n=n.substring(0,1).toUpperCase()+n.substring(1).toLowerCase();l(n,function(p,q){i(o(p),q);});}};ES5(['Array','Boolean','Date','Function','Null','Number','Object','Regexp','String','Undefined'],'forEach',true,function(n){l(n,ES5(j,'bind',true,null,n.toLowerCase()));});e.exports=m;});
__d("Type",["copyProperties","Assert"],function(a,b,c,d,e,f){var g=b('copyProperties'),h=b('Assert');function i(){var m=this.__mixins;if(m)for(var n=0;n<m.length;n++)m[n].apply(this,arguments);}function j(m,n){if(n instanceof m)return true;if(n instanceof i)for(var o=0;o<n.__mixins.length;o++)if(n.__mixins[o]==m)return true;return false;}function k(m,n){var o=m.prototype;if(!ES5('Array','isArray',false,n))n=[n];for(var p=0;p<n.length;p++){var q=n[p];if(typeof q=='function'){o.__mixins.push(q);q=q.prototype;}ES5(ES5('Object','keys',false,q),'forEach',true,function(r){o[r]=q[r];});}}function l(m,n,o){var p=n&&n.hasOwnProperty('constructor')?n.constructor:function(){this.parent.apply(this,arguments);};h.isFunction(p);if(m&&m.prototype instanceof i===false)throw new Error('parent type does not inherit from Type');m=m||i;var q=new Function();q.prototype=m.prototype;p.prototype=new q();g(p.prototype,n);p.prototype.constructor=p;p.parent=m;p.prototype.__mixins=m.prototype.__mixins?Array.prototype.slice.call(m.prototype.__mixins):[];if(o)k(p,o);p.prototype.parent=function(){this.parent=m.prototype.parent;m.apply(this,arguments);};p.prototype.parentCall=function(r){return m.prototype[r].apply(this,Array.prototype.slice.call(arguments,1));};p.extend=function(r,s){return l(this,r,s);};return p;}g(i.prototype,{instanceOf:function(m){return j(m,this);}});g(i,{extend:function(m,n){return typeof m==='function'?l.apply(null,arguments):l(null,m,n);},instanceOf:j});e.exports=i;});
__d("ObservableMixin",[],function(a,b,c,d,e,f){function g(){this.__observableEvents={};}g.prototype={inform:function(h){var i=Array.prototype.slice.call(arguments,1),j=Array.prototype.slice.call(this.getSubscribers(h));for(var k=0;k<j.length;k++){if(j[k]===null)continue;try{j[k].apply(this,i);}catch(l){setTimeout(function(){throw l;},0);}}return this;},getSubscribers:function(h){return this.__observableEvents[h]||(this.__observableEvents[h]=[]);},clearSubscribers:function(h){if(h)this.__observableEvents[h]=[];return this;},clearAllSubscribers:function(){this.__observableEvents={};return this;},subscribe:function(h,i){var j=this.getSubscribers(h);j.push(i);return this;},unsubscribe:function(h,i){var j=this.getSubscribers(h);for(var k=0;k<j.length;k++)if(j[k]===i){j.splice(k,1);break;}return this;},monitor:function(h,i){if(!i()){var j=ES5(function(k){if(i.apply(i,arguments))this.unsubscribe(h,j);},'bind',true,this);this.subscribe(h,j);}return this;}};e.exports=g;});
__d("sdk.Model",["Type","ObservableMixin"],function(a,b,c,d,e,f){var g=b('Type'),h=b('ObservableMixin'),i=g.extend({constructor:function(j){this.parent();var k={},l=this;ES5(ES5('Object','keys',false,j),'forEach',true,function(m){k[m]=j[m];l['set'+m]=function(n){if(n===k[m])return this;k[m]=n;l.inform(m+'.change',n);return l;};l['get'+m]=function(){return k[m];};});}},h);e.exports=i;});
__d("sdk.Runtime",["sdk.Model","copyProperties","sdk.RuntimeConfig"],function(a,b,c,d,e,f){var g=b('sdk.Model'),h=c('sdk.RuntimeConfig'),i=b('copyProperties'),j={UNKNOWN:0,PAGETAB:1,CANVAS:2,PLATFORM:4},k=new g({AccessToken:'',ClientID:'',Environment:j.UNKNOWN,Initialized:false,Locale:h.locale,LoginStatus:undefined,Rtl:h.rtl,Scope:undefined,Secure:undefined,UseCookie:false,UserID:'',CookieUserID:''});i(k,{ENVIRONMENTS:j,isEnvironment:function(l){var m=this.getEnvironment();return (l|m)===m;}});(function(){var l=/app_runner/.test(window.name)?j.PAGETAB:/iframe_canvas/.test(window.name)?j.CANVAS:j.UNKNOWN;if((l|j.PAGETAB)===l)l=l|j.CANVAS;k.setEnvironment(l);})();e.exports=k;});
__d("sdk.Cookie",["QueryString","sdk.Runtime"],function(a,b,c,d,e,f){var g=b('QueryString'),h=b('sdk.Runtime'),i=null;function j(m,n,o){m=m+h.getClientID();var p=i&&i!=='.';if(p){document.cookie=m+'=; expires=Wed, 04 Feb 2004 08:00:00 GMT;';document.cookie=m+'=; expires=Wed, 04 Feb 2004 08:00:00 GMT;'+'domain='+location.hostname+';';}var q=new Date(o).toGMTString();document.cookie=m+'='+n+(n&&o===0?'':'; expires='+q)+'; path=/'+(p?'; domain='+i:'');}function k(m){m=m+h.getClientID();var n=new RegExp('\\b'+m+'=([^;]*)\\b');return n.test(document.cookie)?RegExp.$1:null;}var l={setDomain:function(m){i=m;var n=g.encode({base_domain:i&&i!=='.'?i:''}),o=new Date();o.setFullYear(o.getFullYear()+1);j('fbm_',n,o.getTime());},getDomain:function(){return i;},loadMeta:function(){var m=k('fbm_');if(m){var n=g.decode(m);if(!i)i=n.base_domain;return n;}},loadSignedRequest:function(){return k('fbsr_');},setSignedRequestCookie:function(m,n){if(!m)throw new Error('Value passed to Cookie.setSignedRequestCookie '+'was empty.');j('fbsr_',m,n);},clearSignedRequestCookie:function(){j('fbsr_','',0);},setRaw:j};e.exports=l;});
__d("guid",[],function(a,b,c,d,e,f){function g(){return 'f'+(Math.random()*(1<<30)).toString(16).replace('.','');}e.exports=g;});
__d("hasNamePropertyBug",["guid"],function(a,b,c,d,e,f){var g=b('guid'),h;function i(){var k=document.createElement("form"),l=k.appendChild(document.createElement("input"));l.name=g();h=l!==k.elements[l.name];k=l=null;return h;}function j(){return typeof h==='undefined'?i():h;}e.exports=j;});
__d("wrapFunction",[],function(a,b,c,d,e,f){var g={};function h(i,j,k){j=j||'default';return function(){var l=j in g?g[j](i,k):i;return l.apply(this,arguments);};}h.setWrapper=function(i,j){j=j||'default';g[j]=i;};e.exports=h;});
__d("DOMEventListener",["wrapFunction"],function(a,b,c,d,e,f){var g=b('wrapFunction'),h,i;if(window.addEventListener){h=function(k,l,m){m.wrapper=g(m,'entry',k+':'+l);k.addEventListener(l,m.wrapper,false);};i=function(k,l,m){k.removeEventListener(l,m.wrapper,false);};}else if(window.attachEvent){h=function(k,l,m){m.wrapper=g(m,'entry',k+':'+l);k.attachEvent('on'+l,m.wrapper);};i=function(k,l,m){k.detachEvent('on'+l,m.wrapper);};}var j={add:function(k,l,m){h(k,l,m);return {remove:function(){i(k,l,m);k=null;}};},remove:i};e.exports=j;});
__d("sdk.createIframe",["copyProperties","guid","hasNamePropertyBug","DOMEventListener"],function(a,b,c,d,e,f){var g=b('copyProperties'),h=b('guid'),i=b('hasNamePropertyBug'),j=b('DOMEventListener');function k(l){l=g({},l);var m,n=l.name||h(),o=l.root,p=l.style||{border:'none'},q=l.url,r=l.onload;if(i()){m=document.createElement('<iframe name="'+n+'"/>');}else{m=document.createElement("iframe");m.name=n;}delete l.style;delete l.name;delete l.url;delete l.root;delete l.onload;var s=g({frameBorder:0,allowTransparency:true,scrolling:'no'},l);if(s.width)m.width=s.width+'px';if(s.height)m.height=s.height+'px';delete s.height;delete s.width;for(var t in s)if(s.hasOwnProperty(t))m.setAttribute(t,s[t]);g(m.style,p);m.src="javascript:false";o.appendChild(m);if(r)var u=j.add(m,'load',function(){u.remove();r();});m.src=q;return m;}e.exports=k;});
__d("DOMWrapper",[],function(a,b,c,d,e,f){var g,h,i={setRoot:function(j){g=j;},getRoot:function(){return g||document.body;},setWindow:function(j){h=j;},getWindow:function(){return h||self;}};e.exports=i;});
__d("sdk.feature",["SDKConfig"],function(a,b,c,d,e,f){var g=c('SDKConfig');function h(i,j){if(g.features&&i in g.features){var k=g.features[i];if(typeof k==='object'&&typeof k.rate==='number'){if(k.rate&&Math.floor(Math.random()*100)+1<=k.rate){return k.value||true;}else return k.value?null:false;}else return k;}return typeof j!=='undefined'?j:null;}e.exports=h;});
__d("UserAgent",[],function(a,b,c,d,e,f){var g=false,h,i,j,k,l,m,n,o,p,q,r,s,t,u;function v(){if(g)return;g=true;var x=navigator.userAgent,y=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/.exec(x),z=/(Mac OS X)|(Windows)|(Linux)/.exec(x);r=/\b(iPhone|iP[ao]d)/.exec(x);s=/\b(iP[ao]d)/.exec(x);p=/Android/i.exec(x);t=/FBAN\/\w+;/i.exec(x);u=/Mobile/i.exec(x);q=!!(/Win64/.exec(x));if(y){h=y[1]?parseFloat(y[1]):NaN;if(h&&document.documentMode)h=document.documentMode;i=y[2]?parseFloat(y[2]):NaN;j=y[3]?parseFloat(y[3]):NaN;k=y[4]?parseFloat(y[4]):NaN;if(k){y=/(?:Chrome\/(\d+\.\d+))/.exec(x);l=y&&y[1]?parseFloat(y[1]):NaN;}else l=NaN;}else h=i=j=l=k=NaN;if(z){if(z[1]){var aa=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(x);m=aa?parseFloat(aa[1].replace('_','.')):true;}else m=false;n=!!z[2];o=!!z[3];}else m=n=o=false;}var w={ie:function(){return v()||h;},ie64:function(){return w.ie()&&q;},firefox:function(){return v()||i;},opera:function(){return v()||j;},webkit:function(){return v()||k;},safari:function(){return w.webkit();},chrome:function(){return v()||l;},windows:function(){return v()||n;},osx:function(){return v()||m;},linux:function(){return v()||o;},iphone:function(){return v()||r;},mobile:function(){return v()||(r||s||p||u);},nativeApp:function(){return v()||t;},android:function(){return v()||p;},ipad:function(){return v()||s;}};e.exports=w;});
__d("sdk.getContextType",["UserAgent","sdk.Runtime"],function(a,b,c,d,e,f){var g=b('UserAgent'),h=b('sdk.Runtime');function i(){if(g.nativeApp())return 3;if(g.mobile())return 2;if(h.isEnvironment(h.ENVIRONMENTS.CANVAS))return 5;return 1;}e.exports=i;});
__d("Log",["sprintf"],function(a,b,c,d,e,f){var g=b('sprintf'),h={DEBUG:3,INFO:2,WARNING:1,ERROR:0};function i(k,l){var m=Array.prototype.slice.call(arguments,2),n=g.apply(null,m),o=window.console;if(o&&j.level>=l)o[k in o?k:'log'](n);}var j={level:-1,Level:h,debug:ES5(i,'bind',true,null,'debug',h.DEBUG),info:ES5(i,'bind',true,null,'info',h.INFO),warn:ES5(i,'bind',true,null,'warn',h.WARNING),error:ES5(i,'bind',true,null,'error',h.ERROR)};e.exports=j;});
__d("Base64",[],function(a,b,c,d,e,f){var g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';function h(l){l=(l.charCodeAt(0)<<16)|(l.charCodeAt(1)<<8)|l.charCodeAt(2);return String.fromCharCode(g.charCodeAt(l>>>18),g.charCodeAt((l>>>12)&63),g.charCodeAt((l>>>6)&63),g.charCodeAt(l&63));}var i='>___?456789:;<=_______'+'\0\1\2\3\4\5\6\7\b\t\n\13\f\r\16\17\20\21\22\23\24\25\26\27\30\31'+'______\32\33\34\35\36\37 !"#$%&\'()*+,-./0123';function j(l){l=(i.charCodeAt(l.charCodeAt(0)-43)<<18)|(i.charCodeAt(l.charCodeAt(1)-43)<<12)|(i.charCodeAt(l.charCodeAt(2)-43)<<6)|i.charCodeAt(l.charCodeAt(3)-43);return String.fromCharCode(l>>>16,(l>>>8)&255,l&255);}var k={encode:function(l){l=unescape(encodeURI(l));var m=(l.length+2)%3;l=(l+'\0\0'.slice(m)).replace(/[\s\S]{3}/g,h);return l.slice(0,l.length+m-2)+'=='.slice(m);},decode:function(l){l=l.replace(/[^A-Za-z0-9+\/]/g,'');var m=(l.length+3)&3;l=(l+'AAA'.slice(m)).replace(/..../g,j);l=l.slice(0,l.length+m-3);try{return decodeURIComponent(escape(l));}catch(n){throw new Error('Not valid UTF-8');}},encodeObject:function(l){return k.encode(ES5('JSON','stringify',false,l));},decodeObject:function(l){return ES5('JSON','parse',false,k.decode(l));},encodeNums:function(l){return String.fromCharCode.apply(String,ES5(l,'map',true,function(m){return g.charCodeAt((m|-(m>63))&-(m>0)&63);}));}};e.exports=k;});
__d("sdk.SignedRequest",["Base64"],function(a,b,c,d,e,f){var g=b('Base64');function h(j){if(!j)return null;var k=j.split('.',2)[1].replace(/\-/g,'+').replace(/\_/g,'/');return g.decodeObject(k);}var i={parse:h};e.exports=i;});
__d("UrlMap",["UrlMapConfig"],function(a,b,c,d,e,f){var g=b('UrlMapConfig'),h={resolve:function(i,j){var k=typeof j=='undefined'?location.protocol.replace(':',''):j?'https':'http';if(i in g)return k+'://'+g[i];if(typeof j=='undefined'&&i+'_'+k in g)return k+'://'+g[i+'_'+k];if(j!==true&&i+'_http' in g)return 'http://'+g[i+'_http'];if(j!==false&&i+'_https' in g)return 'https://'+g[i+'_https'];}};e.exports=h;});
__d("URL",["Assert","copyProperties","QueryString","Log"],function(a,b,c,d,e,f){var g=b('Assert'),h=b('copyProperties'),i=b('QueryString'),j=b('Log'),k=new RegExp('('+'(((\\w+):)?//)'+'(.*?@)?'+'([^~/?#:]+)'+'(:(\\d+))?'+')?'+'([^\\?$#]+)?'+'(\\?([^$#]+))?'+'(#([^$]+))?'),l=/[\0\\]/,m=/[^\w\-\.,;\/?:@=&%#$~+!*'\[\]()]+/g,n=/^[a-z0-9.][a-z0-9\-\.]+[a-z0-9.]$/,o=/\.facebook\.com$/;function p(q){g.isString(q,'The passed argument was of invalid type.');if(l.test(q))throw new URIError('The passed argument could not be parsed as a url.');if(this instanceof p===false)return new p(q);var r=q.replace(m,function(t){j.warn('Escaping unescaped character \\x%s from "%s"',t.charCodeAt(0).toString(16),q);return encodeURIComponent(t);}).match(k);if(!q||!r)throw new URIError('The passed argument could not be parsed as a url.');var s=!!location.hostname;this.setProtocol(r[4]||(s?location.protocol.replace(/:/,''):''));this.setDomain(r[6]||location.hostname);this.setPort(r[8]||(s&&!r[6]?location.port:''));this.setPath(r[9]||'');this.setSearch(r[11]||'');this.setFragment(r[13]||'');if(this._path.substring(0,1)!='/')this._path='/'+this._path;if(this._domain&&!n.test(decodeURIComponent(this._domain.toLowerCase()))){j.error('Invalid characters found in domain name: %s',this._domain);throw new URIError('Domain contained invalid characters.');}}h(p.prototype,{constructor:p,getProtocol:function(){return this._protocol;},setProtocol:function(q){this._protocol=q;return this;},getDomain:function(){return this._domain;},setDomain:function(q){this._domain=q;return this;},getPort:function(){return this._port;},setPort:function(q){this._port=q;return this;},getPath:function(){return this._path;},setPath:function(q){this._path=q;return this;},getSearch:function(){return this._search;},setSearch:function(q){this._search=q;return this;},getFragment:function(){return this._fragment;},setFragment:function(q){this._fragment=q;return this;},getParsedSearch:function(){return i.decode(this._search);},getParsedFragment:function(){return i.decode(this._fragment);},isFacebookURL:function(){return o.test(this._domain);},toString:function(){return (this._protocol?this._protocol+':':'')+(this._domain?'//'+this._domain:'')+(this._port?':'+this._port:'')+this._path+(this._search?'?'+this._search:'')+(this._fragment?'#'+this._fragment:'');},valueOf:function(){return this.toString();}});h(p,{getCurrent:function(){return new p(location.href);},getReferrer:function(){return document.referrer?new p(document.referrer):null;}});e.exports=p;});
__d("sdk.domReady",[],function(a,b,c,d,e,f){var g,h="readyState" in document?/loaded|complete/.test(document.readyState):!!document.body;function i(){if(!g)return;var l;while(l=g.shift())l();g=null;}function j(l){if(g){g.push(l);return;}else l();}if(!h){g=[];if(document.addEventListener){document.addEventListener('DOMContentLoaded',i,false);window.addEventListener('load',i,false);}else if(document.attachEvent){document.attachEvent('onreadystatechange',i);window.attachEvent('onload',i);}if(document.documentElement.doScroll&&window==window.top){var k=function(){try{document.documentElement.doScroll('left');}catch(l){setTimeout(k,0);return;}i();};k();}}e.exports=j;},3);
__d("sdk.Content",["sdk.domReady","Log","UserAgent"],function(a,b,c,d,e,f){var g=b('sdk.domReady'),h=b('Log'),i=b('UserAgent'),j,k,l={append:function(m,n){if(!n)if(!j){j=n=document.getElementById('fb-root');if(!n){h.warn('The "fb-root" div has not been created, auto-creating');j=n=document.createElement('div');n.id='fb-root';if(i.ie()||!document.body){g(function(){document.body.appendChild(n);});}else document.body.appendChild(n);}n.className+=' fb_reset';}else n=j;if(typeof m=='string'){var o=document.createElement('div');n.appendChild(o).innerHTML=m;return o;}else return n.appendChild(m);},appendHidden:function(m){if(!n){var n=document.createElement('div'),o=n.style;o.position='absolute';o.top='-10000px';o.width=o.height=0;n=l.append(n);}return l.append(m,n);},submitToTarget:function(m,n){var o=document.createElement('form');o.action=m.url;o.target=m.target;o.method=(n)?'GET':'POST';l.appendHidden(o);for(var p in m.params)if(m.params.hasOwnProperty(p)){var q=m.params[p];if(q!==null&&q!==undefined){var r=document.createElement('input');r.name=p;r.value=q;o.appendChild(r);}}o.submit();o.parentNode.removeChild(o);}};e.exports=l;});
__d("sdk.Event",[],function(a,b,c,d,e,f){var g={subscribers:function(){if(!this._subscribersMap)this._subscribersMap={};return this._subscribersMap;},subscribe:function(h,i){var j=this.subscribers();if(!j[h]){j[h]=[i];}else j[h].push(i);},unsubscribe:function(h,i){var j=this.subscribers()[h];if(j)ES5(j,'forEach',true,function(k,l){if(k==i)j[l]=null;});},monitor:function(h,i){if(!i()){var j=this,k=function(){if(i.apply(i,arguments))j.unsubscribe(h,k);};this.subscribe(h,k);}},clear:function(h){delete this.subscribers()[h];},fire:function(h){var i=Array.prototype.slice.call(arguments,1),j=this.subscribers()[h];if(j)ES5(j,'forEach',true,function(k){if(k)k.apply(this,i);});}};e.exports=g;});
__d("Queue",["copyProperties"],function(a,b,c,d,e,f){var g=b('copyProperties'),h={};function i(j){this._opts=g({interval:0,processor:null},j);this._queue=[];this._stopped=true;}g(i.prototype,{_dispatch:function(j){if(this._stopped||this._queue.length===0)return;if(!this._opts.processor){this._stopped=true;throw new Error('No processor available');}if(this._opts.interval){this._opts.processor.call(this,this._queue.shift());this._timeout=setTimeout(ES5(this._dispatch,'bind',true,this),this._opts.interval);}else while(this._queue.length)this._opts.processor.call(this,this._queue.shift());},enqueue:function(j){if(this._opts.processor&&!this._stopped){this._opts.processor.call(this,j);}else this._queue.push(j);return this;},start:function(j){if(j)this._opts.processor=j;this._stopped=false;this._dispatch();return this;},dispatch:function(){this._dispatch(true);},stop:function(j){this._stopped=true;if(j)clearTimeout(this._timeout);return this;},merge:function(j,k){this._queue[k?'unshift':'push'].apply(this._queue,j._queue);j._queue=[];this._dispatch();return this;},getLength:function(){return this._queue.length;}});g(i,{get:function(j,k){var l;if(j in h){l=h[j];}else l=h[j]=new i(k);return l;},exists:function(j){return j in h;},remove:function(j){return delete h[j];}});e.exports=i;});
__d("resolveURI",[],function(a,b,c,d,e,f){function g(h){if(!h)return window.location.href;h=h.replace(/&/g,'&amp;').replace(/"/g,'&quot;');var i=document.createElement('div');i.innerHTML='<a href="'+h+'"></a>';return i.firstChild.href;}e.exports=g;});
__d("resolveWindow",[],function(a,b,c,d,e,f){function g(h){var i=window,j=h.split('.');try{for(var l=0;l<j.length;l++){var m=j[l],n=/^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(m);if(n){i=i.frames[n[1]];}else if(m==='opener'||m==='parent'||m==='top'){i=i[m];}else return null;}}catch(k){return null;}return i;}e.exports=g;});
__d("JSONRPC",["copyProperties","Log"],function(a,b,c,d,e,f){var g=b('copyProperties'),h=b('Log');function i(j){this._counter=0;this._callbacks={};this.remote=ES5(function(k){this._context=k;return this.remote;},'bind',true,this);this.local={};this._write=j;}g(i.prototype,{stub:function(j){this.remote[j]=ES5(function(){var k=Array.prototype.slice.call(arguments),l={jsonrpc:'2.0',method:j};if(typeof k[k.length-1]=='function'){l.id=++this._counter;this._callbacks[l.id]=k.pop();}l.params=k;this._write(ES5('JSON','stringify',false,l),this._context||{method:j});},'bind',true,this);},read:function(j,k){var l=ES5('JSON','parse',false,j),m=l.id;if(!l.method){if(!this._callbacks[m]){h.warn('Could not find callback %s',m);return;}var n=this._callbacks[m];delete this._callbacks[m];delete l.id;delete l.jsonrpc;n(l);return;}var o=this,p=this.local[l.method],q;if(m){q=function(t,u){var v={jsonrpc:'2.0',id:m};v[t]=u;setTimeout(function(){o._write(ES5('JSON','stringify',false,v),k);},0);};}else q=function(){};if(!p){h.error('Method "%s" has not been defined',l.method);q('error',{code:-32601,message:'Method not found',data:l.method});return;}l.params.push(ES5(q,'bind',true,null,'result'));l.params.push(ES5(q,'bind',true,null,'error'));try{var s=p.apply(k||null,l.params);if(typeof s!=='undefined')q('result',s);}catch(r){h.error('Invokation of RPC method %s resulted in the error: %s',l.method,r.message);q('error',{code:-32603,message:'Internal error',data:r.message});}}});e.exports=i;});
__d("sdk.RPC",["Assert","JSONRPC","Queue"],function(a,b,c,d,e,f){var g=b('Assert'),h=b('JSONRPC'),i=b('Queue'),j=new i(),k=new h(function(m){j.enqueue(m);}),l={local:k.local,remote:k.remote,stub:ES5(k.stub,'bind',true,k),setInQueue:function(m){g.isInstanceOf(i,m);m.start(function(n){k.read(n);});},getOutQueue:function(){return j;}};e.exports=l;});
__d("emptyFunction",["copyProperties"],function(a,b,c,d,e,f){var g=b('copyProperties');function h(j){return function(){return j;};}function i(){}g(i,{thatReturns:h,thatReturnsFalse:h(false),thatReturnsTrue:h(true),thatReturnsNull:h(null),thatReturnsThis:function(){return this;},thatReturnsArgument:function(j){return j;},mustImplement:function(j,k){return function(){};}});e.exports=i;});
__d("Flash",["DOMWrapper","QueryString","UserAgent","copyProperties","guid"],function(a,b,c,d,e,f){var g=b('DOMWrapper'),h=b('QueryString'),i=b('UserAgent'),j=b('copyProperties'),k=b('guid'),l={},m,n=g.getWindow().document;function o(t){var u=n.getElementById(t);if(u)u.parentNode.removeChild(u);delete l[t];}function p(){for(var t in l)if(l.hasOwnProperty(t))o(t);}function q(t){return t.replace(/\d+/g,function(u){return '000'.substring(u.length)+u;});}function r(t){if(!m){if(i.ie()>=9)window.attachEvent('onunload',p);m=true;}l[t]=t;}var s={embed:function(t,u,v,w){var x=k();t=encodeURI(t);v=j({allowscriptaccess:'always',flashvars:w,movie:t},v||{});if(typeof v.flashvars=='object')v.flashvars=h.encode(v.flashvars);var y=[];for(var z in v)if(v.hasOwnProperty(z)&&v[z])y.push('<param name="'+encodeURI(z)+'" value="'+encodeURI(v[z])+'">');var aa=n.createElement('div'),ba='<object '+(i.ie()?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'type="application/x-shockwave-flash"')+'data="'+t+'" '+'id="'+x+'">'+y.join('')+'</object>';aa.innerHTML=ba;var ca=u.appendChild(aa.firstChild);r(x);return ca;},remove:o,getVersion:function(){var t='Shockwave Flash',u='application/x-shockwave-flash',v='ShockwaveFlash.ShockwaveFlash',w;if(navigator.plugins&&typeof navigator.plugins[t]=='object'){var x=navigator.plugins[t].description;if(x&&navigator.mimeTypes&&navigator.mimeTypes[u]&&navigator.mimeTypes[u].enabledPlugin)w=x.match(/\d+/g);}if(!w)try{w=(new ActiveXObject(v)).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);w=Array.prototype.slice.call(w,1);}catch(y){}return w;},checkMinVersion:function(t){var u=s.getVersion();if(!u)return false;return q(u.join('.'))>=q(t);},isAvailable:function(){return !!s.getVersion();}};e.exports=s;});
__d("dotAccess",[],function(a,b,c,d,e,f){function g(h,i,j){var k=i.split('.');do{var l=k.shift();h=h[l]||j&&(h[l]={});}while(k.length&&h);return h;}e.exports=g;});
__d("GlobalCallback",["DOMWrapper","dotAccess","guid","wrapFunction"],function(a,b,c,d,e,f){var g=b('DOMWrapper'),h=b('dotAccess'),i=b('guid'),j=b('wrapFunction'),k,l,m={setPrefix:function(n){k=h(g.getWindow(),n,true);l=n;},create:function(n,o){if(!k)this.setPrefix('__globalCallbacks');var p=i();k[p]=j(n,'entry',o||'GlobalCallback');return l+'.'+p;},remove:function(n){var o=n.substring(l.length+1);delete k[o];}};e.exports=m;});
__d("XDM",["DOMEventListener","DOMWrapper","emptyFunction","Flash","GlobalCallback","guid","Log","UserAgent","wrapFunction"],function(a,b,c,d,e,f){var g=b('DOMEventListener'),h=b('DOMWrapper'),i=b('emptyFunction'),j=b('Flash'),k=b('GlobalCallback'),l=b('guid'),m=b('Log'),n=b('UserAgent'),o=b('wrapFunction'),p={},q={transports:[]},r=h.getWindow();function s(u){var v={},w=u.length,x=q.transports;while(w--)v[u[w]]=1;w=x.length;while(w--){var y=x[w],z=p[y];if(!v[y]&&z.isAvailable())return y;}}var t={register:function(u,v){m.debug('Registering %s as XDM provider',u);q.transports.push(u);p[u]=v;},create:function(u){if(!u.whenReady&&!u.onMessage){m.error('An instance without whenReady or onMessage makes no sense');throw new Error('An instance without whenReady or '+'onMessage makes no sense');}if(!u.channel){m.warn('Missing channel name, selecting at random');u.channel=l();}if(!u.whenReady)u.whenReady=i;if(!u.onMessage)u.onMessage=i;var v=u.transport||s(u.blacklist||[]),w=p[v];if(w&&w.isAvailable()){m.debug('%s is available',v);w.init(u);return v;}}};t.register('fragment',(function(){var u=false,v,w=location.protocol+'//'+location.host;function x(y){var z=document.createElement('iframe');z.src='javascript:false';var aa=g.add(z,'load',function(){aa.remove();setTimeout(function(){z.parentNode.removeChild(z);},5000);});v.appendChild(z);z.src=y;}return {isAvailable:function(){return true;},init:function(y){m.debug('init fragment');var z={send:function(aa,ba,ca,da){m.debug('sending to: %s (%s)',ba+y.channelPath,da);x(ba+y.channelPath+aa+'&xd_rel=parent.parent&relation=parent.parent&xd_origin='+encodeURIComponent(w));}};if(u){y.whenReady(z);return;}v=y.root;u=true;y.whenReady(z);}};})());t.register('flash',(function(){var u=false,v,w=false,x=15000,y;return {isAvailable:function(){return j.checkMinVersion('8.0.24');},init:function(z){m.debug('init flash: '+z.channel);var aa={send:function(da,ea,fa,ga){m.debug('sending to: %s (%s)',ea,ga);v.postMessage(da,ea,ga);}};if(u){z.whenReady(aa);return;}var ba=z.root.appendChild(r.document.createElement('div')),ca=k.create(function(){k.remove(ca);clearTimeout(y);m.info('xdm.swf called the callback');var da=k.create(function(ea,fa){ea=decodeURIComponent(ea);fa=decodeURIComponent(fa);m.debug('received message %s from %s',ea,fa);z.onMessage(ea,fa);},'xdm.swf:onMessage');v.init(z.channel,da);z.whenReady(aa);},'xdm.swf:load');v=j.embed(z.flashUrl,ba,null,{protocol:location.protocol.replace(':',''),host:location.host,callback:ca,log:w});y=setTimeout(function(){m.warn('The Flash component did not load within %s ms - '+'verify that the container is not set to hidden or invisible '+'using CSS as this will cause some browsers to not load '+'the components',x);},x);u=true;}};})());t.register('postmessage',(function(){var u=false;return {isAvailable:function(){return !!r.postMessage;},init:function(v){m.debug('init postMessage: '+v.channel);var w='_FB_'+v.channel,x={send:function(y,z,aa,ba){if(r===aa){m.error('Invalid windowref, equal to window (self)');throw new Error();}m.debug('sending to: %s (%s)',z,ba);var ca=function(){aa.postMessage('_FB_'+ba+y,z);};if(n.ie()==8){setTimeout(ca,0);}else ca();}};if(u){v.whenReady(x);return;}g.add(r,'message',o(function(event){var y=event.data,z=event.origin||'native';if(typeof y!='string'){m.warn('Received message of type %s from %s, expected a string',typeof y,z);return;}m.debug('received message %s from %s',y,z);if(y.substring(0,w.length)==w)y=y.substring(w.length);v.onMessage(y,z);},'entry','onMessage'));v.whenReady(x);u=true;}};})());e.exports=t;});
__d("sdk.XD",["sdk.Content","sdk.createIframe","sdk.Event","guid","Log","QueryString","Queue","resolveURI","resolveWindow","sdk.RPC","sdk.Runtime","UrlMap","URL","wrapFunction","XDM","XDConfig"],function(a,b,c,d,e,f){var g=b('sdk.Content'),h=b('sdk.createIframe'),i=b('sdk.Event'),j=b('guid'),k=b('Log'),l=b('QueryString'),m=b('Queue'),n=b('resolveURI'),o=b('resolveWindow'),p=b('sdk.RPC'),q=b('sdk.Runtime'),r=b('UrlMap'),s=b('URL'),t=b('wrapFunction'),u=c('XDConfig'),v=b('XDM'),w=new m(),x=new m(),y=new m(),z,aa,ba=j(),ca=j(),da=location.protocol+'//'+location.host,ea,fa=false,ga='Facebook Cross Domain Communication Frame',ha={},ia=new m();p.setInQueue(ia);function ja(pa){k.info('Remote XD can talk to facebook.com (%s)',pa);q.setEnvironment(pa==='canvas'?q.ENVIRONMENTS.CANVAS:q.ENVIRONMENTS.PAGETAB);}function ka(pa,qa){if(!qa){k.error('No senderOrigin');throw new Error();}var ra=/^https?/.exec(qa)[0];switch(pa.xd_action){case 'proxy_ready':var sa,ta;if(ra=='https'){sa=y;ta=aa;}else{sa=x;ta=z;}if(pa.registered){ja(pa.registered);w=sa.merge(w);}k.info('Proxy ready, starting queue %s containing %s messages',ra+'ProxyQueue',sa.getLength());sa.start(function(va){ea.send(typeof va==='string'?va:l.encode(va),qa,ta.contentWindow,ca+'_'+ra);});break;case 'plugin_ready':k.info('Plugin %s ready, protocol: %s',pa.name,ra);ha[pa.name]={protocol:ra};if(m.exists(pa.name)){var ua=m.get(pa.name);k.debug('Enqueuing %s messages for %s in %s',ua.getLength(),pa.name,ra+'ProxyQueue');(ra=='https'?y:x).merge(ua);}break;}if(pa.data)la(pa.data,qa);}function la(pa,qa){if(qa&&qa!=='native'&&!s(qa).isFacebookURL())return;if(typeof pa=='string'){if(/^FB_RPC:/.test(pa)){ia.enqueue(pa.substring(7));return;}if(pa.substring(0,1)=='{'){try{pa=ES5('JSON','parse',false,pa);}catch(ra){k.warn('Failed to decode %s as JSON',pa);return;}}else pa=l.decode(pa);}if(!qa)if(pa.xd_sig==ba)qa=pa.xd_origin;if(pa.xd_action){ka(pa,qa);return;}if(pa.access_token)q.setSecure(/^https/.test(da));if(pa.cb){var sa=oa._callbacks[pa.cb];if(!oa._forever[pa.cb])delete oa._callbacks[pa.cb];if(sa)sa(pa);}}function ma(pa,qa){if(pa=='facebook'){qa.relation='parent.parent';w.enqueue(qa);}else{qa.relation='parent.frames["'+pa+'"]';var ra=ha[pa];if(ra){k.debug('Enqueuing message for plugin %s in %s',pa,ra.protocol+'ProxyQueue');(ra.protocol=='https'?y:x).enqueue(qa);}else{k.debug('Buffering message for plugin %s',pa);m.get(pa).enqueue(qa);}}}p.getOutQueue().start(function(pa){ma('facebook','FB_RPC:'+pa);});function na(pa,qa){if(fa)return;var ra=pa?/\/\/.*?(\/[^#]*)/.exec(pa)[1]:location.pathname+location.search;ra+=(~ES5(ra,'indexOf',true,'?')?'&':'?')+'fb_xd_fragment#xd_sig='+ba+'&';var sa=g.appendHidden(document.createElement('div')),ta=v.create({root:sa,channel:ca,channelPath:'/'+u.XdUrl+'#',flashUrl:u.Flash.path,whenReady:function(ua){ea=ua;var va={channel:ca,origin:location.protocol+'//'+location.host,channel_path:ra,transport:ta,xd_name:qa},wa='/'+u.XdUrl+'#'+l.encode(va),xa=u.useCdn?r.resolve('cdn',false):'http://www.facebook.com',ya=u.useCdn?r.resolve('cdn',true):'https://www.facebook.com';if(q.getSecure()!==true)z=h({url:xa+wa,name:'fb_xdm_frame_http',id:'fb_xdm_frame_http',root:sa,'aria-hidden':true,title:ga,'tab-index':-1});aa=h({url:ya+wa,name:'fb_xdm_frame_https',id:'fb_xdm_frame_https',root:sa,'aria-hidden':true,title:ga,'tab-index':-1});},onMessage:la});if(ta==='fragment')window.FB_XD_onMessage=t(la,'entry','XD:fragment');fa=true;}var oa={rpc:p,_callbacks:{},_forever:{},_channel:ca,_origin:da,onMessage:la,recv:la,init:na,sendToFacebook:ma,inform:function(pa,qa,ra,sa){ma('facebook',{method:pa,params:ES5('JSON','stringify',false,qa||{}),behavior:sa||'p',relation:ra});},handler:function(pa,qa,ra,sa){var ta=u.useCdn?r.resolve('cdn',location.protocol=='https:'):location.protocol+'//www.facebook.com';return ta+'/'+u.XdUrl+'#'+l.encode({cb:this.registerCallback(pa,ra,sa),origin:da+'/'+ca,domain:location.hostname,relation:qa||'opener'});},registerCallback:function(pa,qa,ra){ra=ra||j();if(qa)oa._forever[ra]=true;oa._callbacks[ra]=pa;return ra;}};(function(){var pa=location.href.match(/[?&]fb_xd_fragment#(.*)$/);if(pa){document.documentElement.style.display='none';var qa=l.decode(pa[1]),ra=o(qa.xd_rel);k.debug('Passing fragment based message: %s',pa[1]);ra.FB_XD_onMessage(qa);document.open();document.close();}})();i.subscribe('init:post',function(pa){na(pa.channelUrl?n(pa.channelUrl):null,pa.xdProxyName);});e.exports=oa;});
__d("sdk.Auth",["sdk.Cookie","copyProperties","sdk.createIframe","DOMWrapper","sdk.feature","sdk.getContextType","guid","Log","ObservableMixin","QueryString","sdk.Runtime","sdk.SignedRequest","UrlMap","URL","sdk.XD"],function(a,b,c,d,e,f){var g=b('sdk.Cookie'),h=b('copyProperties'),i=b('sdk.createIframe'),j=b('DOMWrapper'),k=b('sdk.feature'),l=b('sdk.getContextType'),m=b('guid'),n=b('Log'),o=b('ObservableMixin'),p=b('QueryString'),q=b('sdk.Runtime'),r=b('sdk.SignedRequest'),s=b('UrlMap'),t=b('URL'),u=b('sdk.XD'),v,w,x=new o();function y(ea,fa){var ga=q.getUserID(),ha='';if(ea)if(ea.userID){ha=ea.userID;}else if(ea.signedRequest){var ia=r.parse(ea.signedRequest);if(ia&&ia.user_id)ha=ia.user_id;}var ja=q.getLoginStatus(),ka=(ja==='unknown'&&ea)||(q.getUseCookie()&&q.getCookieUserID()!==ha),la=ga&&!ea,ma=ea&&ga&&ga!=ha,na=ea!=v,oa=fa!=(ja||'unknown');q.setLoginStatus(fa);q.setAccessToken(ea&&ea.accessToken||null);q.setUserID(ha);v=ea;var pa={authResponse:ea,status:fa};if(la||ma)x.inform('logout',pa);if(ka||ma)x.inform('login',pa);if(na)x.inform('authresponse.change',pa);if(oa)x.inform('status.change',pa);return pa;}function z(){return v;}function aa(ea,fa,ga){return function(ha){var ia;if(ha&&ha.access_token){var ja=r.parse(ha.signed_request);fa={accessToken:ha.access_token,userID:ja.user_id,expiresIn:parseInt(ha.expires_in,10),signedRequest:ha.signed_request};if(q.getUseCookie()){var ka=fa.expiresIn===0?0:ES5('Date','now',false)+fa.expiresIn*1000,la=g.getDomain();if(!la&&ha.base_domain)g.setDomain('.'+ha.base_domain);g.setSignedRequestCookie(ha.signed_request,ka);}ia='connected';y(fa,ia);}else if(ga==='logout'||ga==='login_status'){if(ha.error&&ha.error==='not_authorized'){ia='not_authorized';}else ia='unknown';y(null,ia);if(q.getUseCookie())g.clearSignedRequestCookie();}if(ha&&ha.https==1)q.setSecure(true);if(ea)ea({authResponse:fa,status:q.getLoginStatus()});return fa;};}function ba(ea){var fa;if(w){clearTimeout(w);w=null;}var ga=aa(ea,v,'login_status'),ha=k('oauth_ping',true)?'/connect/ping':'/dialog/oauth',ia=t(s.resolve('www',true)+ha).setSearch(p.encode({client_id:q.getClientID(),response_type:'token,signed_request,code',display:'none',domain:location.hostname,origin:l(),redirect_uri:u.handler(function(ja){fa.parentNode.removeChild(fa);if(ga(ja))w=setTimeout(function(){ba(function(){});},1200000);},'parent'),sdk:'joey'}));fa=i({root:j.getRoot(),name:m(),url:ia.toString(),style:{display:'none'}});}var ca;function da(ea,fa){if(!q.getClientID()){n.warn('FB.getLoginStatus() called before calling FB.init().');return;}if(ea)if(!fa&&ca=='loaded'){ea({status:q.getLoginStatus(),authResponse:z()});return;}else x.subscribe('FB.loginStatus',ea);if(!fa&&ca=='loading')return;ca='loading';var ga=function(ha){ca='loaded';x.inform('FB.loginStatus',ha);x.clearSubscribers('FB.loginStatus');};ba(ga);}h(x,{getLoginStatus:da,fetchLoginStatus:ba,setAuthResponse:y,getAuthResponse:z,parseSignedRequest:r.parse,xdResponseWrapper:aa});e.exports=x;});
__d("hasArrayNature",[],function(a,b,c,d,e,f){function g(h){return (!!h&&(typeof h=='object'||typeof h=='function')&&('length' in h)&&!('setInterval' in h)&&(Object.prototype.toString.call(h)==="[object Array]"||('callee' in h)||('item' in h)));}e.exports=g;});
__d("createArrayFrom",["hasArrayNature"],function(a,b,c,d,e,f){var g=b('hasArrayNature');function h(i){if(!g(i))return [i];if(i.item){var j=i.length,k=new Array(j);while(j--)k[j]=i[j];return k;}return Array.prototype.slice.call(i);}e.exports=h;});
__d("sdk.DOM",["Assert","createArrayFrom","sdk.domReady","UserAgent"],function(a,b,c,d,e,f){var g=b('Assert'),h=b('createArrayFrom'),i=b('sdk.domReady'),j=b('UserAgent'),k={};function l(z,aa){var ba=(z.getAttribute(aa)||z.getAttribute(aa.replace(/_/g,'-'))||z.getAttribute(aa.replace(/-/g,'_'))||z.getAttribute(aa.replace(/-/g,''))||z.getAttribute(aa.replace(/_/g,''))||z.getAttribute('data-'+aa)||z.getAttribute('data-'+aa.replace(/_/g,'-'))||z.getAttribute('data-'+aa.replace(/-/g,'_'))||z.getAttribute('data-'+aa.replace(/-/g,''))||z.getAttribute('data-'+aa.replace(/_/g,'')));return ba?String(ba):null;}function m(z,aa){var ba=l(z,aa);return ba?/^(true|1|yes|on)$/.test(ba):null;}function n(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);try{return String(z[aa]);}catch(ba){throw new Error('Could not read property '+aa+' : '+ba.message);}}function o(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);try{z.innerHTML=aa;}catch(ba){throw new Error('Could not set innerHTML : '+ba.message);}}function p(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);var ba=' '+n(z,'className')+' ';return ES5(ba,'indexOf',true,' '+aa+' ')>=0;}function q(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);if(!p(z,aa))z.className=n(z,'className')+' '+aa;}function r(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);var ba=new RegExp('\\s*'+aa,'g');z.className=ES5(n(z,'className').replace(ba,''),'trim',true);}function s(z,aa,ba){g.isString(z);aa=aa||document.body;ba=ba||'*';if(aa.querySelectorAll)return h(aa.querySelectorAll(ba+'.'+z));var ca=aa.getElementsByTagName(ba),da=[];for(var ea=0,fa=ca.length;ea<fa;ea++)if(p(ca[ea],z))da[da.length]=ca[ea];return da;}function t(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);aa=aa.replace(/-(\w)/g,function(da,ea){return ea.toUpperCase();});var ba=z.currentStyle||document.defaultView.getComputedStyle(z,null),ca=ba[aa];if(/backgroundPosition?/.test(aa)&&/top|left/.test(ca))ca='0%';return ca;}function u(z,aa,ba){g.isTruthy(z,'element not specified');g.isString(aa);aa=aa.replace(/-(\w)/g,function(ca,da){return da.toUpperCase();});z.style[aa]=ba;}function v(z,aa){var ba=true;for(var ca=0,da;da=aa[ca++];)if(!(da in k)){ba=false;k[da]=true;}if(ba)return;if(!j.ie()){var ea=document.createElement('style');ea.type='text/css';ea.textContent=z;document.getElementsByTagName('head')[0].appendChild(ea);}else try{document.createStyleSheet().cssText=z;}catch(fa){if(document.styleSheets[0])document.styleSheets[0].cssText+=z;}}function w(){var z=(document.documentElement&&document.compatMode=='CSS1Compat')?document.documentElement:document.body;return {scrollTop:z.scrollTop||document.body.scrollTop,scrollLeft:z.scrollLeft||document.body.scrollLeft,width:window.innerWidth?window.innerWidth:z.clientWidth,height:window.innerHeight?window.innerHeight:z.clientHeight};}function x(z){g.isTruthy(z,'element not specified');var aa=0,ba=0;do{aa+=z.offsetLeft;ba+=z.offsetTop;}while(z=z.offsetParent);return {x:aa,y:ba};}var y={containsCss:p,addCss:q,removeCss:r,getByClass:s,getStyle:t,setStyle:u,getAttr:l,getBoolAttr:m,getProp:n,html:o,addCssRules:v,getViewportInfo:w,getPosition:x,ready:i};e.exports=y;});
__d("sdk.Scribe",["UrlMap","QueryString"],function(a,b,c,d,e,f){var g=b('UrlMap'),h=b('QueryString');function i(k,l){(new Image()).src=h.appendToUrl(g.resolve('www',true)+'/common/scribe_endpoint.php',{c:k,m:ES5('JSON','stringify',false,l)});}var j={log:i};e.exports=j;});
__d("sdk.ErrorHandling",["sdk.feature","ManagedError","sdk.Runtime","sdk.Scribe","UserAgent","wrapFunction"],function(a,b,c,d,e,f){var g=b('sdk.feature'),h=b('ManagedError'),i=b('sdk.Runtime'),j=b('sdk.Scribe'),k=b('UserAgent'),l=b('wrapFunction'),m=g('error_handling',false),n='';function o(u){var v=u._originalError;delete u._originalError;j.log('jssdk_error',{appId:i.getClientID(),error:u.name||u.message,extra:u});throw v;}function p(u){var v={line:u.lineNumber||u.line,message:u.message,name:u.name,script:u.fileName||u.sourceURL||u.script,stack:u.stackTrace||u.stack};v._originalError=u;if(k.chrome()&&/([\w:\.\/]+\.js):(\d+)/.test(u.stack)){v.script=RegExp.$1;v.line=parseInt(RegExp.$2,10);}for(var w in v)(v[w]==null&&delete v[w]);return v;}function q(u,v){return function(){if(!m)return u.apply(this,arguments);try{n=v;return u.apply(this,arguments);}catch(w){if(w instanceof h)throw w;var x=p(w);x.entry=v;var y=ES5(Array.prototype.slice.call(arguments),'map',true,function(z){var aa=Object.prototype.toString.call(z);return (/^\[object (String|Number|Boolean|Object|Date)\]$/).test(aa)?z:z.toString();});x.args=ES5('JSON','stringify',false,y).substring(0,200);o(x);}finally{n='';}};}function r(u){if(!u.__wrapper)u.__wrapper=function(){try{return u.apply(this,arguments);}catch(v){window.setTimeout(function(){throw v;},0);return false;}};return u.__wrapper;}function s(u,v){return function(w,x){var y=v+':'+(n||'[global]')+':'+(w.name||'[anonymous]'+(arguments.callee.caller.name?'('+arguments.callee.caller.name+')':''));return u(l(w,'entry',y),x);};}if(m){setTimeout=s(setTimeout,'setTimeout');setInterval=s(setInterval,'setInterval');l.setWrapper(q,'entry');}var t={guard:q,unguard:r};e.exports=t;});
__d("sdk.Impressions",["guid","QueryString","sdk.Runtime","UrlMap"],function(a,b,c,d,e,f){var g=b('guid'),h=b('QueryString'),i=b('sdk.Runtime'),j=b('UrlMap');function k(m){var n=i.getClientID();if(!m.api_key&&n)m.api_key=n;var o=new Image();o.src=h.appendToUrl(j.resolve('www',true)+'/impression.php/'+g()+'/',m);}var l={log:function(m,n){if(!n.source)n.source='jssdk';k({lid:m,payload:ES5('JSON','stringify',false,n)});},impression:k};e.exports=l;});
__d("sdk.Insights",["sdk.Impressions"],function(a,b,c,d,e,f){var g=b('sdk.Impressions'),h={TYPE:{NOTICE:'notice',WARNING:'warn',ERROR:'error'},CATEGORY:{DEPRECATED:'deprecated',APIERROR:'apierror'},log:function(i,j,k){var l={source:'jssdk',type:i,category:j,payload:k};g.log(113,l);},impression:g.impression};e.exports=h;});
__d("FB",["sdk.Auth","copyProperties","dotAccess","sdk.domReady","sdk.DOM","sdk.ErrorHandling","sdk.Content","DOMWrapper","GlobalCallback","sdk.Insights","Log","sdk.Runtime","sdk.Scribe","CssConfig","SDKConfig"],function(a,b,c,d,e,f){var g=b('sdk.Auth'),h=b('copyProperties'),i=c('CssConfig'),j=b('dotAccess'),k=b('sdk.domReady'),l=b('sdk.DOM'),m=b('sdk.ErrorHandling'),n=b('sdk.Content'),o=b('DOMWrapper'),p=b('GlobalCallback'),q=b('sdk.Insights'),r=b('Log'),s=b('sdk.Runtime'),t=b('sdk.Scribe'),u=c('SDKConfig'),v,w,x=j(u,'api.mode'),y={};v=window.FB={};var z={};r.level=1;p.setPrefix('FB.__globalCallbacks');var aa=document.createElement('div');o.setRoot(aa);k(function(){r.info('domReady');n.appendHidden(aa);if(i.rules)l.addCssRules(i.rules,i.components);});s.subscribe('AccessToken.change',function(da){if(!da&&s.getLoginStatus()==='connected')g.getLoginStatus(null,true);});if(j(u,'api.whitelist.length')){w={};ES5(u.api.whitelist,'forEach',true,function(da){w[da]=1;});}function ba(da,ea,fa,ga){var ha;if(/^_/.test(fa)){ha='hide';}else if(w&&!w[ea])ha=x;switch(ha){case 'hide':return;case 'stub':return function(){r.warn('The method FB.%s has been removed from the JS SDK.',ea);};break;default:return m.guard(function(){if(ha==='warn'){r.warn('The method FB.%s is not officially supported by '+'Facebook and access to it will soon be removed.',ea);if(!y.hasOwnProperty(ea)){q.log(q.TYPE.WARNING,q.CATEGORY.DEPRECATED,'FB.'+ea);t.log('jssdk_error',{appId:s.getClientID(),error:'Private method used',extra:{args:ea}});y[ea]=true;}}function ia(qa){if(ES5('Array','isArray',false,qa))return ES5(qa,'map',true,ia);if(qa&&typeof qa==='object'&&qa.__wrapped)return qa.__wrapped;return typeof qa==='function'&&/^function/.test(qa.toString())?m.unguard(qa):qa;}var ja=ES5(Array.prototype.slice.call(arguments),'map',true,ia),ka=da.apply(ga,ja),la,ma=true;if(ka&&typeof ka==='object'){var na=Function();na.prototype=ka;la=new na();la.__wrapped=ka;for(var oa in ka){var pa=ka[oa];if(typeof pa!=='function'||oa==='constructor')continue;ma=false;la[oa]=ba(pa,ea+':'+oa,oa,ka);}}if(!ma)return la;return ma?ka:la;},ea);}}function ca(da,ea){var fa=da?j(v,da,true):v;ES5(ES5('Object','keys',false,ea),'forEach',true,function(ga){var ha=ea[ga];if(typeof ha==='function'){var ia=(da?da+'.':'')+ga,ja=ba(ha,ia,ga,ea);if(ja)fa[ga]=ja;}});}s.setSecure((function(){var da=/iframe_canvas|app_runner/.test(window.name),ea=/dialog/.test(window.name);if(location.protocol=='https:'&&(window==top||!(da||ea)))return true;if(/_fb_https?/.test(window.name))return ES5(window.name,'indexOf',true,'_fb_https')!=-1;})());h(z,{provide:ca});e.exports=z;});
__d("flattenObject",[],function(a,b,c,d,e,f){function g(h){var i={};for(var j in h)if(h.hasOwnProperty(j)){var k=h[j];if(null===k||undefined===k){continue;}else if(typeof k=='string'){i[j]=k;}else i[j]=ES5('JSON','stringify',false,k);}return i;}e.exports=g;});
__d("CORSRequest",["wrapFunction","QueryString"],function(a,b,c,d,e,f){var g=b('wrapFunction'),h=b('QueryString');function i(l,m){if(!self.XMLHttpRequest)return null;var n=new XMLHttpRequest(),o=function(){};if('withCredentials' in n){n.open(l,m,true);n.setRequestHeader('Content-type','application/x-www-form-urlencoded');}else if(self.XDomainRequest){n=new XDomainRequest();try{n.open(l,m);n.onprogress=n.ontimeout=o;}catch(p){return null;}}else return null;var q={send:function(t){n.send(t);}},r=g(function(){r=o;if('onload' in q)q.onload(n);},'entry','XMLHttpRequest:load'),s=g(function(){s=o;if('onerror' in q)q.onerror(n);},'entry','XMLHttpRequest:error');n.onload=function(){r();};n.onerror=function(){s();};n.onreadystatechange=function(){if(n.readyState==4)if(n.status==200){r();}else s();};return q;}function j(l,m,n,o){n.suppress_http_code=1;var p=h.encode(n);if(m!='post'){l=h.appendToUrl(l,p);p='';}var q=i(m,l);if(!q)return false;q.onload=function(r){o(ES5('JSON','parse',false,r.responseText));};q.onerror=function(r){if(r.responseText){o(ES5('JSON','parse',false,r.responseText));}else o({error:{type:'http',message:'unknown error',status:r.status}});};q.send(p);return true;}var k={execute:j};e.exports=k;});
__d("FlashRequest",["DOMWrapper","Flash","GlobalCallback","QueryString","Queue"],function(a,b,c,d,e,f){var g=b('DOMWrapper'),h=b('Flash'),i=b('GlobalCallback'),j=b('QueryString'),k=b('Queue'),l,m={},n,o;function p(){if(!n)throw new Error('swfUrl has not been set');var s=i.create(function(){l.start(function(u){var v=o.execute(u.method,u.url,u.body);if(!v)throw new Error('Could create request');m[v]=u.callback;});}),t=i.create(function(u,v,w){var x;try{x=ES5('JSON','parse',false,decodeURIComponent(w));}catch(y){x={error:{type:'SyntaxError',message:y.message,status:v,raw:w}};}m[u](x);delete m[u];});o=h.embed(n,g.getRoot(),null,{log:false,initCallback:s,requestCallback:t});}function q(s,t,u,v){u.suppress_http_code=1;if(!u.method)u.method=t;var w=j.encode(u);if(t==='get'&&s.length+w.length<2000){s=j.appendToUrl(s,w);w='';}else t='post';if(!l){if(!h.isAvailable())return false;l=new k();p();}l.enqueue({method:t,url:s,body:w,callback:v});return true;}var r={setSwfUrl:function(s){n=s;},execute:q};e.exports=r;});
__d("JSONPRequest",["DOMWrapper","GlobalCallback","QueryString"],function(a,b,c,d,e,f){var g=b('DOMWrapper'),h=b('GlobalCallback'),i=b('QueryString');function j(l,m,n,o){var p=document.createElement('script'),q=function(s){q=function(){};h.remove(n.callback);o(s);p.parentNode.removeChild(p);};n.callback=h.create(q);if(!n.method)n.method=m;l=i.appendToUrl(l,n);if(l.length>2000){h.remove(n.callback);return false;}p.onerror=function(){q({error:{type:'http',message:'unknown error'}});};var r=function(){setTimeout(function(){q({error:{type:'http',message:'unknown error'}});},0);};if(p.addEventListener){p.addEventListener('load',r,false);}else p.onreadystatechange=function(){if(/loaded|complete/.test(this.readyState))r();};p.src=l;g.getRoot().appendChild(p);return true;}var k={execute:j};e.exports=k;});
__d("ArgumentError",["ManagedError"],function(a,b,c,d,e,f){var g=b('ManagedError');function h(i,j){g.prototype.constructor.apply(this,arguments);}h.prototype=new g();h.prototype.constructor=h;e.exports=h;});
__d("ApiClient",["copyProperties","flattenObject","sprintf","CORSRequest","FlashRequest","JSONPRequest","Log","UrlMap","URL","ArgumentError","Assert","ApiClientConfig"],function(a,b,c,d,e,f){var g=b('copyProperties'),h=b('flattenObject'),i=b('sprintf'),j=b('CORSRequest'),k=b('FlashRequest'),l=b('JSONPRequest'),m=b('Log'),n=b('UrlMap'),o=b('URL'),p=b('ArgumentError'),q=b('Assert'),r=b('ApiClientConfig'),s,t,u,v,w={get:true,post:true,'delete':true,put:true},x={fql_query:true,fql_multiquery:true,friends_get:true,notifications_get:true,stream_get:true,users_getinfo:true};function y(ca,da,ea,fa){if(!ea.access_token)ea.access_token=s;ea.pretty=0;if(v)g(ea,v);ea=h(ea);if(!fa){m.warn('No callback passed to the ApiClient for %s',ca);fa=function(){};}var ga={jsonp:l,cors:j,flash:k},ha;if(ea.transport){ha=[ea.transport];delete ea.transport;}else ha=['jsonp','cors','flash'];var ia=function(ma){var na=false;if(t&&ma&&typeof ma=='object'){if(ma.error){if(ma.error=='invalid_token'||(ma.error.type=='OAuthException'&&ma.error.code==190))na=true;}else if(ma.error_code)if(ma.error_code=='190')na=true;if(na)t();}fa(ma);};for(var ja=0;ja<ha.length;ja++){var ka=ga[ha[ja]],la=g({},ea);if(ka.execute(ca,da,la,ia))return;}fa({error:{type:'no-transport',message:'Could not find a usable transport for request'}});}function z(ca){q.isString(ca,'Invalid path');var da,ea={};try{da=new o(ca);}catch(fa){throw new p(fa.message,fa);}ES5(Array.prototype.slice.call(arguments,1),'forEach',true,function(ja){ea[typeof ja]=ja;});var ga=(ea.string||'get').toLowerCase(),ha=g(ea.object||{},da.getParsedSearch()),ia=ea['function'];q.isTrue(ga in w,i('Invalid method passed to ApiClient: %s',ga));ha.method=ga;da=n.resolve('graph')+da.getPath();y(da,ga=='get'?'get':'post',ha,ia);}function aa(ca,da){q.isObject(ca);q.isString(ca.method,'method missing');var ea=ca.method.toLowerCase().replace('.','_');ca.format='json-strings';ca.api_key=u;var fa=ea in x?'api_read':'api',ga=n.resolve(fa)+'/restserver.php';y(ga,'get',ca,da);}var ba={setAccessToken:function(ca){s=ca;},setInvalidAccessTokenHandler:function(ca){t=ca;},setClientID:function(ca){u=ca;},setDefaultParams:function(ca){v=ca;},rest:aa,graph:z};k.setSwfUrl(r.FlashRequest.swfUrl);e.exports=ba;});
__d("sdk.api",["ApiClient","sdk.Runtime"],function(a,b,c,d,e,f){var g=b('ApiClient'),h=b('sdk.Runtime'),i;h.subscribe('ClientID.change',function(k){g.setClientID(k);});h.subscribe('AccessToken.change',function(k){i=k;g.setAccessToken(k);});g.setDefaultParams({sdk:'joey'});g.setInvalidAccessTokenHandler(function(){if(i===h.getAccessToken())h.setAccessToken(null);});function j(){if(typeof arguments[0]==='string'){g.graph.apply(g,arguments);}else g.rest.apply(g,arguments);}e.exports=j;});
__d("legacy:fb.api",["FB","sdk.api"],function(a,b,c,d){var e=b('FB'),f=b('sdk.api');e.provide('',{api:f});},3);
__d("sdk.Canvas.Environment",["sdk.RPC"],function(a,b,c,d,e,f){var g=b('sdk.RPC');function h(k){g.remote.getPageInfo(function(l){k(l.result);});}function i(k,l){g.remote.scrollTo({x:k||0,y:l||0});}g.stub('getPageInfo');g.stub('scrollTo');var j={getPageInfo:h,scrollTo:i};e.exports=j;});
__d("sdk.Intl",["Log"],function(a,b,c,d,e,f){var g=b('Log'),h=('['+'.!?'+'\u3002'+'\uFF01'+'\uFF1F'+'\u0964'+'\u2026'+'\u0EAF'+'\u1801'+'\u0E2F'+'\uFF0E'+']');function i(l){if(typeof l!='string')return false;return !!l.match(new RegExp(h+'['+')"'+"'"+'\u00BB'+'\u0F3B'+'\u0F3D'+'\u2019'+'\u201D'+'\u203A'+'\u3009'+'\u300B'+'\u300D'+'\u300F'+'\u3011'+'\u3015'+'\u3017'+'\u3019'+'\u301B'+'\u301E'+'\u301F'+'\uFD3F'+'\uFF07'+'\uFF09'+'\uFF3D'+'\\s'+']*$'));}function j(l,m){if(m!==undefined)if(typeof m!='object'){g.error('The second arg to FB.Intl.tx() must be an Object for '+'FB.Intl.tx('+l+', ...)');}else{var n;for(var o in m)if(m.hasOwnProperty(o)){if(i(m[o])){n=new RegExp('\\{'+o+'\\}'+h+'*','g');}else n=new RegExp('\\{'+o+'\\}','g');l=l.replace(n,m[o]);}}return l;}function k(){throw new Error('Placeholder function');}k._=j;e.exports={tx:k};});
__d("sdk.Dialog",["sdk.Canvas.Environment","sdk.Content","sdk.DOM","DOMEventListener","sdk.Intl","ObservableMixin","sdk.Runtime","Type","UserAgent"],function(a,b,c,d,e,f){var g=b('sdk.Canvas.Environment'),h=b('sdk.Content'),i=b('sdk.DOM'),j=b('DOMEventListener'),k=b('sdk.Intl'),l=b('ObservableMixin'),m=b('sdk.Runtime'),n=b('Type'),o=b('UserAgent'),p=n.extend({constructor:function r(s,t){this.parent();this.id=s;this.display=t;this._e2e={};if(!q._dialogs){q._dialogs={};q._addOrientationHandler();}q._dialogs[s]=this;this.trackEvent('init');},trackEvent:function(r,s){if(this._e2e[r])return this;this._e2e[r]=s||ES5('Date','now',false);if(r=='close')this.inform('e2e:end',this._e2e);return this;},trackEvents:function(r){if(!r)return this;if(typeof r==='string')r=ES5('JSON','parse',false,r);for(var s in r)if(r.hasOwnProperty(s))this.trackEvent(s,r[s]);return this;}},l),q={newInstance:function(r,s){return new p(r,s);},_dialogs:null,_lastYOffset:0,_loaderEl:null,_overlayEl:null,_stack:[],_active:null,get:function(r){return q._dialogs[r];},_findRoot:function(r){while(r){if(i.containsCss(r,'fb_dialog'))return r;r=r.parentNode;}},_createWWWLoader:function(r){r=r?r:460;return q.create({content:('<div class="dialog_title">'+'  <a id="fb_dialog_loader_close">'+'    <div class="fb_dialog_close_icon"></div>'+'  </a>'+'  <span>Facebook</span>'+'  <div style="clear:both;"></div>'+'</div>'+'<div class="dialog_content"></div>'+'<div class="dialog_footer"></div>'),width:r});},_createMobileLoader:function(){var r=o.nativeApp()?'':('<table>'+'  <tbody>'+'    <tr>'+'      <td class="header_left">'+'        <label class="touchable_button">'+'          <input type="submit" value="'+k.tx._("Cancel")+'"'+'            id="fb_dialog_loader_close"/>'+'        </label>'+'      </td>'+'      <td class="header_center">'+'        <div>'+k.tx._("Loading...")+'</div>'+'      </td>'+'      <td class="header_right">'+'      </td>'+'    </tr>'+'  </tbody>'+'</table>');return q.create({classes:'loading'+(o.ipad()?' centered':''),content:('<div class="dialog_header">'+r+'</div>')});},_restoreBodyPosition:function(){if(!o.ipad()){var r=document.getElementsByTagName('body')[0];i.removeCss(r,'fb_hidden');}},_showIPadOverlay:function(){if(!o.ipad())return;if(!q._overlayEl){q._overlayEl=document.createElement('div');q._overlayEl.setAttribute('id','fb_dialog_ipad_overlay');h.append(q._overlayEl,null);}q._overlayEl.className='';},_hideIPadOverlay:function(){if(o.ipad())q._overlayEl.className='hidden';},showLoader:function(r,s){q._showIPadOverlay();if(!q._loaderEl)q._loaderEl=q._findRoot(o.mobile()?q._createMobileLoader():q._createWWWLoader(s));if(!r)r=function(){};var t=document.getElementById('fb_dialog_loader_close');i.removeCss(t,'fb_hidden');t.onclick=function(){q._hideLoader();q._restoreBodyPosition();q._hideIPadOverlay();r();};var u=document.getElementById('fb_dialog_ipad_overlay');if(u)u.ontouchstart=t.onclick;q._makeActive(q._loaderEl);},_hideLoader:function(){if(q._loaderEl&&q._loaderEl==q._active)q._loaderEl.style.top='-10000px';},_makeActive:function(r){q._setDialogSizes();q._lowerActive();q._active=r;if(m.isEnvironment(m.ENVIRONMENTS.CANVAS))g.getPageInfo(function(s){q._centerActive(s);});q._centerActive();},_lowerActive:function(){if(!q._active)return;q._active.style.top='-10000px';q._active=null;},_removeStacked:function(r){q._stack=ES5(q._stack,'filter',true,function(s){return s!=r;});},_centerActive:function(r){var s=q._active;if(!s)return;var t=i.getViewportInfo(),u=parseInt(s.offsetWidth,10),v=parseInt(s.offsetHeight,10),w=t.scrollLeft+(t.width-u)/2,x=(t.height-v)/2.5;if(w<x)x=w;var y=t.height-v-x,z=(t.height-v)/2;if(r)z=r.scrollTop-r.offsetTop+(r.clientHeight-v)/2;if(z<x){z=x;}else if(z>y)z=y;z+=t.scrollTop;if(o.mobile()){var aa=100;if(o.ipad()){aa+=(t.height-v)/2;}else{var ba=document.getElementsByTagName('body')[0];i.addCss(ba,'fb_hidden');w=10000;z=10000;}var ca=i.getByClass('fb_dialog_padding',s);if(ca.length)ca[0].style.height=aa+'px';}s.style.left=(w>0?w:0)+'px';s.style.top=(z>0?z:0)+'px';},_setDialogSizes:function(){if(!o.mobile()||o.ipad())return;for(var r in q._dialogs)if(q._dialogs.hasOwnProperty(r)){var s=document.getElementById(r);if(s){s.style.width=q.getDefaultSize().width+'px';s.style.height=q.getDefaultSize().height+'px';}}},getDefaultSize:function(){if(o.mobile())if(o.ipad()){return {width:500,height:590};}else if(o.android()){return {width:screen.availWidth,height:screen.availHeight};}else{var r=window.innerWidth,s=window.innerHeight,t=r/s>1.2;return {width:r,height:Math.max(s,(t?screen.width:screen.height))};}return {width:575,height:240};},_handleOrientationChange:function(r){if(o.android()&&screen.availWidth==q._availScreenWidth){setTimeout(q._handleOrientationChange,50);return;}q._availScreenWidth=screen.availWidth;if(o.ipad()){q._centerActive();}else{var s=q.getDefaultSize().width;for(var t in q._dialogs)if(q._dialogs.hasOwnProperty(t)){var u=document.getElementById(t);if(u)u.style.width=s+'px';}}},_addOrientationHandler:function(){if(!o.mobile())return;var r="onorientationchange" in window?'orientationchange':'resize';q._availScreenWidth=screen.availWidth;j.add(window,r,q._handleOrientationChange);},create:function(r){r=r||{};var s=document.createElement('div'),t=document.createElement('div'),u='fb_dialog';if(r.closeIcon&&r.onClose){var v=document.createElement('a');v.className='fb_dialog_close_icon';v.onclick=r.onClose;s.appendChild(v);}u+=' '+(r.classes||'');if(o.ie()){u+=' fb_dialog_legacy';ES5(['vert_left','vert_right','horiz_top','horiz_bottom','top_left','top_right','bottom_left','bottom_right'],'forEach',true,function(y){var z=document.createElement('span');z.className='fb_dialog_'+y;s.appendChild(z);});}else u+=o.mobile()?' fb_dialog_mobile':' fb_dialog_advanced';if(r.content)h.append(r.content,t);s.className=u;var w=parseInt(r.width,10);if(!isNaN(w))s.style.width=w+'px';t.className='fb_dialog_content';s.appendChild(t);if(o.mobile()){var x=document.createElement('div');x.className='fb_dialog_padding';s.appendChild(x);}h.append(s);if(r.visible)q.show(s);return t;},show:function(r){var s=q._findRoot(r);if(s){q._removeStacked(s);q._hideLoader();q._makeActive(s);q._stack.push(s);if('fbCallID' in r)q.get(r.fbCallID).inform('iframe_show').trackEvent('show');}},hide:function(r){var s=q._findRoot(r);q._hideLoader();if(s==q._active){q._lowerActive();q._restoreBodyPosition();q._hideIPadOverlay();if('fbCallID' in r)q.get(r.fbCallID).inform('iframe_hide').trackEvent('hide');}},remove:function(r){r=q._findRoot(r);if(r){var s=q._active==r;q._removeStacked(r);if(s){q._hideLoader();if(q._stack.length>0){q.show(q._stack.pop());}else{q._lowerActive();q._restoreBodyPosition();q._hideIPadOverlay();}}else if(q._active===null&&q._stack.length>0)q.show(q._stack.pop());setTimeout(function(){r.parentNode.removeChild(r);},3000);}},isActive:function(r){var s=q._findRoot(r);return s&&s===q._active;}};e.exports=q;});
__d("sdk.Frictionless",["sdk.Auth","sdk.api","sdk.Event","sdk.Dialog"],function(a,b,c,d,e,f){var g=b('sdk.Auth'),h=b('sdk.api'),i=b('sdk.Event'),j=b('sdk.Dialog'),k={_allowedRecipients:{},_useFrictionless:false,_updateRecipients:function(){k._allowedRecipients={};h('/me/apprequestformerrecipients',function(l){if(!l||l.error)return;ES5(l.data,'forEach',true,function(m){k._allowedRecipients[m.recipient_id]=true;});});},init:function(){k._useFrictionless=true;g.getLoginStatus(function(l){if(l.status=='connected')k._updateRecipients();});i.subscribe('auth.login',function(l){if(l.authResponse)k._updateRecipients();});},_processRequestResponse:function(l,m){return function(n){var o=n&&n.updated_frictionless;if(k._useFrictionless&&o)k._updateRecipients();if(n){if(!m&&n.frictionless){j._hideLoader();j._restoreBodyPosition();j._hideIPadOverlay();}delete n.frictionless;delete n.updated_frictionless;}l&&l(n);};},isAllowed:function(l){if(!l)return false;if(typeof l==='number')return l in k._allowedRecipients;if(typeof l==='string')l=l.split(',');l=ES5(l,'map',true,function(o){return ES5(String(o),'trim',true);});var m=true,n=false;ES5(l,'forEach',true,function(o){m=m&&o in k._allowedRecipients;n=true;});return m&&n;}};i.subscribe('init:post',function(l){if(l.frictionlessRequests)k.init();});e.exports=k;});
__d("insertIframe",["guid","GlobalCallback"],function(a,b,c,d,e,f){var g=b('guid'),h=b('GlobalCallback');function i(j){j.id=j.id||g();j.name=j.name||g();var k=false,l=false,m=function(){if(k&&!l){l=true;j.onload&&j.onload(j.root.firstChild);}},n=h.create(m);if(document.attachEvent){var o=('<iframe'+' id="'+j.id+'"'+' name="'+j.name+'"'+(j.title?' title="'+j.title+'"':'')+(j.className?' class="'+j.className+'"':'')+' style="border:none;'+(j.width?'width:'+j.width+'px;':'')+(j.height?'height:'+j.height+'px;':'')+'"'+' src="javascript:false;"'+' frameborder="0"'+' scrolling="no"'+' allowtransparency="true"'+' onload="'+n+'()"'+'></iframe>');j.root.innerHTML=('<iframe src="javascript:false"'+' frameborder="0"'+' scrolling="no"'+' style="height:1px"></iframe>');k=true;setTimeout(function(){j.root.innerHTML=o;j.root.firstChild.src=j.url;j.onInsert&&j.onInsert(j.root.firstChild);},0);}else{var p=document.createElement('iframe');p.id=j.id;p.name=j.name;p.onload=m;p.scrolling='no';p.style.border='none';p.style.overflow='hidden';if(j.title)p.title=j.title;if(j.className)p.className=j.className;if(j.height!==undefined)p.style.height=j.height+'px';if(j.width!==undefined)if(j.width=='100%'){p.style.width=j.width;}else p.style.width=j.width+'px';j.root.appendChild(p);k=true;p.src=j.url;j.onInsert&&j.onInsert(p);}}e.exports=i;});
__d("sdk.Native",["copyProperties","Log","UserAgent"],function(a,b,c,d,e,f){var g=b('copyProperties'),h=b('Log'),i=b('UserAgent'),j='fbNativeReady',k={onready:function(l){if(!i.nativeApp()){h.error('FB.Native.onready only works when the page is rendered '+'in a WebView of the native Facebook app. Test if this is the '+'case calling FB.UA.nativeApp()');return;}if(window.__fbNative&&!this.nativeReady)g(this,window.__fbNative);if(this.nativeReady){l();}else{var m=function(n){window.removeEventListener(j,m);this.onready(l);};window.addEventListener(j,m,false);}}};e.exports=k;});
__d("sdk.UIServer",["sdk.Auth","sdk.Content","copyProperties","sdk.Dialog","sdk.DOM","sdk.Event","flattenObject","sdk.Frictionless","sdk.getContextType","guid","insertIframe","Log","sdk.Native","QueryString","resolveURI","sdk.RPC","sdk.Runtime","UrlMap","UserAgent","sdk.XD","SDKConfig"],function(a,b,c,d,e,f){var g=b('sdk.Auth'),h=b('sdk.Content'),i=b('copyProperties'),j=b('sdk.Dialog'),k=b('sdk.DOM'),l=b('sdk.Event'),m=b('flattenObject'),n=b('sdk.Frictionless'),o=b('sdk.getContextType'),p=b('guid'),q=b('insertIframe'),r=b('Log'),s=b('sdk.Native'),t=b('QueryString'),u=b('resolveURI'),v=b('sdk.RPC'),w=b('sdk.Runtime'),x=c('SDKConfig'),y=b('UrlMap'),z=b('UserAgent'),aa=b('sdk.XD'),ba={transform:function(ea){if(ea.params.display==='touch'&&ea.params.access_token&&window.postMessage){ea.params.channel=da._xdChannelHandler(ea.id,'parent');if(!z.nativeApp())ea.params.in_iframe=1;return ea;}else return da.genericTransform(ea);},getXdRelation:function(ea){var fa=ea.display;if(fa==='touch'&&window.postMessage&&ea.in_iframe)return 'parent';return da.getXdRelation(ea);}},ca={'stream.share':{size:{width:670,height:340},url:'sharer.php',transform:function(ea){if(!ea.params.u)ea.params.u=window.location.toString();ea.params.display='popup';return ea;}},apprequests:{transform:function(ea){ea=ba.transform(ea);ea.params.frictionless=n&&n._useFrictionless;if(ea.params.frictionless){if(n.isAllowed(ea.params.to)){ea.params.display='iframe';ea.params.in_iframe=true;ea.hideLoader=true;}ea.cb=n._processRequestResponse(ea.cb,ea.hideLoader);}ea.closeIcon=false;return ea;},getXdRelation:ba.getXdRelation},feed:ba,'permissions.oauth':{url:'dialog/oauth',size:{width:(z.mobile()?null:440),height:(z.mobile()?null:183)},transform:function(ea){if(!w.getClientID()){r.error('FB.login() called before FB.init().');return;}if(g.getAuthResponse()&&!ea.params.scope){r.error('FB.login() called when user is already connected.');ea.cb&&ea.cb({status:w.getLoginStatus(),authResponse:g.getAuthResponse()});return;}var fa=ea.cb,ga=ea.id;delete ea.cb;if(ea.params.display==='async'){i(ea.params,{client_id:w.getClientID(),origin:o(),response_type:'token,signed_request',domain:location.hostname});ea.cb=g.xdResponseWrapper(fa,g.getAuthResponse(),'permissions.oauth');}else i(ea.params,{client_id:w.getClientID(),redirect_uri:u(da.xdHandler(fa,ga,'opener',g.getAuthResponse(),'permissions.oauth')),origin:o(),response_type:'token,signed_request',domain:location.hostname});return ea;}},'auth.logout':{url:'logout.php',transform:function(ea){if(!w.getClientID()){r.error('FB.logout() called before calling FB.init().');}else if(!g.getAuthResponse()){r.error('FB.logout() called without an access token.');}else{ea.params.next=da.xdHandler(ea.cb,ea.id,'parent',g.getAuthResponse(),'logout');return ea;}}},'login.status':{url:'dialog/oauth',transform:function(ea){var fa=ea.cb,ga=ea.id;delete ea.cb;i(ea.params,{client_id:w.getClientID(),redirect_uri:da.xdHandler(fa,ga,'parent',g.getAuthResponse(),'login_status'),origin:o(),response_type:'token,signed_request,code',domain:location.hostname});return ea;}}},da={Methods:ca,_loadedNodes:{},_defaultCb:{},_resultToken:'"xxRESULTTOKENxx"',genericTransform:function(ea){if(ea.params.display=='dialog'||ea.params.display=='iframe')i(ea.params,{display:'iframe',channel:da._xdChannelHandler(ea.id,'parent.parent')},true);return ea;},checkOauthDisplay:function(ea){var fa=ea.scope||ea.perms||w.getScope();if(!fa)return ea.display;var ga=fa.split(/\s|,/g);for(var ha=0;ha<ga.length;ha++)if(!x.initSitevars.iframePermissions[ES5(ga[ha],'trim',true)])return 'popup';return ea.display;},prepareCall:function(ea,fa){var ga=ea.method.toLowerCase(),ha=i({},da.Methods[ga]),ia=p(),ja=w.getSecure()||(ga!=='auth.status'&&ga!='login.status');i(ea,{app_id:w.getClientID(),locale:w.getLocale(),sdk:'joey',access_token:ja&&w.getAccessToken()||undefined});ea.display=da.getDisplayMode(ha,ea);if(!ha.url)ha.url='dialog/'+ga;if((ha.url=='dialog/oauth'||ha.url=='dialog/permissions.request')&&(ea.display=='iframe'||(ea.display=='touch'&&ea.in_iframe)))ea.display=da.checkOauthDisplay(ea);var ka={cb:fa,id:ia,size:ha.size||da.getDefaultSize(),url:y.resolve(ea.display=='touch'?'m':'www',ja)+'/'+ha.url,params:ea,name:ga,dialog:j.newInstance(ia,ea.display)},la=ha.transform?ha.transform:da.genericTransform;if(la){ka=la(ka);if(!ka)return;}var ma=ha.getXdRelation||da.getXdRelation,na=ma(ka.params);if(!(ka.id in da._defaultCb)&&!('next' in ka.params)&&!('redirect_uri' in ka.params))ka.params.next=da._xdResult(ka.cb,ka.id,na,true);if(na==='parent')i(ka.params,{channel_url:da._xdChannelHandler(ia,'parent.parent')},true);ka=da.prepareParams(ka);return ka;},prepareParams:function(ea){var fa=ea.params.method;if(ea.params.display!=='async')delete ea.params.method;ea.params=m(ea.params);var ga=t.encode(ea.params);if(!z.nativeApp()&&da.urlTooLongForIE(ea.url+'?'+ga)){ea.post=true;}else if(ga)ea.url+='?'+ga;return ea;},urlTooLongForIE:function(ea){return ea.length>2000;},getDisplayMode:function(ea,fa){if(fa.display==='hidden'||fa.display==='none')return fa.display;var ga=w.isEnvironment(w.ENVIRONMENTS.CANVAS)||w.isEnvironment(w.ENVIRONMENTS.PAGETAB);if(ga&&!fa.display)return 'async';if(z.mobile()||fa.display==='touch')return 'touch';if(!w.getAccessToken()&&fa.display=='dialog'&&!ea.loggedOutIframe){r.error('"dialog" mode can only be used when the user is connected.');return 'popup';}if(ea.connectDisplay&&!ga)return ea.connectDisplay;return fa.display||(w.getAccessToken()?'dialog':'popup');},getXdRelation:function(ea){var fa=ea.display;if(fa==='popup'||fa==='touch')return 'opener';if(fa==='dialog'||fa==='iframe'||fa==='hidden'||fa==='none')return 'parent';if(fa==='async')return 'parent.frames['+window.name+']';},popup:function(ea){var fa=typeof window.screenX!='undefined'?window.screenX:window.screenLeft,ga=typeof window.screenY!='undefined'?window.screenY:window.screenTop,ha=typeof window.outerWidth!='undefined'?window.outerWidth:document.documentElement.clientWidth,ia=typeof window.outerHeight!='undefined'?window.outerHeight:(document.documentElement.clientHeight-22),ja=z.mobile()?null:ea.size.width,ka=z.mobile()?null:ea.size.height,la=(fa<0)?window.screen.width+fa:fa,ma=parseInt(la+((ha-ja)/2),10),na=parseInt(ga+((ia-ka)/2.5),10),oa=[];if(ja!==null)oa.push('width='+ja);if(ka!==null)oa.push('height='+ka);oa.push('left='+ma);oa.push('top='+na);oa.push('scrollbars=1');if(ea.name=='permissions.request'||ea.name=='permissions.oauth')oa.push('location=1,toolbar=0');oa=oa.join(',');var pa;if(ea.post){pa=window.open('about:blank',ea.id,oa);if(pa){da.setLoadedNode(ea,pa,'popup');h.submitToTarget({url:ea.url,target:ea.id,params:ea.params});}}else{pa=window.open(ea.url,ea.id,oa);if(pa)da.setLoadedNode(ea,pa,'popup');}if(!pa)return;if(ea.id in da._defaultCb)da._popupMonitor();},setLoadedNode:function(ea,fa,ga){if(ea.params&&ea.params.display!='popup')fa.fbCallID=ea.id;fa={node:fa,type:ga,fbCallID:ea.id};da._loadedNodes[ea.id]=fa;},getLoadedNode:function(ea){var fa=typeof ea=='object'?ea.id:ea,ga=da._loadedNodes[fa];return ga?ga.node:null;},hidden:function(ea){ea.className='FB_UI_Hidden';ea.root=h.appendHidden('');da._insertIframe(ea);},iframe:function(ea){ea.className='FB_UI_Dialog';var fa=function(){da._triggerDefault(ea.id);};ea.root=j.create({onClose:fa,closeIcon:ea.closeIcon===undefined?true:ea.closeIcon,classes:(z.ipad()?'centered':'')});if(!ea.hideLoader)j.showLoader(fa,ea.size.width);k.addCss(ea.root,'fb_dialog_iframe');da._insertIframe(ea);},touch:function(ea){if(ea.params&&ea.params.in_iframe){if(ea.ui_created){j.showLoader(function(){da._triggerDefault(ea.id);},0);}else da.iframe(ea);}else if(z.nativeApp()&&!ea.ui_created){ea.frame=ea.id;s.onready(function(){da.setLoadedNode(ea,s.open(ea.url+'#cb='+ea.frameName),'native');});da._popupMonitor();}else if(!ea.ui_created)da.popup(ea);},async:function(ea){ea.params.redirect_uri=location.protocol+'//'+location.host+location.pathname;delete ea.params.access_token;v.remote.showDialog(ea.params,function(fa){var ga=j.get(ea.id);if(fa.result)ga.trackEvents(fa.result.e2e);ga.trackEvent('close');ea.cb(fa.result);});},getDefaultSize:function(){return j.getDefaultSize();},_insertIframe:function(ea){da._loadedNodes[ea.id]=false;var fa=function(ga){if(ea.id in da._loadedNodes)da.setLoadedNode(ea,ga,'iframe');};if(ea.post){q({url:'about:blank',root:ea.root,className:ea.className,width:ea.size.width,height:ea.size.height,id:ea.id,onInsert:fa,onload:function(ga){h.submitToTarget({url:ea.url,target:ga.name,params:ea.params});}});}else q({url:ea.url,root:ea.root,className:ea.className,width:ea.size.width,height:ea.size.height,id:ea.id,name:ea.frameName,onInsert:fa});},_handleResizeMessage:function(ea,fa){var ga=da.getLoadedNode(ea);if(!ga)return;if(fa.height)ga.style.height=fa.height+'px';if(fa.width)ga.style.width=fa.width+'px';aa.inform('resize.ack',fa||{},'parent.frames['+ga.name+']');if(!j.isActive(ga))j.show(ga);},_triggerDefault:function(ea){da._xdRecv({frame:ea},da._defaultCb[ea]||function(){});},_popupMonitor:function(){var ea;for(var fa in da._loadedNodes)if(da._loadedNodes.hasOwnProperty(fa)&&fa in da._defaultCb){var ga=da._loadedNodes[fa];if(ga.type!='popup'&&ga.type!='native')continue;var ha=ga.node;try{if(ha.closed){da._triggerDefault(fa);}else ea=true;}catch(ia){}}if(ea&&!da._popupInterval){da._popupInterval=setInterval(da._popupMonitor,100);}else if(!ea&&da._popupInterval){clearInterval(da._popupInterval);da._popupInterval=null;}},_xdChannelHandler:function(ea,fa){return aa.handler(function(ga){var ha=da.getLoadedNode(ea);if(!ha)return;if(ga.type=='resize'){da._handleResizeMessage(ea,ga);}else if(ga.type=='hide'){j.hide(ha);}else if(ga.type=='rendered'){var ia=j._findRoot(ha);j.show(ia);}else if(ga.type=='fireevent')l.fire(ga.event);},fa,true,null);},_xdNextHandler:function(ea,fa,ga,ha){if(ha)da._defaultCb[fa]=ea;return aa.handler(function(ia){da._xdRecv(ia,ea);},ga)+'&frame='+fa;},_xdRecv:function(ea,fa){var ga=da.getLoadedNode(ea.frame);if(ga){try{if(k.containsCss(ga,'FB_UI_Hidden')){setTimeout(function(){ga.parentNode.parentNode.removeChild(ga.parentNode);},3000);}else if(k.containsCss(ga,'FB_UI_Dialog'))j.remove(ga);}catch(ha){}try{if(ga.close){ga.close();if(/iPhone.*Version\/(5|6)/.test(navigator.userAgent)&&RegExp.$1!=='5')window.focus();da._popupCount--;}}catch(ia){}}delete da._loadedNodes[ea.frame];delete da._defaultCb[ea.frame];var ja=j.get(ea.frame);ja.trackEvents(ea.e2e);ja.trackEvent('close');fa(ea);},_xdResult:function(ea,fa,ga,ha){return (da._xdNextHandler(function(ia){ea&&ea(ia.result&&ia.result!=da._resultToken&&ES5('JSON','parse',false,ia.result));},fa,ga,ha)+'&result='+encodeURIComponent(da._resultToken));},xdHandler:function(ea,fa,ga,ha,ia){return da._xdNextHandler(g.xdResponseWrapper(ea,ha,ia),fa,ga,true);}};v.stub('showDialog');e.exports=da;});
__d("sdk.ui",["Assert","copyProperties","sdk.feature","sdk.Impressions","Log","sdk.UIServer"],function(a,b,c,d,e,f){var g=b('Assert'),h=b('copyProperties'),i=b('sdk.feature'),j=b('sdk.Impressions'),k=b('Log'),l=b('sdk.UIServer');function m(n,o){g.isObject(n);g.maybeFunction(o);n=h({},n);if(!n.method){k.error('"method" is a required parameter for FB.ui().');return null;}var p=n.method;if(n.redirect_uri){k.warn('When using FB.ui, you should not specify a redirect_uri.');delete n.redirect_uri;}if((p=='permissions.request'||p=='permissions.oauth')&&(n.display=='iframe'||n.display=='dialog'))n.display=l.checkOauthDisplay(n);var q=i('e2e_tracking',true);if(q)n.e2e={};var r=l.prepareCall(n,o||function(){});if(!r)return null;var s=r.params.display;if(s==='dialog'){s='iframe';}else if(s==='none')s='hidden';var t=l[s];if(!t){k.error('"display" must be one of "popup", '+'"dialog", "iframe", "touch", "async", "hidden", or "none"');return null;}if(q)r.dialog.subscribe('e2e:end',function(u){u.method=p;u.display=s;k.debug('e2e: %s',ES5('JSON','stringify',false,u));j.log(114,{payload:u});});t(r);return r.dialog;}e.exports=m;});
__d("legacy:fb.auth",["sdk.Auth","sdk.Cookie","copyProperties","sdk.Event","FB","Log","sdk.Runtime","sdk.SignedRequest","sdk.ui"],function(a,b,c,d){var e=b('sdk.Auth'),f=b('sdk.Cookie'),g=b('copyProperties'),h=b('sdk.Event'),i=b('FB'),j=b('Log'),k=b('sdk.Runtime'),l=b('sdk.SignedRequest'),m=b('sdk.ui');i.provide('',{getLoginStatus:function(){return e.getLoginStatus.apply(e,arguments);},getAuthResponse:function(){return e.getAuthResponse();},getAccessToken:function(){return k.getAccessToken()||null;},getUserID:function(){return k.getUserID()||k.getCookieUserID();},login:function(n,o){if(o&&o.perms&&!o.scope){o.scope=o.perms;delete o.perms;j.warn('OAuth2 specification states that \'perms\' '+'should now be called \'scope\'.  Please update.');}var p=k.isEnvironment(k.ENVIRONMENTS.CANVAS)||k.isEnvironment(k.ENVIRONMENTS.PAGETAB);m(g({method:'permissions.oauth',display:p?'async':'popup',domain:location.hostname},o||{}),n);},logout:function(n){m({method:'auth.logout',display:'hidden'},n);}});e.subscribe('logout',ES5(h.fire,'bind',true,h,'auth.logout'));e.subscribe('login',ES5(h.fire,'bind',true,h,'auth.login'));e.subscribe('authresponse.change',ES5(h.fire,'bind',true,h,'auth.authResponseChange'));e.subscribe('status.change',ES5(h.fire,'bind',true,h,'auth.statusChange'));h.subscribe('init:post',function(n){if(n.status)e.getLoginStatus();if(k.getClientID())if(n.authResponse){e.setAuthResponse(n.authResponse,'connected');}else if(k.getUseCookie()){var o=f.loadSignedRequest(),p;if(o){try{p=l.parse(o);}catch(q){f.clearSignedRequestCookie();}if(p&&p.user_id)k.setCookieUserID(p.user_id);}f.loadMeta();}});},3);
__d("sdk.Canvas.Flash",["sdk.api","sdk.RPC","Log","sdk.Runtime","createArrayFrom"],function(a,b,c,d,e,f){var g=b('sdk.api'),h=b('sdk.RPC'),i=b('Log'),j=b('sdk.Runtime'),k=b('createArrayFrom'),l='CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000',m=null;function n(r){r.style.visibility='hidden';}function o(r){r.style.visibility='';}function p(r){i.info('hideFlashCallback called with %s',r.state);var s=window.document.getElementsByTagName('object');ES5(k(s),'forEach',true,function(t){if(t.type.toLowerCase()!="application/x-shockwave-flash"&&(!t.classid||t.classid.toUpperCase()!=l))return;for(var u=0;u<t.childNodes.length;u++){var v=t.childNodes[u];if(/param/i.test(v.nodeName)&&/wmode/i.test(v.name)&&/opaque|transparent/i.test(v.value))return;}if(m){i.info('Calling developer specified callback');var w={state:r.state,elem:t};m(w);setTimeout(function(){if(w.state=='opened'){n(t);}else o(t);},200);}else if(r.state=='opened'){t._old_visibility=t.style.visibility;t.style.visibility='hidden';}else if(r.state=='closed'){t.style.visibility=t._old_visibility||'';delete t._old_visibility;}if(Math.random()<=1/1000)g(j.getClientID()+'/occludespopups','post',{});});}h.local.hideFlashObjects=function(){p({state:'opened'});};h.local.showFlashObjects=function(){p({state:'closed'});};var q={_setHideFlashCallback:function(r){m=r;},hideFlashElement:n,showFlashElement:o};e.exports=q;});
__d("sdk.Canvas.IframeHandling",["DOMWrapper","sdk.RPC"],function(a,b,c,d,e,f){var g=b('DOMWrapper'),h=b('sdk.RPC'),i=null,j;function k(){var o=g.getWindow().document,p=o.body,q=o.documentElement,r=Math.max(p.offsetTop,0),s=Math.max(q.offsetTop,0),t=p.scrollHeight+r,u=p.offsetHeight+r,v=q.scrollHeight+s,w=q.offsetHeight+s;return Math.max(t,u,v,w);}function l(o){if(typeof o!='object')o={};var p=0,q=0;if(!o.height){o.height=k();p=16;q=4;}if(!o.frame)o.frame=window.name||'iframe_canvas';if(j){var r=j.height,s=o.height-r;if(s<=q&&s>=-p)return false;}j=o;h.remote.setSize(o);return true;}function m(o,p){if(p===undefined&&typeof o==='number'){p=o;o=true;}if(o||o===undefined){if(i===null)i=setInterval(function(){l();},p||100);l();}else if(i!==null){clearInterval(i);i=null;}}h.stub('setSize');var n={setSize:l,setAutoGrow:m};e.exports=n;});
__d("sdk.Canvas.Navigation",["sdk.RPC"],function(a,b,c,d,e,f){var g=b('sdk.RPC');function h(j){g.local.navigate=function(k){j({path:k});};g.remote.setNavigationEnabled(true);}g.stub('setNavigationEnabled');var i={setUrlHandler:h};e.exports=i;});
__d("sdk.Canvas.Tti",["sdk.RPC","sdk.Runtime"],function(a,b,c,d,e,f){var g=b('sdk.RPC'),h=b('sdk.Runtime');function i(n,o){var p={appId:h.getClientID(),time:ES5('Date','now',false),name:o},q=[p];if(n)q.push(function(r){n(r.result);});g.remote.logTtiMessage.apply(null,q);}function j(){i(null,'StartIframeAppTtiTimer');}function k(n){i(n,'StopIframeAppTtiTimer');}function l(n){i(n,'RecordIframeAppTti');}g.stub('logTtiMessage');var m={setDoneLoading:l,startTimer:j,stopTimer:k};e.exports=m;});
__d("legacy:fb.canvas",["Assert","sdk.Canvas.Environment","sdk.Event","FB","sdk.Canvas.Flash","sdk.Canvas.IframeHandling","Log","sdk.Canvas.Navigation","sdk.Runtime","sdk.Canvas.Tti"],function(a,b,c,d){var e=b('Assert'),f=b('sdk.Canvas.Environment'),g=b('sdk.Event'),h=b('FB'),i=b('sdk.Canvas.Flash'),j=b('sdk.Canvas.IframeHandling'),k=b('Log'),l=b('sdk.Canvas.Navigation'),m=b('sdk.Runtime'),n=b('sdk.Canvas.Tti');h.provide('Canvas',{setSize:function(o){e.maybeObject(o,'Invalid argument');return j.setSize.apply(null,arguments);},setAutoGrow:function(){return j.setAutoGrow.apply(null,arguments);},getPageInfo:function(o){e.isFunction(o,'Invalid argument');return f.getPageInfo.apply(null,arguments);},scrollTo:function(o,p){e.maybeNumber(o,'Invalid argument');e.maybeNumber(p,'Invalid argument');return f.scrollTo.apply(null,arguments);},setDoneLoading:function(o){e.maybeFunction(o,'Invalid argument');return n.setDoneLoading.apply(null,arguments);},startTimer:function(){return n.startTimer.apply(null,arguments);},stopTimer:function(o){e.maybeFunction(o,'Invalid argument');return n.stopTimer.apply(null,arguments);},getHash:function(o){e.isFunction(o,'Invalid argument');return l.getHash.apply(null,arguments);},setHash:function(o){e.isString(o,'Invalid argument');return l.setHash.apply(null,arguments);},setUrlHandler:function(o){e.isFunction(o,'Invalid argument');return l.setUrlHandler.apply(null,arguments);}});h.provide('CanvasInsights',{setDoneLoading:function(o){k.warn('Deprecated: use FB.Canvas.setDoneLoading');e.maybeFunction(o,'Invalid argument');return n.setDoneLoading.apply(null,arguments);}});g.subscribe('init:post',function(o){if(m.isEnvironment(m.ENVIRONMENTS.CANVAS))i._setHideFlashCallback(o.hideFlashCallback);});},3);
__d("sdk.Canvas.Prefetcher",["sdk.api","createArrayFrom","sdk.Runtime","CanvasPrefetcherConfig"],function(a,b,c,d,e,f){var g=b('sdk.api'),h=b('createArrayFrom'),i=c('CanvasPrefetcherConfig'),j=b('sdk.Runtime'),k={AUTOMATIC:0,MANUAL:1},l=i.sampleRate,m=i.blacklist,n=k.AUTOMATIC,o=[];function p(){var u={object:'data',link:'href',script:'src'};if(n==k.AUTOMATIC)ES5(ES5('Object','keys',false,u),'forEach',true,function(v){var w=u[v];ES5(h(document.getElementsByTagName(v)),'forEach',true,function(x){if(x[w])o.push(x[w]);});});if(o.length===0)return;g(j.getClientID()+'/staticresources','post',{urls:ES5('JSON','stringify',false,o),is_https:location.protocol==='https:'});o=[];}function q(){if(!j.isEnvironment(j.ENVIRONMENTS.CANVAS)||!j.getClientID()||!l)return;if(Math.random()>1/l||m=='*'||~ES5(m,'indexOf',true,j.getClientID()))return;setTimeout(p,30000);}function r(u){n=u;}function s(u){o.push(u);}var t={COLLECT_AUTOMATIC:k.AUTOMATIC,COLLECT_MANUAL:k.MANUAL,addStaticResource:s,setCollectionMode:r,_maybeSample:q};e.exports=t;});
__d("legacy:fb.canvas.prefetcher",["FB","sdk.Canvas.Prefetcher","sdk.Event","sdk.Runtime"],function(a,b,c,d){var e=b('FB'),f=b('sdk.Canvas.Prefetcher'),g=b('sdk.Event'),h=b('sdk.Runtime');e.provide('Canvas.Prefetcher',f);g.subscribe('init:post',function(i){if(h.isEnvironment(h.ENVIRONMENTS.CANVAS))f._maybeSample();});},3);
__d("legacy:fb.compat.ui",["copyProperties","FB","Log","sdk.ui","sdk.UIServer"],function(a,b,c,d){var e=b('copyProperties'),f=b('FB'),g=b('Log'),h=b('sdk.ui'),i=b('sdk.UIServer');f.provide('',{share:function(j){g.error('share() has been deprecated. Please use FB.ui() instead.');h({display:'popup',method:'stream.share',u:j});},publish:function(j,k){g.error('publish() has been deprecated. Please use FB.ui() instead.');j=j||{};h(e({display:'popup',method:'stream.publish',preview:1},j||{}),k);},addFriend:function(j,k){g.error('addFriend() has been deprecated. Please use FB.ui() instead.');h({display:'popup',id:j,method:'friend.add'},k);}});i.Methods['auth.login']=i.Methods['permissions.request'];},3);
__d("mergeArrays",[],function(a,b,c,d,e,f){function g(h,i){for(var j=0;j<i.length;j++)if(ES5(h,'indexOf',true,i[j])<0)h.push(i[j]);return h;}e.exports=g;});
__d("format",[],function(a,b,c,d,e,f){function g(h,i){i=Array.prototype.slice.call(arguments,1);return h.replace(/\{(\d+)\}/g,function(j,k){var l=i[Number(k)];return (l===null||l===undefined)?'':l.toString();});}e.exports=g;});
__d("safeEval",[],function(a,b,c,d,e,f){function g(h,i){if(h===null||typeof h==='undefined')return;if(typeof h!=='string')return h;if(/^\w+$/.test(h)&&typeof window[h]==='function')return window[h].apply(null,i||[]);return Function('return eval("'+h.replace(/"/g,'\\"')+'");').apply(null,i||[]);}e.exports=g;});
__d("sdk.Waitable",["sdk.Model"],function(a,b,c,d,e,f){var g=b('sdk.Model'),h=g.extend({constructor:function(){this.parent({Value:undefined});},error:function(i){this.inform("error",i);},wait:function(i,j){if(j)this.subscribe('error',j);this.monitor('Value.change',ES5(function(){var k=this.getValue();if(k!==undefined){this.value=k;i(k);return true;}},'bind',true,this));}});e.exports=h;});
__d("sdk.Query",["format","safeEval","Type","sdk.Waitable"],function(a,b,c,d,e,f){var g=b('format'),h=b('safeEval'),i=b('Type'),j=b('sdk.Waitable');function k(p){return ES5(p.split(','),'map',true,function(q){return ES5(q,'trim',true);});}function l(p){var q=(/^\s*(\w+)\s*=\s*(.*)\s*$/i).exec(p),r,s,t='unknown';if(q){s=q[2];if(/^(["'])(?:\\?.)*?\1$/.test(s)){s=h(s);t='index';}else if(/^\d+\.?\d*$/.test(s))t='index';}if(t=='index'){r={type:'index',key:q[1],value:s};}else r={type:'unknown',value:p};return r;}function m(p){return typeof p==='string'?ES5('JSON','stringify',false,p):p;}var n=1,o=j.extend({constructor:function(){this.parent();this.name='v_'+n++;},hasDependency:function(p){if(arguments.length)this._hasDependency=p;return !!this._hasDependency;},parse:function(p){var q=g.apply(null,p),r=(/^select (.*?) from (\w+)\s+where (.*)$/i).exec(q);this.fields=k(r[1]);this.table=r[2];this.where=l(r[3]);for(var s=1;s<p.length;s++)if(i.instanceOf(o,p[s]))p[s].hasDependency(true);return this;},toFql:function(){var p='select '+this.fields.join(',')+' from '+this.table+' where ';switch(this.where.type){case 'unknown':p+=this.where.value;break;case 'index':p+=this.where.key+'='+m(this.where.value);break;case 'in':if(this.where.value.length==1){p+=this.where.key+'='+m(this.where.value[0]);}else p+=this.where.key+' in ('+ES5(this.where.value,'map',true,m).join(',')+')';break;}return p;},toString:function(){return '#'+this.name;}});e.exports=o;});
__d("sdk.Data",["sdk.api","sdk.ErrorHandling","mergeArrays","sdk.Query","safeEval","sdk.Waitable"],function(a,b,c,d,e,f){var g=b('sdk.api'),h=b('sdk.ErrorHandling'),i=b('mergeArrays'),j=b('sdk.Query'),k=b('safeEval'),l=b('sdk.Waitable'),m={query:function(n,o){var p=new j().parse(Array.prototype.slice.call(arguments));m.queue.push(p);m._waitToProcess();return p;},waitOn:function(n,o){var p=new l(),q=n.length;if(typeof(o)=='string'){var r=o;o=h.unguard(function(){return k(r);});}ES5(n,'forEach',true,function(s){s.monitor('Value.change',function(){var t=false;if(m._getValue(s)!==undefined){s.value=s.getValue();q--;t=true;}if(q===0){var u=o(ES5(n,'map',true,m._getValue));p.setValue(u!==undefined?u:true);}return t;});});return p;},process:function(n){m._process(n);},_getValue:function(n){return n instanceof l?n.getValue():n;},_selectByIndex:function(n,o,p,q){var r=new j();r.fields=n;r.table=o;r.where={type:'index',key:p,value:q};m.queue.push(r);m._waitToProcess();return r;},_waitToProcess:function(){if(m.timer<0)m.timer=setTimeout(function(){m._process();},10);},_process:function(n){m.timer=-1;var o={},p=m.queue;if(!p.length)return;m.queue=[];for(var q=0;q<p.length;q++){var r=p[q];if(r.where.type=='index'&&!r.hasDependency()){m._mergeIndexQuery(r,o);}else o[r.name]=r;}var s={q:{}};for(var t in o)if(o.hasOwnProperty(t))s.q[t]=o[t].toFql();if(n)s.access_token=n;g('/fql','GET',s,function(u){if(u.error){ES5(ES5('Object','keys',false,o),'forEach',true,function(v){o[v].error(new Error(u.error.message));});}else ES5(u.data,'forEach',true,function(v){o[v.name].setValue(v.fql_result_set);});});},_mergeIndexQuery:function(n,o){var p=n.where.key,q=n.where.value,r='index_'+n.table+'_'+p,s=o[r];if(!s){s=o[r]=new j();s.fields=[p];s.table=n.table;s.where={type:'in',key:p,value:[]};}i(s.fields,n.fields);i(s.where.value,[q]);s.wait(function(t){n.setValue(ES5(t,'filter',true,function(u){return u[p]==q;}));});},timer:-1,queue:[]};e.exports=m;});
__d("legacy:fb.data",["FB","sdk.Data"],function(a,b,c,d){var e=b('FB'),f=b('sdk.Data');e.provide('Data',f);},3);
__d("legacy:fb.event",["FB","sdk.Event"],function(a,b,c,d){var e=b('FB'),f=b('sdk.Event');e.provide('Event',f);e.provide('EventProvider',f);},3);
__d("legacy:fb.frictionless",["FB","sdk.Frictionless"],function(a,b,c,d){var e=b('FB'),f=b('sdk.Frictionless');e.provide('Frictionless',f);},3);
__d("sdk.init",["sdk.Cookie","copyProperties","createArrayFrom","sdk.ErrorHandling","sdk.Event","Log","QueryString","sdk.Runtime"],function(a,b,c,d,e,f){var g=b('sdk.Cookie'),h=b('copyProperties'),i=b('createArrayFrom'),j=b('sdk.ErrorHandling'),k=b('sdk.Event'),l=b('Log'),m=b('QueryString'),n=b('sdk.Runtime');function o(p){if(n.getInitialized())l.warn('FB.init has already been called - this could indicate a problem');if(/number|string/.test(typeof p)){l.warn('FB.init called with invalid parameters');p={apiKey:p};}p=h({logging:true,status:true},p||{});var q=p.appId||p.apiKey;if(/number|string/.test(typeof q))n.setClientID(q.toString());if('scope' in p)n.setScope(p.scope);if(p.cookie){n.setUseCookie(true);if(typeof p.cookie==='string')g.setDomain(p.cookie);}n.setInitialized(true);k.fire('init:post',p);}setTimeout(function(){var p=/(connect\.facebook\.net|\.facebook\.com\/assets.php).*?#(.*)/;ES5(i(document.getElementsByTagName('script')),'forEach',true,function(q){if(q.src){var r=p.exec(q.src);if(r){var s=m.decode(r[2]);for(var t in s)if(s.hasOwnProperty(t)){var u=s[t];if(u=='0')s[t]=0;}o(s);}}});if(window.fbAsyncInit&&!window.fbAsyncInit.hasRun){window.fbAsyncInit.hasRun=true;j.unguard(window.fbAsyncInit)();}},0);e.exports=o;});
__d("legacy:fb.init",["FB","sdk.init"],function(a,b,c,d){var e=b('FB'),f=b('sdk.init');e.provide('',{init:f});},3);
__d("legacy:fb.json",["FB","ManagedError"],function(a,b,c,d){var e=b('FB'),f=b('ManagedError');e.provide('JSON',{stringify:function(g){try{return ES5('JSON','stringify',false,g);}catch(h){throw new f(h.message,h);}},parse:function(g){try{return ES5('JSON','parse',false,g);}catch(h){throw new f(h.message,h);}}});},3);
__d("legacy:fb.pay",["FB","copyProperties","sdk.Runtime","sdk.UIServer","sdk.XD"],function(a,b,c,d){b('FB');var e=b('copyProperties'),f=b('sdk.Runtime'),g=b('sdk.UIServer'),h=b('sdk.XD'),i={error_code:1383001,error_message:'An unknown error caused the dialog to be closed'},j=function(k){return function(l){k(l&&l.response?ES5('JSON','parse',false,l.response):i);};};e(g.Methods,{'pay.prompt':{transform:function(k){var l=h.handler(j(k.cb),'parent.frames['+(window.name||'iframe_canvas')+']');k.params.channel=l;h.inform('Pay.Prompt',k.params);}},pay:{size:{width:555,height:120},connectDisplay:'popup',transform:function(k){k.cb=j(k.cb);if(!f.isEnvironment(f.ENVIRONMENTS.CANVAS)){k.params.order_info=ES5('JSON','stringify',false,k.params.order_info);return k;}var l=h.handler(k.cb,'parent.frames['+(window.name||'iframe_canvas')+']');k.params.channel=l;k.params.uiserver=true;h.inform('Pay.Prompt',k.params);}}});},3);
__d("legacy:fb.ua",["FB","UserAgent"],function(a,b,c,d){var e=b('FB'),f=b('UserAgent');e.provide('UA',{nativeApp:f.nativeApp});},3);
__d("legacy:fb.ui",["FB","sdk.ui"],function(a,b,c,d){var e=b('FB'),f=b('sdk.ui');e.provide('',{ui:f});},3);
__d("Miny",[],function(a,b,c,d,e,f){var g='Miny1',h={encode:[],decode:{}},i='wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split('');function j(n){for(var o=h.encode.length;o<n;o++){var p=o.toString(32).split('');p[p.length-1]=i[parseInt(p[p.length-1],32)];p=p.join('');h.encode[o]=p;h.decode[p]=o;}return h;}function k(n){var o=n.match(/\w+|\W+/g),p={};for(var q=0;q<o.length;q++)p[o[q]]=(p[o[q]]||0)+1;var r=ES5('Object','keys',false,p);r.sort(function(u,v){return p[u]<p[v]?1:(p[v]<p[u]?-1:0);});var s=j(r.length).encode;for(q=0;q<r.length;q++)p[r[q]]=s[q];var t=[];for(q=0;q<o.length;q++)t[q]=p[o[q]];for(q=0;q<r.length;q++)r[q]=r[q].replace(/'~'/g,'\\~');return [g,r.length].concat(r).concat(t.join('')).join('~');}function l(n){var o=n.split('~');if(o.shift()!=g)throw new Error('Not a Miny stream');var p=parseInt(o.shift(),10),q=o.pop();q=q.match(/[0-9a-v]*[\-w-zA-Z_]/g);var r=o,s=j(p).decode,t=[];for(var u=0;u<q.length;u++)t[u]=r[s[q[u]]];return t.join('');}var m={encode:k,decode:l};e.exports=m;});
__d("runOnce",[],function(a,b,c,d,e,f){function g(h){var i,j;return function(){if(!i){i=true;j=h();}return j;};}e.exports=g;});
__d("XFBML",["Assert","copyProperties","createArrayFrom","sdk.DOM","sdk.feature","sdk.Impressions","Log","ObservableMixin","runOnce","UserAgent"],function(a,b,c,d,e,f){var g=b('Assert'),h=b('copyProperties'),i=b('createArrayFrom'),j=b('sdk.DOM'),k=b('sdk.feature'),l=b('sdk.Impressions'),m=b('Log'),n=b('ObservableMixin'),o=b('runOnce'),p=b('UserAgent'),q={},r={},s=0,t=new n();function u(ba,ca){return ba[ca]+'';}function v(ba){return ba.scopeName?(ba.scopeName+':'+ba.nodeName):'';}function w(ba){return q[u(ba,'nodeName').toLowerCase()]||q[v(ba).toLowerCase()];}function x(ba){var ca=ES5(ES5(u(ba,'className'),'trim',true).split(/\s+/),'filter',true,function(da){return r.hasOwnProperty(da);});if(ca.length===0)return undefined;if(!ba.childNodes||ba.childNodes.length===0||(ba.childNodes.length==1&&ba.childNodes[0].nodeType==3)||ba.getAttribute('fb-xfbml-state'))return r[ca[0]];}function y(ba){var ca={};ES5(i(ba.attributes),'forEach',true,function(da){ca[u(da,'name')]=u(da,'value');});return ca;}function z(ba,ca,da){g.isTrue(ba&&ba.nodeType&&ba.nodeType===1&&!!ba.getElementsByTagName,'Invalid DOM node passed to FB.XFBML.parse()');g.isFunction(ca,'Invalid callback passed to FB.XFBML.parse()');var ea=++s;m.info('XFBML Parsing Start %s',ea);var fa=1,ga=0,ha=function(){fa--;if(fa===0){m.info('XFBML Parsing Finish %s, %s tags found',ea,ga);ca();t.inform('render',ea,ga);}g.isTrue(fa>=0,'onrender() has been called too many times');};ES5(i(ba.getElementsByTagName('*')),'forEach',true,function(ja){if(!da&&ja.getAttribute('fb-xfbml-state'))return;if(ja.nodeType!==1)return;var ka=x(ja),la=y(ja);if(!ka){ka=w(ja);if(!ka)return;if(p.ie()<9){var ma=ja;ja=document.createElement('div');j.addCss(ja,ka.xmlns+'-'+ka.localName);ES5(i(ma.childNodes),'forEach',true,function(qa){ja.appendChild(qa);});for(var na in la)if(la.hasOwnProperty(na))ja.setAttribute(na,la[na]);ma.parentNode.replaceChild(ja,ma);}}fa++;ga++;var oa=new ka.ctor(ja,ka.xmlns,ka.localName,la);oa.subscribe('render',o(function(){ja.setAttribute('fb-xfbml-state','rendered');ha();}));var pa=function(){if(ja.getAttribute('fb-xfbml-state')=='parsed'){t.subscribe('render.queue',pa);}else{ja.setAttribute('fb-xfbml-state','parsed');oa.process();}};pa();});t.inform('parse',ea,ga);var ia=30000;setTimeout(function(){if(fa>0)m.warn('%s tags failed to render in %s ms',fa,ia);},ia);ha();}t.subscribe('render',function(){var ba=t.getSubscribers('render.queue');t.clearSubscribers('render.queue');ES5(ba,'forEach',true,function(ca){ca();});});h(t,{registerTag:function(ba){var ca=ba.xmlns+':'+ba.localName;g.isUndefined(q[ca],ca+' already registered');q[ca]=ba;r[ba.xmlns+'-'+ba.localName]=ba;},parse:function(ba,ca){z(ba||document.body,ca||function(){},true);},parseNew:function(){z(document.body,function(){},false);}});if(k('log_tag_count')){var aa=function(ba,ca){t.unsubscribe('parse',aa);setTimeout(ES5(l.log,'bind',true,null,102,{tag_count:ca}),5000);};t.subscribe('parse',aa);}e.exports=t;});
__d("PluginPipe",["sdk.Content","copyProperties","sdk.feature","guid","insertIframe","Miny","ObservableMixin","sdk.Runtime","UrlMap","UserAgent","XFBML","PluginPipeConfig"],function(a,b,c,d,e,f){var g=b('sdk.Content'),h=b('copyProperties'),i=b('sdk.feature'),j=b('guid'),k=b('insertIframe'),l=b('Miny'),m=b('ObservableMixin'),n=c('PluginPipeConfig'),o=b('sdk.Runtime'),p=b('UrlMap'),q=b('UserAgent'),r=b('XFBML'),s=new m(),t=n.threshold,u=[];function v(){return !!(i('plugin_pipe')&&o.getSecure()!==undefined&&(q.chrome()||q.firefox())&&n.enabledApps[o.getClientID()]);}function w(){var y=u;u=[];if(y.length<=t){ES5(y,'forEach',true,function(ba){k(ba.config);});return;}var z=y.length+1;function aa(){z--;if(z===0)x(y);}ES5(y,'forEach',true,function(ba){var ca={};for(var da in ba.config)ca[da]=ba.config[da];ca.url=p.resolve('www',o.getSecure())+'/plugins/plugin_pipe_shell.php';ca.onload=aa;k(ca);});aa();}r.subscribe('parse',w);function x(y){var z=document.createElement('span');g.appendHidden(z);var aa={};ES5(y,'forEach',true,function(fa){aa[fa.config.name]={plugin:fa.tag,params:fa.params};});var ba=ES5('JSON','stringify',false,aa),ca=l.encode(ba);ES5(y,'forEach',true,function(fa){var ga=document.getElementsByName(fa.config.name)[0];ga.onload=fa.config.onload;});var da=p.resolve('www',o.getSecure())+'/plugins/pipe.php',ea=j();k({url:'about:blank',root:z,name:ea,className:'fb_hidden fb_invisible',onload:function(){g.submitToTarget({url:da,target:ea,params:{plugins:ca.length<ba.length?ca:ba}});}});}h(s,{add:function(y){var z=v();z&&u.push({config:y._config,tag:y._tag,params:y._params});return z;}});e.exports=s;});
__d("IframePlugin",["sdk.Auth","sdk.createIframe","sdk.DOM","sdk.Event","guid","Log","ObservableMixin","PluginPipe","QueryString","resolveURI","sdk.Runtime","Type","UrlMap","sdk.XD"],function(a,b,c,d,e,f){var g=b('sdk.Auth'),h=b('sdk.createIframe'),i=b('sdk.DOM'),j=b('sdk.Event'),k=b('guid'),l=b('Log'),m=b('ObservableMixin'),n=b('PluginPipe'),o=b('QueryString'),p=b('resolveURI'),q=b('sdk.Runtime'),r=b('Type'),s=b('UrlMap'),t=b('sdk.XD'),u={skin:'string',font:'string',width:'px',height:'px',ref:'string',color_scheme:'string'};function v(ca,da,ea){if(da||da===0)ca.style.width=da+'px';if(ea||ea===0)ca.style.height=ea+'px';}function w(ca){return function(da){var ea={width:da.width,height:da.height,pluginID:ca};j.fire('xfbml.resize',ea);};}var x={string:function(ca){return ca;},bool:function(ca){return ca?(/^(?:true|1|yes|on)$/i).test(ca):undefined;},url:function(ca){return p(ca);},url_maybe:function(ca){return ca?p(ca):ca;},hostname:function(ca){return ca||window.location.hostname;},px:function(ca){return (/^(\d+)(?:px)?$/).test(ca)?parseInt(RegExp.$1,10):undefined;},text:function(ca){return ca;}};function y(ca,da){var ea=ca[da]||ca[da.replace(/_/g,'-')]||ca[da.replace(/_/g,'')]||ca['data-'+da]||ca['data-'+da.replace(/_/g,'-')]||ca['data-'+da.replace(/_/g,'')]||undefined;return ea;}function z(ca,da,ea,fa){ES5(ES5('Object','keys',false,ca),'forEach',true,function(ga){if(ca[ga]=='text'&&!ea[ga]){ea[ga]=da.textContent||da.innerText||'';da.setAttribute(ga,ea[ga]);}fa[ga]=x[ca[ga]](y(ea,ga));});}function aa(ca){return ca||ca==='0'||ca===0?parseInt(ca,10):undefined;}var ba=r.extend({constructor:function(ca,da,ea,fa){this.parent();ea=ea.replace(/-/g,'_');var ga=y(fa,'plugin_id');this.subscribe('xd.resize',w(ga));this.subscribe('xd.resize.flow',w(ga));this.subscribe('xd.resize.flow',ES5(function(na){this._config.root.style.verticalAlign='bottom';v(this._config.root,aa(na.width),aa(na.height));this.updateLift();clearTimeout(this._timeoutID);},'bind',true,this));this.subscribe('xd.resize',ES5(function(na){this._config.root.style.verticalAlign='bottom';v(this._config.root,aa(na.width),aa(na.height));v(this._iframe,aa(na.width),aa(na.height));this.updateLift();clearTimeout(this._timeoutID);},'bind',true,this));this.subscribe('xd.resize.iframe',ES5(function(na){v(this._iframe,aa(na.width),aa(na.height));this.updateLift();clearTimeout(this._timeoutID);},'bind',true,this));var ha=q.getSecure()||window.location.protocol=='https:',ia=s.resolve('www',ha)+'/plugins/'+ea+'.php?',ja={};z(this.getParams(),ca,fa,ja);z(u,ca,fa,ja);ja.app_id=q.getClientID();ja.locale=q.getLocale();ja.sdk='joey';var ka=ES5(function(na){this.inform('xd.'+na.type,na);},'bind',true,this);ja.channel=t.handler(ka,'parent.parent',true);i.addCss(ca,'fb_iframe_widget');var la=k();this.subscribe('xd.verify',function(na){t.sendToFacebook(la,{method:'xd/verify',params:ES5('JSON','stringify',false,na.token)});});this.subscribe('xd.refreshLoginStatus',ES5(g.getLoginStatus,'bind',true,g,ES5(this.inform,'bind',true,this,'login.status'),true));var ma=document.createElement('span');ma.style.verticalAlign='top';ma.style.width='0px';ma.style.height='0px';this.subscribe('render',function(){this._iframe.style.visibility='visible';});this._element=ca;this._ns=da;this._tag=ea;this._params=ja;this._config={root:ma,url:ia+o.encode(ja),name:la,width:ja.width||1000,height:ja.height||1000,style:{border:'none',visibility:'hidden'},title:this._ns+':'+this._tag+' Facebook Social Plugin',onload:ES5(function(){this.inform('render');},'bind',true,this)};},process:function(){this._element.innerHTML='';this._element.appendChild(this._config.root);this._timeoutID=setTimeout(ES5(function(){this._iframe&&v(this._iframe,0,0);l.warn('%s:%s failed to resize in 45s',this._ns,this._tag);},'bind',true,this),45*1000);if(!n.add(this))this._iframe=h(this._config);},updateLift:function(){var ca=this._iframe.style.width===this._config.root.style.width&&this._iframe.style.height===this._config.root.style.height;i[ca?'removeCss':'addCss'](this._iframe,'fb_iframe_widget_lift');}},m);ba.getVal=y;ba.withParams=function(ca){return ba.extend({getParams:function(){return ca;}});};e.exports=ba;});
__d("PluginTags",[],function(a,b,c,d,e,f){var g={activity:{border_color:'string',filter:'string',action:'string',max_age:'string',linktarget:'string',header:'bool',recommendations:'bool',site:'hostname'},create_event_button:{},degrees:{href:'url',limit_profile_visibility:'bool'},facepile:{href:'string',action:'string',size:'string',max_rows:'string',show_count:'bool'},friendpile:{href:'string',action:'string',size:'string',max_rows:'string'},follow:{href:'url',layout:'string',show_faces:'bool'},open_graph:{href:'url',layout:'string',show_faces:'bool',action_type:'string',action_properties:'string'},open_graph_composer:{action_type:'string',action_properties:'string'},open_graph_preview:{action_type:'string',action_properties:'string'},page_events:{href:'url'},privacy_selector:{},recommendations:{border_color:'string',filter:'string',action:'string',max_age:'string',linktarget:'string',header:'bool',site:'hostname'},share_button:{href:'url',type:'string'},shared_activity:{header:'bool'},send_to_mobile:{max_rows:'string',show_faces:'bool',size:'string'},story:{href:'url',show_border:'bool'},subscribe:{href:'url',layout:'string',show_faces:'bool'},want:{href:'url',layout:'string',show_faces:'bool'}};e.exports=g;});
__d("sdk.Arbiter",[],function(a,b,c,d,e,f){var g={BEHAVIOR_EVENT:'e',BEHAVIOR_PERSISTENT:'p',BEHAVIOR_STATE:'s'};e.exports=g;});
__d("sdk.XFBML.Element",["sdk.DOM","Type","ObservableMixin"],function(a,b,c,d,e,f){var g=b('sdk.DOM'),h=b('Type'),i=b('ObservableMixin'),j=h.extend({constructor:function(k){this.parent();this.dom=k;},fire:function(){this.inform.apply(this,arguments);},getAttribute:function(k,l,m){var n=g.getAttr(this.dom,k);return n?m?m(n):n:l;},_getBoolAttribute:function(k,l){var m=g.getBoolAttr(this.dom,k);return m===null?l:m;},_getPxAttribute:function(k,l){return this.getAttribute(k,l,function(m){var n=parseInt(m.replace('px',''),10);if(isNaN(n)){return l;}else return n;});},_getAttributeFromList:function(k,l,m){return this.getAttribute(k,l,function(n){n=n.toLowerCase();return (ES5(m,'indexOf',true,n)>-1)?n:l;});},isValid:function(){for(var k=this.dom;k;k=k.parentNode)if(k==document.body)return true;},clear:function(){g.html(this.dom,'');}},i);e.exports=j;});
__d("sdk.XFBML.IframeWidget",["sdk.Arbiter","sdk.Auth","sdk.Content","copyProperties","sdk.DOM","sdk.Event","sdk.XFBML.Element","guid","insertIframe","QueryString","sdk.Runtime","sdk.ui","UrlMap","sdk.XD"],function(a,b,c,d,e,f){var g=b('sdk.Arbiter'),h=b('sdk.Auth'),i=b('sdk.Content'),j=b('copyProperties'),k=b('sdk.DOM'),l=b('sdk.Event'),m=b('sdk.XFBML.Element'),n=b('guid'),o=b('insertIframe'),p=b('QueryString'),q=b('sdk.Runtime'),r=b('sdk.ui'),s=b('UrlMap'),t=b('sdk.XD'),u=m.extend({_iframeName:null,_showLoader:true,_refreshOnAuthChange:false,_allowReProcess:false,_fetchPreCachedLoader:false,_visibleAfter:'load',_widgetPipeEnabled:false,_borderReset:false,_repositioned:false,getUrlBits:function(){throw new Error('Inheriting class needs to implement getUrlBits().');},setupAndValidate:function(){return true;},oneTimeSetup:function(){},getSize:function(){},getIframeName:function(){return this._iframeName;},getIframeTitle:function(){return 'Facebook Social Plugin';},getChannelUrl:function(){if(!this._channelUrl){var y=this;this._channelUrl=t.handler(function(z){y.fire('xd.'+z.type,z);},'parent.parent',true);}return this._channelUrl;},getIframeNode:function(){return this.dom.getElementsByTagName('iframe')[0];},arbiterInform:function(event,y,z){t.sendToFacebook(this.getIframeName(),{method:event,params:ES5('JSON','stringify',false,y||{}),behavior:z||g.BEHAVIOR_PERSISTENT});},_arbiterInform:function(event,y,z){var aa='parent.frames["'+this.getIframeNode().name+'"]';t.inform(event,y,aa,z);},getDefaultWebDomain:function(){return s.resolve('www');},process:function(y){if(this._done){if(!this._allowReProcess&&!y)return;this.clear();}else this._oneTimeSetup();this._done=true;this._iframeName=this.getIframeName()||this._iframeName||n();if(!this.setupAndValidate()){this.fire('render');return;}if(this._showLoader)this._addLoader();k.addCss(this.dom,'fb_iframe_widget');if(this._visibleAfter!='immediate'){k.addCss(this.dom,'fb_hide_iframes');}else this.subscribe('iframe.onload',ES5(this.fire,'bind',true,this,'render'));var z=this.getSize()||{},aa=this.getFullyQualifiedURL();if(z.width=='100%')k.addCss(this.dom,'fb_iframe_widget_fluid');this.clear();o({url:aa,root:this.dom.appendChild(document.createElement('span')),name:this._iframeName,title:this.getIframeTitle(),className:q.getRtl()?'fb_rtl':'fb_ltr',height:z.height,width:z.width,onload:ES5(this.fire,'bind',true,this,'iframe.onload')});this._resizeFlow(z);this.loaded=false;this.subscribe('iframe.onload',ES5(function(){this.loaded=true;},'bind',true,this));},generateWidgetPipeIframeName:function(){v++;return 'fb_iframe_'+v;},getFullyQualifiedURL:function(){var y=this._getURL();y+='?'+p.encode(this._getQS());if(y.length>2000){y='about:blank';var z=ES5(function(){this._postRequest();this.unsubscribe('iframe.onload',z);},'bind',true,this);this.subscribe('iframe.onload',z);}return y;},_getWidgetPipeShell:function(){return s.resolve('www')+'/common/widget_pipe_shell.php';},_oneTimeSetup:function(){this.subscribe('xd.resize',ES5(this._handleResizeMsg,'bind',true,this));this.subscribe('xd.resize',ES5(this._bubbleResizeEvent,'bind',true,this));this.subscribe('xd.resize.iframe',ES5(this._resizeIframe,'bind',true,this));this.subscribe('xd.resize.flow',ES5(this._resizeFlow,'bind',true,this));this.subscribe('xd.resize.flow',ES5(this._bubbleResizeEvent,'bind',true,this));this.subscribe('xd.refreshLoginStatus',function(){h.getLoginStatus(function(){},true);});this.subscribe('xd.logout',function(){r({method:'auth.logout',display:'hidden'},function(){});});if(this._refreshOnAuthChange)this._setupAuthRefresh();if(this._visibleAfter=='load')this.subscribe('iframe.onload',ES5(this._makeVisible,'bind',true,this));this.subscribe('xd.verify',ES5(function(y){this.arbiterInform('xd/verify',y.token);},'bind',true,this));this.oneTimeSetup();},_makeVisible:function(){this._removeLoader();k.removeCss(this.dom,'fb_hide_iframes');this.fire('render');},_setupAuthRefresh:function(){h.getLoginStatus(ES5(function(y){var z=y.status;l.subscribe('auth.statusChange',ES5(function(aa){if(!this.isValid())return;if(z=='unknown'||aa.status=='unknown')this.process(true);z=aa.status;},'bind',true,this));},'bind',true,this));},_handleResizeMsg:function(y){if(!this.isValid())return;this._resizeIframe(y);this._resizeFlow(y);if(!this._borderReset){this.getIframeNode().style.border='none';this._borderReset=true;}this._makeVisible();},_bubbleResizeEvent:function(y){var z={height:y.height,width:y.width,pluginID:this.getAttribute('plugin-id')};l.fire('xfbml.resize',z);},_resizeIframe:function(y){var z=this.getIframeNode();if(y.reposition==="true")this._repositionIframe(y);y.height&&(z.style.height=y.height+'px');y.width&&(z.style.width=y.width+'px');this._updateIframeZIndex();},_resizeFlow:function(y){var z=this.dom.getElementsByTagName('span')[0];y.height&&(z.style.height=y.height+'px');y.width&&(z.style.width=y.width+'px');this._updateIframeZIndex();},_updateIframeZIndex:function(){var y=this.dom.getElementsByTagName('span')[0],z=this.getIframeNode(),aa=z.style.height===y.style.height&&z.style.width===y.style.width,ba=aa?'removeCss':'addCss';k[ba](z,'fb_iframe_widget_lift');},_repositionIframe:function(y){var z=this.getIframeNode(),aa=parseInt(k.getStyle(z,'width'),10),ba=k.getPosition(z).x,ca=k.getViewportInfo().width,da=parseInt(y.width,10);if(ba+da>ca&&ba>da){z.style.left=aa-da+'px';this.arbiterInform('xd/reposition',{type:'horizontal'});this._repositioned=true;}else if(this._repositioned){z.style.left='0px';this.arbiterInform('xd/reposition',{type:'restore'});this._repositioned=false;}},_addLoader:function(){if(!this._loaderDiv){k.addCss(this.dom,'fb_iframe_widget_loader');this._loaderDiv=document.createElement('div');this._loaderDiv.className='FB_Loader';this.dom.appendChild(this._loaderDiv);}},_removeLoader:function(){if(this._loaderDiv){k.removeCss(this.dom,'fb_iframe_widget_loader');if(this._loaderDiv.parentNode)this._loaderDiv.parentNode.removeChild(this._loaderDiv);this._loaderDiv=null;}},_getQS:function(){return j({api_key:q.getClientID(),locale:q.getLocale(),sdk:'joey',ref:this.getAttribute('ref')},this.getUrlBits().params);},_getURL:function(){var y=this.getDefaultWebDomain(),z='';return y+'/plugins/'+z+this.getUrlBits().name+'.php';},_postRequest:function(){i.submitToTarget({url:this._getURL(),target:this.getIframeNode().name,params:this._getQS()});}}),v=0,w={};function x(){var y={};for(var z in w){var aa=w[z];y[z]={widget:aa.getUrlBits().name,params:aa._getQS()};}return y;}e.exports=u;});
__d("sdk.XFBML.Comments",["sdk.Event","sdk.XFBML.IframeWidget","QueryString","sdk.Runtime","UrlMap","UserAgent","SDKConfig"],function(a,b,c,d,e,f){var g=b('sdk.Event'),h=b('sdk.XFBML.IframeWidget'),i=b('QueryString'),j=b('sdk.Runtime'),k=c('SDKConfig'),l=b('UrlMap'),m=b('UserAgent'),n=h.extend({_visibleAfter:'immediate',_refreshOnAuthChange:true,setupAndValidate:function(){var o={channel_url:this.getChannelUrl(),colorscheme:this.getAttribute('colorscheme'),numposts:this.getAttribute('num-posts',10),width:this._getPxAttribute('width',550),href:this.getAttribute('href'),permalink:this.getAttribute('permalink'),publish_feed:this.getAttribute('publish_feed'),order_by:this.getAttribute('order_by'),mobile:this._getBoolAttribute('mobile')};if(k.initSitevars.enableMobileComments&&m.mobile()&&o.mobile!==false){o.mobile=true;delete o.width;}if(!o.href){o.migrated=this.getAttribute('migrated');o.xid=this.getAttribute('xid');o.title=this.getAttribute('title',document.title);o.url=this.getAttribute('url',document.URL);o.quiet=this.getAttribute('quiet');o.reverse=this.getAttribute('reverse');o.simple=this.getAttribute('simple');o.css=this.getAttribute('css');o.notify=this.getAttribute('notify');if(!o.xid){var p=ES5(document.URL,'indexOf',true,'#');if(p>0){o.xid=encodeURIComponent(document.URL.substring(0,p));}else o.xid=encodeURIComponent(document.URL);}if(o.migrated)o.href=l.resolve('www')+'/plugins/comments_v1.php?'+'app_id='+j.getClientID()+'&xid='+encodeURIComponent(o.xid)+'&url='+encodeURIComponent(o.url);}else{var q=this.getAttribute('fb_comment_id');if(!q){q=i.decode(document.URL.substring(ES5(document.URL,'indexOf',true,'?')+1)).fb_comment_id;if(q&&ES5(q,'indexOf',true,'#')>0)q=q.substring(0,ES5(q,'indexOf',true,'#'));}if(q){o.fb_comment_id=q;this.subscribe('render',ES5(function(){if(!window.location.hash)window.location.hash=this.getIframeNode().id;},'bind',true,this));}}this._attr=o;return true;},oneTimeSetup:function(){this.subscribe('xd.addComment',ES5(this._handleCommentMsg,'bind',true,this));this.subscribe('xd.commentCreated',ES5(this._handleCommentCreatedMsg,'bind',true,this));this.subscribe('xd.commentRemoved',ES5(this._handleCommentRemovedMsg,'bind',true,this));},getSize:function(){if(this._attr.mobile)return {width:'100%',height:160};return {width:this._attr.width,height:160};},getUrlBits:function(){return {name:'comments',params:this._attr};},getDefaultWebDomain:function(){return l.resolve(this._attr.mobile?'m':'www',true);},_handleCommentMsg:function(o){if(!this.isValid())return;g.fire('comments.add',{post:o.post,user:o.user,widget:this});},_handleCommentCreatedMsg:function(o){if(!this.isValid())return;var p={href:o.href,commentID:o.commentID,parentCommentID:o.parentCommentID};g.fire('comment.create',p);},_handleCommentRemovedMsg:function(o){if(!this.isValid())return;var p={href:o.href,commentID:o.commentID};g.fire('comment.remove',p);}});e.exports=n;});
__d("sdk.XFBML.CommentsCount",["sdk.Data","sdk.DOM","sdk.XFBML.Element","sprintf"],function(a,b,c,d,e,f){var g=b('sdk.Data'),h=b('sdk.DOM'),i=b('sdk.XFBML.Element'),j=b('sprintf'),k=i.extend({process:function(){h.addCss(this.dom,'fb_comments_count_zero');var l=this.getAttribute('href',window.location.href);g._selectByIndex(['commentsbox_count'],'link_stat','url',l).wait(ES5(function(m){var n=m[0].commentsbox_count;h.html(this.dom,j('<span class="fb_comments_count">%s</span>',n));if(n>0)h.removeCss(this.dom,'fb_comments_count_zero');this.fire('render');},'bind',true,this));}});e.exports=k;});
__d("sdk.Anim",["sdk.DOM"],function(a,b,c,d,e,f){var g=b('sdk.DOM'),h={ate:function(i,j,k,l){k=!isNaN(parseFloat(k))&&k>=0?k:750;var m=40,n={},o={},p=null,q=setInterval(ES5(function(){if(!p)p=ES5('Date','now',false);var r=1;if(k!=0)r=Math.min((ES5('Date','now',false)-p)/k,1);for(var s in j)if(j.hasOwnProperty(s)){var t=j[s];if(!n[s]){var u=g.getStyle(i,s);if(u===false)return;n[s]=this._parseCSS(u+'');}if(!o[s])o[s]=this._parseCSS(t.toString());var v='';ES5(n[s],'forEach',true,function(w,x){if(isNaN(o[s][x].numPart)&&o[s][x].textPart=='?'){v=w.numPart+w.textPart;}else if(isNaN(w.numPart)){v=w.textPart;}else v+=(w.numPart+Math.ceil((o[s][x].numPart-w.numPart)*Math.sin(Math.PI/2*r)))+o[s][x].textPart+' ';});g.setStyle(i,s,v);}if(r==1){clearInterval(q);if(l)l(i);}},'bind',true,this),m);},_parseCSS:function(i){var j=[];ES5(i.split(' '),'forEach',true,function(k){var l=parseInt(k,10);j.push({numPart:l,textPart:k.replace(l,'')});});return j;}};e.exports=h;});
__d("escapeHTML",[],function(a,b,c,d,e,f){var g=/[&<>"'\/]/g,h={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;','/':'&#x2F;'};function i(j){return j.replace(g,function(k){return h[k];});}e.exports=i;});
__d("sdk.Helper",["sdk.ErrorHandling","sdk.Event","safeEval","UrlMap"],function(a,b,c,d,e,f){var g=b('sdk.ErrorHandling'),h=b('sdk.Event'),i=b('safeEval'),j=b('UrlMap'),k={isUser:function(l){return l<2.2e+09||(l>=1e+14&&l<=100099999989999)||(l>=8.9e+13&&l<=89999999999999);},upperCaseFirstChar:function(l){if(l.length>0){return l.substr(0,1).toUpperCase()+l.substr(1);}else return l;},getProfileLink:function(l,m,n){n=n||(l?j.resolve('www')+'/profile.php?id='+l.uid:null);if(n)m='<a class="fb_link" href="'+n+'">'+m+'</a>';return m;},invokeHandler:function(l,m,n){if(l)if(typeof l==='string'){g.unguard(i)(l,n);}else if(l.apply)g.unguard(l).apply(m,n||[]);},fireEvent:function(l,m){var n=m._attr.href;m.fire(l,n);h.fire(l,n,m);},executeFunctionByName:function(l){var m=Array.prototype.slice.call(arguments,1),n=l.split("."),o=n.pop(),p=window;for(var q=0;q<n.length;q++)p=p[n[q]];return p[o].apply(this,m);}};e.exports=k;});
__d("sdk.XFBML.ConnectBar",["sdk.Anim","sdk.api","sdk.Auth","createArrayFrom","sdk.Data","sdk.DOM","sdk.XFBML.Element","escapeHTML","sdk.Event","format","sdk.Helper","sdk.Insights","sdk.Intl","sdk.Runtime","UrlMap","UserAgent","ConnectBarConfig"],function(a,b,c,d,e,f){var g=b('sdk.Anim'),h=b('sdk.api'),i=b('sdk.Auth'),j=b('createArrayFrom'),k=c('ConnectBarConfig'),l=b('sdk.Data'),m=b('sdk.DOM'),n=b('sdk.XFBML.Element'),o=b('escapeHTML'),p=b('sdk.Event'),q=b('format'),r=b('sdk.Helper'),s=b('sdk.Insights'),t=b('sdk.Intl'),u=b('sdk.Runtime'),v=b('UrlMap'),w=b('UserAgent'),x=n.extend({_initialHeight:null,_initTopMargin:0,_picFieldName:'pic_square',_page:null,_displayed:false,_notDisplayed:false,_container:null,_animationSpeed:0,process:function(){i.getLoginStatus(ES5(function(y){p.monitor('auth.statusChange',ES5(function(){if(this.isValid()&&u.getLoginStatus()=='connected'){this._uid=u.getUserID();h({method:'Connect.shouldShowConnectBar'},ES5(function(z){if(z!=2){this._animationSpeed=(z==0)?750:0;this._showBar();}else this._noRender();},'bind',true,this));}else this._noRender();return false;},'bind',true,this));},'bind',true,this));},_showBar:function(){var y=l._selectByIndex(['first_name','profile_url',this._picFieldName],'user','uid',this._uid),z=l._selectByIndex(['display_name'],'application','api_key',u.getClientID());l.waitOn([y,z],ES5(function(aa){aa[0][0].site_name=aa[1][0].display_name;if(!this._displayed){this._displayed=true;this._notDisplayed=false;this._renderConnectBar(aa[0][0]);this.fire('render');s.impression({lid:104,name:'widget_load'});this.fire('connectbar.ondisplay');p.fire('connectbar.ondisplay',this);r.invokeHandler(this.getAttribute('on-display'),this);}},'bind',true,this));},_noRender:function(){if(this._displayed){this._displayed=false;this._closeConnectBar();}if(!this._notDisplayed){this._notDisplayed=true;this.fire('render');this.fire('connectbar.onnotdisplay');p.fire('connectbar.onnotdisplay',this);r.invokeHandler(this.getAttribute('on-not-display'),this);}},_renderConnectBar:function(y){var z=document.createElement('div'),aa=document.createElement('div');z.className='fb_connect_bar';aa.className='fb_reset fb_connect_bar_container';aa.appendChild(z);document.body.appendChild(aa);this._container=aa;this._initialHeight=Math.round(parseFloat(m.getStyle(aa,'height'))+parseFloat(m.getStyle(aa,'borderBottomWidth')));m.html(z,q('<div class="fb_buttons">'+'<a href="#" class="fb_bar_close">'+'<img src="{1}" alt="{2}" title="{2}"/>'+'</a>'+'</div>'+'<a href="{7}" class="fb_profile" target="_blank">'+'<img src="{3}" alt="{4}" title="{4}"/>'+'</a>'+'{5}'+' <span>'+'<a href="{8}" class="fb_learn_more" target="_blank">{6}</a> &ndash; '+'<a href="#" class="fb_no_thanks">{0}</a>'+'</span>',t.tx._("No Thanks"),v.resolve('fbcdn')+'/'+k.imgs.buttonUrl,t.tx._("Close"),y[this._picFieldName]||v.resolve('fbcdn')+'/'+k.imgs.missingProfileUrl,o(y.first_name),t.tx._("Hi {firstName}. \u003Cstrong>{siteName}\u003C\/strong> is using Facebook to personalize your experience.",{firstName:o(y.first_name),siteName:o(y.site_name)}),t.tx._("Learn More"),y.profile_url,v.resolve('www')+'/sitetour/connect.php'));ES5(j(z.getElementsByTagName('a')),'forEach',true,function(da){da.onclick=ES5(this._clickHandler,'bind',true,this);},this);this._page=document.body;var ba=0;if(this._page.parentNode){ba=Math.round((parseFloat(m.getStyle(this._page.parentNode,'height'))-parseFloat(m.getStyle(this._page,'height')))/2);}else ba=parseInt(m.getStyle(this._page,'marginTop'),10);ba=isNaN(ba)?0:ba;this._initTopMargin=ba;if(!window.XMLHttpRequest){aa.className+=" fb_connect_bar_container_ie6";}else{aa.style.top=(-1*this._initialHeight)+'px';g.ate(aa,{top:'0px'},this._animationSpeed);}var ca={marginTop:this._initTopMargin+this._initialHeight+'px'};if(w.ie()){ca.backgroundPositionY=this._initialHeight+'px';}else ca.backgroundPosition='? '+this._initialHeight+'px';g.ate(this._page,ca,this._animationSpeed);},_clickHandler:function(y){y=y||window.event;var z=y.target||y.srcElement;while(z.nodeName!='A')z=z.parentNode;switch(z.className){case 'fb_bar_close':h({method:'Connect.connectBarMarkAcknowledged'});s.impression({lid:104,name:'widget_user_closed'});this._closeConnectBar();break;case 'fb_learn_more':case 'fb_profile':window.open(z.href);break;case 'fb_no_thanks':this._closeConnectBar();h({method:'Connect.connectBarMarkAcknowledged'});s.impression({lid:104,name:'widget_user_no_thanks'});h({method:'auth.revokeAuthorization',block:true},ES5(function(){this.fire('connectbar.ondeauth');p.fire('connectbar.ondeauth',this);r.invokeHandler(this.getAttribute('on-deauth'),this);if(this._getBoolAttribute('auto-refresh',true))window.location.reload();},'bind',true,this));break;}return false;},_closeConnectBar:function(){this._notDisplayed=true;var y={marginTop:this._initTopMargin+'px'};if(w.ie()){y.backgroundPositionY='0px';}else y.backgroundPosition='? 0px';var z=(this._animationSpeed==0)?0:300;g.ate(this._page,y,z);g.ate(this._container,{top:(-1*this._initialHeight)+'px'},z,function(aa){aa.parentNode.removeChild(aa);});this.fire('connectbar.onclose');p.fire('connectbar.onclose',this);r.invokeHandler(this.getAttribute('on-close'),this);}});e.exports=x;});
__d("sdk.XFBML.EdgeCommentWidget",["sdk.XFBML.IframeWidget","sdk.DOM"],function(a,b,c,d,e,f){var g=b('sdk.XFBML.IframeWidget'),h=b('sdk.DOM'),i=10000,j=g.extend({constructor:function(k){this.parent(k.commentNode);this._iframeWidth=k.width+1;this._iframeHeight=k.height;this._attr={master_frame_name:k.masterFrameName,offsetX:k.relativeWidthOffset-k.paddingLeft};this.dom=k.commentNode;this.dom.style.top=k.relativeHeightOffset+'px';this.dom.style.left=k.relativeWidthOffset+'px';this.dom.style.zIndex=i++;h.addCss(this.dom,'fb_edge_comment_widget');},_visibleAfter:'load',_showLoader:false,getSize:function(){return {width:this._iframeWidth,height:this._iframeHeight};},getUrlBits:function(){return {name:'comment_widget_shell',params:this._attr};}});e.exports=j;});
__d("sdk.XFBML.EdgeWidget",["sdk.XFBML.IframeWidget","sdk.XFBML.EdgeCommentWidget","sdk.DOM","sdk.Helper","sdk.Runtime"],function(a,b,c,d,e,f){var g=b('sdk.XFBML.IframeWidget'),h=b('sdk.XFBML.EdgeCommentWidget'),i=b('sdk.DOM'),j=b('sdk.Helper'),k=b('sdk.Runtime'),l=g.extend({_visibleAfter:'immediate',_showLoader:false,_rootPadding:null,setupAndValidate:function(){i.addCss(this.dom,'fb_edge_widget_with_comment');this._attr={channel_url:this.getChannelUrl(),debug:this._getBoolAttribute('debug'),href:this.getAttribute('href',window.location.href),is_permalink:this._getBoolAttribute('is-permalink'),node_type:this.getAttribute('node-type','link'),width:this._getWidgetWidth(),font:this.getAttribute('font'),layout:this._getLayout(),colorscheme:this.getAttribute('color-scheme','light'),action:this.getAttribute('action'),ref:this.getAttribute('ref'),show_faces:this._shouldShowFaces(),no_resize:this._getBoolAttribute('no_resize'),send:this._getBoolAttribute('send'),url_map:this.getAttribute('url_map'),extended_social_context:this._getBoolAttribute('extended_social_context',false)};this._rootPadding={left:parseFloat(i.getStyle(this.dom,'paddingLeft')),top:parseFloat(i.getStyle(this.dom,'paddingTop'))};return true;},oneTimeSetup:function(){this.subscribe('xd.authPrompted',ES5(this._onAuthPrompt,'bind',true,this));this.subscribe('xd.edgeCreated',ES5(this._onEdgeCreate,'bind',true,this));this.subscribe('xd.edgeRemoved',ES5(this._onEdgeRemove,'bind',true,this));this.subscribe('xd.presentEdgeCommentDialog',ES5(this._handleEdgeCommentDialogPresentation,'bind',true,this));this.subscribe('xd.dismissEdgeCommentDialog',ES5(this._handleEdgeCommentDialogDismissal,'bind',true,this));this.subscribe('xd.hideEdgeCommentDialog',ES5(this._handleEdgeCommentDialogHide,'bind',true,this));this.subscribe('xd.showEdgeCommentDialog',ES5(this._handleEdgeCommentDialogShow,'bind',true,this));},getSize:function(){return {width:this._getWidgetWidth(),height:this._getWidgetHeight()};},_getWidgetHeight:function(){var m=this._getLayout(),n=this._shouldShowFaces()?'show':'hide',o=this._getBoolAttribute('send'),p=65+(o?25:0),q={standard:{show:80,hide:35},box_count:{show:p,hide:p},button_count:{show:21,hide:21},simple:{show:20,hide:20}};return q[m][n];},_getWidgetWidth:function(){var m=this._getLayout(),n=this._getBoolAttribute('send'),o=this._shouldShowFaces()?'show':'hide',p=(this.getAttribute('action')==='recommend'),q=(p?265:225)+(n?60:0),r=(p?130:90)+(n?60:0),s=this.getAttribute('action')==='recommend'?100:55,t=this.getAttribute('action')==='recommend'?90:50,u={standard:{show:450,hide:450},box_count:{show:s,hide:s},button_count:{show:r,hide:r},simple:{show:t,hide:t}},v=u[m][o],w=this._getPxAttribute('width',v),x={standard:{min:q,max:900},box_count:{min:s,max:900},button_count:{min:r,max:900},simple:{min:49,max:900}};if(w<x[m].min){w=x[m].min;}else if(w>x[m].max)w=x[m].max;return w;},_getLayout:function(){return this._getAttributeFromList('layout','standard',['standard','button_count','box_count','simple']);},_shouldShowFaces:function(){return this._getLayout()==='standard'&&this._getBoolAttribute('show-faces',true);},_handleEdgeCommentDialogPresentation:function(m){if(!this.isValid())return;var n=document.createElement('span');this._commentSlave=this._createEdgeCommentWidget(m,n);this.dom.appendChild(n);this._commentSlave.process();this._commentWidgetNode=n;},_createEdgeCommentWidget:function(m,n){var o={commentNode:n,externalUrl:m.externalURL,masterFrameName:m.masterFrameName,layout:this._getLayout(),relativeHeightOffset:this._getHeightOffset(m),relativeWidthOffset:this._getWidthOffset(m),anchorTargetX:parseFloat(m['query[anchorTargetX]'])+this._rootPadding.left,anchorTargetY:parseFloat(m['query[anchorTargetY]'])+this._rootPadding.top,width:parseFloat(m.width),height:parseFloat(m.height),paddingLeft:this._rootPadding.left};return new h(o);},_getHeightOffset:function(m){return parseFloat(m['anchorGeometry[y]'])+parseFloat(m['anchorPosition[y]'])+this._rootPadding.top;},_getWidthOffset:function(m){var n=parseFloat(m['anchorPosition[x]'])+this._rootPadding.left,o=i.getPosition(this.dom).x,p=this.dom.offsetWidth,q=i.getViewportInfo().width,r=parseFloat(m.width),s=false;if(k.getRtl()){s=r<o;}else if((o+r)>q)s=true;if(s)n+=parseFloat(m['anchorGeometry[x]'])-r;return n;},_getCommonEdgeCommentWidgetOpts:function(m,n){return {colorscheme:this._attr.colorscheme,commentNode:n,controllerID:m.controllerID,nodeImageURL:m.nodeImageURL,nodeRef:this._attr.ref,nodeTitle:m.nodeTitle,nodeURL:m.nodeURL,nodeSummary:m.nodeSummary,width:parseFloat(m.width),height:parseFloat(m.height),relativeHeightOffset:this._getHeightOffset(m),relativeWidthOffset:this._getWidthOffset(m),error:m.error,siderender:m.siderender,extended_social_context:m.extended_social_context,anchorTargetX:parseFloat(m['query[anchorTargetX]'])+this._rootPadding.left,anchorTargetY:parseFloat(m['query[anchorTargetY]'])+this._rootPadding.top};},_handleEdgeCommentDialogDismissal:function(m){if(this._commentWidgetNode){this.dom.removeChild(this._commentWidgetNode);delete this._commentWidgetNode;}},_handleEdgeCommentDialogHide:function(){if(this._commentWidgetNode)this._commentWidgetNode.style.display="none";},_handleEdgeCommentDialogShow:function(){if(this._commentWidgetNode)this._commentWidgetNode.style.display="block";},_fireEventAndInvokeHandler:function(m,n){j.fireEvent(m,this);j.invokeHandler(this.getAttribute(n),this,[this._attr.href]);},_onEdgeCreate:function(){this._fireEventAndInvokeHandler('edge.create','on-create');},_onEdgeRemove:function(){this._fireEventAndInvokeHandler('edge.remove','on-remove');},_onAuthPrompt:function(){this._fireEventAndInvokeHandler('auth.prompt','on-prompt');}});e.exports=l;});
__d("sdk.XFBML.LikeBox",["sdk.XFBML.EdgeWidget","sdk.Helper","Log","sdk.Runtime"],function(a,b,c,d,e,f){var g=b('sdk.XFBML.EdgeWidget'),h=b('sdk.Helper'),i=b('Log'),j=b('sdk.Runtime'),k=g.extend({_visibleAfter:'load',setupAndValidate:function(){this._attr={channel:this.getChannelUrl(),api_key:j.getClientID(),connections:this.getAttribute('connections'),css:this.getAttribute('css'),height:this.getAttribute('height'),id:this.getAttribute('profile-id'),header:this._getBoolAttribute('header',true),name:this.getAttribute('name'),show_faces:this._getBoolAttribute('show-faces',true),stream:this._getBoolAttribute('stream',true),width:this._getPxAttribute('width',300),href:this.getAttribute('href'),colorscheme:this.getAttribute('colorscheme','light'),border_color:this.getAttribute('border_color'),show_border:this._getBoolAttribute('show-border',true)};if(this._getBoolAttribute('force_wall',false))this._attr.force_wall=true;if(this._attr.connections==='0'){this._attr.show_faces=false;}else if(this._attr.connections)this._attr.show_faces=true;if(!this._attr.id&&!this._attr.name&&!this._attr.href){i.error('<fb:like-box> requires one of the "id" or "name" attributes.');return false;}var l=this._attr.height;if(!l)if(!this._attr.show_faces&&!this._attr.stream){l=62;}else{l=95;if(this._attr.show_faces)l+=163;if(this._attr.stream)l+=300;if(this._attr.header&&this._attr.header!=='0')l+=32;}this._attr.height=l;this.subscribe('xd.likeboxLiked',ES5(this._onLiked,'bind',true,this));this.subscribe('xd.likeboxUnliked',ES5(this._onUnliked,'bind',true,this));return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){return {name:'likebox',params:this._attr};},_onLiked:function(){h.fireEvent('edge.create',this);},_onUnliked:function(){h.fireEvent('edge.remove',this);}});e.exports=k;});
__d("sdk.XFBML.SendButtonFormWidget",["sdk.XFBML.EdgeCommentWidget","sdk.DOM","sdk.Event"],function(a,b,c,d,e,f){var g=b('sdk.XFBML.EdgeCommentWidget'),h=b('sdk.DOM'),i=b('sdk.Event'),j=g.extend({constructor:function(k){this.parent(k);h.addCss(this.dom,'fb_send_button_form_widget');h.addCss(this.dom,k.colorscheme);h.addCss(this.dom,(typeof k.siderender!='undefined'&&k.siderender)?'siderender':'');this._attr.nodeImageURL=k.nodeImageURL;this._attr.nodeRef=k.nodeRef;this._attr.nodeTitle=k.nodeTitle;this._attr.nodeURL=k.nodeURL;this._attr.nodeSummary=k.nodeSummary;this._attr.offsetX=k.relativeWidthOffset;this._attr.offsetY=k.relativeHeightOffset;this._attr.anchorTargetX=k.anchorTargetX;this._attr.anchorTargetY=k.anchorTargetY;this._attr.channel=this.getChannelUrl();this._attr.controllerID=k.controllerID;this._attr.colorscheme=k.colorscheme;this._attr.error=k.error;this._attr.siderender=k.siderender;this._attr.extended_social_context=k.extended_social_context;},_showLoader:true,getUrlBits:function(){return {name:'send_button_form_shell',params:this._attr};},oneTimeSetup:function(){this.subscribe('xd.messageSent',ES5(this._onMessageSent,'bind',true,this));},_onMessageSent:function(){i.fire('message.send',this._attr.nodeURL,this);}});e.exports=j;});
__d("sdk.XFBML.Like",["sdk.XFBML.EdgeWidget","sdk.XFBML.SendButtonFormWidget"],function(a,b,c,d,e,f){var g=b('sdk.XFBML.EdgeWidget'),h=b('sdk.XFBML.SendButtonFormWidget'),i=g.extend({getUrlBits:function(){return {name:'like',params:this._attr};},_createEdgeCommentWidget:function(j,k){if('send' in this._attr&&'widget_type' in j&&j.widget_type=='send'){var l=this._getCommonEdgeCommentWidgetOpts(j,k);return new h(l);}else return this.parentCall("_createEdgeCommentWidget",j,k);},getIframeTitle:function(){return 'Like this content on Facebook.';}});e.exports=i;});
__d("sdk.XFBML.LiveStream",["sdk.XFBML.IframeWidget"],function(a,b,c,d,e,f){var g=b('sdk.XFBML.IframeWidget'),h=g.extend({_visibleAfter:'load',setupAndValidate:function(){this._attr={app_id:this.getAttribute('event-app-id'),href:this.getAttribute('href',window.location.href),height:this._getPxAttribute('height',500),hideFriendsTab:this.getAttribute('hide-friends-tab'),redesigned:this._getBoolAttribute('redesigned-stream'),width:this._getPxAttribute('width',400),xid:this.getAttribute('xid','default'),always_post_to_friends:this._getBoolAttribute('always-post-to-friends'),via_url:this.getAttribute('via_url')};return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){var i=this._attr.redesigned?'live_stream_box':'livefeed';if(this._getBoolAttribute('modern',false))i='live_stream';return {name:i,params:this._attr};}});e.exports=h;});
__d("sdk.XFBML.LoginButton",["sdk.Helper","IframePlugin"],function(a,b,c,d,e,f){var g=b('sdk.Helper'),h=b('IframePlugin'),i=h.extend({constructor:function(j,k,l,m){this.parent(j,k,l,m);var n=h.getVal(m,'on_login');if(n)this.subscribe('login.status',function(o){g.invokeHandler(n,null,[o]);});},getParams:function(){return {scope:'string',perms:'string',size:'string',login_text:'text',show_faces:'bool',max_rows:'string',show_login_face:'bool',registration_url:'url_maybe',auto_logout_link:'bool',one_click:'bool'};}});e.exports=i;});
__d("sdk.XFBML.Name",["copyProperties","sdk.Data","escapeHTML","sdk.Event","sdk.XFBML.Element","sdk.Helper","Log","sdk.Runtime"],function(a,b,c,d,e,f){var g=b('copyProperties'),h=b('sdk.Data'),i=b('escapeHTML'),j=b('sdk.Event'),k=b('sdk.XFBML.Element'),l=b('sdk.Helper'),m=b('Log'),n=b('sdk.Runtime'),o=k.extend({process:function(){g(this,{_uid:this.getAttribute('uid'),_firstnameonly:this._getBoolAttribute('first-name-only'),_lastnameonly:this._getBoolAttribute('last-name-only'),_possessive:this._getBoolAttribute('possessive'),_reflexive:this._getBoolAttribute('reflexive'),_objective:this._getBoolAttribute('objective'),_linked:this._getBoolAttribute('linked',true),_subjectId:this.getAttribute('subject-id')});if(!this._uid){m.error('"uid" is a required attribute for <fb:name>');this.fire('render');return;}var p=[];if(this._firstnameonly){p.push('first_name');}else if(this._lastnameonly){p.push('last_name');}else p.push('name');if(this._subjectId){p.push('sex');if(this._subjectId==n.getUserID())this._reflexive=true;}var q;j.monitor('auth.statusChange',ES5(function(){if(!this.isValid()){this.fire('render');return true;}if(!this._uid||this._uid=='loggedinuser')this._uid=n.getUserID();if(!this._uid)return;if(l.isUser(this._uid)){q=h._selectByIndex(p,'user','uid',this._uid);}else q=h._selectByIndex(['name','id'],'profile','id',this._uid);q.wait(ES5(function(r){if(this._subjectId==this._uid){this._renderPronoun(r[0]);}else this._renderOther(r[0]);this.fire('render');},'bind',true,this));},'bind',true,this));},_renderPronoun:function(p){var q='',r=this._objective;if(this._subjectId){r=true;if(this._subjectId===this._uid)this._reflexive=true;}if(this._uid==n.getUserID()&&this._getBoolAttribute('use-you',true)){if(this._possessive){if(this._reflexive){q='your own';}else q='your';}else if(this._reflexive){q='yourself';}else q='you';}else switch(p.sex){case 'male':if(this._possessive){q=this._reflexive?'his own':'his';}else if(this._reflexive){q='himself';}else if(r){q='him';}else q='he';break;case 'female':if(this._possessive){q=this._reflexive?'her own':'her';}else if(this._reflexive){q='herself';}else if(r){q='her';}else q='she';break;default:if(this._getBoolAttribute('use-they',true)){if(this._possessive){if(this._reflexive){q='their own';}else q='their';}else if(this._reflexive){q='themselves';}else if(r){q='them';}else q='they';}else if(this._possessive){if(this._reflexive){q='his/her own';}else q='his/her';}else if(this._reflexive){q='himself/herself';}else if(r){q='him/her';}else q='he/she';break;}if(this._getBoolAttribute('capitalize',false))q=l.upperCaseFirstChar(q);this.dom.innerHTML=q;},_renderOther:function(p){var q='',r='';if(this._uid==n.getUserID()&&this._getBoolAttribute('use-you',true)){if(this._reflexive){if(this._possessive){q='your own';}else q='yourself';}else if(this._possessive){q='your';}else q='you';}else if(p){if(null===p.first_name)p.first_name='';if(null===p.last_name)p.last_name='';if(this._firstnameonly&&p.first_name!==undefined){q=i(p.first_name);}else if(this._lastnameonly&&p.last_name!==undefined)q=i(p.last_name);if(!q)q=i(p.name);if(q!==''&&this._possessive)q+='\'s';}if(!q)q=i(this.getAttribute('if-cant-see','Facebook User'));if(q){if(this._getBoolAttribute('capitalize',false))q=l.upperCaseFirstChar(q);if(p&&this._linked){r=l.getProfileLink(p,q,this.getAttribute('href',null));}else r=q;}this.dom.innerHTML=r;}});e.exports=o;});
__d("sdk.XFBML.RecommendationsBar",["sdk.Arbiter","DOMEventListener","sdk.Event","sdk.XFBML.IframeWidget","resolveURI","sdk.Runtime"],function(a,b,c,d,e,f){var g=b('sdk.Arbiter'),h=b('DOMEventListener'),i=b('sdk.Event'),j=b('sdk.XFBML.IframeWidget'),k=b('resolveURI'),l=b('sdk.Runtime'),m=j.extend({getUrlBits:function(){return {name:'recommendations_bar',params:this._attr};},setupAndValidate:function(){function n(w,x){var y=0,z=null;function aa(){x();z=null;y=ES5('Date','now',false);}return function(){if(!z){var ba=ES5('Date','now',false);if(ba-y<w){z=setTimeout(aa,w-(ba-y));}else aa();}return true;};}function o(w){if(w.match(/^\d+(?:\.\d+)?%$/)){var x=Math.min(Math.max(parseInt(w,10),0),100);w=x/100;}else if(w!='manual'&&w!='onvisible')w='onvisible';return w;}function p(w){return Math.max(parseInt(w,10)||30,10);}function q(w){if(w=='left'||w=='right')return w;return l.getRtl()?'left':'right';}this._attr={channel:this.getChannelUrl(),api_key:l.getClientID(),font:this.getAttribute('font'),colorscheme:this.getAttribute('colorscheme'),href:k(this.getAttribute('href')),side:q(this.getAttribute('side')),site:this.getAttribute('site'),action:this.getAttribute('action'),ref:this.getAttribute('ref'),max_age:this.getAttribute('max_age'),trigger:o(this.getAttribute('trigger','')),read_time:p(this.getAttribute('read_time')),num_recommendations:parseInt(this.getAttribute('num_recommendations'),10)||2};this._showLoader=false;this.subscribe('iframe.onload',ES5(function(){var w=this.dom.children[0];w.className='fbpluginrecommendationsbar'+this._attr.side;},'bind',true,this));var r=ES5(function(){h.remove(window,'scroll',r);h.remove(document.documentElement,'click',r);h.remove(document.documentElement,'mousemove',r);setTimeout(ES5(this.arbiterInform,'bind',true,this,'platform/plugins/recommendations_bar/action',null,g.BEHAVIOR_STATE),this._attr.read_time*1000);return true;},'bind',true,this);h.add(window,'scroll',r);h.add(document.documentElement,'click',r);h.add(document.documentElement,'mousemove',r);if(this._attr.trigger=="manual"){var s=ES5(function(w){if(w==this._attr.href){i.unsubscribe('xfbml.recommendationsbar.read',s);this.arbiterInform('platform/plugins/recommendations_bar/trigger',null,g.BEHAVIOR_STATE);}return true;},'bind',true,this);i.subscribe('xfbml.recommendationsbar.read',s);}else{var t=n(500,ES5(function(){if(this.calculateVisibility()){h.remove(window,'scroll',t);h.remove(window,'resize',t);this.arbiterInform('platform/plugins/recommendations_bar/trigger',null,g.BEHAVIOR_STATE);}return true;},'bind',true,this));h.add(window,'scroll',t);h.add(window,'resize',t);t();}this.visible=false;var u=n(500,ES5(function(){if(!this.visible&&this.calculateVisibility()){this.visible=true;this.arbiterInform('platform/plugins/recommendations_bar/visible');}else if(this.visible&&!this.calculateVisibility()){this.visible=false;this.arbiterInform('platform/plugins/recommendations_bar/invisible');}return true;},'bind',true,this));h.add(window,'scroll',u);h.add(window,'resize',u);u();this.focused=true;var v=ES5(function(){this.focused=!this.focused;return true;},'bind',true,this);h.add(window,'blur',v);h.add(window,'focus',v);this.resize_running=false;this.animate=false;this.subscribe('xd.signal_animation',ES5(function(){this.animate=true;},'bind',true,this));return true;},getSize:function(){return {height:25,width:(this._attr.action=='recommend'?140:96)};},calculateVisibility:function(){var n=document.documentElement.clientHeight;if(!this.focused&&window.console&&window.console.firebug)return this.visible;switch(this._attr.trigger){case "manual":return false;case "onvisible":var o=this.dom.getBoundingClientRect().top;return o<=n;default:var p=window.pageYOffset||document.body.scrollTop,q=document.documentElement.scrollHeight;return (p+n)/q>=this._attr.trigger;}}});e.exports=m;});
__d("sdk.XFBML.Registration",["sdk.Auth","sdk.Helper","sdk.XFBML.IframeWidget","sdk.Runtime","UrlMap"],function(a,b,c,d,e,f){var g=b('sdk.Auth'),h=b('sdk.Helper'),i=b('sdk.XFBML.IframeWidget'),j=b('sdk.Runtime'),k=b('UrlMap'),l=i.extend({_visibleAfter:'immediate',_baseHeight:167,_fieldHeight:28,_skinnyWidth:520,_skinnyBaseHeight:173,_skinnyFieldHeight:52,setupAndValidate:function(){this._attr={action:this.getAttribute('action'),border_color:this.getAttribute('border-color'),channel_url:this.getChannelUrl(),client_id:j.getClientID(),fb_only:this._getBoolAttribute('fb-only',false),fb_register:this._getBoolAttribute('fb-register',false),fields:this.getAttribute('fields'),height:this._getPxAttribute('height'),redirect_uri:this.getAttribute('redirect-uri',window.location.href),no_footer:this._getBoolAttribute('no-footer'),no_header:this._getBoolAttribute('no-header'),onvalidate:this.getAttribute('onvalidate'),width:this._getPxAttribute('width',600),target:this.getAttribute('target')};if(this._attr.onvalidate)this.subscribe('xd.validate',ES5(function(m){var n=ES5('JSON','parse',false,m.value),o=ES5(function(q){this.arbiterInform('Registration.Validation',{errors:q,id:m.id});},'bind',true,this),p=h.executeFunctionByName(this._attr.onvalidate,n,o);if(p)o(p);},'bind',true,this));this.subscribe('xd.authLogin',ES5(this._onAuthLogin,'bind',true,this));this.subscribe('xd.authLogout',ES5(this._onAuthLogout,'bind',true,this));return true;},getSize:function(){return {width:this._attr.width,height:this._getHeight()};},_getHeight:function(){if(this._attr.height)return this._attr.height;var m;if(!this._attr.fields){m=['name'];}else try{m=ES5('JSON','parse',false,this._attr.fields);}catch(n){m=this._attr.fields.split(/,/);}if(this._attr.width<this._skinnyWidth){return this._skinnyBaseHeight+m.length*this._skinnyFieldHeight;}else return this._baseHeight+m.length*this._fieldHeight;},getUrlBits:function(){return {name:'registration',params:this._attr};},getDefaultWebDomain:function(){return k.resolve('www',true);},_onAuthLogin:function(){if(!g.getAuthResponse())g.getLoginStatus();h.fireEvent('auth.login',this);},_onAuthLogout:function(){if(!g.getAuthResponse())g.getLoginStatus();h.fireEvent('auth.logout',this);}});e.exports=l;});
__d("sdk.XFBML.Send",["sdk.DOM","sdk.XFBML.EdgeWidget","sdk.Runtime","sdk.XFBML.SendButtonFormWidget"],function(a,b,c,d,e,f){var g=b('sdk.DOM'),h=b('sdk.XFBML.EdgeWidget'),i=b('sdk.Runtime'),j=b('sdk.XFBML.SendButtonFormWidget'),k=h.extend({setupAndValidate:function(){g.addCss(this.dom,'fb_edge_widget_with_comment');this._attr={channel:this.getChannelUrl(),api_key:i.getClientID(),font:this.getAttribute('font'),colorscheme:this.getAttribute('colorscheme','light'),href:this.getAttribute('href',window.location.href),ref:this.getAttribute('ref'),extended_social_context:this.getAttribute('extended_social_context',false)};this._rootPadding={left:parseFloat(g.getStyle(this.dom,'paddingLeft')),top:parseFloat(g.getStyle(this.dom,'paddingTop'))};return true;},getUrlBits:function(){return {name:'send',params:this._attr};},_createEdgeCommentWidget:function(l,m){var n=this._getCommonEdgeCommentWidgetOpts(l,m);return new j(n);},getSize:function(){return {width:80,height:25};}});e.exports=k;});
__d("sdk.XFBML.SocialContext",["sdk.Event","sdk.XFBML.IframeWidget"],function(a,b,c,d,e,f){var g=b('sdk.Event'),h=b('sdk.XFBML.IframeWidget'),i=h.extend({setupAndValidate:function(){var j=this.getAttribute('size','small');this._attr={channel:this.getChannelUrl(),width:this._getPxAttribute('width',400),height:this._getPxAttribute('height',100),ref:this.getAttribute('ref'),size:this.getAttribute('size'),keywords:this.getAttribute('keywords'),urls:this.getAttribute('urls'),object_id:this.getAttribute('object_id')};this.subscribe('xd.social_context_stats',ES5(this._bubbleSocialContextStats,'bind',true,this));return true;},_bubbleSocialContextStats:function(j){var k={pluginID:this.getAttribute('plugin-id'),socialContextPageIDs:ES5('JSON','parse',false,j.social_context_page_ids)};g.fire('xfbml.social_context_stats',k);},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){return {name:'social_context',params:this._attr};}});e.exports=i;});
__d("sdk.XFBML.ProfilePic",["sdk.Data","sdk.DOM","escapeHTML","sdk.XFBML.Element","sdk.Event","format","sdk.Helper","sdk.Runtime","UrlMap","ProfilePicConfig"],function(a,b,c,d,e,f){var g=b('sdk.Data'),h=b('sdk.DOM'),i=b('escapeHTML'),j=c('ProfilePicConfig'),k=b('sdk.XFBML.Element'),l=b('sdk.Event'),m=b('format'),n=b('sdk.Helper'),o=b('sdk.Runtime'),p=b('UrlMap'),q={n:'pic_big',normal:'pic_big',q:'pic_square',s:'pic',small:'pic',square:'pic_square',t:'pic_small',thumb:'pic_small'},r=k.extend({process:function(){var s=this.getAttribute('size','thumb'),t=q[s],u=this._getPxAttribute('width'),v=this._getPxAttribute('height'),w=this.dom.style,x=this.getAttribute('uid');if(this._getBoolAttribute('facebook-logo'))t+='_with_logo';if(u){u=u+'px';w.width=u;}if(v){v=v+'px';w.height=v;}var y=ES5(function(z){var aa=z?z[0]:null,ba=aa?aa[t]:null;if(!ba)ba=p.resolve('fbcdn')+'/'+j.defPicMap[t];var ca=((u?'width:'+u+';':'')+(v?'height:'+u+';':'')),da=m('<img src="{0}" alt="{1}" title="{1}" style="{2}" class="{3}" />',ba,aa?i(aa.name):'',ca,this.dom.className);if(this._getBoolAttribute('linked',true))da=n.getProfileLink(aa,da,this.getAttribute('href',null));this.dom.innerHTML=da;h.addCss(this.dom,'fb_profile_pic_rendered');this.fire('render');},'bind',true,this);l.monitor('auth.statusChange',ES5(function(){if(!this.isValid()){this.fire('render');return true;}if(this.getAttribute('uid',null)=='loggedinuser')x=o.getUserID();if(o.getLoginStatus()!=='unknown'&&x){g._selectByIndex(['name',t],n.isUser(x)?'user':'profile',n.isUser(x)?'uid':'id',x).wait(y);}else y();},'bind',true,this));}});e.exports=r;});
__d("legacy:fb.xfbml",["Assert","sdk.domReady","sdk.Event","sdk.feature","FB","IframePlugin","PluginTags","wrapFunction","XFBML","sdk.XFBML.Comments","sdk.XFBML.CommentsCount","sdk.XFBML.ConnectBar","sdk.XFBML.LikeBox","sdk.XFBML.Like","sdk.XFBML.LiveStream","sdk.XFBML.LoginButton","sdk.XFBML.Name","sdk.XFBML.RecommendationsBar","sdk.XFBML.Registration","sdk.XFBML.Send","sdk.XFBML.SocialContext","sdk.XFBML.ProfilePic"],function(a,b,c,d){var e=b('Assert'),f=b('sdk.domReady'),g=b('sdk.Event'),h=b('sdk.feature'),i=b('FB'),j=b('IframePlugin'),k=b('PluginTags'),l=b('wrapFunction'),m=b('XFBML'),n={comments:b('sdk.XFBML.Comments'),comments_count:b('sdk.XFBML.CommentsCount'),connect_bar:b('sdk.XFBML.ConnectBar'),fan:b('sdk.XFBML.LikeBox'),like:b('sdk.XFBML.Like'),like_box:b('sdk.XFBML.LikeBox'),live_stream:b('sdk.XFBML.LiveStream'),login_button:b('sdk.XFBML.LoginButton'),name:b('sdk.XFBML.Name'),recommendations_bar:b('sdk.XFBML.RecommendationsBar'),registration:b('sdk.XFBML.Registration'),send:b('sdk.XFBML.Send'),social_context:b('sdk.XFBML.SocialContext')};if(h('xfbml_profile_pic_server',false)){k.profile_pic={uid:'string',linked:'bool',href:'string',size:'string',facebook_logo:'bool'};}else n.profile_pic=b('sdk.XFBML.ProfilePic');ES5(ES5('Object','keys',false,k),'forEach',true,function(p){m.registerTag({xmlns:'fb',localName:p.replace(/_/g,'-'),ctor:j.withParams(k[p])});});ES5(ES5('Object','keys',false,n),'forEach',true,function(p){m.registerTag({xmlns:'fb',localName:p.replace(/_/g,'-'),ctor:n[p]});});i.provide('XFBML',{parse:function(p){e.maybeXfbml(p,'Invalid argument');if(p&&p.nodeType===9)p=p.body;return m.parse.apply(null,arguments);}});i.provide('XFBML.RecommendationsBar',{markRead:function(p){g.fire('xfbml.recommendationsbar.read',p||window.location.href);}});m.subscribe('parse',ES5(g.fire,'bind',true,g,'xfbml.parse'));m.subscribe('render',ES5(g.fire,'bind',true,g,'xfbml.render'));g.subscribe('init:post',function(p){if(p.xfbml)setTimeout(l(ES5(f,'bind',true,null,m.parse),'entry','init:post:xfbml.parse'),0);});e.define('Xfbml',function(p){return (p.nodeType===1||p.nodeType===9)&&typeof p.nodeName==='string';});try{if(document.namespaces&&!document.namespaces.item.fb)document.namespaces.add('fb');}catch(o){}},3);
void(0);
}).call({}, window.inDapIF ? parent.window : window);
} catch (e) {new Image().src="http:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m='+encodeURIComponent('{"error":"LOAD", "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","message":"'+e.message+'"}}');};
angular.module('gint.security').run(['$templateCache', function ($templateCache) {
	$templateCache.put('/views/gi-login.html', '<div class="hero-unit"> <div class="alert alert-danger" ng-if="loginStatus.failed"> <button type="button" class="close dismissLogin" ng-click="dismissLoginAlert()">&times;</button> <strong>Login Failed!</strong>: Username / Password was incorrect </div> <h3>Please Login</h3> <div class="well form-inline"> <input type="text" ng-model="cred.username" class="input" placeholder="Email"> <input type="password" ng-model="cred.password" class="input-small" placeholder="Password"> <button ng-disabled="!cred.username || !cred.password" class="btn btn-primary basicLogin" ng-click="login()">Login</button> </div> <div class="well form loginWithFacebook" ng-if="allowFacebookLogin"> <button ng-click="loginWithFacebook()"><img src="/img/login-with-facebook.png" width="154" height="22"></button> </div> </div>');
	$templateCache.put('/views/gi-logout.html', '<div class="hero-unit"> <h3>You have been securely logged out</h3> <a href="/login" class="btn btn-primary">Log Back In</a> </div>');
	$templateCache.put('/views/gi-permissionForm.html', '<div class="well form"> <div class="form-group" <label>User:</label> <gi-select2 options="users" selection="selectedUser" field="firstName" style="width:100%"/> </div> <div class="form-group"> <label>Resource Type:</label> <gi-select2 options="resourceTypes" selection="selectedResourceType" field="name" style="width:100%"/> </div> <div class="form-group"> <label>Restriction:</label> <select class="form-control" ng-model="permission.restriction" ng-options="r.value as r.name for r in restrictions"></select> </div> <div class="form-group"> <label>{{permission.resourceType.name}}</label> <label>Keys:</label> <gi-select2 tags custom options="keys" selection="selectedKeys" field="name" style="width:100%"/> </div> <button class="btn btn-primary" ng-click="save()"> {{submitText}} </button> <button ng-show="showDelete" class="btn btn-danger" ng-click="confirmDelete()"> <span class="glyphicon glyphicon-trash white"></span> </button> </div> <gi-modal visible="showDeleteModal" title="Please Confirm Delete Action"> <div class="body"> <p>Delete this permission - are you sure?</p> <p>Please continue only if you are 100% you understand what you\'re deleting. There is no way to retrieve the data after this point.</p> </div> <div class="footer"> <button ng-click="deletePermission()" class="btn btn-danger"> Delete It! </button> </div> </gi-modal>');
	$templateCache.put('/views/gi-permissions.html', '<div class="container"> <div class="row"> <div class="col-md-6"> <gi-datatable items="permissions" selected-items="selectedPermissions" options="options"> <div class="header"> <label>User</label> <label>Resource</label> <label>Restriction</label> </div> <div class="body"> <label class="filter">permissionUser</label> <label class="property">resourceType</label> <label class="filter">permissionRestriction</label> </div> </gi-datatable> </div> <div class="col-md-6"> <permission-form permission="permission" submit-text="{{submitText}}" submit="savePermission(permission)"></permission-form> </div> </div> </div>');
	$templateCache.put('/views/gi-role.html', '<div class="container"> <div class="row"> <div class="col-md-2"> <ul class="nav nav-pills nav-stacked"> <li ng-class="{active: currentView==\'list\' }"> <a ng-click="show(\'list\')">All Roles</a> </li> <li ng-class="{active: currentView==\'form\' }"> <a ng-click="show(\'form\')">New Role</a> </li> </ul> </div> <div class="col-md-10"> <div> <div ng-show="selectedRole"> <div class="col-md-6"> <h4>Roles</h4> <ul class="nav nav-pills nav-stacked" ng-repeat="role in roles"> <li ng-class="{active: role.name==selectedRole.name}"> <a ng-click="selectRole(role)">{{role.name}}</a> </li> </ul> <div> <h4>Role Members</h4> <div ng-repeat="user in roleUsers">{{user.firstName}}</div> </div> </div> <div ng-show="currentView==\'list\'" class="col-md-6"> <h4>Role Details</h4> <role-form role="selectedRole" title="Role Details" submit-text="Update Role" submit="saveRole(role)" destroy="deleteRole(role)"></role-form> </div> <div ng-show="currentView==\'form\'" class="col-md-6"> <role-form role="newRole" title="Role Details" submit-text="Create Role" submit="saveRole(role)"></role-form> </div> </div> <div ng-hide="selectedRole"> <div class="col-md-6"> <h4>Roles</h4> No Roles found for this organisation. You can create one by entering the details on this page. </div> <div class="col-md-6"> <role-form title="New Role" role="newRole" submit-text="Create Role" submit="saveRole(role)"></role-form> </div> </div> </div> </div> </div> </div>');
	$templateCache.put('/views/gi-roleForm.html', '<div class="well form" role="form"> <input type="hidden" id="hiddenSiteId" ng-model="role._id"/> <div class="form-group"> <label>Name:</label> <input type="text" class="form-control" name="name" ng-model="role.name"/> </div> <button class="btn btn-primary" ng-click="submit({role: role})"> {{submitText}} </button> <button ng-show="showDelete" class="btn btn-danger" ng-click="confirmDelete()"> <span class="glyphicon glyphicon-trash white"></span> </button> </div> <gi-modal visible="showDeleteModal" title="Please Confirm Delete Action"> <div class="body"> <p>Delete a role - are you sure?</p> <p>Please continue only if you are 100% you understand what you\'re deleting. There is no way to retrieve the data after this point.</p> </div> <div class="footer"> <button ng-click="deleteRole()" class="btn btn-danger"> Delete It! </button> </div> </gi-modal>');
	$templateCache.put('/views/gi-user.html', '<div class="form" role="form"> <div class="form-group"> <label name="userName">Name: {{user.firstName}} {{ user.lastName }}</label> </div> <div class="form-group"> <label name="userId">Id: {{user._id}}</label> </div> <div class="form-group"> <label name="apiSecret">API Secret: {{user.apiSecret}}</label> </div> <div class="form-group"> <button class="btn btn-primary" ng-click="resetApi()">Create API Secret</button> </div> </div>');
	$templateCache.put('/views/gi-userForm.html', '<div class="well form"> <h4>Profile</h4> <div class="form-group"> <label>First Name:</label> <input type="text" name="name" class="form-control" ng-model="user.firstName" ng-change="checkForChanges()"/> </div> <div class="form-group"> <label>Surname:</label> <input type="text" name="lastName" class="form-control" ng-model="user.lastName" ng-change="checkForChanges()"/> </div> <div class="form-group"> <label>Email:</label> <input type="text" name="email" class="form-control" ng-model="user.email" ng-change="checkForChanges()"/> </div> <div class="form-group"> <label>Password:</label> <input type="password" name="password" class="form-control" ng-model="user.password" ng-change="checkForChanges()"/> </div> <h4>Roles</h4> <div class="form-group"> <h4>Assigned Roles</h4> <div class="col-md-12" ng-repeat="role in userRoles"> <label>{{role.name}}</label> <button class="btn btn-danger" ng-click="removeFromRole(role)"> <span class="glyphicon glyphicon-trash white"></span> </button> </div> <div ng-if="notUserRoles.length> 0"> <h4>Available Roles</h4> <select class="form-control" ng-model="selectedRole" ng-options="role.name for role in notUserRoles"> </select> <button ng-click="addToRole(selectedRole)" class="btn btn-primary">Assign</button> </div> </div> <div class="form-group"> <button ng-disabled="!unsavedChanges" class="btn btn-primary" ng-click="save()"> {{submitText}} </button> <button ng-show="showDelete" class="btn btn-danger" ng-click="confirmDelete()"> <span class="glyphicon glyphicon-trash white"></span> </button> </div> </div> <gi-modal visible="showDeleteModal" title="Please Confirm Delete Action"> <div class="body"> <p>Delete a user - are you sure?</p> <p>Please continue only if you are 100% you understand what you\'re deleting. There is no way to retrieve the data after this point.</p> </div> <div class="footer"> <button ng-click="deleteUser()" \ class="btn btn-danger"> Delete It! </button> </div> </gi-modal>');
	$templateCache.put('/views/gi-userManagement.html', '<div class="container"> <div class="row"> <div class="col-md-2"> <ul class="nav nav-pills nav-stacked"> <li ng-class="{active: currentView==\'list\' }"> <a ng-click="show(\'list\')">All Users</a> </li> <li ng-class="{active: currentView==\'form\' }"> <a ng-click="show(\'form\')">New User</a> </li> </ul> </div> <div class="col-md-10"> <div> <div ng-show="selectedUser"> <div class="col-md-4"> <h4>Users</h4> <ul class="nav nav-pills nav-stacked" ng-repeat="user in users"> <li ng-class="{active: user._id==selectedUser._id}"> <a ng-click="selectUser(user)">{{user.firstName}}</a> </li> </ul> </div> <div ng-show="currentView==\'list\'" class="col-md-8"> <user-form user="selectedUser" title="User Details" submit-text="Save Changes" submit="saveUser(user)" destroy="deleteUser(user)"></user-form> </div> <div ng-show="currentView==\'form\'" class="col-md-8"> <user-form title="New User" user="newUser" submit-text="Create User" submit="saveUser(user)"></user-form> </div> </div> <div ng-hide="selectedUser"> <div class="col-md-4"> <h4>Users</h4> No Users found for this organisation. You can create one by entering the details on this page. </div> <div class="col-md-4"> <h4>Create New User</h4> <user-form title="New User" user="newUser" submit-text="Create User" submit="saveUser(user)"></user-form> </div> </div> </div> </div> </div> </div>');
}]);
angular.module('gint.security').config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    return $routeProvider.when('/login', {
      controller: 'loginController',
      templateUrl: '/views/gi-login.html'
    }).when('/user', {
      controller: 'userController',
      templateUrl: '/views/gi-user.html'
    }).when('/logout', {
      controller: 'logoutController',
      templateUrl: '/views/gi-logout.html'
    }).when('/roles', {
      controller: 'roleController',
      templateUrl: '/views/gi-role.html'
    }).when('/users', {
      controller: 'usersController',
      templateUrl: '/views/gi-userManagement.html'
    }).when('/permissions', {
      controller: 'permissionController',
      templateUrl: '/views/gi-permissions.html'
    });
  }
]);

angular.module('gint.security').factory('User', [
  '$resource', '$http', '$q', 'Auth', function($resource, $http, $q, Auth) {
    var all, destroy, factory, get, getByIdSync, items, itemsById, login, methods, register, resource, save, updateMasterList;
    methods = {
      query: {
        method: 'GET',
        params: {},
        isArray: true
      },
      save: {
        method: 'PUT',
        params: {},
        isArray: false
      },
      create: {
        method: 'POST',
        params: {},
        isArray: false
      }
    };
    resource = $resource('/api/users/:id', {}, methods);
    items = [];
    itemsById = {};
    updateMasterList = function(newItem) {
      var replaced;
      replaced = false;
      angular.forEach(items, function(item, index) {
        if (!replaced) {
          if (newItem._id === item._id) {
            replaced = true;
            return items[index] = newItem;
          }
        }
      });
      if (!replaced) {
        items.push(newItem);
      }
      itemsById[newItem._id] = newItem;
    };
    all = function(callback) {
      if (items.length === 0) {
        return resource.query(function(results) {
          items = results;
          angular.forEach(results, function(item, index) {
            itemsById[item._id] = item;
          });
          if (callback) {
            return callback(items);
          }
        });
      } else {
        if (callback) {
          return callback(items);
        }
      }
    };
    save = function(item, success) {
      if (item._id) {
        return resource.save({
          id: item._id
        }, item, function(result) {
          updateMasterList(result);
          if (success) {
            return success();
          }
        });
      } else {
        return resource.create({}, item, function(result) {
          updateMasterList(result);
          if (success) {
            return success();
          }
        });
      }
    };
    getByIdSync = function(id) {
      return itemsById[id];
    };
    get = function(params, callback) {
      return resource.get(params, function(item) {
        updateMasterList(item);
        if (callback) {
          return callback(item);
        }
      });
    };
    destroy = function(id, callback) {
      return resource["delete"]({
        id: id
      }, function() {
        var removed;
        removed = false;
        delete itemsById[id];
        angular.forEach(items, function(item, index) {
          if (!removed) {
            if (item._id === id) {
              removed = true;
              return items.splice(index, 1);
            }
          }
        });
        if (callback) {
          return callback();
        }
      });
    };
    register = function(item) {
      return $http.post('/api/user/register', item);
    };
    login = function(cred) {
      var deferred;
      deferred = $q.defer();
      $http.post('/api/login', cred).success(function() {
        Auth.loginConfirmed();
        return deferred.resolve();
      }).error(function() {
        Auth.loginChanged();
        return deferred.reject();
      });
      return deferred.promise;
    };
    factory = function() {
      return {
        firstName: '',
        lastName: '',
        roles: []
      };
    };
    return {
      query: all,
      all: all,
      get: get,
      getSync: getByIdSync,
      create: factory,
      destroy: destroy,
      save: save,
      register: register,
      login: login
    };
  }
]);

angular.module('gint.security').filter('userName', [
  'User', function(User) {
    return function(id) {
      var result, user;
      result = 'Missing User Id';
      if (id) {
        user = User.getSync(id);
        if (user) {
          result = user.firstName;
        } else {
          result = id;
        }
      }
      return result;
    };
  }
]);

angular.module('gint.security').filter('permissionUser', [
  '$filter', function($filter) {
    return function(permission) {
      var result;
      result = 'Unknown';
      if (permission && permission.userId) {
        result = $filter('userName')(permission.userId);
      }
      return result;
    };
  }
]);

angular.module('gint.security').filter('permissionRestriction', [
  'Permission', function(Permission) {
    return function(permission) {
      var result;
      result = "N/A";
      if (permission && permission.restriction) {
        angular.forEach(Permission.restrictions, function(res) {
          if (res.value === permission.restriction) {
            return result = res.name;
          }
        });
      }
      return result;
    };
  }
]);

angular.module('gint.security').factory('Facebook', [
  '$rootScope', '$http', '$q', function($rootScope, $http, $q) {
    var attemptServerLogin, init, login, loginStatus, _appId, _facebookResponse;
    _appId = null;
    init = function(appId) {
      if (_appId == null) {
        FB.init({
          appId: appId,
          status: false
        });
        return _appId = appId;
      }
    };
    loginStatus = function() {
      var deferred;
      deferred = $q.defer();
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          return deferred.resolve(true);
        } else {
          return deferred.resolve(false);
        }
      });
      return deferred.promise;
    };
    attemptServerLogin = function(response) {
      var deferred;
      deferred = $q.defer();
      $http.post('/api/loginviafacebook', response).success(function() {
        return deferred.resolve(true);
      }).error(function() {
        return deferred.resolve(false);
      });
      return deferred.promise;
    };
    _facebookResponse = null;
    login = function() {
      var deferred;
      deferred = $q.defer();
      if (_facebookResponse == null) {
        FB.login(function(response) {
          _facebookResponse = response;
          if (_facebookResponse.status === 'connected') {
            return $rootScope.$apply(function() {
              return attemptServerLogin(_facebookResponse).then(function(loggedInNow) {
                return deferred.resolve(loggedInNow);
              });
            });
          } else {
            return deferred.resolve(false);
          }
        });
      } else {
        attemptServerLogin(_facebookResponse).then(function(loggedInNow) {
          return deferred.resolve(loggedInNow);
        });
      }
      return deferred.promise;
    };
    return {
      init: init,
      loginStatus: loginStatus,
      login: login
    };
  }
]);

angular.module('gint.security').factory('Setting', [
  'giCrud', function(Crud) {
    var create, crudService;
    crudService = Crud.factory('settings', true);
    create = function() {
      return {
        key: '',
        value: ''
      };
    };
    return {
      save: crudService.save,
      get: crudService.get,
      destroy: crudService.destroy,
      getCached: crudService.getCached,
      query: crudService.all,
      all: crudService.all,
      create: create
    };
  }
]);

angular.module('gint.security').controller('loginController', [
  '$scope', '$http', '$filter', 'Auth', 'Facebook', 'Setting', function($scope, $http, $filter, Auth, Facebook, Setting) {
    $scope.loginStatus = {
      failed: false
    };
    $scope.login = function() {
      return $http.post('/api/login', $scope.cred).success(function() {
        return Auth.loginConfirmed();
      }).error(function() {
        return $scope.loginStatus.failed = true;
      });
    };
    $scope.loginWithFacebook = function() {
      return Facebook.login().then(function(loggedIn) {
        if (loggedIn) {
          return Auth.loginConfirmed();
        }
      });
    };
    $scope.dismissLoginAlert = function() {
      return $scope.loginStatus.failed = false;
    };
    return Setting.all().then(function(settings) {
      var allowFacebookLogin, appId;
      allowFacebookLogin = $filter('filter')(settings, function(setting) {
        return setting.key === 'loginWithFacebook';
      });
      if ((allowFacebookLogin != null ? allowFacebookLogin.length : void 0) > 0) {
        $scope.allowFacebookLogin = allowFacebookLogin[0].value;
      } else {
        $scope.allowFacebookLogin = false;
      }
      if ($scope.allowFacebookLogin) {
        appId = $filter('filter')(settings, function(setting) {
          return setting.key === 'facebookAppId';
        });
        if ((appId != null ? appId.length : void 0) > 0) {
          return Facebook.init(appId[0].value);
        } else {
          return console.log('error initializing facebook login');
        }
      }
    });
  }
]);

angular.module('gint.security').controller('logoutController', [
  'Auth', function(Auth) {
    return Auth.logout();
  }
]);

angular.module('gint.security').controller('userController', [
  '$scope', 'UserAccount', function($scope, UserAccount) {
    $scope.deleteUser = function(id) {
      return UserAccount["delete"]();
    };
    $scope.resetApi = function() {
      return UserAccount.resetAPISecret().then(function() {
        return $scope.user = UserAccount.get();
      });
    };
    return $scope.user = UserAccount.get();
  }
]);

angular.module('gint.security').factory('UserAccount', [
  '$resource', '$rootScope', '$http', '$q', function($resource, $rootScope, $http, $q) {
    var getMe, methods, resetAPISecret, resource;
    methods = {
      query: {
        method: 'GET',
        params: {},
        isArray: true
      },
      resetApi: {
        method: 'PUT',
        params: {
          resetApi: true
        }
      }
    };
    resource = $resource('/api/user', {}, methods);
    getMe = function() {
      var deferred;
      deferred = $q.defer();
      if (($rootScope.me != null) && ($rootScope.me._id != null)) {
        deferred.resolve($rootScope.me);
      } else {
        $http.get('/api/user').success(function(user) {
          return deferred.resolve(user);
        });
      }
      return deferred.promise;
    };
    resetAPISecret = function() {
      return getMe().then(function(me) {
        return $http.post('/api/user/apiSecret', {
          _id: me._id
        });
      });
    };
    return {
      get: resource.get,
      getMe: getMe,
      resetAPISecret: resetAPISecret
    };
  }
]);

angular.module('gint.security').factory('Permission', [
  '$resource', 'giCrud', function($resource, Crud) {
    var exports, restrictions;
    restrictions = [
      {
        name: 'Deny',
        value: 1
      }, {
        name: 'Create',
        value: 2
      }, {
        name: 'Read',
        value: 4
      }, {
        name: 'Update',
        value: 8
      }, {
        name: 'Destroy',
        value: 16
      }
    ];
    exports = Crud.factory('permissions', true);
    exports.restrictions = restrictions;
    return exports;
  }
]);

angular.module('gint.security').controller('usersController', [
  '$scope', '$location', 'User', 'Auth', function($scope, $location, User, Auth) {
    $scope.newUser = User.create();
    $scope.currentView = 'list';
    $scope.getData = function() {
      return User.query(function(results) {
        $scope.users = results;
        return $scope.selectedUser = $scope.users[0];
      });
    };
    $scope.deleteUser = function(id) {
      return User["delete"]({
        id: id
      }, function() {
        return $scope.getData();
      });
    };
    $scope.saveUser = function(user) {
      return User.save(user, function() {
        return $scope.getData();
      });
    };
    $scope.getUsers = function() {
      return $scope.users = User.query();
    };
    $scope.deleteUser = function(id) {
      return User["delete"]({
        id: id
      }, function() {
        return $scope.getUsers();
      });
    };
    $scope.selectUser = function(user) {
      return $scope.selectedUser = user;
    };
    $scope.show = function(view) {
      return $scope.currentView = view;
    };
    return Auth.isAdmin().then(function(isAdmin) {
      if (isAdmin) {
        return $scope.getData();
      } else {
        return $location.path('/login');
      }
    });
  }
]);

angular.module('gint.security').factory('Role', [
  '$resource', '$filter', '$q', function($resource, $filter, $q) {
    var all, destroy, factory, get, isInRole, methods, resource, roles, save, updateMasterList;
    methods = {
      query: {
        method: 'GET',
        params: {},
        isArray: true
      },
      save: {
        method: 'PUT',
        params: {},
        isArray: false
      },
      create: {
        method: 'POST',
        params: {},
        isArray: false
      }
    };
    resource = $resource('/api/roles/:id', {}, methods);
    roles = [];
    updateMasterList = function(role) {
      var replaced;
      replaced = false;
      angular.forEach(roles, function(item, index) {
        if (!replaced) {
          if (item._id === role._id) {
            replaced = true;
            return roles[index] = role;
          }
        }
      });
      if (!replaced) {
        return roles.push(role);
      }
    };
    all = function(callback) {
      if (roles.length === 0) {
        return resource.query(function(results) {
          roles = results;
          if (callback) {
            return callback(roles);
          }
        });
      } else {
        if (callback) {
          return callback(roles);
        }
      }
    };
    save = function(role, success) {
      if (role._id) {
        console.log('updating role');
        return resource.save({}, role, function(result) {
          updateMasterList(result);
          if (success) {
            return success();
          }
        });
      } else {
        console.log('creating role');
        return resource.create({}, role, function(result) {
          console.log('got a result ' + result);
          updateMasterList(result);
          if (success) {
            return success();
          }
        });
      }
    };
    get = function(params, callback) {
      return resource.get(params, function(role) {
        updateMasterList(role);
        if (callback) {
          return callback(role);
        }
      });
    };
    destroy = function(id, callback) {
      return resource["delete"]({
        id: id
      }, function() {
        var removed;
        removed = false;
        angular.forEach(roles, function(item, index) {
          if (!removed) {
            if (item._id === id) {
              removed = true;
              return roles.splice(index, 1);
            }
          }
        });
        if (callback) {
          return callback();
        }
      });
    };
    factory = function() {
      return {
        name: ''
      };
    };
    isInRole = function(name, roleIds) {
      var deferred;
      deferred = $q.defer();
      all(function(roles) {
        var inRole, toCheck;
        inRole = false;
        toCheck = $filter('filter')(roles, function(role) {
          return role.name.toLowerCase() === name.toLowerCase();
        });
        angular.forEach(toCheck, function(role) {
          return angular.forEach(roleIds, function(id) {
            if (id === role._id) {
              return inRole = true;
            }
          });
        });
        return deferred.resolve(inRole);
      });
      return deferred.promise;
    };
    return {
      query: all,
      all: all,
      get: get,
      create: factory,
      destroy: destroy,
      save: save,
      isInRole: isInRole
    };
  }
]);

var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

angular.module('gint.security').controller('roleController', [
  '$scope', '$location', 'Role', 'User', 'Auth', function($scope, $location, Role, User, Auth) {
    var refreshRoleUsers, reset;
    $scope.roles = [];
    reset = function() {
      $scope.newRole = Role.create();
      return $scope.getRoles();
    };
    refreshRoleUsers = function(role) {
      $scope.roleUsers = [];
      if ((role != null ? role._id : void 0) != null) {
        return angular.forEach($scope.users, function(user) {
          var _ref;
          if (_ref = role._id, __indexOf.call(user.roles, _ref) >= 0) {
            return $scope.roleUsers.push(user);
          }
        });
      }
    };
    $scope.saveRole = function(role, callback) {
      return Role.save(role, function() {
        reset();
        if (callback) {
          return callback();
        }
      });
    };
    $scope.getRoles = function() {
      return Role.query(function(roles) {
        $scope.roles = roles;
        if (roles.length > 0) {
          $scope.selectedRole = roles[0];
          return refreshRoleUsers(roles[0]);
        }
      });
    };
    $scope.selectRole = function(role) {
      $scope.selectedRole = role;
      return refreshRoleUsers(role);
    };
    $scope.deleteRole = function(role) {
      return Role.destroy(role._id, function() {
        return $scope.getRoles();
      });
    };
    $scope.show = function(selector) {
      return $scope.currentView = selector;
    };
    return Auth.isAdmin().then(function(isAdmin) {
      if (isAdmin) {
        User.query(function(results) {
          $scope.users = results;
          return refreshRoleUsers($scope.selectedRole);
        });
        $scope.show('list');
        return reset();
      } else {
        console.log('redirecting to login');
        return $location.path('/login');
      }
    });
  }
]);

angular.module('gint.security').controller('permissionController', [
  '$scope', '$location', 'Resource', 'Permission', 'Auth', function($scope, $location, Resource, Permission, Auth) {
    Resource.all().then(function(rts) {
      console.log('rts');
      console.log(rts);
      return $scope.resourceTypes = rts;
    });
    $scope.selectedPermissions = [];
    $scope.options = {
      customSearch: false,
      customSort: false,
      searchProperties: ['resourceType'],
      searchFilters: ['permissionUser', 'permissionRestriction'],
      displayCounts: true,
      columns: 3
    };
    $scope.savePermission = function(permission) {
      return Permission.save(permission);
    };
    return Auth.isAdmin().then(function(isAdmin) {
      if (isAdmin) {
        Permission.all().then(function(permissions) {
          return $scope.permissions = permissions;
        });
        return $scope.$watch('selectedPermissions[0]', function(newVal, oldVal) {
          if (newVal) {
            $scope.permission = newVal;
            return $scope.submitText = "Update Permission";
          } else {
            $scope.permission = {};
            return $scope.submitText = "Add Permission";
          }
        });
      } else {
        return $location.path('/login');
      }
    });
  }
]);

angular.module('gint.security').directive('auth', [
  '$location', '$rootScope', function($location, $rootScope) {
    var link;
    link = function(scope, elem, attrs) {
      var path;
      path = $location.path();
      scope.$on('event:auth-loginRequired', function() {
        path = $location.path();
        return $location.path('/login');
      });
      return scope.$on('event:auth-loginConfirmed', function() {
        if (path === '/logout' || path === '/login') {
          path = '/';
        }
        return $location.path(path);
      });
    };
    return {
      link: link,
      restrict: 'C'
    };
  }
]);

angular.module('gint.security').directive('roleForm', function() {
  return {
    restrict: 'E',
    templateUrl: '/views/gi-roleForm.html',
    scope: {
      role: '=',
      submit: '&',
      destroy: '&',
      submitText: '@'
    },
    link: function(scope, elm, attrs) {
      scope.showDelete = true;
      scope.showDeleteModal = false;
      scope.deleteRole = function() {
        scope.destroy({
          role: scope.role
        });
        return scope.showDeleteModal = false;
      };
      return scope.confirmDelete = function() {
        return scope.showDeleteModal = true;
      };
    }
  };
});

var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

angular.module('gint.security').directive('userForm', [
  'Role', function(Role) {
    return {
      restrict: 'E',
      templateUrl: '/views/gi-userForm.html',
      scope: {
        user: '=',
        submit: '&',
        destroy: '&',
        submitText: '@'
      },
      link: function(scope, elm, attrs) {
        var getRoles, refreshUserRoles;
        scope.showDelete = true;
        scope.showDeleteModal = false;
        scope.userRoles = [];
        scope.notUserRoles = [];
        scope.unsavedChanges = false;
        scope.$watch('user', function(newVal) {
          if (newVal) {
            scope.unsavedChanges = false;
            return refreshUserRoles();
          }
        });
        refreshUserRoles = function() {
          scope.userRoles = [];
          scope.notUserRoles = [];
          return angular.forEach(scope.roles, function(role) {
            var _ref, _ref1;
            if ((((_ref = scope.user) != null ? _ref.roles : void 0) != null) && (_ref1 = role._id, __indexOf.call(scope.user.roles, _ref1) >= 0)) {
              return scope.userRoles.push(role);
            } else {
              return scope.notUserRoles.push(role);
            }
          });
        };
        getRoles = function() {
          return Role.all(function(roles) {
            scope.roles = roles;
            return refreshUserRoles();
          });
        };
        scope.checkForChanges = function() {
          return scope.unsavedChanges = true;
        };
        scope.deleteUser = function() {
          scope.destroy({
            user: scope.user
          });
          return scope.showDeleteModal = false;
        };
        scope.confirmDelete = function() {
          return scope.showDeleteModal = true;
        };
        scope.addToRole = function(role) {
          scope.unsavedChanges = true;
          scope.user.roles.push(role._id);
          return refreshUserRoles();
        };
        scope.removeFromRole = function(role) {
          scope.unsavedChanges = true;
          return angular.forEach(scope.user.roles, function(userRole, index) {
            if (userRole === role._id) {
              scope.user.roles.splice(index, 1);
              return refreshUserRoles();
            }
          });
        };
        scope.save = function() {
          scope.unsavedChanges = false;
          return scope.submit({
            user: scope.user
          });
        };
        return getRoles();
      }
    };
  }
]);

angular.module('gint.security').directive('permissionForm', [
  '$q', '$timeout', '$http', '$filter', 'Resource', 'User', 'Permission', function($q, $timeout, $http, $filter, Resource, User, Permission) {
    return {
      restrict: 'E',
      templateUrl: '/views/gi-permissionForm.html',
      scope: {
        permission: '=',
        submit: '&',
        destroy: '&',
        submitText: '@'
      },
      link: function(scope, elm, attrs) {
        var getRelatedKeys, getResources, getSelectedKeys, getSelectedResourceType, getSelectedUser, getUsers, pluralise, refreshPermissionFields;
        scope.resourceTypes = [];
        scope.keys = [];
        scope.selectedKeys = [];
        scope.users = [];
        scope.showDelete = true;
        scope.showDeleteModal = false;
        scope.restrictions = Permission.restrictions;
        scope.$watch('permission', function(newVal, oldVal) {
          return refreshPermissionFields();
        });
        scope.$watch('selectedResourceType', function(newVal, oldVal) {
          if (newVal != null ? newVal.name : void 0) {
            scope.selectedKeys = [];
            return getRelatedKeys(newVal.name);
          }
        });
        pluralise = function(str) {
          var result, suffix;
          if (str != null) {
            result = str.toLowerCase();
            suffix = 'y';
            if (result.indexOf(suffix, result.length - suffix.length) !== -1) {
              result = result.substring(0, result.length - 1) + 'ies';
            } else {
              result += 's';
            }
            return result;
          } else {
            return str;
          }
        };
        getRelatedKeys = function(name) {
          var uri;
          uri = '/api/' + pluralise(name);
          return $http.get(uri).success(function(data) {
            scope.selectedKeys = [];
            scope.keys = data;
            angular.forEach(scope.keys, function(key) {
              return key.id = key._id;
            });
            return getSelectedKeys();
          });
        };
        scope.deletePermission = function() {
          scope.destroy({
            permission: scope.permission
          });
          return scope.showDeleteModal = false;
        };
        scope.confirmDelete = function() {
          return scope.showDeleteModal = true;
        };
        getUsers = function() {
          var deferred;
          deferred = $q.defer();
          User.all(function(users) {
            scope.users = users;
            angular.forEach(scope.users, function(user) {
              return user.id = user._id;
            });
            deferred.resolve();
          });
          return deferred.promise;
        };
        getResources = function() {
          var deferred;
          deferred = $q.defer();
          Resource.all().then(function(resources) {
            scope.resourceTypes = resources;
            angular.forEach(scope.resourceTypes, function(resource) {
              return resource.id = resource._id;
            });
            deferred.resolve();
          });
          return deferred.promise;
        };
        getSelectedResourceType = function() {
          scope.selectedResourceType = {};
          if (scope.permission) {
            if (scope.permission.resourceType) {
              return angular.forEach(scope.resourceTypes, function(resource) {
                if (resource.name === scope.permission.resourceType) {
                  return scope.selectedResourceType = resource;
                }
              });
            }
          }
        };
        getSelectedUser = function() {
          scope.selectedUser = {};
          if (scope.permission) {
            if (scope.permission.userId) {
              return angular.forEach(scope.users, function(user) {
                if (user._id === scope.permission.userId) {
                  return scope.selectedUser = user;
                }
              });
            }
          }
        };
        getSelectedKeys = function() {
          scope.selectedKeys = [];
          if (scope.permission && (scope.permission.keys != null)) {
            return scope.selectedKeys = $filter('filter')(scope.keys, function(key) {
              return scope.permission.keys.indexOf(key._id) !== -1;
            });
          }
        };
        refreshPermissionFields = function() {
          $timeout(getSelectedResourceType);
          $timeout(getSelectedUser);
          return $timeout(getSelectedKeys);
        };
        scope.save = function() {
          var key;
          if (scope.permission) {
            scope.permission.userId = scope.selectedUser._id;
            scope.permission.keys = (function() {
              var _i, _len, _ref, _results;
              _ref = scope.selectedKeys;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                key = _ref[_i];
                _results.push(key._id);
              }
              return _results;
            })();
            scope.permission.resourceType = scope.selectedResourceType.name;
            return scope.submit({
              permission: scope.permission
            });
          }
        };
        return $q.all([getResources(), getUsers()]).then(function() {
          return refreshPermissionFields();
        });
      }
    };
  }
]);

angular.module('gint.security').provider('Auth', function() {
  /*
  Holds all the requests which failed due to 401 response,
  so they can be re-requested in future, once login is completed.
  */

  var buffer, get, pushToBuffer;
  buffer = [];
  /*
  Required by HTTP interceptor.
  Function is attached to provider to be invisible for
  regular users of this service.
  */

  pushToBuffer = function(config, deferred) {
    return buffer.push({
      config: config,
      deferred: deferred
    });
  };
  get = [
    '$rootScope', '$injector', '$q', '$filter', 'Role', 'Setting', function($rootScope, $injector, $q, $filter, Role, Setting) {
      var $http, getLoggedInUser, getRoleName, loginChanged, loginInfoDirty, loginStatus, me, retry, retryAll;
      $http = void 0;
      loginInfoDirty = true;
      me = {
        user: null,
        isAdmin: false,
        isRestricted: true,
        loggedIn: false
      };
      retry = function(config, deferred) {
        $http = $http || $injector.get('$http');
        return $http(config).then(function(response) {
          return deferred.resolve(response);
        });
      };
      retryAll = function() {
        var item, _i, _len;
        for (_i = 0, _len = buffer.length; _i < _len; _i++) {
          item = buffer[_i];
          retry(item.config, item.deferred);
        }
        return buffer = [];
      };
      getRoleName = function(settings, settingName, defaultValue) {
        var roleSetting;
        roleSetting = $filter('filter')(settings, function(setting) {
          return setting.key === settingName;
        });
        settingName = defaultValue;
        if ((roleSetting != null ? roleSetting.length : void 0) > 0) {
          settingName = roleSetting[0].value;
        }
        return settingName;
      };
      getLoggedInUser = function() {
        var deferred;
        deferred = $q.defer();
        $http = $http || $injector.get('$http');
        $http.get('/api/user').success(function(user) {
          return Setting.all().then(function(settings) {
            var admin, restricted, sysAdmin;
            admin = getRoleName(settings, "AdminRoleName", "admin");
            restricted = getRoleName(settings, "RestrictedRoleName", "restricted");
            sysAdmin = getRoleName(settings, "SysAdminRoleName", "sysadmin");
            return Role.isInRole(admin, user.roles).then(function(isAdmin) {
              return Role.isInRole(sysAdmin, user.roles).then(function(isSysAdmin) {
                return Role.isInRole(restricted, user.roles).then(function(isRestricted) {
                  loginInfoDirty = false;
                  me = {
                    user: user,
                    isAdmin: isAdmin,
                    isSysAdmin: isSysAdmin,
                    isRestricted: isRestricted,
                    loggedIn: true
                  };
                  return deferred.resolve(me);
                });
              });
            });
          });
        }).error(function() {
          loginInfoDirty = false;
          me = {
            user: null,
            isAdmin: false,
            isRestricted: true,
            loggedIn: false
          };
          return deferred.resolve(me);
        });
        return deferred.promise;
      };
      loginStatus = function() {
        var deferred;
        deferred = $q.defer();
        if (loginInfoDirty) {
          deferred.resolve(getLoggedInUser());
        } else {
          deferred.resolve(me);
        }
        return deferred.promise;
      };
      loginChanged = function() {
        loginInfoDirty = true;
        return $rootScope.$broadcast('event:auth-loginChange');
      };
      return {
        me: loginStatus,
        loginChanged: loginChanged,
        loginConfirmed: function() {
          loginChanged();
          return retryAll();
        },
        isAdmin: function() {
          var deferred;
          deferred = $q.defer();
          loginStatus().then(function() {
            return deferred.resolve(me.isAdmin);
          });
          return deferred.promise;
        },
        logout: function() {
          $http = $http || $injector.get('$http');
          return $http.get('/api/logout').success(function() {
            loginInfoDirty = true;
            $rootScope.$broadcast('event:auth-loginChange');
            return me = {
              user: null,
              isAdmin: false,
              isRestricted: true,
              loggedIn: false
            };
          });
        }
      };
    }
  ];
  return {
    $get: get,
    pushToBuffer: pushToBuffer
  };
});

angular.module('gint.security').config([
  '$httpProvider', 'AuthProvider', function($httpProvider, AuthProvider) {
    return $httpProvider.interceptors.push([
      '$rootScope', '$q', function($rootScope, $q) {
        return {
          responseError: function(rejection) {
            var deferred;
            if ((rejection.config.url !== '/api/login') && (rejection.config.url !== '/api/user') && (rejection.status === 401)) {
              console.log('a ha!');
              deferred = $q.defer();
              AuthProvider.pushToBuffer(rejection.config, deferred);
              $rootScope.$broadcast('event:auth-loginRequired');
              return deferred.promise;
            } else {
              return $q.reject(rejection);
            }
          }
        };
      }
    ]);
  }
]);

angular.module('gint.security').factory('Resource', [
  '$resource', 'giCrud', function($resource, Crud) {
    return Crud.factory('resources', true);
  }
]);

;