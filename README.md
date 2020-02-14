# APP Todo Encodde

Repositório do projeto Encodde.
Um aplicativo para gerenciamento de tarefas.

O app foi desenvolvido utilizando a tecnologia [React-Native](https://facebook.github.io/react-native/).

Consumindo a API disponível em [API-Todo-Encodde](https://github.com/juakacc/api-todo-encodde.git).
Então é necessário que ela esteja em execução

## Requisitos

- Um dispositivo emulado na sua máquina, ou um dispositivo físico.
- Node.js e NPM instalados
- React-Native devidamente instalado
- Servidor com a API REST em execução

## Instalação

- Clonar o projeto (Ou baixar o [.zip](https://github.com/juakacc/app-todo-encodde/archive/master.zip) do projeto)
```
$ git clone https://github.com/juakacc/app-todo-encodde.git //caso tenha o git instalado
$ cd app-todo-encodde/
```
- Instalar as dependências do projeto
```
$ npm i
```

## Configurações 

- Alterar as seguintes linhas no arquivo ``./index.js``:

axios.defaults.baseURL = 'http://<Adicione_o_IP_do_servidor_aqui>:8888/'

- Alterar para ``false`` em modo de desenvolvimento:

console.disableYellowBox = true

### Utilizando o aplicativo

- Preparar o ambiente (Caso esteja utilizando um emulador de dispositivo)
```
$ emulator -avd <NOME_DO_EMULADOR>
```
- Iniciar o metro servidor e instalar(iniciar) o aplicativo
```
$ react-native start
$ react-native run-android
```

- Lembrando que para utilizar o app em um dispositivo físico o firewall do servidor deve está desabilitado para aceitar as requisições

### Gerando uma release APK

- Pode ser gerado um APK seguindo os passos descritos na (vasta)) [Documentação](https://facebook.github.io/react-native/docs/signed-apk-android) (:

### Considerações finais

- Qualquer dúvida enviar e-mail para: juakacc@gmail.com