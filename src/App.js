import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  background-color: #1f1f1f;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #2b2b2b;
  color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const WelcomeMessage = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const WriteStoryButton = styled(Link)`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background-color: #45a049;
  }
`;

const ProgressBar = styled(CircularProgressbar)`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

const WritingOverview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { month: 'Jun', 'All stories': 36, 'Completed stories': 18 },
      { month: 'Jul', 'All stories': 42, 'Completed stories': 22 },
      { month: 'Aug', 'All stories': 45, 'Completed stories': 26 }
    ]);
  }, []);

  return (
    <div>
      <h3>Writing Overview</h3>
      <LineChart width={600} height={400} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="All stories" stroke="#8884d8" />
        <Line type="monotone" dataKey="Completed stories" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

const MyProgress = () => {
  return (
    <div>
      <h3>My Progress</h3>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <ProgressBar value={23} text="23%" strokeWidth={10} styles={buildStyles({ textColor: '#fff', pathColor: '#4CAF50' })} />
        <div>
          <h4>Word Challenge</h4>
          <p>Write 1000 words daily</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <ProgressBar value={11} text="11%" strokeWidth={10} styles={buildStyles({ textColor: '#fff', pathColor: '#4CAF50' })} />
        <div>
          <h4>Story Challenge</h4>
          <p>Complete 10 Stories monthly</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <ProgressBar value={38} text="38%" strokeWidth={10} styles={buildStyles({ textColor: '#fff', pathColor: '#4CAF50' })} />
        <div>
          <h4>Reading Challenge</h4>
          <p>Read 5 articles weekly</p>
        </div>
      </div>
    </div>
  );
};

const StoryTemplates = () => {
  return (
    <div>
      <h3>Story Templates</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ border: '1px solid #4CAF50', padding: '10px', borderRadius: '4px' }}>
          <h4>My first day in high school</h4>
          <p>Fiction</p>
        </div>
        <div style={{ border: '1px solid #4CAF50', padding: '10px', borderRadius: '4px' }}>
          <h4>An adventurous trip to Atlanta</h4>
          <p>Non-fiction</p>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <Wrapper>
      <Sidebar>
        <div style={{ marginBottom: '20px' }}>
          <img src="/avatar.png" alt="Profile" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
          <p>John Doe</p>
          <p>Beginner</p>
        </div>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                Dashboard
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/story-templates" style={{ color: 'white', textDecoration: 'none' }}>
                Story Templates
              </Link>
            </li>
          </ul>
        </nav>
      </Sidebar>
      <Content>
        <Header>
          <WelcomeMessage>Welcome back John,</WelcomeMessage>
          <WriteStoryButton to="/write-story">Write story</WriteStoryButton>
        </Header>
        <Switch>
          <Route path="/story-templates">
            <StoryTemplates />
          </Route>
          <Route path="/">
            <WritingOverview />
            <MyProgress />
          </Route>
        </Switch>
      </Content>
    </Wrapper>
  );
};

const App = () => {
  return (
    <Router>
      <Dashboard />
    </Router>
  );
};

export default App;
