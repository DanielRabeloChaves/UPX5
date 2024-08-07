# Documentação do Aplicativo: React-Native Android - Expo Go

## Estrutura do Projeto

```
├── assets/
├── src/
│   ├── Img/
│   ├── components/
│   ├── config/
│   ├── pages/
│   └── util/
├── .gitignore
├── App.js
├── README.md
├── app.json
├── babel.config.js
├── eas.json
├── package-lock.json
├── package.json
└── theme.js
```

Pré-requisitos

*  Android Studio (para emuladores Android): [Download]([doc:linking-to-pages#anchor-links](https://developer.android.com/studio?gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5ORs6dFP3EE54iQJt0FGSZ5BO-BEnl_LCO1vfK1ImdB5LzAs0LH3jsaAn_3EALw_wcB&gclsrc=aw.ds))
ou
*  Aplicativo Android ExpoGO, disponivel na Google Play: [Download](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&pli=1)
*  SDK 50
*  Node v20
  
# Como Rodar a Aplicação no Emulador e ExpoGo

Instalar as dependências:
```
npm install
```

Adicionar arquivo .env 
```
EXPO_PUBLIC_API_URL=http://192.168.100.89:3001/api
GOOGLE_MAPS_API_KEY=KEY_MAPS_HERE
```

Inicie o servidor de desenvolvimento:
```
npm start
```
ou
```
expo start
```

# Estrutura do Código
```
assets/ - Arquivos de mídia, como imagens.
src/ - Código-fonte principal.
Img/ - Imagens usadas no aplicativo.
components/ - Componentes reutilizáveis.
config/ - Arquivos de configuração.
pages/ - Páginas e telas do aplicativo.
util/ - Utilitários e funções auxiliares.
App.js - Componente principal do aplicativo.
theme.js - Configuração de temas e estilos.
```
