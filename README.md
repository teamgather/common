### Common
A common package for all JavaScript and TypeScript projects.
___

### Prerequisites
1. [Git [2+]](https://git-scm.com/downloads)
2. [Node.js [22.14.0+]](https://nodejs.org/en/download/package-manager)
___

### Development Setup
``` bash
git clone https://github.com/teamgather/common.git
cd common

npm i
```
___

### Publish NPM Package
increase package [VERSION] in package.json

``` bash
npm i
npm run lint
npm run build

git add .
git commit -m "<type>: [VERSION] commit message" # example: git commit -m "feat: [1.0.0] locale enum"
git push origin main

git tag [VERSION]
git push origin [VERSION]
```

[https://github.com/teamgather/common/actions](https://github.com/teamgather/common/actions)
