
export interface LogEntry {
  no: number;
  date: string;
  time: string;
  category: string;
  level: 'INFO' | 'ERROR' | 'DEBUG';
  source: string;
  content: string;
}

export interface VerificationData {
  timeRange: string;
  instruction: number;
  actual: number;
}

export interface SystemStatus {
  verificationDate: string;
  receivedTime: string;
  targetTime: string;
  responseResult: string;
  reportTime: string;
}

export enum Page {
  LOGIN = 'login',
  LOG_VIEWER = 'log-viewer',
  VERIFICATION = 'verification'
}
