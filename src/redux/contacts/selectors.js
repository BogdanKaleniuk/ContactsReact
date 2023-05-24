<<<<<<< HEAD
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.contacts.filter;
=======
export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;
>>>>>>> 464a808e06d48a53626d4cca498559177f0981db
