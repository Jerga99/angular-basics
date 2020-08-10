

export class Resource {
  _id: string;
  title: string;
  description: string;
  link: string;
  type: string;

  constructor({_id = '', title = '', description = '', link = '', type = ''} = {}) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.link = link;
    this.type = type;
  }

  alertResource() {
    window.alert('Resource was alerted!');
  }
}
