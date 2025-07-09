import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Login } from './components/auth/Login';
import { SignUp } from './components/auth/SignUp';
import { Dashboard } from './components/dashboard/Dashboard';
import { ClassicNLP } from './components/dashboard/ClassicNLP';
import { RAGBot } from './components/dashboard/RAGBot';
import { AgentCreation } from './components/dashboard/AgentCreation';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" /> : <>{children}</>;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Routes>
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/login" element={<Layout showFooter={false}><PublicRoute><Login /></PublicRoute></Layout>} />
              <Route path="/signup" element={<Layout showFooter={false}><PublicRoute><SignUp /></PublicRoute></Layout>} />
              <Route path="/dashboard" element={<Layout showFooter={false}><ProtectedRoute><Dashboard /></ProtectedRoute></Layout>} />
              <Route path="/dashboard/nlp" element={<Layout showFooter={false}><ProtectedRoute><ClassicNLP /></ProtectedRoute></Layout>} />
              <Route path="/dashboard/rag" element={<Layout showFooter={false}><ProtectedRoute><RAGBot /></ProtectedRoute></Layout>} />
              <Route path="/dashboard/agents" element={<Layout showFooter={false}><ProtectedRoute><AgentCreation /></ProtectedRoute></Layout>} />
            </Routes>
            <Toaster
              position="top-right"
              toastOptions={{
                className: 'dark:bg-gray-800 dark:text-white',
                duration: 3000,
              }}
            />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;