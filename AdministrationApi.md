# .AdministrationApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserCollection**](AdministrationApi.md#getUserCollection) | **GET** /users | Retrieves the collection of Users.


# **getUserCollection**
> InlineResponse2005 getUserCollection()

Only administrators are allowed to access this.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AdministrationApi(configuration);

let body:.AdministrationApiGetUserCollectionRequest = {
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


