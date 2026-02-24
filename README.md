# Foundry Preview Deployments

Static preview pages deployed via GitHub Pages + GitHub Deployments API. Used for Foundry preview validation only.

## Preview URL Format

```
https://joyntshops.github.io/foundry-demo/previews/pr-<PR_NUMBER>/
```

## Usage

### Deploy a preview

Run the **Preview Up** workflow via `workflow_dispatch`:

```bash
gh workflow run preview-up.yml \
  -f pr=42 \
  -f sha=abc1234 \
  -f branch=feature/my-branch
```

This will:
- Publish a static page to `gh-pages` at `previews/pr-42/`
- Create a GitHub Deployment with environment `preview/pr-42`
- Set deployment status to `success` with the Pages URL

### Tear down a preview

Run the **Preview Down** workflow via `workflow_dispatch`:

```bash
gh workflow run preview-down.yml -f pr=42
```

This will:
- Remove the `previews/pr-42/` directory from `gh-pages`
- Mark all deployments for `preview/pr-42` as `inactive`
