var letter = prompt('Enter a letter');
var num = 1;

do {
  for (i = 0; i < num; i++) {
    document.write(letter);
  }
  document.write('<br>');
  num++;
} while (num <= 10);
