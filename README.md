# GitHub Enhancement Suite

A Tampermonkey script to enhance the GitHub experience.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) for your browser
2. [Click here to install the script](https://raw.githubusercontent.com/collinstevens/github-enhancement-suite/master/github-enhancement-suite.user.js)
3. Click "Install" when prompted by Tampermonkey

## Features

### Pull Request Draft Filter

Adds a segmented **Drafts** filter (All / Draft / Ready) to the pull request list page, next to the search bar. This lets you quickly filter PRs by draft status without manually editing the search query.

- **All** — shows all pull requests (default GitHub behavior)
- **Draft** — shows only draft pull requests (`draft:true`)
- **Ready** — shows only non-draft pull requests (`draft:false`)

Your selected filter is persisted in `localStorage` and automatically re-applied when you revisit any pull request list, including across turbo/pjax navigations.

