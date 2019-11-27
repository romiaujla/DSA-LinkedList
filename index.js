const LinkedList = require('./LinkedList');

function main(){

  const SLL = new LinkedList;
  console.log(`Linked List after initialization`, SLL.display());

  // Add items: Apollo, Boomer, Helo, Husker, Starbuck.
  // Add Tauhida to the list.
  // Remove Husker from the list.
  SLL.insertFirst('Husker');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Apollo');
  SLL.insertLast('Starbuck');
  console.log(`Displaying list after adding items\n`, SLL.display())
  SLL.insertLast('Tauhida');
  console.log(`Displaying list after adding Tauhida\n`, SLL.display())
  console.log(`Removing Husker from the list\n`, SLL.removeNodeUsingValue(`Husker`));
  
  // Add Athena before Boomer using your insertBefore() function.
  SLL.insertBefore('Boomer', 'Athena');
  console.log(`Adding Athena before Boomer\n`, SLL.display());
  
  // Add Hotdog after Helo using the insertAfter() method
  SLL.insertAfter(`Helo`, `Hotdog`);
  console.log(`Adding Hotdog after Helo\n`, SLL.display());
  
  // Using the insertAt() method insert Kat in the 3rd position of the list.
  SLL.insertAt(3, `Kat`);
  console.log(`Using the insertAt() method insert Kat in the 3rd position of the list.`, SLL.display());

  // Remove Tauhida from the list.
  console.log(`\nRemoving Tauhida from the list\n`, SLL.removeNodeUsingValue(`Tauhida`));


  SLL.reverseIteratively();
  console.log(`\n\nList after Reversing Iteratively\n`, SLL.display());

  SLL.reverseRecursively();
  console.log(`\n\nList after Reversing Recursively\n`, SLL.display());
  
  console.log(`\n\nThird Last Item in the list: `, SLL.thirdLastItem());
}

main();
