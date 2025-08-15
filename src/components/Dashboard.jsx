import React, { useState } from 'react';
import { Plus, FileText, Clock, CheckCircle, AlertCircle, Upload, Send } from 'lucide-react';
import { toast } from 'react-toastify';

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Research Paper on AI Ethics',
      type: 'Academic Writing',
      status: 'in-progress',
      deadline: '2025-01-25',
      priority: 'high'
    },
    {
      id: 2,
      title: 'React Dashboard Development',
      type: 'Programming',
      status: 'completed',
      deadline: '2025-01-20',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Business Proposal Writing',
      type: 'Business Writing',
      status: 'pending',
      deadline: '2025-01-30',
      priority: 'low'
    }
  ]);

  const [taskForm, setTaskForm] = useState({
    title: '',
    type: 'Academic Writing',
    description: '',
    deadline: '',
    priority: 'medium',
    files: []
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-orange-600 bg-orange-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      ...taskForm,
      status: 'pending'
    };
    setTasks([...tasks, newTask]);
    setTaskForm({
      title: '',
      type: 'Academic Writing',
      description: '',
      deadline: '',
      priority: 'medium',
      files: []
    });
    setShowTaskForm(false);
    
    // Show success notification
    toast.success('Task submitted successfully! We will review it shortly.', {
      position: "top-right",
      autoClose: 4000,
    });
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 font-poppins">Dashboard Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <div className="text-2xl font-bold text-blue-600 font-poppins">{tasks.length}</div>
            <div className="text-blue-700 font-medium">Total Tasks</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <div className="text-2xl font-bold text-yellow-600 font-poppins">
              {tasks.filter(t => t.status === 'pending').length}
            </div>
            <div className="text-yellow-700 font-medium">Pending</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <div className="text-2xl font-bold text-blue-600 font-poppins">
              {tasks.filter(t => t.status === 'in-progress').length}
            </div>
            <div className="text-blue-700 font-medium">In Progress</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="text-2xl font-bold text-green-600 font-poppins">
              {tasks.filter(t => t.status === 'completed').length}
            </div>
            <div className="text-green-700 font-medium">Completed</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 font-poppins">Recent Tasks</h3>
          <button
            onClick={() => setShowTaskForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 font-medium"
          >
            <Plus className="h-4 w-4" />
            <span>New Task</span>
          </button>
        </div>

        <div className="space-y-4">
          {tasks.slice(0, 3).map(task => (
            <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
              <div className="flex items-center space-x-4">
                <FileText className="h-5 w-5 text-gray-600" />
                <div>
                  <h4 className="font-semibold text-gray-900 font-lato">{task.title}</h4>
                  <p className="text-sm text-gray-600">{task.type} • Due: {task.deadline}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTasks = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 font-poppins">All Tasks</h3>
          <button
            onClick={() => setShowTaskForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 font-medium"
          >
            <Plus className="h-4 w-4" />
            <span>New Task</span>
          </button>
        </div>

        <div className="space-y-4">
          {tasks.map(task => (
            <div key={task.id} className="p-6 bg-gray-50 rounded-lg border hover:bg-white hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 font-poppins mb-2">{task.title}</h4>
                  <p className="text-gray-600 font-lato mb-3">{task.type}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>Due: {task.deadline}</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority} priority
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">View Details</button>
                <button className="text-gray-600 hover:text-gray-700 font-medium text-sm">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTaskForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900 font-poppins">Submit New Task</h2>
          <button
            onClick={() => setShowTaskForm(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Plus className="h-6 w-6 rotate-45" />
          </button>
        </div>

        <form onSubmit={handleTaskSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Task Title</label>
            <input
              type="text"
              value={taskForm.title}
              onChange={(e) => setTaskForm({...taskForm, title: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-lato"
              placeholder="Enter your task title"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Task Type</label>
              <select
                value={taskForm.type}
                onChange={(e) => setTaskForm({...taskForm, type: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-lato"
              >
                <option value="Academic Writing">Academic Writing</option>
                <option value="Programming">Programming</option>
                <option value="Business Writing">Business Writing</option>
                <option value="Creative Writing">Creative Writing</option>
                <option value="Technical Documentation">Technical Documentation</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <select
                value={taskForm.priority}
                onChange={(e) => setTaskForm({...taskForm, priority: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-lato"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
            <input
              type="date"
              value={taskForm.deadline}
              onChange={(e) => setTaskForm({...taskForm, deadline: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-lato"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Task Description</label>
            <textarea
              value={taskForm.description}
              onChange={(e) => setTaskForm({...taskForm, description: e.target.value})}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-lato"
              placeholder="Provide detailed instructions for your task..."
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Files (Optional)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-lato mb-2">Drag and drop your files here, or click to browse</p>
              <input
                type="file"
                multiple
                className="hidden"
                onChange={(e) => setTaskForm({...taskForm, files: Array.from(e.target.files)})}
              />
              <button
                type="button"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Choose Files
              </button>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={() => setShowTaskForm(false)}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 font-medium"
            >
              <Send className="h-4 w-4" />
              <span>Submit Task</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 font-poppins">Dashboard</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">Welcome, {user.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border p-4 sticky top-24">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                    activeTab === 'overview' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('tasks')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                    activeTab === 'tasks' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  My Tasks
                </button>
              </nav>
            </div>
          </div>

          <div className="lg:w-3/4">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'tasks' && renderTasks()}
          </div>
        </div>
      </div>

      {showTaskForm && renderTaskForm()}
    </div>
  );
};

export default Dashboard;