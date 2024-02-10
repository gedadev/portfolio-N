(()=>{"use strict";var n={810:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([n.id,"#about {\n    height: auto;\n    width: 100%;\n    background-color: var(--main-color-light);\n    padding: 8vh 0 8vh;\n}\n\n.about-container {\n    margin: auto;\n    max-width: min(1200px, 90%);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    justify-items: start;\n    align-items: center;\n    font-family: 'Montserrat', sans-serif;\n    color: var(--main-color-dark);\n}\n\n.about-title {\n    font-size: 2.4rem;\n}\n\n.skills-container > h3 {\n    font-size: 1.4rem;\n}\n\n.skill-item > img {\n    width: 2.8rem;\n    height: auto;\n}\n\n.skills-container {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n.skills-container > ul {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 30px;\n    margin: 1.4rem 0;\n}\n\n.img-container {\n    grid-column: 2 / 3;\n    grid-row: 1 / 3;\n    justify-self: center;\n    max-width: 22rem;\n}\n\n.img-container > img {\n    width: 100%;\n    height: auto;\n    border-radius: 2rem;\n    box-shadow: 0 0 20px 5px var(--secondary-color);\n}\n\n@media (max-width: 850px) {\n    .about-container {\n        grid-template-rows: 1fr 2fr;\n    }\n\n    .description-container {\n        grid-column: 1 / 3;\n        grid-row: 1 / 2;\n    }\n\n    .img-container {\n        grid-column: 2 / 3;\n        grid-row: 2 / 3;\n        max-width: 18rem;\n    }\n\n    .skills-container {\n        padding: 1rem 1.5rem 0 0;\n    }\n\n    .skill-item > img {\n        width: 2.4rem;\n    }\n}\n\n@media (max-width: 500px) {\n    .skill-item > img {\n        width: 2rem;\n    }\n}",""]);const c=o},996:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap);"]),o.push([n.id,"#contact {\n    background-color: var(--secondary-color);\n    width: 100%;\n    height: auto;\n    padding: 12vh 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    color: var(--main-color-light);\n}\n\ninput, textarea {\n    border: none;\n    border-radius: 5px;\n    background-color: var(--main-color-light);\n    opacity: 0.6;\n    font-size: 0.9rem;\n    outline: none;\n    padding: 0 10px;\n    font-family: 'Roboto Mono', monospace;\n}\n\n.contact-section-title {\n    font-size: 3rem;\n    margin: auto;\n    text-align: center;\n}\n\n.form-container {\n    margin: 2vh auto;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    width: min(600px, 95%);\n}\n\n.engage-msg {\n    align-self: center;\n}\n\n.input-container {\n    margin: 2vh 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.input-container > label {\n    align-self: flex-start;\n    width: 80%;\n    margin: 0 auto 0.6rem;\n}\n\n.input-container > input {\n    height: 35px;\n    width: 80%;\n}\n\n.input-container > span {\n    align-self: flex-start;\n    background-color: rgb(255, 162, 162);\n    color: var(--main-color-dark);\n    font-size: 0.8rem;\n    border-radius: 10px;\n    padding: 5px 10px;\n    opacity: 0.7;\n    position: absolute;\n    margin-top: 60px;\n    margin-left: min(10%, 50px);\n    display: none;\n}\n\n.input-container:last-child > span {\n    margin-top: 175px;\n}\n\n.submit-btn {\n    margin: -1rem auto 0;\n}\n\n.external-btn, .copy-btn {\n    margin: auto;\n}\n\n.submit-btn:disabled {\n    opacity: 0.5;\n    cursor: auto;\n}\n\n.submit-btn:disabled:hover {\n    background-color: var(--accent-color);\n    box-shadow: none;\n    color: var(--main-color-light);\n}\n\n#message {\n    resize: none;\n    min-height: 150px;\n    padding-top: 14px;\n    width: 80%;\n}",""]);const c=o},348:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([n.id,"footer {\n    background-color: var(--main-color-dark);\n    color: var(--main-color-light);\n    width: 100%;\n    font-family: 'Montserrat', sans-serif;\n}\n\n.footer-container {\n    height: 12vh;\n    padding: 2vh 10vw;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: .6rem;\n}\n\n.channels-title {\n    font-size: 1rem;\n    margin-bottom: 2vh;\n}\n\n.channels {\n    display: flex;\n    gap: 2.2rem;\n    font-size: 2rem;\n}\n\n.channels-container {\n    text-shadow: 1px 1px 10px var(--main-color-dark);\n}\n\n@media (max-width: 700px) {\n    .footer-container {\n        font-size: .4rem;\n    }\n\n    .channels-container {\n        top: 75vh;\n    }\n\n    .channels-title {\n        font-size: 0.8rem;\n    }\n    \n    .channels {\n        font-size: 1rem;\n    }\n}",""]);const c=o},497:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([n.id,"header {\n    background-color: var(--main-color-dark);\n    color: var(--main-color-light);\n    position: fixed;\n    width: 100%;\n    z-index: 10;\n}\n\n.navbar {\n    min-height: 8vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 120px;\n    box-shadow: 1px 1px 8px var(--highlight-color);\n    transition: all .6s;\n}\n\n.nav-menu {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 60px;\n}\n\n.branding {\n    font-size: 2.5rem;\n    font-family: 'Monofett', monospace;\n    transition: all .6s;\n}\n\n.nav-link {\n    font-family: 'Montserrat', sans-serif;\n    transition: all .6s;\n    font-size: 1rem;\n}\n\n.nav-link:hover {\n    text-shadow: 1px 1px 10px var(--highlight-color);\n}\n\n.nav-link.active {\n    color: var(--accent-color);\n}\n\n.ham-menu {\n    display: none;\n    cursor: pointer;\n}\n\n.bar {\n    display: block;\n    width: 25px;\n    height: 3px;\n    margin: 5px auto;\n    transition: all .3s ease-in-out;\n    background-color: var(--main-color-light);\n}\n\n@media (max-width: 1000px) {\n    .navbar {\n        padding: 0 60px;\n    }\n\n    .nav-menu {\n        gap: 30px;\n    }\n} \n\n@media (max-width: 700px) {\n    .navbar {\n        padding: 0 30px;\n    }\n\n    .ham-menu {\n        display: block;\n    }\n\n    .ham-menu.active .bar:nth-child(2) {\n        opacity: 0;\n    }\n\n    .ham-menu.active .bar:nth-child(1) {\n        transform: translateY(8px) rotate(45deg);\n    }\n\n    .ham-menu.active .bar:nth-child(3) {\n        transform: translateY(-8px) rotate(-45deg);\n    }\n\n    .nav-menu {\n        position: fixed;\n        top: 8vh;\n        left: -100%;\n        gap: 10px;\n        flex-direction: column;\n        background-color: var(--main-color-dark);\n        width: 100%;\n        text-align: center;\n        transition: .5s;\n\n    }\n\n    .nav-item {\n        margin: 16px 0;\n    }\n\n    .nav-menu.active {\n        left: 0;\n    }\n}",""]);const c=o},309:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([n.id,"#home {\n    height: 100vh;\n    width: 100%;\n    background-color: var(--main-color-dark);\n    color: var(--main-color-light);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Montserrat', sans-serif;\n    gap: 3rem;\n}\n\n.presentation-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    margin: 0 20vw;\n}\n\n.presentation:nth-child(2) {\n    font-size: 5.5rem;\n}\n\n.presentation:nth-child(3) {\n    font-size: 1.3rem;\n}\n\n.cta {\n    position: fixed;\n    top: 91vh;\n    cursor: pointer;\n}\n\n.know-me {\n    font-size: 0.8rem;\n    margin: 18px 0;\n    color: var(--highlight-color);\n}\n\n.arrow {\n    left: 25%;\n    display: block;\n    position: absolute;\n    height: 5px;\n    margin: 5px auto;\n    transition: all .3s ease-in-out;\n    background-color: var(--highlight-color);\n    border-radius: 10px;\n}\n\n.arrow:nth-child(1) {\n    width: 15px;\n    transform: translateX(2px) translateY(10px) rotateZ(45deg) ;\n}\n\n.arrow:nth-child(2) {\n    width: 26px;\n    transform: rotateZ(90deg);\n}\n\n.arrow:nth-child(3) {\n    width: 15px;\n    transform: translateX(9px) translateY(10px) rotateZ(-45deg);\n}\n",""]);const c=o},898:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([n.id,"#projects {\n    width: 100%;\n    height: auto;\n    background: var(--highlight-color);\n    color: var(--main-color-dark);\n    padding: 8vh 0;\n    font-family: 'Montserrat', sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4rem;\n}\n\n.project-section-title {\n    font-size: 2.5rem;\n    padding: 0 1rem;\n    text-align: center;\n}\n\n.projects-container {\n    width: min(75%, 1500px);\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.project-card {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.info-container {\n    padding: 0 3vw;\n}\n\n.project-title {\n    font-size: 1.6rem;\n}\n\n.technologies {\n    font-size: 0.8rem;\n    font-style: italic;\n}\n\n.project-description {\n    margin: 2rem 0;\n}\n\n.info-container button {\n    width: 120px;\n    height: 30px;\n    border-radius: 20px;\n    background-color: var(--accent-color);\n    transition: all .4s;\n    cursor: pointer;\n}\n\n.info-container button:hover {\n    background-color: var(--secondary-color);\n    box-shadow: 1px 1px 8px var(--main-color-dark);\n}\n\n.info-container > a:last-child {\n    margin: 0 20px;\n}\n\n.project-preview {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-preview > img {\n    width: max(75%, 320px);\n    height: auto;\n    transition: transform 0.5s;\n}\n\n.project-preview > img:hover {\n    transform: scale(1.1);\n}\n\n.github-btn {\n    font-size: 1.2rem;\n}\n\n@media (max-width: 1200px) {\n    .projects-container {\n        width: 90%;\n    }\n}\n\n@media (max-width: 850px) {\n    .project-card {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .project-preview {\n        margin-top: 5vh;\n    }\n\n    .project-preview > img {\n        width: 100%;\n        height: auto;\n    }\n\n    .info-container {\n        display: flex;\n        flex-direction: column;\n        gap: 1vh;\n    }\n\n    .info-container > a {\n        align-self: center;\n    }\n\n    .info-container > a:last-child {\n        margin: 0;\n    }\n}",""]);const c=o},890:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Monofett&family=Montserrat:wght@400;600&display=swap);"]),o.push([n.id,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    border: 0;\n    vertical-align: baseline;\n    list-style: none;\n    text-decoration: none;\n}\n\n:root {\n    --main-color-dark: #1F2421;\n    --main-color-light: #DCE1DE;\n    --secondary-color: #216869;\n    --accent-color: #49A078;\n    --highlight-color: #9CC5A1;\n}\n\na {\n    color: var(--main-color-light);\n}\n\n.button {\n    background-color: var(--accent-color);\n    width: auto;\n    height: 40px;\n    border-radius: 10px;\n    transition: all .6s;\n    color: var(--main-color-light);\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 0 1rem;\n}\n\n.button:hover {\n    background-color: var(--main-color-light);\n    box-shadow: 1px 1px 12px var(--main-color-dark);\n    color: var(--main-color-dark);\n}",""]);const c=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(o[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);a&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},o=[],c=0;c<n.length;c++){var l=n[c],s=a.base?l[0]+a.base:l[0],d=i[s]||0,p="".concat(s," ").concat(d);i[s]=d+1;var m=t(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var u=r(h,a);a.byIndex=c,e.splice(c,0,{identifier:p,updater:u,references:1})}o.push(p)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=a(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=t(i[o]);e[c].references--}for(var l=a(n,r),s=0;s<i.length;s++){var d=t(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!n;)n=a[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),r=t.n(a),i=t(569),o=t.n(i),c=t(565),l=t.n(c),s=t(216),d=t.n(s),p=t(589),m=t.n(p),h=t(890),u={};u.styleTagTransform=m(),u.setAttributes=l(),u.insert=o().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=d(),e()(h.Z,u),h.Z&&h.Z.locals&&h.Z.locals;var g=t(497),f={};f.styleTagTransform=m(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;var v=t(309),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=o().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=d(),e()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;var x=t(810),y={};y.styleTagTransform=m(),y.setAttributes=l(),y.insert=o().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=d(),e()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals;var w=t(898),E={};E.styleTagTransform=m(),E.setAttributes=l(),E.insert=o().bind(null,"head"),E.domAPI=r(),E.insertStyleElement=d(),e()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals;var C=t(996),k={};k.styleTagTransform=m(),k.setAttributes=l(),k.insert=o().bind(null,"head"),k.domAPI=r(),k.insertStyleElement=d(),e()(C.Z,k),C.Z&&C.Z.locals&&C.Z.locals;var T=t(348),j={};j.styleTagTransform=m(),j.setAttributes=l(),j.insert=o().bind(null,"head"),j.domAPI=r(),j.insertStyleElement=d(),e()(T.Z,j),T.Z&&T.Z.locals&&T.Z.locals;class N{static navbar;static branding;static navLinks=[];constructor(n){this.sections=n}createScrollspy(){window.addEventListener("scroll",(()=>{let n="";this.sections.forEach((e=>{window.scrollY>.9*e.offsetTop&&window.scrollY<1.8*e.offsetTop&&(n=e.id),window.scrollY<.9*this.sections[0].scrollHeight&&(n=this.sections[0].id)})),N.navLinks.forEach((e=>{e.getAttribute("href").slice(1)===n&&e.classList.add("active"),e.getAttribute("href").slice(1)!==n&&e.classList.remove("active")}))}))}static shrinkNavbar(){window.addEventListener("scroll",(()=>{window.scrollY>.6*document.documentElement.clientHeight?(N.navbar.style.minHeight="6vh",N.branding.style.fontSize="2rem",N.navLinks.forEach((n=>{n.style.fontSize="0.8rem"}))):(N.navbar.style.minHeight="8vh",N.branding.style.fontSize="2.5rem",N.navLinks.forEach((n=>{n.style.fontSize="1rem"})))}))}static createNavbar(){const n=document.createElement("nav"),e=document.createElement("h1"),t=document.createElement("ul");return n.className="navbar",e.className="branding",e.innerText="Geda",t.className="nav-menu",["Home","About","Projects","Contact"].forEach((n=>{const e=document.createElement("li"),a=document.createElement("a");e.className="nav-item",a.className="nav-link",a.href=`#${n.toLowerCase()}`,a.innerText=n,e.appendChild(a),t.appendChild(e),N.navLinks.push(a)})),n.appendChild(e),n.appendChild(t),n.appendChild(N.createHamburgerMenu(t,N.navLinks)),N.navbar=n,N.branding=e,N.shrinkNavbar(),n}static createHamburgerMenu(n,e){const t=document.createElement("div");t.className="ham-menu";for(let n=0;n<3;n+=1){const n=document.createElement("span");n.className="bar",t.appendChild(n)}return t.addEventListener("click",(()=>{t.classList.toggle("active"),n.classList.toggle("active")})),e.forEach((e=>{e.addEventListener("click",(()=>{t.classList.remove("active"),n.classList.remove("active")}))})),t}}const A=t.p+"pdf/resume.pdf";class M{static channels;static channelList;static createFooter(){const n=document.createElement("div");return n.className="footer-container",n.appendChild(M.createChannels()),n.appendChild(M.createCredits()),n}static createChannels(){const n=document.createElement("div"),e=document.createElement("p"),t=document.createElement("ul"),a={github:{name:"github",link:"https://github.com/gedadev",icon:'<i class="fa-brands fa-github"></i>'},linkedin:{name:"linkedin",link:"https://www.linkedin.com/in/gedabg/",icon:'<i class="fa-brands fa-linkedin"></i>'},resume:{name:"CV",link:A,icon:'<i class="fa-solid fa-file-lines"></i>'}};return n.className="channels-container",e.className="channels-title",t.className="channels",e.innerText="More about me",Object.values(a).forEach((n=>{const e=document.createElement("li"),a=document.createElement("a");a.href=n.link,a.title=n.name,a.target="_blank",e.innerHTML=n.icon,a.appendChild(e),t.appendChild(a)})),n.appendChild(e),n.appendChild(t),M.channels=n,M.channelList=t,n}static createCredits(){const n=document.createElement("div"),e=document.createElement("p");return n.className="credits-container",e.innerHTML='2023 <i class="fa-regular fa-copyright"></i> | Designed and built by Gedaias Jair',n.appendChild(e),n}}class S{static callToAction;static channels=M.createChannels();static createHomeSection(){const n=document.createElement("section");return n.id="home",n.appendChild(S.createPresentation()),n.appendChild(S.channels.children[1]),n.appendChild(S.createContactLink()),n.appendChild(S.createCTA()),n}static createContactLink(){const n=document.createElement("button"),e=document.createElement("a");return n.type="button",n.innerHTML='Email <i class="fa-solid fa-envelope"></i>',n.className="button contact-btn",e.href="#contact",e.appendChild(n),e}static createPresentation(){const n=document.createElement("div");return n.className="presentation-container",["Hi, there. I'm","Gedaias Jair","Frontend web developer"].forEach((e=>{const t=document.createElement("p");t.innerText=e,t.className="presentation",n.appendChild(t)})),n}static createCTA(){const n=document.createElement("div"),e=document.createElement("p"),t=document.createElement("div");n.className="cta",e.className="know-me",t.className="arrow-container",e.innerText="Know Me",n.appendChild(e),n.appendChild(t);for(let n=0;n<3;n+=1){const n=document.createElement("span");n.className="arrow",t.appendChild(n)}return n.addEventListener("click",(()=>{window.scrollTo(0,0)})),S.callToAction=n,S.convertCTA(),n}static convertCTA(){window.addEventListener("scroll",(()=>{window.scrollY>.08*document.documentElement.clientHeight?(S.callToAction.children[0].innerText="Go to Top",S.callToAction.children[0].style.color="var(--main-color-dark)",S.callToAction.children[1].children[0].style.transform="translateX(2px) translateY(-10px) rotateZ(-45deg)",S.callToAction.children[1].children[2].style.transform="translateX(9px) translateY(-10px) rotateZ(45deg)",S.callToAction.children[1].childNodes.forEach((n=>{n.style.backgroundColor="var(--main-color-dark)"})),S.callToAction.style.right="5vw"):(S.callToAction.children[0].innerText="Know Me",S.callToAction.children[0].style.color="var(--highlight-color)",S.callToAction.children[1].children[0].style.transform="translateX(2px) translateY(10px) rotateZ(45deg)",S.callToAction.children[1].children[2].style.transform="translateX(9px) translateY(10px) rotateZ(-45deg)",S.callToAction.children[1].childNodes.forEach((n=>{n.style.backgroundColor="var(--highlight-color)"})),S.callToAction.style.right=null)}))}}const Z=[t.p+"images/a92a549a591f4acb527a.png",t.p+"images/02d225c7df0b28341d8d.png",t.p+"images/3dfb665e058d08c99f28.png",t.p+"images/809fed23bcdd686de66e.png",t.p+"images/007e99f68b718e476aba.png",t.p+"images/4a74c490cb165b9fe2be.png",t.p+"images/c67e6b312e2fd67c0a09.png"],L=t.p+"images/6d3b7b97ca1df358da6a.png";class z{static createAboutSection(){const n=document.createElement("section"),e=document.createElement("div"),t=document.createElement("div");n.id="about",e.className="about-container",t.className="img-container";const a=new Image;return a.src=L,t.appendChild(a),e.appendChild(z.createDescription()),e.appendChild(t),e.appendChild(z.createSkills()),n.appendChild(e),n}static createDescription(){const n=document.createElement("div"),e=document.createElement("h2"),t=document.createElement("p");return n.className="description-container",e.className="about-title",t.className="about-description",e.innerText="About Me",t.innerText="As a software engineer I find in web development an excellent field where I can apply my skills building software, motivated by a life long learning philosophy. I enjoy transforming ideas into code. ",n.appendChild(e),n.appendChild(t),n}static createSkills(){const n=document.createElement("div"),e=document.createElement("h3"),t=document.createElement("ul");return n.className="skills-container",e.innerText="Technologies I work with:",Z.forEach((n=>{const e=document.createElement("li"),a=new Image;e.className="skill-item",a.src=n,e.appendChild(a),t.appendChild(e)})),n.appendChild(e),n.appendChild(t),n}}const I=t.p+"images/11589a878e303c082a7e.png",H=t.p+"images/9f8c4c74881d0f1ed6a0.png",P={onlineStore:{title:"Online Store",technologies:"html, css, react",description:"An online store with a shopping cart created with react and the fakeStore API. This is the final project of the react course of The Odin Project, in which I applied several key concepts I learned in the course.",repo:"https://github.com/gedadev/shopping-cart",url:"https://shopping-cart-9kh.pages.dev",preview:t.p+"images/7c3cbf1bd8134ba3204e.png"},weatherReportReact:{title:"Weather Report App React Version",technologies:"react, css",description:"This react application shows the weather in your current location if you allow the location permission on your browser, otherwise you can write a city on the search box to get the forecast",repo:"https://github.com/gedadev/weather-app",url:"https://weather-app-er8.pages.dev/",preview:t.p+"images/ce58fdf5feb6b3ccccb3.png"},weatherReportJS:{title:"Weather Report App",technologies:"html, css, javascript, webpack",description:"This app allows you to search a city an get the details of the current weather conditions with the OpenWeather API data. If you allow the site to know your location, you can see the weather conditions in your city. It also shows the weather of the next days and the data can be displayed in metric or imperial units",repo:"https://github.com/gedadev/weatherReport",url:"https://gedadev.github.io/weatherReport/",preview:H},battleship:{title:"Battleship",technologies:"html, css, javascript, webpack",description:"The classic game Battleship, each player takes 5 ships placed randomly in the board and takes turns to perform a hit in the opponent’s board. The game finish when a player runs out of ships.",repo:"https://github.com/gedadev/battleship/",url:"https://gedadev.github.io/battleship/",preview:I}};class Y{static createProjectsSection(){const n=document.createElement("section"),e=document.createElement("h2"),t=document.createElement("button"),a=document.createElement("a");return n.id="projects",e.className="project-section-title",e.innerText="My recent projects",t.className="button github-btn",t.innerHTML='More on my github profile <i class="fa-brands fa-github"></i>',a.href="https://github.com/gedadev",a.appendChild(t),a.target="_blank",n.appendChild(e),n.appendChild(Y.createProjectCards()),n.appendChild(a),n}static createProjectCards(){const n=document.createElement("div");return n.className="projects-container",Object.values(P).forEach((e=>{const t=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),i=document.createElement("button"),o=document.createElement("button"),c=new Image,l={title:document.createElement("h3"),technologies:document.createElement("p"),description:document.createElement("p"),repo:document.createElement("a"),url:document.createElement("a")};t.className="project-card",a.className="info-container",l.title.className="project-title",l.technologies.className="technologies",l.description.className="project-description",i.className="project-repo",o.className="project-url",r.className="project-preview",l.title.innerText=e.title,l.technologies.innerText=`Technologies: ${e.technologies}`,l.description.innerText=e.description,l.repo.href=e.repo,l.repo.target="_blank",i.innerHTML='Code <i class="fa-brands fa-github"></i>',l.repo.appendChild(i),l.url.href=e.url,l.url.target="_blank",o.innerHTML='Website <i class="fa-solid fa-up-right-from-square"></i>',l.url.appendChild(o),Object.values(l).forEach((n=>{a.appendChild(n)})),c.src=e.preview,r.appendChild(c),t.appendChild(a),t.appendChild(r),n.appendChild(t)})),n}}class O{static formValidations(n,e){n.forEach((t=>{t.input.addEventListener("input",(()=>{t.input.validity.valid?t.errorMsg.style.display="none":O.validateInput(t.input,t.errorMsg),e.disabled=!O.enableButton(n)}))}))}static validateInput(n,e){n.validity.valueMissing&&(e.innerText="You must fill this field to continue",e.style.display="inline")}static enableButton(n){for(let e=0;e<n.length;e+=1)if(!n[e].input.validity.valid)return!1;return!0}static createContactSection(){const n=document.createElement("section"),e=document.createElement("h2");return n.id="contact",e.className="contact-section-title",e.innerText="Ready to collaborate?",n.appendChild(e),n.appendChild(O.createForm()),n}static createForm(){const n=document.createElement("div"),e=document.createElement("p"),t=document.createElement("form"),a=document.createElement("button"),r=document.createElement("button"),i=document.createElement("button"),o={name:{label:document.createElement("label"),input:document.createElement("input"),errorMsg:document.createElement("span")},email:{label:document.createElement("label"),input:document.createElement("input"),errorMsg:document.createElement("span")},message:{label:document.createElement("label"),input:document.createElement("textarea"),errorMsg:document.createElement("span")}};return n.className="form-container",e.className="engage-msg",e.innerText="Leave me a message, and we can talk:",t.id="contact-form",t.noValidate=!0,t.action="https://formspree.io/f/xbjnggbv",t.method="POST",o.name.input.type="text",o.name.input.placeholder="John Doe",o.email.input.type="email",o.email.input.placeholder="jdoe@domain.com",o.message.input.placeholder="Start typing...",a.className="button submit-btn",a.type="submit",a.innerHTML='Send <i class="fa-solid fa-share-from-square"></i>',a.setAttribute("form","contact-form"),a.disabled=!0,r.innerHTML='Compose on your app <i class="fa-solid fa-pen-to-square"></i>',r.className="button external-btn",r.addEventListener("click",(()=>{window.location.href="mailto:gedaias@geda.dev?subject=Contact from geda.dev"})),i.innerHTML='Copy email to clipboard <i class="fa-solid fa-copy"></i>',i.className="button copy-btn",i.addEventListener("click",(()=>{navigator.clipboard.writeText("gedaias@geda.dev"),i.innerHTML='Email copied successfully <i class="fa-solid fa-check"></i>'})),Object.entries(o).forEach((n=>{const[e,a]=n,r=document.createElement("div");r.className="input-container",a.label.innerText=`Your ${e}: (*)`,a.label.htmlFor=e,a.input.id=e,a.input.setAttribute("autocomplete","off"),a.input.required=!0,a.input.name=e,r.appendChild(a.label),r.appendChild(a.input),r.appendChild(a.errorMsg),t.appendChild(r)})),n.appendChild(e),n.appendChild(t),n.appendChild(a),n.appendChild(r),n.appendChild(i),O.formValidations(Object.values(o),a),n}}const R=document.querySelector("header"),F=document.querySelector("main"),q=document.querySelector("footer");R.appendChild(N.createNavbar()),F.appendChild(S.createHomeSection()),F.appendChild(z.createAboutSection()),F.appendChild(Y.createProjectsSection()),F.appendChild(O.createContactSection()),q.appendChild(M.createFooter()),new N(F.childNodes).createScrollspy()})()})();