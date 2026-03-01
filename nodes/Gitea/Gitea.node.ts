import {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { giteaMigrateFields, executeMigrate } from './GiteaMigrate';
import { giteaRepositoryGetFields, executeRepositoryGet } from './GiteaRepositoryGet';
import { executeRepositoryDelete } from './GiteaRepositoryDelete';
import { giteaRepositoryEditFields, executeRepositoryEdit } from './GiteaRepositoryEdit';
import {
	giteaActionArtifactGetAllFields,
	executeActionArtifactGetAll,
} from './GiteaActionArtifactGetAll';
import { executeActionRunDelete } from './GiteaActionRunDelete';
import {
	giteaActionSecretCreateOrUpdateFields,
	executeActionSecretCreateOrUpdate,
} from './GiteaActionSecretCreateOrUpdate';
import { executeRepositorySearch } from './GiteaRepositorySearch';
import { executeActionArtifactGet } from './GiteaActionArtifactGet';
import { executeActionArtifactDelete } from './GiteaActionArtifactDelete';
import { executeActionArtifactDownload } from './GiteaActionArtifactDownload';
import { executeActionJobGetAll } from './GiteaActionJobGetAll';
import { executeActionJobGet } from './GiteaActionJobGet';
import { executeActionJobLogDownload } from './GiteaActionJobLogDownload';
import { executeActionRunnerGetAll } from './GiteaActionRunnerGetAll';
import { executeActionRunnerRegistrationTokenGet } from './GiteaActionRunnerRegistrationTokenGet';
import { executeActionRunnerRegistrationTokenCreate } from './GiteaActionRunnerRegistrationTokenCreate';
import { executeActionRunnerGet } from './GiteaActionRunnerGet';
import { executeActionRunnerDelete } from './GiteaActionRunnerDelete';
import { executeActionRunGetAll } from './GiteaActionRunGetAll';
import { executeActionRunGet } from './GiteaActionRunGet';
import { executeActionRunArtifactGetAll } from './GiteaActionRunArtifactGetAll';
import { executeActionRunJobGetAll } from './GiteaActionRunJobGetAll';
import { executeActionSecretGetAll } from './GiteaActionSecretGetAll';
import { executeActionSecretDelete } from './GiteaActionSecretDelete';
import { executeActionTaskGetAll } from './GiteaActionTaskGetAll';
import { executeActionVariableGetAll } from './GiteaActionVariableGetAll';
import { executeActionVariableGet } from './GiteaActionVariableGet';
import { executeActionVariableUpdate } from './GiteaActionVariableUpdate';
import { executeActionVariableCreate } from './GiteaActionVariableCreate';
import { executeActionVariableDelete } from './GiteaActionVariableDelete';
import { executeActionWorkflowGetAll } from './GiteaActionWorkflowGetAll';
import { executeActionWorkflowGet } from './GiteaActionWorkflowGet';
import { executeActionWorkflowDisable } from './GiteaActionWorkflowDisable';
import { executeActionWorkflowDispatch } from './GiteaActionWorkflowDispatch';
import { executeActionWorkflowEnable } from './GiteaActionWorkflowEnable';
import { executeRepositoryActivityFeedGetAll } from './GiteaRepositoryActivityFeedGetAll';
import { executeRepositoryArchiveGet } from './GiteaRepositoryArchiveGet';
import { executeRepositoryAssigneeGetAll } from './GiteaRepositoryAssigneeGetAll';
import { executeRepositoryAvatarUpdate } from './GiteaRepositoryAvatarUpdate';
import { executeRepositoryAvatarDelete } from './GiteaRepositoryAvatarDelete';
import { executeRepositoryBranchProtectionGetAll } from './GiteaRepositoryBranchProtectionGetAll';
import { executeRepositoryBranchProtectionCreate } from './GiteaRepositoryBranchProtectionCreate';
import { executeRepositoryBranchProtectionPriorityUpdate } from './GiteaRepositoryBranchProtectionPriorityUpdate';
import { executeRepositoryBranchProtectionGet } from './GiteaRepositoryBranchProtectionGet';
import { executeRepositoryBranchProtectionDelete } from './GiteaRepositoryBranchProtectionDelete';
import { executeRepositoryBranchProtectionEdit } from './GiteaRepositoryBranchProtectionEdit';
import { executeRepositoryBranchGetAll } from './GiteaRepositoryBranchGetAll';
import { executeRepositoryBranchCreate } from './GiteaRepositoryBranchCreate';
import { executeRepositoryBranchGet } from './GiteaRepositoryBranchGet';
import { executeRepositoryBranchDelete } from './GiteaRepositoryBranchDelete';
import { executeRepositoryBranchRename } from './GiteaRepositoryBranchRename';
import { executeRepositoryCollaboratorGetAll } from './GiteaRepositoryCollaboratorGetAll';
import { executeRepositoryCollaboratorCheck } from './GiteaRepositoryCollaboratorCheck';
import { executeRepositoryCollaboratorAdd } from './GiteaRepositoryCollaboratorAdd';
import { executeRepositoryCollaboratorDelete } from './GiteaRepositoryCollaboratorDelete';
import { executeRepositoryCollaboratorPermissionGet } from './GiteaRepositoryCollaboratorPermissionGet';
import { executeRepositoryCommitGetAll } from './GiteaRepositoryCommitGetAll';
import { executeRepositoryCommitStatusGetCombined } from './GiteaRepositoryCommitStatusGetCombined';
import { executeRepositoryCommitStatusGetAll } from './GiteaRepositoryCommitStatusGetAll';
import { executeRepositoryCommitPullRequestGet } from './GiteaRepositoryCommitPullRequestGet';
import { executeRepositoryCommitCompareGet } from './GiteaRepositoryCommitCompareGet';

// ActivityPub
import { executeActivityPubPersonGet } from './GiteaActivityPubPersonGet';
import { executeActivityPubInboxPost } from './GiteaActivityPubInboxPost';

// Issues
import { executeIssueSearch } from './GiteaIssueSearch';
import { executeIssueGetAll } from './GiteaIssueGetAll';
import { executeIssueCreate } from './GiteaIssueCreate';
import { executeIssueGet } from './GiteaIssueGet';
import { executeIssueDelete } from './GiteaIssueDelete';
import { executeIssueEdit } from './GiteaIssueEdit';
import { executeIssueCommentGetAll } from './GiteaIssueCommentGetAll';
import { executeIssueCommentCreate } from './GiteaIssueCommentCreate';
import { executeIssueCommentDelete } from './GiteaIssueCommentDelete';
import { executeIssueCommentEdit } from './GiteaIssueCommentEdit';
import { executeIssueLabelGetAll } from './GiteaIssueLabelGetAll';
import { executeIssueLabelAdd } from './GiteaIssueLabelAdd';
import { executeIssueLabelDelete } from './GiteaIssueLabelDelete';
import { executeIssueLabelDeleteAll } from './GiteaIssueLabelDeleteAll';
import { executeIssueDependencyGetAll } from './GiteaIssueDependencyGetAll';
import { executeIssueDependencyCreate } from './GiteaIssueDependencyCreate';
import { executeIssueDependencyDelete } from './GiteaIssueDependencyDelete';
import { executeIssueBlockGetAll } from './GiteaIssueBlockGetAll';
import { executeIssueBlockCreate } from './GiteaIssueBlockCreate';
import { executeIssueBlockDelete } from './GiteaIssueBlockDelete';
import { executeIssueStopwatchStart } from './GiteaIssueStopwatchStart';
import { executeIssueStopwatchStop } from './GiteaIssueStopwatchStop';
import { executeIssueStopwatchDelete } from './GiteaIssueStopwatchDelete';
import { executeIssueTimelineGetAll } from './GiteaIssueTimelineGetAll';
import { executeIssueTrackedTimeGetAll } from './GiteaIssueTrackedTimeGetAll';
import { executeIssueTrackedTimeCreate } from './GiteaIssueTrackedTimeCreate';
import { executeIssueTrackedTimeDelete } from './GiteaIssueTrackedTimeDelete';
import { executeIssueTrackedTimeReset } from './GiteaIssueTrackedTimeReset';
import { executeIssueSubscriptionGetAll } from './GiteaIssueSubscriptionGetAll';
import { executeIssueSubscriptionGet } from './GiteaIssueSubscriptionGet';
import { executeIssueSubscriptionCreate } from './GiteaIssueSubscriptionCreate';
import { executeIssueSubscriptionDelete } from './GiteaIssueSubscriptionDelete';
import { executeIssueReactionGetAll } from './GiteaIssueReactionGetAll';
import { executeIssueReactionCreate } from './GiteaIssueReactionCreate';
import { executeIssueReactionDelete } from './GiteaIssueReactionDelete';
import { executeIssueCommentReactionGetAll } from './GiteaIssueCommentReactionGetAll';
import { executeIssueCommentReactionCreate } from './GiteaIssueCommentReactionCreate';
import { executeIssueCommentReactionDelete } from './GiteaIssueCommentReactionDelete';
import { executeIssueAttachmentGetAll } from './GiteaIssueAttachmentGetAll';
import { executeIssueAttachmentGet } from './GiteaIssueAttachmentGet';

// Miscellaneous
import { executeMiscellaneousGitignoreGetAll } from './GiteaMiscellaneousGitignoreGetAll';
import { executeMiscellaneousGitignoreGet } from './GiteaMiscellaneousGitignoreGet';
import { executeMiscellaneousLabelTemplateGetAll } from './GiteaMiscellaneousLabelTemplateGetAll';
import { executeMiscellaneousLabelTemplateGet } from './GiteaMiscellaneousLabelTemplateGet';
import { executeMiscellaneousLicenseGetAll } from './GiteaMiscellaneousLicenseGetAll';
import { executeMiscellaneousLicenseGet } from './GiteaMiscellaneousLicenseGet';
import { executeMiscellaneousMarkdownRender } from './GiteaMiscellaneousMarkdownRender';
import { executeMiscellaneousMarkdownRawRender } from './GiteaMiscellaneousMarkdownRawRender';
import { executeMiscellaneousMarkupRender } from './GiteaMiscellaneousMarkupRender';
import { executeMiscellaneousNodeInfoGet } from './GiteaMiscellaneousNodeInfoGet';
import { executeMiscellaneousSigningKeyGpgGet } from './GiteaMiscellaneousSigningKeyGpgGet';
import { executeMiscellaneousSigningKeyPubGet } from './GiteaMiscellaneousSigningKeyPubGet';
import { executeMiscellaneousVersionGet } from './GiteaMiscellaneousVersionGet';

// Admin
import { executeAdminCronGetAll } from './GiteaAdminCronGetAll';
import { executeAdminCronRun } from './GiteaAdminCronRun';
import { executeAdminEmailGetAll } from './GiteaAdminEmailGetAll';
import { executeAdminEmailSearch } from './GiteaAdminEmailSearch';
import { executeAdminOrgGetAll } from './GiteaAdminOrgGetAll';
import { executeAdminHookGetAll } from './GiteaAdminHookGetAll';
import { executeAdminHookCreate } from './GiteaAdminHookCreate';
import { executeAdminHookGet } from './GiteaAdminHookGet';
import { executeAdminHookDelete } from './GiteaAdminHookDelete';
import { executeAdminHookUpdate } from './GiteaAdminHookUpdate';
import { executeAdminUserSearch } from './GiteaAdminUserSearch';
import { executeAdminUserCreate } from './GiteaAdminUserCreate';
import { executeAdminUserDelete } from './GiteaAdminUserDelete';
import { executeAdminUserEdit } from './GiteaAdminUserEdit';
import { executeAdminUserRename } from './GiteaAdminUserRename';
import { executeAdminUserRepoCreate } from './GiteaAdminUserRepoCreate';
import { executeAdminUnadoptedGetAll } from './GiteaAdminUnadoptedGetAll';
import { executeAdminUnadoptedAdopt } from './GiteaAdminUnadoptedAdopt';
import { executeAdminUnadoptedDelete } from './GiteaAdminUnadoptedDelete';
import { executeAdminActionJobGetAll } from './GiteaAdminActionJobGetAll';
import { executeAdminActionRunnerGetAll } from './GiteaAdminActionRunnerGetAll';
import { executeAdminActionRunnerRegistrationTokenGet } from './GiteaAdminActionRunnerRegistrationTokenGet';
import { executeAdminActionRunnerGet } from './GiteaAdminActionRunnerGet';
import { executeAdminActionRunnerDelete } from './GiteaAdminActionRunnerDelete';
import { executeAdminActionRunGetAll } from './GiteaAdminActionRunGetAll';
import { executeAdminUserBadgeGetAll } from './GiteaAdminUserBadgeGetAll';
import { executeAdminUserBadgeCreate } from './GiteaAdminUserBadgeCreate';
import { executeAdminUserBadgeDelete } from './GiteaAdminUserBadgeDelete';
import { executeAdminUserPublicKeyCreate } from './GiteaAdminUserPublicKeyCreate';
import { executeAdminUserPublicKeyDelete } from './GiteaAdminUserPublicKeyDelete';

// Notifications
import { executeNotificationGetAll } from './GiteaNotificationGetAll';
import { executeNotificationMarkRead } from './GiteaNotificationMarkRead';
import { executeNotificationCheckUnread } from './GiteaNotificationCheckUnread';
import { executeNotificationGet } from './GiteaNotificationGet';
import { executeNotificationMarkReadById } from './GiteaNotificationMarkReadById';
import { executeRepositoryNotificationGetAll } from './GiteaRepositoryNotificationGetAll';
import { executeRepositoryNotificationMarkRead } from './GiteaRepositoryNotificationMarkRead';

// Labels
import { executeRepositoryLabelGetAll } from './GiteaRepositoryLabelGetAll';
import { executeRepositoryLabelCreate } from './GiteaRepositoryLabelCreate';
import { executeRepositoryLabelGet } from './GiteaRepositoryLabelGet';
import { executeRepositoryLabelDelete } from './GiteaRepositoryLabelDelete';
import { executeRepositoryLabelUpdate } from './GiteaRepositoryLabelUpdate';

// Organizations
import { executeOrgGetAll } from './GiteaOrgGetAll';
import { executeOrgCreate } from './GiteaOrgCreate';
import { executeOrgGet } from './GiteaOrgGet';
import { executeOrgDelete } from './GiteaOrgDelete';
import { executeOrgEdit } from './GiteaOrgEdit';
import { executeOrgRename } from './GiteaOrgRename';
import { executeOrgActivityFeedGetAll } from './GiteaOrgActivityFeedGetAll';
import { executeOrgMemberGetAll } from './GiteaOrgMemberGetAll';
import { executeOrgMemberCheck } from './GiteaOrgMemberCheck';
import { executeOrgMemberDelete } from './GiteaOrgMemberDelete';
import { executeOrgPublicMemberGetAll } from './GiteaOrgPublicMemberGetAll';
import { executeOrgPublicMemberCheck } from './GiteaOrgPublicMemberCheck';
import { executeOrgPublicMemberCreate } from './GiteaOrgPublicMemberCreate';
import { executeOrgPublicMemberDelete } from './GiteaOrgPublicMemberDelete';
import { executeOrgRepoGetAll } from './GiteaOrgRepoGetAll';
import { executeOrgRepoCreate } from './GiteaOrgRepoCreate';
import { executeOrgTeamGetAll } from './GiteaOrgTeamGetAll';
import { executeOrgTeamCreate } from './GiteaOrgTeamCreate';
import { executeOrgTeamSearch } from './GiteaOrgTeamSearch';
import { executeOrgTeamGet } from './GiteaOrgTeamGet';
import { executeOrgTeamDelete } from './GiteaOrgTeamDelete';
import { executeOrgTeamEdit } from './GiteaOrgTeamEdit';
import { executeOrgTeamMemberGetAll } from './GiteaOrgTeamMemberGetAll';
import { executeOrgTeamMemberAdd } from './GiteaOrgTeamMemberAdd';
import { executeOrgTeamMemberDelete } from './GiteaOrgTeamMemberDelete';
import { executeOrgTeamRepoGetAll } from './GiteaOrgTeamRepoGetAll';
import { executeOrgTeamRepoAdd } from './GiteaOrgTeamRepoAdd';
import { executeOrgTeamRepoDelete } from './GiteaOrgTeamRepoDelete';
import { executeOrgUserPermissionGet } from './GiteaOrgUserPermissionGet';
import { executeUserOrgGetAll } from './GiteaUserOrgGetAll';
import { executeUserOrgGetAuthenticated } from './GiteaUserOrgGetAuthenticated';

// Milestones
import { executeMilestoneGetAll } from './GiteaMilestoneGetAll';
import { executeMilestoneCreate } from './GiteaMilestoneCreate';
import { executeMilestoneGet } from './GiteaMilestoneGet';
import { executeMilestoneDelete } from './GiteaMilestoneDelete';
import { executeMilestoneUpdate } from './GiteaMilestoneUpdate';

// Packages
import { executePackageGetAll } from './GiteaPackageGetAll';
import { executePackageVersionGetAll } from './GiteaPackageVersionGetAll';
import { executePackageLatestGet } from './GiteaPackageLatestGet';
import { executePackageLink } from './GiteaPackageLink';
import { executePackageUnlink } from './GiteaPackageUnlink';
import { executePackageGet } from './GiteaPackageGet';
import { executePackageDelete } from './GiteaPackageDelete';
import { executePackageFileGetAll } from './GiteaPackageFileGetAll';

import { executeSettingsApiGet } from './GiteaSettingsApiGet';
import { executeSettingsAttachmentGet } from './GiteaSettingsAttachmentGet';
import { executeSettingsRepositoryGet } from './GiteaSettingsRepositoryGet';
import { executeSettingsUiGet } from './GiteaSettingsUiGet';

import { executeUserGetAuthenticated } from './GiteaUserGetAuthenticated';
import { executeUserRunnerGetAll } from './GiteaUserRunnerGetAll';
import { executeUserRunnerRegistrationTokenGet } from './GiteaUserRunnerRegistrationTokenGet';
import { executeUserRunnerRegistrationTokenCreate } from './GiteaUserRunnerRegistrationTokenCreate';
import { executeUserRunnerGet } from './GiteaUserRunnerGet';
import { executeUserRunnerDelete } from './GiteaUserRunnerDelete';
import { executeUserSecretCreateOrUpdate } from './GiteaUserSecretCreateOrUpdate';
import { executeUserSecretDelete } from './GiteaUserSecretDelete';
import { executeUserVariableGetAll } from './GiteaUserVariableGetAll';
import { executeUserVariableGet } from './GiteaUserVariableGet';
import { executeUserVariableUpdate } from './GiteaUserVariableUpdate';
import { executeUserVariableCreate } from './GiteaUserVariableCreate';
import { executeUserVariableDelete } from './GiteaUserVariableDelete';

// User OAuth2 Application
import { executeUserOauth2ApplicationGetAll } from './GiteaUserOauth2ApplicationGetAll';
import { executeUserOauth2ApplicationCreate } from './GiteaUserOauth2ApplicationCreate';
import { executeUserOauth2ApplicationGet } from './GiteaUserOauth2ApplicationGet';
import { executeUserOauth2ApplicationDelete } from './GiteaUserOauth2ApplicationDelete';
import { executeUserOauth2ApplicationUpdate } from './GiteaUserOauth2ApplicationUpdate';

// User Avatar
import { executeUserAvatarUpdate } from './GiteaUserAvatarUpdate';
import { executeUserAvatarDelete } from './GiteaUserAvatarDelete';

// User Block
import { executeUserBlockGetAll } from './GiteaUserBlockGetAll';
import { executeUserBlockCheck } from './GiteaUserBlockCheck';
import { executeUserBlockCreate } from './GiteaUserBlockCreate';
import { executeUserBlockDelete } from './GiteaUserBlockDelete';

// User Email
import { executeUserEmailGetAll } from './GiteaUserEmailGetAll';
import { executeUserEmailCreate } from './GiteaUserEmailCreate';
import { executeUserEmailDelete } from './GiteaUserEmailDelete';

// User Following
import { executeUserFollowerGetAll } from './GiteaUserFollowerGetAll';
import { executeUserFollowingGetAll } from './GiteaUserFollowingGetAll';
import { executeUserFollowingCheck } from './GiteaUserFollowingCheck';
import { executeUserFollowingCreate } from './GiteaUserFollowingCreate';
import { executeUserFollowingDelete } from './GiteaUserFollowingDelete';

// User GPG Key
import { executeUserGpgKeyVerify } from './GiteaUserGpgKeyVerify';
import { executeUserGpgKeyGetAll } from './GiteaUserGpgKeyGetAll';
import { executeUserGpgKeyCreate } from './GiteaUserGpgKeyCreate';
import { executeUserGpgKeyGet } from './GiteaUserGpgKeyGet';
import { executeUserGpgKeyDelete } from './GiteaUserGpgKeyDelete';
import { executeUserGpgKeyGetAllOfUser } from './GiteaUserGpgKeyGetAllOfUser';

// User Hook
import { executeUserHookGetAll } from './GiteaUserHookGetAll';
import { executeUserHookCreate } from './GiteaUserHookCreate';
import { executeUserHookGet } from './GiteaUserHookGet';
import { executeUserHookDelete } from './GiteaUserHookDelete';
import { executeUserHookUpdate } from './GiteaUserHookUpdate';

// User Public Key
import { executeUserPublicKeyGetAll } from './GiteaUserPublicKeyGetAll';
import { executeUserPublicKeyCreate } from './GiteaUserPublicKeyCreate';
import { executeUserPublicKeyGet } from './GiteaUserPublicKeyGet';
import { executeUserPublicKeyDelete } from './GiteaUserPublicKeyDelete';
import { executeUserPublicKeyGetAllOfUser } from './GiteaUserPublicKeyGetAllOfUser';

// User Repository
import { executeUserRepoGetAll } from './GiteaUserRepoGetAll';
import { executeUserRepoCreate } from './GiteaUserRepoCreate';
import { executeUserRepoGetAllOfUser } from './GiteaUserRepoGetAllOfUser';

// User Settings
import { executeUserSettingsGet } from './GiteaUserSettingsGet';
import { executeUserSettingsUpdate } from './GiteaUserSettingsUpdate';

// User Starred Repository
import { executeUserStarredRepoGetAll } from './GiteaUserStarredRepoGetAll';
import { executeUserStarredRepoCheck } from './GiteaUserStarredRepoCheck';
import { executeUserStarredRepoCreate } from './GiteaUserStarredRepoCreate';
import { executeUserStarredRepoDelete } from './GiteaUserStarredRepoDelete';
import { executeUserStarredRepoGetAllOfUser } from './GiteaUserStarredRepoGetAllOfUser';

// User Stopwatch
import { executeUserStopwatchGetAll } from './GiteaUserStopwatchGetAll';

// User Teams (Authenticated)
import { executeUserTeamGetAll } from './GiteaUserTeamGetAll';

// User Tracked Time (Authenticated)
import { executeUserTrackedTimeGetAll } from './GiteaUserTrackedTimeGetAll';

// User Watched Repository
import { executeUserWatchedRepoGetAll } from './GiteaUserWatchedRepoGetAll';
import { executeUserWatchedRepoGetAllOfUser } from './GiteaUserWatchedRepoGetAllOfUser';

// User Search
import { executeUserSearch } from './GiteaUserSearch';

// User Get (specific user)
import { executeUserGet } from './GiteaUserGet';

// User Activity Feed
import { executeUserActivityFeedGetAll } from './GiteaUserActivityFeedGetAll';

// User Followers (specific user)
import { executeUserFollowersGet } from './GiteaUserFollowersGet';

// User Following (specific user)
import { executeUserFollowingGet } from './GiteaUserFollowingGet';
import { executeUserFollowingCheckAnother } from './GiteaUserFollowingCheckAnother';

// User Access Token
import { executeUserAccessTokenGetAll } from './GiteaUserAccessTokenGetAll';
import { executeUserAccessTokenCreate } from './GiteaUserAccessTokenCreate';
import { executeUserAccessTokenDelete } from './GiteaUserAccessTokenDelete';


export class Gitea implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Gitea',
		name: 'gitea',
		icon: 'file:gitea.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Gitea API',
		usableAsTool: true,
		defaults: { name: 'Gitea' },
		inputs: ['main'],
		outputs: ['main'],
		credentials: [{ name: 'giteaApi', required: true }],
		properties: [
			// ----------------------------------
			// 1. Resources
			// ----------------------------------
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Branch Protection', value: 'branchProtection' },
					{ name: 'Repository', value: 'repository' },
					{ name: 'Repository Action Artifact', value: 'repositoryActionArtifact' },
					{ name: 'Repository Action Job', value: 'repositoryActionJob' },
					{ name: 'Repository Action Run', value: 'repositoryActionRun' },
					{ name: 'Repository Action Runner', value: 'repositoryActionRunner' },
					{ name: 'Repository Action Secret', value: 'repositoryActionSecret' },
					{ name: 'Repository Action Task', value: 'repositoryActionTask' },
					{ name: 'Repository Action Variable', value: 'repositoryActionVariable' },
					{ name: 'Repository Action Workflow', value: 'repositoryActionWorkflow' },
					{ name: 'Repository Branch', value: 'repositoryBranch' },
					{ name: 'Repository Collaborator', value: 'repositoryCollaborator' },
					{ name: 'Repository Commit', value: 'repositoryCommit' },
					{ name: 'ActivityPub', value: 'activitypub' },
					{ name: 'Issue', value: 'issue' },
					{ name: 'Label', value: 'label' },
					{ name: 'Milestone', value: 'milestone' },
					{ name: 'Miscellaneous', value: 'miscellaneous' },
					{ name: 'Notification', value: 'notification' },
					{ name: 'Organization', value: 'organization' },
					{ name: 'Package', value: 'package' },
					{ name: 'Admin', value: 'admin' },
					{ name: 'Setting', value: 'setting' },
					{ name: 'User', value: 'user' },
				],
				default: 'repository',
			},

			// ----------------------------------
			// 2. Operations
			// ----------------------------------

			// Branch Protection
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['branchProtection'] } },
				options: [
					{ name: 'Create', value: 'create', action: 'Create a branch protection' },
					{ name: 'Delete', value: 'delete', action: 'Delete a branch protection' },
					{ name: 'Edit', value: 'edit', action: 'Edit a branch protection' },
					{ name: 'Get', value: 'get', action: 'Get a branch protection' },
					{ name: 'Get Many', value: 'getAll', action: 'Get many branch protections' },
					{ name: 'Update Priorities', value: 'updatePriorities', action: 'Update branch protection priorities' },
				],
				default: 'getAll',
			},

			// Repository
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['repository'] } },
				options: [
					{ name: 'Delete', value: 'delete', action: 'Delete a repository' },
					{ name: 'Delete Avatar', value: 'deleteAvatar', action: 'Delete repository avatar' },
					{ name: 'Edit', value: 'edit', action: 'Edit a repository' },
					{ name: 'Get', value: 'get', action: 'Get a repository' },
					{ name: 'Get Activity Feeds', value: 'getActivityFeeds', action: 'Get a repository s activity feeds' },
					{ name: 'Get Archive', value: 'getArchive', action: 'Get an archive of a repository' },
					{ name: 'List Assignees', value: 'listAssignees', action: 'List repository assignees' },
					{ name: 'Migrate', value: 'migrate', action: 'Migrate a repository' },
					{ name: 'Search', value: 'search', action: 'Search for repositories' },
					{ name: 'Update Avatar', value: 'updateAvatar', action: 'Update repository avatar' },
				],
				default: 'get',
			},

			// Repository Action Artifact
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['repositoryActionArtifact'] } },
				options: [
					{ name: 'Delete', value: 'delete', action: 'Delete a specific artifact' },
					{ name: 'Download', value: 'download', action: 'Download a specific artifact' },
					{ name: 'Get', value: 'get', action: 'Get a specific artifact' },
					{ name: 'Get Many', value: 'getAll', action: 'Get many artifacts for a repository' },
				],
				default: 'getAll',
			},

			// Repository Action Job
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['repositoryActionJob'] } },
				options: [
					{ name: 'Get', value: 'get', action: 'Get a specific job' },
					{ name: 'Get Many', value: 'getAll', action: 'Get many jobs for a repository' },
					{ name: 'Get Logs', value: 'getLogs', action: 'Get job logs' },
				],
				default: 'getAll',
			},
			
			// Repository Action Run
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['repositoryActionRun'] } },
				options: [
					{ name: 'Delete', value: 'delete', action: 'Delete a workflow run' },
					{ name: 'Get', value: 'get', action: 'Get a workflow run' },
					{ name: 'Get Many', value: 'getAll', action: 'Get many runs for a repository' },
					{ name: 'List Artifacts', value: 'listArtifacts', action: 'List artifacts for a repository run' },
					{ name: 'List Jobs', value: 'listJobs', action: 'List jobs for a workflow run' },
				],
				default: 'getAll',
			},

			// Repository Action Runner
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['repositoryActionRunner'] } },
				options: [
					{ name: 'Create Registration Token', value: 'createRegistrationToken', action: 'Create a registration token' },
					{ name: 'Delete', value: 'delete', action: 'Delete a runner' },
					{ name: 'Get', value: 'get', action: 'Get a runner' },
					{ name: 'Get Many', value: 'getAll', action: 'Get many runners' },
					{ name: 'Get Registration Token', value: 'getRegistrationToken', action: 'Get a registration token' },
				],
				default: 'getAll',
			},

			// Repository Action Secret
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['repositoryActionSecret'] } },
				options: [
					{ name: 'Create Or Update', value: 'createOrUpdate', action: 'Create or update a secret' },
					{ name: 'Delete', value: 'delete', action: 'Delete a secret' },
					{ name: 'Get Many', value: 'getAll', action: 'Get many secrets' },
				],
				default: 'getAll',
			},

			// Repository Action Task
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['repositoryActionTask'] } },
				options: [
					{ name: 'Get Many', value: 'getAll', action: 'List a repository s action tasks' },
				],
				default: 'getAll',
			},
			
			// Repository Action Variable
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['repositoryActionVariable'] } },
				options: [
					{ name: 'Create', value: 'create', action: 'Create a repo level variable' },
					{ name: 'Delete', value: 'delete', action: 'Delete a repo level variable' },
					{ name: 'Get', value: 'get', action: 'Get a repo level variable' },
					{ name: 'Get Many', value: 'getAll', action: 'Get repo level variables list' },
					{ name: 'Update', value: 'update', action: 'Update a repo level variable' },
				],
				default: 'getAll',
			},

			// Repository Action Workflow
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['repositoryActionWorkflow'] } },
				options: [
					{ name: 'Disable', value: 'disable', action: 'Disable a workflow' },
					{ name: 'Dispatch', value: 'dispatch', action: 'Create a workflow dispatch event' },
					{ name: 'Enable', value: 'enable', action: 'Enable a workflow' },
					{ name: 'Get', value: 'get', action: 'Get a workflow' },
					{ name: 'Get Many', value: 'getAll', action: 'List repository workflows' },
				],
				default: 'getAll',
			},
			
			// Repository Branch
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['repositoryBranch'] } },
				options: [
					{ name: 'Create', value: 'create', action: 'Create a branch' },
					{ name: 'Delete', value: 'delete', action: 'Delete a branch' },
					{ name: 'Get', value: 'get', action: 'Get a branch' },
					{ name: 'Get Many', value: 'getAll', action: 'Get many branches' },
					{ name: 'Rename', value: 'rename', action: 'Rename a branch' },
				],
				default: 'getAll',
			},

			// Repository Collaborator
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['repositoryCollaborator'] } },
				options: [
					{ name: 'Add', value: 'add', action: 'Add or update a collaborator' },
					{ name: 'Check', value: 'check', action: 'Check if a user is a collaborator' },
					{ name: 'Delete', value: 'delete', action: 'Delete a collaborator' },
					{ name: 'Get Many', value: 'getAll', action: 'Get many collaborators' },
					{ name: 'Get Permission', value: 'getPermission', action: 'Get repository permissions for a user' },
				],
				default: 'getAll',
			},

			// Repository Commit
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['repositoryCommit'] } },
				options: [
					{ name: 'Compare', value: 'compare', action: 'Get commit comparison information' },
					{ name: 'Get All Statuses', value: 'getAllStatuses', action: 'Get a commit s statuses' },
					{ name: 'Get Associated Pull Request', value: 'getPullRequest', action: 'Get the merged pull request of the commit' },
					{ name: 'Get Combined Status', value: 'getCombinedStatus', action: 'Get a commit s combined status' },
					{ name: 'Get Many', value: 'getAll', action: 'Get many commits from a repository' },
				],
				default: 'getAll',
			},

			// ActivityPub
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['activitypub'] } },
				options: [
					{ name: 'Get Person', value: 'getPerson', action: 'Returns the Person actor for a user' },
					{ name: 'Send to Inbox', value: 'postInbox', action: 'Send to the inbox' },
				],
				default: 'getPerson',
			},

			// Issue
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['issue'] } },
				options: [
					{ name: 'Add Comment', value: 'createComment', action: 'Add a comment to an issue' },
					{ name: 'Add Label', value: 'addLabel', action: 'Add a label to an issue' },
					{ name: 'Create', value: 'create', action: 'Create an issue' },
					{ name: 'Delete', value: 'delete', action: 'Delete an issue' },
					{ name: 'Delete Comment', value: 'deleteComment', action: 'Delete a comment' },
					{ name: 'Edit', value: 'edit', action: 'Edit an issue' },
					{ name: 'Edit Comment', value: 'editComment', action: 'Edit a comment' },
					{ name: 'Get', value: 'get', action: 'Get an issue' },
					{ name: 'Get Many', value: 'getAll', action: 'List a repository s issues' },
					{ name: 'Get Many Comments', value: 'getComments', action: 'List all comments on an issue' },
					{ name: 'Get Many Labels', value: 'getLabels', action: 'Get an issue s labels' },
					{ name: 'Remove All Labels', value: 'deleteAllLabels', action: 'Remove all labels from an issue' },
					{ name: 'Remove Label', value: 'deleteLabel', action: 'Remove a label from an issue' },
					{ name: 'Search', value: 'search', action: 'Search for issues across the repositories' },
					{ name: 'Add Dependency', value: 'createDependency', action: 'Add an issue dependency' },
					{ name: 'Get Many Dependencies', value: 'getDependencies', action: 'List an issue s dependencies' },
					{ name: 'Remove Dependency', value: 'deleteDependency', action: 'Remove an issue dependency' },
					{ name: 'Block Issue', value: 'createBlock', action: 'Block the issue' },
					{ name: 'Get Many Blocks', value: 'getBlocks', action: 'List issues that are blocked by this issue' },
					{ name: 'Unblock Issue', value: 'deleteBlock', action: 'Unblock the issue' },
					{ name: 'Start Stopwatch', value: 'startStopwatch', action: 'Start stopwatch on an issue' },
					{ name: 'Stop Stopwatch', value: 'stopStopwatch', action: 'Stop an issue s existing stopwatch' },
					{ name: 'Delete Stopwatch', value: 'deleteStopwatch', action: 'Delete an issue s existing stopwatch' },
					{ name: 'Get Many Timeline Events', value: 'getTimeline', action: 'List all comments and events on an issue' },
					{ name: 'Get Many Tracked Times', value: 'getTrackedTimes', action: 'List an issue s tracked times' },
					{ name: 'Add Tracked Time', value: 'createTrackedTime', action: 'Add tracked time to a issue' },
					{ name: 'Delete Tracked Time', value: 'deleteTrackedTime', action: 'Delete specific tracked time' },
					{ name: 'Reset Tracked Times', value: 'resetTrackedTimes', action: 'Reset a tracked time of an issue' },
					{ name: 'Get Many Subscriptions', value: 'getSubscriptions', action: 'Get users who subscribed on an issue' },
					{ name: 'Check Subscription', value: 'checkSubscription', action: 'Check if user is subscribed to an issue' },
					{ name: 'Add Subscription', value: 'addSubscription', action: 'Subscribe user to issue' },
					{ name: 'Remove Subscription', value: 'deleteSubscription', action: 'Unsubscribe user from issue' },
					{ name: 'Add Reaction', value: 'createReaction', action: 'Add a reaction to an issue' },
					{ name: 'Get Many Reactions', value: 'getReactions', action: 'Get a list reactions of an issue' },
					{ name: 'Remove Reaction', value: 'deleteReaction', action: 'Remove a reaction from an issue' },
					{ name: 'Add Comment Reaction', value: 'createCommentReaction', action: 'Add a reaction to a comment' },
					{ name: 'Get Many Comment Reactions', value: 'getCommentReactions', action: 'Get a list of reactions from a comment' },
					{ name: 'Remove Comment Reaction', value: 'deleteCommentReaction', action: 'Remove a reaction from a comment' },
					{ name: 'Get Many Attachments', value: 'getAttachments', action: 'List issue s attachments' },
					{ name: 'Get Attachment', value: 'getAttachment', action: 'Get an issue attachment' },
				],
				default: 'getAll',
			},

			// Label
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['label'] } },
				options: [
					{ name: 'Create', value: 'create', action: 'Create a label' },
					{ name: 'Delete', value: 'delete', action: 'Delete a label' },
					{ name: 'Get', value: 'get', action: 'Get a single label' },
					{ name: 'Get Many', value: 'getAll', action: 'Get all of a repository s labels' },
					{ name: 'Update', value: 'update', action: 'Update a label' },
				],
				default: 'getAll',
			},

			// Milestone
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['milestone'] } },
				options: [
					{ name: 'Create', value: 'create', action: 'Create a milestone' },
					{ name: 'Delete', value: 'delete', action: 'Delete a milestone' },
					{ name: 'Get', value: 'get', action: 'Get a milestone' },
					{ name: 'Get Many', value: 'getAll', action: 'Get all of a repository s opened milestones' },
					{ name: 'Update', value: 'update', action: 'Update a milestone' },
				],
				default: 'getAll',
			},

			// Miscellaneous
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['miscellaneous'] } },
				options: [
					{ name: 'Get Gitignore Template', value: 'getGitignore', action: 'Returns information about a gitignore template' },
					{ name: 'Get Label Template', value: 'getLabelTemplate', action: 'Returns all labels in a template' },
					{ name: 'Get License Template', value: 'getLicense', action: 'Returns information about a license template' },
					{ name: 'Get Many Gitignore Templates', value: 'getGitignores', action: 'Returns a list of all gitignore templates' },
					{ name: 'Get Many Label Templates', value: 'getLabelTemplates', action: 'Returns a list of all label templates' },
					{ name: 'Get Many License Templates', value: 'getLicenses', action: 'Returns a list of all license templates' },
					{ name: 'Get Nodeinfo', value: 'getNodeInfo', action: 'Returns the nodeinfo of the Gitea application' },
					{ name: 'Get Signing Key GPG', value: 'getSigningKeyGpg', action: 'Get default signing-key.gpg' },
					{ name: 'Get Signing Key Pub', value: 'getSigningKeyPub', action: 'Get default signing-key.pub' },
					{ name: 'Get Version', value: 'getVersion', action: 'Returns the version of the Gitea application' },
					{ name: 'Render Markdown', value: 'renderMarkdown', action: 'Render a markdown document as HTML' },
					{ name: 'Render Markdown Raw', value: 'renderMarkdownRaw', action: 'Render raw markdown as HTML' },
					{ name: 'Render Markup', value: 'renderMarkup', action: 'Render a markup document as HTML' },
				],
				default: 'getVersion',
			},

			// Notification
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['notification'] } },
				options: [
					{ name: 'Check Unread', value: 'checkUnread', action: 'Check if unread notifications exist' },
					{ name: 'Get', value: 'get', action: 'Get notification thread by ID' },
					{ name: 'Get Many', value: 'getAll', action: 'List users s notification threads' },
					{ name: 'Get Many on Repo', value: 'getRepoNotifications', action: 'List users s notification threads on a specific repo' },
					{ name: 'Mark as Read', value: 'markRead', action: 'Mark notification threads as read, pinned or unread' },
					{ name: 'Mark as Read by ID', value: 'markReadById', action: 'Mark notification thread as read by ID' },
					{ name: 'Mark as Read on Repo', value: 'markRepoRead', action: 'Mark notification threads as read, pinned or unread on a specific repo' },
				],
				default: 'getAll',
			},

			// Organization
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['organization'] } },
				options: [
					{ name: 'Add Team Member', value: 'addTeamMember', action: 'Add a team member' },
					{ name: 'Add Team Repo', value: 'addTeamRepo', action: 'Add a repository to a team' },
					{ name: 'Block User', value: 'blockUser', action: 'Block a user' },
					{ name: 'Check Member', value: 'checkMember', action: 'Check if a user is a member' },
					{ name: 'Check Public Member', value: 'checkPublicMember', action: 'Check if a user is a public member' },
					{ name: 'Conceal Member', value: 'concealMember', action: 'Conceal a user s membership' },
					{ name: 'Create', value: 'create', action: 'Create an organization' },
					{ name: 'Create Repo', value: 'createRepo', action: 'Create a repository in an organization' },
					{ name: 'Create Team', value: 'createTeam', action: 'Create a team' },
					{ name: 'Delete', value: 'delete', action: 'Delete an organization' },
					{ name: 'Delete Member', value: 'deleteMember', action: 'Remove a member from an organization' },
					{ name: 'Edit', value: 'edit', action: 'Edit an organization' },
					{ name: 'Edit Team', value: 'editTeam', action: 'Edit a team' },
					{ name: 'Get', value: 'get', action: 'Get an organization' },
					{ name: 'Get Many', value: 'getAll', action: 'Get list of organizations' },
					{ name: 'Get Many Activities', value: 'getActivities', action: 'List an organization s activity feeds' },
					{ name: 'Get Many Members', value: 'getMembers', action: 'List an organization s members' },
					{ name: 'Get Many Public Members', value: 'getPublicMembers', action: 'List an organization s public members' },
					{ name: 'Get Many Repos', value: 'getRepos', action: 'List an organization s repos' },
					{ name: 'Get Many Team Activities', value: 'getTeamActivities', action: 'List a team s activity feeds' },
					{ name: 'Get Many Team Members', value: 'getTeamMembers', action: 'List a team s members' },
					{ name: 'Get Many Team Repos', value: 'getTeamRepos', action: 'List a team s repos' },
					{ name: 'Get Many Teams', value: 'getTeams', action: 'List an organization s teams' },
					{ name: 'Get Team', value: 'getTeam', action: 'Get a team' },
					{ name: 'Get User Permissions', value: 'getUserPermissions', action: 'Get user permissions in organization' },
					{ name: 'Publicize Member', value: 'publicizeMember', action: 'Publicize a user s membership' },
					{ name: 'Remove Team Member', value: 'deleteTeamMember', action: 'Remove a team member' },
					{ name: 'Remove Team Repo', value: 'deleteTeamRepo', action: 'Remove a repository from a team' },
					{ name: 'Rename', value: 'rename', action: 'Rename an organization' },
					{ name: 'Search Teams', value: 'searchTeams', action: 'Search for teams within an organization' },
					{ name: 'Unblock User', value: 'deleteBlock', action: 'Unblock a user' },
				],
				default: 'getAll',
			},

			// Package
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['package'] } },
				options: [
					{ name: 'Delete', value: 'delete', action: 'Delete a package' },
					{ name: 'Get', value: 'get', action: 'Gets a package' },
					{ name: 'Get Many', value: 'getAll', action: 'Gets all packages of an owner' },
					{ name: 'Get Many Files', value: 'getFiles', action: 'Gets all files of a package' },
					{ name: 'Get Many Versions', value: 'getVersions', action: 'Gets all versions of a package' },
					{ name: 'Get Latest Version', value: 'getLatest', action: 'Gets the latest version of a package' },
					{ name: 'Link', value: 'link', action: 'Link a package to a repository' },
					{ name: 'Unlink', value: 'unlink', action: 'Unlink a package from a repository' },
				],
				default: 'getAll',
			},

			// Admin
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['admin'] } },
				options: [
					{ name: 'Adopt Unadopted Repo', value: 'adoptUnadoptedRepo', action: 'Adopt unadopted files as a repository' },
					{ name: 'Create Hook', value: 'createHook', action: 'Create a system hook' },
					{ name: 'Create User', value: 'createUser', action: 'Create a user' },
					{ name: 'Create User Repo', value: 'createUserRepo', action: 'Create a repository on behalf of a user' },
					{ name: 'Delete Hook', value: 'deleteHook', action: 'Delete a system hook' },
					{ name: 'Delete Unadopted Repo', value: 'deleteUnadoptedRepo', action: 'Delete unadopted files' },
					{ name: 'Delete User', value: 'deleteUser', action: 'Delete a user' },
					{ name: 'Edit Hook', value: 'updateHook', action: 'Update a system hook' },
					{ name: 'Edit User', value: 'updateUser', action: 'Edit an existing user' },
					{ name: 'Get Hook', value: 'getHook', action: 'Get a system hook' },
					{ name: 'Get Many Cron Tasks', value: 'getCronTasks', action: 'List cron tasks' },
					{ name: 'Get Many Emails', value: 'getEmails', action: 'List all emails' },
					{ name: 'Get Many Hooks', value: 'getHooks', action: 'List system s webhooks' },
					{ name: 'Get Many Jobs', value: 'getJobs', action: 'Lists all global actions jobs' },
					{ name: 'Get Many Organizations', value: 'getOrgs', action: 'List all organizations' },
					{ name: 'Get Many Runners', value: 'getRunners', action: 'Get all global runners' },
					{ name: 'Get Many Runs', value: 'getRuns', action: 'Lists all global actions runs' },
					{ name: 'Get Many Unadopted Repos', value: 'getUnadoptedRepos', action: 'List unadopted repositories' },
					{ name: 'Get Registration Token', value: 'getRegistrationToken', action: 'Get an global actions runner registration token' },
					{ name: 'Get Runner', value: 'getRunner', action: 'Get an global runner' },
					{ name: 'Rename User', value: 'renameUser', action: 'Rename a user' },
					{ name: 'Run Cron Task', value: 'runCronTask', action: 'Run cron task' },
					{ name: 'Search Emails', value: 'searchEmails', action: 'Search all emails' },
					{ name: 'Search Users', value: 'searchUsers', action: 'Search users according filter conditions' },
					{ name: 'Add User Badge', value: 'addUserBadge', action: 'Add a badge to a user' },
					{ name: 'Delete User Badge', value: 'deleteUserBadge', action: 'Remove a badge from a user' },
					{ name: 'Get User Badges', value: 'getUserBadges', action: 'List a user s badges' },
					{ name: 'Add User Public Key', value: 'addUserPublicKey', action: 'Add a public key on behalf of a user' },
					{ name: 'Delete User Public Key', value: 'deleteUserPublicKey', action: 'Delete a user s public key' },
				],
				default: 'getJobs',
			},

			// Settings
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['setting'] } },
				options: [
					{ name: 'Get API', value: 'getApi', action: 'Get API settings' },
					{ name: 'Get Attachment', value: 'getAttachment', action: 'Get attachment settings' },
					{ name: 'Get Repository', value: 'getRepository', action: 'Get repository settings' },
					{ name: 'Get UI', value: 'getUi', action: 'Get UI settings' },
				],
				default: 'getApi',
			},

			// User
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['user'] } },
				options: [
					{ name: 'Add Email Addresses', value: 'addEmailAddresses', action: 'Add email addresses' },
					{ name: 'Add Follow', value: 'addFollow', action: 'Follow a user' },
					{ name: 'Block User', value: 'blockUser', action: 'Block a user' },
					{ name: 'Check Block', value: 'checkBlock', action: 'Check if a user is blocked' },
					{ name: 'Check Following', value: 'checkFollowing', action: 'Check whether a user is followed' },
					{ name: 'Check Following Another', value: 'checkFollowingAnother', action: 'Check if one user is following another user' },
					{ name: 'Check Starred Repo', value: 'checkStarredRepo', action: 'Whether the authenticated is starring the repo' },
					{ name: 'Create Access Token', value: 'createAccessToken', action: 'Create an access token' },
					{ name: 'Create Avatar', value: 'createAvatar', action: 'Update avatar' },
					{ name: 'Create GPG Key', value: 'createGpgKey', action: 'Create a GPG key' },
					{ name: 'Create Hook', value: 'createHook', action: 'Create a hook' },
					{ name: 'Create OAuth2 Application', value: 'createOauth2Application', action: 'Create a new OAuth2 application' },
					{ name: 'Create Public Key', value: 'createPublicKey', action: 'Create a public key' },
					{ name: 'Create Repo', value: 'createRepo', action: 'Create a repository' },
					{ name: 'Create Secret', value: 'createOrUpdateSecret', action: 'Create or update a secret value in a user scope' },
					{ name: 'Create Runner Registration Token', value: 'createRunnerRegistrationToken', action: 'Create a user\'s actions runner registration token' },
					{ name: 'Create Starred Repo', value: 'createStarredRepo', action: 'Star the given repo' },
					{ name: 'Create Variable', value: 'createVariable', action: 'Create a user-level variable' },
					{ name: 'Delete Access Token', value: 'deleteAccessToken', action: 'Delete an access token' },
					{ name: 'Delete Avatar', value: 'deleteAvatar', action: 'Delete avatar' },
					{ name: 'Delete Block', value: 'deleteBlock', action: 'Unblock a user' },
					{ name: 'Delete Email Addresses', value: 'deleteEmailAddresses', action: 'Delete email addresses' },
					{ name: 'Delete Following', value: 'deleteFollowing', action: 'Unfollow a user' },
					{ name: 'Delete GPG Key', value: 'deleteGpgKey', action: 'Remove a GPG key' },
					{ name: 'Delete Hook', value: 'deleteHook', action: 'Delete a hook' },
					{ name: 'Delete OAuth2 Application', value: 'deleteOauth2Application', action: 'Delete an OAuth2 Application' },
					{ name: 'Delete Public Key', value: 'deletePublicKey', action: 'Delete a public key' },
					{ name: 'Delete Runner', value: 'deleteRunner', action: 'Delete a user-level runner' },
					{ name: 'Delete Secret', value: 'deleteSecret', action: 'Delete a secret in a user scope' },
					{ name: 'Delete Variable', value: 'deleteVariable', action: 'Delete a user-level variable' },
					{ name: 'Get', value: 'get', action: 'Get a user' },
					{ name: 'Get Access Token', value: 'getAccessToken', action: 'List the authenticated user\'s access tokens' },
					{ name: 'Get Activity Feeds', value: 'getActivityFeeds', action: 'List a user\'s activity feeds' },
					{ name: 'Get Authenticated', value: 'getAuthenticated', action: 'Get the authenticated user' },
					{ name: 'Get All Blocks', value: 'getAllBlocks', action: 'List users blocked by the authenticated user' },
					{ name: 'Get All GPG Keys', value: 'getAllGpgKeys', action: 'List the authenticated user\'s GPG keys' },
					{ name: 'Get User\'s GPG Keys', value: 'getAllGpgKeysOfUser', action: 'List the given user\'s GPG keys' },
					{ name: 'Get All Hooks', value: 'getAllHooks', action: 'List the authenticated user\'s webhooks' },
					{ name: 'Get All OAuth2 Applications', value: 'getAllOauth2Applications', action: 'List the authenticated user\'s oauth2 applications' },
					{ name: 'Get All Public Keys', value: 'getAllPublicKeys', action: 'List the authenticated user\'s public keys' },
					{ name: 'Get User\'s Public Keys', value: 'getAllPublicKeysOfUser', action: 'List the given user\'s public keys' },
					{ name: 'Get All Runners', value: 'getAllRunners', action: 'Get user-level runners' },
					{ name: 'Get All Repos', value: 'getAllRepos', action: 'List the repos that the authenticated user owns' },
					{ name: 'Get User\'s Repos', value: 'getAllReposOfUser', action: 'List the repos owned by the given user' },
					{ name: 'Get All Starred Repos', value: 'getAllStarredRepos', action: 'The repos that the authenticated user has starred' },
					{ name: 'Get User\'s Starred Repos', value: 'getAllStarredReposOfUser', action: 'The repos that the given user has starred' },
					{ name: 'Get All Tracked Times', value: 'getAllTrackedTimes', action: 'List the current user\'s tracked times' },
					{ name: 'Get All Variables', value: 'getAllVariables', action: 'Get the user-level list of variables' },
					{ name: 'Get All Watched Repos', value: 'getAllWatchedRepos', action: 'List repositories watched by the authenticated user' },
					{ name: 'Get User\'s Watched Repos', value: 'getAllWatchedReposOfUser', action: 'List the repositories watched by a user' },
					{ name: 'Get Email Addresses', value: 'getEmailAddresses', action: 'List the authenticated user\'s email addresses' },
					{ name: 'Get Followers', value: 'getFollowers', action: 'List the authenticated user\'s followers' },
					{ name: 'Get User\'s Followers', value: 'getFollowersOfUser', action: 'List the given user\'s followers' },
					{ name: 'Get Following', value: 'getFollowing', action: 'List the users that the authenticated user is following' },
					{ name: 'Get User\'s Following', value: 'getFollowingOfUser', action: 'List the users that the given user is following' },
					{ name: 'Get Heatmap', value: 'getHeatmap', action: 'Get a user\'s heatmap' },
					{ name: 'Get GPG Key', value: 'getGpgKey', action: 'Get a GPG key' },
					{ name: 'Get Hook', value: 'getHook', action: 'Get a hook' },
					{ name: 'Get OAuth2 Application', value: 'getOauth2Application', action: 'Get an OAuth2 Application' },
					{ name: 'Get Organizations', value: 'getOrgs', action: 'List the current user\'s organizations' },
					{ name: 'Get User Organizations', value: 'getUserOrgs', action: 'List a user\'s organizations' },
					{ name: 'Get Public Key', value: 'getPublicKey', action: 'Get a public key' },
					{ name: 'Get Runner', value: 'getRunner', action: 'Get an user-level runner' },
					{ name: 'Get Runner Registration Token', value: 'getRunnerRegistrationToken', action: 'Get an user\'s actions runner registration token' },
					{ name: 'Get Search', value: 'getSearch', action: 'Search for users' },
					{ name: 'Get Settings', value: 'getSettings', action: 'Get user settings' },
					{ name: 'Get Starred Repo', value: 'getStarredRepo', action: 'Whether the authenticated is starring the repo' },
					{ name: 'Get Stopwatches', value: 'getStopwatches', action: 'Get list of all existing stopwatches' },
					{ name: 'Get Teams', value: 'getTeams', action: 'List all the teams a user belongs to' },
					{ name: 'Get Tracked Times', value: 'getTrackedTimes', action: 'List the current user\'s tracked times' },
					{ name: 'Get Variable', value: 'getVariable', action: 'Get a user-level variable' },
					{ name: 'Update Hook', value: 'updateHook', action: 'Update a hook' },
					{ name: 'Update OAuth2 Application', value: 'updateOauth2Application', action: 'Update an OAuth2 Application' },
					{ name: 'Update Settings', value: 'updateSettings', action: 'Update user settings' },
					{ name: 'Update Variable', value: 'updateVariable', action: 'Update a user-level variable' },
					{ name: 'Verify GPG Key', value: 'verifyGpgKey', action: 'Verify a GPG key' },
				],
				default: 'getAuthenticated',
			},



			// ----------------------------------
			// 3. Parameters
			// ----------------------------------
			{
				displayName: 'Owner',
				name: 'owner',
				type: 'string',
				required: true,
				displayOptions: {
					hide: {
						operation: ['migrate', 'search', 'getAuthenticated', 'getAllRunners', 'getRunnerRegistrationToken', 'createRunnerRegistrationToken', 'getAllVariables', 'getAllOauth2Applications', 'createOauth2Application', 'getAllBlocks', 'getEmailAddresses', 'addEmailAddresses', 'deleteEmailAddresses', 'getFollowers', 'getFollowing', 'getAllGpgKeys', 'createGpgKey', 'getAllHooks', 'createHook', 'getAllPublicKeys', 'createPublicKey', 'getAllRepos', 'createRepo', 'getSettings', 'updateSettings', 'getAllStarredRepos', 'getStopwatches', 'getAllWatchedRepos', 'getTeams', 'getAllTrackedTimes', 'getSearch', 'getAccessToken', 'createAccessToken', 'getAll', 'checkUnread', 'getJobs', 'getRuns', 'getHooks', 'getCronTasks', 'getEmails', 'getOrgs', 'getUnadoptedRepos'],
					},
					show: {
						resource: ['branchProtection', 'repository', 'repositoryActionArtifact', 'repositoryActionJob', 'repositoryActionRun', 'repositoryActionRunner', 'repositoryActionSecret', 'repositoryActionTask', 'repositoryActionVariable', 'repositoryActionWorkflow', 'repositoryBranch', 'repositoryCollaborator', 'repositoryCommit', 'setting', 'issue', 'label', 'milestone', 'package', 'organization', 'notification', 'admin'],
					},
				},
				default: '',
				description: 'Owner of the repo',
			},
			{
				displayName: 'Repository Name',
				name: 'repo',
				type: 'string',
				required: true,
				displayOptions: {
					hide: {
						operation: ['migrate', 'search', 'getAuthenticated', 'getAllRunners', 'getRunnerRegistrationToken', 'createRunnerRegistrationToken', 'getAllVariables', 'getAllOauth2Applications', 'createOauth2Application', 'getAllBlocks', 'getEmailAddresses', 'addEmailAddresses', 'deleteEmailAddresses', 'getFollowers', 'getFollowing', 'getAllGpgKeys', 'createGpgKey', 'getAllHooks', 'createHook', 'getAllPublicKeys', 'createPublicKey', 'getAllRepos', 'createRepo', 'getSettings', 'updateSettings', 'getAllStarredRepos', 'getStopwatches', 'getAllWatchedRepos', 'getTeams', 'getAllTrackedTimes', 'getSearch', 'getAccessToken', 'createAccessToken', 'getAll', 'checkUnread', 'getJobs', 'getRuns', 'getHooks', 'getCronTasks', 'getEmails', 'getOrgs', 'getUnadoptedRepos'],
					},
					show: {
						resource: ['branchProtection', 'repository', 'repositoryActionArtifact', 'repositoryActionJob', 'repositoryActionRun', 'repositoryActionRunner', 'repositoryActionSecret', 'repositoryActionTask', 'repositoryActionVariable', 'repositoryActionWorkflow', 'repositoryBranch', 'repositoryCollaborator', 'repositoryCommit', 'setting', 'issue', 'label', 'milestone', 'package', 'organization', 'notification', 'admin'],
					},
				},
				default: '',
				description: 'Name of the repo',
			},
			{
				displayName: 'Notification ID',
				name: 'notificationId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['notification'],
						operation: ['get', 'markReadById'],
					},
				},
				default: '',
			},
			{
				displayName: 'Last Read At',
				name: 'lastReadAt',
				type: 'dateTime',
				displayOptions: {
					show: {
						resource: ['notification'],
						operation: ['markRead', 'markRepoRead'],
					},
				},
				default: '',
				description: 'If provided, mark all notifications as read before this time',
			},
			{
				displayName: 'Mark All',
				name: 'all',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['notification'],
						operation: ['markRead', 'markRepoRead'],
					},
				},
				default: false,
				description: 'Whether to mark all notifications as read',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				typeOptions: {
					multipleValues: true,
				},
				displayOptions: {
					show: {
						resource: ['notification'],
						operation: ['markRead', 'markRepoRead'],
					},
				},
				options: [
					{ name: 'Unread', value: 'unread' },
					{ name: 'Read', value: 'read' },
					{ name: 'Pinned', value: 'pinned' },
				],
				default: ['unread'],
			},
			{
				displayName: 'Organization Name',
				name: 'orgName',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['organization'],
					},
					hide: {
						operation: ['getAll'],
					},
				},
				default: '',
				description: 'The name of the organization',
			},
			{
				displayName: 'New Organization Name',
				name: 'newOrgName',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['organization'],
						operation: ['rename'],
					},
				},
				default: '',
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['organization'],
						operation: ['getTeam', 'deleteTeam', 'editTeam', 'getTeamMembers', 'addTeamMember', 'deleteTeamMember', 'getTeamRepos', 'addTeamRepo', 'deleteTeamRepo', 'getTeamActivities'],
					},
				},
				default: 0,
			},
			{
				displayName: 'Visibility',
				name: 'visibility',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['organization'],
						operation: ['create'],
					},
				},
				options: [
					{ name: 'Public', value: 'public' },
					{ name: 'Limited', value: 'limited' },
					{ name: 'Private', value: 'private' },
				],
				default: 'public',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['organization'],
						operation: ['edit'],
					},
				},
				default: '',
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['organization'],
						operation: ['edit'],
					},
				},
				default: '',
			},
			{
				displayName: 'Task',
				name: 'task',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['admin'],
						operation: ['runCronTask'],
					},
				},
				default: '',
				description: 'The name of the cron task to run',
			},
			{
				displayName: 'New Username',
				name: 'newUsername',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['admin'],
						operation: ['renameUser'],
					},
				},
				default: '',
			},
			{
				displayName: 'Badge ID',
				name: 'badgeId',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['admin'],
						operation: ['addUserBadge', 'deleteUserBadge'],
					},
				},
				default: 0,
			},
			{
				displayName: 'Must Change Password',
				name: 'mustChangePassword',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['admin'],
						operation: ['createUser'],
					},
				},
				default: false,
			},
			{
				displayName: 'Send Notify',
				name: 'sendNotify',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['admin'],
						operation: ['createUser'],
					},
				},
				default: false,
			},
			{
				displayName: 'Permission',
				name: 'permission',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['organization'],
						operation: ['createTeam', 'editTeam'],
					},
				},
				options: [
					{ name: 'Read', value: 'read' },
					{ name: 'Write', value: 'write' },
					{ name: 'Admin', value: 'admin' },
					{ name: 'None', value: 'none' },
				],
				default: 'read',
			},
			{
				displayName: 'Units',
				name: 'units',
				type: 'string',
				typeOptions: { multipleValues: true },
				displayOptions: {
					show: {
						resource: ['organization'],
						operation: ['createTeam', 'editTeam'],
					},
				},
				default: [],
				description: 'List of units for the team (e.g. repo.code, repo.issues, etc.)',
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['organization'],
						operation: ['searchTeams'],
					},
				},
				default: '',
				description: 'The search query',
			},
			{
				displayName: 'Package Type',
				name: 'packageType',
				type: 'options',
				required: true,
				displayOptions: {
					show: {
						resource: ['package'],
					},
					hide: {
						operation: ['getAll'],
					},
				},
				options: [
					{ name: 'Alpine', value: 'alpine' },
					{ name: 'Cargo', value: 'cargo' },
					{ name: 'Chef', value: 'chef' },
					{ name: 'Composer', value: 'composer' },
					{ name: 'Conan', value: 'conan' },
					{ name: 'Conda', value: 'conda' },
					{ name: 'Container', value: 'container' },
					{ name: 'Cran', value: 'cran' },
					{ name: 'Debian', value: 'debian' },
					{ name: 'Generic', value: 'generic' },
					{ name: 'Go', value: 'go' },
					{ name: 'Helm', value: 'helm' },
					{ name: 'Maven', value: 'maven' },
					{ name: 'Npm', value: 'npm' },
					{ name: 'Nuget', value: 'nuget' },
					{ name: 'Pub', value: 'pub' },
					{ name: 'Pypi', value: 'pypi' },
					{ name: 'Rpm', value: 'rpm' },
					{ name: 'Rubygems', value: 'rubygems' },
					{ name: 'Swift', value: 'swift' },
					{ name: 'Vagrant', value: 'vagrant' },
				],
				default: 'generic',
			},
			{
				displayName: 'Package Name',
				name: 'packageName',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['package'],
					},
					hide: {
						operation: ['getAll'],
					},
				},
				default: '',
			},
			{
				displayName: 'Package Version',
				name: 'packageVersion',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['package'],
						operation: ['get', 'delete', 'getFiles'],
					},
				},
				default: '',
			},
			{
				displayName: 'Issue Index',
				name: 'issueIndex',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['issue'],
						operation: ['get', 'delete', 'edit', 'createComment', 'getComments', 'addLabel', 'getLabels', 'deleteAllLabels', 'deleteLabel', 'getDependencies', 'createDependency', 'deleteDependency', 'getBlocks', 'createBlock', 'deleteBlock', 'startStopwatch', 'stopStopwatch', 'deleteStopwatch', 'getTimeline', 'getTrackedTimes', 'createTrackedTime', 'deleteTrackedTime', 'resetTrackedTimes', 'getSubscriptions', 'checkSubscription', 'addSubscription', 'deleteSubscription', 'getReactions', 'createReaction', 'deleteReaction', 'getAttachments', 'getAttachment'],
					},
				},
				default: 1,
			},
			{
				displayName: 'Comment ID',
				name: 'commentId',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['issue'],
						operation: ['deleteComment', 'editComment', 'getCommentReactions', 'createCommentReaction', 'deleteCommentReaction'],
					},
				},
				default: 0,
			},
			{
				displayName: 'Attachment ID',
				name: 'attachmentId',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['issue'],
						operation: ['getAttachment'],
					},
				},
				default: 0,
			},
			{
				displayName: 'Reaction',
				name: 'reaction',
				type: 'options',
				required: true,
				displayOptions: {
					show: {
						resource: ['issue'],
						operation: ['createReaction', 'deleteReaction', 'createCommentReaction', 'deleteCommentReaction'],
					},
				},
				options: [
					{ name: '+1', value: '+1' },
					{ name: '-1', value: '-1' },
					{ name: 'Laugh', value: 'laugh' },
					{ name: 'Confused', value: 'confused' },
					{ name: 'Heart', value: 'heart' },
					{ name: 'Hooray', value: 'hooray' },
					{ name: 'Eyes', value: 'eyes' },
					{ name: 'Rocket', value: 'rocket' },
				],
				default: '+1',
			},
			{
				displayName: 'Label ID',
				name: 'labelId',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['issue', 'label'],
						operation: ['addLabel', 'deleteLabel', 'get', 'delete', 'update'],
					},
				},
				default: 0,
			},
			{
				displayName: 'Milestone ID',
				name: 'milestoneId',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['milestone'],
						operation: ['get', 'delete', 'update'],
					},
				},
				default: 0,
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['issue', 'milestone'],
						operation: ['create', 'edit', 'update'],
					},
				},
				default: '',
			},
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['issue'],
						operation: ['create', 'edit', 'createComment', 'editComment'],
					},
				},
				default: '',
			},
			{
				displayName: 'Color',
				name: 'color',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['label'],
						operation: ['create', 'update'],
					},
				},
				default: '#000000',
				description: 'The color of the label in hex format (e.g. #000000)',
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['issue', 'milestone'],
						operation: ['edit', 'update'],
					},
				},
				options: [
					{ name: 'Open', value: 'open' },
					{ name: 'Closed', value: 'closed' },
				],
				default: 'open',
			},
			{
				displayName: 'Deadline',
				name: 'deadline',
				type: 'dateTime',
				displayOptions: {
					show: {
						resource: ['milestone'],
						operation: ['create', 'update'],
					},
				},
				default: '',
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['user', 'issue', 'organization', 'activitypub'],
						operation: [
							'get', 'getActivityFeeds', 'getFollowers', 'getFollowing', 'checkFollowingAnother',
							'getAllGpgKeysOfUser', 'getHeatmap', 'getAllPublicKeysOfUser', 'getAllReposOfUser',
							'getAllStarredReposOfUser', 'getAllWatchedReposOfUser', 'blockUser', 'checkBlock', 'deleteBlock',
							'addFollow', 'checkFollowing', 'deleteFollowing',
							'addSubscription', 'deleteSubscription',
							'checkMember', 'deleteMember', 'checkPublicMember', 'publicizeMember', 'concealMember', 'addTeamMember', 'deleteTeamMember', 'getUserPermissions',
							'getPerson', 'postInbox',
						],
					},
				},
				default: '',
				description: 'The username',
			},
			{
				displayName: 'Payload',
				name: 'payload',
				type: 'json',
				required: true,
				displayOptions: {
					show: {
						resource: ['activitypub'],
						operation: ['postInbox'],
					},
				},
				default: '{}',
				description: 'The JSON-LD payload to send to the inbox',
			},
			{
				displayName: 'Time (Seconds)',
				name: 'time',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['issue'],
						operation: ['createTrackedTime'],
					},
				},
				default: 0,
			},
			{
				displayName: 'Time ID',
				name: 'timeId',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['issue'],
						operation: ['deleteTrackedTime'],
					},
				},
				default: 0,
			},
			{
				displayName: 'Issue ID',
				name: 'issueId',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['issue'],
						operation: ['createDependency', 'deleteDependency', 'createBlock', 'deleteBlock'],
					},
				},
				default: 0,
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: [
							'getGpgKey', 'deleteGpgKey', 'getHook', 'deleteHook', 'updateHook', 'getPublicKey', 'deletePublicKey',
							'getOauth2Application', 'deleteOauth2Application', 'updateOauth2Application',
						],
					},
				},
				default: 0,
			},
			{
				displayName: 'Token',
				name: 'token',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['deleteAccessToken'],
					},
				},
				default: '',
			},
			{
				displayName: 'Artifact ID',
				name: 'artifactId',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['repositoryActionArtifact'],
						operation: ['get', 'delete', 'download'],
					},
				},
				default: 0,
			},
			{
				displayName: 'Job ID',
				name: 'jobId',
				type: 'number',
				required: true,
				displayOptions: {
					show: { resource: ['repositoryActionJob'], operation: ['get', 'getLogs'] },
				},
				default: 0,
			},
			{
				displayName: 'Run ID',
				name: 'runId',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['repositoryActionRun'],
						operation: ['get', 'delete', 'listArtifacts', 'listJobs'],
					},
				},
				default: 0,
			},
			{
				displayName: 'Runner ID',
				name: 'runnerId',
				type: 'number',
				required: true,
				displayOptions: {
					// NOTE: This simplified structure is a workaround for a TypeScript compiler issue
					// with complex 'show' conditions. Ideally, this would be an array of objects
					// for OR logic, but it causes a TS2353 error.
					show: {
						resource: [
							'repositoryActionRunner',
							'user',
						],
						operation: [
							'get',
							'delete',
							'getRunner',
							'deleteRunner',
						],
					},
				},
				default: 0,
			},
			{
				displayName: 'Secret Name',
				name: 'secretName',
				type: 'string',
				typeOptions: { password: true },
				required: true,
				displayOptions: {
					// NOTE: This simplified structure is a workaround for a TypeScript compiler issue
					// with complex 'show' conditions. Ideally, this would be an array of objects
					// for OR logic, but it causes a TS2353 error.
					show: {
						resource: [
							'repositoryActionSecret',
							'user',
						],
						operation: [
							'createOrUpdate',
							'delete',
							'createOrUpdateSecret',
							'deleteSecret',
						],
					},
				},
				default: '',
			},
			{
				displayName: 'Variable Name',
				name: 'variableName',
				type: 'string',
				required: true,
				displayOptions: {
					// NOTE: This simplified structure is a workaround for a TypeScript compiler issue
					// with complex 'show' conditions. Ideally, this would be an array of objects
					// for OR logic, but it causes a TS2353 error.
					show: {
						resource: [
							'repositoryActionVariable',
							'user',
						],
						operation: [
							'get',
							'update',
							'create',
							'delete',
							'getVariable',
							'updateVariable',
							'createVariable',
							'deleteVariable',
						],
					},
				},
				default: '',
			},
			{
				displayName: 'Workflow ID',
				name: 'workflowId',
				type: 'string',
				required: true,
				displayOptions: {
					show: { resource: ['repositoryActionWorkflow'], operation: ['get', 'disable', 'dispatch', 'enable'] },
				},
				default: '',
				description: 'The ID of the workflow, can be the workflow filename',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['branchProtection', 'user', 'miscellaneous'],
						operation: [
							'get', 'delete', 'edit', // branchProtection
							'createAccessToken', 'createOauth2Application', 'updateOauth2Application', 'createRepo', // user
							'getGitignore', 'getLabelTemplate', 'getLicense', // miscellaneous
						],
					},
				},
				default: '',
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['miscellaneous'],
						operation: ['renderMarkdown', 'renderMarkdownRaw', 'renderMarkup'],
					},
				},
				default: '',
				description: 'The text to render',
			},
			{
				displayName: 'Mode',
				name: 'mode',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['miscellaneous'],
						operation: ['renderMarkdown', 'renderMarkup'],
					},
				},
				options: [
					{ name: 'Markdown', value: 'markdown' },
					{ name: 'Comment', value: 'comment' },
					{ name: 'Gfm', value: 'gfm' },
				],
				default: 'markdown',
			},
			{
				displayName: 'Context',
				name: 'context',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['miscellaneous'],
						operation: ['renderMarkdown', 'renderMarkup'],
					},
				},
				default: '',
				description: 'The context for rendering (e.g. owner/repo)',
			},
			{
				displayName: 'Fingerprint',
				name: 'fingerprint',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['verifyGpgKey'],
					},
				},
				default: '',
			},
			{
				displayName: 'Emails',
				name: 'emails',
				type: 'string',
				typeOptions: { multipleValues: true },
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['addEmailAddresses', 'deleteEmailAddresses'],
					},
				},
				default: [],
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['createRepo'],
					},
				},
				default: '',
			},
			{
				displayName: 'Is Private',
				name: 'isPrivate',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['createRepo'],
					},
				},
				default: false,
			},
			{
				displayName: 'Redirect URIs',
				name: 'redirectUris',
				type: 'string',
				typeOptions: { multipleValues: true },
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['createOauth2Application', 'updateOauth2Application'],
					},
				},
				default: [],
			},
			{
				displayName: 'Confidential',
				name: 'confidential',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['updateOauth2Application'],
					},
				},
				default: true,
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['createHook'],
					},
				},
				options: [
					{ name: 'Dingtalk', value: 'dingtalk' },
					{ name: 'Discord', value: 'discord' },
					{ name: 'Feishu', value: 'feishu' },
					{ name: 'Gitea', value: 'gitea' },
					{ name: 'Gogs', value: 'gogs' },
					{ name: 'Matrix', value: 'matrix' },
					{ name: 'MSTeams', value: 'msteams' },
					{ name: 'Slack', value: 'slack' },
					{ name: 'Telegram', value: 'telegram' },
					{ name: 'Web', value: 'web' },
				],
				default: 'gitea',
			},
			{
				displayName: 'Config',
				name: 'config',
				type: 'json',
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['createHook', 'updateHook'],
					},
				},
				default: '{}',
			},
			{
				displayName: 'Events',
				name: 'events',
				type: 'string',
				typeOptions: { multipleValues: true },
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['createHook', 'updateHook'],
					},
				},
				default: [],
			},
			{
				displayName: 'Active',
				name: 'active',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['createHook', 'updateHook'],
					},
				},
				default: true,
			},
			{
				displayName: 'Branch',
				name: 'branch',
				type: 'string',
				required: true,
				displayOptions: {
					show: { resource: ['repositoryBranch'], operation: ['get', 'delete'] },
				},
				default: '',
			},
			{
				displayName: 'Username',
				name: 'collaborator',
				type: 'string',
				required: true,
				displayOptions: {
					show: { resource: ['repositoryCollaborator'], operation: ['check', 'add', 'delete', 'getPermission'] },
				},
				default: '',
			},
			{
				displayName: 'Commit SHA',
				name: 'sha',
				type: 'string',
				required: true,
				displayOptions: {
					show: { resource: ['repositoryCommit'], operation: ['getPullRequest', 'getAllStatuses', 'getCombinedStatus'] },
				},
				default: '',
				description: 'The SHA of the commit',
			},


			// ----------------------------------
			// 4. Fields
			// ----------------------------------
			...giteaRepositoryGetFields,
			...giteaMigrateFields,
			...giteaRepositoryEditFields,
			...giteaActionArtifactGetAllFields,
			...giteaActionSecretCreateOrUpdateFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const baseUrl = (await this.getCredentials('giteaApi')).baseUrl as string;

		for (let i = 0; i < items.length; i++) {
			try {
				const resource = this.getNodeParameter('resource', 0) as string;
				const operation = this.getNodeParameter('operation', 0) as string;
				let responseData;

				// === Router ===
				if (resource === 'repository') {
					if (operation === 'get') responseData = await executeRepositoryGet(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executeRepositoryDelete(this, i, baseUrl);
					else if (operation === 'migrate') responseData = await executeMigrate(this, i, baseUrl);
					else if (operation === 'edit') responseData = await executeRepositoryEdit(this, i, baseUrl);
					else if (operation === 'search') responseData = await executeRepositorySearch(this, i, baseUrl);
					else if (operation === 'getActivityFeeds') responseData = await executeRepositoryActivityFeedGetAll(this, i, baseUrl);
					else if (operation === 'getArchive') responseData = await executeRepositoryArchiveGet(this, i, baseUrl);
					else if (operation === 'listAssignees') responseData = await executeRepositoryAssigneeGetAll(this, i, baseUrl);
					else if (operation === 'updateAvatar') responseData = await executeRepositoryAvatarUpdate(this, i, baseUrl);
					else if (operation === 'deleteAvatar') responseData = await executeRepositoryAvatarDelete(this, i, baseUrl);
				} else if (resource === 'branchProtection') {
					if (operation === 'getAll') responseData = await executeRepositoryBranchProtectionGetAll(this, i, baseUrl);
					else if (operation === 'create') responseData = await executeRepositoryBranchProtectionCreate(this, i, baseUrl);
					else if (operation === 'updatePriorities') responseData = await executeRepositoryBranchProtectionPriorityUpdate(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeRepositoryBranchProtectionGet(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executeRepositoryBranchProtectionDelete(this, i, baseUrl);
					else if (operation === 'edit') responseData = await executeRepositoryBranchProtectionEdit(this, i, baseUrl);
				} else if (resource === 'repositoryActionArtifact') {
					if (operation === 'getAll') responseData = await executeActionArtifactGetAll(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeActionArtifactGet(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executeActionArtifactDelete(this, i, baseUrl);
					else if (operation === 'download') responseData = await executeActionArtifactDownload(this, i, baseUrl);
				} else if (resource === 'repositoryActionJob') {
					if (operation === 'getAll') responseData = await executeActionJobGetAll(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeActionJobGet(this, i, baseUrl);
					else if (operation === 'getLogs') responseData = await executeActionJobLogDownload(this, i, baseUrl);
				} else if (resource === 'repositoryActionRun') {
					if (operation === 'getAll') responseData = await executeActionRunGetAll(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeActionRunGet(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executeActionRunDelete(this, i, baseUrl);
					else if (operation === 'listArtifacts') responseData = await executeActionRunArtifactGetAll(this, i, baseUrl);
					else if (operation === 'listJobs') responseData = await executeActionRunJobGetAll(this, i, baseUrl);
				} else if (resource === 'repositoryActionRunner') {
					if (operation === 'getAll') responseData = await executeActionRunnerGetAll(this, i, baseUrl);
					else if (operation === 'getRegistrationToken') responseData = await executeActionRunnerRegistrationTokenGet(this, i, baseUrl);
					else if (operation === 'createRegistrationToken') responseData = await executeActionRunnerRegistrationTokenCreate(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeActionRunnerGet(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executeActionRunnerDelete(this, i, baseUrl);
				} else if (resource === 'repositoryActionSecret') {
					if (operation === 'getAll') responseData = await executeActionSecretGetAll(this, i, baseUrl);
					else if (operation === 'createOrUpdate') responseData = await executeActionSecretCreateOrUpdate(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executeActionSecretDelete(this, i, baseUrl);
				} else if (resource === 'repositoryActionTask') {
					if (operation === 'getAll') responseData = await executeActionTaskGetAll(this, i, baseUrl);
				} else if (resource === 'repositoryActionVariable') {
					if (operation === 'getAll') responseData = await executeActionVariableGetAll(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeActionVariableGet(this, i, baseUrl);
					else if (operation === 'update') responseData = await executeActionVariableUpdate(this, i, baseUrl);
					else if (operation === 'create') responseData = await executeActionVariableCreate(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executeActionVariableDelete(this, i, baseUrl);
				} else if (resource === 'repositoryActionWorkflow') {
					if (operation === 'getAll') responseData = await executeActionWorkflowGetAll(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeActionWorkflowGet(this, i, baseUrl);
					else if (operation === 'disable') responseData = await executeActionWorkflowDisable(this, i, baseUrl);
					else if (operation === 'enable') responseData = await executeActionWorkflowEnable(this, i, baseUrl);
					else if (operation === 'dispatch') responseData = await executeActionWorkflowDispatch(this, i, baseUrl);
				} else if (resource === 'repositoryBranch') {
					if (operation === 'getAll') responseData = await executeRepositoryBranchGetAll(this, i, baseUrl);
					else if (operation === 'create') responseData = await executeRepositoryBranchCreate(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeRepositoryBranchGet(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executeRepositoryBranchDelete(this, i, baseUrl);
					else if (operation === 'rename') responseData = await executeRepositoryBranchRename(this, i, baseUrl);
				} else if (resource === 'repositoryCollaborator') {
					if (operation === 'getAll') responseData = await executeRepositoryCollaboratorGetAll(this, i, baseUrl);
					else if (operation === 'check') responseData = await executeRepositoryCollaboratorCheck(this, i, baseUrl);
					else if (operation === 'add') responseData = await executeRepositoryCollaboratorAdd(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executeRepositoryCollaboratorDelete(this, i, baseUrl);
					else if (operation === 'getPermission') responseData = await executeRepositoryCollaboratorPermissionGet(this, i, baseUrl);
				} else if (resource === 'repositoryCommit') {
					if (operation === 'getAll') responseData = await executeRepositoryCommitGetAll(this, i, baseUrl);
					else if (operation === 'getCombinedStatus') responseData = await executeRepositoryCommitStatusGetCombined(this, i, baseUrl);
					else if (operation === 'getAllStatuses') responseData = await executeRepositoryCommitStatusGetAll(this, i, baseUrl);
					else if (operation === 'getPullRequest') responseData = await executeRepositoryCommitPullRequestGet(this, i, baseUrl);
					else if (operation === 'compare') responseData = await executeRepositoryCommitCompareGet(this, i, baseUrl);
				} else if (resource === 'activitypub') {
					if (operation === 'getPerson') responseData = await executeActivityPubPersonGet(this, i, baseUrl);
					else if (operation === 'postInbox') responseData = await executeActivityPubInboxPost(this, i, baseUrl);
				} else if (resource === 'issue') {
					if (operation === 'getAll') responseData = await executeIssueGetAll(this, i, baseUrl);
					else if (operation === 'search') responseData = await executeIssueSearch(this, i, baseUrl);
					else if (operation === 'create') responseData = await executeIssueCreate(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeIssueGet(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executeIssueDelete(this, i, baseUrl);
					else if (operation === 'edit') responseData = await executeIssueEdit(this, i, baseUrl);
					else if (operation === 'getComments') responseData = await executeIssueCommentGetAll(this, i, baseUrl);
					else if (operation === 'createComment') responseData = await executeIssueCommentCreate(this, i, baseUrl);
					else if (operation === 'deleteComment') responseData = await executeIssueCommentDelete(this, i, baseUrl);
					else if (operation === 'editComment') responseData = await executeIssueCommentEdit(this, i, baseUrl);
					else if (operation === 'getLabels') responseData = await executeIssueLabelGetAll(this, i, baseUrl);
					else if (operation === 'addLabel') responseData = await executeIssueLabelAdd(this, i, baseUrl);
					else if (operation === 'deleteLabel') responseData = await executeIssueLabelDelete(this, i, baseUrl);
					else if (operation === 'deleteAllLabels') responseData = await executeIssueLabelDeleteAll(this, i, baseUrl);
					else if (operation === 'getDependencies') responseData = await executeIssueDependencyGetAll(this, i, baseUrl);
					else if (operation === 'createDependency') responseData = await executeIssueDependencyCreate(this, i, baseUrl);
					else if (operation === 'deleteDependency') responseData = await executeIssueDependencyDelete(this, i, baseUrl);
					else if (operation === 'getBlocks') responseData = await executeIssueBlockGetAll(this, i, baseUrl);
					else if (operation === 'createBlock') responseData = await executeIssueBlockCreate(this, i, baseUrl);
					else if (operation === 'deleteBlock') responseData = await executeIssueBlockDelete(this, i, baseUrl);
					else if (operation === 'startStopwatch') responseData = await executeIssueStopwatchStart(this, i, baseUrl);
					else if (operation === 'stopStopwatch') responseData = await executeIssueStopwatchStop(this, i, baseUrl);
					else if (operation === 'deleteStopwatch') responseData = await executeIssueStopwatchDelete(this, i, baseUrl);
					else if (operation === 'getTimeline') responseData = await executeIssueTimelineGetAll(this, i, baseUrl);
					else if (operation === 'getTrackedTimes') responseData = await executeIssueTrackedTimeGetAll(this, i, baseUrl);
					else if (operation === 'createTrackedTime') responseData = await executeIssueTrackedTimeCreate(this, i, baseUrl);
					else if (operation === 'deleteTrackedTime') responseData = await executeIssueTrackedTimeDelete(this, i, baseUrl);
					else if (operation === 'resetTrackedTimes') responseData = await executeIssueTrackedTimeReset(this, i, baseUrl);
					else if (operation === 'getSubscriptions') responseData = await executeIssueSubscriptionGetAll(this, i, baseUrl);
					else if (operation === 'checkSubscription') responseData = await executeIssueSubscriptionGet(this, i, baseUrl);
					else if (operation === 'addSubscription') responseData = await executeIssueSubscriptionCreate(this, i, baseUrl);
					else if (operation === 'deleteSubscription') responseData = await executeIssueSubscriptionDelete(this, i, baseUrl);
					else if (operation === 'getReactions') responseData = await executeIssueReactionGetAll(this, i, baseUrl);
					else if (operation === 'createReaction') responseData = await executeIssueReactionCreate(this, i, baseUrl);
					else if (operation === 'deleteReaction') responseData = await executeIssueReactionDelete(this, i, baseUrl);
					else if (operation === 'getCommentReactions') responseData = await executeIssueCommentReactionGetAll(this, i, baseUrl);
					else if (operation === 'createCommentReaction') responseData = await executeIssueCommentReactionCreate(this, i, baseUrl);
					else if (operation === 'deleteCommentReaction') responseData = await executeIssueCommentReactionDelete(this, i, baseUrl);
					else if (operation === 'getAttachments') responseData = await executeIssueAttachmentGetAll(this, i, baseUrl);
					else if (operation === 'getAttachment') responseData = await executeIssueAttachmentGet(this, i, baseUrl);
				} else if (resource === 'label') {
					if (operation === 'getAll') responseData = await executeRepositoryLabelGetAll(this, i, baseUrl);
					else if (operation === 'create') responseData = await executeRepositoryLabelCreate(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeRepositoryLabelGet(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executeRepositoryLabelDelete(this, i, baseUrl);
					else if (operation === 'update') responseData = await executeRepositoryLabelUpdate(this, i, baseUrl);
				} else if (resource === 'milestone') {
					if (operation === 'getAll') responseData = await executeMilestoneGetAll(this, i, baseUrl);
					else if (operation === 'create') responseData = await executeMilestoneCreate(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeMilestoneGet(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executeMilestoneDelete(this, i, baseUrl);
					else if (operation === 'update') responseData = await executeMilestoneUpdate(this, i, baseUrl);
				} else if (resource === 'miscellaneous') {
					if (operation === 'getGitignores') responseData = await executeMiscellaneousGitignoreGetAll(this, i, baseUrl);
					else if (operation === 'getGitignore') responseData = await executeMiscellaneousGitignoreGet(this, i, baseUrl);
					else if (operation === 'getLabelTemplates') responseData = await executeMiscellaneousLabelTemplateGetAll(this, i, baseUrl);
					else if (operation === 'getLabelTemplate') responseData = await executeMiscellaneousLabelTemplateGet(this, i, baseUrl);
					else if (operation === 'getLicenses') responseData = await executeMiscellaneousLicenseGetAll(this, i, baseUrl);
					else if (operation === 'getLicense') responseData = await executeMiscellaneousLicenseGet(this, i, baseUrl);
					else if (operation === 'renderMarkdown') responseData = await executeMiscellaneousMarkdownRender(this, i, baseUrl);
					else if (operation === 'renderMarkdownRaw') responseData = await executeMiscellaneousMarkdownRawRender(this, i, baseUrl);
					else if (operation === 'renderMarkup') responseData = await executeMiscellaneousMarkupRender(this, i, baseUrl);
					else if (operation === 'getNodeInfo') responseData = await executeMiscellaneousNodeInfoGet(this, i, baseUrl);
					else if (operation === 'getSigningKeyGpg') responseData = await executeMiscellaneousSigningKeyGpgGet(this, i, baseUrl);
					else if (operation === 'getSigningKeyPub') responseData = await executeMiscellaneousSigningKeyPubGet(this, i, baseUrl);
					else if (operation === 'getVersion') responseData = await executeMiscellaneousVersionGet(this, i, baseUrl);
				} else if (resource === 'notification') {
					if (operation === 'getAll') responseData = await executeNotificationGetAll(this, i, baseUrl);
					else if (operation === 'markRead') responseData = await executeNotificationMarkRead(this, i, baseUrl);
					else if (operation === 'checkUnread') responseData = await executeNotificationCheckUnread(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeNotificationGet(this, i, baseUrl);
					else if (operation === 'markReadById') responseData = await executeNotificationMarkReadById(this, i, baseUrl);
					else if (operation === 'getRepoNotifications') responseData = await executeRepositoryNotificationGetAll(this, i, baseUrl);
					else if (operation === 'markRepoRead') responseData = await executeRepositoryNotificationMarkRead(this, i, baseUrl);
				} else if (resource === 'organization') {
					if (operation === 'getAll') responseData = await executeOrgGetAll(this, i, baseUrl);
					else if (operation === 'create') responseData = await executeOrgCreate(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeOrgGet(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executeOrgDelete(this, i, baseUrl);
					else if (operation === 'edit') responseData = await executeOrgEdit(this, i, baseUrl);
					else if (operation === 'rename') responseData = await executeOrgRename(this, i, baseUrl);
					else if (operation === 'getActivities') responseData = await executeOrgActivityFeedGetAll(this, i, baseUrl);
					else if (operation === 'getMembers') responseData = await executeOrgMemberGetAll(this, i, baseUrl);
					else if (operation === 'checkMember') responseData = await executeOrgMemberCheck(this, i, baseUrl);
					else if (operation === 'deleteMember') responseData = await executeOrgMemberDelete(this, i, baseUrl);
					else if (operation === 'getPublicMembers') responseData = await executeOrgPublicMemberGetAll(this, i, baseUrl);
					else if (operation === 'checkPublicMember') responseData = await executeOrgPublicMemberCheck(this, i, baseUrl);
					else if (operation === 'publicizeMember') responseData = await executeOrgPublicMemberCreate(this, i, baseUrl);
					else if (operation === 'concealMember') responseData = await executeOrgPublicMemberDelete(this, i, baseUrl);
					else if (operation === 'getRepos') responseData = await executeOrgRepoGetAll(this, i, baseUrl);
					else if (operation === 'createRepo') responseData = await executeOrgRepoCreate(this, i, baseUrl);
					else if (operation === 'getTeams') responseData = await executeOrgTeamGetAll(this, i, baseUrl);
					else if (operation === 'createTeam') responseData = await executeOrgTeamCreate(this, i, baseUrl);
					else if (operation === 'searchTeams') responseData = await executeOrgTeamSearch(this, i, baseUrl);
					else if (operation === 'getTeam') responseData = await executeOrgTeamGet(this, i, baseUrl);
					else if (operation === 'deleteTeam') responseData = await executeOrgTeamDelete(this, i, baseUrl);
					else if (operation === 'editTeam') responseData = await executeOrgTeamEdit(this, i, baseUrl);
					else if (operation === 'getTeamMembers') responseData = await executeOrgTeamMemberGetAll(this, i, baseUrl);
					else if (operation === 'addTeamMember') responseData = await executeOrgTeamMemberAdd(this, i, baseUrl);
					else if (operation === 'deleteTeamMember') responseData = await executeOrgTeamMemberDelete(this, i, baseUrl);
					else if (operation === 'getTeamRepos') responseData = await executeOrgTeamRepoGetAll(this, i, baseUrl);
					else if (operation === 'addTeamRepo') responseData = await executeOrgTeamRepoAdd(this, i, baseUrl);
					else if (operation === 'deleteTeamRepo') responseData = await executeOrgTeamRepoDelete(this, i, baseUrl);
					else if (operation === 'getUserPermissions') responseData = await executeOrgUserPermissionGet(this, i, baseUrl);
				} else if (resource === 'package') {
					if (operation === 'getAll') responseData = await executePackageGetAll(this, i, baseUrl);
					else if (operation === 'getVersions') responseData = await executePackageVersionGetAll(this, i, baseUrl);
					else if (operation === 'getLatest') responseData = await executePackageLatestGet(this, i, baseUrl);
					else if (operation === 'link') responseData = await executePackageLink(this, i, baseUrl);
					else if (operation === 'unlink') responseData = await executePackageUnlink(this, i, baseUrl);
					else if (operation === 'get') responseData = await executePackageGet(this, i, baseUrl);
					else if (operation === 'delete') responseData = await executePackageDelete(this, i, baseUrl);
					else if (operation === 'getFiles') responseData = await executePackageFileGetAll(this, i, baseUrl);
				} else if (resource === 'admin') {
					if (operation === 'getJobs') responseData = await executeAdminActionJobGetAll(this, i, baseUrl);
					else if (operation === 'getRunners') responseData = await executeAdminActionRunnerGetAll(this, i, baseUrl);
					else if (operation === 'getRegistrationToken') responseData = await executeAdminActionRunnerRegistrationTokenGet(this, i, baseUrl);
					else if (operation === 'getRunner') responseData = await executeAdminActionRunnerGet(this, i, baseUrl);
					else if (operation === 'deleteRunner') responseData = await executeAdminActionRunnerDelete(this, i, baseUrl);
					else if (operation === 'getRuns') responseData = await executeAdminActionRunGetAll(this, i, baseUrl);
					else if (operation === 'getCronTasks') responseData = await executeAdminCronGetAll(this, i, baseUrl);
					else if (operation === 'runCronTask') responseData = await executeAdminCronRun(this, i, baseUrl);
					else if (operation === 'getEmails') responseData = await executeAdminEmailGetAll(this, i, baseUrl);
					else if (operation === 'searchEmails') responseData = await executeAdminEmailSearch(this, i, baseUrl);
					else if (operation === 'getHooks') responseData = await executeAdminHookGetAll(this, i, baseUrl);
					else if (operation === 'createHook') responseData = await executeAdminHookCreate(this, i, baseUrl);
					else if (operation === 'getHook') responseData = await executeAdminHookGet(this, i, baseUrl);
					else if (operation === 'deleteHook') responseData = await executeAdminHookDelete(this, i, baseUrl);
					else if (operation === 'updateHook') responseData = await executeAdminHookUpdate(this, i, baseUrl);
					else if (operation === 'getOrgs') responseData = await executeAdminOrgGetAll(this, i, baseUrl);
					else if (operation === 'getUnadoptedRepos') responseData = await executeAdminUnadoptedGetAll(this, i, baseUrl);
					else if (operation === 'adoptUnadoptedRepo') responseData = await executeAdminUnadoptedAdopt(this, i, baseUrl);
					else if (operation === 'deleteUnadoptedRepo') responseData = await executeAdminUnadoptedDelete(this, i, baseUrl);
					else if (operation === 'searchUsers') responseData = await executeAdminUserSearch(this, i, baseUrl);
					else if (operation === 'createUser') responseData = await executeAdminUserCreate(this, i, baseUrl);
					else if (operation === 'deleteUser') responseData = await executeAdminUserDelete(this, i, baseUrl);
					else if (operation === 'updateUser') responseData = await executeAdminUserEdit(this, i, baseUrl);
					else if (operation === 'renameUser') responseData = await executeAdminUserRename(this, i, baseUrl);
					else if (operation === 'createUserRepo') responseData = await executeAdminUserRepoCreate(this, i, baseUrl);
					else if (operation === 'getUserBadges') responseData = await executeAdminUserBadgeGetAll(this, i, baseUrl);
					else if (operation === 'addUserBadge') responseData = await executeAdminUserBadgeCreate(this, i, baseUrl);
					else if (operation === 'deleteUserBadge') responseData = await executeAdminUserBadgeDelete(this, i, baseUrl);
					else if (operation === 'addUserPublicKey') responseData = await executeAdminUserPublicKeyCreate(this, i, baseUrl);
					else if (operation === 'deleteUserPublicKey') responseData = await executeAdminUserPublicKeyDelete(this, i, baseUrl);
				} else if (resource === 'setting') {
					if (operation === 'getApi') responseData = await executeSettingsApiGet(this, i, baseUrl);
					else if (operation === 'getAttachment') responseData = await executeSettingsAttachmentGet(this, i, baseUrl);
					else if (operation === 'getRepository') responseData = await executeSettingsRepositoryGet(this, i, baseUrl);
					else if (operation === 'getUi') responseData = await executeSettingsUiGet(this, i, baseUrl);
				} else if (resource === 'user') {
					if (operation === 'getAuthenticated') responseData = await executeUserGetAuthenticated(this, i, baseUrl);
					else if (operation === 'getOrgs') responseData = await executeUserOrgGetAuthenticated(this, i, baseUrl);
					else if (operation === 'getUserOrgs') responseData = await executeUserOrgGetAll(this, i, baseUrl);
					else if (operation === 'getAllRunners') responseData = await executeUserRunnerGetAll(this, i, baseUrl);
					else if (operation === 'getRunnerRegistrationToken') responseData = await executeUserRunnerRegistrationTokenGet(this, i, baseUrl);
					else if (operation === 'createRunnerRegistrationToken') responseData = await executeUserRunnerRegistrationTokenCreate(this, i, baseUrl);
					else if (operation === 'getRunner') responseData = await executeUserRunnerGet(this, i, baseUrl);
					else if (operation === 'deleteRunner') responseData = await executeUserRunnerDelete(this, i, baseUrl);
					else if (operation === 'createOrUpdateSecret') responseData = await executeUserSecretCreateOrUpdate(this, i, baseUrl);
					else if (operation === 'deleteSecret') responseData = await executeUserSecretDelete(this, i, baseUrl);
					else if (operation === 'getAllVariables') responseData = await executeUserVariableGetAll(this, i, baseUrl);
					else if (operation === 'getVariable') responseData = await executeUserVariableGet(this, i, baseUrl);
					else if (operation === 'updateVariable') responseData = await executeUserVariableUpdate(this, i, baseUrl);
					else if (operation === 'createVariable') responseData = await executeUserVariableCreate(this, i, baseUrl);
					else if (operation === 'deleteVariable') responseData = await executeUserVariableDelete(this, i, baseUrl);
					else if (operation === 'getAllOauth2Applications') responseData = await executeUserOauth2ApplicationGetAll(this, i, baseUrl);
					else if (operation === 'createOauth2Application') responseData = await executeUserOauth2ApplicationCreate(this, i, baseUrl);
					else if (operation === 'getOauth2Application') responseData = await executeUserOauth2ApplicationGet(this, i, baseUrl);
					else if (operation === 'deleteOauth2Application') responseData = await executeUserOauth2ApplicationDelete(this, i, baseUrl);
					else if (operation === 'updateOauth2Application') responseData = await executeUserOauth2ApplicationUpdate(this, i, baseUrl);
					else if (operation === 'createAvatar') responseData = await executeUserAvatarUpdate(this, i, baseUrl);
					else if (operation === 'deleteAvatar') responseData = await executeUserAvatarDelete(this, i, baseUrl);
					else if (operation === 'getAllBlocks') responseData = await executeUserBlockGetAll(this, i, baseUrl);
					else if (operation === 'checkBlock') responseData = await executeUserBlockCheck(this, i, baseUrl);
					else if (operation === 'blockUser') responseData = await executeUserBlockCreate(this, i, baseUrl);
					else if (operation === 'deleteBlock') responseData = await executeUserBlockDelete(this, i, baseUrl);
					else if (operation === 'getEmailAddresses') responseData = await executeUserEmailGetAll(this, i, baseUrl);
					else if (operation === 'addEmailAddresses') responseData = await executeUserEmailCreate(this, i, baseUrl);
					else if (operation === 'deleteEmailAddresses') responseData = await executeUserEmailDelete(this, i, baseUrl);
					else if (operation === 'getFollowers') responseData = await executeUserFollowerGetAll(this, i, baseUrl);
					else if (operation === 'getFollowing') responseData = await executeUserFollowingGetAll(this, i, baseUrl);
					else if (operation === 'checkFollowing') responseData = await executeUserFollowingCheck(this, i, baseUrl);
					else if (operation === 'addFollow') responseData = await executeUserFollowingCreate(this, i, baseUrl);
					else if (operation === 'deleteFollowing') responseData = await executeUserFollowingDelete(this, i, baseUrl);
					else if (operation === 'verifyGpgKey') responseData = await executeUserGpgKeyVerify(this, i, baseUrl);
					else if (operation === 'getAllGpgKeys') responseData = await executeUserGpgKeyGetAll(this, i, baseUrl);
					else if (operation === 'createGpgKey') responseData = await executeUserGpgKeyCreate(this, i, baseUrl);
					else if (operation === 'getGpgKey') responseData = await executeUserGpgKeyGet(this, i, baseUrl);
					else if (operation === 'deleteGpgKey') responseData = await executeUserGpgKeyDelete(this, i, baseUrl);
					else if (operation === 'getAllGpgKeysOfUser') responseData = await executeUserGpgKeyGetAllOfUser(this, i, baseUrl);
					else if (operation === 'getAllHooks') responseData = await executeUserHookGetAll(this, i, baseUrl);
					else if (operation === 'createHook') responseData = await executeUserHookCreate(this, i, baseUrl);
					else if (operation === 'getHook') responseData = await executeUserHookGet(this, i, baseUrl);
					else if (operation === 'deleteHook') responseData = await executeUserHookDelete(this, i, baseUrl);
					else if (operation === 'updateHook') responseData = await executeUserHookUpdate(this, i, baseUrl);
					else if (operation === 'getAllPublicKeys') responseData = await executeUserPublicKeyGetAll(this, i, baseUrl);
					else if (operation === 'createPublicKey') responseData = await executeUserPublicKeyCreate(this, i, baseUrl);
					else if (operation === 'getPublicKey') responseData = await executeUserPublicKeyGet(this, i, baseUrl);
					else if (operation === 'deletePublicKey') responseData = await executeUserPublicKeyDelete(this, i, baseUrl);
					else if (operation === 'getAllPublicKeysOfUser') responseData = await executeUserPublicKeyGetAllOfUser(this, i, baseUrl);
					else if (operation === 'getAllRepos') responseData = await executeUserRepoGetAll(this, i, baseUrl);
					else if (operation === 'createRepo') responseData = await executeUserRepoCreate(this, i, baseUrl);
					else if (operation === 'getAllReposOfUser') responseData = await executeUserRepoGetAllOfUser(this, i, baseUrl);
					else if (operation === 'getSettings') responseData = await executeUserSettingsGet(this, i, baseUrl);
					else if (operation === 'updateSettings') responseData = await executeUserSettingsUpdate(this, i, baseUrl);
					else if (operation === 'getAllStarredRepos') responseData = await executeUserStarredRepoGetAll(this, i, baseUrl);
					else if (operation === 'checkStarredRepo') responseData = await executeUserStarredRepoCheck(this, i, baseUrl);
					else if (operation === 'createStarredRepo') responseData = await executeUserStarredRepoCreate(this, i, baseUrl);
					else if (operation === 'deleteStarredRepo') responseData = await executeUserStarredRepoDelete(this, i, baseUrl);
					else if (operation === 'getAllStarredReposOfUser') responseData = await executeUserStarredRepoGetAllOfUser(this, i, baseUrl);
					else if (operation === 'getStopwatches') responseData = await executeUserStopwatchGetAll(this, i, baseUrl);
					else if (operation === 'getAllWatchedRepos') responseData = await executeUserWatchedRepoGetAll(this, i, baseUrl);
					else if (operation === 'getAllWatchedReposOfUser') responseData = await executeUserWatchedRepoGetAllOfUser(this, i, baseUrl);
					else if (operation === 'getTeams') responseData = await executeUserTeamGetAll(this, i, baseUrl);
					else if (operation === 'getAllTrackedTimes') responseData = await executeUserTrackedTimeGetAll(this, i, baseUrl);
					else if (operation === 'getSearch') responseData = await executeUserSearch(this, i, baseUrl);
					else if (operation === 'get') responseData = await executeUserGet(this, i, baseUrl);
					else if (operation === 'getActivityFeeds') responseData = await executeUserActivityFeedGetAll(this, i, baseUrl);
					else if (operation === 'getFollowersOfUser') responseData = await executeUserFollowersGet(this, i, baseUrl);
					else if (operation === 'getFollowingOfUser') responseData = await executeUserFollowingGet(this, i, baseUrl);
					else if (operation === 'checkFollowingAnother') responseData = await executeUserFollowingCheckAnother(this, i, baseUrl);
					else if (operation === 'getAccessToken') responseData = await executeUserAccessTokenGetAll(this, i, baseUrl);
					else if (operation === 'createAccessToken') responseData = await executeUserAccessTokenCreate(this, i, baseUrl);
					else if (operation === 'deleteAccessToken') responseData = await executeUserAccessTokenDelete(this, i, baseUrl);
				}
				

				if (responseData === undefined || responseData === '') {
					responseData = { success: true };
				}

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData as IDataObject | IDataObject[]),
					{ itemData: { item: i } },
				);
				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: (error as Error).message } });
					continue;
				}
				throw error;
			}
		}
		return [returnData];
	}
}

