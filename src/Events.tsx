
interface EventBase<T, P> {
    id: string,
    type: T,
    payload: P,
    public: boolean,
    created_at: string
    repo: {
        id: number,
        name: string,
        url: string
    },
    actor: {
        id: number,
        login: string,
        gravatar_id: string,
        avatar_url: string,
        url: string
    },
    org: {
        id: number,
        login: string,
        gravatar_id: string,
        url: string,
        avatar_url: string
    }
}

export interface Comment {
    html_url: string,
    body: string
}

export interface Issue {
    html_url: string,
    title: string,
    body: string,
    number: number
}

export interface PullRequest {
    html_url: string,
    number: number,
    title: string,
    body: string
}

export interface Commit {
    message: string,
    distinct: boolean
}


interface CheckRunEvent extends EventBase<'CheckRunEvent', {}> { }

interface CheckSuiteEvent extends EventBase<'CheckSuiteEvent', {}> { }

interface CommitCommentEvent extends EventBase<'CommitCommentEvent', { comment: Comment }> { }

interface ContentReferenceEvent extends EventBase<'ContentReferenceEvent', {}> { }

interface CreateEvent extends EventBase<'CreateEvent', {}> { }

interface DeleteEvent extends EventBase<'DeleteEvent', {}> { }

interface DeploymentEvent extends EventBase<'DeploymentEvent', {}> { }

interface DeploymentStatusEvent extends EventBase<'DeploymentStatusEvent', {}> { }

interface DownloadEvent extends EventBase<'DownloadEvent', {}> { }

interface FollowEvent extends EventBase<'FollowEvent', {}> { }

interface ForkEvent extends EventBase<'ForkEvent', {}> { }

interface ForkApplyEvent extends EventBase<'ForkApplyEvent', {}> { }

interface GitHubAppAuthorizationEvent extends EventBase<'GitHubAppAuthorizationEvent', {}> { }

interface GistEvent extends EventBase<'GistEvent', {}> { }

interface GollumEvent extends EventBase<'GollumEvent', { pages: Array<{ action: string, html_url: string, page_name: string }> }> { }

interface InstallationEvent extends EventBase<'InstallationEvent', {}> { }

interface InstallationRepositoriesEvent extends EventBase<'InstallationRepositoriesEvent', {}> { }

interface IssueCommentEvent extends EventBase<'IssueCommentEvent', { comment: Comment, issue: Issue }> { }

interface IssuesEvent extends EventBase<'IssuesEvent', {action: string, issue: Issue}> { }

interface LabelEvent extends EventBase<'LabelEvent', {}> { }

interface MarketplacePurchaseEvent extends EventBase<'MarketplacePurchaseEvent', {}> { }

interface MemberEvent extends EventBase<'MemberEvent', {}> { }

interface MembershipEvent extends EventBase<'MembershipEvent', {}> { }

interface MilestoneEvent extends EventBase<'MilestoneEvent', {}> { }

interface OrganizationEvent extends EventBase<'OrganizationEvent', {}> { }

interface OrgBlockEvent extends EventBase<'OrgBlockEvent', {}> { }

interface PageBuildEvent extends EventBase<'PageBuildEvent', {}> { }

interface ProjectCardEvent extends EventBase<'ProjectCardEvent', {}> { }

interface ProjectColumnEvent extends EventBase<'ProjectColumnEvent', {}> { }

interface ProjectEvent extends EventBase<'ProjectEvent', {}> { }

interface PublicEvent extends EventBase<'PublicEvent', {}> { }

interface PullRequestEvent extends EventBase<'PullRequestEvent', {}> { }

interface PullRequestReviewEvent extends EventBase<'PullRequestReviewEvent', {}> { }

interface PullRequestReviewCommentEvent extends EventBase<'PullRequestReviewCommentEvent', { comment: Comment, pull_request: PullRequest }> { }

interface PushEvent extends EventBase<'PushEvent', {commits: Array<Commit>}> { }

interface ReleaseEvent extends EventBase<'ReleaseEvent', {}> { }

interface RepositoryEvent extends EventBase<'RepositoryEvent', {}> { }

interface RepositoryImportEvent extends EventBase<'RepositoryImportEvent', {}> { }

interface RepositoryVulnerabilityAlertEvent extends EventBase<'RepositoryVulnerabilityAlertEvent', {}> { }

interface SecurityAdvisoryEvent extends EventBase<'SecurityAdvisoryEvent', {}> { }

interface StatusEvent extends EventBase<'StatusEvent', {}> { }

interface TeamEvent extends EventBase<'TeamEvent', {}> { }

interface TeamAddEvent extends EventBase<'TeamAddEvent', {}> { }

interface WatchEvent extends EventBase<'WatchEvent', {}> { }


export type GithubEvent = CheckRunEvent | CheckSuiteEvent | CommitCommentEvent | ContentReferenceEvent | CreateEvent | DeleteEvent | DeploymentEvent | DeploymentStatusEvent | DownloadEvent | FollowEvent | ForkEvent | ForkApplyEvent | GitHubAppAuthorizationEvent | GistEvent | GollumEvent | InstallationEvent | InstallationRepositoriesEvent | IssueCommentEvent | IssuesEvent | LabelEvent | MarketplacePurchaseEvent | MemberEvent | MembershipEvent | MilestoneEvent | OrganizationEvent | OrgBlockEvent | PageBuildEvent | ProjectCardEvent | ProjectColumnEvent | ProjectEvent | PublicEvent | PullRequestEvent | PullRequestReviewEvent | PullRequestReviewCommentEvent | PushEvent | ReleaseEvent | RepositoryEvent | RepositoryImportEvent | RepositoryVulnerabilityAlertEvent | SecurityAdvisoryEvent | StatusEvent | TeamEvent | TeamAddEvent | WatchEvent

