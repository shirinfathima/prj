// src/pages/UserDashboard.js
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  LinearProgress,
  Alert
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Description as DocumentIcon,
  CloudUpload as UploadIcon,
  CheckCircle as CheckIcon,
  Cancel as CancelIcon,
  Schedule as PendingIcon,
  Edit as EditIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout'; // Import the new layout component

function UserDashboard() {
  const navigate = useNavigate();
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    role: 'User',
    avatar: '/static/images/avatar/1.jpg'
  });

  const [documents] = useState([
    {
      id: 1,
      name: 'National ID Card',
      status: 'Approved',
      uploadDate: '2024-09-10',
      confidence: 98
    },
    {
      id: 2,
      name: 'Passport',
      status: 'Pending',
      uploadDate: '2024-09-12',
      confidence: null
    },
    {
      id: 3,
      name: 'Driver License',
      status: 'Rejected',
      uploadDate: '2024-09-08',
      confidence: 65
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'success';
      case 'Pending': return 'warning';
      case 'Rejected': return 'error';
      default: return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved': return <CheckIcon />;
      case 'Pending': return <PendingIcon />;
      case 'Rejected': return <CancelIcon />;
      default: return <DocumentIcon />;
    }
  };

  const getOverallProgress = () => {
    const approvedDocs = documents.filter(doc => doc.status === 'Approved').length;
    return (approvedDocs / documents.length) * 100;
  };
  
  // Sidebar component for User Dashboard
  const userSidebar = (
    <Box>
      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Avatar
            sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}
          >
            <PersonIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {user.email}
          </Typography>
          <Chip label={user.role} color="primary" size="small" />
          <Box sx={{ mt: 3 }}>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={() => navigate('/profile')}
              fullWidth
            >
              Edit Profile
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>Quick Actions</Typography>
          <List>
            <ListItem button onClick={() => navigate('/upload')}>
              <ListItemIcon>
                <UploadIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Upload Document" />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => navigate('/documents')}>
              <ListItemIcon>
                <DocumentIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="View All Documents" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <DashboardLayout sidebar={userSidebar}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
          <DashboardIcon /> Welcome back, {user.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your documents and track verification status
        </Typography>
      </Box>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>Verification Progress</Typography>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2">Overall Progress</Typography>
              <Typography variant="body2">{Math.round(getOverallProgress())}%</Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={getOverallProgress()} 
              sx={{ height: 8, borderRadius: 4 }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {documents.filter(doc => doc.status === 'Approved').length} of {documents.length} documents verified
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 3 }}>Document Status</Typography>
          
          {documents.length === 0 ? (
            <Alert severity="info">
              No documents uploaded yet. Start by uploading your first document.
            </Alert>
          ) : (
            <Grid container spacing={2}>
              {documents.map((document) => (
                <Grid item xs={12} key={document.id}>
                  <Card variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          {getStatusIcon(document.status)}
                          <Box>
                            <Typography variant="subtitle1">{document.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              Uploaded on {new Date(document.uploadDate).toLocaleDateString()}
                            </Typography>
                            {document.confidence && (
                              <Typography variant="body2" color="text.secondary">
                                Confidence: {document.confidence}%
                              </Typography>
                            )}
                          </Box>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Chip
                            label={document.status}
                            color={getStatusColor(document.status)}
                            size="small"
                            sx={{ mb: 1 }}
                          />
                          <Box>
                            {document.status === 'Rejected' && (
                              <Button
                                size="small"
                                variant="outlined"
                                onClick={() => navigate('/upload')}
                              >
                                Re-upload
                              </Button>
                            )}
                            {document.status === 'Approved' && (
                              <Button
                                size="small"
                                variant="outlined"
                                onClick={() => navigate('/verification-result')}
                              >
                                View Details
                              </Button>
                            )}
                          </Box>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Upload New Document Button */}
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button
              variant="contained"
              startIcon={<UploadIcon />}
              onClick={() => navigate('/upload')}
              size="large"
            >
              Upload New Document
            </Button>
          </Box>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}

export default UserDashboard;