import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AdministrationApiRequestFactory, AdministrationApiResponseProcessor} from "../apis/AdministrationApi";
export class ObservableAdministrationApi {
    private requestFactory: AdministrationApiRequestFactory;
    private responseProcessor: AdministrationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AdministrationApiRequestFactory,
        responseProcessor?: AdministrationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AdministrationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AdministrationApiResponseProcessor();
    }

    /**
     * Only administrators are allowed to access this.
     * Retrieves the collection of Users.
     * @param page The collection page number
     */
    public getUserCollection(page?: number, _options?: Configuration): Observable<InlineResponse2005> {
        const requestContextPromise = this.requestFactory.getUserCollection(page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserCollection(rsp)));
            }));
    }

}

import { BallotApiRequestFactory, BallotApiResponseProcessor} from "../apis/BallotApi";
export class ObservableBallotApi {
    private requestFactory: BallotApiRequestFactory;
    private responseProcessor: BallotApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BallotApiRequestFactory,
        responseProcessor?: BallotApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BallotApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BallotApiResponseProcessor();
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param pollId Universally Unique IDentifier of the poll.
     * @param proposalId Universally Unique IDentifier of the proposal.
     * @param page The collection page number
     */
    public apiPollsProposalsBallotsGetSubresource(pollId: string, proposalId: string, page?: number, _options?: Configuration): Observable<InlineResponse2004> {
        const requestContextPromise = this.requestFactory.apiPollsProposalsBallotsGetSubresource(pollId, proposalId, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPollsProposalsBallotsGetSubresource(rsp)));
            }));
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public apiProposalsBallotsGetSubresource(id: string, page?: number, _options?: Configuration): Observable<InlineResponse2004> {
        const requestContextPromise = this.requestFactory.apiProposalsBallotsGetSubresource(id, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiProposalsBallotsGetSubresource(rsp)));
            }));
    }

    /**
     * Removes the Ballot resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public deleteBallotItem(id: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteBallotItem(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBallotItem(rsp)));
            }));
    }

    /**
     * Inspect a previously submitted Ballot.
     * Retrieves a Ballot resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getBallotItem(id: string, _options?: Configuration): Observable<BallotjsonldRead> {
        const requestContextPromise = this.requestFactory.getBallotItem(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBallotItem(rsp)));
            }));
    }

    /**
     * Creates a Ballot resource.
     * @param pollId Universally Unique IDentifier of the poll whose proposal we are judging.
     * @param proposalId Universally Unique IDentifier of the proposal we are judging.
     * @param ballotjsonldCreate The new Ballot resource
     */
    public postBallotCollection(pollId: string, proposalId: string, ballotjsonldCreate?: BallotjsonldCreate, _options?: Configuration): Observable<BallotjsonldCreated> {
        const requestContextPromise = this.requestFactory.postBallotCollection(pollId, proposalId, ballotjsonldCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postBallotCollection(rsp)));
            }));
    }

}

import { GradeApiRequestFactory, GradeApiResponseProcessor} from "../apis/GradeApi";
export class ObservableGradeApi {
    private requestFactory: GradeApiRequestFactory;
    private responseProcessor: GradeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GradeApiRequestFactory,
        responseProcessor?: GradeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GradeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GradeApiResponseProcessor();
    }

    /**
     * Retrieves the collection of Grade resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public apiPollsGradesGetSubresource(id: string, page?: number, _options?: Configuration): Observable<InlineResponse2002> {
        const requestContextPromise = this.requestFactory.apiPollsGradesGetSubresource(id, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPollsGradesGetSubresource(rsp)));
            }));
    }

    /**
     * Retrieves a Grade resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getGradeItem(id: string, _options?: Configuration): Observable<GradejsonldRead> {
        const requestContextPromise = this.requestFactory.getGradeItem(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGradeItem(rsp)));
            }));
    }

}

import { InvitationApiRequestFactory, InvitationApiResponseProcessor} from "../apis/InvitationApi";
export class ObservableInvitationApi {
    private requestFactory: InvitationApiRequestFactory;
    private responseProcessor: InvitationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InvitationApiRequestFactory,
        responseProcessor?: InvitationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InvitationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InvitationApiResponseProcessor();
    }

    /**
     * Retrieves the collection of Invitation resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public getForPollInvitationCollection(id: string, page?: number, _options?: Configuration): Observable<InlineResponse200> {
        const requestContextPromise = this.requestFactory.getForPollInvitationCollection(id, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getForPollInvitationCollection(rsp)));
            }));
    }

    /**
     * Retrieves the collection of Invitation resources.
     * @param page The collection page number
     */
    public getInvitationCollection(page?: number, _options?: Configuration): Observable<InlineResponse200> {
        const requestContextPromise = this.requestFactory.getInvitationCollection(page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvitationCollection(rsp)));
            }));
    }

    /**
     * Retrieves a Invitation resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getInvitationItem(id: string, _options?: Configuration): Observable<InvitationjsonldRead> {
        const requestContextPromise = this.requestFactory.getInvitationItem(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvitationItem(rsp)));
            }));
    }

}

import { LoginApiRequestFactory, LoginApiResponseProcessor} from "../apis/LoginApi";
export class ObservableLoginApi {
    private requestFactory: LoginApiRequestFactory;
    private responseProcessor: LoginApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LoginApiRequestFactory,
        responseProcessor?: LoginApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LoginApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LoginApiResponseProcessor();
    }

    /**
     * Creating and participating to private polls require authentication.  The Token returned is a [JWT](https://jwt.io/) valid for one hour.
     * Returns an authentication Token from login Credentials.
     * @param credentials User Credentials
     */
    public postCredentialsItem(credentials?: Credentials, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.postCredentialsItem(credentials, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCredentialsItem(rsp)));
            }));
    }

}

