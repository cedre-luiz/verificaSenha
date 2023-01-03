Verificação de Senha

Iniciar o server no arquivo ./src/index.js
ou atravez do npm rum dev

Para o funcionamento da verificação de senha utilizei o localhost:8080

- A requisição é feita atravez do body no formato json, no verbo post da rota http://localhost:8080/verify

- Ao incluir no body o objeto senha: 'umaStringQualquer, este objeto será incluido no array passwords, que por sua vez irá rodar a função validadora.

    - No caso de sucesso, ou seja o password atende todos os parametros, será exibido um JSON como abaixo:
        {
          "senha": "UmaSenha@4568",
          "verify": "true  Atende todos os parametros"
        }

    - No caso de insucesso, não atende a algum parametro, será exibido um JSON com a lista de regras e verificações que devem ser seguidas, como no exemplo abaixo:
        {
          "senha": "Umaaa",
          "minChar": "false, --deve ter pelo menos 8 caracteres",
          "lowerCase": "true, --deve conter letras minúsculas",
          "uperCase": "true, --deve conter letras minusculas",
          "digit": "false, --deve conter pelo menos um numero 0-9",
          "specialChar": "false, --deve conter pelo menos um      caractere especial (!@#$%&*+=)",
          (**)"noSpaceAndRepet": "true, --Não pode conter espaços em branco, nem caracteres repetidos em sequencia(aa,22,@@)"
     }
(**) No caso especifico do parametro "noSpaceAndRepet", o valor true significa que há alguma irregularidade, como espaço em branco ou caracteres repetidos. Nos outros casos o valor false significa que a regra nao foi cumprida.




