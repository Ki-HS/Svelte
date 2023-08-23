/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jj8sfxrjk0mqvvp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mpuk1yfe",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jj8sfxrjk0mqvvp")

  // remove
  collection.schema.removeField("mpuk1yfe")

  return dao.saveCollection(collection)
})
