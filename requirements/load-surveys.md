## List Polls

> ## Success case

1. ✅ Receives a request of type **GET** on the **/api/surveys** route
2. ✅ validates that the request was made by a user
3. ✅ returns **204** if there is no poll
4. ✅ Returns **200** with poll data

> ## Exceptions

1. ✅ returns error **404** if the API does not exist
2. ✅ Returns error **403** if not a user
3. ✅ returns error **500** if you fail to list the polls