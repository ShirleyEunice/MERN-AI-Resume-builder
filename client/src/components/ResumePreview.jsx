import ModernTemplate from "../components/templates/ModernTemplate";
import MinimalTemplate from "../components/templates/MinimalTemplate";
import MinimalImageTemplate from "../components/templates/MinimalImageTemplate";
import ClassicTemplate from "../components/templates/ClassicTemplate";
import ProfessionalSplit from "../components/templates/ProfessionalSplit";
import ExecutiveEdge from "../components/templates/ExecutiveEdge";

const ResumePreview = ({data, template, accentColor, classes = ""}) => {
    const renderTemplate = () => {
      switch (template) {
        case "modern":
          return <ModernTemplate data={data} accentColor={accentColor} />;
        case "minimal":
          return <MinimalTemplate data={data} accentColor={accentColor} />;
        case "minimal-image":
          return (
            <MinimalImageTemplate data={data} accentColor={accentColor} />
          );
        case "professional-split":
          return (
            <ProfessionalSplit data={data} accentColor={accentColor} />
          );
        case "executive-edge":
          return (
            <ExecutiveEdge data={data} accentColor={accentColor} />
          );
        default:
          return <ClassicTemplate data={data} accentColor={accentColor} />;
      }
    };
  return (
    <div className="w-full bg-gray-100">
      <div
        className={
          "w-full max-w-[850px] bg-white border border-gray-200 print:shadow-none print:border-none " +
          classes
        }
        id="resume-preview"
      >
        {renderTemplate()}
      </div>
      <style>
        {`
          @page {
            size: letter;
            margin: 0;
          }
          @media print {
            html,
            body {
              width: 8.5in;
              height: 11in;
              overflow: hidden;
            }
            body * {
              visibility: hidden;
            }
            #resume-preview,
            #resume-preview * {
              visibility: visible;
            }
            #resume-preview {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: auto;
              margin: 0;
              padding: 0;
              box-shadow: none !important;
              border: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ResumePreview