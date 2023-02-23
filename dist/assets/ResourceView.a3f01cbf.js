import{d as w,i as B,u as N,k as P,j as S,r as h,o as $,a as r,c as o,b as d,t as l,l as m,g as _,f as U,e as n,F as g,D as V,m as z}from"./index.dba00b98.js";import{P as D}from"./PropTable.ffd00c30.js";const F=["href"],E={key:0},M=w({__name:"ResourceView",setup(T){const{namedNode:f}=V,b=B("config").apiBaseUrl,a=z(),c=N(),{store:u,prefixes:k,parseIntoStore:y,qname:s}=P(),{data:x,profiles:C,loading:I,error:v,doRequest:R}=S(),j=["http://www.w3.org/1999/02/22-rdf-syntax-ns#type","http://purl.org/dc/terms/identifier","http://purl.org/dc/terms/description","http://purl.org/dc/terms/title"],i=h([]),e=h({});return $(()=>{R(`${b}/c/catalogs/${a.params.catalogId}/${a.params.resourceId}`,()=>{y(x.value);const p=u.value.getSubjects(f(s("a")),f(s("dcat:Resource")))[0];e.value.iri=p.id,u.value.forEach(t=>{t.predicate.value===s("dcterms:title")?e.value.title=t.object.value:t.predicate.value===s("dcterms:description")&&(e.value.description=t.object.value),t.predicate.annotations=u.value.getQuads(t.predicate,null,null),i.value.push(t)},p,null,null),c.rightNavConfig={enabled:!0,profiles:C,currentUrl:a.path},document.title=`${e.value.title} | Prez`,c.pageHeading={name:"CatPrez",url:"/c"},c.breadcrumbs=[{name:"CatPrez",url:"/c"},{name:"Catalogs",url:"/c/catalogs"},{name:"Catalog",url:`/c/catalogs/${a.params.catalogId}`},{name:e.value.title,url:a.path}]})}),(p,t)=>(r(),o(g,null,[d("h1",null,l(e.value.title),1),d("p",null,[m("Instance IRI: "),d("a",{href:e.value.iri,target:"_blank",rel:"noopener noreferrer"},l(e.value.iri),9,F)]),e.value.description?(r(),o("p",E,l(e.value.description),1)):_("",!0),i.value.length>0?(r(),U(D,{key:1,properties:i.value,prefixes:n(k),hiddenPreds:j},null,8,["properties","prefixes"])):n(I)?(r(),o(g,{key:2},[m("loading...")],64)):n(v)?(r(),o(g,{key:3},[m("Network error: "+l(n(v)),1)],64)):_("",!0)],64))}});export{M as default};