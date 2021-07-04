document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listMonth'
      },
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
          end: '2021-07-16'
        },
        {
            title: 'Marketing Digital',
            start: '2021-07-16',
            end: '2021-07-31', 
            color: '#fcba03'
        },
        {
            title: 'HTML5, CSS3 y Javascript',
            start: '2021-07-25',
            end: '2021-08-10',
            color: '#c873c9'         
        },
        {
            title: 'Wordpress',
            start: '2021-08-01',
            end: '2021-08-15',
            color: '#8ec973'
        },

        
      ]
    });
    
    
    calendar.render();
  });