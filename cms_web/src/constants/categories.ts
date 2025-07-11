export const CATEGORIES = [
  { id: 1, name: 'History', value: 'history' },
  { id: 2, name: 'Geography', value: 'geography' },
  { id: 3, name: 'Technology', value: 'technology' },
  { id: 4, name: 'General Knowledge', value: 'general-knowledge' },
  { id: 5, name: 'Data Engineering', value: 'data-engineering' },
  { id: 6, name: 'Data Science', value: 'data-science' },
  { id: 7, name: 'Machine Learning', value: 'machine-learning' },
  { id: 8, name: 'Artificial Intelligence', value: 'artificial-intelligence' },
] as const;

export type CategoryValue = typeof CATEGORIES[number]['value'];