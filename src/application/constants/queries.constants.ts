export interface QueryData {
  totalItems: number;
  result: any[];
}

export const normalizeData = (data: any): QueryData => {
  const apiDataNode = "hydra:member";
  const apiTotalItems = "hydra:totalItems";

  const res: QueryData = {
    totalItems: data[apiTotalItems] ?? -1,
    result: data[apiDataNode] ?? [],
  };

  return res;
};
