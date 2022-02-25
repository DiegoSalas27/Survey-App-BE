# [1.14.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.13.0...v1.14.0) (2022-02-25)


### Bug Fixes

* ensure AccountMongoRepository allows admin to access any route ([e32f1c8](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/e32f1c87d1cbd92d472be9f29f20bb19ba6182e2))


### Features

* add middleware interface ([00df1b0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/00df1b0a31f22521d140d7591987adfd8fb3e507))
* ensure AccountMongoRepository returns an account by token without role ([2058045](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/2058045b9cc38865fd6c33e09c99e2f6eb0d56ae))
* ensure add survey routes returns 403 if no access token is provided ([d741c4e](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/d741c4ecb75ba3b03c0c2a606ce24c700bca5b15))
* ensure AuthMiddleware calls LoadAccountByToen with correct accessToken ([3e34226](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/3e3422603636a230704d65cc09c7466a05f37a91))
* ensure AuthMiddleware calls LoadAccountByToken with correct role ([b1edaa2](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/b1edaa2ce33a193902bca020f25d0902fb941278))
* ensure AuthMiddleware returns 200 if LoadAccountByToken returns an account ([5f5a708](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/5f5a708297814af3c94cf66b62bc870be8c93e4f))
* ensure AuthMiddleware returns 403 if no headers found ([6195d8e](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/6195d8e094f539f8404f280bbeb01f4f2ad85a37))
* ensure AuthMiddleware returns 500 if LoadAccountBYToken throws ([51817fe](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/51817fefbb4b310b0befefdc909418d3cf68f5b8))
* ensure DbLoadAccountByToken calls Decrypter with correct values ([8bd09ca](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/8bd09cadace759257ed6a1e56bb23aab295fc089))
* ensure DbLoadAccountByToken calls LoadAccountByTokenRepository with correct values ([7e035c0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/7e035c0caaf1b76df821daec1c658f6a58f971dd))
* ensure DbLoadAccountByToken returns an account on success ([21834a9](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/21834a9678340ec2a2160d013b357541098c8d51))
* ensure JwtAdapter calls verify with correct values ([bc5048c](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/bc5048ce6f5ffce656c2076a994cff27e438ab16))
* ensure JwtAdapter returns a decrypted value on verify success ([6589b72](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/6589b72c7b426a26b22ebe6557b5b55f3ea89d29))



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



