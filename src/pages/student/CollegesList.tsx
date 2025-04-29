import React from 'react';

const CollegesList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Colleges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* College list content will be implemented later */}
        <p className="text-gray-600">Loading colleges...</p>
      </div>
    </div>
  );
};

export default CollegesList;