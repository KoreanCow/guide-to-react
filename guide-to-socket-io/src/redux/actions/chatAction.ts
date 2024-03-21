export const CHAT = 'CHAT';

export interface IChat {
  name: string;
  message: string;
}

export const chating = ({ name, message }: IChat) => ({
  type: CHAT,
  payload: { name, message }
})