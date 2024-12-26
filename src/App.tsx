import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import MemoTable from './components/MemoTable';
import AddEntryForm from './components/AddEntryForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [entries, setEntries] = useState<any[]>([]);

  const handleAddEntry = (entry: any) => {
    setEntries([...entries, entry]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-green-500 p-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white">MEMO</h1>
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
              >
                <PlusCircle size={20} />
                Add New
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6">
            {showForm ? (
              <AddEntryForm onSubmit={handleAddEntry} onCancel={() => setShowForm(false)} />
            ) : (
              <MemoTable entries={entries} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;