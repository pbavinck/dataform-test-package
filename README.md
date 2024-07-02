# dataform-test-package

## Release Management
This can be done via the GitHub CLI (gh) or via the browser ([docs](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository?tool=webui))
1. Create a new release
2. Create a new tag for your release (e.g. v0.4)
3. Publish the release

The release can then be used via an url like: https://github.com/pbavinck/dataform-test-package/archive/v0.4.tar.gz.

## Adding the package to your repo
Follow the docs for a **non**-published NPM package [here](https://cloud.google.com/dataform/docs/install-package).

I.e. add the following 

```
{
    "name": "repository-name",
    "dependencies": {
        "@dataform/core": "3.0.0",
        "test-package": "https://github.com/pbavinck/dataform-test-package/archive/v0.4.tar.gz"
    }
}
```