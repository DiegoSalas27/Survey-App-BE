# [1.13.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.12.0...v1.13.0) (2022-02-24)


### Features

* add AddSurvey composition ([5a76b2a](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/5a76b2a09334b1e2601a878402ab8ebbaef9d518))
* ensure AddSurveyController calls AddSurveyUseCase with correct values ([5c72b85](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/5c72b85cbe61ed696d38a0c997d90d9105c3cacc))
* ensure AddSurveyController calls Validation with correct values ([74c02f6](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/74c02f6379aa5bf165e24f9acbdaf31a2ab2f30a))
* ensure AddSurveyController returns 204 on success ([e28fd8b](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/e28fd8b6aef32cd41a0dcf75cc43a59d13869ccd))
* ensure AddSurveyController returns 500 if AddSurveyUseCase throws ([c1925cb](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/c1925cbe7f321a964c4256806237856738333070))
* ensure AddSurveyController returns a badRequest error if validation fails ([e9cb0fe](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/e9cb0fed4136ff1f4b1ed641360baea5f2118ce6))
* ensure DbAddSurvey calls DbAddSurveyRepository with correct values ([1adaa71](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/1adaa712afc2601a88e33a5d5e634511c50db8c8))
* ensure ServerMongoRepository adds a survey on success ([11d970a](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/11d970a56be20c0d6e7dde2d1f4e25c8eba920ed))



# [1.12.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.11.0...v1.12.0) (2022-02-24)


### Features

* ensure DbAddAccount calls LoadAccountByEmailRepository with correct email ([dc1e1d9](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/dc1e1d9a1e049784707c22df98b15e3b2f30fa0b))
* ensure DbAddAccount returns null if LoadAccountByEmailRepository returns an account ([976d4e0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/976d4e0cce97ad068c71e8642b5a90c55fc57c5f))
* ensure SignUpController calls Authentication with correct values ([c163f93](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/c163f930570efe0e9249ce30b5a8bd8a162c441f))
* ensure SignUpController returns 403 if AddAccount returns null ([de81ee4](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/de81ee4cf474d512708b14d26cafbd93fdba4e94))
* ensure SignUpController returns an accessToken on success ([87d2b60](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/87d2b601b97c4490b2548b11bf56927273d1b245))



# [1.11.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.10.0...v1.11.0) (2022-02-23)


### Features

* dockerized api and database ([c8e28e4](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/c8e28e4901e03f62f463a6e48ecbe1f801334c02))



# [1.10.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.9.0...v1.10.0) (2022-02-18)


### Features

* add login route ([037bf36](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/037bf36d4f5220c105d636759c7a3e6a702b5ab0))
* add LoginFactory ([a4dd1e5](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/a4dd1e57586f9d3bfdfe79e03b70e1199e68fe7d))



# [1.9.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.8.0...v1.9.0) (2022-02-18)


### Features

* ensure Account Mongo Repository returns an account on loadByEmail success ([c19d499](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/c19d49984befa99fd91e9cec836b0e2cac79b7a9))
* ensure AccountMongoRepository updates the account accessToken on updateAccessToken success ([bb7d94f](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/bb7d94f4c9d5bd03812564bcc44cc726de9fbc94))
* ensure BcryptAdapter calls bcrypt compare with correct values ([6fe988b](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/6fe988b47e164eacd99c9f53f0e692aef5337d25))
* ensure BcryptAdapter returns false when compare fails ([09bbb16](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/09bbb162cf2c0ed4ef58557a008d97f9d3123e22))
* ensure JWT Adapter calls sign with correct values ([643ec01](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/643ec01df733b00c0a32bfbd3c1c1b744bbc7095))
* ensure JWT Adapter returns accessToken on sign success ([b87a709](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/b87a709372073a10a1ecb1934d6397380f721c37))



