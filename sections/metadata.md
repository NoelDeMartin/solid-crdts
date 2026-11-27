## Metadata

Besides [](#operations), CRDTs also hold a single `Metadata` resource that can be used to gauge the current status of a resource:

<aside class="example" title="A recipe with CRDT metadata">

```turtle
@prefix schema: <https://schema.org/>.
@prefix crdt: <https://vocab.noeldemartin.com/crdt/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.

<#it> a schema:Recipe ;
  schema:name "Ramen" .

<#it-metadata> a crdt:Metadata ;
  crdt:resource <#it> ;
  crdt:createdAt "2026-11-27T10:00:00Z"^^xsd:dateTime ;
  crdt:updatedAt "2026-11-27T12:00:00Z"^^xsd:dateTime .
```

</aside>
