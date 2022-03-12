## Registration

> ## Success case

1. ✅ Receives a request of type **POST** on route **/api/signup**
2. ✅ validates the required **name**, **email**, **password** and **passwordConfirm** data
3. ✅ Validates that **password** and **passwordConfirm** are equal
4. ✅ Validates that the **email** field is a valid email address
5. ✅ **Validates** if a user with the provided email already exists
6. ✅ Generates an **encrypted** password (this password cannot be decrypted)
7. ✅ Creates** an account for the user with the data provided, replacing** the password with the encrypted password
8. ✅ Generates an access token from the user's ID
9. ✅ Updates** the user's data with the generated access token
10. ✅ Returns **200** with the access token and user name

> ## Exceptions

1. ✅ returns error **404** if the API does not exist
2. ✅ Returns error **400** if name, email, password or passwordConfirm are not provided by the client
3. ✅ returns error **400** if password and passwordConfirm are not equal
4. ✅ Returns error **400** if the email field is an invalid email address
5. ✅ Returns error **403** if the email address is already in use
6. ✅ Returns error **500** if an error occurs when trying to generate an encrypted password
7. ✅ Returns error **500** if an error occurs when trying to create a user account
8. ✅ Returns error **500** if an error occurs when trying to generate the access token
9. ✅ Returns error **500** if an error occurs when trying to update the user with the generated access token