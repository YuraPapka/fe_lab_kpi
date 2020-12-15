
export const getRequest = (url: string) => fetch(url).then((res: any) => res.json());
