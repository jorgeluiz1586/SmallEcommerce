interface IQuery {
  select: string[];
  where: string;
  orderBy: string[];
  limit: number;
  before: string;
  after: string;
}

export default IQuery;