import { PollApiRequestFactory, PollApiResponseProcessor} from "../apis/PollApi";
export class ObservablePollApi {
    private requestFactory: PollApiRequestFactory;
    private responseProcessor: PollApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PollApiRequestFactory,
        responseProcessor?: PollApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PollApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PollApiResponseProcessor();
    }

    /**
     * Retrieves the collection of Grade resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public apiPollsGradesGetSubresource(id: string, page?: number, _options?: Configuration): Observable<InlineResponse2002> {
        const requestContextPromise = this.requestFactory.apiPollsGradesGetSubresource(id, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPollsGradesGetSubresource(rsp)));
            }));
    }

    /**
     * Retrieves the collection of Proposal resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public apiPollsProposalsGetSubresource(id: string, page?: number, _options?: Configuration): Observable<InlineResponse2003> {
        const requestContextPromise = this.requestFactory.apiPollsProposalsGetSubresource(id, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPollsProposalsGetSubresource(rsp)));
            }));
    }

    /**
     * Removes the Poll resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public deletePollItem(id: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deletePollItem(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePollItem(rsp)));
            }));
    }

    /**
     * This endpoint computes a fresh result from the ballots currently received. For now, you may read a poll's result _at any time_. 
     * Gets the result of a poll
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getForPollResultItem(id: string, _options?: Configuration): Observable<ResultjsonldRead> {
        const requestContextPromise = this.requestFactory.getForPollResultItem(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getForPollResultItem(rsp)));
            }));
    }

    /**
     * Retrieves the collection of Poll resources.
     * @param page The collection page number
     */
    public getPollCollection(page?: number, _options?: Configuration): Observable<InlineResponse2001> {
        const requestContextPromise = this.requestFactory.getPollCollection(page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPollCollection(rsp)));
            }));
    }

    /**
     * Retrieves a Poll resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getPollItem(id: string, _options?: Configuration): Observable<PolljsonldRead> {
        const requestContextPromise = this.requestFactory.getPollItem(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPollItem(rsp)));
            }));
    }

    /**
     * Creates a Poll resource.
     * @param polljsonldCreate The new Poll resource
     */
    public postPollCollection(polljsonldCreate?: PolljsonldCreate, _options?: Configuration): Observable<PolljsonldRead> {
        const requestContextPromise = this.requestFactory.postPollCollection(polljsonldCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postPollCollection(rsp)));
            }));
    }

}

import { ProposalApiRequestFactory, ProposalApiResponseProcessor} from "../apis/ProposalApi";
export class ObservableProposalApi {
    private requestFactory: ProposalApiRequestFactory;
    private responseProcessor: ProposalApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProposalApiRequestFactory,
        responseProcessor?: ProposalApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProposalApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProposalApiResponseProcessor();
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param pollId Universally Unique IDentifier of the poll.
     * @param proposalId Universally Unique IDentifier of the proposal.
     * @param page The collection page number
     */
    public apiPollsProposalsBallotsGetSubresource(pollId: string, proposalId: string, page?: number, _options?: Configuration): Observable<InlineResponse2004> {
        const requestContextPromise = this.requestFactory.apiPollsProposalsBallotsGetSubresource(pollId, proposalId, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPollsProposalsBallotsGetSubresource(rsp)));
            }));
    }

    /**
     * Retrieves the collection of Proposal resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public apiPollsProposalsGetSubresource(id: string, page?: number, _options?: Configuration): Observable<InlineResponse2003> {
        const requestContextPromise = this.requestFactory.apiPollsProposalsGetSubresource(id, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPollsProposalsGetSubresource(rsp)));
            }));
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param id Universally Unique IDentifier (UUID) 
     * @param page The collection page number
     */
    public apiProposalsBallotsGetSubresource(id: string, page?: number, _options?: Configuration): Observable<InlineResponse2004> {
        const requestContextPromise = this.requestFactory.apiProposalsBallotsGetSubresource(id, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiProposalsBallotsGetSubresource(rsp)));
            }));
    }

    /**
     * Retrieves a Proposal resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getProposalItem(id: string, _options?: Configuration): Observable<ProposaljsonldRead> {
        const requestContextPromise = this.requestFactory.getProposalItem(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProposalItem(rsp)));
            }));
    }

    /**
     * Creates a Proposal resource.
     * @param id Universally Unique IDentifier (UUID) 
     * @param proposaljsonldCreate The new Proposal resource
     */
    public postProposalCollection(id: string, proposaljsonldCreate?: ProposaljsonldCreate, _options?: Configuration): Observable<ProposaljsonldRead> {
        const requestContextPromise = this.requestFactory.postProposalCollection(id, proposaljsonldCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postProposalCollection(rsp)));
            }));
    }

}

