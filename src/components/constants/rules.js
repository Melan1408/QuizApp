export const rulesText = {
  required: (field) => `${field} is required!`,
  minLength: (lenght) => `At least ${lenght} characters`,
  maxLength: (lenght) => `Less than ${lenght} characters`,
};

export const quizRules = {
  quizName: {
    required: { value: true, message: rulesText.required('Quiz name') },
    minLength: { value: 3, message: rulesText.minLength(3) },
    maxLength: { value: 15, message: rulesText.maxLength(15) },
  },
  description: {
    required: { value: true, message: rulesText.required('Quiz Description') },
    minLength: { value: 20, message: rulesText.minLength(20) },
    maxLength: { value: 100, message: rulesText.maxLength(60) },
  },
  image: {
    required: { value: true, message: rulesText.required('Quiz image') },
  },
};
