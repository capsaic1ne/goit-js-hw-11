import{S as p,a as f,i as n}from"./assets/vendor-DOXgIUil.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const r=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:m,downloads:d})=>`
        <li class="gallery-item">
        <a href="${o}">
          <img class="gallery-img" src="${s}" alt="${e}" />
        </a>
          <ul class="stat-list">
            <li class="stat-item">
              <span class="stat-title">Likes</span>${t}
            </li>
            <li class="stat-item">
              <span class="stat-title">Views</span>${i}
            </li>
            <li class="stat-item">
              <span class="stat-title">Comments</span>${m}
            </li>
            <li class="stat-item">
              <span class="stat-title">Downloads</span>${d}
            </li>
          </ul>
        </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function h(){l.innerHTML=""}function L(){c.classList.remove("hidden")}function b(){c.classList.add("hidden")}function S(a){return f("https://pixabay.com/api/",{params:{key:"52399485-abaa9cbef55c5a94206dd148e",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const u=document.querySelector(".form"),q=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async a=>{a.preventDefault();const r=q.value.trim();if(r===""){n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}h(),L();try{const s=await S(r);if(!s.hits.length){n.error({title:"Sorry",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3});return}g(s.hits)}catch(s){n.error({title:"Error",message:"Something went wrong! Please try again later.",position:"topRight"}),console.error(s)}finally{b()}});
//# sourceMappingURL=index.js.map
