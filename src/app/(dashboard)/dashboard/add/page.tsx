import AddFriendButton from '@/components/AddFrBtn';
import React, { useEffect, useState } from 'react';

interface AddFriendProps {}

const AddFriend: React.FC<AddFriendProps> = ({}) => {
  return (
    <main className="pt-10">
      <h1 className="font-bold text-5xl mb-8">Add a friend</h1>
      <AddFriendButton />
    </main>
  );
};

export default AddFriend;
