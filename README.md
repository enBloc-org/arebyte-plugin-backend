# Arebyte-plugin-backend

This repo holds the codebase for the content management system to the arebyte plugin.

## Getting started

The codebase uses [strapi](https://docs.strapi.io/dev-docs/admin-panel-customization) to create a CMS. To get started with contributing to the code base you can simply run the following commands:

```bash
npm install
```
```bash
npm run develop
```
For a deeper dive into developing with Strapi see the official documentation linked above.

## Running the system configuration migration
In order to keep out Strapi backend in sync across different environments we are using the Config Sync plugin by auto-generating configuration files.

To make this easier see the script in the ```package.json```

### The flow:
If you have change configuration or permission settings you need to run the command:

``` npm run cs export ```

After you merge new changes:

```npm run cs import``` 

### Data importing and exporting for development
As part of this project the development team has created a migration file to allow for consistent data for development and testing. This file will be included in any handover for this project, so please look there for the relevant file.

To import the this file once you have the project up and running run:

```npm run strapi import -- -f /path/to/my/file/arebyte-test-data.tar.gz```

If for any reason you want to export updated versions of the data please read the official documentation on how to do so [here](https://docs.strapi.io/dev-docs/data-management/export).

#### Login details for test users
There are two authenticated users as part of this development data, to use them during development please use the following credentials:

``` 
username: UserOne
email: userone@test.com
password: User1Test

username: UserTwo
email: usertwo@test.com
password: User2Test
```

To use these credential for testing please see 
[testing](./.github/documentation/TESTING.md).

## Further reading

For more guidance on the setup of this repo see the following documentation:

- [testing](./.github/documentation/TESTING.md)
