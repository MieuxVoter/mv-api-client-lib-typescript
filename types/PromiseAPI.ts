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
import { ObservableAdministrationApi } from './ObservableAPI';

import { AdministrationApiRequestFactory, AdministrationApiResponseProcessor} from "../apis/AdministrationApi";
export class PromiseAdministrationApi {
    private api: ObservableAdministrationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AdministrationApiRequestFactory,
        responseProcessor?: AdministrationApiResponseProcessor
    ) {
        this.api = new ObservableAdministrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Only administrators are allowed to access this.
     * Retrieves the collection of Users.
     * @param page The collection page number
     */
    public getUserCollection(page?: number, _options?: Configuration): Promise<InlineResponse2005> {
        const result = this.api.getUserCollection(page, _options);
        return result.toPromise();
    }


}



import { ObservableBallotApi } from './ObservableAPI';

import { BallotApiRequestFactory, BallotApiResponseProcessor} from "../apis/BallotApi";
export class PromiseBallotApi {
    private api: ObservableBallotApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BallotApiRequestFactory,
        responseProcessor?: BallotApiResponseProcessor
    ) {
        this.api = new ObservableBallotApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param pollId Universally Unique IDentifier of the poll.
     * @param proposalId Universally Unique IDentifier of the proposal.
     * @param page The collection page number
     */
    public apiPollsProposalsBallotsGetSubresource(pollId: string, proposalId: string, page?: number, _options?: Configuration): Promise<InlineResponse2004> {
        const result = this.api.apiPollsProposalsBallotsGetSubresource(pollId, proposalId, page, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public apiProposalsBallotsGetSubresource(id: string, page?: number, _options?: Configuration): Promise<InlineResponse2004> {
        const result = this.api.apiProposalsBallotsGetSubresource(id, page, _options);
        return result.toPromise();
    }

    /**
     * Removes the Ballot resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public deleteBallotItem(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteBallotItem(id, _options);
        return result.toPromise();
    }

    /**
     * Inspect a previously submitted Ballot.
     * Retrieves a Ballot resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getBallotItem(id: string, _options?: Configuration): Promise<BallotjsonldRead> {
        const result = this.api.getBallotItem(id, _options);
        return result.toPromise();
    }

    /**
     * Creates a Ballot resource.
     * @param pollId Universally Unique IDentifier of the poll whose proposal we are judging.
     * @param proposalId Universally Unique IDentifier of the proposal we are judging.
     * @param ballotjsonldCreate The new Ballot resource
     */
    public postBallotCollection(pollId: string, proposalId: string, ballotjsonldCreate?: BallotjsonldCreate, _options?: Configuration): Promise<BallotjsonldCreated> {
        const result = this.api.postBallotCollection(pollId, proposalId, ballotjsonldCreate, _options);
        return result.toPromise();
    }


}



import { ObservableGradeApi } from './ObservableAPI';

import { GradeApiRequestFactory, GradeApiResponseProcessor} from "../apis/GradeApi";
export class PromiseGradeApi {
    private api: ObservableGradeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GradeApiRequestFactory,
        responseProcessor?: GradeApiResponseProcessor
    ) {
        this.api = new ObservableGradeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the collection of Grade resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public apiPollsGradesGetSubresource(id: string, page?: number, _options?: Configuration): Promise<InlineResponse2002> {
        const result = this.api.apiPollsGradesGetSubresource(id, page, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a Grade resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getGradeItem(id: string, _options?: Configuration): Promise<GradejsonldRead> {
        const result = this.api.getGradeItem(id, _options);
        return result.toPromise();
    }


}



import { ObservableInvitationApi } from './ObservableAPI';

import { InvitationApiRequestFactory, InvitationApiResponseProcessor} from "../apis/InvitationApi";
export class PromiseInvitationApi {
    private api: ObservableInvitationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InvitationApiRequestFactory,
        responseProcessor?: InvitationApiResponseProcessor
    ) {
        this.api = new ObservableInvitationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the collection of Invitation resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public getForPollInvitationCollection(id: string, page?: number, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.getForPollInvitationCollection(id, page, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the collection of Invitation resources.
     * @param page The collection page number
     */
    public getInvitationCollection(page?: number, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.getInvitationCollection(page, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a Invitation resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getInvitationItem(id: string, _options?: Configuration): Promise<InvitationjsonldRead> {
        const result = this.api.getInvitationItem(id, _options);
        return result.toPromise();
    }


}



import { ObservableLoginApi } from './ObservableAPI';

import { LoginApiRequestFactory, LoginApiResponseProcessor} from "../apis/LoginApi";
export class PromiseLoginApi {
    private api: ObservableLoginApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LoginApiRequestFactory,
        responseProcessor?: LoginApiResponseProcessor
    ) {
        this.api = new ObservableLoginApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creating and participating to private polls require authentication.  The Token returned is a [JWT](https://jwt.io/) valid for one hour.
     * Returns an authentication Token from login Credentials.
     * @param credentials User Credentials
     */
    public postCredentialsItem(credentials?: Credentials, _options?: Configuration): Promise<void> {
        const result = this.api.postCredentialsItem(credentials, _options);
        return result.toPromise();
    }


}



import { ObservablePollApi } from './ObservableAPI';

import { PollApiRequestFactory, PollApiResponseProcessor} from "../apis/PollApi";
export class PromisePollApi {
    private api: ObservablePollApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PollApiRequestFactory,
        responseProcessor?: PollApiResponseProcessor
    ) {
        this.api = new ObservablePollApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the collection of Grade resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public apiPollsGradesGetSubresource(id: string, page?: number, _options?: Configuration): Promise<InlineResponse2002> {
        const result = this.api.apiPollsGradesGetSubresource(id, page, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the collection of Proposal resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public apiPollsProposalsGetSubresource(id: string, page?: number, _options?: Configuration): Promise<InlineResponse2003> {
        const result = this.api.apiPollsProposalsGetSubresource(id, page, _options);
        return result.toPromise();
    }

    /**
     * Removes the Poll resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public deletePollItem(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deletePollItem(id, _options);
        return result.toPromise();
    }

    /**
     * This endpoint computes a fresh result from the ballots currently received. For now, you may read a poll's result _at any time_. 
     * Gets the result of a poll
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getForPollResultItem(id: string, _options?: Configuration): Promise<ResultjsonldRead> {
        const result = this.api.getForPollResultItem(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the collection of Poll resources.
     * @param page The collection page number
     */
    public getPollCollection(page?: number, _options?: Configuration): Promise<InlineResponse2001> {
        const result = this.api.getPollCollection(page, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a Poll resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getPollItem(id: string, _options?: Configuration): Promise<PolljsonldRead> {
        const result = this.api.getPollItem(id, _options);
        return result.toPromise();
    }

    /**
     * Creates a Poll resource.
     * @param polljsonldCreate The new Poll resource
     */
    public postPollCollection(polljsonldCreate?: PolljsonldCreate, _options?: Configuration): Promise<PolljsonldRead> {
        const result = this.api.postPollCollection(polljsonldCreate, _options);
        return result.toPromise();
    }


}



import { ObservableProposalApi } from './ObservableAPI';

import { ProposalApiRequestFactory, ProposalApiResponseProcessor} from "../apis/ProposalApi";
export class PromiseProposalApi {
    private api: ObservableProposalApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProposalApiRequestFactory,
        responseProcessor?: ProposalApiResponseProcessor
    ) {
        this.api = new ObservableProposalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param pollId Universally Unique IDentifier of the poll.
     * @param proposalId Universally Unique IDentifier of the proposal.
     * @param page The collection page number
     */
    public apiPollsProposalsBallotsGetSubresource(pollId: string, proposalId: string, page?: number, _options?: Configuration): Promise<InlineResponse2004> {
        const result = this.api.apiPollsProposalsBallotsGetSubresource(pollId, proposalId, page, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the collection of Proposal resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public apiPollsProposalsGetSubresource(id: string, page?: number, _options?: Configuration): Promise<InlineResponse2003> {
        const result = this.api.apiPollsProposalsGetSubresource(id, page, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public apiProposalsBallotsGetSubresource(id: string, page?: number, _options?: Configuration): Promise<InlineResponse2004> {
        const result = this.api.apiProposalsBallotsGetSubresource(id, page, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a Proposal resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getProposalItem(id: string, _options?: Configuration): Promise<ProposaljsonldRead> {
        const result = this.api.getProposalItem(id, _options);
        return result.toPromise();
    }

    /**
     * Creates a Proposal resource.
     * @param id Universally Unique IDentifier (UUID) 
     * @param proposaljsonldCreate The new Proposal resource
     */
    public postProposalCollection(id: string, proposaljsonldCreate?: ProposaljsonldCreate, _options?: Configuration): Promise<ProposaljsonldRead> {
        const result = this.api.postProposalCollection(id, proposaljsonldCreate, _options);
        return result.toPromise();
    }


}



import { ObservableRegistrationApi } from './ObservableAPI';

import { RegistrationApiRequestFactory, RegistrationApiResponseProcessor} from "../apis/RegistrationApi";
export class PromiseRegistrationApi {
    private api: ObservableRegistrationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RegistrationApiRequestFactory,
        responseProcessor?: RegistrationApiResponseProcessor
    ) {
        this.api = new ObservableRegistrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Registers a new User in the database.  The email is optional and will help you reset a forgotten password.
     * Registers a new User.
     * @param userjsonldCreate The new User resource
     */
    public postUserCollection(userjsonldCreate?: UserjsonldCreate, _options?: Configuration): Promise<UserjsonldRead> {
        const result = this.api.postUserCollection(userjsonldCreate, _options);
        return result.toPromise();
    }


}



import { ObservableResultApi } from './ObservableAPI';

import { ResultApiRequestFactory, ResultApiResponseProcessor} from "../apis/ResultApi";
export class PromiseResultApi {
    private api: ObservableResultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ResultApiRequestFactory,
        responseProcessor?: ResultApiResponseProcessor
    ) {
        this.api = new ObservableResultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint computes a fresh result from the ballots currently received. For now, you may read a poll's result _at any time_. 
     * Gets the result of a poll
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getForPollResultItem(id: string, _options?: Configuration): Promise<ResultjsonldRead> {
        const result = this.api.getForPollResultItem(id, _options);
        return result.toPromise();
    }


}



import { ObservableToolsApi } from './ObservableAPI';

import { ToolsApiRequestFactory, ToolsApiResponseProcessor} from "../apis/ToolsApi";
export class PromiseToolsApi {
    private api: ObservableToolsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ToolsApiRequestFactory,
        responseProcessor?: ToolsApiResponseProcessor
    ) {
        this.api = new ObservableToolsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint requires no authentication. 
     * Resolves the provided tally. 
     */
    public getJsonResultFromTally(_options?: Configuration): Promise<void> {
        const result = this.api.getJsonResultFromTally(_options);
        return result.toPromise();
    }

    /**
     * The resulting merit profile is not ranked, proposals are shown in the order they were submitted. This endpoint requires no authentication. 
     * Generates a merit profile as SVG of the provided tally. 
     */
    public getSvgMeritProfileFromTally(_options?: Configuration): Promise<void> {
        const result = this.api.getSvgMeritProfileFromTally(_options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes the User resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public deleteUserItem(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteUserItem(id, _options);
        return result.toPromise();
    }

    /**
     * Only administrators are allowed to access this.
     * Retrieves the collection of Users.
     * @param page The collection page number
     */
    public getUserCollection(page?: number, _options?: Configuration): Promise<InlineResponse2005> {
        const result = this.api.getUserCollection(page, _options);
        return result.toPromise();
    }

    /**
     * You are authorized to get information about yourself only.
     * Gets information about a User.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getUserItem(id: string, _options?: Configuration): Promise<UserjsonldRead> {
        const result = this.api.getUserItem(id, _options);
        return result.toPromise();
    }

    /**
     * Creating and participating to private polls require authentication.  The Token returned is a [JWT](https://jwt.io/) valid for one hour.
     * Returns an authentication Token from login Credentials.
     * @param credentials User Credentials
     */
    public postCredentialsItem(credentials?: Credentials, _options?: Configuration): Promise<void> {
        const result = this.api.postCredentialsItem(credentials, _options);
        return result.toPromise();
    }

    /**
     * Registers a new User in the database.  The email is optional and will help you reset a forgotten password.
     * Registers a new User.
     * @param userjsonldCreate The new User resource
     */
    public postUserCollection(userjsonldCreate?: UserjsonldCreate, _options?: Configuration): Promise<UserjsonldRead> {
        const result = this.api.postUserCollection(userjsonldCreate, _options);
        return result.toPromise();
    }

    /**
     * Logged-in users are authorized to update information about themselves only.
     * Updates information about a User.
     * @param id Universally Unique IDentifier (UUID) 
     * @param userjsonldEdit The updated User resource
     */
    public putUserItem(id: string, userjsonldEdit?: UserjsonldEdit, _options?: Configuration): Promise<UserjsonldRead> {
        const result = this.api.putUserItem(id, userjsonldEdit, _options);
        return result.toPromise();
    }


}



