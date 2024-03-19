// export const POST = 'POST'; -> 이런식으로 해도 되는데 나중에 
// 유지보수 및 액션 추가할 때 쉽게 추가가 가능함
export enum ActionTypes {
  POST = 'POST'
}

export interface IPost {
  id: string;
  title: string;
  contents: string;
}

export const posting = ({ id, title, contents }: IPost) => ({
  type: ActionTypes.POST,
  payload: { id, title, contents }
})