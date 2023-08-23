/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y30zrshwvmyjha5")

  collection.name = "test"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y30zrshwvmyjha5")

  collection.name = "users"

  return dao.saveCollection(collection)
})
