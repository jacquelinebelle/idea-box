class Idea {
  constructor(id, title, body, quality = 'Swill') {
    this.id = id;
    this.title = title;
    this.body = body;
    this.quality = quality;
  }

  saveToStorage(){
    var stringIdeas = JSON.stringify(allIdeas);
    localStorage.setItem('stringIdeas', stringIdeas);
    //all Ideas - stringify and set to variable of stringed ideas
    //var for string ideas to localstorage
  }

  deleteFromStorage(){
    var index = allIdeas.indexOf(this);
    allIdeas.splice(index, 1);
    this.saveToStorage(allIdeas);
  }

  updateContent(){

  }
}
//function updateContent

//get localStorage 
//JSON parse
//pass back to main


///event.target to find id and exit



// updateQuality(){
//   var qualities = ['Swill', 'Plausible', 'Genius'];
// }