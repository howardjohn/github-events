
interface EventBase {
    id: string,
    type: string,
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

interface CheckRunEvent extends EventBase {
    type: "CheckRunEvent"
}

interface CheckSuiteEvent extends EventBase {
    type: "CheckSuiteEvent"
}

interface CommitCommentEvent extends EventBase {
    type: "CommitCommentEvent"
}

interface ContentReferenceEvent extends EventBase {
    type: "ContentReferenceEvent"
}

interface CreateEvent extends EventBase {
    type: "CreateEvent"
}

interface DeleteEvent extends EventBase {
    type: "DeleteEvent"
}

interface DeploymentEvent extends EventBase {
    type: "DeploymentEvent"
}

interface DeploymentStatusEvent extends EventBase {
    type: "DeploymentStatusEvent"
}

interface DownloadEvent extends EventBase {
    type: "DownloadEvent"
}

interface FollowEvent extends EventBase {
    type: "FollowEvent"
}

interface ForkEvent extends EventBase {
    type: "ForkEvent"
}

interface ForkApplyEvent extends EventBase {
    type: "ForkApplyEvent"
}

interface GitHubAppAuthorizationEvent extends EventBase {
    type: "GitHubAppAuthorizationEvent"
}

interface GistEvent extends EventBase {
    type: "GistEvent"
}

interface GollumEvent extends EventBase {
    type: "GollumEvent"
}

interface InstallationEvent extends EventBase {
    type: "InstallationEvent"
}

interface InstallationRepositoriesEvent extends EventBase {
    type: "InstallationRepositoriesEvent"
}

interface IssueCommentEvent extends EventBase {
    type: "IssueCommentEvent"
}

interface IssuesEvent extends EventBase {
    type: "IssuesEvent"
}

interface LabelEvent extends EventBase {
    type: "LabelEvent"
}

interface MarketplacePurchaseEvent extends EventBase {
    type: "MarketplacePurchaseEvent"
}

interface MemberEvent extends EventBase {
    type: "MemberEvent"
}

interface MembershipEvent extends EventBase {
    type: "MembershipEvent"
}

interface MilestoneEvent extends EventBase {
    type: "MilestoneEvent"
}

interface OrganizationEvent extends EventBase {
    type: "OrganizationEvent"
}

interface OrgBlockEvent extends EventBase {
    type: "OrgBlockEvent"
}

interface PageBuildEvent extends EventBase {
    type: "PageBuildEvent"
}

interface ProjectCardEvent extends EventBase {
    type: "ProjectCardEvent"
}

interface ProjectColumnEvent extends EventBase {
    type: "ProjectColumnEvent"
}

interface ProjectEvent extends EventBase {
    type: "ProjectEvent"
}

interface PublicEvent extends EventBase {
    type: "PublicEvent"
}

interface PullRequestEvent extends EventBase {
    type: "PullRequestEvent"
}

interface PullRequestReviewEvent extends EventBase {
    type: "PullRequestReviewEvent"
}

interface PullRequestReviewCommentEvent extends EventBase {
    type: "PullRequestReviewCommentEvent"
}

interface PushEvent extends EventBase {
    type: "PushEvent"
}

interface ReleaseEvent extends EventBase {
    type: "ReleaseEvent"
}

interface RepositoryEvent extends EventBase {
    type: "RepositoryEvent"
}

interface RepositoryImportEvent extends EventBase {
    type: "RepositoryImportEvent"
}

interface RepositoryVulnerabilityAlertEvent extends EventBase {
    type: "RepositoryVulnerabilityAlertEvent"
}

interface SecurityAdvisoryEvent extends EventBase {
    type: "SecurityAdvisoryEvent"
}

interface StatusEvent extends EventBase {
    type: "StatusEvent"
}

interface TeamEvent extends EventBase {
    type: "TeamEvent"
}

interface TeamAddEvent extends EventBase {
    type: "TeamAddEvent"
}

interface WatchEvent extends EventBase {
    type: "WatchEvent"
}


type GithubEvent = CheckRunEvent | CheckSuiteEvent | CommitCommentEvent | ContentReferenceEvent | CreateEvent | DeleteEvent | DeploymentEvent | DeploymentStatusEvent | DownloadEvent | FollowEvent | ForkEvent | ForkApplyEvent | GitHubAppAuthorizationEvent | GistEvent | GollumEvent | InstallationEvent | InstallationRepositoriesEvent | IssueCommentEvent | IssuesEvent | LabelEvent | MarketplacePurchaseEvent | MemberEvent | MembershipEvent | MilestoneEvent | OrganizationEvent | OrgBlockEvent | PageBuildEvent | ProjectCardEvent | ProjectColumnEvent | ProjectEvent | PublicEvent | PullRequestEvent | PullRequestReviewEvent | PullRequestReviewCommentEvent | PushEvent | ReleaseEvent | RepositoryEvent | RepositoryImportEvent | RepositoryVulnerabilityAlertEvent | SecurityAdvisoryEvent | StatusEvent | TeamEvent | TeamAddEvent | WatchEvent

export default GithubEvent
