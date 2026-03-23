export type IrBuildInput = {
  cobolSource: string;
  copybook: string;
  metadata: string;
};

export type IrBuildOutput = {
  program: Record<string, unknown>;
  data: Record<string, unknown>;
  logic: Record<string, unknown>;
  traceability: string[];
};

export const buildInitialIr = (input: IrBuildInput): IrBuildOutput => {
  const hasSyncpoint = input.cobolSource.includes('SYNCPOINT');

  return {
    program: {
      inferredProgramType: 'Online inquiry with transactional boundary',
      transactionBoundary: hasSyncpoint ? 'Explicit SYNCPOINT detected' : 'No explicit syncpoint',
    },
    data: {
      copybookFieldsDetected: (input.copybook.match(/PIC/g) || []).length,
      metadataSource: input.metadata.slice(0, 32),
    },
    logic: {
      operations: ['read', 'validate', 'branch', 'return'],
      semanticIntent: 'Customer inquiry use case',
    },
    traceability: ['CUSTINQ1 MAIN-PARA', 'COPYBOOK CUSTOMER-REC'],
  };
};
