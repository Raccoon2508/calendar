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

export interface MyEvent {
  id: number;
  userId: number;
  year: number;
  month: number;
  day: number;
  timeFrom: string;
  timeTo: string;
  title: string;
  comment: string;
  priority: string;
}

export interface EventUser {
  userID: number;
  eventID: number;
}
