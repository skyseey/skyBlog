import FilePDF from "./FilePDF";
import "./FilePDF.scss";
const ViewPdf = () => {
  return (
    <div className="viewPdfStyle">
      <FilePDF filePath="/黄天2024.pdf" />
    </div>
  );
};

export default ViewPdf;
