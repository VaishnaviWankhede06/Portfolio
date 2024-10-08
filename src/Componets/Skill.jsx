import React from "react";

const Skill = ({ prodlist }) => {
  const renderList = () => {
    if (prodlist) {
      return prodlist.map((data) => {
        return (
          <div 
            key={data.id}
            className="bg-[#2C2C3A] p-4 rounded-lg shadow-lg hover:bg-[#004080] transition duration-300"
          >
            <div className="border border-gray-600 rounded-lg overflow-hidden mb-4">
              <img
                src={data.image}
                alt={data.skill}
                className="w-full h-24 object-contain"
              />
            </div>
            <span className="block text-center text-lg font-semibold text-[#ECF0F1]">
              {data.skill}
            </span>
          </div>
        );
      });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {renderList()}
      </div>
    </div>
  );
};

export default Skill;
