class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }
}

var post1 = new Post(01, "Test title lama", "Ini konten");

console.log(post1);

post1.updateTitle("Test title baru");
console.log(post1);