import { RegistrationApiRequestFactory, RegistrationApiResponseProcessor} from "../apis/RegistrationApi";
export class ObservableRegistrationApi {
    private requestFactory: RegistrationApiRequestFactory;
    private responseProcessor: RegistrationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RegistrationApiRequestFactory,
        responseProcessor?: RegistrationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RegistrationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RegistrationApiResponseProcessor();
    }

    /**
     * Registers a new User in the database.  The email is optional and will help you reset a forgotten password.
     * Registers a new User.
     * @param userjsonldCreate The new User resource
     */
    public postUserCollection(userjsonldCreate?: UserjsonldCreate, _options?: Configuration): Observable<UserjsonldRead> {
        const requestContextPromise = this.requestFactory.postUserCollection(userjsonldCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postUserCollection(rsp)));
            }));
    }

}

import { ResultApiRequestFactory, ResultApiResponseProcessor} from "../apis/ResultApi";
export class ObservableResultApi {
    private requestFactory: ResultApiRequestFactory;
    private responseProcessor: ResultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ResultApiRequestFactory,
        responseProcessor?: ResultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ResultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ResultApiResponseProcessor();
    }

    /**
     * This endpoint computes a fresh result from the ballots currently received. For now, you may read a poll's result _at any time_. 
     * Gets the result of a poll
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getForPollResultItem(id: string, _options?: Configuration): Observable<ResultjsonldRead> {
        const requestContextPromise = this.requestFactory.getForPollResultItem(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getForPollResultItem(rsp)));
            }));
    }

}

import { ToolsApiRequestFactory, ToolsApiResponseProcessor} from "../apis/ToolsApi";
export class ObservableToolsApi {
    private requestFactory: ToolsApiRequestFactory;
    private responseProcessor: ToolsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ToolsApiRequestFactory,
        responseProcessor?: ToolsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ToolsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ToolsApiResponseProcessor();
    }

    /**
     * This endpoint requires no authentication. 
     * Resolves the provided tally. 
     */
    public getJsonResultFromTally(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getJsonResultFromTally(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJsonResultFromTally(rsp)));
            }));
    }

    /**
     * The resulting merit profile is not ranked, proposals are shown in the order they were submitted. This endpoint requires no authentication. 
     * Generates a merit profile as SVG of the provided tally. 
     */
    public getSvgMeritProfileFromTally(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getSvgMeritProfileFromTally(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSvgMeritProfileFromTally(rsp)));
            }));
    }

}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * Removes the User resource.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public deleteUserItem(id: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteUserItem(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUserItem(rsp)));
            }));
    }

    /**
     * Only administrators are allowed to access this.
     * Retrieves the collection of Users.
     * @param page The collection page number
     */
    public getUserCollection(page?: number, _options?: Configuration): Observable<InlineResponse2005> {
        const requestContextPromise = this.requestFactory.getUserCollection(page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserCollection(rsp)));
            }));
    }

    /**
     * You are authorized to get information about yourself only.
     * Gets information about a User.
     * @param id Universally Unique IDentifier (UUID) 
     */
    public getUserItem(id: string, _options?: Configuration): Observable<UserjsonldRead> {
        const requestContextPromise = this.requestFactory.getUserItem(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserItem(rsp)));
            }));
    }

    /**
     * Creating and participating to private polls require authentication.  The Token returned is a [JWT](https://jwt.io/) valid for one hour.
     * Returns an authentication Token from login Credentials.
     * @param credentials User Credentials
     */
    public postCredentialsItem(credentials?: Credentials, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.postCredentialsItem(credentials, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCredentialsItem(rsp)));
            }));
    }

    /**
     * Registers a new User in the database.  The email is optional and will help you reset a forgotten password.
     * Registers a new User.
     * @param userjsonldCreate The new User resource
     */
    public postUserCollection(userjsonldCreate?: UserjsonldCreate, _options?: Configuration): Observable<UserjsonldRead> {
        const requestContextPromise = this.requestFactory.postUserCollection(userjsonldCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postUserCollection(rsp)));
            }));
    }

    /**
     * Logged-in users are authorized to update information about themselves only.
     * Updates information about a User.
     * @param id Universally Unique IDentifier (UUID) 
     * @param userjsonldEdit The updated User resource
     */
    public putUserItem(id: string, userjsonldEdit?: UserjsonldEdit, _options?: Configuration): Observable<UserjsonldRead> {
        const requestContextPromise = this.requestFactory.putUserItem(id, userjsonldEdit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putUserItem(rsp)));
            }));
    }

}
