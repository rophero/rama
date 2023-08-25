document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById
    ("downloadButton");
    downloadButton.addEventListener("click", function() {
        const cvPath = "JURNAL AXIOO CLASS PROGRAM.docx";

        const link = document.createElement("a");
        link.href =cvPath;

        link.download = "Verro_CV.jpg";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    });
});