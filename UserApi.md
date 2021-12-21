# .UserApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserItem**](UserApi.md#deleteUserItem) | **DELETE** /users/{id} | Removes the User resource.
[**getUserCollection**](UserApi.md#getUserCollection) | **GET** /users | Retrieves the collection of Users.
[**getUserItem**](UserApi.md#getUserItem) | **GET** /users/{id} | Gets information about a User.
[**postCredentialsItem**](UserApi.md#postCredentialsItem) | **POST** /_jwt | Returns an authentication Token from login Credentials.
[**postUserCollection**](UserApi.md#postUserCollection) | **POST** /users | Registers a new User.
[**putUserItem**](UserApi.md#putUserItem) | **PUT** /users/{id} | Updates information about a User.


# **deleteUserItem**
> void deleteUserItem()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiDeleteUserItemRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
};

apiInstance.deleteUserItem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Universally Unique IDentifier (UUID)  | defaults to undefined


### Return type

**void**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | User resource deleted |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserCollection**
> InlineResponse2005 getUserCollection()

Only administrators are allowed to access this.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiGetUserCollectionRequest = {
  // number | The collection page number (optional)
  page: 1,
};

apiInstance.getUserCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | The collection page number | (optional) defaults to 1


### Return type

**InlineResponse2005**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User collection response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserItem**
> UserjsonldRead getUserItem()

You are authorized to get information about yourself only.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiGetUserItemRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
};

apiInstance.getUserItem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Universally Unique IDentifier (UUID)  | defaults to undefined


### Return type

**UserjsonldRead**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCredentialsItem**
> void postCredentialsItem()

Creating and participating to private polls require authentication.  The Token returned is a [JWT](https://jwt.io/) valid for one hour.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiPostCredentialsItemRequest = {
  // Credentials | User Credentials (optional)
  credentials: {
    usernameOrEmail: "michel",
    password: "~5Up3®$3cR3741337",
  },
};

apiInstance.postCredentialsItem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentials** | **Credentials**| User Credentials |


### Return type

**void**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON Web Token (JWT) |  -  |
**400** | Bad credentials. |  -  |
**401** | Unauthorized credentials. |  -  |
**402** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postUserCollection**
> UserjsonldRead postUserCollection()

Registers a new User in the database.  The email is optional and will help you reset a forgotten password.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiPostUserCollectionRequest = {
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

# **putUserItem**
> UserjsonldRead putUserItem()

Logged-in users are authorized to update information about themselves only.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiPutUserItemRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
  // UserjsonldEdit | The updated User resource (optional)
  userjsonldEdit: {
    email: "email_example",
    username: "username_example",
    password: "password_example",
  },
};

apiInstance.putUserItem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userjsonldEdit** | **UserjsonldEdit**| The updated User resource |
 **id** | [**string**] | Universally Unique IDentifier (UUID)  | defaults to undefined


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
**200** | User resource updated |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


