# .ProposalApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPollsProposalsBallotsGetSubresource**](ProposalApi.md#apiPollsProposalsBallotsGetSubresource) | **GET** /polls/{pollId}/proposals/{proposalId}/ballots | Retrieves the collection of Ballot resources.
[**apiPollsProposalsGetSubresource**](ProposalApi.md#apiPollsProposalsGetSubresource) | **GET** /polls/{id}/proposals | Retrieves the collection of Proposal resources.
[**apiProposalsBallotsGetSubresource**](ProposalApi.md#apiProposalsBallotsGetSubresource) | **GET** /proposals/{id}/ballots | Retrieves the collection of Ballot resources.
[**getProposalItem**](ProposalApi.md#getProposalItem) | **GET** /proposals/{id} | Retrieves a Proposal resource.
[**postProposalCollection**](ProposalApi.md#postProposalCollection) | **POST** /polls/{id}/proposals | Creates a Proposal resource.


# **apiPollsProposalsBallotsGetSubresource**
> InlineResponse2004 apiPollsProposalsBallotsGetSubresource()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProposalApi(configuration);

let body:.ProposalApiApiPollsProposalsBallotsGetSubresourceRequest = {
  // string | Universally Unique IDentifier of the poll.
  pollId: "6c1c8973-2df3-4b5a-a17d-a3a921dba448",
  // string | Universally Unique IDentifier of the proposal.
  proposalId: "ebf2fda8-5f45-4a33-9758-40d7f5a74998",
  // number | The collection page number (optional)
  page: 1,
};

apiInstance.apiPollsProposalsBallotsGetSubresource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pollId** | [**string**] | Universally Unique IDentifier of the poll. | defaults to undefined
 **proposalId** | [**string**] | Universally Unique IDentifier of the proposal. | defaults to undefined
 **page** | [**number**] | The collection page number | (optional) defaults to 1


### Return type

**InlineResponse2004**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ballot collection response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPollsProposalsGetSubresource**
> InlineResponse2003 apiPollsProposalsGetSubresource()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProposalApi(configuration);

let body:.ProposalApiApiPollsProposalsGetSubresourceRequest = {
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

# **apiProposalsBallotsGetSubresource**
> InlineResponse2004 apiProposalsBallotsGetSubresource()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProposalApi(configuration);

let body:.ProposalApiApiProposalsBallotsGetSubresourceRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
  // number | The collection page number (optional)
  page: 1,
};

apiInstance.apiProposalsBallotsGetSubresource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Universally Unique IDentifier (UUID)  | defaults to undefined
 **page** | [**number**] | The collection page number | (optional) defaults to 1


### Return type

**InlineResponse2004**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ballot collection response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProposalItem**
> ProposaljsonldRead getProposalItem()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProposalApi(configuration);

let body:.ProposalApiGetProposalItemRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
};

apiInstance.getProposalItem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Universally Unique IDentifier (UUID)  | defaults to undefined


### Return type

**ProposaljsonldRead**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Proposal resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postProposalCollection**
> ProposaljsonldRead postProposalCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProposalApi(configuration);

let body:.ProposalApiPostProposalCollectionRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
  // ProposaljsonldCreate | The new Proposal resource (optional)
  proposaljsonldCreate: {
    title: "title_example",
    poll: {
      slug: "slug_example",
      scope: "scope_example",
      subject: "subject_example",
      proposals: [
        ,
      ],
      grades: [
        {
          name: "name_example",
          level: 1,
        },
      ],
    },
  },
};

apiInstance.postProposalCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proposaljsonldCreate** | **ProposaljsonldCreate**| The new Proposal resource |
 **id** | [**string**] | Universally Unique IDentifier (UUID)  | defaults to undefined


### Return type

**ProposaljsonldRead**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Proposal resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


