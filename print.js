// print.js

function printPage() {
    // Create a new window
    const printWindow = window.open('', '', 'height=600,width=800');
    
    // Get the content you want to print
    const printableContent = document.querySelector('.task-list').outerHTML;

    // Add the content to the new window
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('<style>@media print { body { font-family: Arial, sans-serif; } }</style>'); // Add your print styles here
    printWindow.document.write('</head><body >');
    printWindow.document.write(printableContent);
    printWindow.document.write('</body></html>');

    printWindow.document.close(); // Close the document for writing
    printWindow.focus(); // Focus on the new window
    printWindow.print(); // Trigger the print dialog
}
