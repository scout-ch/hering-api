# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v2.1.0] - 2025-11-09
### :sparkles: New Features
- [`ca530e7`](https://github.com/scout-ch/hering-api/commit/ca530e79648f2bcfc211a071b524e7ae1e5cc373) - added collection type for pages *(commit by [@mario-zelger](https://github.com/mario-zelger))*

### :bug: Bug Fixes
- [`80f601b`](https://github.com/scout-ch/hering-api/commit/80f601be8ace4f16b903a8bbe509717259ceb5be) - **deps**: updated Strapi to 5.30.0 *(commit by [@mario-zelger](https://github.com/mario-zelger))*
- [`a69a50f`](https://github.com/scout-ch/hering-api/commit/a69a50fec2a2969db5cb7058047eadb420f12cd6) - renamed Links to Link for consistency *(commit by [@mario-zelger](https://github.com/mario-zelger))*
- [`d5b6213`](https://github.com/scout-ch/hering-api/commit/d5b6213b3c5a98a10cc0fa90739c0d28ef78ed67) - **deps**: updated Strapi to 5.30.1 *(commit by [@mario-zelger](https://github.com/mario-zelger))*
- [`0321fe4`](https://github.com/scout-ch/hering-api/commit/0321fe44abc44bf25aaface185f693842b0c0edc) - **deps**: NPM package updates *(commit by [@mario-zelger](https://github.com/mario-zelger))*
- [`143f4d2`](https://github.com/scout-ch/hering-api/commit/143f4d204c68a7ab420209925d092b2387c621ad) - added missing log level configuration via environment *(commit by [@mario-zelger](https://github.com/mario-zelger))*
- [`e909638`](https://github.com/scout-ch/hering-api/commit/e9096383f1e2896f96d0823b1d7571d6ffc912e4) - removed unused link title property *(commit by [@mario-zelger](https://github.com/mario-zelger))*

### :recycle: Refactors
- [`1b83b63`](https://github.com/scout-ch/hering-api/commit/1b83b6399bada5eda2632360a4845dc03b639408) - removed unused single page types *(commit by [@mario-zelger](https://github.com/mario-zelger))*


## [v2.0.7] - 2025-10-30
### :bug: Bug Fixes
- [`b26f135`](https://github.com/scout-ch/hering-api/commit/b26f13567ce1361dbc65ee2bb660f8f2f50323a1) - removed deprecated jwt session config *(commit by [@mario-zelger](https://github.com/mario-zelger))*
- [`8c5488d`](https://github.com/scout-ch/hering-api/commit/8c5488dffb062cec9cbc7dab51e719a3db677108) - added missing Strapi url config *(commit by [@mario-zelger](https://github.com/mario-zelger))*
- [`fdb4bf6`](https://github.com/scout-ch/hering-api/commit/fdb4bf6736f4b5c3ea33913d1064e4d546626131) - **deps**: updated Strapi to 5.29.0 *(commit by [@mario-zelger](https://github.com/mario-zelger))*
- [`f419041`](https://github.com/scout-ch/hering-api/commit/f419041c16c54616e9feb255761eca033f3c8a51) - log warning if link cannot be found *(commit by [@mario-zelger](https://github.com/mario-zelger))*
- [`49e1861`](https://github.com/scout-ch/hering-api/commit/49e18612985854d933784ab965aaadbe06902589) - **deps**: npm packages updates *(commit by [@mario-zelger](https://github.com/mario-zelger))*


## [v2.0.6] - 2025-10-05
### :bug: Bug Fixes
- [`113448b`](https://github.com/scout-ch/hering-api/commit/113448be994a111df08e8f321c7fa9bb73f71c93) - use one to many relationship between tasks and chapters *(commit by [@mario-zelger](https://github.com/mario-zelger))*


## [v2.0.5] - 2025-10-05
### :bug: Bug Fixes
- [`1f8b7cb`](https://github.com/scout-ch/hering-api/commit/1f8b7cb65fcce6ca66da807b634db9286e38b5c0) - trust proxy header fields *(commit by [@mario-zelger](https://github.com/mario-zelger))*


## [v2.0.4] - 2025-10-05
### :bug: Bug Fixes
- [`44e7b48`](https://github.com/scout-ch/hering-api/commit/44e7b487d24a782da05af04d3e7e206e6aa621b3) - **deps**: strapi update *(commit by [@mario-zelger](https://github.com/mario-zelger))*
- [`535fbad`](https://github.com/scout-ch/hering-api/commit/535fbad762eaa36c86d55e82ac8b7d111534b910) - **deps**: npm package updates *(commit by [@mario-zelger](https://github.com/mario-zelger))*

### :wrench: Chores
- [`01d59b2`](https://github.com/scout-ch/hering-api/commit/01d59b2277e1f389435249c69e422361e2a0cfdc) - **deps**: update actions/checkout action to v5 *(commit by [@renovate[bot]](https://github.com/apps/renovate))*
- [`3e94f14`](https://github.com/scout-ch/hering-api/commit/3e94f14203761f2e5ef8e61fed6edc7ac6dec6c0) - **deps**: update stefanzweifel/git-auto-commit-action action to v6 *(commit by [@renovate[bot]](https://github.com/apps/renovate))*
- [`1abeff3`](https://github.com/scout-ch/hering-api/commit/1abeff3aecd30863444a6a2109f9c1fd7a6ff92e) - **deps**: update actions/github-script action to v8 *(commit by [@renovate[bot]](https://github.com/apps/renovate))*
- [`a555780`](https://github.com/scout-ch/hering-api/commit/a555780375357c220f8fb16df10eefd6f0f4c161) - **deps**: use v22 of @types/node *(commit by [@mario-zelger](https://github.com/mario-zelger))*
- [`a8a57f6`](https://github.com/scout-ch/hering-api/commit/a8a57f60d2e0053def9a4a45af555013d68642f7) - **deps**: update stefanzweifel/git-auto-commit-action action to v6 *(commit by [@renovate[bot]](https://github.com/apps/renovate))*


## [v2.0.3] - 2025-08-25
### :recycle: Refactors
- [`d424994`](https://github.com/scout-ch/hering-api/commit/d42499449422e2092b47257130ccc5822f308a94) - made chapter and publicUrl in link conditional *(commit by [@mario-zelger](https://github.com/mario-zelger))*


## [v2.0.2] - 2025-08-20
### :wrench: Chores
- [`2c2a866`](https://github.com/scout-ch/hering-api/commit/2c2a8661a5f3cddde68bf3265eed518859937bb7) - **deps**: Strapi update *(commit by [@mario-zelger](https://github.com/mario-zelger))*


## [v2.0.1] - 2025-08-17
### :wrench: Chores
- [`4c5bd7b`](https://github.com/scout-ch/hering-api/commit/4c5bd7b2127009faf4deba5f229adc7469edea3c) - **deps**: Strapi update *(commit by [@mario-zelger](https://github.com/mario-zelger))*

[v2.0.1]: https://github.com/scout-ch/hering-api/compare/v2.0.0...v2.0.1
[v2.0.2]: https://github.com/scout-ch/hering-api/compare/v2.0.1...v2.0.2
[v2.0.3]: https://github.com/scout-ch/hering-api/compare/v2.0.2...v2.0.3
[v2.0.4]: https://github.com/scout-ch/hering-api/compare/v2.0.3...v2.0.4
[v2.0.5]: https://github.com/scout-ch/hering-api/compare/v2.0.4...v2.0.5
[v2.0.6]: https://github.com/scout-ch/hering-api/compare/v2.0.5...v2.0.6
[v2.0.7]: https://github.com/scout-ch/hering-api/compare/v2.0.6...v2.0.7
[v2.1.0]: https://github.com/scout-ch/hering-api/compare/v2.0.7...v2.1.0
