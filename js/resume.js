(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  var data = [{
    id: 'SKILLS',
    parent: '',
    name: 'Skills'
  }, {
    id: 'BI',
    parent: 'SKILLS',
    name: 'BI'
  }, {
    id: 'ML',
    parent: 'SKILLS',
    name: 'Machine Learning'
  }, {
    id: 'WEB',
    parent: 'SKILLS',
    name: 'Web'
  }, {
    id: 'MOBILE',
    parent: 'SKILLS',
    name: 'Mobile'
  }, {
    id: 'DEV-OPS',
    parent: 'SKILLS',
    name: 'DevOps'
  },

  /* Data Warehouse */
  {
    id: 'DW',
    parent: 'BI',
    name: 'Data Warehouse'
  },
  {
    id: 'DW-01',
    parent: 'DW',
    name: 'Star modeling',
    value: 5
  }, {
    id: 'DW-02',
    parent: 'DW',
    name: 'Snow flake modeling',
    value: 5
  }, {
    id: 'DW-03',
    parent: 'DW',
    name: 'Staging area',
    value: 5
  }, {
    id: 'DW-04',
    parent: 'DW',
    name: 'Data Engineering',
    value: 5
  },
  /* Tools */
  {
    id: 'BI-TOOLS',
    parent: 'BI',
    name: 'Tools'
  },
  {
    id: 'BI-TOOLS-01',
    parent: 'BI-TOOLS',
    name: 'Pentaho Data Integration',
    value: 5
  }, {
    id: 'BI-TOOLS-02',
    parent: 'BI-TOOLS',
    name: 'Pentaho Server',
    value: 5
  }, {
    id: 'BI-TOOLS-03',
    parent: 'BI-TOOLS',
    name: 'Pentaho Report',
    value: 5
  }, {
    id: 'BI-TOOLS-04',
    parent: 'BI-TOOLS',
    name: 'SQL',
    value: 5
  }, {
    id: 'BI-TOOLS-05',
    parent: 'BI-TOOLS',
    name: 'Relational SGBD',
    value: 5
  }, {
    id: 'BI-TOOLS-06',
    parent: 'BI-TOOLS',
    name: 'Column SGBD',
    value: 5
  },
  /* Tools */
  {
    id: 'VIS',
    parent: 'BI',
    name: 'Visualization'
  },
  {
    id: 'VIS-01',
    parent: 'VIS',
    name: 'Pentaho cTools',
    value: 5
  }, {
    id: 'VIS-02',
    parent: 'VIS',
    name: 'Google Charts and Maps',
    value: 5
  },
  {
    id: 'VIS-02',
    parent: 'VIS',
    name: 'Highcharts',
    value: 5
  },
  /* Machine Learning */
  {
    id: 'DM',
    parent: 'ML',
    name: 'Data Mining'
  },
  {
    id: 'DM-01',
    parent: 'DM',
    name: 'Weka',
    value: 5
  }, {
    id: 'DM-02',
    parent: 'DM',
    name: 'Python',
    value: 5
  },
  /* FRONT-END */
  {
    id: 'FRONT-END',
    parent: 'WEB',
    name: 'Front-end'
  },
  {
    id: 'FRONT-END-01',
    parent: 'FRONT-END',
    name: 'HTML',
    value: 5
  }, {
    id: 'FRONT-END-02',
    parent: 'FRONT-END',
    name: 'CSS',
    value: 5
  },
  {
    id: 'FRONT-END-03',
    parent: 'FRONT-END',
    name: 'JS (jquery, angular, vue)',
    value: 5
  },
  /* BACK-END */
  {
    id: 'BACK-END',
    parent: 'WEB',
    name: 'Back-end'
  },
  {
    id: 'BACK-END-01',
    parent: 'BACK-END',
    name: 'PHP',
    value: 5
  }, {
    id: 'BACK-END-02',
    parent: 'BACK-END',
    name: 'JAVA',
    value: 5
  },
  {
    id: 'BACK-END-03',
    parent: 'BACK-END',
    name: '.NET',
    value: 5
  },
  {
    id: 'BACK-END-04',
    parent: 'BACK-END',
    name: 'NodeJS',
    value: 5
  },
  {
    id: 'BACK-END-05',
    parent: 'BACK-END',
    name: 'API REST',
    value: 5
  },
  /* HYBRID */
  {
    id: 'HYBRID',
    parent: 'MOBILE',
    name: 'Hybrid APP\'s'
  },
  {
    id: 'HYBRID-01',
    parent: 'HYBRID',
    name: 'Ionic',
    value: 5
  },
  /* HYBRID */
  {
    id: 'CLOUD',
    parent: 'DEV-OPS',
    name: 'Cloud'
  },
  {
    id: 'CLOUD-01',
    parent: 'CLOUD',
    name: 'AWS',
    value: 5
  },
  {
    id: 'CLOUD-02',
    parent: 'CLOUD',
    name: 'Dig. Ocean',
    value: 5
  }];

  // Splice in transparent for the center circle
  Highcharts.getOptions().colors.splice(0, 0, 'transparent');


  Highcharts.chart('container', {

    chart: {
      height: '100%'
    },

    title: {
      text: 'Skills per concept and technologies'
    },
    subtitle: {
      text: ''
    },
    credits: {
      text: ''
    },
    series: [{
      type: "sunburst",
      data: data,
      allowDrillToNode: true,
      cursor: 'pointer',
      dataLabels: {
        format: '{point.name}',
        filter: {
          property: 'innerArcLength',
          operator: '>',
          value: 16
        }
      },
      levels: [{
        level: 1,
        levelIsConstant: false,
        dataLabels: {
          filter: {
            property: 'outerArcLength',
            operator: '>',
            value: 64
          }
        }
      }, {
        level: 2,
        colorByPoint: true
      },
      {
        level: 3,
        colorVariation: {
          key: 'brightness',
          to: -0.5
        }
      }, {
        level: 4,
        colorVariation: {
          key: 'brightness',
          to: 0.5
        }
      }]

    }],
    tooltip: {
      headerFormat: "",
      pointFormat: 'Experince in <b>{point.name}</b></b>'
    }
  });

})(jQuery); // End of use strict
