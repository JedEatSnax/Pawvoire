# Contributing

A full guide on how to contribute to LINAW.

## Issues

1. Verify if your [issue](https://github.com/JedEatSnax/Pawvoire/issues) is already mentioned to avoid duplication.
2. Open an issue using GitHub's [bug report](ISSUE_TEMPLATE/bug_report.md) or [feature request](ISSUE_TEMPLATE/feature_request.md) template.
3. Please note if the issue is identified by a human or an LLM.

## Development

Copy and paste the [example](.dev.vars.example) environemt variables into your own `.dev.vars` file.

### Installation

```shell
pnpm install
pnpm run dev
```

### Testing

There are no unit tests for the server directory yet.

```shell
pnpm run typecheck
pnpm run lint
```
