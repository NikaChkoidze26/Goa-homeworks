function printerError(s) {
    const errors = [...s].filter(ch => ch > 'm').length;
    return `${errors}/${s.length}`;
  }
  