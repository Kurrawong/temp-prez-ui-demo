import{d as z,i as U,u as D,k as E,j as F,r as b,o as L,a as o,c as i,b as s,t as u,l as p,g as w,f as x,w as y,e as v,F as _,D as $,m as H,n as T,z as G,p as M,h as O,_ as Q}from"./index.9979b90b.js";import{P as A}from"./PropTable.da6ffa9f.js";const J=c=>(M("data-v-65510d82"),c=c(),O(),c),K=["href"],W={key:0},X=J(()=>s("th",null,"Has Part",-1)),Y={class:"resource-list"},Z=z({__name:"CatalogView",setup(c){const{namedNode:d}=$,j=U("config").apiBaseUrl,f=H(),m=D(),{store:l,prefixes:I,parseIntoStore:P,qname:r}=E(),{data:S,profiles:R,loading:B,error:k,doRequest:N}=F(),V=["http://www.w3.org/1999/02/22-rdf-syntax-ns#type","http://purl.org/dc/terms/identifier","http://purl.org/dc/terms/description","http://purl.org/dc/terms/title"],g=b([]),e=b({}),C=b([]);return L(()=>{N(`${j}/c/catalogs/${f.params.catalogId}`,()=>{P(S.value);const h=l.value.getSubjects(d(r("a")),d(r("dcat:Catalog")))[0];e.value.iri=h.id,l.value.forEach(t=>{t.predicate.value===r("dcterms:title")?e.value.title=t.object.value:t.predicate.value===r("dcterms:description")&&(e.value.description=t.object.value),t.predicate.annotations=l.value.getQuads(t.predicate,null,null),g.value.push(t)},h,null,null),l.value.forObjects(t=>{let n={iri:t.id};l.value.forEach(a=>{a.predicate.value===r("rdfs:label")?n.title=a.object.value:a.predicate.value===r("prez:link")&&(n.link=a.object.value)},t,null,null),C.value.push(n)},d(e.value.iri),d(r("dcterms:hasPart"))),m.rightNavConfig={enabled:!0,profiles:R,currentUrl:f.path},document.title=`${e.value.title} | Prez`,m.pageHeading={name:"CatPrez",url:"/c"},m.breadcrumbs=[{name:"CatPrez",url:"/c"},{name:"Catalogs",url:"/c/catalogs"},{name:e.value.title,url:f.path}]})}),(h,t)=>{const n=G("RouterLink");return o(),i(_,null,[s("h1",null,u(e.value.title),1),s("p",null,[p("Instance IRI: "),s("a",{href:e.value.iri,target:"_blank",rel:"noopener noreferrer"},u(e.value.iri),9,K)]),e.value.description?(o(),i("p",W,u(e.value.description),1)):w("",!0),g.value.length>0?(o(),x(A,{key:1,properties:g.value,prefixes:v(I),hiddenPreds:V},{bottom:y(()=>[s("tr",null,[X,s("td",null,[s("div",Y,[(o(!0),i(_,null,T(C.value,a=>(o(),x(n,{to:a.link||""},{default:y(()=>[p(u(a.title?a.title:a.iri),1)]),_:2},1032,["to"]))),256))])])])]),_:1},8,["properties","prefixes"])):v(B)?(o(),i(_,{key:2},[p("loading...")],64)):v(k)?(o(),i(_,{key:3},[p("Network error: "+u(v(k)),1)],64)):w("",!0)],64)}}});const te=Q(Z,[["__scopeId","data-v-65510d82"]]);export{te as default};
