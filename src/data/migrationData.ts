import {
  AgentStage,
  AuditFinding,
  DiffResult,
  FileNode,
  GeneratedFile,
  IrNode,
  KpiCard,
  RagCategory,
  RetrievalMatrixRow,
  SemanticMapRow,
  SourceArtifact,
  LlmFlowStage,
} from '../types/migration';

export const executiveSummary =
  'Semantic COBOL to Spring Boot Migration Studio orchestrates AI agents and DeepSeek to transform legacy business intent into traceable Spring Boot services, not line-by-line syntax rewrites.';

export const principles = [
  'Semantic-first migration',
  'IR-driven transformation',
  'RAG-grounded reasoning',
  'Agentic orchestration',
  'Traceable and auditable outputs',
];

export const kpis: KpiCard[] = [
  { label: 'Legacy Programs Scanned', value: '142', trend: '+12 this week' },
  { label: 'IR Artifacts Generated', value: '318', trend: '97% completeness' },
  { label: 'APIs Designed', value: '56', trend: '11 pending review' },
  { label: 'Entities Modeled', value: '74', trend: '9 inferred' },
  { label: 'Tests Generated', value: '412', trend: '88% pass in CI' },
  { label: 'Risks Flagged', value: '17', trend: '5 high priority' },
];

export const sourceArtifacts: SourceArtifact[] = [
  {
    id: 'cobol',
    label: 'COBOL Source',
    language: 'cobol',
    content: `IDENTIFICATION DIVISION.
PROGRAM-ID. CUSTINQ1.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-STATUS-CODE PIC X(02).
01 WS-CUST-ID PIC 9(10).
PROCEDURE DIVISION.
MAIN-PARA.
    MOVE DFHCOMMAREA(1:10) TO WS-CUST-ID
    READ CUSTOMER-MASTER KEY IS WS-CUST-ID
        INVALID KEY MOVE 'NF' TO WS-STATUS-CODE
    END-READ
    IF WS-STATUS-CODE = 'NF'
       MOVE '404' TO DFHCOMMAREA(11:3)
    ELSE
       PERFORM BUILD-SUCCESS-RESP
    END-IF
    EXEC CICS SYNCPOINT END-EXEC
    GOBACK.`,
  },
  {
    id: 'copybook',
    label: 'Copybook',
    language: 'cobol',
    content: `       01 CUSTOMER-REC.
          05 CUST-ID                PIC 9(10).
          05 CUST-NAME              PIC X(30).
          05 CUST-STATUS            PIC X(01).
             88 CUST-ACTIVE         VALUE 'A'.
             88 CUST-SUSPENDED      VALUE 'S'.
          05 CUST-CREDIT-LIMIT      PIC S9(7)V99 COMP-3.
          05 CUST-LAST-UPD-TS       PIC X(26).`,
  },
  {
    id: 'vsam',
    label: 'VSAM Metadata',
    language: 'json',
    content: `{
  "dataset": "BANK.CUSTOMER.MASTER.KSDS",
  "accessPattern": "RANDOM+UPDATE",
  "primaryKey": "CUST-ID",
  "recordLength": 128,
  "alternateIndexes": ["CUST-NAME", "CUST-STATUS"],
  "locking": "ENQ-SHARED-READ, ENQ-EXCLUSIVE-WRITE"
}`,
  },
  {
    id: 'cics',
    label: 'CICS / BMS Map',
    language: 'text',
    content: `MAPSET CUSTMAP
FIELD CUSTID  POS(3,10) LENGTH(10)
FIELD ACTION  POS(4,10) LENGTH(1)
FIELD MSGTXT  POS(20,1) LENGTH(60)
COMMAREA LAYOUT:
  01 CA-REQUEST.
     05 CA-CUST-ID PIC 9(10).
     05 CA-STATUS  PIC X(02).
     05 CA-MESSAGE PIC X(60).`,
  },
  {
    id: 'jcl',
    label: 'JCL Script',
    language: 'text',
    content: `//CUSTMIGR JOB (ACCT),'CUSTOMER MIGRATION',CLASS=A
//STEP10   EXEC PGM=IDCAMS
//SYSPRINT DD SYSOUT=*
//SYSIN    DD *
  REPRO INFILE(CUSTMST) OUTFILE(CUSTBKUP)
/*
//STEP20 EXEC PGM=CUSTINQ1,REGION=0M
//STEPLIB DD DSN=BANK.CICS.LOADLIB,DISP=SHR`,
  },
];

