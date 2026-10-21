export interface MemorySample {
  timestamp: number;
  heapUsed: number;
  heapTotal: number;
}

export class MemoryProfiler {
  private samples: MemorySample[] = [];

  takeSample(): MemorySample {
    const s: MemorySample = {
      timestamp: Date.now(),
      heapUsed: 1024 * 1024 * 12,
      heapTotal: 1024 * 1024 * 32
    };
    this.samples.push(s);
    return s;
  }

  getSamples(): readonly MemorySample[] {
    return this.samples;
  }
}
