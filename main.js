const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the filename: ', (filename) => {
  rl.question('Enter the word to remove: ', (word) => {
    const fs = require('fs');
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter the filename: ', (filename) => {
      rl.question('Enter the word to remove: ', (word) => {
        try {
          const content = fs.readFileSync(filename, 'utf8');
          const updated = content.split(word).join('');
          fs.writeFileSync(filename, updated, 'utf8');
          console.log(`All occurrences of "${word}" removed from ${filename}`);
        } catch (err) {
          console.error('Error:', err.message);
        }
        rl.close();
      });
    });
    rl.close();
  });
});
