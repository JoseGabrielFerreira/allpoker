# ♠️ ALLPOKER

## Visão do Projeto

ALLPOKER é uma Progressive Web App (PWA) desenvolvida para facilitar o gerenciamento de sessões de poker entre amigos.

O aplicativo permite que o organizador registre os jogadores, controle buy-ins, entradas adicionais (rebuys), cash outs e gere automaticamente um resumo da sessão para compartilhamento no WhatsApp.

O foco da primeira versão é simplicidade, rapidez e excelente experiência no celular.

---

# Objetivo

Eliminar o uso de papel, bloco de notas e calculadora durante as sessões de poker.

Todo o controle deve acontecer dentro do aplicativo.

---

# Público-alvo

Organizadores de Home Games de Poker.

---

# Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router
- Zustand
- LocalStorage
- Vite PWA
- Vercel

---

# Plataforma

Progressive Web App (PWA)

Mobile First

---

# Filosofia

- Simples
- Rápido
- Intuitivo
- Poucos cliques
- Interface moderna
- Código limpo

Se uma funcionalidade não melhora a organização da sessão, ela não pertence à V1.

---

# Escopo da V1

## Jogadores

- Cadastrar jogador
- Editar jogador
- Excluir jogador

---

## Nova Sessão

Informar:

- Organizador
- Chave PIX
- Buy-in padrão
- Jogadores participantes

---

## Durante a Sessão

Cada jogador possui:

- Entradas
- Total investido
- Cash Out
- Resultado

---

## Entradas

Adicionar através de:

- Botão de Buy-in padrão
- Valor personalizado

---

## Finalização

Calcular automaticamente:

- Lucro
- Prejuízo
- Total arrecadado
- Total distribuído

---

## Resumo

Gerar automaticamente um texto para WhatsApp contendo:

- Buy-ins
- Resultado dos jogadores
- Quem deve pagar
- Total a receber
- PIX do organizador

---

# Fora do Escopo

- Login
- Banco de Dados
- Supabase
- Ranking
- Estatísticas
- Histórico
- Multi usuários
- Torneios

---

# Arquitetura

O projeto será organizado por Features.

Cada funcionalidade deve ser independente.

---

# Mobile First

Toda interface deve ser desenhada primeiro para celular.

---

# Princípios

- Componentes reutilizáveis
- Código simples
- TypeScript em todo projeto
- Clean Code
- Organização antes de complexidade

