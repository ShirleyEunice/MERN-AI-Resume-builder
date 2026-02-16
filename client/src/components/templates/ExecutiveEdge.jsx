import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ExecutiveEdge = ({ data }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const SectionTitle = ({ children }) => (
    <h2 className="font-bold text-lg mt-6 mb-2 uppercase tracking-wide">
      {children}
    </h2>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 font-sans leading-relaxed">

      {/* HEADER */}
      <header className="mb-4">
        <h1 className="text-3xl font-bold">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="text-sm text-gray-700 mt-2 flex flex-wrap gap-x-4">
          {data.personal_info?.email && <span>{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.linkedin && <span>{data.personal_info.linkedin}</span>}
          {data.personal_info?.website && <span>{data.personal_info.website}</span>}
          {data.personal_info?.location && <span>{data.personal_info.location}</span>}
        </div>
      </header>

      {/* SUMMARY */}
      {data.professional_summary && (
        <section>
          <SectionTitle>Summary</SectionTitle>
          <p className="text-sm">{data.professional_summary}</p>
        </section>
      )}

      {/* EDUCATION */}
      {data.education?.length > 0 && (
        <section>
          <SectionTitle>Education</SectionTitle>

          {data.education.map((edu, i) => (
            <div key={i} className="mb-2 text-sm">
              <div className="flex justify-between">
                <strong>
                  {edu.institution}
                </strong>
                <span>
                  {formatDate(edu.start_date)} – {formatDate(edu.graduation_date)}
                </span>
              </div>

              <div>
                {edu.degree} {edu.field && `in ${edu.field}`}
                {edu.gpa && `, GPA: ${edu.gpa}`}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* SKILLS */}
      {Array.isArray(data.skills) && data.skills.length > 0 && (
        <section>
          <SectionTitle>Skills</SectionTitle>
          <p className="text-sm">{data.skills.join(", ")}</p>
        </section>
      )}

      {/* PROJECTS */}
      {data.projects?.length > 0 && (
        <section>
          <SectionTitle>Projects</SectionTitle>

          {data.projects.map((p, i) => (
            <div key={i} className="mb-3 text-sm">
              <strong>{p.name}</strong>
              {p.description && (
                <div className="mt-1 whitespace-pre-line">
                  {p.description}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* EXPERIENCE */}
      {data.experience?.length > 0 && (
        <section>
          <SectionTitle>Experience</SectionTitle>

          {data.experience.map((exp, i) => (
            <div key={i} className="mb-3 text-sm">
              <div className="flex justify-between">
                <strong>
                  {exp.company} | {exp.position}
                </strong>
                <span>
                  {formatDate(exp.start_date)} –{" "}
                  {exp.is_current ? "Present" : formatDate(exp.end_date)}
                </span>
              </div>

              {exp.description && (
                <div className="mt-1 whitespace-pre-line">
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ExecutiveEdge;