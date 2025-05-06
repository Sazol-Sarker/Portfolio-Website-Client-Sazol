import * as Icons from "react-icons/si";
const Skill = ({ skill }) => {
  console.log("skill in skill.jsx", skill);
  return (
    <div className="card bg-[#120E17] w-full max-w-lg mx-auto shadow-sm">
      <div className="card-body text-white">
        <h2 className="card-title">{skill.category}</h2>
        {/* badges */}
        <div className="card-actions justify-start">
          {skill.technologies.map((tech, idx) => {
            const IconComponent = Icons[tech.icon];
            return (
              <div key={idx} className="badge badge-outline">
                {IconComponent && (
                  <IconComponent
                    className="text-[#61DAFB]
"
                  ></IconComponent>
                )}
                {tech.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
