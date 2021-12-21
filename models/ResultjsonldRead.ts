/**
 * Majority Judgment API
 * This is a **deliberation service** using **majority judgment** polling. It's **libre software** ([source](https://github.com/mieuxvoter)) made and maintained by [MieuxVoter.fr](https://mieuxvoter.fr). You're browsing the API documentation and sandbox.  ## Use one of the known clients  - TODO: add an URL to a client of the API   ## Try it out the hard way  ### Create an account  You will need a user account to interact with polls. Head to **Registration** → `POST /users` below. Click _Try it out_, set your desired credentials, and execute the query. Scroll down to see the response.  ### Authenticate  Use your credentials in the **Login** → `POST /_jwt`, and the API will return a Json Web Token valid for one hour. Copy the token (not the whole response, and without quotes) in the field behind the `Authorize 🔒` button.  ### Create a poll  **Poll** → `POST /polls`  Keep the response, you'll need the uuids.  > TODO: document invitation generation  ### Submit judgments  **Ballot** → `POST /polls/{pollId}/proposals/{proposalId}/ballots`  One request per proposal, for now.  We plan on making an endpoint to submit them all at once.  ### Collect the results  **Result** → `GET /polls/{id}/result`  ## Use a generated client library  - for php  (link!) - for typescript-node  (link!!) - …  There are clients we can generate for most languages. Get in touch if you'd like one in particular! Or clone this project and use `bin/generate-client.bash -t whatever`. 
 *
 * OpenAPI spec version: 0.0.0-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PolljsonldRead } from './PolljsonldRead';
import { ProposalResultRead } from './ProposalResultRead';
import { HttpFile } from '../http/http';

/**
* A Result of a Majority Judgment Poll.  Holds a leaderboard of the proposals.
*/
export class ResultjsonldRead {
    'context'?: string;
    'id'?: string;
    'type'?: string;
    'poll'?: PolljsonldRead;
    /**
    * The name of the algorithm used to derive this Result.
    */
    'algorithm'?: string;
    /**
    * In order, each Proposals' Result.  In extreme, low-participation polls, some Proposals may have the same rank ; in that case, their order should be the order they were added to the poll.
    */
    'leaderboard'?: Array<ProposalResultRead>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "context",
            "baseName": "@context",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "@id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "@type",
            "type": "string",
            "format": ""
        },
        {
            "name": "poll",
            "baseName": "poll",
            "type": "PolljsonldRead",
            "format": ""
        },
        {
            "name": "algorithm",
            "baseName": "algorithm",
            "type": "string",
            "format": ""
        },
        {
            "name": "leaderboard",
            "baseName": "leaderboard",
            "type": "Array<ProposalResultRead>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ResultjsonldRead.attributeTypeMap;
    }

    public constructor() {
    }
}

