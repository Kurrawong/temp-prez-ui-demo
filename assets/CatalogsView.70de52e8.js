import{d as B,i as N,u as S,k as x,r as y,j as z,o as R,a as s,c,b as d,e as o,f as U,F as u,l as v,t as V,g as D,D as F,m as I}from"./index.9cc2b5a6.js";import{I as P}from"./ItemList.7338fdd7.js";const w=d("h1",null,"Catalogs",-1),E=d("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis in libero qui earum rem facilis optio culpa nobis magnam commodi. Sunt aspernatur obcaecati eos expedita aperiam magnam ipsum incidunt impedit?",-1),O=B({__name:"CatalogsView",setup(L){const{namedNode:r}=F,_=N("config").apiBaseUrl,m=I(),i=S(),{store:l,prefixes:G,parseIntoStore:k,qname:e}=x(),p=y([]),{data:f,profiles:h,loading:C,error:g,doRequest:j}=z();return R(()=>{j(`${_}/c/catalogs`,()=>{k(f.value);const b=l.value.getSubjects(r(e("a")),r(e("rdf:bag")))[0];l.value.forObjects(n=>{let t={iri:n.id};l.value.forEach(a=>{a.predicate.value===e("dcterms:title")?t.title=a.object.value:a.predicate.value===e("dcterms:description")?t.description=a.object.value:a.predicate.value===e("prez:link")&&(t.link=a.object.value)},n,null,null),p.value.push(t)},b,r(e("rdfs:member")))}),i.rightNavConfig={enabled:!0,profiles:h,currentUrl:m.path},document.title="Catalogs | Prez",i.pageHeading={name:"CatPrez",url:"/c"},i.breadcrumbs=[{name:"CatPrez",url:"/c"},{name:"Catalogs",url:m.path}]}),(b,n)=>(s(),c(u,null,[w,E,d("div",null,[o(f)?(s(),U(P,{key:0,items:p.value},null,8,["items"])):o(C)?(s(),c(u,{key:1},[v("loading...")],64)):o(g)?(s(),c(u,{key:2},[v("Network error: "+V(o(g)),1)],64)):D("",!0)])],64))}});export{O as default};
