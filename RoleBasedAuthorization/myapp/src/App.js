import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './components/LoginForm';
import Navbar from './components/navbar';
import AdminPage from './pages/AdminPage';
import EditorPage from './pages/EditorPage';
import ViewerPage from './pages/ViewerPage';
import './App.css';

const Unauthorized = () => (
  <div className="unauthorized-page">
    <h1>Unauthorized Access</h1>
    <p>You don't have permission to access this page.</p>
  </div>
);

const Home = () => <h1>Welcome to the Home Page</h1>;

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Admin Route */}
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin" element={<AdminPage />} />
            </Route>

            {/* Editor Route */}
            <Route element={<ProtectedRoute allowedRoles={['admin', 'editor']} />}>
              <Route path="/editor" element={<EditorPage />} />
            </Route>

            {/* Viewer Route */}
            <Route element={<ProtectedRoute allowedRoles={['admin', 'editor', 'viewer']} />}>
              <Route path="/viewer" element={<ViewerPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
