import { Request } from 'express';
declare const getHeader: (req: Request, name: string, defaultValue?: any) => string;
export default getHeader;
