const RemoveDuplicate = (data: any) => {
  let unique: any[] = [];
  data?.forEach((element: any) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
};
export default RemoveDuplicate;
