import React from 'react';
import { useParams } from 'react-router-dom';

const CollegeDetails = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">College Details</h1>
      <div className="bg-white rounded-lg shadow p-6">
        {/* College details content will be implemented later */}
        <p className="text-gray-600">Loading details for college {id}...</p>
      </div>
    </div>
  );
};

export default CollegeDetails;