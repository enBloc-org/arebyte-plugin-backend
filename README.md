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

## Further reading

For more guidance on the setup of this repo see the following documentation:

- [testing](./.github/documentation/TESTING.md)
