//.....................................start left sidebar..............//

//const sidebarToggle = document.querySelector('.sidebar-toggle')
//const aside = document.querySelector('.aside')
//const sidebarMenu = document.querySelector('.sidebar-menu')
//const main = document.querySelector('.main')

//if(window.innerWidth < 768) {
    //main.classList.toggle('active')
    //sidebarOverlay.classList.toggle('hidden')
    //sidebarMenu.classList.toggle('-translate-x-full')
//}

//sidebarMenu.addEventListener('click', function(e) {
    //e.preventDefault()
    //main.classList.toggle('active')
    //aside.classList.toggle('hidden')
    //sidebarMenu.classList.toggle('-translate-x-full')
//});


//...................................sidebar dropdown menu start..........................//
document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function(item) { 
  item.addEventListener('click', function(e) {
    e.preventDefault();
    
    const parent = item; // The clicked item is the parent
    const child = parent.nextElementSibling; // Assuming the child dropdown is the next sibling

    if (parent.classList.contains('selected')) {
      parent.classList.remove('selected');
      child.classList.add('hidden'); // Hide the child
    } else {
      // First hide all dropdowns
      document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function(i) {
        i.classList.remove('selected'); // Remove selected class from all
        const siblingChild = i.nextElementSibling; // Get the corresponding child
        if (siblingChild) {
          siblingChild.classList.add('hidden'); // Hide all children
        }
      });

      parent.classList.add('selected'); // Add selected class to the clicked parent
      child.classList.remove('hidden'); // Show the corresponding child
    }
  });
});
//...............................end sidebar dropdown menu...................//


//..................................start notifications dropdown...........//
document.getElementById('notification-btn').addEventListener('click', function() {
  const notification = document.getElementById('notification');
  notification.classList.toggle('hidden');
});
//................Close the dropdown if clicking outside of it................//
document.addEventListener('click', function(event) {
  const notification = document.getElementById('notification');
  const button = document.getElementById('notification-btn');
  
   //....Check if the click was outside the dropdown and the button
  if (!notification.contains(event.target) && !button.contains(event.target)) {
    notification.classList.add('hidden'); // Hide the dropdown
  }
});

//.................................stop notification dropdown........................//


//................................start message dropdown..................//
document.getElementById('message-btn').addEventListener('click', function() {
  const message = document.getElementById('message');
  message.classList.toggle('hidden');
});

//.................Close the dropdown if clicking outside of it................//
document.addEventListener('click', function(event) {
  const message = document.getElementById('message');
  const button = document.getElementById('message-btn');
  
  //...............Check if the click was outside the dropdown and the button...................//
  if (!message.contains(event.target) && !button.contains(event.target)) {
    message.classList.add('hidden'); 
  }
});

//................................stop message dropdown.................//

//................................start profile button drropdown..............//
document.getElementById('user-btn').addEventListener('click', function(event) {
  const user = document.getElementById('user');
  user.classList.toggle('hidden');
  event.stopPropagation();
});

//................closing the dropdown if clicking outside of it...................//
document.addEventListener('click', function(event) {
  const user = document.getElementById('user');
  const button = document.getElementById('user-btn');

  //............Check if the click was outside the dropdown and the button..........//
  if (!user.contains(event.target) && !button.contains(event.target)) {
    user.classList.add('hidden');
  }
});
//..................stop profile button dropdown....................//


//...................dark mode enable function.....................//
const toggleCheckbox = document.getElementById('dark-mode-checkbox');
const toggleSlider = document.getElementById('toggle-slider');
const body = document.body;

toggleCheckbox.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  }
});

//......Load preference from localStorage
const savedDarkMode = localStorage.getItem('darkMode') === 'true';
toggleCheckbox.checked = savedDarkMode;
if (savedDarkMode) {
  body.classList.add('dark');
}




//...................edit buton dropdown begin....................//
// document.getElementById('edit-btn').addEventListener('click', function() {
//   const edit = document.getElementById('edit');
//   edit.classList.toggle('hidden');
// });

//  //.................Close the dropdown if clicking outside of it................//
//  document.addEventListener('click', function(event) {
//   const edit = document.getElementById('edit');
//   const button = document.getElementById('edit-btn');
  
//   //...............Check if the click was outside the dropdown and the button...................//
//   if (!edit.contains(event.target) && !button.contains(event.target)) {
//     edit.classList.add('hidden'); 
//   }
// });
//...................edit button dropdown end.................................//



//...................Begin popper.................................//
const popperInstance = {}
document.querySelectorAll('.dropdown-div').forEach(function(item, index) {
    const popperId = 'popper-' + index
    const toggle = item.querySelector('.dropdown-toggle')
    const menu = item.querySelector('.dropdown-menu')
    menu.dataset.popperId = popperId
    popperInstance[popperId] = Popper.createPopper(toggle, menu, {
        modifiers: [{
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
            {
                name: 'preventOverflow',
                options: {
                    padding: 24,
                }
            }
        ],
        placement: 'bottom-end'
    });
})


document.addEventListener('click', function(e) {
    const toggle = e.target.closest('.dropdown-toggle')
    const menu = e.target.closest('.dropdown-menu')
    if (toggle) {
        const menuEl = toggle.closest('.dropdown-div').querySelector('.dropdown-menu')
        const popperId = menuEl.dataset.popperId
        if (menuEl.classList.contains('hidden')) {
            hideDropdown()
            menuEl.classList.remove('hidden')
            showPopper(popperId)
        } else {
            menuEl.classList.add('hidden')
            hidePopper(popperId)
        }
    } else if (!menu) {
        hideDropdown()
    }
})

function hideDropdown() {
    document.querySelectorAll('.dropdown-menu').forEach(function(item) {
        item.classList.add('hidden')
    })
}

function showPopper(popperId) {
    popperInstance[popperId].setOptions(function(options) {
        return {
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: true },
            ],
        }
    });
    popperInstance[popperId].update();
}

function hidePopper(popperId) {
    popperInstance[popperId].setOptions(function(options) {
        return {
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: false },
            ],
        }
    });
}
//...................End Popper.................................//


//....................start tab for featured campaigns..................................//
document.querySelectorAll('[data-tab]').forEach(function(item) {
  item.addEventListener('click', function(e) {
      e.preventDefault()
      const tab = item.dataset.tab
      const page = item.dataset.tabPage
      const target = document.querySelector('[data-tab-for="' + tab + '"][data-page="' + page + '"]')

      document.querySelectorAll('[data-tab="' + tab + '"]').forEach(function(i) {
          i.classList.remove('active')
      })
      document.querySelectorAll('[data-tab-for="' + tab + '"]').forEach(function(i) {
          i.classList.add('hidden')
      })
      item.classList.add('active')
      target.classList.remove('hidden')
  })
})
//........................end tab for featured campaigns............................//

