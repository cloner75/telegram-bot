export interface IStartup {
  setRouters(): void;
  setConnections(): void;
  startService(): void;
  processHandler(): void;
  additionalServices(): void;
}