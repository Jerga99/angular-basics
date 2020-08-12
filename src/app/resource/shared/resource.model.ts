

export class ResourceAlert {
  success: string;
  error: string;
}

export class Resource {

  static readonly types = ['book', 'video', 'blog'];

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
}
