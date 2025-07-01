function combineArrays(str, ...arrays) {
    const combined = [str];
    for (const arr of arrays) {
      combined.push(...arr);
    }
    return combined;
  }
