import IPageInfo from './IPageInfo';
import IUser from './IUser';

interface IFindUsersPayload {
  users: IUser[];
  pageInfo: IPageInfo;
}

export default IFindUsersPayload;
