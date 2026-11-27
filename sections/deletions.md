## Deletions

In a pure [=local-first=] context, it wouldn't be possible to delete any data. However, given the privacy concerns of Solid [[!SOLID-PROTOCOL]], this library allows you to delete data.

In order to make sure that it is not re-created on sync, deleted data should at least leave a Tombstone behind:

<aside class="example" title="A deleted recipe leaving a tombstone behind">

```turtle
@prefix crdt: <https://vocab.noeldemartin.com/crdt/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.

<#it-metadata> a crdt:Tombstone ;
  crdt:resource <#it> ;
  crdt:deletedAt "2026-11-27T14:00:00Z"^^xsd:dateTime .
```

</aside>
