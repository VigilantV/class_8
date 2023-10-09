const downloadFile = (file) => {
    const aTag = document.createElement("a");
    aTag.href = file;
    aTag.setAttribute("download", "Mehrab_Gheibi_Resume");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
};

export default downloadFile;