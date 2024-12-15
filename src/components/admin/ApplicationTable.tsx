import React from 'react';
import { Check, X, Eye } from 'lucide-react';

interface Application {
  id: string;
  name: string;
  email: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
}

interface ApplicationTableProps {
  applications: Application[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onView: (id: string) => void;
}

const ApplicationTable: React.FC<ApplicationTableProps> = ({
  applications,
  onApprove,
  onReject,
  onView,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Applicant
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {applications.map((application) => (
            <tr key={application.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {application.name}
                  </div>
                  <div className="text-sm text-gray-500">{application.email}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                  ${application.status === 'approved' ? 'bg-green-100 text-green-800' : 
                    application.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'}`}
                >
                  {application.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {application.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => onView(application.id)}
                  className="text-indigo-600 hover:text-indigo-900 mx-2"
                >
                  <Eye className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onApprove(application.id)}
                  className="text-green-600 hover:text-green-900 mx-2"
                >
                  <Check className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onReject(application.id)}
                  className="text-red-600 hover:text-red-900 mx-2"
                >
                  <X className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;