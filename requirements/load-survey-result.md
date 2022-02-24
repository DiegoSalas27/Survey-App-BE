# Poll result

> ## Success case

1. ✅ Receives a request of type **GET** on route **/api/surveys/{survey_id}/results** 2.
2. ✅ validates that the request was made by a user
3. ✅ returns **200** with the poll result data

> ## Exceptions

1. ✅ returns error **404** if the API does not exist
2. ✅ Returns error **403** if not a user
3. ✅ Returns error **500** if error is given when trying to list poll result