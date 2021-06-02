class GotObjects{
  
  constructor(){
    this.baseUrl = 'https://anapioficeandfire.com/api/'
  }
  async getObject(objType, id){
    let type = '';
    switch(objType){
      case 'character':
        type = 'characters';
        break;
      case 'house':
        type = 'houses';
        break;
      case 'book':
        type = 'books';
        break;
    }
    const res = await fetch(`${this.baseUrl}${type}/${id}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}. Status: ${res.status}`)
    }
    return await res.json();
  }
}

const characters = new GotObjects();
characters.getObject('book', 1)
.then(character => console.log(character));