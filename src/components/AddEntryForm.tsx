import React, { useState } from 'react';

interface AddEntryFormProps {
  onSubmit: (entry: any) => void;
  onCancel: () => void;
}

const AddEntryForm: React.FC<AddEntryFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name1: '',
    name2: '',
    date: '',
    kms: '',
    mileage: '',
    place: '',
    disealLiter: '',
    disealAmount: '',
    laberCharge: '',
    drSalary: '',
    rtoPC: '',
    totalCollection: '',
    totalLose: '',
    profite: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
            </label>
            <input
              type={key === 'date' ? 'date' : 'text'}
              name={key}
              value={formData[key as keyof typeof formData]}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Save Entry
        </button>
      </div>
    </form>
  );
};

export default AddEntryForm;