export const ragCategories: RagCategory[] = [
  { name: 'Migration Rules', description: 'COBOL paragraph to layered service mapping', artifacts: ['rulebook-v4', 'banking-modernization-standard'] },
  { name: 'Data Mapping Rules', description: 'PIC and COMP-3 to Java/JPA type catalog', artifacts: ['type-map-2026.1'] },
  { name: 'Business Glossary', description: 'Domain terms, business codes, and process meanings', artifacts: ['cust-domain-glossary'] },
  { name: 'Spring Boot Templates', description: 'Controller/service/repository scaffolding templates', artifacts: ['spring-boot-ddd-template-kit'] },
  { name: 'Error Code Conventions', description: 'Legacy error harmonization and API error envelopes', artifacts: ['error-catalog-v2'] },
  { name: 'Transaction and Locking Policies', description: 'SYNCPOINT, locking and optimistic concurrency policies', artifacts: ['tx-policy-legacy-modern-bridge'] },
  { name: 'Historical Migration Examples', description: 'Reviewed transformations from previous programs', artifacts: ['CUST991-to-customer-api'] },
];

export const retrievalMatrix: RetrievalMatrixRow[] = [
  { agent: 'COBOL Parser Agent', categories: ['Migration Rules', 'Data Mapping Rules'], rationale: 'Parse structure and map data types with deterministic rules.' },
  { agent: 'Use Case Mapper Agent', categories: ['Business Glossary', 'Historical Migration Examples'], rationale: 'Infer business intent and map operation verbs.' },
  { agent: 'Domain Modeler Agent', categories: ['Business Glossary', 'Transaction and Locking Policies'], rationale: 'Build aggregate and invariants with lifecycle policies.' },
  { agent: 'API Designer Agent', categories: ['Spring Boot Templates', 'Error Code Conventions'], rationale: 'Generate enterprise-grade contract with error semantics.' },
  { agent: 'Reviewer/Fixer Agent', categories: ['Historical Migration Examples', 'Migration Rules'], rationale: 'Detect anti-patterns and propose corrective patches.' },
];

export const irNodes: IrNode[] = [
  {
    title: 'Program IR',
    payload: {
      programName: 'CUSTINQ1',
      type: 'CICS online inquiry',
      entryPoints: ['MAIN-PARA'],
      calledPrograms: [],
      transactionBoundaries: ['EXEC CICS SYNCPOINT END-EXEC'],
      fileUsage: [{ file: 'CUSTOMER-MASTER', mode: 'READ', key: 'WS-CUST-ID' }],
    },
  },
  {
    title: 'Data IR',
    payload: {
      recordLayouts: ['CUSTOMER-REC'],
      fields: [
        { source: 'CUST-ID PIC 9(10)', target: 'String customerId', confidence: 0.99 },
        { source: 'CUST-CREDIT-LIMIT PIC S9(7)V99 COMP-3', target: 'BigDecimal creditLimit', confidence: 0.96 },
      ],
      businessCodes: [{ source: 'CUST-STATUS', map: { A: 'ACTIVE', S: 'SUSPENDED' } }],
    },
  },
  {
    title: 'Logic IR',
    payload: {
      steps: [
        { op: 'read', detail: 'Read customer master by key', trace: 'CUSTINQ1:9-13' },
        { op: 'validate', detail: 'If invalid key, classify as not found', trace: 'CUSTINQ1:10-11' },
        { op: 'branch', detail: 'Build error response or success payload', trace: 'CUSTINQ1:12-17' },
        { op: 'commit', detail: 'Synchronize transaction boundary', trace: 'CUSTINQ1:18' },
      ],
      rules: ['Not found must return legacy semantic code 404.', 'Status A/S must map to domain enum with explicit invariants.'],
    },
  },
  {
    title: 'Source Trace',
    payload: {
      links: [
        { target: 'CustomerApplicationService.findCustomer', source: 'CUSTINQ1 MAIN-PARA lines 9-17' },
        { target: 'CustomerStatus enum', source: 'Copybook CUSTOMER-REC CUST-STATUS' },
      ],
      unresolvedAssumptions: ['COMMAREA field 11:13 inferred as HTTP status envelope.'],
    },
  },
];

