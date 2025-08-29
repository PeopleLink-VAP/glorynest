// Utility function to get a random sparrow icon with low probability for animated GIFs
export const getSparrowIcon = (): string => {
  const random = Math.random();
  
  // 85% chance for static PNG, 15% total for animated GIFs (5% each)
  if (random < 0.85) {
    return '/icons/sparrow.png';
  } else if (random < 0.90) {
    return '/icons/sparrow1.gif';
  } else if (random < 0.95) {
    return '/icons/sparrow2.gif';
  } else {
    return '/icons/sparrow3.gif';
  }
};

// For components that need consistent sparrow icons during their lifecycle
export const getConsistentSparrowIcon = (): string => {
  return getSparrowIcon();
};