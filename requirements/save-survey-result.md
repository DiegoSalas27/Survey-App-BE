## Answer Poll

> ## Success Case

1. ✅ Receives a request of type **PUT** on route **/api/surveys/{survey_id}/results** 2.
2. ✅ Validates that the request was made by a user
3. ✅ Validates the **survey_id** parameter
4. ✅ Validates that the **answer** field is a valid response
5. ✅ **Creates** a poll result with the data provided if it does not have a record
6. ✅ Updates** a poll result with the data provided if it already has a record
7. ✅ Returns **200** with poll result data

> ## Exceptions

1. ✅ returns error **404** if the API does not exist
2. ✅ Returns error **403** if not a user
3. ✅ Returns error **403** if the survey_id passed in the URL is invalid
4. ✅ Returns error **403** if the response sent by the client is an invalid response
5. ✅ Returns error **500** if an error occurs when trying to create the poll result
6. ✅ Returns error **500** if an error occurs while trying to update the poll result.
7. ✅ Returns error **500** if you get an error trying to load the poll