export const agents: AgentStage[] = [
  { name: 'Inventory Agent', status: 'completed', role: 'Catalogs legacy artifacts and dependencies.', inputs: ['COBOL members', 'JCL stream', 'VSAM catalog'], knowledge: ['Migration Rules'], purpose: 'Build migration scope graph.', outputs: ['Artifact inventory', 'Dependency map'] },
  { name: 'COBOL Parser Agent', status: 'completed', role: 'Produces AST and control flow from COBOL and copybooks.', inputs: ['COBOL source', 'Copybook'], knowledge: ['Data Mapping Rules'], purpose: 'Generate parse tree and normalized statements.', outputs: ['Program IR skeleton', 'Data IR seed'] },
  { name: 'Use Case Mapper Agent', status: 'completed', role: 'Converts technical operations into business use cases.', inputs: ['Program IR', 'Business glossary'], knowledge: ['Business Glossary', 'Historical Migration Examples'], purpose: 'Surface business intent and canonical use case names.', outputs: ['Use case catalog', 'Semantic map draft'] },
  { name: 'Domain Modeler Agent', status: 'running', role: 'Shapes aggregates, domain services, and rules.', inputs: ['Use cases', 'Data IR'], knowledge: ['Business Glossary', 'Transaction and Locking Policies'], purpose: 'Define bounded context and invariants.', outputs: ['Entity model', 'Domain rules'] },
  { name: 'Persistence Agent', status: 'pending', role: 'Maps IR data to JPA entities and repositories.', inputs: ['Entity model', 'Type mappings'], knowledge: ['Data Mapping Rules', 'Spring Boot Templates'], purpose: 'Create persistence contracts.', outputs: ['JPA entities', 'Repositories'] },
  { name: 'API Designer Agent', status: 'pending', role: 'Designs REST contracts from use cases and COMMAREA semantics.', inputs: ['Use case catalog', 'Error conventions'], knowledge: ['Spring Boot Templates', 'Error Code Conventions'], purpose: 'Create clean API layer with DTO boundaries.', outputs: ['Controllers', 'DTOs', 'OpenAPI snippets'] },
  { name: 'Code Generator Agent', status: 'pending', role: 'Assembles layered Spring Boot project output.', inputs: ['IR + semantic map', 'Templates'], knowledge: ['Spring Boot Templates'], purpose: 'Generate compile-ready implementation.', outputs: ['Application, domain, infrastructure code'] },
  { name: 'Test & Diff Agent', status: 'pending', role: 'Generates tests and legacy-modern diff checks.', inputs: ['Generated code', 'Trace refs'], knowledge: ['Historical Migration Examples'], purpose: 'Validate behavioral parity.', outputs: ['Unit tests', 'Diff report'] },
  { name: 'Reviewer / Fixer Agent', status: 'pending', role: 'Performs governance, risk scoring, and remediation hints.', inputs: ['Diff results', 'Audit policies'], knowledge: ['Migration Rules', 'Error Code Conventions'], purpose: 'Reduce uncertainty before approval.', outputs: ['Risk register', 'Fix recommendations'] },
];

