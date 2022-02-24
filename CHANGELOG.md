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



# [1.8.0](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/compare/v1.7.0...v1.8.0) (2022-02-17)


### Features

* ensure DbAuthentication calls HashComparer with correct values ([46bf7aa](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/46bf7aa70278b86d74126ccd9e0faf279843146a))
* ensure DbAuthentication calls LoadAccountByEmailRepository with correct email ([31bf158](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/31bf1581994f51d3e9323611bfe1060be214949a))
* ensure DbAuthentication calls TokenGenerator with correct id ([3300957](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/330095702087fa456e5b595f77b1299dfa0be1e5))
* ensure DbAuthentication calls UpdateAccessTokenRepository with correct values ([bff2fa5](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/bff2fa57f0b3a2227618fbd04f2c54052fc11acc))
* ensure DbAuthentication returns a token on success ([4823b34](https://github.com/DiegoSalas27/NodeJs-Typescript-TDD-Clean-Architecture-e-SOLID/commit/4823b34d054e333306a149b886d6d154b0112b29))



