import Button from '@/components/ui/Button';
import { authOption } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React, { useEffect, useState } from 'react';

interface DashboardProps {}

const Dashboard = async ({}) => {
  const session = await getServerSession(authOption);
  return <pre>{JSON.stringify(session)}</pre>;
};

export default Dashboard;
