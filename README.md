# foundry-demo

Foundry preview validation repository. Demonstrates the GitHub Pages preview
deployment workflow managed by [Joynt Foundry](https://github.com/joyntshops).

## Preview Deployments

Preview environments are deployed to GitHub Pages under the `gh-pages` branch.
Each preview is scoped to a single pull request.

### Preview URL Format

```
https://joyntshops.github.io/foundry-demo/previews/pr-{PR_NUMBER}/
```

Example: PR #42 deploys to `https://joyntshops.github.io/foundry-demo/previews/pr-42/`

### Running preview-up manually

Navigate to **Actions > Preview Up > Run workflow** and provide:

| Input    | Description                        | Example                 |
|----------|------------------------------------|-------------------------|
| `pr`     | Pull request number                | `42`                    |
| `sha`    | Full or short commit SHA to deploy | `abc1234`               |
| `branch` | Source branch name                 | `feature/42-my-feature` |

Or via the GitHub CLI:

```bash
gh workflow run preview-up.yml \
  --repo joyntshops/foundry-demo \
  -f pr=42 \
  -f sha=abc1234 \
  -f branch=feature/42-my-feature
```

### Running preview-down manually

Navigate to **Actions > Preview Down > Run workflow** and provide:

| Input | Description         | Example |
|-------|---------------------|---------|
| `pr`  | Pull request number | `42`    |

Or via the GitHub CLI:

```bash
gh workflow run preview-down.yml \
  --repo joyntshops/foundry-demo \
  -f pr=42
```

---

> This repository exists for Foundry preview validation only.
