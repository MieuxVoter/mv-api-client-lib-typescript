# .BallotApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPollsProposalsBallotsGetSubresource**](BallotApi.md#apiPollsProposalsBallotsGetSubresource) | **GET** /polls/{pollId}/proposals/{proposalId}/ballots | Retrieves the collection of Ballot resources.
[**apiProposalsBallotsGetSubresource**](BallotApi.md#apiProposalsBallotsGetSubresource) | **GET** /proposals/{id}/ballots | Retrieves the collection of Ballot resources.
[**deleteBallotItem**](BallotApi.md#deleteBallotItem) | **DELETE** /ballots/{id} | Removes the Ballot resource.
[**getBallotItem**](BallotApi.md#getBallotItem) | **GET** /ballots/{id} | Retrieves a Ballot resource.
[**postBallotCollection**](BallotApi.md#postBallotCollection) | **POST** /polls/{pollId}/proposals/{proposalId}/ballots | Creates a Ballot resource.


# **apiPollsProposalsBallotsGetSubresource**
> InlineResponse2004 apiPollsProposalsBallotsGetSubresource()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BallotApi(configuration);

let body:.BallotApiApiPollsProposalsBallotsGetSubresourceRequest = {
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

# **apiProposalsBallotsGetSubresource**
> InlineResponse2004 apiProposalsBallotsGetSubresource()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BallotApi(configuration);

let body:.BallotApiApiProposalsBallotsGetSubresourceRequest = {
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

# **deleteBallotItem**
> void deleteBallotItem()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BallotApi(configuration);

let body:.BallotApiDeleteBallotItemRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
};

apiInstance.deleteBallotItem(body).then((data:any) => {
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
**204** | Ballot resource deleted |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBallotItem**
> BallotjsonldRead getBallotItem()

Inspect a previously submitted Ballot.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BallotApi(configuration);

let body:.BallotApiGetBallotItemRequest = {
  // string | Universally Unique IDentifier (UUID) 
  id: "d434a72c-20cb-480f-9955-1fa2ce2e91b1",
};

apiInstance.getBallotItem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Universally Unique IDentifier (UUID)  | defaults to undefined


### Return type

**BallotjsonldRead**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ballot resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postBallotCollection**
> BallotjsonldCreated postBallotCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BallotApi(configuration);

let body:.BallotApiPostBallotCollectionRequest = {
  // string | Universally Unique IDentifier of the poll whose proposal we are judging.
  pollId: "ed8c2754-4220-4f54-94e9-5e86982e85ac",
  // string | Universally Unique IDentifier of the proposal we are judging.
  proposalId: "368bd23a-6f19-4d8a-bb21-ff168ae2efc6",
  // BallotjsonldCreate | The new Ballot resource (optional)
  ballotjsonldCreate: {
    grade: {
      name: "name_example",
      level: 1,
    },
  },
};

apiInstance.postBallotCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ballotjsonldCreate** | **BallotjsonldCreate**| The new Ballot resource |
 **pollId** | [**string**] | Universally Unique IDentifier of the poll whose proposal we are judging. | defaults to undefined
 **proposalId** | [**string**] | Universally Unique IDentifier of the proposal we are judging. | defaults to undefined


### Return type

**BallotjsonldCreated**

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html
 - **Accept**: application/ld+json, application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Ballot resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


