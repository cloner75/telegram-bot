export interface IStartup {
  setRouters(): void;
  setConnections(): void;
  startService(): void;
}