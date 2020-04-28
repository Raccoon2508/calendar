export interface EventBase {
  users: { name: string, id: number }[];
  usersEvents: {userID: number, eventID: number }[];
  events: {
      comment: string,
      day: number,
      id: number,
      month: number,
      priority: string,
      timeFrom: string,
      timeTo: string,
      title: string,
      userId: number,
      year: number
  }[];
}

export class MyEvent {
  public id: number = 0;
  public userId: number = 0;
  public year: number = 0;
  public month: number = 0;
  public day: number = 0;
  public timeFrom: string = '';
  public timeTo: string = '';
  public title: string = '';
  public comment: string = '';
  public priority: string = '';
}

export interface EventUser {
  userID: number;
  eventID: number;
}

export interface User {
  userName: string;
  userId: number;
}