import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, MoreVertical, ArrowLeft, Paperclip, Smile, 
  Mic, Send, Phone, Video, Info, Check, CheckCheck 
} from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../../redux/UserSlice';

const Chat = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, Fullname: 'John Doe', status: 'Online', lastSeen: '', unread: 0, avatar: 'JD', isOnline: true },
    { id: 2, Fullname: 'Jane Smith', status: 'Hey there! I am using WhatsApp', lastSeen: '2:45 PM', unread: 3, avatar: 'JS', isOnline: false },
    { id: 3, Fullname: 'Alice Johnson', status: 'Busy right now', lastSeen: '10:30 AM', unread: 0, avatar: 'AJ', isOnline: true },
    { id: 4, Fullname: 'Bob Williams', status: 'Available', lastSeen: 'Yesterday', unread: 1, avatar: 'BW', isOnline: true },
    { id: 5, Fullname: 'Emily Brown', status: 'At work', lastSeen: '12:22 PM', unread: 0, avatar: 'EB', isOnline: false },
    { id: 6, Fullname: 'Michael Davis', status: 'In a meeting', lastSeen: '11:05 AM', unread: 7, avatar: 'MD', isOnline: false },
    { id: 7, Fullname: 'Sarah Miller', status: 'Sleeping', lastSeen: 'Yesterday', unread: 0, avatar: 'SM', isOnline: false },
    { id: 8, Fullname: 'David Wilson', status: 'Online', lastSeen: '', unread: 0, avatar: 'DW', isOnline: true },
  ]);

  // Sample messages
  const [messages, setMessages] = useState({
    1: [
      { id: 1, text: 'Hey there!', sender: 'them', time: '10:00 AM', status: 'read' },
      { id: 2, text: 'Hello! How are you?', sender: 'me', time: '10:02 AM', status: 'read' },
      { id: 3, text: "I'm doing great! Thanks for asking. What about you?", sender: 'them', time: '10:05 AM', status: 'read' },
      { id: 4, text: "I'm good too. Just working on a new project.", sender: 'me', time: '10:07 AM', status: 'read' },
      { id: 5, text: "That's awesome! What kind of project?", sender: 'them', time: '10:10 AM', status: 'read' },
    ],
    2: [
      { id: 1, text: 'Hi Jane!', sender: 'me', time: '9:30 AM', status: 'read' },
      { id: 2, text: 'Hello!', sender: 'them', time: '9:32 AM', status: 'read' },
      { id: 3, text: 'Are you available for a quick call?', sender: 'me', time: '9:35 AM', status: 'read' },
      { id: 4, text: 'Sorry, I’m in a meeting right now.', sender: 'them', time: '9:40 AM', status: 'read' },
    ],
    3: [
      { id: 1, text: 'Good morning!', sender: 'them', time: '8:15 AM', status: 'read' },
      { id: 2, text: 'Morning Alice!', sender: 'me', time: '8:20 AM', status: 'read' },
    ],
  });

  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef(null);
  const dispatch = useDispatch();

  const socket = useSelector((state) => state.socket?.socket);
  const user = useSelector((state) => state.user?.user);
  const allUsers = useSelector((state) => state.user?.allUsers);

  // setUsers(allUsers)
  // Filter users based on search term
  const filteredUsers = users.filter(user => 
    user.Fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get messages for selected user
  const currentMessages = messages[selectedUser.id] || [];

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    scrollToBottom();
  }, [currentMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: currentMessages.length + 1,
      text: newMessage,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages(prev => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), newMsg]
    }));

    socket.emit("sendMessage", {
      sender: user._id,
      receiver: selectedUser.id,
      message: newMessage
    });

    setNewMessage('');

    // Simulate reply after a delay
    setTimeout(() => {
      const reply = {
        id: currentMessages.length + 2,
        text: "Thanks for your message! I'll get back to you soon.",
        sender: 'them',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'read'
      };

      setMessages(prev => ({
        ...prev,
        [selectedUser.id]: [...(prev[selectedUser.id] || []), reply]
      }));
    }, 2000);
  };

  // Handle key press (Enter to send)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  //connect the user for chat 
  useEffect(()=>{
    dispatch(getAllUsers())
  },[])

  return (
    <div className="flex h-[calc(100vh-5rem)] bg-gray-100 border">
      {/* Sidebar with user list */}
      <div className="w-1/3 bg-white border-r border-gray-300 flex flex-col">
        {/* Sidebar header */}
        <div className="p-4 border-b border-gray-300 flex justify-between items-center bg-gray-50">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
              ME
            </div>
            <span className="ml-3 font-semibold">My Account</span>
          </div>
          <div className="flex space-x-4">
            <MoreVertical size={20} className="text-gray-600 cursor-pointer" />
          </div>
        </div>

        {/* Search bar */}
        <div className="p-3 bg-gray-50 border-b border-gray-300">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search or start new chat"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* User list */}
        <div className="flex-1 overflow-y-auto">
          {filteredUsers.map(user => (
            <div
              key={user.id}
              className={`flex items-center p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${selectedUser.id === user.id ? 'bg-green-50' : ''}`}
              onClick={() => setSelectedUser(user)}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${user.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}>
                {user.avatar}
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <span className="text-xs text-gray-500">{user.lastSeen}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-gray-600 truncate">{user.status}</p>
                  {user.unread > 0 && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      {user.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="w-2/3 flex flex-col">
        {/* Chat header */}
        <div className="p-4 border-b border-gray-300 flex justify-between items-center bg-gray-50">
          <div className="flex items-center">
            <ArrowLeft size={20} className="text-gray-600 cursor-pointer md:hidden mr-4" />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${selectedUser.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}>
              {selectedUser.avatar}
            </div>
            <div className="ml-3">
              <h3 className="font-semibold text-gray-900">{selectedUser.name}</h3>
              <p className="text-xs text-gray-600">
                {selectedUser.isOnline ? 'Online' : `Last seen ${selectedUser.lastSeen}`}
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Phone size={20} className="text-gray-600 cursor-pointer" />
            <Video size={20} className="text-gray-600 cursor-pointer" />
            <Info size={20} className="text-gray-600 cursor-pointer" />
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-100 bg-chat-pattern bg-repeat bg-center bg-16">
          <div className="space-y-4">
            {currentMessages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === 'me' ? 'bg-green-100' : 'bg-white'} shadow-sm`}
                >
                  <p className="text-gray-800">{message.text}</p>
                  <div className={`flex items-center mt-1 text-xs ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                    <span className="text-gray-500">{message.time}</span>
                    {message.sender === 'me' && (
                      <span className="ml-1">
                        {message.status === 'sent' ? <Check size={14} className="text-gray-500" /> : <CheckCheck size={14} className="text-blue-500" />}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Message input area */}
        <div className="p-4 border-t border-gray-300 bg-gray-50">
          <div className="flex items-center">
            <div className="flex space-x-2 mr-3">
              <Smile size={20} className="text-gray-600 cursor-pointer" />
              <Paperclip size={20} className="text-gray-600 cursor-pointer" />
            </div>
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="ml-3">
              {newMessage ? (
                <Send 
                  size={20} 
                  className="text-green-600 cursor-pointer" 
                  onClick={handleSendMessage}
                />
              ) : (
                <Mic size={20} className="text-gray-600 cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;