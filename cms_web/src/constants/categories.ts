export const CATEGORIES = [
  { id: 1, name: 'Career Start', value: 'career-start' },
  { id: 2, name: 'Job Preparation', value: 'job-preparation' },
  { id: 3, name: 'Skill Development', value: 'skill-development' },
  { id: 4, name: 'Business Ideas', value: 'business-ideas' },
  { id: 5, name: 'History', value: 'history' },
  { id: 6, name: 'Geography', value: 'geography' },
  { id: 7, name: 'Technology', value: 'technology' },
  { id: 8, name: 'General Knowledge', value: 'general-knowledge' },
  { id: 9, name: 'Data Engineering', value: 'data-engineering' },
  { id: 10, name: 'Data Science', value: 'data-science' },
  { id: 11, name: 'Machine Learning', value: 'machine-learning' },
  { id: 12, name: 'Artificial Intelligence', value: 'artificial-intelligence' },
  { id: 13, name: 'Generative AI', value: 'generative-ai' },
] as const;

export type CategoryValue = typeof CATEGORIES[number]['value'];
