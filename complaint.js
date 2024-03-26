document.getElementById('complaintForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Handle form submission here
    // You can send the form data to a server using AJAX if needed

    // Show a success message
    document.getElementById('response').innerText = 'Form submitted successfully!';
});

document.getElementById('downloadPDF').addEventListener('click', function() {
    // Gather form data
    const machineSerialNo = document.getElementById('machineSerialNo').value;
    const customerName = document.getElementById('customerName').value;
    const projectName = document.getElementById('projectName').value;
    const projectLocation = document.getElementById('projectLocation').value;
    const salesPerson = document.getElementById('salesPerson').value;
    const natureOfComplaint = document.getElementById('natureOfComplaint').value;
    const unitModel = document.getElementById('unitModel').value;
    const departmentOfComplaint = document.getElementById('departmentOfComplaint').value;
    const priority = document.getElementById('priority').value;
    const contactNo = document.getElementById('contactNo').value;
    const informationDate = document.getElementById('informationDate').value;
    const complaintAttendedDate = document.getElementById('complaintAttendedDate').value;
    const completionDate = document.getElementById('completionDate').value;
    const resolution = document.getElementById('resolution').value;

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set font size and text
    doc.setFontSize(12);
    doc.text(20, 20, 'Service Complaint Details');

    // Add form data to PDF
    doc.text(20, 30, 'Machine Serial No: ' + machineSerialNo);
    doc.text(20, 40, 'Customer Name: ' + customerName);
    doc.text(20, 50, 'Project Name: ' + projectName);
    doc.text(20, 60, 'Project Location: ' + projectLocation);
    doc.text(20, 70, 'Sales Person: ' + salesPerson);
    doc.text(20, 80, 'Nature of Complaint: ' + natureOfComplaint);
    doc.text(20, 90, 'Unit Model: ' + unitModel);
    doc.text(20, 100, 'Department of Complaint: ' + departmentOfComplaint);
    doc.text(20, 110, 'Priority: ' + priority);
    doc.text(20, 120, 'Contact No: ' + contactNo);
    doc.text(20, 130, 'Information Date: ' + informationDate);
    doc.text(20, 140, 'Complaint Attended Date: ' + complaintAttendedDate);
    doc.text(20, 150, 'Completion Date: ' + completionDate);
    doc.text(20, 160, 'Resolution of the Complaint: ' + resolution);



    // Save the PDF with a filename
    doc.save('complaint_details.pdf');
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbwXmZTzfjVrFB3puRYjz3qWV0Q0XI_f1xO4Jgu56yTviFx8fDfarR1W3t4ugafmrFXtag/exec';
const form = document.forms['complaintForm'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
});