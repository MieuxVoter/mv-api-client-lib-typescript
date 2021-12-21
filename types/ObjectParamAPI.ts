import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Ballot } from '../models/Ballot';
import { BallotCreate } from '../models/BallotCreate';
import { BallotCreated } from '../models/BallotCreated';
import { BallotRead } from '../models/BallotRead';
import { Ballotjsonld } from '../models/Ballotjsonld';
import { BallotjsonldCreate } from '../models/BallotjsonldCreate';
import { BallotjsonldCreated } from '../models/BallotjsonldCreated';
import { BallotjsonldRead } from '../models/BallotjsonldRead';
import { Credentials } from '../models/Credentials';
import { GradeCreate } from '../models/GradeCreate';
import { GradeRead } from '../models/GradeRead';
import { GradejsonldCreate } from '../models/GradejsonldCreate';
import { GradejsonldRead } from '../models/GradejsonldRead';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse200HydraSearch } from '../models/InlineResponse200HydraSearch';
import { InlineResponse200HydraSearchHydraMapping } from '../models/InlineResponse200HydraSearchHydraMapping';
import { InlineResponse200HydraView } from '../models/InlineResponse200HydraView';
import { InvitationRead } from '../models/InvitationRead';
import { InvitationjsonldRead } from '../models/InvitationjsonldRead';
import { PollCreate } from '../models/PollCreate';
import { PollRead } from '../models/PollRead';
import { PolljsonldCreate } from '../models/PolljsonldCreate';
import { PolljsonldRead } from '../models/PolljsonldRead';
import { ProposalCreate } from '../models/ProposalCreate';
import { ProposalGradeResultRead } from '../models/ProposalGradeResultRead';
import { ProposalGradeResultjsonldRead } from '../models/ProposalGradeResultjsonldRead';
import { ProposalRead } from '../models/ProposalRead';
import { ProposalResultRead } from '../models/ProposalResultRead';
import { ProposalResultjsonldRead } from '../models/ProposalResultjsonldRead';
import { ProposaljsonldCreate } from '../models/ProposaljsonldCreate';
import { ProposaljsonldRead } from '../models/ProposaljsonldRead';
import { ResultRead } from '../models/ResultRead';
import { ResultjsonldRead } from '../models/ResultjsonldRead';
import { Token } from '../models/Token';
import { UserCreate } from '../models/UserCreate';
import { UserEdit } from '../models/UserEdit';
import { UserRead } from '../models/UserRead';
import { UserjsonldCreate } from '../models/UserjsonldCreate';
import { UserjsonldEdit } from '../models/UserjsonldEdit';
import { UserjsonldRead } from '../models/UserjsonldRead';

import { ObservableAdministrationApi } from "./ObservableAPI";
import { AdministrationApiRequestFactory, AdministrationApiResponseProcessor} from "../apis/AdministrationApi";

export interface AdministrationApiGetUserCollectionRequest {
    /**
     * The collection page number
     * @type number
     * @memberof AdministrationApigetUserCollection
     */
    page?: number
}

export class ObjectAdministrationApi {
    private api: ObservableAdministrationApi

    public constructor(configuration: Configuration, requestFactory?: AdministrationApiRequestFactory, responseProcessor?: AdministrationApiResponseProcessor) {
        this.api = new ObservableAdministrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Only administrators are allowed to access this.
     * Retrieves the collection of Users.
     * @param param the request object
     */
    public getUserCollection(param: AdministrationApiGetUserCollectionRequest, options?: Configuration): Promise<InlineResponse2005> {
        return this.api.getUserCollection(param.page,  options).toPromise();
    }

}

import { ObservableBallotApi } from "./ObservableAPI";
import { BallotApiRequestFactory, BallotApiResponseProcessor} from "../apis/BallotApi";

export interface BallotApiApiPollsProposalsBallotsGetSubresourceRequest {
    /**
     * Universally Unique IDentifier of the poll.
     * @type string
     * @memberof BallotApiapiPollsProposalsBallotsGetSubresource
     */
    pollId: string
    /**
     * Universally Unique IDentifier of the proposal.
     * @type string
     * @memberof BallotApiapiPollsProposalsBallotsGetSubresource
     */
    proposalId: string
    /**
     * The collection page number
     * @type number
     * @memberof BallotApiapiPollsProposalsBallotsGetSubresource
     */
    page?: number
}

export interface BallotApiApiProposalsBallotsGetSubresourceRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof BallotApiapiProposalsBallotsGetSubresource
     */
    id: string
    /**
     * The collection page number
     * @type number
     * @memberof BallotApiapiProposalsBallotsGetSubresource
     */
    page?: number
}

export interface BallotApiDeleteBallotItemRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof BallotApideleteBallotItem
     */
    id: string
}

export interface BallotApiGetBallotItemRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof BallotApigetBallotItem
     */
    id: string
}

export interface BallotApiPostBallotCollectionRequest {
    /**
     * Universally Unique IDentifier of the poll whose proposal we are judging.
     * @type string
     * @memberof BallotApipostBallotCollection
     */
    pollId: string
    /**
     * Universally Unique IDentifier of the proposal we are judging.
     * @type string
     * @memberof BallotApipostBallotCollection
     */
    proposalId: string
    /**
     * The new Ballot resource
     * @type BallotjsonldCreate
     * @memberof BallotApipostBallotCollection
     */
    ballotjsonldCreate?: BallotjsonldCreate
}

export class ObjectBallotApi {
    private api: ObservableBallotApi

    public constructor(configuration: Configuration, requestFactory?: BallotApiRequestFactory, responseProcessor?: BallotApiResponseProcessor) {
        this.api = new ObservableBallotApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param param the request object
     */
    public apiPollsProposalsBallotsGetSubresource(param: BallotApiApiPollsProposalsBallotsGetSubresourceRequest, options?: Configuration): Promise<InlineResponse2004> {
        return this.api.apiPollsProposalsBallotsGetSubresource(param.pollId, param.proposalId, param.page,  options).toPromise();
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param param the request object
     */
    public apiProposalsBallotsGetSubresource(param: BallotApiApiProposalsBallotsGetSubresourceRequest, options?: Configuration): Promise<InlineResponse2004> {
        return this.api.apiProposalsBallotsGetSubresource(param.id, param.page,  options).toPromise();
    }

    /**
     * Removes the Ballot resource.
     * @param param the request object
     */
    public deleteBallotItem(param: BallotApiDeleteBallotItemRequest, options?: Configuration): Promise<void> {
        return this.api.deleteBallotItem(param.id,  options).toPromise();
    }

    /**
     * Inspect a previously submitted Ballot.
     * Retrieves a Ballot resource.
     * @param param the request object
     */
    public getBallotItem(param: BallotApiGetBallotItemRequest, options?: Configuration): Promise<BallotjsonldRead> {
        return this.api.getBallotItem(param.id,  options).toPromise();
    }

    /**
     * Creates a Ballot resource.
     * @param param the request object
     */
    public postBallotCollection(param: BallotApiPostBallotCollectionRequest, options?: Configuration): Promise<BallotjsonldCreated> {
        return this.api.postBallotCollection(param.pollId, param.proposalId, param.ballotjsonldCreate,  options).toPromise();
    }

}

import { ObservableGradeApi } from "./ObservableAPI";
import { GradeApiRequestFactory, GradeApiResponseProcessor} from "../apis/GradeApi";

export interface GradeApiApiPollsGradesGetSubresourceRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof GradeApiapiPollsGradesGetSubresource
     */
    id: string
    /**
     * The collection page number
     * @type number
     * @memberof GradeApiapiPollsGradesGetSubresource
     */
    page?: number
}

export interface GradeApiGetGradeItemRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof GradeApigetGradeItem
     */
    id: string
}

export class ObjectGradeApi {
    private api: ObservableGradeApi

