# Create Poll

> ## Success Case

1. ✅ Receives a request of type **POST** in the **/api/surveys** route
2. validates that the request was made by an admin
3. validates mandatory **question** and **answers** data
4. ✅ **Creates** a poll with the data provided
5. ✅ Returns **204**, no data

> ## Exceptions

1. ✅ Returns error **404** if the API does not exist
2. ✅ Returns error **403** if user is not admin
3. returns error **400** if question or answers are not supplied by the client
4. Returns error **500** if error is given when trying to create the poll