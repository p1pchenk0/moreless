(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],d=0,h=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0025":function(e,t,n){},"0c37":function(e,t,n){},"1f58":function(e,t,n){},"21bb":function(e,t,n){"use strict";n("2dad")},"257e":function(e,t,n){},"2dad":function(e,t,n){},"30db":function(e,t,n){"use strict";n("0025")},"45e6":function(e,t,n){"use strict";n("1f58")},"505a":function(e,t,n){"use strict";n("56d7")},"56d7":function(e,t,n){},"5c0b":function(e,t,n){"use strict";n("9c0c")},7692:function(e,t,n){},"923e":function(e,t,n){},"9c0c":function(e,t,n){},c5a3:function(e,t,n){"use strict";n("0c37")},cd49:function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o=(n("5c0b"),n("2877")),c={},s=Object(o["a"])(c,a,i,!1,null,null,null),u=s.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Modal",{directives:[{name:"show",rawName:"v-show",value:e.isGameNotStarted,expression:"isGameNotStarted"}],on:{"reset-game":e.resetGame,"show-rules":e.showRules}}),n("Help",{ref:"help",on:{"show-toggle":e.onHelpToggle}}),e.isGameNotStarted?e._e():n("InGameDashboard"),n("InteractionArea",{staticClass:"area",on:{movement:e.showMovement}},[n("Sides"),n("div",{staticClass:"pie-and-condition"},[n("Pie",{ref:"pie",staticClass:"pie",attrs:{size:120}}),n("div",{staticClass:"condition"},[n("div",{staticClass:"condition-text"},[e._v(" "+e._s(e.moreOrLess)+" "),e.potentialBonusIcon?n("img",{staticClass:"possible-bonus",attrs:{src:e.potentialBonusIcon}}):e._e()])])],1)],1)],1)},h=[],f=n("5530"),v=n("1da1"),p=n("d4ec"),m=n("bee2"),b=n("262e"),g=n("2caf"),w=(n("96cf"),n("9ab4")),O=n("1b40"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swipeable-area",on:{touchstart:e.onTouchStart,touchend:e.onTouchEnd}},[e._t("default")],2)},j=[],S=(n("ac1f"),n("5319"),n("caad"),n("2f62")),_=["isTouchDevice"],M=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.beginTouch=null,e.endTouch=null,e.diffX=0,e.diffY=0,e}return Object(m["a"])(n,[{key:"onTouchStart",value:function(e){this.diffX=0,this.diffY=0,e.preventDefault(),this.beginTouch=e.touches.item(0)}},{key:"onTouchEnd",value:function(e){e.preventDefault(),this.endTouch=e.changedTouches.item(0),this.calculateMove()}},{key:"calculateMove",value:function(){var e=this.beginTouch,t=e.pageX,n=e.pageY,r=this.endTouch,a=r.pageX,i=r.pageY;this.diffX=a-t,this.diffY=i-n;var o,c=Math.abs(this.diffX),s=Math.abs(this.diffY);(s||c)&&(o=c>s?this.diffX>0?"right":"left":this.diffY>0?"down":"up",this.$emit("movement",o))}},{key:"handleKeys",value:function(e){if(!this.isTouchDevice){var t=null,n=e.code.toLowerCase().replace(/arrow|key/,"");/shift|alt|control/gi.test(n)||(["up","w"].includes(n)&&(t="up"),["down","s"].includes(n)&&(t="down"),["left","a"].includes(n)&&(t="left"),["right","d"].includes(n)&&(t="right"),t&&this.$emit("movement",t))}}},{key:"mounted",value:function(){window.addEventListener("keydown",this.handleKeys)}},{key:"beforeDestroy",value:function(){window.removeEventListener("keydown",this.handleKeys)}}]),n}(O["c"]);M=Object(w["a"])([Object(O["a"])({computed:Object(f["a"])({},Object(S["e"])("general",_))})],M);var k=M,C=k,x=(n("45e6"),Object(o["a"])(C,y,j,!1,null,null,null)),T=x.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pie-wrapper",class:[e.movementClass,{"pie-wrapper--hidden":e.isHidden,"pie-wrapper--animated":e.isMoving}],style:Object.assign({},e.wrapperStyle,e.movementStyle),attrs:{id:e.circleId}})},P=[],B=n("3835"),G=(n("99af"),n("d3b7"),n("a15b"),n("d81d"),n("4fad"),n("ec26")),R=n("898b"),L=["pieData"],A=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.circleId="circle_".concat(Object(G["a"])()),e.movementClass="",e.movementStyle={},e.isHidden=!0,e.isMoving=!1,e}return Object(m["a"])(n,[{key:"wrapperStyle",get:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}}},{key:"getTranslate",value:function(e){var t=["down","right"].includes(e),n=["up","down"].includes(e)?"Y":"X",r=(t?1:-1)*("X"===n?window.innerWidth:window.innerHeight)/2;return"translate".concat(n,"(").concat(r,"px)")}},{key:"move",value:function(e){var t=this;return this.isMoving=!0,this.movementStyle={transform:this.getTranslate(e)},this.movementClass=e,new Promise((function(e){setTimeout((function(){t.isHidden=!0,t.isMoving=!1,t.movementClass="",t.movementStyle={},e()}),310)}))}},{key:"drawPie",value:function(){var e=this;this.isHidden=!1,R["c"]("#".concat(this.circleId," svg")).remove();var t=R["c"]("#".concat(this.circleId)).append("svg").attr("viewBox",[-this.size/2,-this.size/2,this.size,this.size].join(",")).attr("width",this.size),n=R["b"]().value((function(e){return e.valueOf()})),r=Object.entries(this.pieData).map((function(e){var t=Object(B["a"])(e,2),n=t[0],r=t[1];return{key:n,value:r,valueOf:function(){return r}}})),a=n(r),i=R["a"]();t.selectAll("path").data(a).enter().append("path").attr("d",(function(t){return i({innerRadius:0,outerRadius:e.size/2,startAngle:t.startAngle,endAngle:t.endAngle})})).attr("fill",(function(e,t){var n=a[t];return n.data.key}))}},{key:"newColors",value:function(){this.drawPie()}}]),n}(O["c"]);Object(w["a"])([Object(O["b"])({default:50})],A.prototype,"size",void 0),Object(w["a"])([Object(O["d"])("pieData")],A.prototype,"newColors",null),A=Object(w["a"])([Object(O["a"])({computed:Object(f["a"])({},Object(S["e"])("game",L))})],A);var E=A,z=E,D=(n("c5a3"),Object(o["a"])(z,I,P,!1,null,null,null)),$=D.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"help-wrapper"},[e.isStartScreenShown?e._e():n("div",{staticClass:"help-icon",on:{click:e.toggleVisibility}},[e._v(" ? ")]),e.isHelpShown?n("div",{staticClass:"help-modal"},[n("div",{staticClass:"help-close",on:{click:e.toggleVisibility}},[e._v(" close ")]),n("div",{staticClass:"help-text"},[e._m(0),n("p",[e._v("Goal is to "+e._s(e.movementType)+" to the side with color having the bigger/smaller part in circle (according to condition).")]),n("p",[e._v("Each correct answer adds 1 second, each wrong — substitutes 1 second.")]),e._m(1),e._m(2),n("p",[e._v("Score earned/lost is based on how difficult it is to detect correct color:")]),e._m(3)])]):e._e()])},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Each time you will see a circle with two colors and a condition below: "),n("b",[e._v('"More"')]),e._v(" or "),n("b",[e._v('"Less"')]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("b",[e._v("Example:")]),e._v(" we have circle with 75% green and 25% red, green area on top of screen, red — at the bottom.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Word below circle is "),n("b",[e._v('"More"')]),e._v(". This means, that correct choice is to move circle up towards green area. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("situation with "),n("b",[e._v("51/49")]),e._v(" will give much more points than "),n("b",[e._v("10/90")]),e._v(" if guessed correctly.")])}],N=["isStartScreenShown"],W=["isTouchDevice"],X=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.isHelpShown=!1,e}return Object(m["a"])(n,[{key:"toggleVisibility",value:function(){this.isHelpShown=!this.isHelpShown,this.isHelpShown&&window.dataLayer.push({event:"show_help"}),this.$emit("show-toggle",this.isHelpShown)}},{key:"movementType",get:function(){return this.isTouchDevice?"swipe":"press arrow or WASD keys"}}]),n}(O["c"]);X=Object(w["a"])([Object(O["a"])({computed:Object(f["a"])(Object(f["a"])({},Object(S["e"])("general",W)),Object(S["e"])("game",N))})],X);var Y=X,V=Y,K=(n("505a"),Object(o["a"])(V,H,F,!1,null,"3b4b3e9c",null)),q=K.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"in-game-dashboard"},[n("TimeBar",{attrs:{color:e.barColor,"bar-width":e.barWidth}}),n("div",{staticClass:"stats"},[n("div",{staticClass:"score",style:{color:e.scoreColor}},[e._v(" "+e._s(e.score)+" "),e.highscore?n("div",[e._v(" best: "+e._s(e.highscore)+" ")]):e._e()])])],1)},Q=[],U=(n("25f0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"time-bar",style:{background:e.color,width:e.barWidth+"px"}})}),Z=[],ee=n("2fe1"),te=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(p["a"])(this,n),t.apply(this,arguments)}return n}(O["c"]);Object(w["a"])([Object(O["b"])({required:!0})],te.prototype,"color",void 0),Object(w["a"])([Object(O["b"])({required:!0})],te.prototype,"barWidth",void 0),te=Object(w["a"])([ee["b"]],te);var ne=te,re=ne,ae=(n("eaae"),Object(o["a"])(re,U,Z,!1,null,"65fa2a72",null)),ie=ae.exports,oe=60,ce=5,se=250,ue=["scoreColor","score","secondsLeft"],le=["isTimeFrozen"],de=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.step=window.innerWidth/oe,e}return Object(m["a"])(n,[{key:"barWidth",get:function(){return Math.min(window.innerWidth,this.step*this.secondsLeft)}},{key:"barColor",get:function(){return this.isTimeFrozen?"#76bfc4":this.scoreColor}},{key:"handler",value:function(e){this.highscore=+(localStorage.getItem("highscore")||0),(!this.highscore||e>+this.highscore)&&(this.highscore=e,localStorage.setItem("highscore",e.toString()))}}]),n}(O["c"]);Object(w["a"])([Object(O["d"])("score",{immediate:!0})],de.prototype,"handler",null),de=Object(w["a"])([Object(O["a"])({components:{TimeBar:ie},computed:Object(f["a"])(Object(f["a"])({},Object(S["e"])("game",ue)),Object(S["c"])("game",le))})],de);var he=de,fe=he,ve=(n("ebfe"),Object(o["a"])(fe,J,Q,!1,null,null,null)),pe=ve.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"vertical"===e.direction?n("div",[n("div",{staticClass:"top-choice",style:{background:e.colors[0]}}),n("div",{staticClass:"bottom-choice",style:{background:e.colors[1]}})]):n("div",[n("div",{staticClass:"left-choice",style:{background:e.colors[0]}}),n("div",{staticClass:"right-choice",style:{background:e.colors[1]}})])},be=[],ge=["colors","direction"],we=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(p["a"])(this,n),t.apply(this,arguments)}return n}(O["c"]);we=Object(w["a"])([Object(O["a"])({computed:Object(f["a"])({},Object(S["e"])("game",ge))})],we);var Oe=we,ye=Oe,je=(n("e107"),Object(o["a"])(ye,me,be,!1,null,null,null)),Se=je.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal"},[e.isStartScreenShown?[n("p",[e._v("If you are new to this game, please, check rules with button below")]),n("p",[e._v("I would appreciate if you share this game with your friends")])]:e._e(),e.isGameOver?[n("p",[e._v("Seconds played: "+e._s(e.totalSecondsPlayed))]),n("p",[e._v("Score: "+e._s(e.score))])]:e._e(),e._m(0),n("div",{staticClass:"btn",on:{click:function(t){return e.$emit("show-rules")}}},[e._v("Check rules")]),n("div",{staticClass:"btn",on:{click:function(t){return e.$emit("reset-game")}}},[e._v(e._s(e.buttonText))])],2)},Me=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"socials"},[n("div",{staticClass:"social-item"},[n("div",{attrs:{id:"twitter-share-start"}})]),n("div",{staticClass:"social-item"},[n("div",{staticClass:"fb-share-button",attrs:{"data-href":"https://moreless.info","data-layout":"button","data-size":"large"}})])])}],ke=["isGameOver","isStartScreenShown","score","totalSecondsPlayed"],Ce=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(p["a"])(this,n),t.apply(this,arguments)}return Object(m["a"])(n,[{key:"buttonText",get:function(){return this.isStartScreenShown?"Start game":"Play again"}},{key:"tweetText",get:function(){return this.isGameOver?"I've managed to get ".concat(this.score," points in ").concat(this.totalSecondsPlayed," seconds! Can you do more?"):"Check this simple, but challenging game!"}},{key:"mounted",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.waitForTwitter();case 2:return e.next=4,this.drawTwitterButton();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"waitForTwitter",value:function(){return new Promise((function(e){var t=setInterval((function(){window.twttr&&(clearInterval(t),e())}),10)}))}},{key:"drawTwitterButton",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$nextTick();case 2:return t=document.getElementById("twitter-share-start"),t.innerHTML="",e.next=6,window.twttr.widgets.createShareButton("https://moreless.info",t,{size:"large",text:this.tweetText});case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"handler",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.drawTwitterButton();case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(O["c"]);Object(w["a"])([Object(O["d"])("isGameOver")],Ce.prototype,"handler",null),Ce=Object(w["a"])([Object(O["a"])({computed:Object(f["a"])({},Object(S["e"])("game",ke))})],Ce);var xe=Ce,Te=xe,Ie=(n("30db"),Object(o["a"])(Te,_e,Me,!1,null,null,null)),Pe=Ie.exports,Be=["secondsLeft","totalSecondsPlayed","moreOrLess","potentialBonus"],Ge=["isGameNotStarted"],Re=["selectConditionMutation","setSecondsLeftMutation","setTotalSecondsPlayedMutation","setGameOverMutation"],Le=["checkCorrectAnswerAction","prepareRoundAction","resetGameAction"],Ae=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.isMoving=!1,e}return Object(m["a"])(n,[{key:"potentialBonusIcon",get:function(){return"time freeze"===this.potentialBonus?"/snowflake.svg":null}},{key:"created",value:function(){var e=["snowflake.svg"];e.forEach((function(e){var t=document.createElement("img");t.src=e}))}},{key:"mounted",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.prepareRoundAction();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"showRules",value:function(){var e=this.$refs.help;e.toggleVisibility()}},{key:"resetGame",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.resetGameAction();case 2:return e.next=4,this.prepareRoundAction();case 4:this.countSeconds();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"countSeconds",value:function(){var e=this;clearInterval(this.timeIntervalId),this.isGameNotStarted||(this.timeIntervalId=setInterval((function(){e.setSecondsLeftMutation(e.secondsLeft-1),e.setTotalSecondsPlayedMutation(e.totalSecondsPlayed+1),(!e.secondsLeft||e.secondsLeft<0)&&(clearInterval(e.timeIntervalId),e.setGameOverMutation(!0),e.setSecondsLeftMutation(0))}),1e3))}},{key:"checker",value:function(e){e&&this.selectConditionMutation("")}},{key:"onHelpToggle",value:function(e){e?clearInterval(this.timeIntervalId):this.countSeconds()}},{key:"showMovement",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isMoving&&!this.isGameNotStarted){e.next=2;break}return e.abrupt("return");case 2:return this.isMoving=!0,n=this.$refs.pie,e.next=6,n.move(t);case 6:return e.next=8,this.checkCorrectAnswerAction(t);case 8:return e.next=10,this.prepareRoundAction();case 10:this.isMoving=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(O["c"]);Object(w["a"])([Object(O["d"])("isGameNotStarted")],Ae.prototype,"checker",null),Ae=Object(w["a"])([Object(O["a"])({components:{Modal:Pe,Sides:Se,Help:q,Pie:$,InteractionArea:T,InGameDashboard:pe},computed:Object(f["a"])(Object(f["a"])({},Object(S["e"])("game",Be)),Object(S["c"])("game",Ge)),methods:Object(f["a"])(Object(f["a"])({},Object(S["d"])("game",Re)),Object(S["b"])("game",Le))})],Ae);var Ee=Ae,ze=Ee,De=(n("21bb"),Object(o["a"])(ze,d,h,!1,null,null,null)),$e=De.exports;r["a"].use(l["a"]);var He=[{path:"/",name:"Home",component:$e}],Fe=new l["a"]({mode:"history",base:"/",routes:He}),Ne=Fe,We={isTouchDevice:"ontouchstart"in window},Xe={namespaced:!0,state:We};n("4e82"),n("fb6a"),n("159b"),n("2532"),n("c740");function Ye(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=new Array(t).join("0");return(n+e).slice(-t)}function Ve(e){return 0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}}function Ke(e,t){var n=Ve(e),r=n.r,a=n.g,i=n.b;if(t)return.299*r+.587*a+.114*i>186?"#000000":"#FFFFFF";var o=(255-r).toString(16),c=(255-a).toString(16),s=(255-i).toString(16);return"#"+Ye(o)+Ye(c)+Ye(s)}function qe(){var e=Math.floor(255*Math.random()).toString(16),t=Math.floor(255*Math.random()).toString(16),n=Math.floor(255*Math.random()).toString(16),r=["#",Ye(e),Ye(t),Ye(n)].join(""),a=Ke(r);return[r,a]}function Je(e){var t=Object(B["a"])(e,2),n=t[0],r=t[1],a=Ve(n),i=a.r,o=a.g,c=a.b,s=Ve(r),u=s.r,l=s.g,d=s.b,h=Math.floor(Math.abs(i-u)).toString(16),f=Math.floor(Math.abs(o-l)).toString(16),v=Math.floor(Math.abs(c-d)).toString(16);return["#",Ye(h),Ye(f),Ye(v)].join("")}var Qe=n("2909");n("07ac");function Ue(e){if(!e)return 1;var t=Object.values(e),n=Object(B["a"])(t,2),r=n[0],a=n[1],i=Math.abs(r-a);return 1/i}function Ze(e){var t=Object(Qe["a"])(e).sort((function(e,t){return e-t})),n=Object(B["a"])(t,2),r=n[0],a=n[1],i=r/a;return i<.1&&(r=.1*a),i>.9&&(r=.9*a),[r,a]}var et=["time freeze"],tt={"time freeze":5e3};function nt(){var e=Math.random();if(e>.15)return null;var t=et.sort((function(){return Math.random()-.5})),n=Object(B["a"])(t,1),r=n[0];return r}var rt={isGameOver:!1,isStartScreenShown:!0,score:0,secondsLeft:oe,totalSecondsPlayed:0,colors:[],direction:"vertical",scoreColor:"",moreOrLess:"",pieData:{},potentialBonus:null,activeBonus:null},at={isGameNotStarted:function(e){return e.isGameOver||e.isStartScreenShown},isMoreThanMinutePlayed:function(e){return e.totalSecondsPlayed>=oe},isTimeFrozen:function(e){return"time freeze"===e.activeBonus}},it={setActiveGameBonus:function(e,t){e.activeBonus||(e.activeBonus=t?e.potentialBonus:null,e.potentialBonus=null,e.activeBonus&&setTimeout((function(){return e.activeBonus=null}),tt[e.activeBonus]))},selectPotentialGameBonus:function(e){e.activeBonus||(e.potentialBonus=nt())},setGameOverMutation:function(e,t){e.isGameOver=t},setStartScreenVisibilityMutation:function(e,t){e.isStartScreenShown=t},generatePieDataMutation:function(e){var t={},n=[Math.random(),Math.random()],r=Ze(n),a=Object(B["a"])(r,2),i=a[0],o=a[1];r.sort((function(){return Math.random()-.5})),e.colors.slice(0,2).map((function(e,n){t[e]=r[n]}));var c=e.colors[2];c&&(t[c]=.85*Math.random()*(o-i)+i),e.pieData=t},selectConditionMutation:function(e,t){e.moreOrLess=t||(Math.random()>.5?"more":"less")},selectDirectionMutation:function(e){e.direction=Math.random()>.5?"vertical":"horizontal"},generateColorsMutation:function(e){if(e.colors=qe(),e.totalSecondsPlayed>=oe){var t=Je(e.colors);e.colors.push(Ke(t))}e.scoreColor=Ke(e.colors["horizontal"===e.direction?1:0],!0)},setScoreMutation:function(e,t){e.score=t},setSecondsLeftMutation:function(e,t){"time freeze"!==e.activeBonus&&(e.secondsLeft=t)},setTotalSecondsPlayedMutation:function(e,t){e.totalSecondsPlayed=t},calculateRoundResults:function(e,t){var n=Ue(e.pieData),r=t.isCorrectChoice,a=r?1:-1,i=a?1.3:1.3*n,o=e.secondsLeft+a*i;e.score=Math.floor(e.score+a*Math.min(ce*n,se)),"time freeze"!==e.activeBonus&&(e.secondsLeft=Math.min(oe,o))}},ot={checkCorrectAnswerAction:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o,c,s,u,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.state,a=e.commit,r.pieData){n.next=3;break}return n.abrupt("return");case 3:i="more"===r.moreOrLess?Math.max:Math.min,Object.entries(r.pieData).forEach((function(e){var t=Object(B["a"])(e,2),n=t[0],a=t[1];r.colors.slice(0,2).includes(n)&&(o&&i(o.value,a)!==a||(o={color:n,value:a}))})),c=r.colors.findIndex((function(e){return e===o.color})),s="vertical"===r.direction?["up","down"]:["left","right"],u=s[c],l=t===u,window.dataLayer.push({event:l?"correct_choice":"wrong_choice"}),a("calculateRoundResults",{isCorrectChoice:l}),a("setActiveGameBonus",l);case 12:case"end":return n.stop()}}),n)})))()},prepareRoundAction:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,r=e.state,n("selectDirectionMutation"),n("selectConditionMutation"),n("generateColorsMutation"),n("generatePieDataMutation"),r.isStartScreenShown||n("selectPotentialGameBonus");case 6:case"end":return t.stop()}}),t)})))()},resetGameAction:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("selectConditionMutation",""),n("setStartScreenVisibilityMutation",!1),n("setGameOverMutation",!1),n("setSecondsLeftMutation",oe),n("setScoreMutation",0),n("setTotalSecondsPlayedMutation",0);case 7:case"end":return t.stop()}}),t)})))()}},ct={namespaced:!0,state:rt,getters:at,mutations:it,actions:ot};r["a"].use(S["a"]);var st=new S["a"].Store({modules:{general:Xe,game:ct}});r["a"].config.productionTip=!1,new r["a"]({router:Ne,store:st,render:function(e){return e(u)}}).$mount("#app")},e107:function(e,t,n){"use strict";n("7692")},eaae:function(e,t,n){"use strict";n("257e")},ebfe:function(e,t,n){"use strict";n("923e")}});