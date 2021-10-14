export class PersonData {
  private _id: number;
  private _name: string;
  private _message: string;

  constructor(iD: number, name: string, message: string) {
    this._id = iD;
    this._name = name;
    this._message = message;
  }

  public get getName(): string {
    return this._name;
  }

  public get getMessages(): string {
    return this._message;
  }

  public get getId(): number {
    return this._id;
  }

  public set setName(newName: string) {
    this._name = newName;
  }

  public set setId(newId: number) {
    this._id = newId;
  }

  public set setMessage(newMessage: string) {
    this._message = newMessage;
  }
  /*
  public addMessage(newMessage: string, personId: number) {
    if (this._id === personId) {
      this._message.push(newMessage);
    }
  }
  */
}
