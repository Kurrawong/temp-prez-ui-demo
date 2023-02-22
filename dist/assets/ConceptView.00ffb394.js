import{d as E,i as O,u as U,k as F,j as T,r as f,o as G,a,c as u,b as l,t as c,l as d,g as b,f as I,w as C,e as _,F as k,D as H,m as M,B as S,n as Q,p as A,h as J,_ as K}from"./index.9979b90b.js";import{P as W}from"./PropTable.da6ffa9f.js";const V=h=>(A("data-v-33b0b755"),h=h(),J(),h),X=["href"],Y=V(()=>l("i",{class:"fa-regular fa-arrow-up-right-from-square"},null,-1)),Z={key:0},q={key:0},ee=V(()=>l("th",null,"Broader",-1)),te={key:1},re=V(()=>l("th",null,"Narrower",-1)),ae={class:"narrower-list"},oe=E({__name:"ConceptView",setup(h){const{namedNode:i}=H,x=O("config").apiBaseUrl,p=M(),g=U(),{store:n,prefixes:N,parseIntoStore:R,qname:r}=F(),{data:L,profiles:P,loading:z,error:B,doRequest:D}=T(),$=["http://www.w3.org/1999/02/22-rdf-syntax-ns#type","http://purl.org/dc/terms/identifier","http://www.w3.org/2004/02/skos/core#definition","http://www.w3.org/2004/02/skos/core#prefLabel","http://www.w3.org/2004/02/skos/core#broader","http://www.w3.org/2004/02/skos/core#narrower","http://www.w3.org/2004/02/skos/core#inScheme","http://www.w3.org/2004/02/skos/core#topConceptOf","http://www.w3.org/2000/01/rdf-schema#isDefinedBy"],m=f([]),t=f({iri:"",title:"",description:""});f({});const o=f({}),j=f([]);return G(()=>{D(`${x}/v/vocab/${p.params.vocabId}/${p.params.conceptId}`,()=>{R(L.value);const v=n.value.getSubjects(i(r("a")),i(r("skos:Concept")))[0];t.value.iri=v.id,n.value.forEach(e=>{e.predicate.value===r("skos:prefLabel")?t.value.title=e.object.value:(e.predicate.value===r("skos:definition")||e.predicate.value===r("skos:definition"))&&(t.value.description=e.object.value),e.predicate.annotations=n.value.getQuads(e.predicate,null,null),m.value.push(e)},v,null,null);const y=n.value.getObjects(i(t.value.iri),i(r("skos:broader")));if(y.length===1){let e={iri:y[0].id};n.value.forEach(s=>{s.predicate.value===r("rdfs:label")?e.title=s.object.value:s.predicate.value===r("prez:link")&&(e.link=s.object.value)},i(e.iri),null,null),o.value=e}n.value.forObjects(e=>{let s={iri:e.id};n.value.forEach(w=>{w.predicate.value===r("rdfs:label")?s.title=w.object.value:w.predicate.value===r("prez:link")&&(s.link=w.object.value)},e,null,null),j.value.push(s)},i(t.value.iri),i(r("skos:narrower"))),g.rightNavConfig={enabled:!0,profiles:P,currentUrl:p.path},document.title=`${t.value.title} | Prez`,g.pageHeading={name:"VocPrez",url:"/v"},g.breadcrumbs=[{name:"VocPrez",url:"/v"},{name:"Vocabs",url:"/v/vocab"},{name:"Vocab",url:`/v/vocab/${p.params.vocabId}`},{name:t.value.title,url:p.path}]})}),(v,y)=>(a(),u(k,null,[l("h1",null,c(t.value.title),1),l("p",null,[d("Instance IRI: "),l("a",{href:t.value.iri,target:"_blank",rel:"noopener noreferrer"},[d(c(t.value.iri)+" ",1),Y],8,X)]),t.value.description?(a(),u("p",Z,c(t.value.description),1)):b("",!0),m.value.length>0?(a(),I(W,{key:1,properties:m.value,prefixes:_(N),hiddenPreds:$},{bottom:C(()=>[o.value.iri?(a(),u("tr",q,[ee,l("td",null,[(a(),I(S(o.value.link?v.RouterLink:"a"),{to:o.value.link||"",href:o.value.link?"":o.value.iri,target:o.value.link?"":"_blank"},{default:C(()=>[d(c(o.value.title||o.value.iri),1)]),_:1},8,["to","href","target"]))])])):b("",!0),j.value.length>0?(a(),u("tr",te,[re,l("td",null,[l("div",ae,[(a(!0),u(k,null,Q(j.value,e=>(a(),I(S(e.link?v.RouterLink:"a"),{to:e.link||"",href:e.link?"":e.iri,target:e.link?"":"_blank"},{default:C(()=>[d(c(e.title||e.iri),1)]),_:2},1032,["to","href","target"]))),256))])])])):b("",!0)]),_:1},8,["properties","prefixes"])):_(z)?(a(),u(k,{key:2},[d("loading...")],64)):_(B)?(a(),u(k,{key:3},[d("Network error: "+c(_(B)),1)],64)):b("",!0)],64))}});const ie=K(oe,[["__scopeId","data-v-33b0b755"]]);export{ie as default};
