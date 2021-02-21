/**
     * Data table 
     */
$('#dataTable1').DataTable({
    // "ordering": false,
    "ordering": true,
    "paging": false,
    "info": false,
    // "aLengthMenu": [
    //     [25, 50, 75, -1],
    //     [25, 50, 75, "All"]
    // ],
    // "iDisplayLength": 50,
    "dom": 'Bfrtip',
    "buttons": [
        // 'copy', 'csv', 'excel', 'pdf', 'print' 
        {
            extend: "copy",
            className: "btn btn-sm btn-outline-info"
        },
        {
            extend: "csv",
            className: "btn btn-sm btn-outline-info"
        },
        {
            extend: "excel",
            className: "btn btn-sm btn-outline-info"
        },
        {
            extend: "pdf",
            className: "btn btn-sm btn-outline-info"
        }
        // {
        //     extend: "print",
        //     className: "btn btn-sm btn-outline-info"
        // },
    ],

});
$('.btn-secondary').removeClass('btn-secondary');