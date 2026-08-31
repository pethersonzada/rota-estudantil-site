# Documentação Técnica e Arquitetural do Site (Landing Page) - Rota Estudantil

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38Bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 1. Visão Geral da Arquitetura da Vitrine Institucional e Objetivos de Negócio

O repositório `rota-estudantil-site` consubstancia a vitrine comercial, institucional e ponto de entrada digital do ecossistema Rota Estudantil. Desenvolvido como uma Landing Page de alta performance, SEO otimizado e conversão direcionada, o site tem como propósito fundamental atrair, educar e converter leads qualificados compostos por transportadoras autônomas, motoristas de vans escolares e gestores de redes de ensino.

A arquitetura do projeto foi estruturada para garantir carregamentos ultrarrápidos, acessibilidade universal e uma experiência visual imersiva que reflete a confiabilidade tecnológica exigida por um sistema crítico de gestão e monitoramento de transporte infantojuvenil.

## 2. Stack Tecnológica, Ecossistema e Padrões de Desenvolvimento

* **Framework Web Principal:** Next.js (utilizando a arquitetura moderna de App Router para otimização de rotas, renderização híbrida e componentes de servidor eficientes).
* **Biblioteca de Interface:** React para construção de componentes modulares, reutilizáveis e altamente reativos.
* **Estilização e Design System:** Tailwind CSS para prototipagem rápida, design responsivo adaptativo e consistência visual rigorosa com identidade corporativa própria.
* **Tipografia e Recursos Visuais:** Integração otimizada de fontes tipográficas de alto impacto (como Bebas Neue e Inter) para hierarquia visual clara entre títulos comerciais e blocos de leitura fluida.
* **Hospedagem e Infraestrutura de Deploy:** Otimizado para implantação contínua na nuvem através da Vercel, garantindo distribuição global via CDN, certificados SSL automáticos e alta disponibilidade.

## 3. Estrutura de Seções, Componentes e Hierarquia de Conversão

A página inicial (`app/page.js`) é construída em blocos semânticos modulares orientados à jornada de compra e captação de clientes:

* **Barra de Navegação Superior (Header / Navbar):**
  * Contém a identidade visual corporativa do produto, links de navegação interna ancorados para as seções de funcionalidades, benefícios e preços, além de um botão de destaque institucional direcionando para a área de gestão.
* **Seção Principal de Impacto (Hero Section):**
  * Desenvolvida com títulos de forte apelo visual, subtópicos explicativos e chamadas de ação primárias (CTAs) para agendamento de demonstrações gratuitas e visualização de funcionamento do software.
* **Diagrama Interativo de Trajeto (Assinatura Visual):**
  * Elemento gráfico animado em CSS que simula o rastreamento em tempo real de uma rota escolar, destacando marcos operacionais como embarque confirmado, status em trajeto e chegada segura na instituição de ensino.
* **Barra de Métricas e Indicadores de Impacto (Stats Section):**
  * Bloco de destaque com contadores e dados numéricos consolidados sobre a operação diária de crianças transportadas, volume de vans conectadas e taxa de pontualidade das viagens.
* **Módulo Detalhado de Funcionalidades:**
  * Seção em formato de linhas alternadas detalhando os três pilares que resolvem lacunas de planilhas tradicionais e grupos de mensagens: rastreamento ao vivo, confirmação individualizada de embarque/desembarque e notificações automáticas aos responsáveis.
* **Segmentação de Benefícios por Público-Alvo:**
  * Estrutura em cards comparativos segmentando o valor entregue especificamente para cada participante da operação: o motorista, o gestor da frota e o responsável pelo aluno.
* **Tabela e Cards de Precificação (Pricing Section):**
  * Apresenta de forma transparente os planos de escalabilidade comercial da solução, divididos entre perfis de van autônoma, frotas pequenas e redes completas sob consulta institucional.
* **Seção de Chamada Final para Ação (Final CTA & Rodapé):**
  * Bloco focado em conversão de leads com fechamento institucional contendo avisos de direitos autorais e metadados de rodapé.

## 4. Estratégias de Otimização, SEO e Performance Web

* **Server-Side Rendering (SSR) e Static Generation:** Aproveitamento dos recursos nativos do App Router do Next.js para renderizar páginas estáticas com alta velocidade de indexação por motores de busca (Google, Bing).
* **Otimização de Ativos Estáticos:** Compressão rigorosa de imagens, minimização de folhas de estilo e carregamento assíncrono de fontes externas para reduzir o tempo de carregamento inicial (First Contentful Paint).
* **Responsividade Nativa:** Layout totalmente fluido construído com propriedades de Grid e Flexbox do Tailwind CSS, assegurando usabilidade perfeita em smartphones, tablets e monitores corporativos de grande porte.

## 5. Pré-requisitos de Desenvolvimento e Configuração de Ambiente

* **Ferramentas Necessárias:** Node.js versão 18 ou superior instalado localmente, junto ao gerenciador de pacotes npm ou yarn.
* **Procedimento de Instalação e Execução Local:**
  1. Clone o repositório oficial do site utilizando o terminal.
  2. Acesse a pasta do projeto e execute o comando `npm install` para instalar as dependências descritas no `package.json`.
  3. Execute o comando de desenvolvimento `npm run dev` para iniciar o servidor local na porta padrão (`http://localhost:3000`).

## 🔒 Licença e Direitos Autorais

Copyright© 2026 Miguel Petherson Silva. Todos os direitos reservados.

Este software e sua documentação associada (o "Projeto Rota Estudantil") são de propriedade exclusiva do autor. 

É expressamente proibida a cópia, modificação, distribuição, comercialização ou utilização total ou parcial deste código-fonte sem a autorização prévia e expressa por escrito do autor.
