import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ProfessionalSplit = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 font-sans p-6">
      {/* HEADER */}
      <header className="border-b pb-6">
        <h1
          className="text-4xl font-bold tracking-wide"
          style={{ color: accentColor }}
        >
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm mt-3 text-gray-600">
          {data.personal_info?.email && <span>{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.location && (
            <span>{data.personal_info.location}</span>
          )}
        </div>
      </header>

      <div className="py-8">
        {/* SUMMARY */}
        {data.professional_summary && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold uppercase tracking-wide mb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* EXPERIENCE */}
        {data.experience?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold uppercase tracking-wide mb-4">
              Professional Experience
            </h2>

            {data.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.position}</h3>
                    <p style={{ color: accentColor }} className="font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-sm text-gray-500">
                    {formatDate(exp.start_date)} -{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>

                <div className="mt-3 text-gray-700 whitespace-pre-line">
                  {exp.description}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* PROJECTS */}
        {Array.isArray(data.projects) && data.projects.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold uppercase tracking-wide mb-4">
              Projects
            </h2>

            {data.projects.map((proj, index) => (
              <div key={index} className="mb-5">
                <h3 className="font-semibold text-gray-900">{proj.name}</h3>

                {proj.description && (
                  <p className="text-gray-700 text-sm mt-2 whitespace-pre-line">
                    {proj.description}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* EDUCATION */}
        {data.education?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold uppercase tracking-wide mb-4">
              Education
            </h2>

            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">
                  {edu.degree} {edu.field && `in ${edu.field}`}
                </h3>
                <p style={{ color: accentColor }}>{edu.institution}</p>
                <span className="text-sm text-gray-600">
                  {formatDate(edu.graduation_date)}
                </span>
              </div>
            ))}
          </section>
        )}

        {/* SKILLS */}
        {data.skills?.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide mb-4">
              Core Skills
            </h2>

            <div className="flex flex-wrap gap-2 text-sm">
              {data.skills.map((skill, index) => (
                <span key={index} className="border px-3 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProfessionalSplit;