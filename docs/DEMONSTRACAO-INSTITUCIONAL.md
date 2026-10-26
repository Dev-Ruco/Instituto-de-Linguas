# Demonstração institucional — percurso funcional

## Entrega actual
- Website público preservado, com aviso de demonstração e sem números institucionais não verificados na página inicial.
- Portal académico autónomo, no endereço `/portal`, com dados fictícios explícitos.
- Candidaturas fictícias podem ser criadas na sessão, confirmadas e consultadas nos módulos Estudantes, Turmas e Visão geral.
- Validação de ocupação da turma, pesquisa e reposição da demonstração.
- Dados exclusivamente na memória do navegador. Recarregar a página limpa quaisquer alterações.
- Não introduzir informações pessoais reais.

## Demonstração sugerida para a Direcção
1. Abrir o website público e explicar a navegação institucional.
2. Abrir Portal Académico em novo separador.
3. Seleccionar Matrículas; registar "Estudante Exemplo D".
4. Confirmar a candidatura e voltar ao painel para mostrar os indicadores.
5. Abrir Turmas para mostrar a ocupação actualizada.

## Limitações e passos seguintes
A interface não envia dados ao servidor e não representa actividade real do Instituto.
O backend Spring Boot tem apenas a API inicial de Delegações, com HTTP Basic para desenvolvimento local. Ainda não está alojado nem ligado ao website.
Antes de qualquer piloto institucional: validar requisitos, implementar autenticação moderna e perfis, testes automatizados, persistência real, auditoria, backups e autorização para tratamento de dados.
