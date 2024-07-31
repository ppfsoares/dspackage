# ReactUI

## Como instalar

``` bash
npm install
npm run dev
npm run storybook
```

## Como criar componentes

Clone do [shadcn](https://ui.shadcn.com/docs/components) e faça as adaptações q forem necessárias ao design

```bash
npx shadcn-ui@latest add button
```

## Como deployar no AWS CodeArtifact

Decidimos publicar no [AWS CodeArtifact](https://us-east-1.console.aws.amazon.com/codesuite/codeartifact/d/767397850478/zandir/r/ZandirPackages?region=us-east-1&packages-meta=eyJmIjp7fSwicyI6e30sIm4iOjIwLCJpIjowfQ) para poder usar o pacote privado sem custos.

> Somente usuários administradores conseguem publicar. Após se conectar via [AWS CLI](https://docs.aws.amazon.com/pt_br/cli/latest/userguide/getting-started-install.html):

```bash
aws codeartifact login --tool npm --repository ZandirPackages --domain zandir --domain-owner <767397850478> --region us-east-1
ou
npm run set-aws-codeartifact
```

Publique o pacote

```bash
npm run  publish-aws
```

Retorne seu npm local para o valor padrão

```bash
npm config set registry https://registry.npmjs.com/
ou
npm run unset-aws-codeartifact
```

## Como usar o pacote em outro projeto

Verifique se no arquivo .npmrc do repositório existe a linha abaixo:

```js
@zandir:registry=https://zandir-767397850478.d.codeartifact.us-east-1.amazonaws.com/npm/ZandirPackages/
```

Depois execute:

```bash
npm i -D @zandir/reactui@latest
```

Importe os componentes conforme necessário e use de acordo com o [storybook](http://rootds.qa.s3-website-us-east-1.amazonaws.com):

```js
import { Zbutton } from '@zandir/reactui'

function App() {

  return (
    <>
      <Zbutton>REACTUI</Zbutton>
    </>
  )
}

export default App
```

Obs: O comando abaixo retorna a url atualizada do repositório do AWS Codeartifact caso necessário

```bash
aws codeartifact get-repository-endpoint --domain zandir --domain-owner 767397850478 --repository ZandirPackages --format npm
```

