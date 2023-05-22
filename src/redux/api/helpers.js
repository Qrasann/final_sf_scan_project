export const getObjectSearchTotal = (totalDocuments) => {
  if (!totalDocuments) return 0;

  return totalDocuments.reduce((sum, { value }) => (sum += value), 0);
};

export const reduceHistogramsByDate = (data) => {
  const totalDocuments = data?.data[0]?.data;
  const riskFactors = data?.data[1]?.data;

  if (!totalDocuments || !riskFactors) return [];

  const result = totalDocuments
    .reduce((dataArr, { date, value }, i) => {
      const item = {
        date: Date.parse(date),
        totalDocuments: value,
        riskFactors: riskFactors[i]?.value || 0,
      };

      dataArr.push(item);

      return dataArr;
    }, [])
    .sort(({ date: dateA }, { date: dateB }) => dateA - dateB);

  return result;
};