    public constructor(configuration: Configuration, requestFactory?: GradeApiRequestFactory, responseProcessor?: GradeApiResponseProcessor) {
        this.api = new ObservableGradeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the collection of Grade resources.
     * @param param the request object
     */
    public apiPollsGradesGetSubresource(param: GradeApiApiPollsGradesGetSubresourceRequest, options?: Configuration): Promise<InlineResponse2002> {
        return this.api.apiPollsGradesGetSubresource(param.id, param.page,  options).toPromise();
    }

    /**
     * Retrieves a Grade resource.
     * @param param the request object
     */
    public getGradeItem(param: GradeApiGetGradeItemRequest, options?: Configuration): Promise<GradejsonldRead> {
        return this.api.getGradeItem(param.id,  options).toPromise();
    }

}

import { ObservableInvitationApi } from "./ObservableAPI";
import { InvitationApiRequestFactory, InvitationApiResponseProcessor} from "../apis/InvitationApi";

export interface InvitationApiGetForPollInvitationCollectionRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof InvitationApigetForPollInvitationCollection
     */
    id: string
    /**
     * The collection page number
     * @type number
     * @memberof InvitationApigetForPollInvitationCollection
     */
    page?: number
}

export interface InvitationApiGetInvitationCollectionRequest {
    /**
     * The collection page number
     * @type number
     * @memberof InvitationApigetInvitationCollection
     */
    page?: number
}

export interface InvitationApiGetInvitationItemRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof InvitationApigetInvitationItem
     */
    id: string
}

export class ObjectInvitationApi {
    private api: ObservableInvitationApi

    public constructor(configuration: Configuration, requestFactory?: InvitationApiRequestFactory, responseProcessor?: InvitationApiResponseProcessor) {
        this.api = new ObservableInvitationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the collection of Invitation resources.
     * @param param the request object
     */
    public getForPollInvitationCollection(param: InvitationApiGetForPollInvitationCollectionRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.getForPollInvitationCollection(param.id, param.page,  options).toPromise();
    }

    /**
     * Retrieves the collection of Invitation resources.
     * @param param the request object
     */
    public getInvitationCollection(param: InvitationApiGetInvitationCollectionRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.getInvitationCollection(param.page,  options).toPromise();
    }

    /**
     * Retrieves a Invitation resource.
     * @param param the request object
     */
    public getInvitationItem(param: InvitationApiGetInvitationItemRequest, options?: Configuration): Promise<InvitationjsonldRead> {
        return this.api.getInvitationItem(param.id,  options).toPromise();
    }

}

import { ObservableLoginApi } from "./ObservableAPI";
import { LoginApiRequestFactory, LoginApiResponseProcessor} from "../apis/LoginApi";

export interface LoginApiPostCredentialsItemRequest {
    /**
     * User Credentials
     * @type Credentials
     * @memberof LoginApipostCredentialsItem
     */
    credentials?: Credentials
}

export class ObjectLoginApi {
    private api: ObservableLoginApi

    public constructor(configuration: Configuration, requestFactory?: LoginApiRequestFactory, responseProcessor?: LoginApiResponseProcessor) {
        this.api = new ObservableLoginApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creating and participating to private polls require authentication.  The Token returned is a [JWT](https://jwt.io/) valid for one hour.
     * Returns an authentication Token from login Credentials.
     * @param param the request object
     */
    public postCredentialsItem(param: LoginApiPostCredentialsItemRequest, options?: Configuration): Promise<void> {
        return this.api.postCredentialsItem(param.credentials,  options).toPromise();
    }

}

import { ObservablePollApi } from "./ObservableAPI";
import { PollApiRequestFactory, PollApiResponseProcessor} from "../apis/PollApi";

export interface PollApiApiPollsGradesGetSubresourceRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof PollApiapiPollsGradesGetSubresource
     */
    id: string
    /**
     * The collection page number
     * @type number
     * @memberof PollApiapiPollsGradesGetSubresource
     */
    page?: number
}

export interface PollApiApiPollsProposalsGetSubresourceRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof PollApiapiPollsProposalsGetSubresource
     */
    id: string
    /**
     * The collection page number
     * @type number
     * @memberof PollApiapiPollsProposalsGetSubresource
     */
    page?: number
}

export interface PollApiDeletePollItemRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof PollApideletePollItem
     */
    id: string
}

export interface PollApiGetForPollResultItemRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof PollApigetForPollResultItem
     */
    id: string
}

export interface PollApiGetPollCollectionRequest {
    /**
     * The collection page number
     * @type number
     * @memberof PollApigetPollCollection
     */
    page?: number
}

