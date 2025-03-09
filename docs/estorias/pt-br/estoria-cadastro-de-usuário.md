# Título: Cadastro do usuário

# Narrativa:

**Como** um usuário

**Eu** quero me cadastrar na aplicação

**Para** conseguir ver cards aleatórios

# Critério de aceitação:

## Cenário 1: Campo de nome não foi preenchido

**Dado** que eu não preenchi o campo de nome

**Então** o botão de "Clicar para ver cartas" deve estar desabilitado

## Cenário 2: Campo de nome está preenchido

**Dado** que eu preenchi o campo de nome

**E** o botão "Clicar para ver cartas" está habilitado

**Quando** eu clicar no botão "Clicar para ver cartas"

**Então** eu devo ser enviado para a tela que me mostrará os cards aleatórios
