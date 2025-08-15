import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Minimize2, User } from 'lucide-react';
import { toast } from 'react-toastify';

const LiveChat = ({ isOpen, onToggle, user, chatMessages, setChatMessages }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      agentName: 'Sarah Johnson',
      message: 'Hello! How can I help you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (chatMessages.length > 0) {
      setMessages(chatMessages);
    }
  }, [chatMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      userName: user?.name || 'Guest',
      message: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setChatMessages(updatedMessages);
    setInputMessage('');

    // Play notification sound
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
    audio.play().catch(() => {}); // Ignore errors if audio can't play

    // Show toast notification
    toast.success('Message sent successfully!', {
      position: "top-right",
      autoClose: 2000,
    });

    // Simulate bot response
    setTimeout(() => {
      const agentResponse = {
        id: updatedMessages.length + 1,
        type: 'agent',
        agentName: 'Sarah Johnson',
        message: "Thank you for your message! I'm here to help you with any questions about our academic writing and programming services. How can I assist you today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      const finalMessages = [...updatedMessages, agentResponse];
      setMessages(finalMessages);
      setChatMessages(finalMessages);
      
      // Play notification sound for agent response
      const responseAudio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
      responseAudio.play().catch(() => {});
      
      // Show notification for agent response
      toast.info('New message from Sarah Johnson', {
        position: "top-right",
        autoClose: 3000,
      });
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          1
        </div>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border z-50 transition-all ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <MessageCircle className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-semibold font-poppins">Live Support</h3>
            <p className="text-xs text-blue-100">Sarah Johnson - Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white hover:text-blue-200 transition-colors"
          >
            <Minimize2 className="h-4 w-4" />
          </button>
          <button
            onClick={onToggle}
            className="text-white hover:text-blue-200 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.type === 'user' ? 'bg-blue-600' : 'bg-gradient-to-r from-green-500 to-teal-500'
                  }`}>
                    {msg.type === 'user' ? (
                      <span className="text-white text-xs font-bold">
                        {(msg.userName || 'U').charAt(0).toUpperCase()}
                      </span>
                    ) : (
                      <span className="text-white text-xs font-bold">
                        {(msg.agentName || 'Agent').charAt(0).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    msg.type === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-sm' 
                      : 'bg-green-100 text-gray-800 rounded-bl-sm border border-green-200'
                  }`}>
                    {msg.type === 'agent' && (
                      <p className="text-xs font-semibold text-green-700 mb-1">
                        {msg.agentName || 'Support Agent'}
                      </p>
                    )}
                    <p className="text-sm font-lato leading-relaxed">{msg.message}</p>
                    <p className={`text-xs mt-1 ${
                      msg.type === 'user' ? 'text-blue-100' : 'text-green-600'
                    }`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-lato"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default LiveChat;