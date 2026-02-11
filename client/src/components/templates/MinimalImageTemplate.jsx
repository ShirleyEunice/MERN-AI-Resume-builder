import { Mail, Phone, MapPin } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800">
      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 md:grid-cols-3">

        {/* IMAGE */}
        <div className="md:col-span-1 py-6 md:py-10">
          {data.personal_info?.image && (
            <div className="mb-4 md:mb-6 flex justify-center">
              <img
                src={
                  typeof data.personal_info.image === "string"
                    ? data.personal_info.image
                    : URL.createObjectURL(data.personal_info.image)
                }
                alt="Profile"
                className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full"
                style={{ background: accentColor + "70" }}
              />
            </div>
          )}
        </div>

        {/* NAME + TITLE */}
        <div className="md:col-span-2 flex flex-col justify-center py-4 md:py-10 px-5 md:px-8 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-zinc-700 tracking-widest">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="uppercase text-zinc-600 font-medium text-xs md:text-sm tracking-widest mt-1">
            {data.personal_info?.profession || "Profession"}
          </p>
        </div>

        {/* SIDEBAR */}
        <aside className="md:col-span-1 border-t md:border-t-0 md:border-r border-zinc-300 p-5 md:p-6 md:pt-0">
          {/* CONTACT */}
          <section className="mb-6">
            <h2 className="text-xs font-semibold tracking-widest text-zinc-600 mb-3">
              CONTACT
            </h2>
            <div className="space-y-2 text-sm break-words">
              {data.personal_info?.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.phone}</span>
                </div>
              )}
              {data.personal_info?.email && (
                <div className="flex items-center gap-2">
                  <Mail size={14} style={{ color: accentColor }} />
                  <span className="break-all">{data.personal_info.email}</span>
                </div>
              )}
              {data.personal_info?.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.location}</span>
                </div>
              )}
            </div>
          </section>

          {/* EDUCATION */}
          {data.education?.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xs font-semibold tracking-widest text-zinc-600 mb-3">
                EDUCATION
              </h2>
              <div className="space-y-3 text-sm">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold uppercase">{edu.degree}</p>
                    <p className="text-zinc-600">{edu.institution}</p>
                    <p className="text-xs text-zinc-500">
                      {formatDate(edu.graduation_date)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SKILLS */}
          {data.skills?.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold tracking-widest text-zinc-600 mb-3">
                SKILLS
              </h2>
              <ul className="space-y-1 text-sm">
                {data.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        {/* MAIN CONTENT */}
        <main className="md:col-span-2 p-5 md:p-8 pt-0">
          {/* SUMMARY */}
          {data.professional_summary && (
            <section className="mb-6 md:mb-8">
              <h2 className="text-xs font-semibold tracking-widest mb-3" style={{ color: accentColor }}>
                SUMMARY
              </h2>
              <p className="text-zinc-700 leading-relaxed">{data.professional_summary}</p>
            </section>
          )}

          {/* EXPERIENCE */}
          {data.experience?.length > 0 && (
            <section className="mb-6 md:mb-8">
              <h2 className="text-xs font-semibold tracking-widest mb-4" style={{ color: accentColor }}>
                EXPERIENCE
              </h2>

              <div className="space-y-6">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <h3 className="font-semibold text-zinc-900">{exp.position}</h3>
                      <span className="text-xs text-zinc-500">
                        {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: accentColor }}>
                      {exp.company}
                    </p>
                    {exp.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
                        {exp.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          {data.projects?.length > 0 && (
            <section>
              <h2 className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: accentColor }}>
                PROJECTS
              </h2>

              <div className="space-y-4">
                {data.projects.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-sm md:text-md font-medium text-zinc-800">{project.name}</h3>
                    {project.type && (
                      <p className="text-sm mb-1" style={{ color: accentColor }}>
                        {project.type}
                      </p>
                    )}
                    {project.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
                        {project.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;
