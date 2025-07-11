// Utility functions for text processing

/**
 * Strip HTML tags from content and return plain text
 */
export const stripHtmlTags = (html: string): string => {
  // Create a temporary div element to parse HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  
  // Get text content and clean up extra whitespace
  return tempDiv.textContent || tempDiv.innerText || '';
};

/**
 * Truncate text to specified length with ellipsis
 */
export const truncateText = (text: string, maxLength: number = 150): string => {
  if (text.length <= maxLength) return text;
  
  // Find the last space before the max length to avoid cutting words
  const truncated = text.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + '...';
  }
  
  return truncated + '...';
};

/**
 * Strip HTML and truncate in one function
 */
export const getCleanPreview = (htmlContent: string, maxLength: number = 150): string => {
  const plainText = stripHtmlTags(htmlContent);
  return truncateText(plainText, maxLength);
};