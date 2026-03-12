export const sum = (list: number[]) => list.reduce((acc, num) => acc + num);

export const product = (list: number[]) => list.reduce((acc, num) => acc * num);

export const average = (list: number[]) => sum(list) / list.length;

export const median = (list: number[]) => {
  const evenDataset = list.length % 2 == 0;
  const index = Math.floor(list.length / 2);

  return evenDataset ? (list[index] + list[index - 1]) / 2 : list[index];
};
