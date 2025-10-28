   //search popup box
   const searchbarClick = document.getElementById('search');
   const searchPopupBox = document.getElementById('popup-box-search');
 
   let isPopupOpen = false;

   searchbarClick.onclick = function () {
     searchPopupBox.style.display = 'block';
     isPopupOpen = true;
   };
   
   document.onclick = function (e) {
     // Only hide the box if it's open and the clicked target is NOT the icon or the popup box
     if (
        isPopupOpen &&
        e.target !== searchbarClick &&         // if searchbar not clicked
        !searchPopupBox.contains(e.target) // if pop up box not clicked
      ) {
        searchPopupBox.style.display = 'none';
        isPopupOpen = false;
      }
   };
 
 //upload popup box
  const toggleicon1 = document.getElementById('uploadvideo');
  const uploadPopupBox = document.getElementById('popup-box-upload');

  toggleicon1.addEventListener('mouseover', () => {
    uploadPopupBox.style.display = 'block'

  });
  toggleicon1.addEventListener('mouseleave', () => {
      if (!uploadPopupBox.matches(':hover')) {
        uploadPopupBox.style.display = 'none';
      }
  });
  
  uploadPopupBox.addEventListener('mouseleave', () => {
    uploadPopupBox.style.display = 'none';
  });

    //clock popup box
    const toggleicon2 = document.getElementById('clock');
    const clockPopupBox = document.getElementById('popup-box-clock');
  
    toggleicon2.addEventListener('mouseover', () => {
        clockPopupBox.style.display = 'block'
  
    });
    toggleicon2.addEventListener('mouseleave', () => {
        if (!clockPopupBox.matches(':hover')) {
            clockPopupBox.style.display = 'none';
        }
    });
    
    clockPopupBox.addEventListener('mouseleave', () => {
        clockPopupBox.style.display = 'none';
    });


       //bookmark popup box
       const toggleicon3 = document.getElementById('bookmark');
       const bookmarkPopupBox = document.getElementById('popup-box-bookmark');
     
       toggleicon3.addEventListener('mouseover', () => {
        bookmarkPopupBox.style.display = 'block'
     
       });
       toggleicon3.addEventListener('mouseleave', () => {
           if (!bookmarkPopupBox.matches(':hover')) {
            bookmarkPopupBox.style.display = 'none';
           }
       });
       
       bookmarkPopupBox.addEventListener('mouseleave', () => {
        bookmarkPopupBox.style.display = 'none';
       });

              //download popup box
       const toggleicon4 = document.getElementById('btn-download-app');
       const downloadappPopupBox = document.getElementById('popup-box-download');
     
       toggleicon4.addEventListener('mouseover', () => {
        downloadappPopupBox.style.display = 'block'
     
       });
       toggleicon4.addEventListener('mouseleave', () => {
           if (!downloadappPopupBox.matches(':hover')) {
            downloadappPopupBox.style.display = 'none';
           }
       });
       
       downloadappPopupBox.addEventListener('mouseleave', () => {
        downloadappPopupBox.style.display = 'none';
       });

                     //premium popup box
       const toggleicon5 = document.getElementById('btn-premium');
       const premiumappPopupBox = document.getElementById('popup-box-premium');
     
       toggleicon5.addEventListener('mouseover', () => {
        premiumappPopupBox.style.display = 'block'
     
       });
       toggleicon5.addEventListener('mouseleave', () => {
           if (!premiumappPopupBox.matches(':hover')) {
            premiumappPopupBox.style.display = 'none';
           }
       });
       
       premiumappPopupBox.addEventListener('mouseleave', () => {
        premiumappPopupBox.style.display = 'none';
       });


       //profile icon popup box
       const toggleicon6 = document.getElementById('profile-icon');
       const profileiconPopupBox = document.getElementById('popup-box-profile-icon');
     
       toggleicon6.addEventListener('mouseover', () => {
        profileiconPopupBox.style.display = 'block'
     
       });
       toggleicon6.addEventListener('mouseleave', () => {
           if (!profileiconPopupBox.matches(':hover')) {
            profileiconPopupBox.style.display = 'none';
           }
       });
       
       profileiconPopupBox.addEventListener('mouseleave', () => {
        profileiconPopupBox.style.display = 'none';
       });


