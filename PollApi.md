# .PollApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPollsGradesGetSubresource**](PollApi.md#apiPollsGradesGetSubresource) | **GET** /polls/{id}/grades | Retrieves the collection of Grade resources.
[**apiPollsProposalsGetSubresource**](PollApi.md#apiPollsProposalsGetSubresource) | **GET** /polls/{id}/proposals | Retrieves the collection of Proposal resources.
[**deletePollItem**](PollApi.md#deletePollItem) | **DELETE** /polls/{id} | Removes the Poll resource.
[**getForPollResultItem**](PollApi.md#getForPollResultItem) | **GET** /polls/{id}/result | Gets the result of a poll
[**getPollCollection**](PollApi.md#getPollCollection) | **GET** /polls | Retrieves the collection of Poll resources.
[**getPollItem**](PollApi.md#getPollItem) | **GET** /polls/{id} | Retrieves a Poll resource.
[**postPollCollection**](PollApi.md#postPollCollection) | **POST** /polls | Creates a Poll resource.


# **apiPollsGradesGetSubresource**
> InlineResponse2002 apiPollsGradesGetSubresource()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PollApi(configuration);

let body:.PollApiApiPollsGradesGetSubresourceRequest = {
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

# **apiPollsProposalsGetSubresource**
> InlineResponse2003 apiPollsProposalsGetSubresource()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PollApi(configuration);

let body:.PollApiApiPollsProposalsGetSubresourceRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
  // number | The collection page number (optional)
  page: 1,
};

apiInstance.apiPollsProposalsGetSubresource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Universally Unique IDentifier (UUID)  | defaults to undefined
 **page** | [**number**] | The collection page number | (optional) defaults to 1


### Return type

**InlineResponse2003**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Proposal collection response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePollItem**
> void deletePollItem()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PollApi(configuration);

let body:.PollApiDeletePollItemRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
};

apiInstance.deletePollItem(body).then((data:any) => {
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
**204** | Poll resource deleted |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getForPollResultItem**
> ResultjsonldRead getForPollResultItem()

This endpoint computes a fresh result from the ballots currently received. For now, you may read a poll's result _at any time_. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PollApi(configuration);

let body:.PollApiGetForPollResultItemRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
};

apiInstance.getForPollResultItem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Universally Unique IDentifier (UUID)  | defaults to undefined


### Return type

**ResultjsonldRead**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Result resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPollCollection**
> InlineResponse2001 getPollCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PollApi(configuration);

let body:.PollApiGetPollCollectionRequest = {
  // number | The collection page number (optional)
  page: 1,
};

apiInstance.getPollCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | The collection page number | (optional) defaults to 1


### Return type

**InlineResponse2001**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Poll collection response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPollItem**
> PolljsonldRead getPollItem()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PollApi(configuration);

let body:.PollApiGetPollItemRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
};

apiInstance.getPollItem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Universally Unique IDentifier (UUID)  | defaults to undefined


### Return type

**PolljsonldRead**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Poll resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postPollCollection**
> PolljsonldRead postPollCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PollApi(configuration);

let body:.PollApiPostPollCollectionRequest = {
  // PolljsonldCreate | The new Poll resource (optional)
  polljsonldCreate: {
    slug: "slug_example",
    scope: "scope_example",
    subject: "subject_example",
    proposals: [
      {
        title: "title_example",
        poll: ,
      },
    ],
    grades: [
      {
        name: "name_example",
        level: 1,
      },
    ],
  },
};

apiInstance.postPollCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **polljsonldCreate** | **PolljsonldCreate**| The new Poll resource |


### Return type

**PolljsonldRead**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Poll resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


