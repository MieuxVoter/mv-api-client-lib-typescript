# .ToolsApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJsonResultFromTally**](ToolsApi.md#getJsonResultFromTally) | **GET** /{tally}.json | Resolves the provided tally. 
[**getSvgMeritProfileFromTally**](ToolsApi.md#getSvgMeritProfileFromTally) | **GET** /render/merit-profile.svg | Generates a merit profile as SVG of the provided tally. 


# **getJsonResultFromTally**
> void getJsonResultFromTally()

This endpoint requires no authentication. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ToolsApi(configuration);

let body:any = {};

apiInstance.getJsonResultFromTally(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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
**200** | A JSON with information about the proposals, notably their rank. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSvgMeritProfileFromTally**
> void getSvgMeritProfileFromTally()

The resulting merit profile is not ranked, proposals are shown in the order they were submitted. This endpoint requires no authentication. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ToolsApi(configuration);

let body:any = {};

apiInstance.getSvgMeritProfileFromTally(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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
**200** | A SVG image. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


