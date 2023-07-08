(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();let a=document.querySelector("#list-container"),u=document.querySelector("#languages"),m=document.querySelector("#framework"),f=document.querySelector("#tools"),b=[u,m,f],E=["javascript (es6)","python","php"],S=["react js","bootstrap","tailwind","nodejs","framer motion","gsap"],C=["vscode","npm","git","vite","cli"];u.addEventListener("click",()=>{g(u),a.innerHTML="",E.forEach((t,e)=>{e++,p(t,e)})});m.addEventListener("click",()=>{g(m),a.innerHTML="",S.forEach((t,e)=>{e++,p(t,e)})});f.addEventListener("click",()=>{g(f),a.innerHTML="",C.forEach((t,e)=>{e++,p(t,e)})});function g(t){b.forEach(e=>{e.classList.contains("border-lightblue")&&(e.classList.remove("border-lightblue"),e.classList.remove("border")),e.classList.contains("border-transparent")&&(e.classList.remove("border-transparent"),e.classList.remove("border"))}),t.classList.add("border"),t.classList.add("border-lightblue")}function p(t,e){let r="my-2 group text-center flex gap-5".split(" "),o="p-3 group-hover:text-lightblue".split(" "),s=document.createElement("li"),l=document.createElement("p"),c=j(t);T(s,e),l.textContent=t,r.forEach(d=>s.classList.add(d)),o.forEach(d=>l.classList.add(d)),s.appendChild(c),s.appendChild(l),a.appendChild(s)}function j(t){let e="m-2 w-8".split(" "),r=document.createElement("img");return r.src=`/assets/${t}-icon.png`,r.alt="text icon",e.forEach(o=>r.classList.add(o)),r}function T(t,e){gsap.fromTo(t,{opacity:0},{opacity:1,duration:1,delay:e/10})}(function(){emailjs.init("rSr6_y6MNtLHljZFZ")})();let y=document.querySelector("#contact-form"),n=document.querySelector("#submit-btn"),i=document.querySelector("#success-div"),v=document.querySelector("#success-div > p"),h={serviceId:"service_04fwch8",templateId:"template_ya7yofa",publicKey:"rSr6_y6MNtLHljZFZ"};function q(t){t.preventDefault();let{formObj:e,Isvalid:r}=O(y);r||L("Form inputs not valid!!"),r==!0&&Object.keys(e).length!=0&&emailjs.send(h.serviceId,h.templateId,e).then(function(o){console.log("SUCCESS!",o.status,o.text),I()},function(o){L("Error sending the message"),console.log("FAILED...",o)})}function I(){let t;v.textContent="Message Sent",n.classList.toggle("hidden"),i.classList.toggle("hidden"),t=setTimeout(()=>{y.reset(),n.classList.toggle("hidden"),i.classList.toggle("hidden"),clearTimeout(t)},5e3)}function L(t){let e;v.textContent=t,n.classList.toggle("hidden"),i.classList.toggle("hidden"),i.classList.replace("text-blue","text-coral"),e=setTimeout(()=>{n.classList.toggle("hidden"),i.classList.toggle("hidden"),i.classList.replace("text-coral","text-blue"),clearTimeout(e)},5e3)}function O(t){let e=!0,r={};return[...t].forEach(o=>{o.value==""&&o.id!=="submit-btn"&&(o.classList.toggle("border-coral"),e=!1)}),[...t].forEach(o=>{if(o.id!=="submit-btn"){let s=o.value.trim();r[o.name]=s}}),console.log({formObj:r,Isvalid:e}),{formObj:r,Isvalid:e}}n.addEventListener("click",q);
