/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jj8sfxrjk0mqvvp",
    "created": "2023-08-23 12:11:16.611Z",
    "updated": "2023-08-23 12:11:16.611Z",
    "name": "users",
    "type": "auth",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jj8sfxrjk0mqvvp");

  return dao.deleteCollection(collection);
})
