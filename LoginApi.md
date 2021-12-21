# .LoginApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCredentialsItem**](LoginApi.md#postCredentialsItem) | **POST** /_jwt | Returns an authentication Token from login Credentials.


# **postCredentialsItem**
> void postCredentialsItem()

Creating and participating to private polls require authentication.  The Token returned is a [JWT](https://jwt.io/) valid for one hour.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LoginApi(configuration);

let body:.LoginApiPostCredentialsItemRequest = {
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


