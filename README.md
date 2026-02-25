# foundry-demo

## Preview Deployments

This repo uses GitHub Pages + GitHub Deployments API for PR preview deployments via Foundry.

### Preview URL Format

```
https://joyntshops.github.io/foundry-demo/previews/pr-{PR_NUMBER}/
```

### Manual Usage

**Deploy a preview:**

```bash
gh workflow run preview-up.yml \
  -f pr=42 \
  -f sha=$(git rev-parse HEAD) \
  -f branch=$(git branch --show-current)
```

**Tear down a preview:**

```bash
gh workflow run preview-down.yml -f pr=42
```

### Notes

- Previews are published to the `gh-pages` branch under `previews/pr-<number>/`.
- Each deploy creates a GitHub Deployment with a `preview/pr-<number>` environment.
- Teardown removes the preview directory and marks the deployment as inactive.
- This system is for Foundry preview validation only.
