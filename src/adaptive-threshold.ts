export function calculateAdaptiveThreshold(currentRate: number, baselineRate: number): number {
  if (currentRate > baselineRate * 1.2) {
    return 100; // 100ms high-frequency sampling
  }
  return 1000; // 1s baseline sampling
}
