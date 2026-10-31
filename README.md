# Foundry demo

A tiny static page that exists to be changed by a coding agent. This repository is the test bed for [Joynt Foundry](https://github.com/joyntshops/foundry), the GitHub Action that turns an issue into a verified pull request. Nothing here is a product; the point is the history.

## What you are looking at

- **`index.html`** is a one-page list of "Hello World" in several languages. It prints the pull request number and commit it was built from, so a preview can be checked against the PR that produced it. The live copy of the `integration` branch is at <https://joyntshops.github.io/foundry-demo/>.
- **[Issues](../../issues?q=is%3Aissue)** were written by a person. Each one is a task: "add a Portuguese greeting", "give the page a modern look". A comment of `@foundry go` started the agent.
- **[Pull requests](../../pulls?q=is%3Apr)** opened by `foundry-bot-joyntshops` were written by the agent. Read one end to end: the claim comment on the issue, the status comment that records every transition, the PR, the preview link, the approval, and the merge Foundry performed.
- **[Actions](../../actions)** holds every run. One run is one GitHub event: a comment, a review, a merge. The agent's transcript is the job log and is uploaded as an artifact.
- **`gh-pages`** holds the previews: `previews/pr-<n>/` for each PR while it is open, torn down on merge.

The labels tell you the state of a task at a glance: `state:in-progress`, `state:ready-for-human-review`, `state:waiting-for-input`, `state:done`, `state:failed`. `mode:*` labels choose how the agent works (plan first, or go straight to code).

## How it is wired

Three workflow files and one config file, all written or scaffolded by `foundry init`:

| File | Role |
|---|---|
| `.github/workflows/foundry.yml` | Runs the Foundry action on the events it acts on. The template is [documented here](https://github.com/joyntshops/foundry/blob/main/docs/foundry/github-action.md). |
| `.github/workflows/preview-up.yml`, `preview-down.yml` | Publish or remove `previews/pr-<n>/` on `gh-pages`. Foundry dispatches them; a repo with Vercel or similar would dispatch that instead. |
| `.joynt-foundry.yml` | Branch names, verify commands, preview URL template, the `verify_preview` checks that run against the live preview before a PR is marked ready. |

Branch model: `integration` is the default branch and where task PRs land; `main` is production and receives promotion PRs from `integration`. Foundry brings this model to a repo; the names are configuration.

## Can I run it?

Not on this repository. Commenting `@foundry go` requires write access, and the runs act as a GitHub App installed only on the `joyntshops` organization. Forking copies the files, not the App or the secrets.

To run Foundry on a repository of your own:

```bash
npx @joyntshops/foundry init
```

and follow [Onboarding](https://github.com/joyntshops/foundry/blob/main/docs/foundry/onboarding.md). You need a Claude subscription token (`claude setup-token`) and, in practice, a GitHub App so the PRs the agent opens get CI; `foundry setup-bot` creates one.

## License

MIT. See [LICENSE](LICENSE).
