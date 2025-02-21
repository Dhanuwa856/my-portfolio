import React from "react";
import "./Skills.css";
import React_icon from "../../assets/tools/react.png";
import Node_icon from "../../assets/tools/node.png";
import Tailwind_icon from "../../assets/tools/tailwind.png";
import Mongo_icon from "../../assets/tools/mongodb.png";
import Express_icon from "../../assets/tools/express.png";
import JS_icon from "../../assets/tools/js.gif";
import Python_icon from "../../assets/tools/python.gif";
import Php_icon from "../../assets/tools/php.png";
import SkillCard from "../SkillCard/SkillCard";

const Skills = () => {
  const skillsList = [
    { name: "javaScript", icon: JS_icon },
    { name: "React", icon: React_icon },
    { name: "TailwindCSS", icon: Tailwind_icon },
    { name: "NodeJS", icon: Node_icon },
    { name: "MonogoDB", icon: Mongo_icon },
    { name: "ExpressJS", icon: Express_icon },
    { name: "Python", icon: Python_icon },
    { name: "PHP", icon: Php_icon },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {skillsList.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
