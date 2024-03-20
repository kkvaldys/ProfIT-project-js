import{A as f,S as v,i as y,a as b}from"./assets/vendor-7e083a22.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const w=document.querySelector(".mobile-open-btn");let u=document.querySelector(".mobile-menu");w.addEventListener("click",()=>{u.classList.add("is-open")});const g=document.querySelector(".mobile-close-btn");g.addEventListener("click",()=>{u.classList.remove("is-open")});const L=document.querySelector(".toggle-menu");L.addEventListener("click",()=>{document.querySelector(".menu-list").classList.toggle("active")});const E=document.querySelector(".mobile-order-btn");E.addEventListener("click",()=>{u.classList.remove("is-open")});const k=document.querySelectorAll(".mobile-menu-list-link");for(const e of k)e.addEventListener("click",()=>{u.classList.remove("is-open")});const h=new f(".about-accordion",{onOpen:e=>{e.querySelector(".svg-btn").classList.toggle("clicked")},onclose:e=>{e.querySelector(".svg-btn").classList.toggle("clicked")}});h.open(0);document.addEventListener("DOMContentLoaded",function(){const e=new v(".about-scroll",{navigation:{nextEl:".about-btn-left"},loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{click:function(){this.isEnd&&this.slideTo(0)}}});let t=null;e.on("slideChange",function(){t&&(t.style.backgroundColor="");const r=e.slides[e.activeIndex];r.style.backgroundColor="#ed3b44",r.style.borderRadius="50%",t=r})});document.addEventListener("DOMContentLoaded",function(){const e={active:{stroke:"#fafafa",border:"rgba(250, 250, 250, 0.5)"},inactive:{stroke:"#3B3B3B",border:"rgba(250, 250, 250, 0.2)"}},t=document.querySelector(".swiper-but-prev"),r=document.querySelector(".swiper-but-next");t.disabled=!0,r.disabled=!1;const n=new v(".projects-container-swiper",{navigation:{nextEl:".swiper-but-next",prevEl:".swiper-but-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,spaceBetween:30,speed:800,effect:"cube",cubeEffect:{}});s(),document.addEventListener("keydown",function(c){c.key==="ArrowLeft"?n.slidePrev():c.key==="ArrowRight"&&n.slideNext()}),document.addEventListener("wheel",function(c){c.deltaY>0?n.slideNext():c.deltaY<0&&n.slidePrev()});function s(){n.isBeginning?(i(t),a(r)):n.isEnd?(a(t),i(r)):(a(t),a(r))}function i(c){c.disabled=!0,c.style.borderColor=e.inactive.border,c.querySelector("svg").style.stroke=e.inactive.stroke}function a(c){c.disabled=!1,c.style.borderColor=e.active.border,c.querySelector("svg").style.stroke=e.active.stroke}n.on("slideChange",function(){s(),n.isBeginning?(t.style.borderColor=e.inactive.border,t.querySelector("svg").style.stroke=e.inactive.stroke,r.style.borderColor=e.active.border,r.querySelector("svg").style.stroke=e.active.stroke):n.isEnd?(t.style.borderColor=e.active.border,t.querySelector("svg").style.stroke=e.active.stroke,r.style.borderColor=e.inactive.border,r.querySelector("svg").style.stroke=e.inactive.stroke):(t.style.borderColor=e.active.border,t.querySelector("svg").style.stroke=e.active.stroke,r.style.borderColor=e.active.border,r.querySelector("svg").style.stroke=e.active.stroke)})});new f(".faq-accordion",{duration:400,showMultiple:!0,onOpen:function(e){console.log(e)}});async function S(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Failed to fetch reviews");const t=await e.json();return console.log(t),t}catch(e){return console.log(e.message),e}}async function q(){const e=document.querySelector(".swiper-wrapper-reviews");try{const t=await S();console.log(t),t.forEach(n=>{const s=document.createElement("li");s.className="swiper-slide swiper-slide-reviews",s.innerHTML=`
        <div><img class="reviews-image" src="${n.avatar_url}" alt="${n.avatar_url}"></div>
        <h3 class="reviews-name">${n.author}</h3>
        <p class="reviews-text">${n.review}</p>
      `,e.appendChild(s)});const r=new v(".swiper",{slidesPerView:1,spaceBetween:16,loop:!1,breakpoints:{1:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".swiper-button-next-reviews",prevEl:".swiper-button-prev-reviews"},keyboard:{enabled:!0},direction:"horizontal"})}catch(t){y.error({title:"Error",message:"Sorry, no reviews found. Please, try again!",maxWidth:300,progressBar:!0,progressBarEasing:!1,position:"bottomRight",color:"#1c1d20",backgroundColor:"#ed3b44"});const r=document.createElement("div");r.innerHTML='<p class="error-message-reviews">Not found</p>',e.appendChild(r);const n=document.querySelector(".swiper-button-prev-reviews"),s=document.querySelector(".swiper-button-next-reviews");n.style.display="none",s.style.display="none",console.error(t.message)}}q();const o=document.querySelector('input[name="email"]'),l=document.querySelector('input[name="comments"]');let p=0,m=0;function B(){o.checkValidity()?(o.parentElement.classList.remove("invalid"),o.parentElement.classList.add("succes")):(o.parentElement.classList.add("invalid"),o.parentElement.classList.remove("succes")),o.value===""&&(o.parentElement.classList.remove("invalid"),o.parentElement.classList.remove("succes"))}o.addEventListener("focus",()=>{o.parentElement.classList.add("active"),p=1});o.addEventListener("blur",()=>{o.parentElement.classList.remove("active"),p=0});o.addEventListener("mouseenter",()=>o.parentElement.classList.add("active"));o.addEventListener("mouseleave",()=>{p===0&&o.parentElement.classList.remove("active")});l.addEventListener("focus",()=>{l.parentElement.classList.add("active"),m=1});l.addEventListener("blur",()=>{l.parentElement.classList.remove("active"),m=0});l.addEventListener("mouseenter",()=>l.parentElement.classList.add("active"));l.addEventListener("mouseleave",()=>{m===0&&l.parentElement.classList.remove("active")});o.addEventListener("input",B);const C=document.querySelector(".footer-form-button"),d=document.querySelector(".modal-backdrop");C.addEventListener("click",P);async function P(e){e.preventDefault();const t={email:o.value,comment:l.value};o.checkValidity()?(b.post("https://portfolio-js.b.goit.study/api-docs",t).then(r=>{d.classList.remove("visually-hidden")}).catch(r=>{alert(r)}),o.value="",l.value="",o.parentElement.classList.remove("succes")):alert("Invalid data, try again!")}const x=document.querySelector(".modal-button");x.addEventListener("click",()=>d.classList.add("visually-hidden"));d.addEventListener("click",()=>{event.target===d&&d.classList.add("visually-hidden")});document.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.add("visually-hidden")});
//# sourceMappingURL=commonHelpers.js.map
