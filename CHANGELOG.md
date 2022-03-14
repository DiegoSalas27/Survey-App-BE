# [1.19.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.18.1...v1.19.0) (2022-03-14)


### Features

* add name to Authentication response ([91a5ab3](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/91a5ab3371e7225e310b45a19ea0895cc32744f2))



## [1.18.1](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.18.0...v1.18.1) (2022-03-12)


### Bug Fixes

* changed validation passwordConfirmation to passwordConfirm ([f20a2aa](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/f20a2aad8820622e920bc243776118b12c6b2f72))
* changed validation passwordConfirmation to passwordConfirm ([d2eb06f](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/d2eb06f7d5ec0443d4b10ba3b37865dcdac764a9))



# [1.18.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.17.0...v1.18.0) (2022-03-05)


### Bug Fixes

* change save survey result to return all answers ([1ca1c4f](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/1ca1c4f23b340748800af9661d8d8b27b038d443))


### Features

* add LoadSurveyResult use case ([541a7e6](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/541a7e6015420953b449152843884522a2af1538))
* ensure DbLoadSurveyResult calls LoadSurveyByIdRepository if LoadSurveyResultRepository returns null ([3020f0e](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/3020f0e74a231192083a50784d23e75bf37fd328))
* ensure DbLoadSurveyResult calls LoadSurveyResultRepository with correct values ([b815f6a](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/b815f6a2693f600dea74024248d60a8a7b9c6358))
* ensure DbLoadSurveyResult returns a SurveyResultModel call with all answers with count 0 if LoadSurveyResultRepository returns null ([a93314d](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/a93314d42972ffe3a4f997b064711652d8b80b1c))
* ensure DbLoadSurveyResult returns a SurveyResultModel on success ([4c36229](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/4c36229725c909a46d437a246f4dd3e8796434d2))
* ensure LoadSurveyResult calls LoadSurveyById wtih correct value ([e74a0bc](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/e74a0bc9dbbd9c58674dfaa82bcb38d293010c87))
* ensure LoadSurveyResultController calls LoadSurveyResult with correct value ([a7286a5](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/a7286a5d463c088e89e3e03bab8dcd10d20bd343))
* ensure LoadSurveyResultController returns 200 on success ([d3ec37a](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/d3ec37ae578410b0a9798aeee01e1a7260948c22))
* ensure LoadSurveyResultController returns 403 if LoadSurveyById returns null ([1b3ce68](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/1b3ce68afdc5e110d5ea77666cff22d5ff5a93cf))
* ensure LoadSurveyResultController returns 500 if LoadSurveyById throws ([e5490e0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/e5490e08d4628c81038da69a8490d61c2e154580))
* ensure SurverResultRoutes returns 403 on load survey result without accessToken ([70e57a7](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/70e57a75724e1316ba36228f57191f5c5b1b0c11))
* ensure SurveyResultMongoRepository loads surveyResults correctly ([9aa88f1](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/9aa88f149d1e26e3f705a308ca7739f28bc542cd))



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



