document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listMonth'
      },
      locale: 'es',
      initialDate: '2021-07-07',
      navLinks: true,
      businessHours: false, 
      editable: true,
      selectable: true,
      weekends:false,
      
      events: [
        {
          title: 'Photoshop Básico',
          start: '2021-07-07',
          
        },
        {
            title: 'Marketing Digital',
            start: '2021-07-16',
            
            color: '#fcba03'
        },
        {
            title: 'HTML5, CSS3 y Javascript',
            start: '2021-07-22',
            
            color: '#c873c9'         
        },
        {
            title: 'Wordpress',
            start: '2021-08-02',
           
            color: '#8ec973'
        },

        
      ]
    });
    
    
    calendar.render();
  });