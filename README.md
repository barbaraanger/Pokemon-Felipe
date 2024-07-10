# README - Exercício de Requisição a API de Pokémon com React
Este exercício tem como objetivo criar um componente React que permite ao usuário inserir o nome de um Pokémon em um campo de input e, em seguida, fazer uma requisição à API de Pokémon para obter e exibir apenas o nome do Pokémon especificado.

## Funcionalidades
- Input de Pesquisa: Um campo de input onde o usuário pode digitar o nome ou número do Pokémon.
- Botão de Busca: Um botão que, ao ser clicado, aciona a requisição à API.
- Exibição do Nome: Um elemento para exibir o nome do Pokémon obtido da API.
- Tratamento de Erros: Mensagem de erro caso o Pokémon não seja encontrado ou ocorra algum problema na requisição.

## Instruções
- Crie um novo projeto React: Utilize o Create React App ou sua ferramenta de preferência.
- Crie o componente de input:
- Utilize o hook useState para armazenar o valor do input.
- Renderize um elemento `<input>` e associe o valor do estado ao atributo value.
- Crie um manipulador de eventos onChange para atualizar o estado sempre que o valor do input mudar.
- Crie a função de busca:
- Utilize o hook useEffect para realizar a requisição à API quando o valor do input mudar ou o botão de busca for clicado.
- Utilize a biblioteca fetch ou axios para fazer a requisição à API de Pokémon (por exemplo, https://pokeapi.co/api/v2/pokemon/${nome}).
- Extraia o nome do Pokémon da resposta da API.
- Renderize o nome do Pokémon em um elemento apropriado (por exemplo, um elemento).
- Trate os erros de requisição e exiba uma mensagem de erro adequada.

## Observações:
Este exemplo simplificado foca apenas na busca e exibição do nome do Pokémon.
Você pode adicionar mais funcionalidades, como tratamento de caixa alta/baixa, sugestões de nomes, etc.
Explore a documentação da API de Pokémon para descobrir outras informações que você pode querer exibir.