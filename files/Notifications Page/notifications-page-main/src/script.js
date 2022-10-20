const notificationPage = () => {
     
     const messages = document.querySelectorAll('.box');
     const activeMessages = document.querySelectorAll('.active');
     const activeDot = document.querySelectorAll('.material-icons');
     const readBtn = document.getElementById('read-btn');
     let messageCount = document.querySelector('.count');

     // let innerMessage = document.createElement('div');
     // innerMessage.className = 'inner-message';
     // innerMessage.innerHTML = "<p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>";


     activeMessages.forEach(message => {
          message.style.display = 'none';
     })

     // let ringtone = new Audio('../assets/ringtone/ringtone.mp3');
     // ringtone.loop = true;
     // ringtone.muted = true;
     // ringtone.play();
     // setTimeout(() => { ringtone.pause(); }, 15000);

     const newMessage = () => {
          setTimeout(() => {
               activeMessages[2].style.display = 'block';
               setTimeout(() => {
                    activeMessages[1].style.display = 'block';
                    setTimeout(() => {
                         activeMessages[0].style.display = 'block';
                         messageCount.style.backgroundColor = 'darkblue';
                         messageCount.innerHTML = activeMessages.length;
                    }, 1000);
               }, 1000);
          }, 1000);
     };

     readBtn.addEventListener('click', () => {
          activeMessages.forEach(message => {
               message.style.backgroundColor = 'ghostWhite';
               activeDot.forEach(dot => {
                    dot.style.display = 'none';
               })
               messageCount.style.display = 'none';
          })
     })

     newMessage();
}

notificationPage();