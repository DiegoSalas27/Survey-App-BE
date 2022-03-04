# [1.17.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.16.0...v1.17.0) (2022-03-04)


### Features

* add no cache middleware ([e13c435](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/e13c435472a53a1deaff560f9fedbf915be132a2))
* add swagger api ([e6d3f2c](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/e6d3f2cd5cc54b981ef0ebf0b093a903b5a7051d))
* apply no-cache middleware on swagger api ([8b9c3fa](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/8b9c3faafae38cbed8f44d685d8c1e70ff1cb281))



# [1.16.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.15.0...v1.16.0) (2022-02-27)


### Bug Fixes

* ensure SurveyMongoRepository use MongoHelper.map in all methods ([33b338d](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/33b338d673f2a9bd36a3626d0a056106185c9223))


### Features

* add LoadSurveyById usecase ([8ada052](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/8ada0521eecaddeb703e51c677aef825f2c3261b))
* add SaveSurveyResult usecase ([8bc6092](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/8bc6092c900f5b76efc3c87b0ba24c366b919138))
* add SurveyResultModel ([e1ea741](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/e1ea7418c24701b8adb10bef6764de88477a1ae7))
* ensure DbLoadSurveyById calls LoadSurveyByIdRepository with correct id ([1574d41](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/1574d41bbe30b9e521cd31035d8b7d6b7b4c7dfd))
* ensure DbLoadSurveyById returns a survey on success ([dabf6f8](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/dabf6f87d960cf19c199cfdc0901e039efc42f43))
* ensure DbSaveSurveyResult calls SaveSurveyResultRepository with correct values ([0e59906](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/0e599068736ca9194b3aafb5f57bc408f9cf3177))
* ensure DbSaveSurveyResult returns a SurveyResult on success ([5fd88f8](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/5fd88f81369d0954e8c1e1d5fea5964621e6e047))
* ensure save survey result route returns 403 on save survey result without accessToken ([4037534](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/40375342f5b6c0cef709784df49845a7321241c9))
* ensure SaveSurveyResult returns 403 if an invalid answer is provided ([a2c7b6a](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/a2c7b6a88a3108017254c3078d1125927ece49ab))
* ensure SaveSurveyResult returns 403 if LoadSurveyById returns null ([e8187a4](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/e8187a4410ef9bd9152018754df7289bc64631bd))
* ensure SaveSurveyResult returns 500 if LoadSurveyById throws ([3993617](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/39936179e20ac87315497386c0cda2db01190739))
* ensure SaveSurveyResultController calls LoadSurveyById with correct values ([f400c7f](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/f400c7fe16b4cf4fa8fce88e94282f6045335221))
* ensure SaveSurveyResultController calls SaveSurveyResult with correct values ([b881673](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/b88167386c476026ced821fed3eb25da219175e9))
* ensure SurveyMongoRepository loads survey by id on success ([bfafbd1](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/bfafbd1474bdec5473e5d3c05e3b1abcb99b1b0a))
* ensure SurveyResultMongoRepository adds a survey result it its new ([b767305](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/b767305407da0ac91c95bd3995ab383cd20bfd5a))
* SaveSurveyResultController returns 200 if on success ([6017c23](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/6017c2335b394d5da8ec6ffba505c83f0a7269ad))
* SurveyResultRoute  returns 200 if on success ([7292ae7](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/7292ae7ca0dba70b09199db17833efeef74a0197))



# [1.15.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.14.0...v1.15.0) (2022-02-26)


### Bug Fixes

* mock date before test ([cf344e4](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/cf344e4a38d1f1e4bbfde4627b299220a9798554))


### Features

* ensure DbLoadSurveys calls LoadSurveysRepository ([0f6488d](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/0f6488d7aa4dd55e8cbbbeb74bcde81738aba8b4))
* ensure DbLoadSurveys returns a list of surveys on success ([c34f2a2](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/c34f2a26639bc373be28f8da7cf5a54565c264ee))
* ensure load surveys route returns 403 on load surveys without accessToken ([51be15c](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/51be15c103bdc4fc3c20ef943fbb9c1b5841ef15))
* ensure LoadSurveysController calls LoadSurveysUseCase ([6d554d9](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/6d554d914d917aa16d333e249b341b21a2179b6b))
* ensure LoadSurveysController returns 200 on success ([23d10c0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/23d10c0416ced8ec91c808bba005400658a9ef47))
* ensure LoadSurveysController returns 204 if LoadSurveysUseCase returns empty array ([8f4719e](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/8f4719e4a34b0ae631c14f6bbfa6c3aacae215e3))
* ensure LoadSurveysController returns 500 if LoadSurveysUseCase throws ([ec0e8ca](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/ec0e8ca1c9a1e88d7e0a35100a0bc8bd9d5866e2))
* ensure SurveyMongoRepository load all surveys on success ([403f8e6](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/403f8e61d88de950407a0676245b3cd43df35afc))



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



