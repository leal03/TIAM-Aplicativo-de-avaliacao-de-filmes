# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Persona: Cinéfilo Entusiasta

Nome: Camila
Idade: 28 anos
Descrição: Camila é uma cinéfila ávida. Ela adora filmes de todos os gêneros, desde clássicos do cinema até os lançamentos mais recentes. Ela está constantemente em busca de recomendações e adora compartilhar suas opiniões sobre filmes com amigos. Ana deseja um aplicativo que ofereça uma ampla variedade de títulos, uma comunidade ativa de cinéfilos para interagir.

Persona: Pai de Família

Nome: Marcos
Idade: 40 anos
Descrição: Marcos é um pai de família ocupado com dois filhos pequenos. Ele procura um aplicativo que o ajude a tomar decisões rápidas sobre o que assistir com a família nas noites de sexta-feira. Ele valoriza informações claras sobre a adequação etária e classificações familiares, além de uma lista de "favoritos" para planejar antecipadamente as sessões de cinema em família.

Persona: Adolescente Social

Nome: João
Idade: 16 anos
Descrição: João é um adolescente que adora séries de TV e quer estar sempre atualizado sobre os últimos lançamentos. Ele também gosta de interagir com seus amigos online. João procura um aplicativo que ofereça mídias de seus interesses, notificações sobre novos episódios de suas séries favoritas e a capacidade de compartilhar avaliações e descobertas com sua rede de amigos.

## Histórias de Usuários

- Eu como apaixonado por filmes e séries, quero dizer o quanto achei esse filme ruim e não recomendo para as pessoas

- Eu como apreciador de filmes e séries, gostaria de dizer o quanto eu adorei tal filme e recomendo para todas as pessoas

- Eu como entusiasta de mídias sociais, gostaria de ver opiniões de outras pessoas sobre aquilo que vou assistir

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastro de usuários/ CRUD | ALTA | 
|RF-002| Adicionar filme na lista de avaliados | ALTA |
|RF-003| Adicionar filme na lista de assistir futuramente | ALTA |
|RF-004| Pesquisar filme ou série | ALTA |
|RF-005| O usuario pode ocultar seu comentario se for um spoiler | ALTA |
|RF-006| Avaliar filme ou série | ALTA |
|RF-006| Logout da conta do usuário | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| As imagens devem ser bem otimizadas | ALTA | 
|RNF-002| O aplicativo deve estar disponível 24 horas por dia |  ALTA |
|RNF-003| O aplicativo deve ser escalável para lidar com o aumento de usuários |  ALTA |
|RNF-004| O aplicativo deve ter um tempo de resposta em até 4 segundo |  ALTA |
|RNF-005| Deve processar requisições do usuário em no máximo 3s |  ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


## Diagrama de Casos de Uso

![image](https://github.com/leal03/TIAM-Aplicativo-de-avaliacao-de-filmes/assets/102103337/0e2f2e8e-8a48-4379-a5e4-7477ac7c0a61)

1 - Cadastro de Usuários (CRUD)

O ator principal (Usuário registrado) pode se cadastrar, fornecendo informações como nome, e-mail e senha.
O ator principal pode fazer login usando suas credenciais registradas.

2 - Gerenciar Lista de Avaliados

O ator principal pode adicionar um filme ou série à sua lista de avaliados.
O ator principal pode remover um filme ou série da sua lista de avaliados.
O ator principal pode visualizar sua lista de avaliados.

3 - Gerenciar Lista de Assistir Futuramente

O ator principal pode adicionar um filme ou série à sua lista de assistir futuramente.
O ator principal pode remover um filme ou série da sua lista de assistir futuramente.
O ator principal pode visualizar sua lista de assistir futuramente.

4 - Pesquisar Filme ou Série

o ator principal pode pesquisar filmes ou séries por título, gênero, atores, diretor, etc.
Os resultados da pesquisa serão exibidos na tela.

5 - Avaliar Filme ou Série

O ator principal pode avaliar um filme ou série, dando uma classificação e escrevendo uma crítica.
O ator principal pode ocultar sua crítica se ela contiver spoilers.
O ator principal pode editar sua avaliação existente.

6 - Visualizar Avaliações e Comentários

O ator principal pode visualizar avaliações e comentários de outros usuários para um filme ou série específico.
Os comentários marcados como spoilers serão ocultados por padrão, mas o usuário pode optar por revelá-los.

7 - Logout

O ator principal pode fazer logout da sua conta.

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![image](https://github.com/leal03/TIAM-Aplicativo-de-avaliacao-de-filmes/assets/103788873/9c0a42ed-1dce-4712-b919-cf111519b710)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![image](https://github.com/leal03/TIAM-Aplicativo-de-avaliacao-de-filmes/assets/103788873/e6dc2136-5107-4098-9b5a-2207f77eb200)
