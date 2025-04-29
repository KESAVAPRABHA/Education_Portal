import React from 'react';
import { useParams } from 'react-router-dom';

const ExamDetails = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Exam Details</h1>
      <div className="bg-white rounded-lg shadow p-6">
        {/* Exam details content will be implemented later */}
        <p className="text-gray-600">Loading details for exam {id}...</p>
      </div>
    </div>
  );
};

export default ExamDetails;