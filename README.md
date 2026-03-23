# Semantic COBOL to Spring Boot Migration Studio

A production-style enterprise demo for **semantic-driven modernization** of mainframe COBOL estates into **Spring Boot + JPA + REST** applications.

## Product Overview
This studio demonstrates how modernization programs can move beyond line-by-line syntax translation. The platform emphasizes business-intent extraction, IR modeling, and auditable transformations into clean layered Java architecture.

## Semantic Migration Concept
1. Parse COBOL ecosystem artifacts (programs, copybooks, VSAM metadata, CICS/BMS, JCL).
2. Build structured Intermediate Representation (Program IR, Data IR, Logic IR, Source Trace).
3. Run an agent pipeline over IR (inventory → parser → use case mapping → domain modeling → persistence → API → code generation → test/diff → reviewer/fixer).
4. Ground each agent with RAG knowledge sources.
5. Generate Spring Boot architecture artifacts and governance reports with confidence/risk indicators.

## Architecture Summary
- **Frontend**: React + TypeScript + Vite + Tailwind.
- **State**: Zustand for shared studio interactions (selected artifact and generated file).
- **Semantic features**: IR panel, agent orchestration view, semantic mapping matrix, validation/audit dashboard.
- **LLM integration**: DeepSeek primary provider with provider abstraction (`LlmProvider`) for extensibility.

## Setup Instructions
### Prerequisites
- Node.js 20+
- npm 10+

### Install and Run
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## DeepSeek Configuration
Create `.env` from `.env.example` and set:

- `VITE_DEEPSEEK_API_KEY`
- `VITE_DEEPSEEK_BASE_URL`
- `VITE_DEEPSEEK_MODEL`

The demo is mock-data-first, but DeepSeek client and orchestration services are production-structured for real wiring.

## How to Modify Mock Data
All domain-relevant mock content is centralized in:

- `src/data/migrationData.ts`

You can update legacy snippets, RAG catalogs, IR objects, pipeline stages, generated code, diff results, and audit findings.

## How to Extend Agent Pipeline
1. Add/modify stage definitions in `src/data/migrationData.ts`.
2. Extend orchestration contracts in `src/services/agentOrchestrator.ts`.
3. Add UI controls/paneling inside `src/features/agents`.

## Replace LLM Provider
1. Implement `LlmProvider` in a new service class.
2. Mirror behavior of `DeepSeekClient` for JSON completion handling.
3. Inject provider implementation into orchestration flows.

## Enterprise Demo Notes
- UI intentionally reinforces semantic modernization narrative.
- Controllers are shown as orchestration-only (no embedded domain rules).
- Domain rules, traceability, confidence, and risk flags are visible for architecture governance workshops.
