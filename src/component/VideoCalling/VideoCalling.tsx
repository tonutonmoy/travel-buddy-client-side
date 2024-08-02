


"use client";
import React, { useState } from 'react';
import AgoraUIKit from 'agora-react-uikit';
import { useRouter } from 'next/navigation';

const VideoCalling = ({ id }: { id: string }) => {
  const [videoCall, setVideoCall] = useState(true);
  const router = useRouter();

  const rtcProps = {
    appId: "28be5fdf07084ff09b7b64b131134d9e" || "test",
    channel: id,
    token: null,
  };

  const callbacks = {
    EndCall: () => {
      setVideoCall(false);
      router.push('/dashboard');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
    UserJoined: (user:any) => {
      console.log('User Joined:', user);
    },
    UserLeft: (user:any)  => {
      console.log('User Left:', user);
    },
    UserPublished: (user:any, mediaType:any) => {
      console.log('User Published:', user, mediaType);
    },
    UserUnpublished: (user:any, mediaType:any) => {
      console.log('User Unpublished:', user, mediaType);
    },
  };

  return videoCall ? (
    <div style={{ display: 'flex', gap:"10px", width: '100%', height: '100vh' }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default VideoCalling;

