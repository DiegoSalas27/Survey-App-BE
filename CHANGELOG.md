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



# [1.1.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/f438c250d884f88abfca14fd01732e14e3bcb40f...v1.1.0) (2022-01-21)


### Features

* added pre-release workflow for uat environment ([9f2bf67](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/9f2bf67eeb2ea1ed9ea190439ddc99eaad937f50))
* ensure SignUpController returns 400 if no email is provided ([dfecca4](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/dfecca4aec051ebbf9ad292332adcd475a698dc4))
* ensure SignUpController returns 400 if no name is provided ([f438c25](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/f438c250d884f88abfca14fd01732e14e3bcb40f))
* ensure SignUpController returns an error if no name is provided ([0545e20](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/0545e20fd1ed3548cfbf73873d9038e1b9953a34))



