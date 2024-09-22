export const formatResponseAsHTML = (response: string): string => {
  return response
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/(?:\r\n|\r|\n)/g, '<br/>')
    .replace(/\*/g, '•');
};
