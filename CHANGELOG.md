# [1.6.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.5.0...v1.6.0) (2022-02-12)


### Features

* add LogMongoRepository to SignUpFactory ([a2d4b49](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/a2d4b49e4d3944e122b0a5b85b2f30ccbfd05db5))
* add LogMongoRepository to SignUpFactory ([5878edf](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/5878edfd3643c5505ef56391359a93db16710a2d))
* ensure LogControllerDecorator calls controller with correct value ([df6573c](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/df6573cb12adb0de2d0f5d5e150ac4e15625ed0f))
* ensure login LogControllerDecorator call LogErrorRepository with correct error if controller returns a server error ([f87fbae](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/f87fbaea2b27986a78d2de1ba8b3cd767fbeacdc))
* ensure LogMongoRepository creates an error log on success ([eac70cb](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/eac70cbb6651112ccf9352b5d5c3199b4402ebf2))
* updated globalConfig ([b2a3b78](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/b2a3b78d8eca466911a15780d6b5aca9304f653e))



# [1.5.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.4.0...v1.5.0) (2022-01-29)


### Features

* add ExpressRouteAdapter ([9dbc878](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/9dbc8781531a1489970774410fc3abf9a5c41e8f))
* add SignUp Factory ([8278f6d](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/8278f6da67d7ca8145288678528ebf5b51fc8dd4))
* add signup route integration test ([faff3a7](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/faff3a7199a997e17de76af702e3bbb80a4a07c2))
* connect to mongodb before app listen ([de818fe](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/de818feffd16ad7557fa9ce2ade04265185632a2))
* ensure cors is enabled ([b4a038b](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/b4a038ba50732bfb6b9202b4213bf5edd2ccb9f5))
* ensure requests parse body as json ([8ee87e2](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/8ee87e2008c5b9150c3702fbe3c2e98e6dbc3756))
* ensure requests return json as default content type ([243b97f](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/243b97fd588877dc20aa1ebc82872f4eadeeff82))



# [1.4.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.3.0...v1.4.0) (2022-01-28)


### Features

* ensure AccountMongoRepository returns an account on success ([fa6b461](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/fa6b461ce827a809e082021b3914ea9554dbd61c))
* ensure BcryptAdapter calls bcrypt with correct value ([91f41ea](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/91f41ea3c9aa90c46f6cd738c8c97c22f2a6fed8))
* ensure BcryptAdapter returns a hash on success ([6c4fbba](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/6c4fbbacb96fe5b854413bd28af6c5d85e113cbb))



# [1.3.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.2.0...v1.3.0) (2022-01-27)


### Features

* ensure DbAddAccount calls AddAccountRepository with correct values ([6a740ad](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/6a740ad338dba679288501fbd2136ca5c9eb4a20))
* ensure DbAddAccount calls Encrypter with correct password ([2908887](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/29088875d3a7a145aafd3be974c8592b2c78effd))
* ensure EmailValidatorAdapter returns false if validator returns false ([51c3f86](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/51c3f869b53a980c853e4472c3d035a3ff553d79))
* ensure EmailValidatorAdapter returns true if validator returns true ([c7d4039](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/c7d4039dbdd5f799f2ddbe0f7eba9b979438bee7))
* ensure SignUpController calls AddAccount with correct values ([f8b3f03](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/f8b3f032bd9c238aa1ebb6b7b20a79f8548f8864))
* ensure SignUpController return 500 if EmailValidator throws ([7df100d](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/7df100d84defa4e45f3b373d72db3b6bd18f4e2d))
* ensure SignUpController returns 200 if valid data is provided ([d2d8e47](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/d2d8e4796605ccd8387158ebfdaf0f3291e203a4))
* ensure SignUpController returns 400 if an invalid email is provided ([2c92636](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/2c9263604d8bb731ce44acd4c5f6bd953685d177))
* ensure SignUpController returns 400 if no password is provided ([202addb](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/202addb8bbb082b5aaceab95e22d29ba38af36f8))
* ensure SignUpController returns 400 if passwordConfirmation fails ([b63b4fe](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/b63b4fe402a8d363fa67e4386d27ab5bd8029ef2))
* ensure SignUpController returns 400 is no password confirmation is provided ([bb5d0da](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/bb5d0da51492b187cf5d70145ca4aa2583072a0f))
* ensureDbAddAccount returns an account on success ([e795f32](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/e795f32ec4a67de0bded724460291d5dc5dfe4bf))



# [1.2.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.1.0...v1.2.0) (2022-01-21)


### Features

* create pre-release for uat ([662ae93](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/662ae9371b127e10c2b30b84bb87d97803d2a390))



