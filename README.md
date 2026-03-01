# n8n-nodes-gitea-full

[中文说明](README_CN.md)

This is an n8n community node that provides a comprehensive integration with [Gitea](https://gitea.io/). It implements all API endpoints compatible with Gitea version 1.25, allowing you to automate almost every aspect of your Gitea instance.

**Disclaimer:** This is an unofficial community node. It is not affiliated with, endorsed by, or associated with Gitea or the Gitea project. The Gitea logo and trademarks used in this project are the property of their respective owners.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

![](img.png)

## Features

This node covers a wide range of Gitea resources:

- **Repository**: CRUD operations, migration, search, branching, branch protection, collaborators, and commits.
- **Issue**: Complete issue management including comments, labels, milestones, dependencies, blocking, stopwatch, tracked time, subscriptions, reactions, and attachments.
- **Organization**: Manage organizations, members, teams, and organizational repositories.
- **User**: Manage profile settings, public/GPG keys, blocks, emails, followers, hooks, and OAuth2 applications.
- **Package**: Support for Gitea package registry (Container, NPM, Maven, PyPI, Go, etc.).
- **Notification**: View and manage notification threads.
- **Admin**: System-wide administration including cron tasks, system hooks, user/org management, and unadopted repositories.
- **Repository Actions**: Manage Gitea Actions artifacts, jobs, runs, runners, secrets, and variables.
- **ActivityPub**: Basic ActivityPub support.
- **Miscellaneous**: Markdown/Markup rendering, templates (gitignore, label, license), and system info.

## Installation

### n8n UI
1. Go to **Settings > Community Nodes**.
2. Click on **Install a next node**.
3. Enter `n8n-nodes-gitea-full` in the **Enter npm package name** field.
4. Agree to the risks and click **Install**.

### CLI
For Docker-based installations:
```bash
npm install n8n-nodes-gitea-full
```

## Credentials

To use this node, you'll need a Gitea API Token:

1. Log in to your Gitea instance.
2. Go to **Settings > Applications**.
3. Under **Manage Access Tokens**, enter a name and click **Generate Token**.
4. Copy the generated token.
5. In n8n, create a new **Gitea API** credential and paste your **Base URL** (e.g., `https://gitea.com`) and **Access Token**.

## Compatibility

- Developed and tested against Gitea 1.25.
- Requires n8n version 1.0.0 or higher.

## Resources

- [Gitea API Documentation](https://docs.gitea.com/api/1.25/)
- [GitHub Repository](https://github.com/sungaowei/n8n-nodes-gitea)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](LICENSE)
