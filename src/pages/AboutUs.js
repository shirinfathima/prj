import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Info as InfoIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Shield as ShieldIcon,
  Visibility as VisionIcon,
  Psychology as AiIcon,
  Scanner as OcrIcon,
  LinkIcon,
  Code as CodeIcon,
  Group as TeamIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';

function AboutUs() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      avatar: '/static/images/avatar/sarah.jpg',
      expertise: 'AI & Machine Learning'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Security',
      avatar: '/static/images/avatar/michael.jpg',
      expertise: 'Blockchain & Cryptography'
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Developer',
      avatar: '/static/images/avatar/emily.jpg',
      expertise: 'Full Stack Development'
    },
    {
      name: 'David Park',
      role: 'Product Manager',
      avatar: '/static/images/avatar/david.jpg',
      expertise: 'Product Strategy'
    }
  ];

  const technologies = [
    {
      name: 'Artificial Intelligence',
      icon: <AiIcon />,
      description: 'Advanced ML algorithms for document verification and fraud detection'
    },
    {
      name: 'OCR Technology',
      icon: <OcrIcon />,
      description: 'Tesseract-based optical character recognition for accurate data extraction'
    },
    {
      name: 'Blockchain',
      icon: <LinkIcon />,
      description: 'Immutable ledger for secure verification record storage'
    },
    {
      name: 'Spring Boot',
      icon: <CodeIcon />,
      description: 'Robust Java framework for scalable backend services'
    },
    {
      name: 'React.js',
      icon: <CodeIcon />,
      description: 'Modern frontend framework for responsive user interfaces'
    },
    {
      name: 'Advanced Security',
      icon: <SecurityIcon />,
      description: 'Multi-layered security protocols and fraud prevention systems'
    }
  ];

  const features = [
    'AI-powered document verification with 99.2% accuracy',
    'Blockchain-based immutable verification records',
    'Real-time fraud detection and prevention',
    'OCR technology supporting 50+ document types',
    'Multi-language support for global accessibility',
    'Enterprise-grade security and compliance',
    'APIs for seamless third-party integration',
    'Advanced analytics and reporting dashboards'
  ];

  const milestones = [
    { year: '2022', event: 'TrustNet founded with vision for secure digital identity' },
    { year: '2023', event: 'First AI verification engine launched' },
    { year: '2023', event: 'Blockchain integration completed' },
    { year: '2024', event: 'Reached 1M+ verified documents milestone' },
    { year: '2024', event: 'Fraud detection rate improved to 99.7%' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <InfoIcon sx={{ fontSize: 40 }} />
          About TrustNet
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Pioneering the future of secure digital identity verification through cutting-edge AI, 
          blockchain technology, and advanced fraud detection systems.
        </Typography>
      </Box>

      {/* Mission & Vision */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <VisionIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2 }}>Our Vision</Typography>
              <Typography variant="body1" color="text.secondary">
                To create a world where digital identity verification is seamless, secure, and universally trusted. 
                We envision a future where individuals have complete control over their digital identity while 
                maintaining the highest levels of security and privacy.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <ShieldIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2 }}>Our Mission</Typography>
              <Typography variant="body1" color="text.secondary">
                To provide the most advanced, secure, and user-friendly identity verification platform. 
                We leverage AI, blockchain, and advanced analytics to protect against fraud while ensuring 
                legitimate users have a smooth and efficient verification experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Technology Stack */}
      <Card sx={{ mb: 6 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 4, textAlign: 'center' }}>
            Technology & Innovation
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Our platform combines state-of-the-art technologies to deliver unparalleled security and performance
          </Typography>
          
          <Grid container spacing={3}>
            {technologies.map((tech, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {tech.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {tech.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {tech.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card sx={{ mb: 6 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Platform Features & Capabilities
          </Typography>
          <Grid container spacing={2}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Team Section */}
      <Card sx={{ mb: 6 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 4, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <TeamIcon />
            Meet Our Team
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Our diverse team of experts brings together decades of experience in AI, security, and software engineering
          </Typography>
          
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card variant="outlined">
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar
                      sx={{ 
                        width: 80, 
                        height: 80, 
                        mx: 'auto', 
                        mb: 2,
                        bgcolor: 'primary.main',
                        fontSize: '2rem'
                      }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                      {member.role}
                    </Typography>
                    <Chip 
                      label={member.expertise} 
                      size="small" 
                      variant="outlined"
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Company Milestones */}
      <Card sx={{ mb: 6 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Our Journey
          </Typography>
          <List>
            {milestones.map((milestone, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemIcon>
                    <Chip 
                      label={milestone.year} 
                      color="primary" 
                      sx={{ minWidth: 60 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={milestone.event} />
                </ListItem>
                {index < milestones.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Company Stats */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" color="primary.main">1M+</Typography>
            <Typography variant="body2" color="text.secondary">Documents Verified</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" color="success.main">99.7%</Typography>
            <Typography variant="body2" color="text.secondary">Fraud Detection Rate</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" color="info.main">50+</Typography>
            <Typography variant="body2" color="text.secondary">Supported Document Types</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" color="warning.main">24/7</Typography>
            <Typography variant="body2" color="text.secondary">System Monitoring</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Contact Information */}
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Get in Touch
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>Corporate Headquarters</Typography>
              <Typography variant="body2" color="text.secondary">
                TrustNet Technologies Inc.<br/>
                123 Innovation Drive, Suite 500<br/>
                San Francisco, CA 94105<br/>
                United States
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>Contact Details</Typography>
              <Typography variant="body2" color="text.secondary">
                Email: info@trustnet.com<br/>
                Phone: +1 (555) 123-4567<br/>
                Support: support@trustnet.com<br/>
                Sales: sales@trustnet.com
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AboutUs;