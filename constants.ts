
import { Question } from './types';

export const QUIZ_DATABASE: Question[] = [
  // --- PILHAS E FILAS (15 Questões) ---
  {
    id: 'pf1',
    topic: 'Pilhas e Filas',
    question: 'O princípio fundamental e restritivo que rege o processamento de uma estrutura de dados do tipo Pilha (Stack) é conhecido por qual sigla?',
    options: [
      'FIFO (First In, First Out) – O primeiro a entrar é o primeiro a sair.',
      'LIFO (Last In, First Out) – O último a entrar é o primeiro a sair.',
      'LILO (Last In, Last Out) – O último a entrar é o último a sair.',
      'EOF (End Of File) – Fim do arquivo processado.',
      'P2P (Peer-to-Peer) – Conexão ponto a ponto de nós.'
    ],
    correctAnswer: 1,
    explanation: 'Pilhas seguem o modelo LIFO (Last In, First Out), onde o último elemento inserido é o primeiro a ser removido, como uma pilha de pratos. FIFO é o modelo das Filas.'
  },
  {
    id: 'pf2',
    topic: 'Pilhas e Filas',
    question: 'Em uma Fila (Queue) linear padrão, como e onde devem ocorrer estritamente as operações de inserção (enqueue) e remoção (dequeue)?',
    options: [
      'Ambas as operações ocorrem exclusivamente na mesma extremidade da estrutura.',
      'Inserções ocorrem no início (front) e remoções ocorrem no final (rear).',
      'Inserções ocorrem aleatoriamente e remoções ocorrem com base na prioridade do elemento.',
      'Inserções ocorrem no final (rear/tail) e remoções ocorrem no início (front/head).',
      'O usuário escolhe livremente em qual extremidade fará a inserção a cada iteração.'
    ],
    correctAnswer: 3,
    explanation: 'Filas seguem o modelo FIFO (First In, First Out). Novos elementos entram no fim (rear) e saem pelo início (front).'
  },
  {
    id: 'pf3',
    topic: 'Pilhas e Filas',
    question: 'Qual das seguintes situações do mundo real ou de engenharia de software é classicamente modelada usando uma estrutura de Pilha?',
    options: [
      'O gerenciamento de impressões enviadas para uma mesma impressora.',
      'O agendamento de pacotes de dados esperando para serem roteados na internet.',
      'O histórico de navegação de abas (função "Voltar" ou "Undo") em navegadores e editores de texto.',
      'O atendimento de tarefas no processador usando o algoritmo Round Robin.',
      'O sistema de senhas para clientes no caixa de uma agência bancária.'
    ],
    correctAnswer: 2,
    explanation: 'O "Undo" e o botão "Voltar" recuperam o estado mais recente (o último que entrou), caracterizando o comportamento LIFO de uma pilha.'
  },
  {
    id: 'pf4',
    topic: 'Pilhas e Filas',
    question: 'Na manipulação de um Tipo Abstrato de Dados (TAD) classificado como Fila ou Pilha pura, qual ação geralmente constitui uma quebra direta de encapsulamento e do conceito da estrutura?',
    options: [
      'Adicionar um novo elemento na extremidade correta (Push/Enqueue).',
      'Verificar se a estrutura de dados está atualmente vazia (isEmpty).',
      'Inspecionar o valor do elemento que está na vez sem removê-lo fisicamente (Peek/Front).',
      'Acessar, buscar ou modificar diretamente elementos intermediários que estão no meio da estrutura.',
      'Remover o elemento que está posicionado na extremidade de saída (Pop/Dequeue).'
    ],
    correctAnswer: 3,
    explanation: 'Pilhas e Filas puras só permitem acesso às extremidades (topo na pilha, início/fim na fila). Acesso ao meio viola a abstração e o encapsulamento dessas estruturas.'
  },
  {
    id: 'pf5',
    topic: 'Pilhas e Filas',
    question: 'O que define e qual é a principal vantagem operacional de uma Fila Circular (Circular Queue) em relação a uma fila sequencial baseada em um vetor estático simples?',
    options: [
      'Ela cresce infinitamente, resolvendo o limite de memória RAM física do processador.',
      'O ponteiro do último espaço (rear) se conecta de volta ao índice zero do vetor, reaproveitando inteligentemente os espaços vazios deixados por remoções anteriores.',
      'Ela permite navegação bidirecional contínua, dobrando a velocidade da varredura de dados.',
      'Converte automaticamente seus dados para uma matriz multidimensional circular otimizada.',
      'Evita vazamento de memória deletando o arquivo original de forma recursiva.'
    ],
    correctAnswer: 1,
    explanation: 'Filas circulares evitam o desperdício de memória ao "dar a volta" no vetor quando o final é atingido, permitindo usar espaços liberados no início.'
  },
  {
    id: 'pf6',
    topic: 'Pilhas e Filas',
    question: 'Se os elementos "A", "B", "C" e "D" forem inseridos exatamente nesta ordem em uma FILA vazia, e em seguida executarmos duas operações de remoção consecutivas, quais elementos restarão na estrutura (lidos do início para o fim)?',
    options: [
      'A e B',
      'C e D',
      'A e D',
      'B e C',
      'Apenas D'
    ],
    correctAnswer: 1,
    explanation: 'Em uma fila (FIFO), saem os primeiros a entrar: A sai primeiro, depois B. Sobram C e D na ordem de entrada.'
  },
  {
    id: 'pf7',
    topic: 'Pilhas e Filas',
    question: 'Se os mesmos elementos "A", "B", "C" e "D" forem empilhados exatamente nesta ordem em uma PILHA vazia (operações sucessivas de Push), e em seguida executarmos duas operações de remoção (Pop), quais elementos restarão na estrutura (lidos do topo para a base)?',
    options: [
      'B e A',
      'C e D',
      'A e C',
      'D e B',
      'Apenas A'
    ],
    correctAnswer: 0,
    explanation: 'Em uma pilha (LIFO), saem os últimos a entrar: D sai primeiro, depois C. Sobram B e A, sendo B o novo topo.'
  },
  {
    id: 'pf8',
    topic: 'Pilhas e Filas',
    question: 'Qual estrutura de dados o processador e o compilador utilizam de forma nativa e oculta para gerenciar chamadas de funções, variáveis locais e o endereçamento de retorno durante a execução recursiva de um programa?',
    options: [
      'Matriz Esparsa.',
      'Fila de Prioridade.',
      'Grafo Bipartido.',
      'Pilha de Execução (Call Stack).',
      'Árvore Binária Perfeita.'
    ],
    correctAnswer: 3,
    explanation: 'A Call Stack armazena o contexto de cada função chamada (frames), permitindo que o programa saiba para onde voltar após o término de uma função.'
  },
  {
    id: 'pf9',
    topic: 'Pilhas e Filas',
    question: 'O que ocorre no sistema quando se dispara um erro crítico conhecido conceitualmente como Underflow no contexto dessas estruturas?',
    options: [
      'O programa tenta inserir um elemento em uma Pilha ou Fila que já atingiu a sua capacidade máxima física alocada.',
      'O desenvolvedor tenta instanciar uma fila sem fornecer os parâmetros obrigatórios.',
      'Tenta-se realizar uma operação de remoção (Pop ou Dequeue) em uma Pilha ou Fila que já se encontra totalmente vazia.',
      'O vetor sobrepõe o endereço de memória de outra aplicação do sistema operacional.',
      'Um laço de repetição iterativo é executado além da condição de parada estabelecida.'
    ],
    correctAnswer: 2,
    explanation: 'Underflow é o erro de tentar retirar algo de onde não há nada. Overflow é o oposto (inserir em estrutura cheia).'
  },
  {
    id: 'pf10',
    topic: 'Pilhas e Filas',
    question: 'Qual é a complexidade de tempo teórica ideal (assintótica) esperada para as operações elementares de inserção e remoção no topo de uma Pilha (Push/Pop) ou nas pontas de uma Fila (Enqueue/Dequeue)?',
    options: [
      'O(log n)',
      'O(n^2)',
      'O(n)',
      'O(1)',
      'O(n log n)'
    ],
    correctAnswer: 3,
    explanation: 'Inserções e remoções nas extremidades de pilhas e filas são operações de tempo constante O(1), pois não dependem do número de elementos na estrutura.'
  },
  {
    id: 'pf11',
    topic: 'Pilhas e Filas',
    question: 'Na área de algoritmos e estrutura de dados, o que é um "Deque" (Double-Ended Queue)?',
    options: [
      'Uma fila onde os dados armazenados são restritamente do tipo primitivo double.',
      'Uma estrutura unificada que mescla regras de Pilha e Fila, permitindo tanto inserções quanto remoções livremente em ambas as extremidades (início e fim).',
      'Uma pilha que foi dividida geometricamente ao meio para permitir processamento multi-core.',
      'Um arquivo log sequencial acoplado a uma estrutura binária de pesquisa rápida.',
      'Uma fila exclusiva projetada para não permitir remoções até o processamento completo.'
    ],
    correctAnswer: 1,
    explanation: 'Deques são filas de duas pontas, oferecendo flexibilidade para operar como pilha ou fila conforme a necessidade.'
  },
  {
    id: 'pf12',
    topic: 'Pilhas e Filas',
    question: 'Em uma "Fila de Prioridade" (Priority Queue), a ordem estrita na qual os elementos são retirados da estrutura é determinada primariamente por:',
    options: [
      'Exclusivamente pela ordem cronológica de inserção no vetor.',
      'Exclusivamente pela última inserção cronológica, invertendo a fila.',
      'O tamanho em bytes do dado ocupado fisicamente na RAM do sistema.',
      'O tempo de ociosidade do processador no momento da alocação.',
      'Uma chave de valor, peso ou prioridade previamente atribuída a cada elemento, independentemente de ele ter chegado antes ou depois na estrutura.'
    ],
    correctAnswer: 4,
    explanation: 'Diferente da fila comum, a fila de prioridade atende primeiro quem tem maior "importância" (valor de prioridade), não necessariamente quem chegou primeiro.'
  },
  {
    id: 'pf13',
    topic: 'Pilhas e Filas',
    question: 'Considere uma Pilha sendo instanciada por meio de um vetor (Array estático). Toda vez que um novo elemento é inserido na pilha (Push), o que deve ocorrer com a variável ponteiro que rastreia o "Topo" (Top) da estrutura?',
    options: [
      'Ela deve ser anulada (null) momentaneamente para liberar a porta lógica e depois restaurada.',
      'Deve sofrer um incremento numérico para referenciar o próximo índice disponível onde o valor foi alocado.',
      'Ela deve ser sempre redefinida para a posição 0, que passa a conter o novo topo.',
      'Permanece inalterada, pois os vetores se redimensionam automaticamente na base.',
      'Ela é decrementada para acomodar o elemento anterior nas posições negativas do array.'
    ],
    correctAnswer: 1,
    explanation: 'O ponteiro de topo deve avançar (incrementar) para a nova posição ocupada. Se começar em -1, o primeiro push o leva para o índice 0.'
  },
  {
    id: 'pf14',
    topic: 'Pilhas e Filas',
    question: 'Na ciência da computação, a avaliação e conversão de expressões matemáticas muitas vezes dependem de estruturas de dados. Qual notação algébrica clássica – que coloca os operadores estritamente após seus operandos (ex: 3 4 +) – dispensa uso de parênteses e é processada linearmente com altíssima eficiência usando uma Pilha?',
    options: [
      'Notação Infixa Direta.',
      'Notação Assexuada.',
      'Notação Científica Flutuante.',
      'Notação Polonesa Reversa (Notação Postfixa).',
      'Notação Hexadecimal Condensada.'
    ],
    correctAnswer: 3,
    explanation: 'A RPN (Reverse Polish Notation) é ideal para pilhas: empilha operandos e, ao encontrar um operador, desempilha os dois últimos para calcular e empilhar o resultado.'
  },
  {
    id: 'pf15',
    topic: 'Pilhas e Filas',
    question: 'Ao estudar métodos de caminhamento e busca sobre Árvores e Grafos, qual estrutura de dados listada abaixo atua como o motor lógico clássico para o enfileiramento dos nós adjacentes no algoritmo de "Busca em Largura" (BFS - Breadth-First Search)?',
    options: [
      'Pilha (Stack).',
      'Fila (Queue).',
      'Árvore AVL.',
      'Matriz de Adjacência Booleana.',
      'Vetor de Hash Desordenado.'
    ],
    correctAnswer: 1,
    explanation: 'A BFS usa uma fila para garantir que todos os nós de um nível sejam visitados antes de passar para o próximo nível (exploração em camadas).'
  },

  // --- RECURSIVIDADE (15 Questões) ---
  {
    id: 'rec1',
    topic: 'Recursividade',
    question: 'O que caracteriza o conceito de recursividade na programação?',
    options: [
      'Uma estrutura de repetição restrita ao uso de laços while ou for.',
      'Uma técnica em que uma função soluciona um problema chamando a si mesma.',
      'Um método de ordenação de dados linear em banco de dados.',
      'Um processo de compilação em que o código é traduzido em duas etapas.',
      'Uma forma de armazenar informações temporárias no disco rígido.'
    ],
    correctAnswer: 1,
    explanation: 'Recursividade é a técnica onde uma função chama a si mesma para resolver subproblemas menores do mesmo tipo.'
  },
  {
    id: 'rec2',
    topic: 'Recursividade',
    question: 'Quais são os 3 pilares fundamentais para o funcionamento de uma máquina recursiva?',
    options: [
      'Orientação a Objetos, Herança e Polimorfismo.',
      'Programação Dinâmica, Laços Infinitos e Variáveis Locais.',
      'Divisão do Problema, Caso Base e Pilha de Execução.',
      'Pilhas, Filas e Matrizes.',
      'Compilação, Interpretação e Execução.'
    ],
    correctAnswer: 2,
    explanation: 'Uma função recursiva precisa dividir o problema, ter um caso base para parar e utiliza a pilha de execução (Call Stack) para gerenciar as chamadas.'
  },
  {
    id: 'rec3',
    topic: 'Recursividade',
    question: 'Qual é o papel crucial do "Caso Base" em um algoritmo recursivo?',
    options: [
      'Aumentar o nível de complexidade do problema a cada iteração.',
      'Otimizar o consumo geral de memória RAM do sistema.',
      'Substituir a necessidade de declarar parâmetros na função.',
      'Servir como condição de parada de emergência para evitar um ciclo infinito.',
      'Realizar a chamada inicial que dispara a recursividade.'
    ],
    correctAnswer: 3,
    explanation: 'O Caso Base é a condição que interrompe as chamadas recursivas. Sem ele, a função entraria em loop infinito até estourar a pilha.'
  },
  {
    id: 'rec4',
    topic: 'Recursividade',
    question: 'O que ocorre sistemicamente se uma função recursiva não atingir seu Caso Base?',
    options: [
      'A função será automaticamente convertida em um laço iterativo pelo compilador.',
      'O programa rodará mais rapidamente por pular validações condicionais.',
      'A função causará um erro de sintaxe.',
      'A memória Heap será reiniciada para dar mais espaço à função.',
      'Ocorrerá o transbordamento da Pilha de Execução, gerando um erro de "Stack Overflow".'
    ],
    correctAnswer: 4,
    explanation: 'Cada chamada recursiva consome um frame na Call Stack. Sem o caso base, a pilha cresce até exceder o limite de memória reservado.'
  },
  {
    id: 'rec5',
    topic: 'Recursividade',
    question: 'A Pilha de Execução (Call Stack) organiza as chamadas de funções baseada em qual princípio?',
    options: [
      'FIFO (First In, First Out) – O primeiro a entrar é o primeiro a sair.',
      'LIFO (Last In, First Out) – O último a entrar é o primeiro a sair.',
      'Ordenação alfabética pelo nome das funções chamadas.',
      'Organização randômica (aleatória) dependendo do processador.',
      'Prioridade baseada no tamanho das variáveis contidas na função.'
    ],
    correctAnswer: 1,
    explanation: 'A Call Stack funciona como uma pilha (LIFO): a última função chamada é a primeira a ser resolvida e removida.'
  },
  {
    id: 'rec6',
    topic: 'Recursividade',
    question: 'Como a memória do computador lida com as variáveis locais durante sucessivas chamadas recursivas de uma mesma função?',
    options: [
      'Cria-se uma cópia isolada (um ambiente independente) contendo variáveis locais e parâmetros para cada chamada.',
      'Todas as chamadas compartilham a exata mesma posição de memória para as variáveis.',
      'A memória transforma as variáveis locais em variáveis globais.',
      'A memória apaga os dados da chamada anterior para poupar espaço.',
      'O disco rígido é acionado como memória virtual (swap) em todas as chamadas.'
    ],
    correctAnswer: 0,
    explanation: 'Cada chamada recursiva ganha seu próprio espaço (frame) na pilha, com cópias independentes de suas variáveis locais.'
  },
  {
    id: 'rec7',
    topic: 'Recursividade',
    question: 'No passo de retorno (quando a função atinge o caso base e começa a "desenrolar" a pilha), como as chamadas são resolvidas?',
    options: [
      'Da base da pilha para o topo.',
      'Simultaneamente (em paralelo) em todos os núcleos da CPU.',
      'Do topo da pilha para a base, destruindo o ambiente após a resolução.',
      'Em ordem reversa aos parâmetros passados inicialmente.',
      'Deixando as respostas na memória permanentemente.'
    ],
    correctAnswer: 2,
    explanation: 'O retorno ocorre na ordem inversa das chamadas (do topo para a base), liberando o espaço de memória de cada frame resolvido.'
  },
  {
    id: 'rec8',
    topic: 'Recursividade',
    question: 'Qual é considerada a "Grande Força" (maior vantagem) do uso da recursividade?',
    options: [
      'Consumo nulo de memória.',
      'Processamento nativamente mais eficiente do que os laços tradicionais.',
      'Elegância e simplicidade conceitual, que facilitam a resolução de problemas de difícil visualização.',
      'Imunidade a erros de arquitetura de software e bugs de hardware.',
      'Dispensa o uso de condicionais em qualquer situação.'
    ],
    correctAnswer: 2,
    explanation: 'Recursividade permite expressar soluções complexas (como árvores ou fractais) de forma muito mais limpa e intuitiva que a iteração.'
  },
  {
    id: 'rec9',
    topic: 'Recursividade',
    question: 'Em contrapartida, qual é o "Custo Oculto" associado às funções recursivas?',
    options: [
      'Elevado tempo do desenvolvedor para escrever o código.',
      'Excesso de arquivos temporários criados na pasta do sistema.',
      'Incompatibilidade com sistemas operacionais modernos.',
      'Overhead de processamento extra para guardar argumentos e endereços de retorno na memória a cada chamada.',
      'Necessidade de usar compiladores específicos para código recursivo.'
    ],
    correctAnswer: 3,
    explanation: 'Cada chamada recursiva exige tempo e memória para gerenciar o contexto na pilha, o que pode tornar a recursão mais lenta que um loop simples.'
  },
  {
    id: 'rec10',
    topic: 'Recursividade',
    question: 'Por que o limite de profundidade de recursão é uma falha tão comum no Python ("RecursionError") quando comparado a linguagens como C ou Swift?',
    options: [
      'Porque o Python não foi construído para suportar laços e repetições.',
      'Porque, diferente de outras linguagens, o Python não implementa a Tail Call Optimization (Otimização de Chamada de Cauda) nativamente.',
      'O Python possui limites severos de uso de memória física (RAM).',
      'Python só aceita recursividade em aplicações web.',
      'Por design, o Python deleta o Caso Base de códigos recursivos durante a interpretação.'
    ],
    correctAnswer: 1,
    explanation: 'Sem TCO, o Python cria um novo frame na pilha para cada chamada, mesmo que seja uma recursão de cauda, atingindo o limite rapidamente.'
  },
  {
    id: 'rec11',
    topic: 'Recursividade',
    question: 'De acordo com o "Teorema da Conversão", o que se afirma sobre a substituição da recursividade?',
    options: [
      'Somente algoritmos matemáticos podem ser convertidos em código recursivo.',
      'Não é possível simular a recursividade em linguagens sem suporte nativo a ela.',
      'A conversão para iterativo sempre exige uso de Programação Dinâmica.',
      'Qualquer algoritmo que utilize recursão pode ser sistematicamente convertido em uma abordagem iterativa (não recursiva).',
      'A conversão de recursivo para iterativo sempre diminui o número de linhas de código.'
    ],
    correctAnswer: 3,
    explanation: 'Recursão e iteração são computacionalmente equivalentes; qualquer algoritmo recursivo pode ser reescrito usando loops e vice-versa.'
  },
  {
    id: 'rec12',
    topic: 'Recursividade',
    question: 'Para algoritmos recursivos que seguem uma única ramificação contínua (como o cálculo de um Fatorial), qual é a alternativa de conversão mais eficiente?',
    options: [
      'Filas circulares.',
      'Pilhas explícitas (Stack instanciada manualmente).',
      'Tabelas Hash e Árvores AVL.',
      'Programação Dinâmica.',
      'Laços simples (while ou for).'
    ],
    correctAnswer: 4,
    explanation: 'Recursões lineares simples são transformadas em loops simples de forma muito eficiente, eliminando o overhead da pilha de chamadas.'
  },
  {
    id: 'rec13',
    topic: 'Recursividade',
    question: 'Para desconstruir um algoritmo com ramificações complexas (ex: Busca em Profundidade em uma Árvore), o que é necessário adicionar ao laço iterativo?',
    options: [
      'Uma variável do tipo "string".',
      'Um simulador de Sistema Operacional.',
      'Uma estrutura de Pilha Explícita criada no código para gerenciar manualmente as chamadas.',
      'O dobro de memória RAM nativa dedicada.',
      'Parâmetros vazios na chamada principal.'
    ],
    correctAnswer: 2,
    explanation: 'Para simular recursões complexas sem usar a Call Stack do sistema, o programador deve criar sua própria pilha manual (explícita) no código.'
  },
  {
    id: 'rec14',
    topic: 'Recursividade',
    question: 'Quando o algoritmo recursivo sofre por calcular "sub-problemas repetidos" (sobreposição), qual é a técnica de otimização recomendada?',
    options: [
      'Encerrar o laço prematuramente usando "break".',
      'Utilizar Programação Dinâmica, armazenando sub-soluções em um array ou tabela para buscas diretas.',
      'Aumentar o limite de recursão do sistema nas configurações globais.',
      'Instanciar pilhas múltiplas simultaneamente.',
      'Evitar recursão a todo custo e calcular manualmente.'
    ],
    correctAnswer: 1,
    explanation: 'A técnica de Memoization (parte da Programação Dinâmica) evita o re-cálculo de valores já conhecidos, melhorando drasticamente a performance.'
  },
  {
    id: 'rec15',
    topic: 'Recursividade',
    question: 'Ao converter uma recursividade em iteração com Pilha Explícita, qual é a principal vantagem em termos de hardware/memória?',
    options: [
      'A redução do tamanho do arquivo final compilado do código.',
      'Transferir a pressão de espaço da restrita Call Stack para a memória Heap, que é vasta e mais flexível.',
      'Manter o código isolado das ameaças de segurança da placa mãe.',
      'Alterar automaticamente a complexidade do processamento para tempo constante O(1).',
      'Dispensar completamente a necessidade do processador para resolver a lógica.'
    ],
    correctAnswer: 1,
    explanation: 'A Call Stack do sistema tem limite rígido e pequeno. Usar a memória Heap através de uma pilha manual permite processar volumes muito maiores de dados.'
  },

  // --- LISTAS (15 Questões) ---
  {
    id: 'li1',
    topic: 'Listas',
    question: 'O que caracteriza uma estrutura de dados do tipo Lista Linear?',
    options: [
      'Os elementos são organizados de forma hierárquica, assemelhando-se a raízes e folhas.',
      'Os dados são armazenados de forma não sequencial, acessados apenas por chaves de hash.',
      'É uma coleção de elementos onde cada elemento (exceto o primeiro e o último) possui um único predecessor e um único sucessor na lógica da estrutura.',
      'É uma estrutura estritamente bidimensional, semelhante a uma matriz matemática.',
      'Uma estrutura onde os elementos operam exclusivamente no formato de processamento LIFO (Last In, First Out).'
    ],
    correctAnswer: 2,
    explanation: 'Listas lineares organizam dados em uma sequência lógica onde cada item aponta para o próximo (e possivelmente o anterior).'
  },
  {
    id: 'li2',
    topic: 'Listas',
    question: 'Qual é a principal diferença na organização da memória entre uma Lista Sequencial (Array) e uma Lista Encadeada Dinâmica?',
    options: [
      'A Lista Sequencial aloca blocos de memória contíguos (lado a lado), enquanto a Encadeada aloca nós em posições arbitrárias (dispersas) ligados por ponteiros.',
      'A Lista Encadeada só pode armazenar dados primitivos, enquanto a Sequencial armazena instâncias de objetos complexos.',
      'A Lista Sequencial armazena os ponteiros de forma dinâmica, enquanto a Encadeada mantém um tamanho fixo de memória definido na compilação.',
      'Ambas utilizam memória contígua, mas a Lista Encadeada comprime os dados internamente para economizar espaço físico.',
      'A Lista Encadeada é armazenada exclusivamente na memória cache do processador, enquanto a Sequencial utiliza a memória RAM padrão.'
    ],
    correctAnswer: 0,
    explanation: 'Arrays exigem um bloco único e contínuo de memória. Listas encadeadas podem usar espaços vazios espalhados pela RAM através de ponteiros.'
  },
  {
    id: 'li3',
    topic: 'Listas',
    question: 'Em uma Lista Sequencial (Array), qual é a complexidade de tempo assintótica para acessar um elemento diretamente, sabendo o seu índice numérico?',
    options: [
      'O(n)',
      'O(log n)',
      'O(n log n)',
      'O(1)',
      'O(n^2)'
    ],
    correctAnswer: 3,
    explanation: 'O acesso por índice em arrays é imediato (tempo constante O(1)) através de um cálculo matemático simples de endereço.'
  },
  {
    id: 'li4',
    topic: 'Listas',
    question: 'Qual é a principal desvantagem de realizar inserções ou remoções de elementos no início ou no meio de uma Lista Sequencial (Array)?',
    options: [
      'Requer o uso de chamadas recursivas, o que pode esgotar a pilha de execução e causar "Stack Overflow".',
      'Exige o deslocamento (shift) sistemático de todos os elementos subsequentes, resultando em um custo computacional linear de O(n).',
      'O sistema operacional precisa reiniciar o gerenciador de memória virtual sempre que a capacidade é alterada.',
      'Causa a corrupção imediata do ponteiro principal da memória, isolando os dados de forma irrecuperável.',
      'Transforma automaticamente o array em uma árvore binária, consumindo significativamente mais memória.'
    ],
    correctAnswer: 1,
    explanation: 'Para abrir espaço ou fechar um buraco em um array, é preciso mover todos os itens seguintes, o que é ineficiente para listas grandes.'
  },
  {
    id: 'li5',
    topic: 'Listas',
    question: 'Em uma estrutura de Lista Simplesmente Encadeada, do que é constituído fundamentalmente um "Nó" (Node)?',
    options: [
      'Apenas pelo valor do dado útil (payload) que o programa precisa armazenar.',
      'Exclusivamente por índices numéricos sequenciais e um identificador do tipo de dado.',
      'Por dois vetores paralelos: um contendo os dados e outro contendo as senhas de acesso.',
      'Pela carga útil (dado) acoplada a um ponteiro (ou referência) que indica o endereço de memória exato do próximo nó na sequência.',
      'Por múltiplos ponteiros que indicam o início, o meio e o fim físico da estrutura na memória RAM.'
    ],
    correctAnswer: 3,
    explanation: 'Um nó básico de lista encadeada contém o valor (dado) e o endereço (ponteiro) do próximo elemento da corrente.'
  },
  {
    id: 'li6',
    topic: 'Listas',
    question: 'O que difere arquiteturalmente uma Lista Duplamente Encadeada de uma Lista Simplesmente Encadeada?',
    options: [
      'A Lista Duplamente Encadeada armazena os dados em pares de chave-valor.',
      'Cada nó da estrutura contém, além do dado e do ponteiro para o próximo nó, um ponteiro extra apontando de volta para o nó anterior.',
      'Ela possui dois ponteiros "Head" (Cabeça) que partem de extremidades diferentes do disco rígido.',
      'Ela obriga que as instâncias dos nós sejam agrupadas em blocos paralelos de tamanho idêntico.',
      'Cada nó comporta exatamente duas variáveis do mesmo tipo ao invés de apenas uma.'
    ],
    correctAnswer: 1,
    explanation: 'A lista duplamente encadeada permite navegar em ambas as direções (próximo e anterior) graças ao ponteiro extra em cada nó.'
  },
  {
    id: 'li7',
    topic: 'Listas',
    question: 'Se você precisar encontrar um elemento específico cujo valor não se sabe a posição em uma Lista Simplesmente Encadeada não ordenada, qual será a complexidade de tempo no pior caso?',
    options: [
      'O(1)',
      'O(log n)',
      'O(n)',
      'O(n log n)',
      'O(n^2)'
    ],
    correctAnswer: 2,
    explanation: 'Sem saber a posição ou ter um índice, é preciso percorrer a lista desde o início até o fim, resultando em complexidade linear O(n).'
  },
  {
    id: 'li8',
    topic: 'Listas',
    question: 'Qual é a característica definidora de uma Lista Circular?',
    options: [
      'Os dados são dispostos na memória física obrigatoriamente em blocos contíguos fechados em anel.',
      'Uma estrutura que automaticamente realoca seus elementos após n inserções para manter o tempo de busca constante.',
      'O ponteiro do último nó da lista, em vez de apontar para um valor nulo, aponta de volta para o primeiro nó (Head).',
      'É uma variação de lista projetada para ser processada apenas por meio de iterações recursivas infinitas.',
      'O nó central da lista serve como um distribuidor apontando para as extremidades de forma radial.'
    ],
    correctAnswer: 2,
    explanation: 'Listas circulares não têm um fim nulo; o último elemento sempre aponta de volta para o início, criando um ciclo.'
  },
  {
    id: 'li9',
    topic: 'Listas',
    question: 'Qual é uma vantagem operacional expressiva da Lista Duplamente Encadeada em relação à Simplesmente Encadeada?',
    options: [
      'Ela reduz pela metade o consumo da memória Heap, comprimindo os espaços vazios entre os nós.',
      'Possibilita o acesso matemático e imediato O(1) a qualquer elemento sem percorrer a lista.',
      'Isenta a linguagem de programação de utilizar o "Garbage Collector", liberando nós ociosos de forma nativa.',
      'Permite a navegação bidirecional fluida, tornando fácil percorrer a lista tanto de frente para trás quanto de trás para frente.',
      'Suporta a execução de laços de repetição infinitos sem consumir poder de processamento.'
    ],
    correctAnswer: 3,
    explanation: 'A capacidade de voltar ao nó anterior facilita muito operações como remoção de um nó conhecido e navegação reversa.'
  },
  {
    id: 'li10',
    topic: 'Listas',
    question: 'Ao realizar a remoção do primeiro nó de uma Lista Simplesmente Encadeada, qual a principal operação sistêmica necessária em relação aos ponteiros?',
    options: [
      'O ponteiro principal "Head" (Cabeça) da lista deve ser sobrescrito para apontar diretamente para o segundo nó.',
      'O ponteiro do último nó da lista deve ser redirecionado para o endereço de memória zero (null).',
      'O endereço de todos os nós restantes deve ser copiado e realocado fisicamente em um novo bloco pelo processador.',
      'O nó que está sendo removido deve obrigatoriamente ter seu ponteiro desviado para o fim da lista.',
      'O ponteiro "Head" precisa ser completamente excluído da memória do sistema para prevenir vazamentos de dados (leaks).'
    ],
    correctAnswer: 0,
    explanation: 'Para remover o primeiro item, basta fazer o ponteiro de início (Head) apontar para o sucessor do item removido.'
  },
  {
    id: 'li11',
    topic: 'Listas',
    question: 'Caso uma Lista Encadeada mantenha, além do ponteiro "Head" no início, um ponteiro auxiliar "Tail" (Cauda) fixado no último elemento, qual passa a ser a complexidade para inserir um novo dado no final da lista?',
    options: [
      'O(n)',
      'O(n/2)',
      'O(1)',
      'O(log n)',
      'O(n^2)'
    ],
    correctAnswer: 2,
    explanation: 'Com o ponteiro Tail, a inserção no fim torna-se instantânea O(1), pois não é necessário percorrer toda a lista para achar o último nó.'
  },
  {
    id: 'li12',
    topic: 'Listas',
    question: 'Em qual dos cenários descritos abaixo a utilização de uma Lista Encadeada é geralmente preferível ao uso de uma Lista Sequencial (Array)?',
    options: [
      'Quando o tamanho do banco de dados já é conhecido de forma exata antes mesmo da compilação do código.',
      'Quando o software exige buscas instantâneas e manipulação intensiva baseada em acesso direto através de índices numéricos aleatórios.',
      'Quando os recursos de memória RAM do sistema são severamente limitados e dados extras, como referências e ponteiros, devem ser evitados.',
      'Quando a aplicação lida com uma quantidade altamente variável e imprevisível de dados, exigindo constantes inserções e remoções dinâmicas sem limitação predefinida de tamanho.',
      'Quando os elementos serão unicamente lidos sequencialmente, sem que haja nenhuma modificação, exclusão ou adição ao longo da execução.'
    ],
    correctAnswer: 3,
    explanation: 'Listas encadeadas são ideais para coleções dinâmicas que crescem e diminuem muito, onde realocações de arrays seriam custosas.'
  },
  {
    id: 'li13',
    topic: 'Listas',
    question: 'Na abstração de uma Lista Simplesmente Encadeada, qual condição determina de forma inequívoca que a lista está atualmente vazia?',
    options: [
      'O ponteiro que representa o último nó possui um endereçamento apontando para a sua própria referência de memória.',
      'A variável que guarda a carga útil do primeiro nó exibe um valor do tipo "undefined" ou numérico zero.',
      'O ponteiro "Head" (Cabeça ou Início) carrega o valor nulo (null/None) em vez de um endereço de memória válido.',
      'O compilador acusa ausência de ponteiros ativos ao varrer a memória Cache do sistema operacional.',
      'A operação lógica que tenta conectar o ponteiro "Tail" ao ponteiro "Head" retorna um valor verdadeiro.'
    ],
    correctAnswer: 2,
    explanation: 'Se o ponteiro de início (Head) não aponta para nenhum endereço válido (null), significa que não há nós na lista.'
  },
  {
    id: 'li14',
    topic: 'Listas',
    question: 'Na implementação de uma Lista Encadeada manual em linguagens como C ou C++, o que ocorre gravemente se o programador inserir um nó no meio da lista, mas quebrar a ligação sem conectar o novo nó ao encadeamento subsequente?',
    options: [
      'O compilador corrige automaticamente o endereçamento rompido utilizando a referência dos blocos vizinhos.',
      'O novo nó empurra a estrutura inteira para trás, tornando-se acidentalmente a nova raiz ou "Head" da estrutura.',
      'Ocorre o truncamento da estrutura: a referência para o restante original da lista é perdida, caracterizando um "Memory Leak" (vazamento de memória irremediável dos nós soltos).',
      'A Lista Encadeada dinâmica se "solidifica" e se converte nativamente em um vetor de dados estáticos para prevenir falhas.',
      'O novo nó inserido é descartado de forma imediata e silenciosa pela arquitetura LIFO do processador.'
    ],
    correctAnswer: 2,
    explanation: 'Se perdemos o ponteiro para o resto da lista, esses dados continuam ocupando memória mas tornam-se inacessíveis, causando vazamento de memória.'
  },
  {
    id: 'li15',
    topic: 'Listas',
    question: 'Ao contrastar estruturas baseadas em memória estática e dinâmica na Computação, qual a afirmação conceitualmente correta a respeito de Listas?',
    options: [
      'Listas sequenciais dinâmicas evitam realocações de memória, visto que são desenhadas para comprimir seus dados no menor espaço de bits possível quando se aproximam do limite.',
      'O tamanho total de um Array (Lista Sequencial Estática) é cravado estritamente durante o tempo de compilação, ao passo que Listas Encadeadas nascem vazias e solicitam memória à máquina dinamicamente a cada nó criado (em tempo de execução).',
      'As Listas Encadeadas garantem um benefício vital de localidade de referência para o processador, alocando todos os nós em proximidade física rigorosa no pente de memória RAM.',
      'Independentemente da escolha da linguagem, listas estruturadas dinamicamente são sempre processadas na área Stack da memória, nunca tocando a região Heap do programa.',
      'Listas estáticas possuem imunidade inata ao problema de transbordamento de tamanho máximo em sistemas de baixa capacidade, diferentemente das listas estruturadas via nós e ponteiros dinâmicos.'
    ],
    correctAnswer: 1,
    explanation: 'Arrays estáticos têm tamanho fixo definido no código. Listas encadeadas usam alocação dinâmica (Heap) para crescer conforme necessário.'
  },

  // --- VETORES E MATRIZES (15 Questões) ---
  {
    id: 'vm1',
    topic: 'Vetores e Matrizes',
    question: 'O que caracteriza fundamentalmente uma estrutura de dados do tipo Vetor (Array unidimensional)?',
    options: [
      'Alocação não contígua de dados na memória RAM.',
      'Armazenamento padrão de elementos de tipos heterogêneos na maioria das linguagens compiladas.',
      'Estrutura linear que armazena elementos do mesmo tipo (homogênea) em posições contíguas de memória.',
      'Uma estrutura cujo acesso aos dados ocorre obrigatoriamente no padrão FILO (First In, Last Out).',
      'Uma coleção de nós espalhados na memória, conectados exclusivamente por ponteiros.'
    ],
    correctAnswer: 2,
    explanation: 'Vetores são blocos sequenciais de memória onde todos os itens têm o mesmo tipo e tamanho, permitindo acesso rápido.'
  },
  {
    id: 'vm2',
    topic: 'Vetores e Matrizes',
    question: 'Como o processador realiza o acesso direto a um elemento em um vetor em tempo constante O(1)?',
    options: [
      'Percorrendo sequencialmente todos os elementos do vetor até encontrar o índice correspondente.',
      'Através de cálculo aritmético simples, somando o endereço base da memória ao produto do índice pelo tamanho em bytes do tipo de dado.',
      'Utilizando uma função de espalhamento (hash) para descobrir a chave do elemento na memória cache.',
      'Consultando uma tabela de alocação secundária (Look-up Table) que guarda o endereço de cada posição do vetor.',
      'Dividindo o vetor pela metade repetidamente (busca binária) até achar a posição de memória desejada.'
    ],
    correctAnswer: 1,
    explanation: 'O endereço de qualquer item é calculado instantaneamente como: EndereçoBase + (Índice * TamanhoDoTipo).'
  },
  {
    id: 'vm3',
    topic: 'Vetores e Matrizes',
    question: 'O que define uma Matriz bidimensional no contexto de estruturas de dados?',
    options: [
      'Um vetor unidimensional circular, onde o último elemento aponta para o primeiro.',
      'Um arranjo de dados que pode ser compreendido logicamente como um "vetor de vetores", possuindo linhas e colunas.',
      'Um modelo de dados restrito apenas ao armazenamento de números inteiros para cálculos algébricos complexos.',
      'Uma árvore de busca binária balanceada otimizada para cálculos tridimensionais.',
      'Um bloco de memória onde cada célula aponta dinamicamente para três vizinhos distintos.'
    ],
    correctAnswer: 1,
    explanation: 'Matrizes estendem o conceito de vetor para duas dimensões, organizando dados em uma grade de linhas e colunas.'
  },
  {
    id: 'vm4',
    topic: 'Vetores e Matrizes',
    question: 'Qual é o erro clássico associado à tentativa de acessar ou gravar em um índice além do tamanho alocado para um vetor estático?',
    options: [
      'Null Pointer Exception (Exceção de Ponteiro Nulo).',
      'Stack Overflow (Estouro de Pilha).',
      'Memory Leak (Vazamento de Memória).',
      'Out of Bounds (Acesso Fora dos Limites / Segmentation Fault).',
      'Type Mismatch (Incompatibilidade de Tipos).'
    ],
    correctAnswer: 3,
    explanation: 'Tentar acessar um índice inexistente (ex: índice 10 em vetor de tamanho 10) causa violação de acesso à memória.'
  },
  {
    id: 'vm5',
    topic: 'Vetores e Matrizes',
    question: 'Qual é o impacto da "localidade de referência" (cache locality) no uso computacional de vetores e matrizes?',
    options: [
      'Retarda o processamento geral da CPU devido à sobrecarga na tabela de páginas do sistema operacional.',
      'Garante um desempenho superior em iterações, pois elementos contíguos são carregados juntos na memória cache L1/L2 do processador.',
      'Torna a estrutura mais segura contra ataques de injeção de código, isolando cada elemento fisicamente.',
      'Obriga o desenvolvedor a limpar a memória manualmente após cada laço de repetição.',
      'Reduz a vida útil do disco SSD, já que realiza múltiplas leituras em setores fragmentados.'
    ],
    correctAnswer: 1,
    explanation: 'Como vetores são contíguos, o processador carrega blocos inteiros para o cache, acelerando muito a leitura sequencial.'
  },
  {
    id: 'vm6',
    topic: 'Vetores e Matrizes',
    question: 'Em linguagens que adotam o mapeamento Row-Major Order (ordem por linha) como C e C++, como uma matriz bidimensional é disposta fisicamente na memória RAM?',
    options: [
      'Os elementos de uma mesma coluna são armazenados um ao lado do outro consecutivamente.',
      'As diagonais da matriz são priorizadas e gravadas sequencialmente, seguidas pelas bordas.',
      'Os elementos de uma mesma linha são armazenados de forma contígua, seguidos imediatamente pelos elementos da próxima linha.',
      'Cada quadrante da matriz é gravado em uma página diferente de memória virtual.',
      'A matriz não tem forma fixa, sendo espalhada aleatoriamente de acordo com o coletor de lixo (Garbage Collector).'
    ],
    correctAnswer: 2,
    explanation: 'Na memória RAM (que é linear), a matriz é "esticada" linha por linha. A primeira linha completa, depois a segunda, e assim por diante.'
  },
  {
    id: 'vm7',
    topic: 'Vetores e Matrizes',
    question: 'Para percorrer sistematicamente todos os elementos de uma matriz de dimensões M x N, qual é a estrutura de controle de fluxo mais adequada e comumente utilizada?',
    options: [
      'Um único bloco de recursão sem caso base.',
      'Estruturas condicionais (switch-case) encadeadas.',
      'Laços de repetição aninhados (geralmente dois laços for ou while).',
      'Uma fila de prioridade combinada com um laço do-while.',
      'Múltiplas instruções goto saltando entre os endereços de memória.'
    ],
    correctAnswer: 2,
    explanation: 'Usa-se um laço externo para as linhas e um laço interno para percorrer as colunas de cada linha.'
  },
  {
    id: 'vm8',
    topic: 'Vetores e Matrizes',
    question: 'Se você possui um vetor sequencial lotado de elementos, qual é a complexidade de tempo assintótica para inserir um novo elemento exatamente na PRIMEIRA posição (índice 0)?',
    options: [
      'O(1)',
      'O(log n)',
      'O(n log n)',
      'O(n^2)',
      'O(n)'
    ],
    correctAnswer: 4,
    explanation: 'Para inserir no início de um vetor, todos os N elementos existentes precisam ser movidos uma posição para a direita, resultando em tempo linear O(n).'
  },
  {
    id: 'vm9',
    topic: 'Vetores e Matrizes',
    question: 'Em uma linguagem cuja indexação de arranjos começa em zero (zero-based), caso uma matriz possua 4 linhas e 5 colunas, quais são as coordenadas precisas do seu último elemento?',
    options: [
      'Linha 4, Coluna 5.',
      'Linha 3, Coluna 4.',
      'Linha 5, Coluna 6.',
      'Linha 0, Coluna 4.',
      'Linha 4, Coluna 0.'
    ],
    correctAnswer: 1,
    explanation: 'Com 4 linhas, os índices são 0, 1, 2, 3. Com 5 colunas, são 0, 1, 2, 3, 4. O último é (3, 4).'
  },
  {
    id: 'vm10',
    topic: 'Vetores e Matrizes',
    question: 'Na concepção estrutural clássica e mais rigorosa da Computação, vetores e matrizes são classificados nativamente como:',
    options: [
      'Estruturas de dados dinâmicas, lineares e heterogêneas.',
      'Estruturas de dados estáticas, lineares e homogêneas.',
      'Estruturas de dados dinâmicas, não-lineares e homogêneas.',
      'Grafos direcionados acíclicos perfeitamente balanceados.',
      'Estruturas LIFO exclusivas para alocação em Stack.'
    ],
    correctAnswer: 1,
    explanation: 'Tradicionalmente, arrays têm tamanho fixo (estáticos), sequência única (lineares) e tipo único de dado (homogêneos).'
  },
  {
    id: 'vm11',
    topic: 'Vetores e Matrizes',
    question: 'Qual é a grande limitação de trabalhar com vetores e matrizes de alocação puramente estática?',
    options: [
      'O tamanho da estrutura é fixado durante a declaração/compilação, inviabilizando o redimensionamento elástico e podendo gerar desperdício ou falta de espaço.',
      'O tempo de compilação do código aumenta exponencialmente a cada novo vetor adicionado.',
      'Os dados são deletados automaticamente pelo sistema operacional caso fiquem mais de alguns segundos sem receber acesso.',
      'As matrizes estáticas só suportam números inteiros positivos entre 0 e 255.',
      'Eles não podem ser passados como parâmetros ou argumentos para dentro de funções auxiliares.'
    ],
    correctAnswer: 0,
    explanation: 'A rigidez do tamanho é o maior problema: se precisar de mais espaço, é necessário criar um novo vetor e copiar tudo.'
  },
  {
    id: 'vm12',
    topic: 'Vetores e Matrizes',
    question: 'Na representação de imagens digitais tradicionais (como bitmaps), qual abstração de estrutura de dados é diretamente utilizada para mapear os pixels?',
    options: [
      'Uma Pilha (Stack) duplamente encadeada.',
      'Uma Árvore B-Tree.',
      'Uma Matriz bidimensional ou tridimensional (onde cada célula representa a cor/canal de um pixel).',
      'Um Grafo não-direcionado ponderado de grau 4.',
      'Uma Fila (Queue) circular.'
    ],
    correctAnswer: 2,
    explanation: 'Imagens são grades de pontos (pixels), o que as torna candidatas perfeitas para representação via matrizes.'
  },
  {
    id: 'vm13',
    topic: 'Vetores e Matrizes',
    question: 'O que significa, no rigor técnico, afirmar que o vetor é uma coleção de dados "homogênea"?',
    options: [
      'Significa que os índices do vetor começam do menor valor e terminam de forma equidistante.',
      'Significa que o vetor pode mudar de dimensão dinamicamente durante a execução do programa (runtime).',
      'Implica que a estrutura aceita elementos vazios (nulos) dispostos simetricamente em suas bordas.',
      'Determina que absolutamente todos os elementos armazenados dentro do vetor precisam obrigatoriamente pertencer ao mesmo tipo primitivo ou classe.',
      'Indica que o acesso aos dados ocorre no mesmo tempo exato de latência, não importando a arquitetura do processador.'
    ],
    correctAnswer: 3,
    explanation: 'Homogeneidade garante que cada elemento ocupe o mesmo número de bytes, permitindo o cálculo rápido de endereços por índice.'
  },
  {
    id: 'vm14',
    topic: 'Vetores e Matrizes',
    question: 'Ao percorrer matematicamente uma Matriz Quadrada de ordem N, a chamada "Diagonal Principal" é facilmente isolada filtrando as células que satisfazem a seguinte condição de indexação:',
    options: [
      'O índice da linha é exatamente igual ao índice da coluna (i = j).',
      'O índice da linha é estritamente maior que o índice da coluna (i > j).',
      'O índice da linha somado ao da coluna resulta no tamanho da matriz menos um (i + j = N - 1).',
      'A divisão do índice da linha pelo índice da coluna possui resto zero (i % j = 0).',
      'O índice da linha é nulo e o da coluna varia de 0 até N.'
    ],
    correctAnswer: 0,
    explanation: 'A diagonal principal cruza a matriz onde os índices de linha e coluna são idênticos: (0,0), (1,1), (2,2), etc.'
  },
  {
    id: 'vm15',
    topic: 'Vetores e Matrizes',
    question: 'Se o domínio do problema exigir a criação de uma Matriz "Esparsa" (uma matriz onde a esmagadora maioria dos elementos são iguais a zero), instanciar uma matriz bidimensional clássica M x N na memória seria inadequado principalmente porque:',
    options: [
      'Funções de espalhamento falham sistematicamente ao ler valores nulos contíguos.',
      'Haverá um desperdício massivo de memória alocando bits físicos para milhares de zeros que não trazem informação relacional útil.',
      'É impossível criar laços aninhados que iterem sobre matrizes contendo mais zeros do que números inteiros.',
      'Processadores modernos desativam seus núcleos de processamento paralelo ao encontrar sequências puras de zeros.',
      'Matrizes clássicas só permitem armazenamento simultâneo de dados booleanos (true ou false), não suportando a tipagem do número zero.'
    ],
    correctAnswer: 1,
    explanation: 'Homogeneidade garante que cada elemento ocupe o mesmo número de bytes, permitindo o cálculo rápido de endereços por índice.'
  },
  {
    id: 'vm14',
    topic: 'Vetores e Matrizes',
    question: 'Ao percorrer matematicamente uma Matriz Quadrada de ordem N, a chamada "Diagonal Principal" é facilmente isolada filtrando as células que satisfazem a seguinte condição de indexação:',
    options: [
      'O índice da linha é exatamente igual ao índice da coluna (i = j).',
      'O índice da linha é estritamente maior que o índice da coluna (i > j).',
      'O índice da linha somado ao da coluna resulta no tamanho da matriz menos um (i + j = N - 1).',
      'A divisão do índice da linha pelo índice da coluna possui resto zero (i % j = 0).',
      'O índice da linha é nulo e o da coluna varia de 0 até N.'
    ],
    correctAnswer: 0,
    explanation: 'A diagonal principal cruza a matriz onde os índices de linha e coluna são idênticos: (0,0), (1,1), (2,2), etc.'
  },
  {
    id: 'vm15',
    topic: 'Vetores e Matrizes',
    question: 'Se o domínio do problema exigir a criação de uma Matriz "Esparsa" (uma matriz onde a esmagadora maioria dos elementos são iguais a zero), instanciar uma matriz bidimensional clássica M x N na memória seria inadequado principalmente porque:',
    options: [
      'Funções de espalhamento falham sistematicamente ao ler valores nulos contíguos.',
      'Haverá um desperdício massivo de memória alocando bits físicos para milhares de zeros que não trazem informação relacional útil.',
      'É impossível criar laços aninhados que iterem sobre matrizes contendo mais zeros do que números inteiros.',
      'Processadores modernos desativam seus núcleos de processamento paralelo ao encontrar sequências puras de zeros.',
      'Matrizes clássicas só permitem armazenamento simultâneo de dados booleanos (true ou false), não suportando a tipagem do número zero.'
    ],
    correctAnswer: 1,
    explanation: 'Matrizes esparsas devem usar estruturas otimizadas para economizar RAM, evitando guardar explicitamente milhares de valores nulos.'
  },

  // --- ÁRVORES, HEAPS E HASHING (15 Questões) ---
  {
    id: 'ahh1',
    topic: 'Árvores, Heaps e Hashing',
    question: 'Em estruturas de dados baseadas em árvores, o que caracteriza o nó "Raiz" (Root)?',
    options: [
      'É qualquer nó que não possua nós filhos (também chamado de folha).',
      'É o único nó principal de toda a estrutura que não possui um nó "pai" (acima dele).',
      'É o nó localizado sempre mais à esquerda na camada mais baixa.',
      'É um nó criado exclusivamente para conectar duas árvores distintas em um grafo.',
      'É obrigatoriamente um nó que possui exatamente dois filhos simétricos.'
    ],
    correctAnswer: 1,
    explanation: 'Correta: (B). A raiz é o ponto de entrada único e o único nó sem pai. Incorretas: (A) define folhas; (C) descreve um nó específico mas não a raiz; (D) descreve uma ponte em grafos; (E) descreve uma árvore binária perfeita, não a raiz em si.'
  },
  {
    id: 'ahh2',
    topic: 'Árvores, Heaps e Hashing',
    question: 'Qual é a característica fundamental que define uma "Árvore Binária"?',
    options: [
      'Ela pode armazenar apenas os números zero e um (0 e 1).',
      'É uma estrutura onde a altura da árvore deve ser sempre um número par.',
      'Cada nó da estrutura pode ter no máximo dois filhos (usualmente referidos como filho esquerdo e filho direito).',
      'É uma árvore que cresce de forma infinita apenas para um de seus lados.',
      'Cada nó deve obrigatoriamente ter ligações duplas (pai e filho apontando um para o outro simultaneamente).'
    ],
    correctAnswer: 2,
    explanation: 'Correta: (C). O termo "binária" refere-se ao limite de 2 filhos por nó. Incorretas: (A) confunde com sistema binário; (B) a altura pode ser qualquer valor; (D) descreve uma árvore degenerada; (E) descreve uma estrutura de dados duplamente ligada, não necessariamente uma árvore binária.'
  },
  {
    id: 'ahh3',
    topic: 'Árvores, Heaps e Hashing',
    question: 'O que define uma "Folha" (Leaf Node) na anatomia de uma árvore computacional?',
    options: [
      'É o nó onde a árvore começa e de onde derivam todos os demais elementos.',
      'É o nó intermediário que balanceia o peso entre o lado esquerdo e direito.',
      'É o nó de uma árvore de busca que guarda a menor chave (valor).',
      'É qualquer nó da árvore que está na ponta e não possui nós filhos derivados dele.',
      'É uma estrutura externa que varre e exibe os dados armazenados na memória.'
    ],
    correctAnswer: 3,
    explanation: 'Correta: (D). Folhas são os nós terminais. Incorretas: (A) descreve a raiz; (B) descreve um nó de pivô ou balanceamento; (C) o menor valor em uma BST é a folha mais à esquerda, mas nem toda folha é o menor valor; (E) descreve um iterador.'
  },
  {
    id: 'ahh4',
    topic: 'Árvores, Heaps e Hashing',
    question: 'Em uma "Árvore Binária de Busca" (BST - Binary Search Tree), qual é a regra clássica de organização espacial para os nós filhos em relação ao seu nó pai?',
    options: [
      'Valores ímpares descem para a subárvore esquerda e os pares para a direita.',
      'Valores menores ou iguais ao do pai vão para a subárvore esquerda; valores maiores vão para a direita.',
      'A organização é puramente temporal, o primeiro a chegar vai para a esquerda e o segundo para a direita.',
      'Valores maiores vão para a subárvore esquerda; valores menores vão para a direita.',
      'Não existe regra de organização, a árvore apenas empilha elementos no último nível vago.'
    ],
    correctAnswer: 1,
    explanation: 'Correta: (B). Esta regra permite buscas eficientes em O(log n). Incorretas: (A) paridade não é critério de BST; (C) descreve uma fila ou inserção arbitrária; (D) é o inverso da regra padrão; (E) descreve um heap ou árvore não ordenada.'
  },
  {
    id: 'ahh5',
    topic: 'Árvores, Heaps e Hashing',
    question: 'Qual método de percurso (traversal) em uma Árvore Binária de Busca garantirá que os nós sejam visitados e impressos em ordem numéricamente crescente?',
    options: [
      'Percurso em Pós-ordem (Post-order).',
      'Busca em Largura (Breadth-First Search).',
      'Percurso em Em-ordem (In-order).',
      'Percurso em Pré-ordem (Pre-order).',
      'Percurso Aleatório Direcionado.'
    ],
    correctAnswer: 2,
    explanation: 'Correta: (C). O percurso In-order (Esquerda -> Raiz -> Direita) em uma BST sempre resulta em ordem crescente. Incorretas: (A) visita a raiz por último; (B) visita por níveis; (D) visita a raiz primeiro; (E) não é um método padrão.'
  },
  {
    id: 'ahh6',
    topic: 'Árvores, Heaps e Hashing',
    question: 'Como é teoricamente definida a "Altura" (Height) de uma árvore?',
    options: [
      'É o somatório matemático de todos os valores dos nós multiplicados pelo seu nível.',
      'É o número máximo de arestas (conexões) partindo do nó raiz até alcançar a folha mais distante/profunda.',
      'É a quantidade total de folhas na base dividida pela quantidade de ramificações.',
      'É o número máximo de filhos permitidos por nó (grau da árvore).',
      'É o tamanho do arquivo em disco gerado após compilar a estrutura.'
    ],
    correctAnswer: 1,
    explanation: 'Correta: (B). A altura mede o caminho mais longo da raiz até uma folha. Incorretas: (A) é um cálculo sem sentido algorítmico; (C) é uma métrica de densidade, não altura; (D) define o grau da árvore; (E) refere-se a armazenamento físico.'
  },
  {
    id: 'ahh7',
    topic: 'Árvores, Heaps e Hashing',
    question: 'O que caracteriza estruturalmente um "Heap Binário" (ou Fila de Prioridades Binária)?',
    options: [
      'É uma árvore binária completa ou quase completa, preenchida progressivamente da esquerda para a direita no último nível.',
      'É uma árvore binária puramente esparsa, com longas ramificações únicas lembrando uma fila.',
      'É um grafo circular onde o menor nó aponta diretamente para o maior.',
      'É uma tabela bidimensional com posições de memória predefinidas.',
      'É obrigatoriamente uma Árvore Binária de Busca Perfeitamente Balanceada (como uma AVL).'
    ],
    correctAnswer: 0,
    explanation: 'Correta: (A). Heaps mantêm a propriedade de forma (árvore completa). Incorretas: (B) descreve uma árvore degenerada; (C) grafos circulares não são árvores; (D) descreve matrizes; (E) Heaps não são BSTs (não seguem a regra esquerda < pai < direita).'
  },
  {
    id: 'ahh8',
    topic: 'Árvores, Heaps e Hashing',
    question: 'Qual é a propriedade imutável que rege um "Max-Heap"?',
    options: [
      'O nó raiz deve armazenar o menor número negativo presente na estrutura.',
      'Todos os elementos do lado esquerdo do heap devem ser estritamente maiores que os do lado direito.',
      'O valor armazenado em qualquer nó pai deve ser sempre maior ou igual ao valor de seus nós filhos diretos.',
      'A soma total dos nós filhos nunca pode ultrapassar o valor do nó pai superior.',
      'O valor de um nó pai é sempre a multiplicação dos valores dos seus dois filhos.'
    ],
    correctAnswer: 2,
    explanation: 'Correta: (C). No Max-Heap, a raiz é o maior elemento. Incorretas: (A) descreve um Min-Heap se o menor for negativo; (B) não há ordem entre irmãos no heap; (D) e (E) são regras inventadas que não existem em Heaps.'
  },
  {
    id: 'ahh9',
    topic: 'Árvores, Heaps e Hashing',
    question: 'Para qual implementação prática clássica os Heaps Binários costumam ser a estrutura de dados mais recomendada e eficiente?',
    options: [
      'Simulação do botão "Voltar" (Undo) de editores de texto modernos.',
      'Implementação do algoritmo de criptografia simétrica SHA-256.',
      'Armazenamento do histórico de navegação temporária linear de um browser.',
      'Implementação do TAD Fila de Prioridade (Priority Queue).',
      'Renderização dos vetores de pixels numa tela gráfica em 3D.'
    ],
    correctAnswer: 3,
    explanation: 'Correta: (D). Heaps permitem acesso rápido ao elemento de maior/menor prioridade em O(1) e remoção em O(log n). Incorretas: (A) usa Pilhas; (B) usa funções matemáticas complexas; (C) usa Listas ou Filas; (E) usa Matrizes ou Buffers.'
  },
  {
    id: 'ahh10',
    topic: 'Árvores, Heaps e Hashing',
    question: 'O que significa na prática o conceito de "Hashing" ou de criar uma "Função Hash"?',
    options: [
      'Comprimir dados em arquivos para que ocupem fisicamente menos memória do hardware.',
      'Ordenar os valores inseridos num vetor, deslocando todos os dados sempre do menor para o maior.',
      'Receber uma informação (como um nome ou código), aplicar um cálculo lógico/matemático sobre ela, e retornar um índice numérico correspondente a uma posição específica num vetor.',
      'Criar backups espelhados dos dados em diferentes regiões da memória.',
      'Limpar periodicamente da memória Cache todos os dados que estão sem receber acessos diretos.'
    ],
    correctAnswer: 2,
    explanation: 'Correta: (C). Hashing mapeia chaves de tamanho arbitrário para índices de tamanho fixo. Incorretas: (A) é compressão; (B) é ordenação; (D) é redundância/backup; (E) é gerenciamento de cache (LRU).'
  },
  {
    id: 'ahh11',
    topic: 'Árvores, Heaps e Hashing',
    question: 'Qual o maior e principal benefício teórico proporcionado pela estrutura de uma Tabela Hash (Hash Table)?',
    options: [
      'Possibilita inserir, buscar e remover dados de uma grande coleção em um tempo médio extremamente rápido, tendendo à constante O(1).',
      'Permite que todos os dados gravados fiquem automaticamente ordenados de forma decrescente sem a necessidade de um algoritmo de ordenação (Sort).',
      'Reduz a complexidade espacial para zero, pois ignora completamente o uso da memória RAM.',
      'Blinda o código internamente, impossibilitando que desenvolvedores ocessem dados restritos de senhas.',
      'Permite pular processos de compilação da linguagem localmente.'
    ],
    correctAnswer: 0,
    explanation: 'Correta: (A). O acesso O(1) médio é a maior vantagem das Tabelas Hash. Incorretas: (B) Tabelas Hash não mantêm ordem; (C) complexidade espacial zero é impossível; (D) Hashing para senhas é segurança, mas não o benefício *teórico* da estrutura de dados em si; (E) não tem relação com compilação.'
  },
  {
    id: 'ahh12',
    topic: 'Árvores, Heaps e Hashing',
    question: 'Em relação a uma Tabela Hash, o que é conceitualmente uma "Colisão"?',
    options: [
      'Quando o sistema operacional tenta ler e escrever em uma posição de memória da Tabela Hash simultaneamente.',
      'Quando um dado inserido possui formato ou tipagem diferente da estrutura principal do vetor da tabela.',
      'Quando o algoritmo entra em um "loop infinito", travando o cálculo recursivo principal.',
      'Quando a Função Hash falha em gerar um número lógico, devolvendo um resultado nulo.',
      'Quando a Função Hash atribui, a duas chaves ou informações de entrada distintas, o exato mesmo índice (endereço numérico) no vetor resultante.'
    ],
    correctAnswer: 4,
    explanation: 'Correta: (E). Colisões ocorrem quando chaves diferentes resultam no mesmo hash. Incorretas: (A) descreve uma condição de corrida (race condition); (B) é erro de tipagem; (C) é erro de lógica infinita; (D) é falha de implementação da função.'
  },
  {
    id: 'ahh13',
    topic: 'Árvores, Heaps e Hashing',
    question: 'Qual é o mecanismo da técnica chamada "Encadeamento Separado" (Separate Chaining) para resolver colisões numa Tabela Hash?',
    options: [
      'Enviar o elemento conflitante temporariamente para a nuvem de um servidor proxy.',
      'Instanciar um novo espaço em uma Lista Encadeada alocada no próprio índice colidido, anexando ali os diferentes elementos em sequência.',
      'Multiplicar a chave por um número gerado de forma pseudoaleatória para realocá-la em um quadrante vazio distante.',
      'Separar a Tabela Hash original em duas Tabelas Hashes menores dividindo os elementos pares e ímpares.',
      'Excluir automaticamente a entrada mais velha presente na tabela e substituir pela que causou a colisão.'
    ],
    correctAnswer: 1,
    explanation: 'Correta: (B). Cada "balde" (bucket) da tabela torna-se uma lista de elementos. Incorretas: (A) é processamento em nuvem; (C) descreve uma variação de hashing duplo; (D) é divisão de carga; (E) descreve uma política de substituição de cache.'
  },
  {
    id: 'ahh14',
    topic: 'Árvores, Heaps e Hashing',
    question: 'Como funciona o princípio de "Endereçamento Aberto" (Open Addressing), como a Sondagem Linear (Linear Probing), no tratamento de uma colisão?',
    options: [
      'Se a posição original calculada pela Função Hash já estiver preenchida (ocupada), o algoritmo desce pelo vetor testando as próximas posições sequenciais até encontrar um buraco (slot) livre.',
      'Em vez de gravar na memória, a estrutura grava o índice conflitante em um disco rígido externo mantendo o endereçamento virtual aberto.',
      'O cálculo de Hash é refeito pedindo ativamente a intervenção de digitação do usuário via linha de comando.',
      'A estrutura da Tabela converte seu tipo base de Vetor para uma Árvore AVL de forma contínua e em tempo real para permitir os dados colididos.',
      'Ele abre os nós diretos vizinhos e soma o valor dos seus vizinhos aos do novo arquivo, ignorando o dado original.'
    ],
    correctAnswer: 0,
    explanation: 'Correta: (A). Procura-se o próximo espaço vazio no próprio vetor. Incorretas: (B) armazenamento em disco é lento demais para hash tables; (C) interação humana é inviável em runtime; (D) conversão para AVL é complexa e não é o padrão de endereçamento aberto; (E) cálculo sem sentido algorítmico.'
  },
  {
    id: 'ahh15',
    topic: 'Árvores, Heaps e Hashing',
    question: 'Ao lidarmos com Heaps Binários armazenados estritamente em um Array (base 0 - começando do índice 0), como localizamos matematicamente o Filho Esquerdo de um nó que está localizado no índice i?',
    options: [
      'Ele estará no índice correspondente a: i + 1.',
      'Ele estará no índice correspondente a: i / 2.',
      'Ele estará no índice correspondente a: i * i.',
      'Ele estará no índice correspondente a: 2 * i + 1.',
      'Ele estará no índice correspondente a: 3 * i - 1.'
    ],
    correctAnswer: 3,
    explanation: 'Correta: (D). A fórmula para o filho esquerdo em array base-0 é (2*i + 1). Incorretas: (A) seria o próximo elemento; (B) seria o pai (aproximadamente); (C) é exponencial; (E) é uma fórmula arbitrária.'
  }
];