export interface PollApiGetPollItemRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof PollApigetPollItem
     */
    id: string
}

export interface PollApiPostPollCollectionRequest {
    /**
     * The new Poll resource
     * @type PolljsonldCreate
     * @memberof PollApipostPollCollection
     */
    polljsonldCreate?: PolljsonldCreate
}

export class ObjectPollApi {
    private api: ObservablePollApi

    public constructor(configuration: Configuration, requestFactory?: PollApiRequestFactory, responseProcessor?: PollApiResponseProcessor) {
        this.api = new ObservablePollApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the collection of Grade resources.
     * @param param the request object
     */
    public apiPollsGradesGetSubresource(param: PollApiApiPollsGradesGetSubresourceRequest, options?: Configuration): Promise<InlineResponse2002> {
        return this.api.apiPollsGradesGetSubresource(param.id, param.page,  options).toPromise();
    }

    /**
     * Retrieves the collection of Proposal resources.
     * @param param the request object
     */
    public apiPollsProposalsGetSubresource(param: PollApiApiPollsProposalsGetSubresourceRequest, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.apiPollsProposalsGetSubresource(param.id, param.page,  options).toPromise();
    }

    /**
     * Removes the Poll resource.
     * @param param the request object
     */
    public deletePollItem(param: PollApiDeletePollItemRequest, options?: Configuration): Promise<void> {
        return this.api.deletePollItem(param.id,  options).toPromise();
    }

    /**
     * This endpoint computes a fresh result from the ballots currently received. For now, you may read a poll's result _at any time_. 
     * Gets the result of a poll
     * @param param the request object
     */
    public getForPollResultItem(param: PollApiGetForPollResultItemRequest, options?: Configuration): Promise<ResultjsonldRead> {
        return this.api.getForPollResultItem(param.id,  options).toPromise();
    }

    /**
     * Retrieves the collection of Poll resources.
     * @param param the request object
     */
    public getPollCollection(param: PollApiGetPollCollectionRequest, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.getPollCollection(param.page,  options).toPromise();
    }

    /**
     * Retrieves a Poll resource.
     * @param param the request object
     */
    public getPollItem(param: PollApiGetPollItemRequest, options?: Configuration): Promise<PolljsonldRead> {
        return this.api.getPollItem(param.id,  options).toPromise();
    }

    /**
     * Creates a Poll resource.
     * @param param the request object
     */
    public postPollCollection(param: PollApiPostPollCollectionRequest, options?: Configuration): Promise<PolljsonldRead> {
        return this.api.postPollCollection(param.polljsonldCreate,  options).toPromise();
    }

}

import { ObservableProposalApi } from "./ObservableAPI";
import { ProposalApiRequestFactory, ProposalApiResponseProcessor} from "../apis/ProposalApi";

export interface ProposalApiApiPollsProposalsBallotsGetSubresourceRequest {
    /**
     * Universally Unique IDentifier of the poll.
     * @type string
     * @memberof ProposalApiapiPollsProposalsBallotsGetSubresource
     */
    pollId: string
    /**
     * Universally Unique IDentifier of the proposal.
     * @type string
     * @memberof ProposalApiapiPollsProposalsBallotsGetSubresource
     */
    proposalId: string
    /**
     * The collection page number
     * @type number
     * @memberof ProposalApiapiPollsProposalsBallotsGetSubresource
     */
    page?: number
}

export interface ProposalApiApiPollsProposalsGetSubresourceRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof ProposalApiapiPollsProposalsGetSubresource
     */
    id: string
    /**
     * The collection page number
     * @type number
     * @memberof ProposalApiapiPollsProposalsGetSubresource
     */
    page?: number
}

export interface ProposalApiApiProposalsBallotsGetSubresourceRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof ProposalApiapiProposalsBallotsGetSubresource
     */
    id: string
    /**
     * The collection page number
     * @type number
     * @memberof ProposalApiapiProposalsBallotsGetSubresource
     */
    page?: number
}

export interface ProposalApiGetProposalItemRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof ProposalApigetProposalItem
     */
    id: string
}

export interface ProposalApiPostProposalCollectionRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof ProposalApipostProposalCollection
     */
    id: string
    /**
     * The new Proposal resource
     * @type ProposaljsonldCreate
     * @memberof ProposalApipostProposalCollection
     */
    proposaljsonldCreate?: ProposaljsonldCreate
}

export class ObjectProposalApi {
    private api: ObservableProposalApi

    public constructor(configuration: Configuration, requestFactory?: ProposalApiRequestFactory, responseProcessor?: ProposalApiResponseProcessor) {
        this.api = new ObservableProposalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param param the request object
     */
    public apiPollsProposalsBallotsGetSubresource(param: ProposalApiApiPollsProposalsBallotsGetSubresourceRequest, options?: Configuration): Promise<InlineResponse2004> {
        return this.api.apiPollsProposalsBallotsGetSubresource(param.pollId, param.proposalId, param.page,  options).toPromise();
    }

    /**
     * Retrieves the collection of Proposal resources.
     * @param param the request object
     */
    public apiPollsProposalsGetSubresource(param: ProposalApiApiPollsProposalsGetSubresourceRequest, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.apiPollsProposalsGetSubresource(param.id, param.page,  options).toPromise();
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param param the request object
     */
    public apiProposalsBallotsGetSubresource(param: ProposalApiApiProposalsBallotsGetSubresourceRequest, options?: Configuration): Promise<InlineResponse2004> {
        return this.api.apiProposalsBallotsGetSubresource(param.id, param.page,  options).toPromise();
    }

    /**
     * Retrieves a Proposal resource.
     * @param param the request object
     */
    public getProposalItem(param: ProposalApiGetProposalItemRequest, options?: Configuration): Promise<ProposaljsonldRead> {
        return this.api.getProposalItem(param.id,  options).toPromise();
    }

    /**
     * Creates a Proposal resource.
     * @param param the request object
     */
    public postProposalCollection(param: ProposalApiPostProposalCollectionRequest, options?: Configuration): Promise<ProposaljsonldRead> {
        return this.api.postProposalCollection(param.id, param.proposaljsonldCreate,  options).toPromise();
    }

}

import { ObservableRegistrationApi } from "./ObservableAPI";
import { RegistrationApiRequestFactory, RegistrationApiResponseProcessor} from "../apis/RegistrationApi";

export interface RegistrationApiPostUserCollectionRequest {
    /**
     * The new User resource
     * @type UserjsonldCreate
     * @memberof RegistrationApipostUserCollection
     */
    userjsonldCreate?: UserjsonldCreate
}

export class ObjectRegistrationApi {
    private api: ObservableRegistrationApi

    public constructor(configuration: Configuration, requestFactory?: RegistrationApiRequestFactory, responseProcessor?: RegistrationApiResponseProcessor) {
        this.api = new ObservableRegistrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Registers a new User in the database.  The email is optional and will help you reset a forgotten password.
     * Registers a new User.
     * @param param the request object
     */
    public postUserCollection(param: RegistrationApiPostUserCollectionRequest, options?: Configuration): Promise<UserjsonldRead> {
        return this.api.postUserCollection(param.userjsonldCreate,  options).toPromise();
    }

}

import { ObservableResultApi } from "./ObservableAPI";
import { ResultApiRequestFactory, ResultApiResponseProcessor} from "../apis/ResultApi";

export interface ResultApiGetForPollResultItemRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof ResultApigetForPollResultItem
     */
    id: string
}

export class ObjectResultApi {
    private api: ObservableResultApi

    public constructor(configuration: Configuration, requestFactory?: ResultApiRequestFactory, responseProcessor?: ResultApiResponseProcessor) {
        this.api = new ObservableResultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint computes a fresh result from the ballots currently received. For now, you may read a poll's result _at any time_. 
     * Gets the result of a poll
     * @param param the request object
     */
    public getForPollResultItem(param: ResultApiGetForPollResultItemRequest, options?: Configuration): Promise<ResultjsonldRead> {
        return this.api.getForPollResultItem(param.id,  options).toPromise();
    }

}

import { ObservableToolsApi } from "./ObservableAPI";
import { ToolsApiRequestFactory, ToolsApiResponseProcessor} from "../apis/ToolsApi";

export interface ToolsApiGetJsonResultFromTallyRequest {
}

export interface ToolsApiGetSvgMeritProfileFromTallyRequest {
}

export class ObjectToolsApi {
    private api: ObservableToolsApi

    public constructor(configuration: Configuration, requestFactory?: ToolsApiRequestFactory, responseProcessor?: ToolsApiResponseProcessor) {
        this.api = new ObservableToolsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint requires no authentication. 
     * Resolves the provided tally. 
     * @param param the request object
     */
    public getJsonResultFromTally(param: ToolsApiGetJsonResultFromTallyRequest, options?: Configuration): Promise<void> {
        return this.api.getJsonResultFromTally( options).toPromise();
    }

    /**
     * The resulting merit profile is not ranked, proposals are shown in the order they were submitted. This endpoint requires no authentication. 
     * Generates a merit profile as SVG of the provided tally. 
     * @param param the request object
     */
    public getSvgMeritProfileFromTally(param: ToolsApiGetSvgMeritProfileFromTallyRequest, options?: Configuration): Promise<void> {
        return this.api.getSvgMeritProfileFromTally( options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiDeleteUserItemRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof UserApideleteUserItem
     */
    id: string
}

export interface UserApiGetUserCollectionRequest {
    /**
     * The collection page number
     * @type number
     * @memberof UserApigetUserCollection
     */
    page?: number
}

export interface UserApiGetUserItemRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof UserApigetUserItem
     */
    id: string
}

export interface UserApiPostCredentialsItemRequest {
    /**
     * User Credentials
     * @type Credentials
     * @memberof UserApipostCredentialsItem
     */
    credentials?: Credentials
}

export interface UserApiPostUserCollectionRequest {
    /**
     * The new User resource
     * @type UserjsonldCreate
     * @memberof UserApipostUserCollection
     */
    userjsonldCreate?: UserjsonldCreate
}

export interface UserApiPutUserItemRequest {
    /**
     * Universally Unique IDentifier (UUID) 
     * @type string
     * @memberof UserApiputUserItem
     */
    id: string
    /**
     * The updated User resource
     * @type UserjsonldEdit
     * @memberof UserApiputUserItem
     */
    userjsonldEdit?: UserjsonldEdit
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes the User resource.
     * @param param the request object
     */
    public deleteUserItem(param: UserApiDeleteUserItemRequest, options?: Configuration): Promise<void> {
        return this.api.deleteUserItem(param.id,  options).toPromise();
    }

    /**
     * Only administrators are allowed to access this.
     * Retrieves the collection of Users.
     * @param param the request object
     */
    public getUserCollection(param: UserApiGetUserCollectionRequest, options?: Configuration): Promise<InlineResponse2005> {
        return this.api.getUserCollection(param.page,  options).toPromise();
    }

    /**
     * You are authorized to get information about yourself only.
     * Gets information about a User.
     * @param param the request object
     */
    public getUserItem(param: UserApiGetUserItemRequest, options?: Configuration): Promise<UserjsonldRead> {
        return this.api.getUserItem(param.id,  options).toPromise();
    }

    /**
     * Creating and participating to private polls require authentication.  The Token returned is a [JWT](https://jwt.io/) valid for one hour.
     * Returns an authentication Token from login Credentials.
     * @param param the request object
     */
    public postCredentialsItem(param: UserApiPostCredentialsItemRequest, options?: Configuration): Promise<void> {
        return this.api.postCredentialsItem(param.credentials,  options).toPromise();
    }

    /**
     * Registers a new User in the database.  The email is optional and will help you reset a forgotten password.
     * Registers a new User.
     * @param param the request object
     */
    public postUserCollection(param: UserApiPostUserCollectionRequest, options?: Configuration): Promise<UserjsonldRead> {
        return this.api.postUserCollection(param.userjsonldCreate,  options).toPromise();
    }

    /**
     * Logged-in users are authorized to update information about themselves only.
     * Updates information about a User.
     * @param param the request object
     */
    public putUserItem(param: UserApiPutUserItemRequest, options?: Configuration): Promise<UserjsonldRead> {
        return this.api.putUserItem(param.id, param.userjsonldEdit,  options).toPromise();
    }

}
