import{d as x,i as N,u as S,k as j,j as B,r as _,o as P,a as r,c as l,b as c,t as n,l as u,g as I,f as D,e as i,F as f,D as R,m as U}from"./index.9979b90b.js";import{P as V}from"./PropTable.da6ffa9f.js";const z=["href"],E=c("i",{class:"fa-regular fa-arrow-up-right-from-square"},null,-1),T={key:0},Q=x({__name:"FeatureView",setup(G){const{namedNode:g}=R,b=N("config").apiBaseUrl,e=U(),s=S(),{store:d,prefixes:$,parseIntoStore:k,qname:o}=j(),{data:C,profiles:v,loading:y,error:h,doRequest:F}=B(),w=["http://www.w3.org/1999/02/22-rdf-syntax-ns#type","http://purl.org/dc/terms/identifier","http://purl.org/dc/terms/description","http://purl.org/dc/terms/title"],p=_([]),t=_({});return P(()=>{F(`${b}/s/datasets/${e.params.datasetId}/collections/${e.params.featureCollectionId}/items/${e.params.featureId}`,()=>{k(C.value);const m=d.value.getSubjects(g(o("a")),g(o("geo:Feature")))[0];t.value.iri=m.id,d.value.forEach(a=>{a.predicate.value===o("dcterms:title")?t.value.title=a.object.value:a.predicate.value===o("dcterms:description")&&(t.value.description=a.object.value),a.predicate.annotations=d.value.getQuads(a.predicate,null,null),p.value.push(a)},m,null,null),s.rightNavConfig={enabled:!0,profiles:v,currentUrl:e.path},document.title=`${t.value.title} | Prez`,s.pageHeading={name:"SpacePrez",url:"/s"},s.breadcrumbs=[{name:"SpacePrez",url:"/s"},{name:"Datasets",url:"/s/datasets"},{name:"Dataset",url:`/s/datasets/${e.params.datasetId}`},{name:"Feature Collections",url:`/s/datasets/${e.params.datasetId}/collections`},{name:"Feature Collection",url:`/s/datasets/${e.params.datasetId}/collections/${e.params.featureCollectionId}`},{name:"Features",url:`/s/datasets/${e.params.datasetId}/collections/${e.params.featureCollectionId}/items`},{name:t.value.title,url:e.path}]}),s.rightNavConfig={enabled:!0,profiles:v,currentUrl:e.path}}),(m,a)=>(r(),l(f,null,[c("h1",null,n(t.value.title),1),c("p",null,[u("Instance IRI: "),c("a",{href:t.value.iri,target:"_blank",rel:"noopener noreferrer"},[u(n(t.value.iri)+" ",1),E],8,z)]),t.value.description?(r(),l("p",T,n(t.value.description),1)):I("",!0),p.value.length>0?(r(),D(V,{key:1,properties:p.value,prefixes:i($),hiddenPreds:w},null,8,["properties","prefixes"])):i(y)?(r(),l(f,{key:2},[u("loading...")],64)):i(h)?(r(),l(f,{key:3},[u("Network error: "+n(i(h)),1)],64)):I("",!0)],64))}});export{Q as default};
