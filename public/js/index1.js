document.getElementById('edit-btn').addEventListener('click', function() {
    const edit = document.getElementById('edit');
    edit.classList.toggle('hidden');
  });
  
  //.................Close the dropdown if clicking outside of it................//
  document.addEventListener('click', function(event) {
    const edit = document.getElementById('edit');
    const button = document.getElementById('edit-btn');
    
    //...............Check if the click was outside the dropdown and the button...................//
    if (!edit.contains(event.target) && !button.contains(event.target)) {
      edit.classList.add('hidden'); 
    }
  });















//...................................dashboard dropdown menu start..........................//
const dropdownMenu = document.getElementById('dropdownMenu');
const toggleButton = document.getElementById('dropdownTrigger');
console.log(toggleButton);

//.......................Add click event listener to each button
toggleButton.addEventListener('click', (event) => {
  event.stopPropagation();
  dropdownMenu.classList.toggle('hidden');
});

// Optional: Close the dropdown if clicking outside of it
window.addEventListener('click', (event) => {
  if (!dropdownMenu.contains(event.target) && !toggleButton.contains(event.target)) {
    dropdownMenu.classList.add('hidden');
  }
});
//..................................dashboard dropdown menu end............................//

//.................................forms dropdown menu.........................//
const dropdownMenu1 = document.getElementById('dropdownMenu1');
const toggleButton1 = document.getElementById('dropdownTrigger1');

toggleButton1.addEventListener('click', (event) => {
  event.stopPropagation();
  dropdownMenu1.classList.toggle('hidden');
});

// Close the dropdown if clicking outside of it
//window.addEventListener('click', (event) => {
  //if (!dropdownMenu1.contains(event.target) && !toggleButton1.contains(event.target)) {
    //dropdownMenu1.classList.add('hidden');
  //}
//});
//...............................forms dropdown menu...................//







document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function(item) {
  item.addEventListener('click', function(e) {
      e.preventDefault()
      const parent = item.closest('.sidebar-dropdown-toggle')
      const child = item.closest('.sidebar-dropdown-toggle-child')
      if (parent.classList.contains('selected')) {
        console.log("eee");
          parent.classList.remove('selected')
          document.querySelectorAll('.sidebar-dropdown-toggle-child').forEach(function(i) {
              i.closest('.sidebar-dropdown-toggle-child').classList.add('hidden')
          });
      } else {
          document.querySelectorAll('.sidebar-dropdown-toggle-child').forEach(function(i) {
              i.closest('.sidebar-dropdown-toggle-child').classList.remove('hidden')
          });
          parent.classList.add('selected')
      }
  })
})










//...................edit buton dropdown begin....................//
document.getElementById('edit-btn').addEventListener('click', function() {
  const edit = document.getElementById('edit');
  edit.classList.toggle('hidden');
});

 //.................Close the dropdown if clicking outside of it................//
 document.addEventListener('click', function(event) {
  const edit = document.getElementById('edit');
  const button = document.getElementById('edit-btn');
  
  //...............Check if the click was outside the dropdown and the button...................//
  if (!edit.contains(event.target) && !button.contains(event.target)) {
    edit.classList.add('hidden'); 
  }
});
//...................edit button dropdown end.................................//
