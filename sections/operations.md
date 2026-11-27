## Operations

[=CRDTs=] work essentially by declaring each change in the data as an individual operation.

For example, let's say that we are working on a Recipes Manager with Solid, and we have the following recipe:

<aside class="example" title="Our basic recipe">

```turtle
@prefix schema: <https://schema.org/>.

<#it> a schema:Recipe ;
  schema:name "Ramen" .
```

</aside>

Normally, changing the name would cause the following update:

<aside class="example" title="Updating the recipe's name">

```sparql
PREFIX schema: <https://schema.org/>

DELETE DATA {
  <#it> schema:name "Ramen" .
} ;
INSERT DATA {
  <#it> schema:name "Tonkotsu Ramen" .
}
```

</aside>

However, in a local-first application, we would also need to record the changes themselves:

<aside class="example" title="Updating the recipe's name with CRDTs">

```sparql
PREFIX schema: <https://schema.org/>
PREFIX crdt: <https://vocab.noeldemartin.com/crdt/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

DELETE DATA {
  <#it> schema:name "Ramen" .
  <#it-metadata> crdt:updatedAt "2026-11-27T10:00:00Z"^^xsd:dateTime .
} ;
INSERT DATA {
  <#it> schema:name "Tonkotsu Ramen" .
  <#it-metadata> crdt:updatedAt "2026-11-27T12:00:00Z"^^xsd:dateTime .

  <#it-operation-1>
    a crdt:SetPropertyOperation ;
    crdt:date "2026-11-27T12:00:00Z"^^xsd:dateTime ;
    crdt:property schema:name ;
    crdt:resource <#it> ;
    crdt:value "Tonkotsu Ramen" .
}
```

</aside>

These are all the possible operations:

### SetPropertyOperation

Operation that replaces a resource's property.

### UnsetPropertyOperation

Operation that removes a resource's property.

### AddPropertyOperation

Operation that adds values to a resource's property.

### RemovePropertyOperation

Operation that removes values from a resource's property.

### DeleteOperation

Operation that soft deletes a resource.

### RestoreOperation

Operation that restores a soft-deleted resource.