export const semanticMappings: SemanticMapRow[] = [
  { cobolConstruct: 'READ CUSTOMER-MASTER', businessMeaning: 'Retrieve Customer use case', springTarget: 'CustomerRepository.findById + service orchestration', traceRef: 'CUSTINQ1:9-13', confidence: 'High' },
  { cobolConstruct: 'CICS COMMAREA', businessMeaning: 'Transport request/response contract', springTarget: 'CustomerRequest / CustomerResponse DTOs', traceRef: 'COMMAREA layout', confidence: 'High' },
  { cobolConstruct: 'BMS MAP user interaction', businessMeaning: 'Channel command-style inquiry', springTarget: 'REST GET /customers/{id}', traceRef: 'CUSTMAP ACTION field', confidence: 'Medium' },
  { cobolConstruct: 'VSAM KSDS random access', businessMeaning: 'Indexed aggregate retrieval', springTarget: 'Spring Data repository query methods', traceRef: 'VSAM metadata key CUST-ID', confidence: 'High' },
  { cobolConstruct: 'EXEC CICS SYNCPOINT', businessMeaning: 'Commit transaction boundary', springTarget: '@Transactional application service method', traceRef: 'CUSTINQ1:18', confidence: 'High' },
  { cobolConstruct: 'Status flags A/S', businessMeaning: 'Customer lifecycle domain rule', springTarget: 'CustomerStatus enum + invariant checks', traceRef: 'Copybook CUST-STATUS', confidence: 'Medium' },
];

export const architectureTree: FileNode[] = [
  { name: 'src', type: 'folder', children: [
    { name: 'api', type: 'folder', children: [{ name: 'controller', type: 'folder', children: [{ name: 'CustomerController.java', type: 'file', key: 'CustomerController.java' }] }] },
    { name: 'application', type: 'folder', children: [{ name: 'CustomerApplicationService.java', type: 'file', key: 'CustomerApplicationService.java' }] },
    { name: 'domain', type: 'folder', children: [{ name: 'Customer.java', type: 'file', key: 'Customer.java' }, { name: 'CustomerDomainService.java', type: 'file', key: 'CustomerDomainService.java' }] },
    { name: 'infrastructure', type: 'folder', children: [{ name: 'entity', type: 'folder', children: [{ name: 'CustomerEntity.java', type: 'file', key: 'Customer.java' }] }, { name: 'repository', type: 'folder', children: [{ name: 'CustomerRepository.java', type: 'file', key: 'CustomerRepository.java' }] }] },
    { name: 'dto', type: 'folder', children: [{ name: 'CustomerRequest.java', type: 'file', key: 'CustomerRequest.java' }, { name: 'CustomerResponse.java', type: 'file', key: 'CustomerResponse.java' }] },
    { name: 'config', type: 'folder', children: [{ name: 'GlobalExceptionHandler.java', type: 'file', key: 'GlobalExceptionHandler.java' }] },
    { name: 'tests', type: 'folder', children: [{ name: 'CustomerApplicationServiceTest.java', type: 'file', key: 'CustomerApplicationServiceTest.java' }] },
    { name: 'migration', type: 'folder', children: [{ name: 'program-ir.json', type: 'file', key: 'program-ir.json' }, { name: 'migration-mapping-report.json', type: 'file', key: 'migration-mapping-report.json' }] },
  ] },
];

