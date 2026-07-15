# Architecture Decisions

Este documento registra as principais decisões técnicas do projeto ALLPOKER.

---

## DEC-001 — Stack Base

Data: 15/07/2026

### Decisão

O frontend será desenvolvido utilizando:

- React 19

- Vite

- TypeScript

### Motivo

Projeto moderno, rápido, com excelente experiência de desenvolvimento e amplo suporte da comunidade.

---

## DEC-002 — Estilização

Data: 15/07/2026

### Decisão

Utilizar Tailwind CSS v4.

### Motivo

- Melhor performance

- Configuração simplificada

- Documentação oficial atual

- Excelente integração com React e Vite

---

## DEC-003 — Biblioteca de Componentes

Data: 15/07/2026

### Decisão

Utilizar shadcn/ui como base dos componentes.

### Motivo

- Componentes acessíveis

- Código sob nosso controle

- Alta customização

- Compatível com Tailwind CSS v4

---

## DEC-004 — Gerenciamento de Estado

Status: Pendente

### Proposta

Utilizar Zustand.

---

## DEC-005 — Plataforma

Status: Pendente

### Proposta

Desenvolver o ALLPOKER como uma Progressive Web App (PWA).

---

## DEC-006 — Deploy

Status: Pendente

### Proposta

Hospedar na Vercel.

---

## DEC-007 — Estrutura

### Decisão

Organizar o projeto por responsabilidades, utilizando pastas específicas para páginas, componentes, hooks, serviços, store, tipos e utilitários.

---

## DEC-008 — Filosofia

### Decisão

Priorizar:

- Mobile First

- Componentização

- Clean Code

- Simplicidade

- Poucos cliques

- Boa experiência de uso