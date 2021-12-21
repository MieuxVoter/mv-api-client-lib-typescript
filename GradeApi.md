# .GradeApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPollsGradesGetSubresource**](GradeApi.md#apiPollsGradesGetSubresource) | **GET** /polls/{id}/grades | Retrieves the collection of Grade resources.
[**getGradeItem**](GradeApi.md#getGradeItem) | **GET** /grades/{id} | Retrieves a Grade resource.


# **apiPollsGradesGetSubresource**
> InlineResponse2002 apiPollsGradesGetSubresource()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GradeApi(configuration);

let body:.GradeApiApiPollsGradesGetSubresourceRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
  // number | The collection page number (optional)
  page: 1,
};

apiInstance.apiPollsGradesGetSubresource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Universally Unique IDentifier (UUID)  | defaults to undefined
 **page** | [**number**] | The collection page number | (optional) defaults to 1


### Return type

**InlineResponse2002**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Grade collection response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGradeItem**
> GradejsonldRead getGradeItem()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GradeApi(configuration);

let body:.GradeApiGetGradeItemRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
};

apiInstance.getGradeItem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Universally Unique IDentifier (UUID)  | defaults to undefined


### Return type

**GradejsonldRead**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Grade resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


