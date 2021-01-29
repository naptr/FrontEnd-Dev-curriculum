function print(txt) {
  console.log(txt);
}

function isKucing(animal) {
  if (animal == "Kucing") {
    print(animal + " itu mengeong")
  } else {
    print("bukan Kucing")
  }
}

isKucing("Kucing");
isKucing("Ayam");
