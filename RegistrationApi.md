# .RegistrationApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postUserCollection**](RegistrationApi.md#postUserCollection) | **POST** /users | Registers a new User.


# **postUserCollection**
> UserjsonldRead postUserCollection()

Registers a new User in the database.  The email is optional and will help you reset a forgotten password.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RegistrationApi(configuration);

let body:.RegistrationApiPostUserCollectionRequest = {
  // UserjsonldCreate | The new User resource (optional)
  userjsonldCreate: {
    email: "email_example",
    username: "username_example",
    password: "password_example",
  },
};

apiInstance.postUserCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userjsonldCreate** | **UserjsonldCreate**| The new User resource |


### Return type

**UserjsonldRead**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


