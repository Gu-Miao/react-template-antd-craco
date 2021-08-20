# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.1.0 - 2020-01-04

### Added

- Nesting routers render and examples.

### Changed

- Fix images error in `/public`.

## 2.0.0 - 2020-01-04

- Break Change: No longer support typescript by default

### Added

- Add `.env` to set env variables.

### Changed

- Update deps.
- Change ts to js.

## 1.1.0 - 2020-01-04

### Added

- Add eslint support for prettier.
- Add typscript support.
- Add `.gitattributes` to set `end of line` to `lf`.

### Changed

- Upadte `react-script` to version 4 and `crao` to version 6.
- Update `react`, `react-dom` to version 17.
- Use `AsyncComponent` instead of `React.lazy` so that loading disappear when routers changed.

### Removed

- Remove `cross-env`.
- Remove `config` key in `package.json`.

## 1.0.1 - 2020-12-05

### Changed

- Add `PUBLIC_URL=$npm_package_config_public` for build script.

## 1.0.0 - 2020-11-17

### Added

- Use CRA to initial project.
- Add `craco`, `craco-less`, `antd`, set `webpack alias`, import plugin, `decorator` plugin.
- Add config router.
- Add `.editorconfig` and `prettier`.
- Add `README`.
