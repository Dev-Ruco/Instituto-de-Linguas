# Portal Académico — primeira interface

Aceder através de `/portal` e do novo item **Portal Académico** no menu do website público.

É um protótipo interactivo, com navegação funcional entre módulos e pesquisa de funcionalidades. Não apresenta números inventados como reais, não contém operações de escrita nem formulários de autenticação simulada. Uma faixa em destaque avisa que os dados reais não estão disponíveis.

O backend Spring Boot encontra-se na pasta `backend`. Antes de ligar a interface aos endpoints de delegações é obrigatório implementar autenticação, autorização por perfil e delegação, sessões seguras e auditoria. O portal não deve receber dados reais nem credenciais enquanto essa camada não estiver pronta.

O website é publicado pelo Vercel, mas o Spring Boot precisa de alojamento separado e configuração segura da base de dados. Esta entrega não publica automaticamente o backend.
