(function($) {
    "use strict"; // Start of use strict


    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
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
    $('.js-scroll-trigger').click(function() {
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
            id: 'DATA-SCIENCE',
            parent: 'SKILLS',
            name: 'DATA SCIENCE'
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
            parent: 'DATA-SCIENCE',
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
            parent: 'DATA-SCIENCE',
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
        }, {
            id: 'BI-TOOLS-07',
            parent: 'BI-TOOLS',
            name: 'Data Factory',
            value: 5
        }, {
            id: 'BI-TOOLS-08',
            parent: 'BI-TOOLS',
            name: 'Synapses',
            value: 5
        },
        /* Tools */
        {
            id: 'VIS',
            parent: 'DATA-SCIENCE',
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
        {
            id: 'VIS-02',
            parent: 'VIS',
            name: 'Power BI',
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
        }, {
            id: 'DM-03',
            parent: 'DM',
            name: 'Pytorch',
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
            name: 'Django',
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
        {
            id: 'HYBRID-02',
            parent: 'HYBRID',
            name: 'Flutter',
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
        }
    ];

    // Splice in transparent for the center circle
    Highcharts.getOptions().colors.splice(0, 0, 'transparent');


    Highcharts.chart('container-skills', {

        chart: {
            height: '100%'
        },

        title: {
            text: 'Skills per concept and technologies'.toUpperCase()
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
                }
            ]

        }],
        tooltip: {
            headerFormat: "",
            pointFormat: 'Experince in <b>{point.name}</b></b>'
        }
    });

    Highcharts.chart('container-timeline-first-part', {
        chart: {
            type: 'timeline'
        },
        accessibility: {
            screenReaderSection: {
                beforeChartFormat: '<h5>{chartTitle}</h5>' +
                    '<div>{typeDescription}</div>' +
                    '<div>{chartSubtitle}</div>' +
                    '<div>{chartLongdesc}</div>' +
                    '<div>{viewTableButton}</div>'
            },
            point: {
                valueDescriptionFormat: '{index}. {point.label}. {point.description}.'
            }
        },
        xAxis: {
            visible: false
        },
        yAxis: {
            visible: false
        },
        title: {
            text: 'Timeline of Experience'.toUpperCase()
        },
        subtitle: {
            text: 'Education and profissional experience between 2007 to 2015'
        },
        credits: {
            text: ''
        },
        colors: [
            '#727f8c',
            '#697581',
            '#606b76',
            '#4e5760',
            '#3d444b',
            '#2b3035',
            '#111315',
            '#08090A'
        ],
        series: [{
            data: [{
                name: 'Initiate BSC',
                label: '2007: Mato Grosso do Sul/UFMS',
                description: ''
            }, {
                name: 'First contact with DW/Pentaho',
                label: '2008: Member of WebPide Project (UFMS/UFSCAR)',
                description: ''
            }, {
                name: 'First experience as Data Engineer and Data Analyst',
                label: '2009: Starts to work professional remotelly',
                description: ''
            }, {
                name: 'Research RDF',
                label: '2011: Finish BSC and initiate the MSC researching RDF at Rio de Janeiro/PUC-Rio',
                description: ''
            }, {
                name: 'Full time remotelly',
                label: '2012: Stop the MSC and return to work professionally remotelly and in full time to São Paulo/IT4BIZ',
                description: ''
            }, {
                name: 'Starts to research Data Science',
                label: '2013: Return to MSC researching data science at Mato Grosso do Sul/UFMS',
                description: ''
            }, {
                name: 'Experience working with large companies',
                label: '2012 to 2015: Globosat/Passarela Calçados/Hamburg Süd/MEC',
                description: ''
            }, {
                name: 'BovBI',
                label: '2016: Finish MSC, IT4BIZ move to Spain and BovBI is created',
                description: ''
            }]
        }]
    });

    Highcharts.chart('container-timeline-second-part', {
        chart: {
            type: 'timeline'
        },
        accessibility: {
            screenReaderSection: {
                beforeChartFormat: '<h5>{chartTitle}</h5>' +
                    '<div>{typeDescription}</div>' +
                    '<div>{chartSubtitle}</div>' +
                    '<div>{chartLongdesc}</div>' +
                    '<div>{viewTableButton}</div>'
            },
            point: {
                valueDescriptionFormat: '{index}. {point.label}. {point.description}.'
            }
        },
        xAxis: {
            visible: false
        },
        yAxis: {
            visible: false
        },
        title: {
            text: 'Timeline of Experience'.toUpperCase()
        },
        subtitle: {
            text: 'Profissional experience between 2016 to 2021'
        },
        credits: {
            text: ''
        },
        colors: [
            '#727f8c',
            '#697581',
            '#606b76',
            '#4e5760',
            '#3d444b',
            '#2b3035',
            '#111315',
            '#08090A'
        ],
        series: [{
            data: [{
                name: 'BovBI realease your first Business Intelligence portal',
                label: '2016: Project with Novilho Precoce MS Association(ASPNP)',
                description: ''
            }, {
                name: 'BovBI realease your first ERP',
                label: '2018: Starts to develop ERP solutions to Novilho Precoce to manage the cattle slaughter',
                description: ''
            }, {
                name: 'As a consultant starts to work outside the agribusiness',
                label: '2019: As a consultant is realeased the Business Intelligence portal of V2V (Rio de Janeiro)',
                description: ''
            }, {
                name: 'BovBI realease your second ERP',
                label: '2020: Starts to develop ERP solutions (financial and zootechnician) to Produção Rural company',
                description: ''
            }, {
                name: 'BovBI realease your third ERP',
                label: '2020: Starts to develop ERP solutions (financial and zootechnician) to Agropecuária Solo Mio company',
                description: ''
            }, {
                name: 'As a employee starts to work at Plange',
                label: '2022: Supervisor of Data Science and Data Analytics',
                description: ''
            }, ]
        }]
    });

    const now = new Date();
    $("#footer-credits").append(now.getFullYear() + " - ©Fernando Maia da Mota ");


})(jQuery); // End of use strict