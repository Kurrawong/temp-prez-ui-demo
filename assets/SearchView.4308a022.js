import{d as l,u as p,i as u,o as h,a,c as s,b as e,e as i,g as r,F as m,p as _,h as f,J as d,_ as v}from"./index.bc5573fc.js";const o=t=>(_("data-v-f1073703"),t=t(),f(),t),S=o(()=>e("h1",null,"Search",-1)),b=o(()=>e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore earum, vero corporis saepe iste, minus blanditiis tenetur amet corrupti id perferendis quos nisi est ducimus magnam voluptates repellat delectus!",-1)),y={id:"search-container"},g={key:0,class:"search-type"},x=o(()=>e("h2",null,"Catalogue Search",-1)),z=o(()=>e("form",{action:""},[e("div",{class:"search-form"},[e("input",{type:"text",name:"",id:"",placeholder:"Enter search term..."}),e("button",{class:"btn",type:"submit"},"Search")])],-1)),P=[x,z],V={key:1,class:"search-type"},C=d('<h2 data-v-f1073703>Feature Search</h2><form action="" data-v-f1073703><div class="search-form" data-v-f1073703><input type="text" name="" id="" placeholder="Enter search term..." data-v-f1073703><input type="text" name="" id="" placeholder="Enter search term..." data-v-f1073703><select name="" id="" multiple data-v-f1073703><option value="" data-v-f1073703>Something</option></select><select name="" id="" multiple data-v-f1073703><option value="" data-v-f1073703>Something</option></select><textarea name="" id="" cols="30" rows="10" data-v-f1073703></textarea><button class="btn" type="submit" data-v-f1073703>Search</button></div></form>',2),k=[C],w={key:2,class:"search-type"},E=d('<h2 data-v-f1073703>Concept Search</h2><form action="" data-v-f1073703><div class="search-form" data-v-f1073703><input type="text" name="" id="" placeholder="Enter search term..." data-v-f1073703><select name="" id="" multiple data-v-f1073703><option value="" data-v-f1073703>Something</option></select><button class="btn" type="submit" data-v-f1073703>Search</button></div></form>',2),N=[E],I=l({__name:"SearchView",setup(t){const c=p(),n=u("config").enabledPrezs;return h(()=>{c.rightNavConfig={enabled:!1},document.title="Search | Prez",c.pageHeading={name:"Prez",url:"/"},c.breadcrumbs=[{name:"Search",url:"/search"}]}),(B,F)=>(a(),s(m,null,[S,b,e("div",y,[i(n).includes("CatPrez")?(a(),s("div",g,P)):r("",!0),i(n).includes("SpacePrez")?(a(),s("div",V,k)):r("",!0),i(n).includes("VocPrez")?(a(),s("div",w,N)):r("",!0)])],64))}});const q=v(I,[["__scopeId","data-v-f1073703"]]);export{q as default};