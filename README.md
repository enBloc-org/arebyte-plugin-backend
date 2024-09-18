## Running the system configuration migration
In order to keep out Strapi backend in sync across different environments we are using the Config Sync plugin by auto-generating configuration files.

To make this easier see the script in the ```package.json```

### The flow:
If you have change configuration or permission settings you need to run the command:

``` npm run cs export ```

After you merge new changes:

```npm run cs import``` 
