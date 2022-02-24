# Login

> ## Success Case

1. ✅ Receives a request of type **POST** in the **/api/login** route
2. ✅ validates the required **email** and **password** data
3. ✅ validates that the **email** field is a valid email address
4. ✅ **Searchs** the user with the provided email and password
5. ✅ Generates an access **token** from the user ID
6. ✅ **Updates** the user's data with the generated access token
7. ✅ Returns **200** with the access token and user name

> ## Exceptions

1. ✅ returns error **404** if the API does not exist
2. ✅ returns error **400** if email or password is not provided by the client
3. ✅ returns error **400** if the email field is an invalid email address
4. ✅ Returns error **401** if a user is not found with the data provided
5. ✅ Returns error **500** if an error occurs when trying to generate the access token
6. ✅ Returns error **500** if an error occurs when trying to update the user with the generated access token