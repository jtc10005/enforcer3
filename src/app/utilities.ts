export function ConvertTimeStampToJSDate(timestamp: any): Date {
  return timestamp ? new Date(timestamp.toDate()) : undefined;
};
