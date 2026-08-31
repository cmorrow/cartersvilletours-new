# Cartersville Tours

Nuxt 4 app styled with Tailwind CSS, deployed to Azure Static Web Apps via GitHub Actions.

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Production build

```bash
pnpm build
```

Locally preview the production build:

```bash
pnpm preview
```

## Deployment

Pushes to `main` build and deploy automatically via [.github/workflows/azure-static-web-apps.yml](.github/workflows/azure-static-web-apps.yml). The workflow needs an `AZURE_STATIC_WEB_APPS_API_TOKEN` repo secret from the Azure Static Web App resource.