export const generatedFiles: GeneratedFile[] = [
  { key: 'CustomerController.java', language: 'java', description: 'API layer controller delegating business operations.', content: `@RestController
@RequestMapping("/api/customers")
@RequiredArgsConstructor
public class CustomerController {
  private final CustomerApplicationService applicationService;

  @GetMapping("/{customerId}")
  public CustomerResponse getCustomer(@PathVariable String customerId) {
    return applicationService.retrieveCustomer(new CustomerRequest(customerId));
  }
}` },
  { key: 'CustomerApplicationService.java', language: 'java', description: 'Application layer coordinates transaction and orchestration.', content: `@Service
@RequiredArgsConstructor
public class CustomerApplicationService {
  private final CustomerDomainService domainService;

  @Transactional(readOnly = true)
  public CustomerResponse retrieveCustomer(CustomerRequest request) {
    Customer customer = domainService.findCustomer(request.customerId());
    return CustomerResponse.from(customer);
  }
}` },
  { key: 'CustomerDomainService.java', language: 'java', description: 'Domain layer contains business rules and invariants.', content: `@Component
@RequiredArgsConstructor
public class CustomerDomainService {
  private final CustomerRepository repository;

  public Customer findCustomer(String customerId) {
    Customer customer = repository.findByCustomerId(customerId)
      .orElseThrow(() -> new CustomerNotFoundException(customerId));
    customer.assertReadable();
    return customer;
  }
}` },
  { key: 'Customer.java', language: 'java', description: 'Domain aggregate with explicit rule checks.', content: `public class Customer {
  private final String customerId;
  private final CustomerStatus status;
  private final BigDecimal creditLimit;

  public void assertReadable() {
    if (status == CustomerStatus.SUSPENDED) {
      throw new DomainRuleViolation("SUSPENDED_CUSTOMER");
    }
  }
}` },
  { key: 'CustomerRepository.java', language: 'java', description: 'Infrastructure repository abstraction without decision logic.', content: `public interface CustomerRepository extends JpaRepository<CustomerEntity, String> {
  Optional<Customer> findByCustomerId(String customerId);
}` },
  { key: 'CustomerRequest.java', language: 'java', description: 'Request DTO mapped from COMMAREA semantics.', content: `public record CustomerRequest(String customerId) {}` },
  { key: 'CustomerResponse.java', language: 'java', description: 'Response DTO for API layer contract.', content: `public record CustomerResponse(String customerId, String customerName, String status) {
  public static CustomerResponse from(Customer customer) {
    return new CustomerResponse(customer.getCustomerId(), customer.getName(), customer.getStatus().name());
  }
}` },
  { key: 'GlobalExceptionHandler.java', language: 'java', description: 'Global error translation from domain exceptions to REST envelope.', content: `@RestControllerAdvice
public class GlobalExceptionHandler {
  @ExceptionHandler(CustomerNotFoundException.class)
  public ResponseEntity<ApiError> handleNotFound(CustomerNotFoundException ex) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiError.of("CUST-404", ex.getMessage()));
  }
}` },
  { key: 'program-ir.json', language: 'json', description: 'Serialized IR used by downstream agents.', content: JSON.stringify(irNodes, null, 2) },
  { key: 'migration-mapping-report.json', language: 'json', description: 'Traceable semantic mapping and risk assessment.', content: JSON.stringify({ mappings: semanticMappings, generatedAt: '2026-03-23T00:00:00Z' }, null, 2) },
];

export const diffResults: DiffResult[] = [
  { field: 'CUST-ID', legacy: 'PIC 9(10)', modern: 'Customer.customerId:String', status: 'matched' },
  { field: 'CUST-STATUS', legacy: 'A/S flag', modern: 'CustomerStatus enum', status: 'matched' },
  { field: 'COMMAREA STATUS', legacy: '2-char status + msg', modern: 'HTTP status + ApiError payload', status: 'requires-review' },
];

export const auditFindings: AuditFinding[] = [
  { id: 'AUD-1021', severity: 'Medium', summary: 'Assumed BMS ACTION=I maps to GET endpoint semantics.', owner: 'Domain Architect', traceRef: 'CUSTMAP ACTION' },
  { id: 'AUD-1024', severity: 'High', summary: 'SYNCPOINT rollback behavior under partial update still unverified.', owner: 'Transaction SME', traceRef: 'CUSTINQ1:18' },
  { id: 'AUD-1029', severity: 'Low', summary: 'Legacy error code NF converted to CUST-404 with rationale present.', owner: 'API Reviewer', traceRef: 'CUSTINQ1:10-15' },
];

export const llmFlow: LlmFlowStage[] = [
  { step: 'Prompt Router', detail: 'Routes agent requests to DeepSeek profile with task-specific instructions.', output: 'Routed prompt packet' },
  { step: 'Structured Completion', detail: 'Requests JSON mode output with schema guardrails.', output: 'Validated JSON object' },
  { step: 'Retry & Validation Loop', detail: 'Retries with corrective hints when schema validation fails.', output: 'Schema-compliant artifact' },
  { step: 'Trace Enrichment', detail: 'Injects source line references and RAG citations into response.', output: 'Auditable migration artifact' },
];
