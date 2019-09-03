export type ErrorType =
  | {
      type: 'API';
    }
  | {
      type: 'VALIDATION';
      messages: any;
    }
  | {
      type: 'INTERNAL';
    };
