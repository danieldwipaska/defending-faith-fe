export const parseCreatedAt = (createAt: any) => {
  const date = new Date(createAt);
  return date.toDateString();
};

export const parseCreatedAtTime = (createdAt: any) => {
  const date = new Date(createdAt);
  return date.toLocaleTimeString();
};
