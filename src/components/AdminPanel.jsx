import React, { useState, useEffect } from 'react';
import { MessageCircle, Users, FileText, Settings, Send, User, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'react-toastify';

const AdminPanel = ({ user, onLogout, chatMessages, setChatMessages }) => {
  const [activeTab, setActiveTab] = useState('chat');
  const [replyMessage, setReplyMessage] = useState('');
  const [clients, setClients] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'online', lastSeen: 'now' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'offline', lastSeen: '2 hours ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'online', lastSeen: 'now' }
  ]);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      clientName: 'John Doe',
      title: 'Research Paper on AI Ethics',
      type: 'Academic Writing',
      status: 'in-progress',
      deadline: '2025-01-25',
      priority: 'high',
      submittedAt: '2025-01-20'
    },
    {
      id: 2,
      clientName: 'Jane Smith',
      title: 'React Dashboard Development',
      type: 'Programming',
      status: 'pending',
      deadline: '2025-01-28',
      priority: 'medium',
      submittedAt: '2025-01-21'
    }
  ]);

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyMessage.trim()) return;

    const newMessage = {
      id: chatMessages.length + 1,
      type: 'agent',
      agentName: 'Sarah Johnson',
      message: replyMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMessages = [...chatMessages, newMessage];
    setChatMessages(updatedMessages);
    setReplyMessage('');
    
    // Play notification sound
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
    audio.play().catch(() => {});
    
    // Show success notification
    toast.success('Reply sent to client successfully!', {
      position: "top-right",
      autoClose: 2000,
    });
  };

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

  const renderChatManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 font-poppins">Live Chat Management</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chat Messages */}
          <div className="border rounded-lg">
            <div className="bg-gray-50 p-4 border-b">
              <h4 className="font-semibold text-gray-900">Recent Messages</h4>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-semibold">
                        {msg.type === 'user' ? (msg.userName || 'Client') : (msg.agentName || 'You')}
                      </span>
                      <span className="text-xs opacity-70">{msg.timestamp}</span>
                    </div>
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Reply Form */}
            <div className="p-4 border-t">
              <form onSubmit={handleSendReply} className="flex space-x-2">
                <input
                  type="text"
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  placeholder="Type your reply..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Online Clients */}
          <div className="border rounded-lg">
            <div className="bg-gray-50 p-4 border-b">
              <h4 className="font-semibold text-gray-900">Online Clients</h4>
            </div>
            <div className="p-4 space-y-3">
              {clients.filter(client => client.status === 'online').map(client => (
                <div key={client.id} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {client.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{client.name}</p>
                    <p className="text-sm text-gray-600">{client.email}</p>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTaskManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 font-poppins">Task Management</h3>
        
        <div className="space-y-4">
          {tasks.map(task => (
            <div key={task.id} className="p-6 bg-gray-50 rounded-lg border hover:bg-white hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 font-poppins mb-2">{task.title}</h4>
                  <p className="text-gray-600 font-lato mb-2">Client: {task.clientName}</p>
                  <p className="text-gray-600 font-lato mb-3">{task.type}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>Due: {task.deadline}</span>
                    </span>
                    <span>Submitted: {task.submittedAt}</span>
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
                <button className="text-green-600 hover:text-green-700 font-medium text-sm">Update Status</button>
                <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">Contact Client</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderClientManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 font-poppins">Client Management</h3>
        
        <div className="space-y-4">
          {clients.map(client => (
            <div key={client.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  client.status === 'online' ? 'bg-green-600' : 'bg-gray-400'
                }`}>
                  <span className="text-white font-bold">
                    {client.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{client.name}</h4>
                  <p className="text-sm text-gray-600">{client.email}</p>
                  <p className="text-xs text-gray-500">Last seen: {client.lastSeen}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  client.status === 'online' 
                    ? 'text-green-600 bg-green-100' 
                    : 'text-gray-600 bg-gray-100'
                }`}>
                  {client.status}
                </span>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 font-poppins">Admin Panel</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Admin: {user.name}</span>
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
                  onClick={() => setActiveTab('chat')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium flex items-center space-x-2 ${
                    activeTab === 'chat' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Live Chat</span>
                </button>
                <button
                  onClick={() => setActiveTab('tasks')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium flex items-center space-x-2 ${
                    activeTab === 'tasks' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  <span>Tasks</span>
                </button>
                <button
                  onClick={() => setActiveTab('clients')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium flex items-center space-x-2 ${
                    activeTab === 'clients' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Users className="h-4 w-4" />
                  <span>Clients</span>
                </button>
              </nav>
            </div>
          </div>

          <div className="lg:w-3/4">
            {activeTab === 'chat' && renderChatManagement()}
            {activeTab === 'tasks' && renderTaskManagement()}
            {activeTab === 'clients' && renderClientManagement()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;